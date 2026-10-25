/**
 * طبقة ترجمة المتجر (عربي ⇄ إنجليزي) لكل النصوص التي لا يترجمها قاموس الصفحة.
 * - تترجم النصوص والـ placeholder/title/alt/aria-label عند التحويل للإنجليزية، وتعيد الأصل عند الرجوع للعربية.
 * - تراقب أي محتوى يُضاف لاحقاً (السلة، النوافذ، البطاقات) وتترجمه تلقائياً.
 * - لا تغيّر نصوص الأدمن ولا أسماء المنتجات.
 */
(function () {
  var AR = /[؀-ۿ]/;
  var lang = 'ar';
  var busy = false;
  var observer = null;
  var textRecs = [];   // { node, orig, tr }
  var attrRecs = [];   // { el, attr, orig, tr }
  var ATTRS = ['placeholder', 'title', 'alt', 'aria-label'];

  // نصوص تبقى كما هي (اسم اللغة نفسه)
  var KEEP = { 'العربية': 1, 'English': 1 };

  var MAP = {
    'الوجهة الرسمية الأولى لمعدات التصوير والسينما - الأردن': "Jordan's premier destination for photography & cinema gear",
    'Switch to العربية (Arabic)': 'Switch to Arabic',
    'التنقل الرئيسي': 'Main navigation',
    'قصتنا وماذا نوفر بالتفصيل': 'Our story and what we offer',
    'الطلبات، المخزون، الأسعار، العروض': 'Orders, stock, prices, offers',
    'أقسام المنتجات الاحترافية': 'Professional product categories',
    'كاميرات السينما والتصوير': 'Cinema & photo cameras',
    'إضاءات الاستوديو (Aputure / Godox)': 'Studio lighting (Aputure / Godox)',
    'العدسات والفلاتر الاحترافية': 'Professional lenses & filters',
    'مثبتات الحركة والـ Rigs (DJI / Tilta)': 'Gimbals & rigs (DJI / Tilta)',
    'خدماتي': 'My account',
    'تواصل فوري عبر الواتساب (VIP)': 'Instant WhatsApp contact (VIP)',
    'عمان، الأردن • TOP CAM Official Store': 'Amman, Jordan • TOP CAM Official Store',
    'كل المعدات': 'All gear',
    'تشكيلة مختارة من أفضل معدات التصوير والسينما': 'A curated selection of the best photo & cinema gear',
    'تصفح حسب البراند الرسمي': 'Browse by official brand',
    '5 قطع مميزة': '5 featured pieces',
    'المميزة': 'Featured',
    '5 قطع': '5 items',
    'كاميرا سينما': 'Cinema camera',
    'عدسة احترافية': 'Pro lens',
    'الأكثر طلباً': 'Most wanted',
    'إضاءة استوديو': 'Studio light',
    'مانع اهتزاز وجمبل': 'Gimbal stabilizer',
    'بيانات التوصيل والتسليم': 'Delivery details',
    'إجمالي الطلب:': 'Order total:',
    'العنوان التفصيلي أو رابط اللوكيشن *': 'Detailed address or location link *',
    'تحديد موقعي GPS': 'Detect my location (GPS)',
    'يمكنك الضغط على "تحديد موقعي GPS" لجلب إحداثيات موقعك الحالي تلقائياً.': 'You can press "Detect my location (GPS)" to fetch your current coordinates automatically.',
    'تحويل بنكي / محفظة إلكترونية (CliQ / Wallet)': 'Bank transfer / e-wallet (CliQ / Wallet)',
    'بطاقة إلكترونية (Visa / MasterCard)': 'Card (Visa / MasterCard)',
    'ملاحظات إضافية للتوصيل (اختياري)': 'Additional delivery notes (optional)',
    'تأكيد الطلب وإرسال البيانات عبر واتساب': 'Confirm order & send details via WhatsApp',
    'تم تسجيل طلبك بنجاح!': 'Your order has been placed!',
    'تم إرسال بياناتك وموقعك للتوصيل إلى فريق المتجر.': 'Your details and delivery location were sent to the store team.',
    'متابعة الطلب عبر واتساب': 'Continue on WhatsApp',
    'إغلاق والعودة للتسوق': 'Close & back to shopping',
    'توصيل مجاني 100%': '100% free delivery',
    'اطلب أي كاميرا أو معدات تصوير الآن بدون أي رسوم شحن، مع تغليف احترافي مؤمن وتوصيل فوري لباب بيتك أو موقع التصوير.': 'Order any camera or gear now with no shipping fees, secure professional packaging and fast delivery to your door or shoot location.',
    'تسوق الآن مع التوصيل المجاني 📦': 'Shop now with free delivery 📦',
    'شكراً، متابعة التصفح العادي': 'No thanks, continue browsing',
    'كفالة الوكيل المعتمد في الأردن 100% أصلي': 'Authorized dealer warranty in Jordan • 100% genuine',
    'زوايا وتفاصيل المنتج': 'Angles & product details',
    'متوفر بالمخزون - جاهز للتسليم': 'In stock – ready for delivery',
    'كاميرا سينمائية متطورة بمستشعر كامل الإطار تدعم تسجيل 4K 120p مع كفالة الوكيل المعتمد الرسمية.': 'Advanced cinema camera with a full-frame sensor, 4K 120p recording and the official authorized-dealer warranty.',
    'السعر الرسمي الشامل للضريبة': 'Official price incl. tax',
    'شامل فاتورة ضريبية رسمية': 'Includes an official tax invoice',
    'توصيل سريع مجاني': 'Free fast delivery',
    'خلال 24 ساعة لجميع المحافظات': 'Within 24 hours to all governorates',
    'فحص ومعاينة قبل الدفع': 'Inspect before you pay',
    'الدفع عند الاستلام كاش أو فيزا': 'Cash or card on delivery',
    'وصف المنتج': 'Product Description',
    'المواصفات التقنية والمميزات الرسمية': 'Official technical specs & features',
    'فريق مهندسي ومصوري TOP CAM جاهز لتقديم أي استشارة مجاناً': 'TOP CAM engineers & photographers are ready to advise you for free',
    'القائمة': 'Menu',
    'تغيير اللغة / Switch Language': 'Switch language',
    'بحث': 'Search',
    'السابق': 'Previous',
    'التالي': 'Next',
    'التشكيلة المختارة': 'Featured selection',
    'إضافة للمفضلة': 'Add to wishlist',
    'انقر لعرض المواصفات': 'Click to view specs',
    'TOP CAM - لبيع جميع معدات التصوير': 'TOP CAM - all photography gear',
    'مثال: أحمد محمد': 'e.g. John Smith',
    'مثال: 0791234567 أو +962...': 'e.g. 0791234567 or +962...',
    'مثال: عمان - دابوق / الرياض - النرجس': 'e.g. Amman - Dabouq',
    'اسم الشارع، رقم البناية، أو رابط خرائط Google': 'Street name, building number, or a Google Maps link',
    'أي تعليمات خاصة بالوقت أو الفحص...': 'Any special instructions about timing or inspection...',
    'الكل': 'All',
    'جميعها': 'All',
    'عرض كل براندات القسم': 'Show all brands in this category',
    'كل الموديلات': 'All models',
    'لا توجد معدات في هذا البراند حالياً.': 'No gear for this brand right now.',
    'ستتوفر المنتجات في هذا القسم قريباً.': 'Products for this section are coming soon.',
    'سلتك فارغة حالياً!': 'Your cart is empty!',
    'ميزة تحديد الموقع GPS غير مدعومة في متصفحك.': 'GPS location is not supported in your browser.',
    'تعذر الوصول إلى موقعك تلقائياً. يرجى كتابة اسم الشارع أو الحي يدوياً.': 'Could not detect your location automatically. Please type the street or area manually.',
    // عناوين الأقسام
    'جميع المعدات وأنظمة التصوير (500 منتج أصلي)': 'All photography & cinema gear',
    'جميع المعدات والأنظمة الأصلية': 'All genuine gear & systems',
    'جميع المعدات الأصلية': 'All genuine gear',
    'تصفح كافة المعدات السينمائية والفوتوغرافية المتوفرة': 'Browse all available cinema and photography gear',
    'الترايبودز والحوامل الثلاثية': 'Tripods & stands',
    'ترايبودز الكاميرا والفيديو': 'Camera & video tripods',
    'الستاندات وحوامل الإضاءة': 'Stands & light supports',
    'ستاندات الإضاءة والحوامل': 'Light stands & supports',
    'شاشات المونيتور': 'Monitors',
    'شاشات المونيتور للتصوير والسينما': 'Monitors for photography and cinema',
    'العدسات وفلاتر التصوير': 'Lenses & photo filters',
    'اختر الماركة لتصفح العدسات الاحترافية وفلاتر ND': 'Choose a brand to browse pro lenses and ND filters',
    'مانعات الاهتزاز والجمبل': 'Stabilizers & gimbals',
    'اختر الماركة لتصفح مثبتات الحركة والـ Gimbals': 'Choose a brand to browse motion stabilizers and gimbals',
    'البطاريات والشواحن ومحطات الطاقة': 'Batteries, chargers & power stations',
    'اختر الماركة لتصفح بطاريات V-Mount والشواحن': 'Choose a brand to browse V-Mount batteries and chargers',
    'الكاميرات وأنظمة السينما': 'Cameras & cinema systems',
    'اختر الماركة لتصفح كاميرات السينما والميرورليس': 'Choose a brand to browse cinema and mirrorless cameras',
    'إضاءات وسوفت بوكس الاستوديو': 'Studio lights & softboxes',
    'اختر الماركة لتصفح أضواء الاستوديو المستمرة والإضاءة المحمولة': 'Choose a brand to browse continuous studio and portable lighting',
    'أقفاص الكاميرا والمقابض (Cages & Rigs)': 'Camera cages & handles (Cages & Rigs)',
    'اختر الماركة لتصفح أقفاص الحماية وإكسسوارات التثبيت': 'Choose a brand to browse protective cages and mounting accessories',
    'مايكات وأنظمة الصوت اللاسلكية': 'Microphones & wireless audio systems',
    'اختر الماركة لتصفح مايكات الشوت جن والميكروفونات اللاسلكية': 'Choose a brand to browse shotgun and wireless microphones',
    'حقائب الكاميرات ومعدات الحماية': 'Camera bags & protection gear',
    'اختر الماركة لتصفح حقائب الظهر وحقائب النقل الصلبة': 'Choose a brand to browse backpacks and hard cases',
    'عروض وتخفيضات حصرية': 'Exclusive offers & discounts',
    'معدات مميزة بأسعار وتخفيضات خاصة': 'Featured gear at special prices and discounts',
    'اختر البراند لعرض الموديلات المتوفرة:': 'Choose a brand to see available models:',
    'منتج معتمد 100% بكفالة رسمية من الوكيل المعتمد في المملكة الأردنية الهاشمية.': 'Certified 100% product with an official warranty from the authorized dealer in the Hashemite Kingdom of Jordan.',
    'بري اوردر': 'Pre-Order',
    'سولد اوت': 'Sold Out',
    'متوفر': 'In Stock',
    'عدسات أصلية': 'Genuine lenses',
    'الرئيسية': 'Home',
    'من نحن': 'About us'
  };

  // قواعد بأرقام
  var RULES = [
    [/^عرض كل المعدات \((\d+) منتج\)$/, function (m) { return 'View all gear (' + m[1] + ' products)'; }],
    [/^عرض التشكيلة المختارة \((\d+) منتجات?\)$/, function (m) { return 'View featured selection (' + m[1] + ' products)'; }],
    [/^(\d+) منتج أصلي$/, function (m) { return m[1] + ' genuine products'; }],
    [/^وفر\s*([\d,.]+)\s*د\.أ$/, function (m) { return 'Save ' + m[1] + ' JOD'; }],
    [/^([\d,.]+)\s*د\.أ$/, function (m) { return m[1] + ' JOD'; }],
    [/^وفر\s*\$\s*([\d,.]+)$/, function (m) { return 'Save $' + m[1]; }],
    [/^(\d+(?:\.\d+)?)\s*جم$/, function (m) { return m[1] + ' g'; }],
    [/^(\d+) قطع?$/, function (m) { return m[1] + ' items'; }]
  ];

  function translate(str) {
    if (!str || !AR.test(str)) return null;
    var m = str.match(/^(\s*)([\s\S]*?)(\s*)$/);
    var core = m[2];
    if (!core || KEEP[core]) return null;
    var out = Object.prototype.hasOwnProperty.call(MAP, core) ? MAP[core] : undefined;
    if (out === undefined) {
      for (var i = 0; i < RULES.length; i++) {
        var mm = core.match(RULES[i][0]);
        if (mm) { out = RULES[i][1](mm); break; }
      }
    }
    if (out === undefined) {
      // "نص عربي (English text)" أو "نص عربي (English) *"  →  English text
      var b = core.match(/^[^()A-Za-z]*[؀-ۿ][^()]*\(([A-Za-z][^()]*)\)\s*(\*?)$/);
      if (b) out = b[1].trim() + (b[2] ? ' ' + b[2] : '');
    }
    if (out === undefined && core.indexOf('د.أ') !== -1) {
      out = core.split('د.أ').join('JOD'); // أسعار داخل نص أطول
      if (AR.test(out)) out = undefined;
    }
    return out === undefined ? null : m[1] + out + m[3];
  }

  function shouldSkip(node) {
    var p = node.parentElement;
    if (!p) return true;
    var tag = p.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'TEXTAREA') return true;
    return false;
  }

  function translateTextNode(node) {
    if (shouldSkip(node)) return;
    var cur = node.nodeValue;
    var out = translate(cur);
    if (out !== null && out !== cur) {
      textRecs.push({ node: node, orig: cur, tr: out });
      node.nodeValue = out;
    }
  }

  function translateAttrs(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute || !el.hasAttribute(a)) continue;
      var cur = el.getAttribute(a);
      var out = translate(cur);
      if (out !== null && out !== cur) {
        attrRecs.push({ el: el, attr: a, orig: cur, tr: out });
        el.setAttribute(a, out);
      }
    }
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === 3) { translateTextNode(root); return; }
    if (root.nodeType !== 1) return;
    translateAttrs(root);
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    var n;
    while ((n = walker.nextNode())) {
      if (n.nodeType === 3) translateTextNode(n);
      else translateAttrs(n);
    }
  }

  function restore() {
    busy = true;
    textRecs.forEach(function (r) { if (r.node.nodeValue === r.tr) r.node.nodeValue = r.orig; });
    attrRecs.forEach(function (r) { if (r.el.getAttribute(r.attr) === r.tr) r.el.setAttribute(r.attr, r.orig); });
    textRecs = [];
    attrRecs = [];
    busy = false;
  }

  function startObserver() {
    if (observer) return;
    observer = new MutationObserver(function (muts) {
      if (busy || lang !== 'en') return;
      busy = true;
      try {
        muts.forEach(function (m) {
          if (m.type === 'childList') m.addedNodes.forEach(translateTree);
          else if (m.type === 'characterData') translateTextNode(m.target);
          else if (m.type === 'attributes') translateAttrs(m.target);
        });
      } finally { busy = false; }
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }

  function apply(next) {
    lang = next === 'en' ? 'en' : 'ar';
    busy = true;
    try {
      restore();
      if (lang === 'en') translateTree(document.body);
    } finally { busy = false; }
    if (lang === 'en') startObserver();
  }

  // رسائل alert بالإنجليزية عند اللغة الإنجليزية
  var nativeAlert = window.alert;
  window.alert = function (msg) {
    var t = (lang === 'en' && typeof msg === 'string') ? translate(msg) : null;
    return nativeAlert.call(window, t !== null ? t : msg);
  };

  // إضافة قواميس خارجية (مثل مواصفات المنتجات)
  function extend(dict) {
    for (var k in dict) if (Object.prototype.hasOwnProperty.call(dict, k)) MAP[k] = dict[k];
  }

  window.TopcamI18n = { apply: apply, translate: translate, extend: extend };
})();
