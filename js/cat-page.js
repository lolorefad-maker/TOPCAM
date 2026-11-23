// صفحة القسم: بانر بعنوان القسم + كل الأقسام بأيقونات، كارت ترويجي، ومسار الصفحة
(function () {
  const LOGOS = ['sony', 'canon', 'dji', 'aputure', 'godox', 'rode', 'smallrig', 'sigma', 'hollyland', 'nanlite', 'viltrox', 'ulanzi', 'feelworld', 'colbor', 'desview', 'lilliput', 'seetec', 'lensgo', 'qihe', 'blackmagic', 'fujifilm', 'panasonic', 'leica', 'hasselblad'];
  window.tcBrandLogoSrc = function (b) {
    const k = String(b || '').trim().toLowerCase();
    if (k === 'k&f concept' || k === 'k&f') return 'images/brands/kf-concept.svg';
    return LOGOS.includes(k) ? 'images/brands/' + k + '.svg' : '';
  };
  const CATS = [
    { id: 'cameras', ar: 'الكاميرات', cats: ['cameras'], img: 'images/hero_camera.jpg', promo: 'اكتشف تشكيلة الكاميرات', sub: 'التقط كل تفصيلة بدقة واحترافية' },
    { id: 'lenses', ar: 'العدسات والفلاتر', cats: ['lenses', 'filters'], img: 'images/about_cinema_lenses.jpg', promo: 'عدسات لكل لقطة', sub: 'عدسات وفلاتر أصلية لكل الماركات' },
    { id: 'lighting', ar: 'الإضاءة والاستوديو', cats: ['lighting', 'stands'], img: 'images/slide_aputure_spotlight.jpg', promo: 'جهّز الاستوديو تبعك', sub: 'إضاءات، سوفت بوكس، خلفيات وحوامل' },
    { id: 'audio', ar: 'الصوتيات والمايكات', cats: ['audio'], img: 'images/studio_hotspots_setup.jpg', promo: 'صوت نقي لكل محتوى', sub: 'مايكات لاسلكية، بودكاست وكروت صوت' },
    { id: 'video', ar: 'الفيديو والشاشات', cats: ['video', 'monitors', 'teleprompters', 'teleprompter', 'wireless_video_and_intercom'], img: 'images/gear_cinema_studio.jpg', promo: 'معدات الفيديو والبث', sub: 'شاشات، تلقين، ونقل فيديو لاسلكي' },
    { id: 'gimbals', ar: 'الجيمبل', cats: ['gimbals'], img: 'images/gimbal_stab.jpg', promo: 'لقطات ثابتة وناعمة', sub: 'جيمبل للكاميرا والموبايل' },
    { id: 'cages', ar: 'الكيجات والريغ', cats: ['cages'], img: 'images/camera_cage.jpg', promo: 'جهّز كاميرتك بالكامل', sub: 'كيجات، مقابض وملحقات التثبيت' },
    { id: 'tripods', ar: 'الترايبود والحوامل', cats: ['tripods'], img: 'images/tripod_stand.jpg', promo: 'ثبات في كل لقطة', sub: 'ترايبود، مونوبود وسلايدر' },
    { id: 'batteries', ar: 'البطاريات والشواحن', cats: ['chargers_batteries', 'batteries'], img: 'images/vmount_battery.jpg', promo: 'طاقة ما بتخلص', sub: 'بطاريات أصلية، V-Mount وشواحن' },
    { id: 'bags', ar: 'الحقائب', cats: ['bags'], img: 'images/camera_bag.jpg', promo: 'احمِ معداتك', sub: 'شنط ظهر، كتف وحافظات صلبة' },
    { id: 'memory', ar: 'كروت الذاكرة', cats: ['memory'], img: 'images/camera_dials.jpg', promo: 'مساحة لكل لقطاتك', sub: 'كروت SD و CFexpress ووحدات SSD' },
    { id: 'accessories', ar: 'الإكسسوارات', cats: ['accessories', 'caps'], img: 'images/about_gear_testing_lab.jpg', promo: 'كل الإكسسوارات بمكان واحد', sub: 'أغطية، تنظيف، حوامل وأكثر' },
  ];
  const SPECIAL = {
    all: { ar: 'المتجر', img: 'images/about_store_showroom.jpg', promo: 'كل معدات التصوير بمكان واحد', sub: 'أصلية وبكفالة — توصيل لكل المملكة' },
    deals: { ar: 'العروض', img: 'images/hero_photography_moves.jpg', promo: 'عروض حصرية لفترة محدودة', sub: 'خصومات على أقوى المعدات' },
    search: { ar: 'نتائج البحث', img: 'images/about_store_showroom.jpg', promo: 'ما لقيت اللي بدك ياه؟', sub: 'راسلنا على واتساب ومنأمّنلك ياه' },
  };
  const findCat = (cat) => CATS.find(c => c.id === cat || c.cats.includes(cat));
  const clean = (s) => String(s).replace(/[<>&"]/g, '');

  function ensureDom() {
    if (document.getElementById('tcCatHero')) return;
    const ps = document.getElementById('productsSection');
    if (!ps) return;
    const hero = document.createElement('section');
    hero.id = 'tcCatHero';
    hero.className = 'tc-cat-hero';
    ps.parentNode.insertBefore(hero, ps);
    const main = ps.querySelector(':scope > .flex-1');
    if (main) {
      const promo = document.createElement('div');
      promo.id = 'tcCatPromo';
      promo.className = 'tc-cat-promo';
      main.insertBefore(promo, main.firstChild);
    }
  }

  window.tcCatMode = function (cat, search) {
    ensureDom();
    const hero = document.getElementById('tcCatHero');
    const promo = document.getElementById('tcCatPromo');
    if (!hero) return;
    const active = findCat(cat);
    const c = search ? SPECIAL.search : (active || SPECIAL[cat] || SPECIAL.all);
    const icons = window.TC_ICONS || {};
    document.body.classList.add('tc-catmode');
    hero.style.setProperty('--bg', "url('" + new URL(c.img, document.baseURI).href + "')");
    const title = search ? c.ar + ': «' + clean(search) + '»' : c.ar;
    hero.innerHTML =
      '<div class="tc-cat-hero-in">' +
      '<h1><a href="#" onclick="tcExitCat();return false;" class="tc-back" title="رجوع"><i class="fa-solid fa-arrow-right"></i></a>' + title + '</h1>' +
      '<button class="tc-cat-toggle" onclick="this.parentElement.classList.toggle(\'show\')"><i class="fa-solid fa-grip"></i> الأقسام</button>' +
      '<nav class="tc-cat-nav">' + CATS.map(x =>
        '<a href="#" class="' + (active && active.id === x.id ? 'on' : '') + '" onclick="tcGoCat(\'' + x.id + '\');return false;">' + (icons[x.id] || '') + '<span>' + x.ar + '</span></a>'
      ).join('') + '</nav></div>';

    let pic = '';
    try {
      const all = storeDB.getProducts();
      const pool = active ? all.filter(p => active.cats.includes(p.category))
        : (cat === 'deals' ? all.filter(p => Number(p.oldPrice) > Number(p.price)) : all);
      const best = pool.filter(p => p.image).sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0))[0];
      pic = best ? best.image : '';
    } catch (e) {}
    if (promo) {
      promo.innerHTML =
        '<div class="tc-cat-promo-txt"><h3>' + c.promo + '</h3><p>' + c.sub + '</p>' +
        '<button onclick="document.getElementById(\'dynamicProductGrid\').scrollIntoView({behavior:\'smooth\',block:\'start\'})">تسوق الآن</button></div>' +
        (pic ? '<img src="' + pic + '" alt="" loading="lazy">' : '');
    }
    const crumb = document.getElementById('tcCrumb');
    if (crumb) crumb.innerHTML = '<a href="#" onclick="tcExitCat();return false;">الرئيسية</a><span>/</span><b>' + c.ar + '</b>';
  };

  window.tcExitCat = function () {
    document.body.classList.remove('tc-catmode');
    if (typeof showFeaturedStorefrontProducts === 'function') showFeaturedStorefrontProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // صفحة القسم تبدأ من أعلى الصفحة
  const origScroll = window.scrollToProducts;
  window.scrollToProducts = function () {
    if (document.body.classList.contains('tc-catmode')) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    return origScroll && origScroll.apply(this, arguments);
  };
  const origFeatured = window.showFeaturedStorefrontProducts;
  window.showFeaturedStorefrontProducts = function () {
    document.body.classList.remove('tc-catmode');
    return origFeatured && origFeatured.apply(this, arguments);
  };
})();
