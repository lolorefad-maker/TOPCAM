// الهيدر، قائمة "تصفح الأقسام"، وشريط الفلاتر الجانبي (سعر، ماركة، حساس، مخزون، لون، حرارة لون، مقاس)
(function () {
  const TC_CATS = [
    { id: 'cameras', ar: 'الكاميرات', icon: 'fa-camera', cats: ['cameras'] },
    { id: 'lenses', ar: 'العدسات والفلاتر', icon: 'fa-circle-dot', cats: ['lenses', 'filters'] },
    { id: 'lighting', ar: 'الإضاءة والاستوديو', icon: 'fa-lightbulb', cats: ['lighting', 'stands'] },
    { id: 'audio', ar: 'الصوتيات والمايكات', icon: 'fa-microphone', cats: ['audio'] },
    { id: 'video', ar: 'الفيديو والشاشات', icon: 'fa-display', cats: ['video', 'monitors', 'teleprompters', 'teleprompter', 'wireless_video_and_intercom'] },
    { id: 'gimbals', ar: 'الجيمبل ومانعات الاهتزاز', icon: 'fa-hand', cats: ['gimbals'] },
    { id: 'cages', ar: 'الكيجات والريغ', icon: 'fa-border-all', cats: ['cages'] },
    { id: 'tripods', ar: 'الترايبود والحوامل', icon: 'fa-person-booth', cats: ['tripods'] },
    { id: 'batteries', ar: 'البطاريات والشواحن', icon: 'fa-battery-three-quarters', cats: ['chargers_batteries', 'batteries'] },
    { id: 'bags', ar: 'الحقائب والشنط', icon: 'fa-suitcase', cats: ['bags'] },
    { id: 'memory', ar: 'كروت الذاكرة', icon: 'fa-sd-card', cats: ['memory'] },
    { id: 'accessories', ar: 'الإكسسوارات', icon: 'fa-puzzle-piece', cats: ['accessories', 'caps'] },
  ];
  const BRAND_LOGOS = {
    sony: 'sony', canon: 'canon', dji: 'dji', aputure: 'aputure', godox: 'godox', rode: 'rode', smallrig: 'smallrig',
    sigma: 'sigma', hollyland: 'hollyland', nanlite: 'nanlite', viltrox: 'viltrox', 'k&f concept': 'kf-concept', ulanzi: 'ulanzi',
    feelworld: 'feelworld', colbor: 'colbor', desview: 'desview', lilliput: 'lilliput', seetec: 'seetec', lensgo: 'lensgo',
    qihe: 'qihe', blackmagic: 'blackmagic', fujifilm: 'fujifilm', panasonic: 'panasonic', leica: 'leica', hasselblad: 'hasselblad',
  };
  const COLORS = [
    ['black', 'أسود', '#1f1f1f', /\bblack\b|أسود/i], ['white', 'أبيض', '#ffffff', /\bwhite\b|أبيض/i],
    ['silver', 'فضي', '#c0c4c8', /\bsilver\b|فضي/i], ['grey', 'رمادي', '#8a8f96', /\bgr[ae]y\b|graphite|رمادي/i],
    ['gold', 'ذهبي', '#d4a83a', /\bgold(en)?\b|ذهبي/i], ['red', 'أحمر', '#e0262f', /\bred\b|أحمر/i],
    ['blue', 'أزرق', '#1f6fe0', /\bblue\b|navy|أزرق|كحلي/i], ['green', 'أخضر', '#1f9d4a', /\bgreen\b|أخضر/i],
    ['pink', 'زهري', '#f2a0bf', /\bpink\b|زهري/i], ['purple', 'بنفسجي', '#8b54d6', /\bpurple\b|violet|بنفسجي/i],
    ['orange', 'برتقالي', '#f28a1c', /\borange\b|برتقالي/i], ['yellow', 'أصفر', '#f5d31c', /\byellow\b|أصفر/i],
    ['beige', 'بيج', '#efe3c2', /\bbeige\b|بيج/i], ['brown', 'بني', '#8a5a2f', /\bbrown\b|بني/i],
  ];
  const esc = (s) => String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const jsq = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const price = p => Number(p.price) || 0;
  const bkey = p => (p.brand || '').trim().toLowerCase();
  const brandName = {};

  // ───── صفات كل منتج (تُستخرج من الاسم والمواصفات) ─────
  const attrCache = new Map();
  function attrs(p) {
    const k = p.id + '|' + p.name;
    if (attrCache.has(k)) return attrCache.get(k);
    const txt = [p.name, p.nameEn, p.badge, p.description, JSON.stringify(p.specs || {})].filter(Boolean).join(' ');
    const name = [p.name, p.nameEn].filter(Boolean).join(' ');
    const a = { sensor: [], stock: [], color: [], temp: [], size: [] };
    if (p.category === 'cameras') {
      if (/full[- ]?frame|فل ?فريم|إطار كامل/i.test(txt)) a.sensor.push('full');
      else if (/aps-?c|crop|super ?35|micro four|mft|1["”]? ?(inch|type)|كروب/i.test(txt)) a.sensor.push(/super ?35/i.test(txt) ? 'super35' : 'crop');
      if (/medium format|gfx|hasselblad x/i.test(txt)) a.sensor.push('medium');
    }
    if (Number(p.oldPrice) > price(p)) a.stock.push('sale');
    const av = String(p.availability || '').toLowerCase();
    if (av.includes('pre') || /طلب مسبق|pre-?order/i.test(p.badge || '')) a.stock.push('preorder');
    else if (av !== 'sold_out' && Number(p.stock) !== 0) a.stock.push('instock');
    COLORS.forEach(([id, , , rx]) => { if (rx.test(name)) a.color.push(id); });
    if (['lighting', 'stands'].includes(p.category) || /light|led|cob/i.test(name)) {
      if (/\brgb\b|rgbww|full colou?r/i.test(name)) a.temp.push('rgb');
      if (/bi-?colou?r|\bbi\b|ثنائي/i.test(name)) a.temp.push('bi');
      else if (/daylight|\b\d{3,4}d\b|\b(sl|ls)\s?\d+\s?(w|d)\b|5600k/i.test(name) && !a.temp.includes('rgb')) a.temp.push('day');
    }
    const sizes = name.match(/\b\d{2,3}(?:\.\d)?\s?[x×*]\s?\d{2,3}(?:\.\d)?\s?(?:cm|m)?\b|\b\d{2,3}\s?cm\b|\b\d(?:\.\d)?\s?[x×]\s?\d(?:\.\d+)?\s?m\b/gi) || [];
    sizes.forEach(s => { const v = s.replace(/\s+/g, '').replace(/[×*]/g, 'x').toLowerCase(); if (!a.size.includes(v)) a.size.push(v); });
    attrCache.set(k, a);
    return a;
  }

  const F = { min: null, max: null, brands: new Set(), sensor: new Set(), stock: new Set(), color: new Set(), temp: new Set(), size: new Set() };
  const LABELS = {
    sensor: { full: 'Full Frame', crop: 'Crop Frame', medium: 'Medium Format', super35: 'Super 35' },
    stock: { sale: 'عليه خصم', instock: 'متوفر', preorder: 'طلب مسبق' },
    temp: { bi: 'Bi-Color', day: 'Daylight', rgb: 'RGB' },
  };
  window.tcShown = 60;
  window.tcLastSearch = '';
  let tcKey = '', base = [];

  function products() { try { return storeDB.getProducts() || []; } catch (e) { return []; } }

  // ───── قائمة "تصفح الأقسام" ─────
  function buildBrowseMenu() {
    const menu = document.getElementById('tcBrowseMenu');
    const sel = document.getElementById('tcDeskSearchCat');
    if (!menu) return;
    const all = products();
    menu.innerHTML = TC_CATS.map(c => {
      const items = all.filter(p => c.cats.includes(p.category));
      const counts = {};
      items.forEach(p => { const b = (p.brand || '').trim(); if (b && b !== 'Universal') counts[b] = (counts[b] || 0) + 1; });
      const brands = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 18);
      return `<div class="tc-bm-item">
        <a href="#" onclick="tcGoCat('${c.id}');return false;">${(window.TC_ICONS||{})[c.id]||''}<span>${c.ar}</span><em>${items.length}</em><i class="fa-solid fa-chevron-left tc-bm-arrow"></i></a>
        ${brands.length ? `<div class="tc-bm-sub"><h5>${c.ar}</h5><div class="tc-bm-grid">${brands.map(([b, n]) =>
          `<a href="#" onclick="tcGoCat('${c.id}','${jsq(b)}');return false;">${esc(b)} <em>${n}</em></a>`).join('')}</div>
          <a href="#" class="tc-bm-all" onclick="tcGoCat('${c.id}');return false;">عرض كل ${c.ar} ←</a></div>` : ''}
      </div>`;
    }).join('');
    if (sel) sel.innerHTML = '<option value="all">كل الأقسام</option>' + TC_CATS.map(c => `<option value="${c.id}">${c.ar}</option>`).join('');
  }

  function resetFilters() { F.min = F.max = null; ['brands', 'sensor', 'stock', 'color', 'temp', 'size'].forEach(k => F[k].clear()); }

  window.tcGoCat = function (id, brand) {
    document.getElementById('tcBrowse')?.classList.remove('open');
    resetFilters();
    if (typeof filterByCategory === 'function') filterByCategory(id);
    if (brand) { F.brands.add(String(brand).trim().toLowerCase()); window.tcApplyFilters(); }
  };

  window.tcDeskSearch = function (go) {
    const q = (document.getElementById('tcDeskSearch')?.value || '').trim();
    const c = document.getElementById('tcDeskSearchCat')?.value || 'all';
    if (!go && q.length === 1) return;
    isShowingAllProducts = true;
    renderStorefrontProducts(c, 'all', q);
    if (go) scrollToProducts();
  };

  function pass(p, skip) {
    const pr = price(p), a = attrs(p);
    if (skip !== 'price' && F.min != null && pr < F.min) return false;
    if (skip !== 'price' && F.max != null && pr > F.max) return false;
    if (skip !== 'brands' && F.brands.size && !F.brands.has(bkey(p))) return false;
    for (const k of ['sensor', 'stock', 'color', 'temp', 'size']) {
      if (skip !== k && F[k].size && !a[k].some(v => F[k].has(v))) return false;
    }
    return true;
  }

  // تُستدعى من renderStorefrontProducts
  window.tcFilterAndSort = function (list, catProducts, cat, search) {
    base = list.slice();
    window.tcLastSearch = search || '';
    const sort = document.getElementById('tcSort')?.value || 'default';
    const key = [cat, search, sort, F.min, F.max, ...['brands', 'sensor', 'stock', 'color', 'temp', 'size'].map(k => [...F[k]].join(','))].join('|');
    if (key !== tcKey) { tcKey = key; window.tcShown = 60; }
    let out = base.filter(p => pass(p));
    if (sort === 'price-asc') out.sort((a, b) => price(a) - price(b));
    else if (sort === 'price-desc') out.sort((a, b) => price(b) - price(a));
    else if (sort === 'name') out.sort((a, b) => String(a.name).localeCompare(String(b.name)));
    else if (sort === 'discount') out.sort((a, b) => ((b.oldPrice || 0) - price(b)) - ((a.oldPrice || 0) - price(a)));
    const cnt = document.getElementById('tcResultCount');
    if (cnt) cnt.textContent = `عرض ${Math.min(out.length, window.tcShown)} من ${out.length} منتج`;
    renderSidebar();
    if (window.tcCatMode) window.tcCatMode(cat, search);
    return out;
  };

  window.tcApplyFilters = function () {
    isShowingAllProducts = true;
    renderStorefrontProducts(currentCategory, currentBrand, window.tcLastSearch);
  };
  window.tcToggle = function (group, val) {
    if (F[group].has(val)) F[group].delete(val); else F[group].add(val);
    window.tcApplyFilters();
  };
  window.tcClearAll = function () { resetFilters(); window.tcApplyFilters(); };

  // ───── رسم الشريط الجانبي ─────
  function counts(group) {
    const m = {};
    base.filter(p => pass(p, group)).forEach(p => {
      const vals = group === 'brands' ? [bkey(p)].filter(Boolean) : attrs(p)[group];
      if (group === 'brands' && p.brand) { const k = bkey(p); const nm = p.brand.trim(); if (!brandName[k] || (nm !== nm.toUpperCase() && brandName[k] === brandName[k].toUpperCase())) brandName[k] = nm; }
      vals.forEach(v => { m[v] = (m[v] || 0) + 1; });
    });
    return m;
  }
  const widget = (title, body) => `<section class="tc-w"><h4 class="tc-w-title">${title}</h4>${body}</section>`;
  const listRow = (group, val, label, n, extra = '') =>
    `<li><label class="tc-chk ${F[group].has(val) ? 'on' : ''}" onclick="tcToggle('${group}','${jsq(val)}');return false;"><span class="tc-box"></span>${extra}<span class="tc-lbl">${label}</span><span class="tc-cnt">${n}</span></label></li>`;

  function renderSidebar() {
    const body = document.getElementById('tcSideBody');
    if (!body) return;
    const prices = base.map(price).filter(x => x > 0);
    const lo = prices.length ? Math.floor(Math.min(...prices)) : 0;
    const hi = prices.length ? Math.ceil(Math.max(...prices)) : 0;
    const vMin = F.min != null ? F.min : lo, vMax = F.max != null ? F.max : hi;
    let html = '';
    const active = ['brands', 'sensor', 'stock', 'color', 'temp', 'size'].reduce((s, k) => s + F[k].size, 0) + (F.min != null || F.max != null ? 1 : 0);
    const ac = document.getElementById('tcActiveCount'); if (ac) ac.textContent = active ? active : '';
    if (active) html += `<button class="tc-clear" onclick="tcClearAll()"><i class="fa-solid fa-xmark"></i> مسح كل الفلاتر (${active})</button>`;

    // السعر
    html += widget('فلتر حسب السعر', `
      <div class="tc-range" style="--a:${hi > lo ? (vMin - lo) / (hi - lo) * 100 : 0}%;--b:${hi > lo ? (vMax - lo) / (hi - lo) * 100 : 100}%">
        <div class="tc-range-track"></div>
        <input type="range" min="${lo}" max="${hi}" value="${vMin}" step="1" oninput="tcRangeMove(this,0)">
        <input type="range" min="${lo}" max="${hi}" value="${vMax}" step="1" oninput="tcRangeMove(this,1)">
      </div>
      <div class="tc-price-row"><span>السعر: <b id="tcRngMin" class="font-en">${vMin}</b> د.أ — <b id="tcRngMax" class="font-en">${vMax}</b> د.أ</span>
      <button class="tc-filter-btn" onclick="tcRangeApply()">فلترة</button></div>`);

    // الماركة
    const bc = counts('brands');
    const bq = (document.getElementById('tcBrandSearch')?.value || '');
    const brands = Object.entries(bc).sort((a, b) => b[1] - a[1]);
    if (brands.length) {
      html += widget('فلتر حسب الماركة', `
        <div class="tc-brand-search"><input id="tcBrandSearch" type="text" placeholder="ابحث عن ماركة" value="${esc(bq)}" oninput="tcBrandFilter(this.value)"><i class="fa-solid fa-magnifying-glass"></i></div>
        <ul class="tc-brand-grid" id="tcBrandGrid">${brands.map(([b, n]) => {
          const logo = BRAND_LOGOS[b]; const nm = brandName[b] || b;
          return `<li data-b="${esc(b)}" title="${esc(nm)} (${n})"><label class="tc-chk ${F.brands.has(b) ? 'on' : ''}" onclick="tcToggle('brands','${jsq(b)}');return false;"><span class="tc-box"></span>${logo ? `<img src="images/brands/${logo}.svg" alt="${esc(nm)}" loading="lazy">` : `<span class="tc-bname">${esc(nm)}</span>`}</label></li>`;
        }).join('')}</ul>`);
    }

    // حجم الحساس
    const sc = counts('sensor');
    const sk = ['crop', 'full', 'medium', 'super35'].filter(k => sc[k] || F.sensor.has(k));
    if (sk.length) html += widget('فلتر حسب حجم الحساس', `<ul class="tc-list">${sk.map(k => listRow('sensor', k, LABELS.sensor[k], sc[k] || 0)).join('')}</ul>`);

    // حالة المخزون
    const stc = counts('stock');
    html += widget('حالة المخزون', `<ul class="tc-list">${['sale', 'instock', 'preorder'].map(k => listRow('stock', k, LABELS.stock[k], stc[k] || 0)).join('')}</ul>`);

    // اللون
    const cc = counts('color');
    const cols = COLORS.filter(([id]) => cc[id] || F.color.has(id));
    if (cols.length) html += widget('فلتر حسب اللون', `<ul class="tc-swatches">${cols.map(([id, ar, hex]) =>
      `<li><button class="tc-sw ${F.color.has(id) ? 'on' : ''}" style="--c:${hex}" title="${ar} (${cc[id] || 0})" onclick="tcToggle('color','${id}')"></button></li>`).join('')}</ul>`);

    // حرارة اللون
    const tc = counts('temp');
    const tk = ['bi', 'day', 'rgb'].filter(k => tc[k] || F.temp.has(k));
    if (tk.length) html += widget('فلتر حسب حرارة اللون', `<ul class="tc-list">${tk.map(k => listRow('temp', k, LABELS.temp[k], tc[k] || 0, `<span class="tc-temp tc-temp-${k}"></span>`)).join('')}</ul>`);

    // المقاس
    const zc = counts('size');
    const zs = Object.entries(zc).filter(([, n]) => n > 0).sort((a, b) => b[1] - a[1]).slice(0, 40);
    if (zs.length) html += widget('فلتر حسب المقاس', `<ul class="tc-sizes">${zs.map(([v, n]) =>
      `<li><button class="tc-size ${F.size.has(v) ? 'on' : ''}" onclick="tcToggle('size','${jsq(v)}')" title="${n}"><span class="font-en">${esc(v)}</span></button></li>`).join('')}</ul>`);

    body.innerHTML = html;
    if (bq) window.tcBrandFilter(bq);
  }

  window.tcBrandFilter = function (q) {
    q = (q || '').toLowerCase();
    document.querySelectorAll('#tcBrandGrid li').forEach(li => { li.style.display = !q || li.dataset.b.includes(q) ? '' : 'none'; });
  };
  window.tcRangeMove = function (el, i) {
    const box = el.parentElement, [a, b] = box.querySelectorAll('input');
    let v0 = +a.value, v1 = +b.value;
    if (v0 > v1) { if (i === 0) a.value = v0 = v1; else b.value = v1 = v0; }
    const lo = +a.min, hi = +a.max, span = hi - lo || 1;
    box.style.setProperty('--a', (v0 - lo) / span * 100 + '%');
    box.style.setProperty('--b', (v1 - lo) / span * 100 + '%');
    document.getElementById('tcRngMin').textContent = v0;
    document.getElementById('tcRngMax').textContent = v1;
  };
  window.tcRangeApply = function () {
    const [a, b] = document.querySelectorAll('.tc-range input');
    F.min = +a.value > +a.min ? +a.value : null;
    F.max = +b.value < +b.max ? +b.value : null;
    window.tcApplyFilters();
  };
  window.tcSideToggle = function (on) {
    document.getElementById('tcSidebar')?.classList.toggle('open', on);
    document.getElementById('tcSideBackdrop')?.classList.toggle('open', on);
    document.body.style.overflow = on ? 'hidden' : '';
  };

  document.addEventListener('click', (e) => {
    const b = document.getElementById('tcBrowse');
    if (b && !b.contains(e.target)) b.classList.remove('open');
  });

  function init() {
    if (typeof storeDB === 'undefined' || !products().length) return setTimeout(init, 400);
    buildBrowseMenu();
    base = products();
    renderSidebar();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.addEventListener('products_updated', () => { attrCache.clear(); buildBrowseMenu(); });
})();

// ───── القائمة الجانبية على الموبايل: أيقونات خطية بدل المربعات الملونة ─────
(function () {
  const MAP = { cameras: 'cameras', lenses: 'lenses', lightingandstudio: 'lighting', audio: 'audio', video: 'video', 'tripods-and-support': 'tripods',
    'batteries-power': 'batteries', 'bags-cases': 'bags', 'memory-storage': 'memory', mobile: 'mobile', accessories: 'accessories' };
  function swap() {
    if (!window.TC_ICONS) return setTimeout(swap, 300);
    document.querySelectorAll('#mobileDrawer .sidebar-cat-group').forEach(g => {
      const key = MAP[g.dataset.cat]; const box = g.querySelector('.w-8.h-8');
      if (key && box && window.TC_ICONS[key]) { box.className = 'tc-dr-ico'; box.innerHTML = window.TC_ICONS[key]; }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', swap); else swap();
})();
