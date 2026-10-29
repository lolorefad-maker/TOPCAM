/* TOP CAM — About page: shutter intro, hero, brands strip, manifesto, the eight categories around a lens,
   the product ring and its brand colours, the product tunnel, how we work, AR/EN.
   Products, counts and brands come live from /api/catalog. */
(function () {
  'use strict';

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const smooth = (t) => t * t * (3 - 2 * t);
  const pad = (n) => String(n).padStart(2, '0');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } },
  };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  /* ---------------- content ---------------- */

  const T = {
    ar: {
      brand: 'توب كام', 'intro.tag': 'كاميرات · عدسات · إضاءة · صوت',
      'nav.about': 'قصتنا', 'nav.cats': 'الأقسام', 'nav.work': 'مختارات', 'nav.contact': 'تواصل', 'nav.cta': 'تسوّق الآن',
      'hero.eyebrow': 'متجر معدات تصوير وسينما · إربد',
      'hero.l1': 'كل لقطة', 'hero.l2': 'تبدأ هنا.',
      'hero.lead': 'الصورة العظيمة تبدأ بأداة تثق فيها.',
      'hero.small': 'كاميرات وعدسات وإضاءة وصوت من أكبر الماركات العالمية، بكفالة الوكيل وبأسعار عادلة.',
      s1: 'كاميرات', s2: 'عدسات', s3: 'إضاءة', s4: 'صوتيات',
      'clients.label': 'ماركات عالمية على رفوفنا',
      'man.label': 'قصتنا',
      'man.text': 'بدأت TOP CAM سنة 2024 بفكرة وحدة: كل مصوّر وصانع محتوى بالأردن بيستاهل *أفضل* المعدات بالعالم، بسعر *عادل*، ومع ناس بتفهم الصورة متلّه. ما منبيع كاميرات وبس — *منجهّز* بدايات.',
      'man.sign': 'من 2024 · إربد، الأردن',
      'ct.label': 'الأقسام', 'ct.t1': 'ثمانية أقسام.', 'ct.t2': 'عدسة واحدة.', 'ct.count': 'منتج',
      'work.label': 'مختارات من المتجر', 'work.hint': 'مرّر — الصفحة كلها بتلبس ألوان كل ماركة', 'work.camo': 'ألوان الماركة',
      'tn.label': 'من الرفوف', 'tn.t': 'منتج جاهز للطلب', 'tn.sub': 'كاميرات، عدسات، إضاءة، مايكات، جيمبل وكل الإكسسوارات — في مكان واحد.',
      'pr.label': 'كيف نشتغل', 'pr.t1': 'من الرف…', 'pr.t2': 'إلى لقطتك.',
      'pr.s1': 'اختر', 'pr.s1d': 'احكي معنا عن شغلك وميزانيتك، ونرشّحلك اللي بيناسبك فعلًا — بدون مبالغة.',
      'pr.s2': 'جرّب', 'pr.s2d': 'جرّب القطعة بإيدك بالمحل، أو افحص طلبك عند الاستلام قبل ما تدفع.',
      'pr.s3': 'صوّر', 'pr.s3d': 'توصيل خلال 24 ساعة لكل المحافظات، كفالة الوكيل، ودعم بعد البيع.',
      'st.1': 'منتج في المتجر', 'st.2': 'ماركة عالمية', 'st.3': 'توصيل لكل المحافظات', 'st.4': 'سنة التأسيس',
      'contact.label': 'تواصل', 'contact.l1': 'خلّينا نجهّز', 'contact.l2': 'لقطتك الجاية.',
      'contact.cta': 'احكي معنا على واتساب', 'contact.cta2': 'كل طرق التواصل',
      'contact.note': 'إربد · شارع الجامعة — يوميًا من 10 الصبح لـ 10 بالليل.',
      'foot.note': 'كفالة الوكيل المعتمد في الأردن · منتجات أصلية 100%',
      'cursor.view': 'افتح', jod: 'د.أ', lang: 'EN', title: 'من نحن | TOP CAM Jordan',
    },
    en: {
      brand: 'TOP CAM', 'intro.tag': 'Cameras · Lenses · Light · Sound',
      'nav.about': 'Story', 'nav.cats': 'Departments', 'nav.work': 'Picks', 'nav.contact': 'Contact', 'nav.cta': 'Shop now',
      'hero.eyebrow': 'Camera & cinema gear store · Irbid',
      'hero.l1': 'Every shot', 'hero.l2': 'starts here.',
      'hero.lead': 'Great images start with a tool you trust.',
      'hero.small': 'Cameras, lenses, light and sound from the world’s leading brands — with dealer warranty and honest prices.',
      s1: 'Cameras', s2: 'Lenses', s3: 'Lighting', s4: 'Audio',
      'clients.label': 'World brands on our shelves',
      'man.label': 'Our story',
      'man.text': 'TOP CAM started in 2024 with one idea: every photographer and creator in Jordan deserves the *world’s* best gear, at an *honest* price, with people who see the image the way they do. We don’t just sell cameras — we *equip* beginnings.',
      'man.sign': 'Since 2024 · Irbid, Jordan',
      'ct.label': 'Departments', 'ct.t1': 'Eight departments.', 'ct.t2': 'One lens.', 'ct.count': 'products',
      'work.label': 'Picks from the store', 'work.hint': 'Scroll — the whole page wears each brand’s colours', 'work.camo': 'Brand colours',
      'tn.label': 'Off the shelves', 'tn.t': 'products ready to order', 'tn.sub': 'Cameras, lenses, lights, mics, gimbals and every accessory — in one place.',
      'pr.label': 'How we work', 'pr.t1': 'From the shelf…', 'pr.t2': 'to your shot.',
      'pr.s1': 'Choose', 'pr.s1d': 'Tell us about your work and budget, and we’ll suggest what really fits — no upselling.',
      'pr.s2': 'Try', 'pr.s2d': 'Hold it in our showroom, or inspect your order on delivery before you pay.',
      'pr.s3': 'Shoot', 'pr.s3d': '24-hour delivery across Jordan, dealer warranty, and support after you buy.',
      'st.1': 'products in store', 'st.2': 'world brands', 'st.3': 'delivery nationwide', 'st.4': 'founded',
      'contact.label': 'Contact', 'contact.l1': 'Let’s gear up', 'contact.l2': 'your next shot.',
      'contact.cta': 'Talk to us on WhatsApp', 'contact.cta2': 'All the ways to reach us',
      'contact.note': 'Irbid · University Street — daily, 10am to 10pm.',
      'foot.note': 'Authorized dealer warranty in Jordan · 100% genuine',
      'cursor.view': 'Open', jod: 'JOD', lang: 'ع', title: 'About | TOP CAM Jordan',
    },
  };

  // eight departments; `keys` are catalog categories, `pick` the product shown in the lens
  const CATS = [
    { keys: ['cameras'], pick: 'CAM-002', ar: ['الكاميرات', 'ميرورلس وسينما ومدمجة — من أول كاميرا لحد كاميرات الإنتاج.'], en: ['Cameras', 'Mirrorless, cinema and compact — from a first camera to production bodies.'] },
    { keys: ['filters', 'lenses'], pick: 'LEN-024', ar: ['العدسات والفلاتر', 'زجاج Sony وCanon وSigma، وفلاتر ND وCPL لكل لقطة.'], en: ['Lenses & filters', 'Sony, Canon and Sigma glass, plus ND and CPL filters.'] },
    { keys: ['lighting'], pick: 'LGT-155', ar: ['الإضاءة والاستوديو', 'كشافات، لوحات LED، فلاشات، سوفت بوكس وخلفيات.'], en: ['Lighting & studio', 'COB lights, LED panels, flashes, softboxes and backdrops.'] },
    { keys: ['audio'], pick: 'AUD-058', ar: ['المايكات والصوت', 'مايكات لاسلكية، شوتجن، بودكاست، وإنتركم للتصوير.'], en: ['Mics & audio', 'Wireless, shotgun and podcast mics, plus intercoms for sets.'] },
    { keys: ['gimbals', 'stabilizers'], pick: 'DJI-088', ar: ['الجيمبل والمثبتات', 'جيمبل كاميرا وموبايل ليطلع كل مشهد ثابت وسلس.'], en: ['Gimbals', 'Camera and phone gimbals for steady, fluid shots.'] },
    { keys: ['cages'], pick: 'ACC-358', ar: ['الكيجات والإكسسوارات', 'كيجات، مقابض، أذرع ماجيك وحوامل من SmallRig وUlanzi.'], en: ['Cages & rigging', 'Cages, handles, magic arms and mounts from SmallRig and Ulanzi.'] },
    { keys: ['tripods', 'stands', 'monitors'], pick: 'NEW-017', ar: ['الترايبودات والشاشات', 'ترايبودات فيديو وصور، وشاشات مونيتور للتصوير.'], en: ['Tripods & monitors', 'Photo and video tripods, and on-camera monitors.'] },
    { keys: ['chargers_batteries', 'batteries', 'memory', 'bags'], pick: 'NEW-019', ar: ['البطاريات والذاكرة والشنط', 'بطاريات V-Mount، شواحن، بطاقات ذاكرة وشنط حماية.'], en: ['Power, memory & bags', 'V-Mount batteries, chargers, memory cards and bags.'] },
  ];

  // the ring: eight flagship products, each with its brand's colours
  const PICKS = [
    { id: 'CAM-002', bg: '#121212', ink: '#f2f2f2', accent: '#f58220' },
    { id: 'CAM-115', bg: '#7d0f15', ink: '#fcefe8', accent: '#ffd2c2' },
    { id: 'LEN-024', bg: '#151311', ink: '#f1e7d6', accent: '#e2551e' },
    { id: 'DJI-088', bg: '#1d2329', ink: '#e9eef2', accent: '#8fb3d9' },
    { id: 'NEW-007', bg: '#e6eaee', ink: '#111417', accent: '#2f6df6' },
    { id: 'LGT-155', bg: '#ece3cf', ink: '#161514', accent: '#c1272d' },
    { id: 'AUD-058', bg: '#0f0f0f', ink: '#f4f4f4', accent: '#e8c25a' },
    { id: 'CAM-006', bg: '#2b2e34', ink: '#eef0f3', accent: '#f0a020' },
  ];

  const BRANDS = ['sony', 'canon', 'dji', 'sigma', 'godox', 'rode', 'hollyland', 'smallrig', 'ulanzi', 'nanlite', 'aputure', 'fujifilm', 'panasonic', 'kf-concept', 'lensgo', 'viltrox', 'feelworld', 'colbor'];
  const STAR = '<svg class="mq-star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0l2 10 10 2-10 2-2 10-2-10-10-2 10-2z"/></svg>';

  const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const mixc = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
  const css = (c) => `rgb(${c.map(Math.round).join(' ')})`;
  const BR = { bg: rgb('#0b0b0c'), ink: rgb('#efe7d6'), accent: rgb('#f2b81b') };
  const LT = { bg: rgb('#ece3cf'), ink: rgb('#161514'), accent: rgb('#8a5d00') };
  PICKS.forEach((p) => (p.rgb = { bg: rgb(p.bg), ink: rgb(p.ink), accent: rgb(p.accent) }));

  let lang = store.get('topcam_lang') === 'en' ? 'en' : 'ar';
  const t = (k) => (T[lang][k] != null ? T[lang][k] : k);
  const rtl = () => lang === 'ar';

  let CATALOG = [];
  const byId = (id) => CATALOG.find((p) => p.id === id);
  const price = (n) => `${Math.round(n || 0).toLocaleString('en-US')} ${t('jod')}`;

  /* ---------------- smooth scroll ---------------- */

  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: 0.085 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  $$('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const target = $(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      lenis ? lenis.scrollTo(target, { duration: 1.6 }) : target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    })
  );

  /* ---------------- brand colours ---------------- */

  const rootStyle = document.documentElement.style;
  const camo = { f: 0, enter: 0, exit: 0, light: 0, contact: 0 };
  function paintCamo() {
    const n = PICKS.length;
    const f = clamp(camo.f, 0, n - 1), i0 = Math.floor(f), i1 = Math.min(n - 1, i0 + 1), fr = f - i0;
    const A = PICKS[i0].rgb, B = PICKS[i1].rgb;
    const w = camo.enter * (1 - camo.exit);
    const light = camo.light * (1 - camo.contact);
    const pick = (k) => mixc(mixc(BR[k], mixc(A[k], B[k], fr), w), LT[k], light);
    rootStyle.setProperty('--bg', css(pick('bg')));
    rootStyle.setProperty('--ink', css(pick('ink')));
    rootStyle.setProperty('--accent', css(pick('accent')));
  }

  /* ---------------- product ring ---------------- */

  const stage = $('.ring-stage');
  const track = $('.names-track');
  let cards = [];
  const TRIPOD = `
    <div class="stand" aria-hidden="true">
      <svg class="legs" viewBox="0 0 160 260" preserveAspectRatio="xMidYMin meet">
        <ellipse class="shadow" cx="80" cy="253" rx="74" ry="5"/>
        <g class="leg-back"><line class="leg-up" x1="80" y1="122" x2="80" y2="182"/><line class="leg-lo" x1="80" y1="182" x2="80" y2="238"/><circle class="lock" cx="80" cy="182" r="3"/><ellipse class="foot" cx="80" cy="239" rx="5" ry="2.4"/></g>
        <line class="leg-up" x1="76" y1="120" x2="45" y2="185"/><line class="leg-lo" x1="45" y1="185" x2="13" y2="250"/>
        <line class="leg-up" x1="84" y1="120" x2="115" y2="185"/><line class="leg-lo" x1="115" y1="185" x2="147" y2="250"/>
        <circle class="lock" cx="45" cy="185" r="3.4"/><circle class="lock" cx="115" cy="185" r="3.4"/>
        <ellipse class="foot" cx="13" cy="251" rx="6" ry="2.8"/><ellipse class="foot" cx="147" cy="251" rx="6" ry="2.8"/>
        <rect class="col" x="76" y="46" width="8" height="70" rx="2"/>
        <polygon class="hub" points="68,110 92,110 87,126 73,126"/>
      </svg>
      <div class="stand-head"><div class="stand-cam">
        <svg viewBox="0 0 120 84">
          <defs><radialGradient id="camGlass" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#6f8aa6"/><stop offset=".35" stop-color="#22303d"/><stop offset="1" stop-color="#07090b"/></radialGradient></defs>
          <path class="cam-handle" d="M86 74 L118 82"/>
          <rect class="cam-dark" x="46" y="68" width="28" height="8" rx="2"/>
          <rect class="cam-body" x="16" y="22" width="88" height="48" rx="9"/>
          <rect class="cam-body" x="44" y="9" width="32" height="17" rx="4"/>
          <rect class="cam-dark" x="8" y="24" width="18" height="44" rx="7"/>
          <rect class="cam-acc" x="80" y="27" width="16" height="3.2" rx="1.6"/>
          <circle class="cam-rec" cx="98" cy="38" r="2.8"/>
          <circle class="cam-dark" cx="60" cy="46" r="21"/>
          <circle class="cam-acc" cx="60" cy="46" r="17.5"/>
          <circle class="cam-glass" cx="60" cy="46" r="15"/>
          <circle cx="54" cy="40" r="4" fill="#fff" opacity=".55"/>
        </svg>
      </div></div>
    </div>`;

  function buildRing() {
    stage.innerHTML = TRIPOD;
    standCam = $('.stand-cam', stage);
    cards = PICKS.map((p, i) => {
      const prod = byId(p.id) || {};
      const el = document.createElement('div');
      el.className = 'card';
      el.setAttribute('role', 'button');
      el.tabIndex = 0;
      el.dataset.cursor = 'view';
      el.addEventListener('click', (e) => openProduct(p.id, e));
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProduct(p.id, e); } });
      el.style.cssText = `--cbg:${p.bg};--cink:${p.ink};--cacc:${p.accent}`;
      el.innerHTML = `
        <div class="face front">
          <div class="card-top"><span>${pad(i + 1)}</span><span>${esc(prod.brand || '')}</span></div>
          <div class="card-img"><img src="${esc(prod.image || 'images/logo.svg')}" alt="" loading="lazy"></div>
          <div class="card-name"><b>${esc(prod.name || '')}</b><span><em></em><i class="price">${prod.price ? price(prod.price) : ''}</i></span></div>
        </div>
        <div class="face back"><img src="images/logo_luxury.jpg" alt=""></div>`;
      stage.appendChild(el);
      return el;
    });
    $('.work-count .total').textContent = pad(cards.length);
    track.innerHTML = PICKS.map((p) => `<div>${esc(((byId(p.id) || {}).brand || 'TOP CAM').toUpperCase())}</div>`).join('');
    active = -1;
  }

  let W = 0, R = 0, active = -1, ringST = null, standCam = null;
  function measureRing() {
    W = stage.clientWidth;
    R = (W / 2 / Math.tan(Math.PI / Math.max(3, cards.length))) * 1.2;
    stage.style.transform = `translateZ(${-R}px) rotateX(-7deg)`;
  }
  function renderRing(p) {
    if (!cards.length) return;
    const n = cards.length, raw = p * (n - 1);
    const i0 = Math.min(n - 2, Math.floor(raw));
    const f = i0 + smooth(clamp((raw - i0 - 0.14) / 0.72));
    const s = rtl() ? -1 : 1, step = 360 / n;
    cards.forEach((el, i) => {
      const a = (i - f) * step * s;
      const c = Math.cos((a * Math.PI) / 180);
      const pop = Math.pow(Math.max(0, c), 10) * W * 0.12;
      el.style.transform = `rotateY(${a}deg) translateZ(${R + pop}px)`;
      el.style.setProperty('--shade', ((1 - Math.abs(c)) * 0.62 + (c < 0 ? 0.28 : 0)).toFixed(3));
    });
    track.style.transform = `translateY(calc(var(--nh) * ${-f}))`;
    if (standCam) {
      const pan = Math.sin(f * Math.PI * 0.85) * 34 * s, tilt = Math.sin(f * Math.PI * 1.7) * 6;
      standCam.style.transform = `rotateY(${pan.toFixed(2)}deg) rotateX(${tilt.toFixed(2)}deg)`;
    }
    const cur = Math.round(f);
    if (cur !== active) {
      active = cur;
      const prod = byId(PICKS[cur].id) || {};
      $('.work-count .cur').textContent = pad(cur + 1);
      $('.work-cat').innerHTML = prod.name ? `<bdi>${esc(prod.name)}</bdi> — <bdi dir="ltr">${esc(price(prod.price))}</bdi>` : '';
    }
    camo.f = f;
    paintCamo();
  }

  /* ---------------- brands strip ---------------- */

  function fillBrands() {
    const one = BRANDS.map((b) => `<img src="images/brands/${b}.svg" alt="${b}" loading="lazy">${STAR}`).join('');
    $('.marquee-track').innerHTML = `<div class="mq-group">${one}</div><div class="mq-group" aria-hidden="true">${one}</div>`;
  }

  /* ---------------- departments around the lens ---------------- */

  const ctStage = $('.cats-stage'), ctList = $('.cat-list'), lensDisc = $('.lens-disc');
  const FAN = [Math.PI * 1.08, -Math.PI * 0.08];
  let ctActive = -1, ctST = null;
  const catProducts = (c) => CATALOG.filter((p) => c.keys.includes(p.category));

  function fillCats() {
    ctList.innerHTML = CATS.map((c, i) =>
      `<li class="cat-item"><button type="button" data-i="${i}"><span class="n">${pad(i + 1)}</span><span class="t">${c[lang][0]}</span></button></li>`
    ).join('');
    $$('button', ctList).forEach((b) => b.addEventListener('click', () => goToCat(+b.dataset.i)));
    lensDisc.querySelectorAll('img').forEach((im) => im.remove());
    CATS.forEach((c) => {
      const prod = byId(c.pick) || catProducts(c).find((p) => p.image) || {};
      const im = document.createElement('img');
      im.src = prod.image || 'images/logo.svg'; im.alt = ''; im.loading = 'lazy';
      lensDisc.insertBefore(im, lensDisc.firstChild);
      c.img = im;
    });
    placeCats();
    const keep = Math.max(0, ctActive);
    ctActive = -1;
    setCat(keep, true);
  }

  function placeCats() {
    const w = ctStage.clientWidth, h = ctStage.clientHeight;
    const small = innerWidth < 900;
    const ox = w * 0.5, oy = h * 0.4, rx = w * (small ? 0.47 : 0.4), ry = small ? h * 0.47 : Math.min(h * 0.4, w * 0.5);
    $$('.cat-item', ctList).forEach((li, i) => {
      const k = rtl() ? 1 - i / 7 : i / 7;
      const a = FAN[0] + (FAN[1] - FAN[0]) * k;
      const r = i % 2 ? (small ? 0.86 : 0.8) : 1;
      li.style.left = `${ox + Math.cos(a) * rx * r}px`;
      li.style.top = `${oy + Math.sin(a) * ry * r}px`;
    });
    drawRay();
  }

  // a dashed focus ray from the lens to the active department
  function drawRay() {
    const li = $$('.cat-item', ctList)[Math.max(0, ctActive)];
    if (!li) return;
    const w = ctStage.clientWidth, h = ctStage.clientHeight;
    const disc = lensDisc.getBoundingClientRect(), st = ctStage.getBoundingClientRect();
    const cx = disc.left - st.left + disc.width / 2, cy = disc.top - st.top + disc.height / 2;
    const tx = parseFloat(li.style.left), ty = parseFloat(li.style.top);
    const ang = Math.atan2(ty - cy, tx - cx), r0 = disc.width / 2;
    const line = $('.ray line'), dot = $('.ray circle');
    const x1 = cx + Math.cos(ang) * r0, y1 = cy + Math.sin(ang) * r0;
    if (reduce) {
      line.setAttribute('x1', x1); line.setAttribute('y1', y1); line.setAttribute('x2', tx); line.setAttribute('y2', ty);
      dot.setAttribute('cx', x1); dot.setAttribute('cy', y1);
      return;
    }
    gsap.to(line, { attr: { x1, y1, x2: tx, y2: ty }, duration: 0.7, ease: 'expo.out', overwrite: true });
    gsap.to(dot, { attr: { cx: x1, cy: y1 }, duration: 0.7, ease: 'expo.out', overwrite: true });
    void w; void h;
  }

  function setCat(i, quiet) {
    if (i === ctActive) return;
    ctActive = i;
    const c = CATS[i], [name, desc] = c[lang];
    const items = catProducts(c);
    $$('.cat-item', ctList).forEach((li, j) => li.classList.toggle('is-active', j === i));
    CATS.forEach((x, j) => x.img && x.img.classList.toggle('is-on', j === i));
    $('.cat-detail .cur').textContent = pad(i + 1);
    $('.cat-name').textContent = name;
    $('.cat-desc').textContent = desc;
    const counts = {};
    items.forEach((p) => { const b = String(p.brand || '').trim(); if (b) counts[b] = (counts[b] || 0) + 1; });
    const top = Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 4);
    $('.cat-tags').innerHTML = top.map((x) => `<li>${esc(x)}</li>`).join('');
    $('.count-badge').textContent = items.length ? `${items.length} ${t('ct.count')}` : '';
    drawRay();
    if (!reduce && !quiet) {
      gsap.fromTo('.cat-detail > *', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'expo.out', overwrite: true });
    }
  }

  function goToCat(i) {
    if (!ctST) return;
    const y = ctST.start + (ctST.end - ctST.start) * ((i + 0.5) / CATS.length);
    lenis ? lenis.scrollTo(y, { duration: 1.2 }) : scrollTo({ top: y, behavior: 'smooth' });
  }

  /* ---------------- product tunnel ---------------- */

  const world = $('.tunnel-world'), light = $('.tunnel-light'), glow = $('.tunnel-glow');
  const tn = { tiles: [], depth: 0, P: 800, count: 0, total: 0 };

  function buildTunnel() {
    const pool = CATALOG.filter((p) => p.image && p.price);
    // spread the tiles over the departments so the tunnel shows the whole store
    const byCat = {};
    pool.forEach((p) => (byCat[p.category] = byCat[p.category] || []).push(p));
    const lists = Object.values(byCat);
    const order = [];
    for (let k = 0; order.length < pool.length && k < 400; k++) lists.forEach((l) => l[k] && order.push(l[k]));
    tn.count = Math.min(order.length, innerWidth < 900 ? 30 : 44);
    let html = '';
    for (let k = 0; k < tn.count; k++) {
      const p = order[k];
      html += `<div class="tile${k % 3 === 1 ? ' dark' : ''}" data-id="${esc(p.id)}" data-cursor="view"><div class="ti"><img src="${esc(p.image)}" alt="" loading="lazy"></div><b>${esc(p.name)}</b><span>${price(p.price)}</span></div>`;
    }
    world.innerHTML = html;
    tn.tiles = $$('.tile', world);
    layoutTunnel();
  }

  function layoutTunnel() {
    const small = innerWidth < 900;
    const rx = innerWidth * (small ? 0.4 : 0.35), ry = innerHeight * (small ? 0.34 : 0.33);
    const gap = small ? 170 : 150;
    tn.P = small ? 620 : 820;
    $('.tunnel-view').style.perspective = tn.P + 'px';
    tn.tiles.forEach((el, k) => {
      const th = k * 2.39996 + 0.6;
      const z = -(k * gap + 300);
      el._z = z;
      el.style.transform = `translate3d(${Math.cos(th) * rx}px, ${Math.sin(th) * ry}px, ${z}px) rotateY(${-Math.cos(th) * 20}deg) rotateX(${Math.sin(th) * 20}deg) translate(-50%, -50%)`;
    });
    tn.depth = tn.count * gap + 300;
  }

  function renderTunnel(p) {
    const fly = clamp(p / 0.82);
    const cam = (smooth(fly) * 0.15 + fly * 0.85) * (tn.depth + tn.P * 0.4);
    world.style.transform = `translateZ(${cam}px)`;
    const far = 2600, near = tn.P * 0.8;
    for (const el of tn.tiles) {
      const z = el._z + cam;
      const o = clamp((z + far) / 1000) * clamp((near - z) / 260);
      el.style.opacity = o.toFixed(3);
      el.style.visibility = o > 0.002 ? 'visible' : 'hidden';
    }
    const end = smooth(clamp((p - 0.74) / 0.24));
    light.style.clipPath = `circle(${(1 + p * 2.4 + end * 90).toFixed(2)}% at 50% 50%)`;
    light.style.setProperty('--logo', clamp((p - 0.84) / 0.12).toFixed(3));
    glow.style.opacity = ((0.55 + p * 0.45) * (1 - end)).toFixed(3);
    const out = clamp((p - 0.5) / 0.2);
    const copy = $('.tunnel-copy');
    copy.style.opacity = 1 - out;
    copy.style.transform = `scale(${1 + out * 0.2})`;
    $('.tn-count').textContent = Math.round((tn.total || 380) * smooth(clamp(p / 0.45)));
    camo.light = smooth(clamp((p - 0.86) / 0.12));
    paintCamo();
  }

  /* ---------------- manifesto ---------------- */

  let manTween = null;
  function buildManifesto() {
    const el = $('.manifesto-text');
    el.innerHTML = t('man.text').replace(/TOP CAM/g, 'TOP CAM').split(' ').map((w) => {
      const hl = /\*/.test(w);
      return `<span class="w${hl ? ' hl' : ''}">${esc(w.replace(/\*/g, ''))}</span>`;
    }).join(' ');
    if (manTween && manTween.scrollTrigger) manTween.scrollTrigger.kill();
    if (manTween) manTween.kill();
    if (reduce) return gsap.set($$('.w', el), { opacity: 1 });
    manTween = gsap.to($$('.w', el), {
      opacity: 1, stagger: 0.1, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 45%', scrub: true },
    });
  }

  /* ---------------- product window ---------------- */

  const pm = $('#pm');
  const availOf = (p) => {
    const a = String(p.availability || '').toLowerCase();
    if (a === 'pre_order' || a === 'sold_out') return a;
    const b = String(p.badge || '').toLowerCase();
    if (b.includes('سولد') || b.includes('sold')) return 'sold_out';
    if (b.includes('بري') || b.includes('pre')) return 'pre_order';
    return 'in';
  };
  const tr = (x) => { const v = String(x == null ? '' : x); if (lang !== 'en' || !window.TopcamI18n) return v; const o = TopcamI18n.translate(v); return o == null ? v : o; };
  let pmOpen = false;

  function openProduct(id, ev) {
    const p = byId(id);
    if (!p) return;
    const en = lang === 'en';
    const name = en ? (p.nameEn || p.name) : p.name;
    const imgs = [p.image].concat(Array.isArray(p.gallery) ? p.gallery : []).filter((x, i, a) => x && a.indexOf(x) === i).slice(0, 6);
    $('#pmImg').src = imgs[0] || 'images/logo_dark.svg';
    $('#pmThumbs').innerHTML = imgs.length > 1 ? imgs.map((x, i) => `<button type="button" class="${i ? '' : 'on'}" data-src="${esc(x)}"><img src="${esc(x)}" alt=""></button>`).join('') : '';
    $('#pmBrand').textContent = p.brand || 'TOP CAM';
    $('#pmName').textContent = name;
    const old = +p.oldPrice || 0, now = +p.price || 0;
    $('#pmPrice').innerHTML = `<b>${esc(price(now))}</b>` + (old > now ? `<s>${esc(price(old))}</s><span class="save">${en ? 'Save' : 'وفّر'} ${esc(price(old - now))}</span>` : '');
    const av = availOf(p), chip = $('#pmChip');
    chip.className = 'pm-chip' + (av === 'pre_order' ? ' pre' : av === 'sold_out' ? ' out' : '');
    $('span', chip).textContent = av === 'pre_order' ? (en ? 'Pre-order' : 'بري أوردر — اطلبه مسبقًا') : av === 'sold_out' ? (en ? 'Sold out' : 'سولد أوت') : (en ? 'Ready to order' : 'جاهز للطلب');
    let desc = String(p.description || '').replace(/(كفالة رسمية)(?:\s+كفالة رسمية)+/g, '$1').trim();
    if (en) desc = `${name}${p.brand ? ' from ' + p.brand : ''} is available at TOP CAM Jordan with the authorised dealer's warranty, free delivery across Jordan and inspection before you pay.`;
    $('#pmDesc').textContent = desc;
    const specs = Object.entries(p.specs || {}).filter(([k, v]) => k && v).slice(0, 8);
    $('#pmSpecs').innerHTML = specs.map(([k, v]) => `<li><small>${esc(tr(k))}</small><span>${esc(tr(v))}</span></li>`).join('');
    $('#pmPerks').innerHTML = (en ? ['24h delivery', 'Inspect before paying', 'Dealer warranty'] : ['توصيل خلال 24 ساعة', 'افحص قبل الدفع', 'كفالة الوكيل']).map((x) => `<span>${x}</span>`).join('');
    let wa = String((window.__topcamSettings && window.__topcamSettings.whatsappNumber) || '').replace(/[^0-9]/g, '');
    if (!wa || wa === '962790000000') wa = '962788000067';
    const msg = en ? `Hi TOP CAM, I'd like to order:\n${name}\nPrice: ${price(now)}\nCode: ${p.id}` : `مرحباً TOP CAM، بدي أطلب:\n${name}\nالسعر: ${price(now)}\nالكود: ${p.id}`;
    $('#pmWa').href = `https://wa.me/${wa}?text=${encodeURIComponent(msg)}`;
    $('#pmWaT').textContent = av === 'pre_order' ? (en ? 'Pre-order on WhatsApp' : 'احجزه عبر واتساب') : (en ? 'Order on WhatsApp' : 'اطلب عبر واتساب');
    $('#pmStore').href = 'index.html?product=' + encodeURIComponent(p.id);
    $('#pmStoreT').textContent = en ? 'Add to cart in store' : 'أضفه للسلة بالمتجر';

    pm.classList.add('is-open');
    pmOpen = true;
    if (lenis) lenis.stop();
    document.documentElement.style.overflow = 'hidden';
    const panel = $('.pm-panel'), r = panel.getBoundingClientRect();
    const cx = (ev && ev.clientX ? ev.clientX : innerWidth / 2) - r.left, cy = (ev && ev.clientY ? ev.clientY : innerHeight / 2) - r.top;
    if (reduce) return;
    gsap.fromTo('.pm-backdrop', { opacity: 0 }, { opacity: 1, duration: 0.4 });
    // the window opens like a lens aperture, from the point you clicked
    gsap.fromTo(panel, { clipPath: `circle(0px at ${cx}px ${cy}px)` }, { clipPath: `circle(${Math.hypot(r.width, r.height)}px at ${cx}px ${cy}px)`, duration: 0.9, ease: 'expo.inOut' });
    gsap.fromTo('#pmImg', { scale: 0.7, rotate: -8, autoAlpha: 0 }, { scale: 1, rotate: 0, autoAlpha: 1, duration: 1.1, ease: 'expo.out', delay: 0.25 });
    gsap.fromTo('.pm-info > *', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.05, ease: 'expo.out', delay: 0.3 });
  }

  function closeProduct() {
    if (!pmOpen) return;
    pmOpen = false;
    const done = () => { pm.classList.remove('is-open'); document.documentElement.style.overflow = ''; if (lenis) lenis.start(); };
    if (reduce) return done();
    const panel = $('.pm-panel'), r = panel.getBoundingClientRect();
    gsap.to('.pm-backdrop', { opacity: 0, duration: 0.45 });
    gsap.to(panel, { clipPath: `circle(0px at ${r.width / 2}px ${r.height / 2}px)`, duration: 0.55, ease: 'expo.in', onComplete: done });
  }

  pm.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) return closeProduct();
    const th = e.target.closest('.pm-thumbs button');
    if (th) {
      $('.pm-thumbs button').forEach((b) => b.classList.toggle('on', b === th));
      $('#pmImg').src = th.dataset.src;
      if (!reduce) gsap.fromTo('#pmImg', { autoAlpha: 0, scale: 0.92 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'expo.out' });
    }
  });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProduct(); });
  // any product on the page opens its window
  $('.tunnel-world').addEventListener('click', (e) => { const t = e.target.closest('.tile'); if (t) openProduct(t.dataset.id, e); });
  $('.lens-disc').addEventListener('click', (e) => { const c = CATS[Math.max(0, ctActive)]; const p = byId(c.pick) || catProducts(c).find((x) => x.image); if (p) openProduct(p.id, e); });
  $('.lens-disc').dataset.cursor = 'view';
  $('#discCam').addEventListener('click', (e) => openProduct(byId('CAM-005') ? 'CAM-005' : 'CAM-002', e));
  $('#discCam').dataset.cursor = 'view';

  /* ---------------- live numbers + whatsapp ---------------- */

  function applyNumbers() {
    const brands = new Set(CATALOG.map((p) => String(p.brand || '').trim().toLowerCase()).filter(Boolean));
    tn.total = CATALOG.length;
    if (CATALOG.length) $('#stProducts').dataset.count = CATALOG.length;
    if (brands.size) $('#stBrands').dataset.count = brands.size;
  }
  function applyWhatsapp(s) {
    let wa = String((s && s.whatsappNumber) || '').replace(/[^0-9]/g, '');
    if (!wa || wa === '962790000000') wa = '962788000067';
    const msg = lang === 'ar' ? 'مرحباً TOP CAM، عندي استفسار' : 'Hi TOP CAM, I have a question';
    $('#waLink').href = `https://wa.me/${wa}?text=${encodeURIComponent(msg)}`;
  }

  /* ---------------- language ---------------- */

  function applyLang() {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = rtl() ? 'rtl' : 'ltr';
    document.title = t('title');
    $$('[data-i18n]').forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $('#langBtn').textContent = t('lang');
    $('#langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    buildManifesto();
    buildRing();
    fillBrands();
    fillCats();
    buildTunnel();
    applyWhatsapp(window.__topcamSettings);
  }
  $('#langBtn').addEventListener('click', () => {
    lang = lang === 'ar' ? 'en' : 'ar';
    store.set('topcam_lang', lang);
    applyLang();
    ScrollTrigger.refresh();
    if (ringST) { measureRing(); renderRing(ringST.progress); }
    if (tnST) renderTunnel(tnST.progress);
  });

  /* ---------------- scroll scenes ---------------- */

  let tnST = null;
  function scenes() {
    ctST = ScrollTrigger.create({
      trigger: '#cats', start: 'top top', end: () => '+=' + innerHeight * 3.2, pin: true,
      onUpdate: (st) => setCat(Math.min(CATS.length - 1, Math.floor(st.progress * CATS.length))),
      onRefresh: () => placeCats(),
    });

    measureRing();
    ringST = ScrollTrigger.create({
      trigger: '#work', start: 'top top', end: () => '+=' + innerHeight * (PICKS.length - 1) * 0.7, pin: true,
      onUpdate: (st) => renderRing(st.progress),
      onRefresh: (st) => { measureRing(); renderRing(st.progress); },
    });
    ScrollTrigger.create({
      trigger: '#work', start: 'top 75%', end: 'top top',
      onUpdate: (st) => { camo.enter = st.progress; paintCamo(); },
      onRefresh: (st) => { camo.enter = st.progress; paintCamo(); },
    });
    ScrollTrigger.create({
      trigger: '#tunnel', start: 'top 95%', end: 'top 30%',
      onUpdate: (st) => { camo.exit = st.progress; paintCamo(); },
      onRefresh: (st) => { camo.exit = st.progress; paintCamo(); },
    });
    tnST = ScrollTrigger.create({
      trigger: '#tunnel', start: 'top top', end: () => '+=' + innerHeight * 3, pin: true,
      onUpdate: (st) => renderTunnel(st.progress),
      onRefresh: (st) => { layoutTunnel(); renderTunnel(st.progress); },
    });
    ScrollTrigger.create({
      trigger: '#contact', start: 'top 85%', end: 'top 35%',
      onUpdate: (st) => { camo.contact = st.progress; paintCamo(); },
      onRefresh: (st) => { camo.contact = st.progress; paintCamo(); },
    });

    gsap.fromTo('.ink-path path', { strokeDashoffset: 1 }, {
      strokeDashoffset: 0, ease: 'none',
      scrollTrigger: { trigger: '.steps-wrap', start: 'top 85%', end: 'bottom 55%', scrub: true },
    });
    $$('.stats [data-count]').forEach((el) => {
      ScrollTrigger.create({
        trigger: '.stats', start: 'top 85%', once: true,
        onEnter: () => {
          const v = { v: +(el.dataset.from || 0) };
          gsap.to(v, { v: +el.dataset.count, duration: reduce ? 0 : 1.8, ease: 'power2.out', onUpdate: () => (el.textContent = Math.round(v.v)) });
        },
      });
    });

    if (!reduce) {
      const hero = { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true };
      gsap.to('.hero-word', { yPercent: -35, ease: 'none', scrollTrigger: hero });
      gsap.to('.hero-stage', { y: -90, ease: 'none', scrollTrigger: hero });
      gsap.to('.hero-copy', { y: -160, autoAlpha: 0.2, ease: 'none', scrollTrigger: hero });
      gsap.from('.step', { y: 50, autoAlpha: 0, duration: 1.1, stagger: 0.15, ease: 'expo.out', scrollTrigger: { trigger: '.steps', start: 'top 80%' } });
      gsap.from('.cats-title', { y: 30, autoAlpha: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '#cats', start: 'top 70%' } });
      gsap.from('.contact-title .line > *', { yPercent: 110, duration: 1.2, stagger: 0.12, ease: 'expo.out', scrollTrigger: { trigger: '.contact-title', start: 'top 80%' } });
      gsap.from('.foot-word', { yPercent: 40, ease: 'none', scrollTrigger: { trigger: '.foot', start: 'top bottom', end: 'bottom bottom', scrub: true } });
    }

    const nav = $('#nav');
    ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (st) => nav.classList.toggle('is-hidden', st.direction === 1 && st.scroll() > 240) });
  }

  /* ---------------- hero camera follows the mouse ---------------- */

  function heroTilt() {
    if (reduce || !matchMedia('(pointer: fine)').matches) return;
    const cam = $('#discCam');
    const rx = gsap.quickTo(cam, 'rotationX', { duration: 0.8, ease: 'power3' });
    const ry = gsap.quickTo(cam, 'rotationY', { duration: 0.8, ease: 'power3' });
    addEventListener('pointermove', (e) => {
      ry(((e.clientX / innerWidth) - 0.5) * 26);
      rx(-((e.clientY / innerHeight) - 0.5) * 18);
    }, { passive: true });
  }

  /* ---------------- intro: the shutter ---------------- */

  const irisBody = $('#intro .iris-body'), irisEdge = $('#intro .iris-edge');
  const ap = { r: 150, tw: 0 };
  function drawIris() {
    const N = 9, R = 160, r = ap.r, pts = [];
    for (let k = 0; k < N; k++) { const a = ap.tw + k * 2 * Math.PI / N; pts.push([Math.cos(a) * r, Math.sin(a) * r]); }
    const outer = `M${R},0 A${R},${R} 0 1,1 ${-R},0 A${R},${R} 0 1,1 ${R},0 Z`;
    irisBody.setAttribute('d', r <= 0.01 ? outer : `${outer} M${pts.map((p) => p[0].toFixed(2) + ',' + p[1].toFixed(2)).join(' L')} Z`);
    let e = '';
    if (r > 0.3 && r < R) {
      for (let k = 0; k < N; k++) {
        const p0 = pts[k], p1 = pts[(k + 1) % N];
        let vx = p1[0] - p0[0], vy = p1[1] - p0[1];
        const len = Math.hypot(vx, vy) || 1; vx /= len; vy /= len;
        const b = p1[0] * vx + p1[1] * vy, c = p1[0] * p1[0] + p1[1] * p1[1] - R * R, tt = -b + Math.sqrt(Math.max(0, b * b - c));
        e += `M${p0[0].toFixed(2)},${p0[1].toFixed(2)} L${(p1[0] + vx * tt).toFixed(2)},${(p1[1] + vy * tt).toFixed(2)} `;
      }
    }
    irisEdge.setAttribute('d', e);
  }

  function intro() {
    if (reduce) { $('#intro').remove(); $('#flash').remove(); return; }
    document.documentElement.classList.add('is-loading');
    if (lenis) lenis.stop();
    drawIris();
    gsap.set('.hero-title .line > *', { yPercent: 110 });
    gsap.set(['.nav > *', '.eyebrow', '.hero-aside', '.hero-services li'], { autoAlpha: 0, y: 18 });
    gsap.set('.disc', { scale: 0.35, autoAlpha: 0 });
    gsap.set('.disc-ring', { autoAlpha: 0, scale: 0.8 });
    gsap.set('.disc-cam', { autoAlpha: 0, y: 40, scale: 0.8 });
    gsap.set('.star', { autoAlpha: 0 });
    gsap.set('.disc-word', { clipPath: 'inset(0 0 0 100%)' });
    gsap.set('.hero-word', { autoAlpha: 0, yPercent: 18 });

    const count = { v: 0 }, num = $('.intro-count .num');
    gsap.timeline({
      defaults: { ease: 'expo.out' },
      onComplete: () => { document.documentElement.classList.remove('is-loading'); if (lenis) lenis.start(); },
    })
      .to(count, { v: 100, duration: 1.1, ease: 'power2.inOut', onUpdate: () => (num.textContent = Math.round(count.v)) })
      // the blades swing in, hesitate like a lens stopping down, then shut
      .to(ap, { r: 46, tw: 0.5, duration: 0.55, ease: 'power3.in', onUpdate: drawIris }, 0.75)
      .to(ap, { r: 34, tw: 0.62, duration: 0.25, ease: 'power1.out', onUpdate: drawIris }, 1.3)
      .to(ap, { r: 0, tw: 0.95, duration: 0.32, ease: 'power3.in', onUpdate: drawIris }, 1.55)
      .to('.intro-meta', { autoAlpha: 0, duration: 0.25, ease: 'none' }, 1.5)
      .to('#flash', { opacity: 0.85, duration: 0.06, ease: 'none' }, 1.87)
      .add(() => $('#intro').remove(), 1.93)
      .to('#flash', { opacity: 0, duration: 0.6, ease: 'power2.out' }, 1.93)
      .add(() => $('#flash').remove(), 2.6)
      .to('.disc', { scale: 1, autoAlpha: 1, duration: 1.4 }, 2.0)
      .to('.disc-ring', { scale: 1, autoAlpha: 1, duration: 1.6 }, 2.15)
      .to('.disc-cam', { autoAlpha: 1, y: 0, scale: 1, duration: 1.6 }, 2.3)
      .fromTo('.shutter-flash', { opacity: 0.9 }, { opacity: 0, duration: 0.9, ease: 'power2.out' }, 2.55)
      .to('.star', { autoAlpha: 1, duration: 0.8 }, 2.6)
      .to('.disc-word', { clipPath: 'inset(0 0 0 0%)', duration: 1.2, ease: 'power2.inOut' }, 2.7)
      .to('.hero-word', { autoAlpha: 1, yPercent: 0, duration: 1.8 }, 2.3)
      .to('.hero-title .line > *', { yPercent: 0, duration: 1.3, stagger: 0.1 }, 2.4)
      .to(['.nav > *', '.eyebrow', '.hero-aside', '.hero-services li'], { autoAlpha: 1, y: 0, duration: 1, stagger: 0.06 }, 2.75);
  }

  /* ---------------- cursor ---------------- */

  function cursor() {
    if (reduce || !matchMedia('(pointer: fine)').matches) return;
    const el = $('.cursor'), label = $('.cursor-label');
    document.documentElement.classList.add('has-cursor');
    let x = -100, y = -100, cx = x, cy = y;
    addEventListener('pointermove', (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
    gsap.ticker.add(() => {
      cx += (x - cx) * 0.22; cy += (y - cy) * 0.22;
      el.style.transform = `translate(${cx}px, ${cy}px)`;
    });
    document.addEventListener('pointerover', (e) => {
      const big = e.target.closest('[data-cursor]');
      el.classList.toggle('is-big', !!big);
      el.classList.toggle('is-link', !big && !!e.target.closest('a, button'));
      label.textContent = big ? t('cursor.' + big.dataset.cursor) : '';
    });
  }

  /* ---------------- start ---------------- */

  const yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear();
  applyLang();
  scenes();
  renderRing(0);
  renderTunnel(0);
  cursor();
  heroTilt();
  intro();

  // live catalog: products in the ring, departments, tunnel and numbers
  Promise.all([
    fetch('/api/catalog', { cache: 'no-store' }).then((r) => (r.ok ? r.json() : [])).catch(() => []),
    fetch('/api/kv', { cache: 'no-store' }).then((r) => (r.ok ? r.json() : {})).catch(() => ({})),
  ]).then(([list, kv]) => {
    if (Array.isArray(list) && list.length) CATALOG = list.filter((p) => p && p.availability !== 'hidden');
    window.__topcamSettings = (kv && kv.settings) || null;
    applyNumbers();
    applyLang();
    ScrollTrigger.refresh();
    measureRing();
    if (ringST) renderRing(ringST.progress);
    if (tnST) renderTunnel(tnST.progress);
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  ScrollTrigger.clearScrollMemory('manual');
  scrollTo(0, 0);
  addEventListener('beforeunload', () => scrollTo(0, 0));
})();
