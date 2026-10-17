// بيانات المنتجات الأصلية لمتجر TOP CAM لمعدات التصوير والسينما
// صور استوديو احترافية ومحلية 100% لكاميرات ومعدات وستاندات حقيقية

const INITIAL_CATEGORIES = [
  { id: 'all', name: 'جميع المعدات', icon: 'fa-layer-group', count: 0 },
  { id: 'cameras', name: 'كاميرات سينما وميرورليس', icon: 'fa-camera', count: 0, image: 'images/camera_body.jpg' },
  { id: 'stands', name: 'ستاندات وترايبود', icon: 'fa-monument', count: 0, image: 'images/tripod_stand.jpg' },
  { id: 'lighting', name: 'إضاءات وسوفت بوكس', icon: 'fa-lightbulb', count: 0, image: 'images/flash_light.jpg' },
  { id: 'filters', name: 'فلاتر وعدسات', icon: 'fa-circle-half-stroke', count: 0, image: 'images/filter_lens.jpg' },
  { id: 'memory', name: 'ميموريات وكروت ذاكرة', icon: 'fa-sd-card', count: 0, image: 'images/camera_dials.jpg' },
  { id: 'chargers_batteries', name: 'شواحن وبطاريات', icon: 'fa-battery-full', count: 0, image: 'images/vmount_battery.jpg' },
  { id: 'bags', name: 'شناتي وحقائب معدات', icon: 'fa-suitcase-rolling', count: 0, image: 'images/camera_bag.jpg' },
  { id: 'stabilizers', name: 'ستيبلايزرز وجيمبل', icon: 'fa-gamepad', count: 0, image: 'images/gimbal_stab.jpg' },
  { id: 'cages', name: 'كيج كاميرا وتجهيزات', icon: 'fa-border-all', count: 0, image: 'images/camera_cage.jpg' },
  { id: 'straps', name: 'أحزمة وستراب كاميرا', icon: 'fa-ribbon', count: 0, image: 'images/camera_bag.jpg' },
  { id: 'covers', name: 'أغطية وحماية الكاميرات', icon: 'fa-shield-halved', count: 0, image: 'images/camera_body.jpg' }
];

const INITIAL_PRODUCTS = [
  // 1. كاميرات
  {
    id: 'CAM-001',
    name: 'Sony FX3 Cinema Line',
    nameEn: 'Full-Frame 4K 120p Camera',
    category: 'cameras',
    brand: 'Sony',
    price: 3899,
    oldPrice: 4200,
    rating: 4.9,
    reviewsCount: 124,
    stock: 7,
    badge: 'الأكثر طلباً',
    section: 'trending',
    image: 'images/camera_body.jpg',
    description: 'كاميرا سينمائية بإطار كامل بمستشعر 12.1MP Exmor R BSI CMOS وتصوير بدقة 4K حتى 120 إطاراً في الثانية.',
    specs: {
      'المستشعر': 'Full-Frame Exmor R CMOS 12.1MP',
      'الفيديو': '4K 120fps 10-Bit 4:2:2 All-Intra',
      'الضمان': 'كفالة رسمية سنتين'
    }
  },
  {
    id: 'CAM-002',
    name: 'Sony Alpha 7 IV',
    nameEn: '33MP Hybrid Stills & Video',
    category: 'cameras',
    brand: 'Sony',
    price: 2499,
    oldPrice: 2699,
    rating: 4.8,
    reviewsCount: 89,
    stock: 9,
    badge: 'خصم 7%',
    section: 'trending',
    image: 'images/new_camera.jpg',
    description: 'الكاميرا الشاملة بمستشعر 33 ميجابكسل، مع تركيز بؤري فائق السرعة عبر الذكاء الاصطناعي.',
    specs: {
      'المستشعر': '33MP Full-Frame Exmor R CMOS',
      'التركيز البؤري': '759 نقطة فوكس مع معالجة AI'
    }
  },
  {
    id: 'CAM-003',
    name: 'Canon EOS R5 Mark II',
    nameEn: '45MP 8K RAW Cinema Body',
    category: 'cameras',
    brand: 'Canon',
    price: 4299,
    oldPrice: 4599,
    rating: 5.0,
    reviewsCount: 46,
    stock: 4,
    badge: 'وصل حديثاً',
    section: 'trending',
    image: 'images/hero_camera.jpg',
    description: 'كاميرا الأداء الخارق من كانون بدقة 45 ميجابكسل وتصوير 8K حتى 60 إطار RAW.',
    specs: {
      'المستشعر': '45MP Stacked BSI CMOS',
      'الفيديو': '8K 60p RAW / 4K 120p S-RAW'
    }
  },

  // 2. ستيبلايزرز وجيمبل
  {
    id: 'GMB-001',
    name: 'DJI RS 3 Pro Combo',
    nameEn: 'Carbon Fiber Handheld Gimbal',
    category: 'stabilizers',
    brand: 'DJI',
    price: 869,
    oldPrice: 999,
    rating: 4.9,
    reviewsCount: 165,
    stock: 8,
    badge: 'طقم متكامل',
    section: 'trending',
    image: 'images/gimbal_stab.jpg',
    description: 'جيمبل سينمائي بأذرع من ألياف الكربون وشاشة لمس OLED ونظام LiDAR.',
    specs: {
      'الحمولة': '4.5 كجم (10 رطل)',
      'المادة': 'Carbon Fiber'
    }
  },
  {
    id: 'GMB-002',
    name: 'DJI RS 4 Mini Travel Gimbal',
    nameEn: 'Lightweight Travel Gimbal Stabilizer',
    category: 'stabilizers',
    brand: 'DJI',
    price: 369,
    oldPrice: 410,
    rating: 4.8,
    reviewsCount: 92,
    stock: 12,
    badge: 'خفيف للسفر',
    section: 'trending',
    image: 'images/gimbal_stab.jpg',
    description: 'مانع اهتزاز خفيف للغاية يزن 795 جراماً فقط مع قدرة حمل حتى 2 كجم.',
    specs: {
      'الوزن': '795 جرام فقط',
      'الحمولة': '2 كجم'
    }
  },

  // 3. إضاءات واستوديو
  {
    id: 'LGT-001',
    name: 'Aputure Amaran 200d S',
    nameEn: '200W Daylight COB Video Light',
    category: 'lighting',
    brand: 'Aputure',
    price: 299,
    oldPrice: 349,
    rating: 4.9,
    reviewsCount: 210,
    stock: 15,
    badge: 'موصى به',
    section: 'recommended',
    image: 'images/flash_light.jpg',
    description: 'ضوء فيديو COB بقوة 200 واط بدرجة لونية نهارية فائقة الدقة 5600K وتحكم لاسلكي عبر تطبيق Sidus Link.',
    specs: {
      'القدرة': '200 واط COB LED',
      'درجة اللون': '5600K نهارية ثابتة'
    }
  },
  {
    id: 'LGT-002',
    name: 'Aputure Lantern 65cm Softbox',
    nameEn: 'Quick-Setup 360 Omnidirectional Softbox',
    category: 'lighting',
    brand: 'Aputure',
    price: 89,
    oldPrice: 110,
    rating: 4.8,
    reviewsCount: 88,
    stock: 20,
    badge: '',
    section: 'recommended',
    image: 'images/flash_light.jpg',
    description: 'سوفت بوكس فانوسي كروي ينتج إضاءة ناعمة محيطية 360 درجة، مثالي للبثوث وصناع المحتوى وتصوير المقابلات.',
    specs: {
      'القطر': '65 سم (26 بوصة)',
      'القاعدة': 'Bowens Mount قياسية'
    }
  },

  // 4. ستاندات وترايبود
  {
    id: 'STD-001',
    name: 'Manfrotto Befree Carbon Tripod',
    nameEn: 'Professional Carbon Fiber Travel Tripod',
    category: 'stands',
    brand: 'Manfrotto',
    price: 349,
    oldPrice: 399,
    rating: 4.8,
    reviewsCount: 78,
    stock: 14,
    badge: 'كربون فايبر',
    section: 'recommended',
    image: 'images/tripod_stand.jpg',
    description: 'ترايبود سفر احترافي مصنوع من ألياف الكربون فائقة القوة وخفة الوزن مع رأس هيدروليكي كروي دقيق.',
    specs: {
      'الخامة': 'ألياف كربون 100%',
      'أقصى حمولة': '9 كجم'
    }
  },
  {
    id: 'STD-002',
    name: 'Heavy-Duty 3.3m Stainless C-Stand',
    nameEn: 'Professional Studio C-Stand with Boom Arm',
    category: 'stands',
    brand: 'TOP CAM Pro',
    price: 189,
    oldPrice: 220,
    rating: 4.9,
    reviewsCount: 65,
    stock: 18,
    badge: 'استوديو ثقيل',
    section: 'recommended',
    image: 'images/tripod_stand.jpg',
    description: 'ستاند سي ستاند من الفولاذ المقاوم للصدأ للاستوديوهات الاحترافية مع ذراع بوم أرم لحمل الإضاءات الثقيلة.',
    specs: {
      'أقصى ارتفاع': '330 سم (3.3 متر)',
      'الحمولة': 'حتى 20 كجم'
    }
  },

  // 5. فلاتر وعدسات
  {
    id: 'FLT-001',
    name: 'PolarPro VND Filter (82mm)',
    nameEn: 'Peter McKinnon Edition II 2-5 Stop',
    category: 'filters',
    brand: 'PolarPro',
    price: 249,
    oldPrice: 280,
    rating: 5.0,
    reviewsCount: 142,
    stock: 11,
    badge: 'زجاج كوارتز',
    section: 'recommended',
    image: 'images/filter_lens.jpg',
    description: 'فلتر ND متغير من زجاج الكوارتز الألماني النقي يمنحك تحكماً دقيقاً في التعريض الضوئي من 2 إلى 5 وقفات.',
    specs: {
      'القطر': '82 مم',
      'الوقفات': '2 إلى 5 وقفات'
    }
  },
  {
    id: 'FLT-002',
    name: 'NiSi 77mm Black Mist 1/4 Filter',
    nameEn: 'Cinema Diffusion Effect Glass Filter',
    category: 'filters',
    brand: 'NiSi',
    price: 79,
    oldPrice: 95,
    rating: 4.8,
    reviewsCount: 94,
    stock: 16,
    badge: 'طابع سينمائي',
    section: 'recommended',
    image: 'images/filter_lens.jpg',
    description: 'فلتر تنعيم وتشتيت الضوء لتخفيف حدة المستشعرات الرقمية، يمنح الهايلايت هالة ناعمة سينمائية دافئة.',
    specs: {
      'القطر': '77 مم',
      'الكثافة': '1/4 Black Mist'
    }
  },

  // 6. ميموريات وكروت ذاكرة
  {
    id: 'MEM-001',
    name: 'Sony TOUGH CFexpress Type A 160GB',
    nameEn: 'High-Speed 800MB/s Cinema Memory Card',
    category: 'memory',
    brand: 'Sony',
    price: 369,
    oldPrice: 399,
    rating: 4.9,
    reviewsCount: 110,
    stock: 15,
    badge: 'مقاوم للصدمات',
    section: 'recommended',
    image: 'images/camera_dials.jpg',
    description: 'أقوى بطاقة ذاكرة CFexpress Type A بتصميم TOUGH غير قابل للكسر، سرعة قراءة تصل إلى 800 ميجابايت/ثانية.',
    specs: {
      'السعة': '160 جيجابايت',
      'سرعة القراءة': '800 ميجابايت/ثانية'
    }
  },

  // 7. شواحن وبطاريات
  {
    id: 'BAT-001',
    name: 'SmallRig NP-FZ100 USB-C Battery',
    nameEn: 'Direct USB-C Rechargeable Camera Battery',
    category: 'chargers_batteries',
    brand: 'SmallRig',
    price: 49,
    oldPrice: 65,
    rating: 4.8,
    reviewsCount: 220,
    stock: 30,
    badge: 'منفذ Type-C',
    section: 'recommended',
    image: 'images/vmount_battery.jpg',
    description: 'بطارية بديلة لكاميرات سوني تتميز بمنفذ شحن USB-C مدمج لشحنها مباشرة من الباوربانك.',
    specs: {
      'السعة': '2400 مللي أمبير',
      'المنفذ': 'USB Type-C'
    }
  },
  {
    id: 'BAT-002',
    name: 'Cinergy Nano 99 V-Mount Battery',
    nameEn: 'Mini 99Wh Airline-Safe Cinema V-Mount',
    category: 'chargers_batteries',
    brand: 'SmallRig',
    price: 279,
    oldPrice: 320,
    rating: 4.9,
    reviewsCount: 55,
    stock: 8,
    badge: '100W PD',
    section: 'recommended',
    image: 'images/vmount_battery.jpg',
    description: 'بطارية V-Mount سينمائية فائقة الصغر مطابقة لمعايير الطيران، بقدرة 99Wh وشاشة لعرض الوقت المتبقي ومنافذ 100W PD.',
    specs: {
      'السعة': '99Wh (مصرح بها بالطائرات)',
      'المنافذ': 'USB-C 100W PD, D-Tap, DC'
    }
  },

  // 8. حقائب وشناتي
  {
    id: 'BAG-001',
    name: 'Wandrd PRVKE 31L Bag',
    nameEn: 'Weatherproof Photography Backpack V3',
    category: 'bags',
    brand: 'Wandrd',
    price: 299,
    oldPrice: 350,
    rating: 4.9,
    reviewsCount: 130,
    stock: 10,
    badge: 'مقاومة للماء',
    section: 'recommended',
    image: 'images/camera_bag.jpg',
    description: 'حقيبة المصورين الأكثر أناقة وعملية، مصنوعة من القماش المشمع المقاوم للماء وسحابات YKK مع وصول جانبي سريع.',
    specs: {
      'السعة': '31 لتر وتتوسع إلى 36 لتر',
      'المادة': 'Tarpaulin مقاوم للمطر'
    }
  },

  // 9. كيج كاميرا وتجهيزات التثبيت
  {
    id: 'CAG-001',
    name: 'SmallRig FX3 Camera Cage',
    nameEn: 'Aluminum Cage Rig with Cable Clamp',
    category: 'cages',
    brand: 'SmallRig',
    price: 99,
    oldPrice: 120,
    rating: 4.8,
    reviewsCount: 175,
    stock: 18,
    badge: 'أكثر طلباً',
    section: 'recommended',
    image: 'images/camera_cage.jpg',
    description: 'كيج حماية وتثبيت ألومنيوم مصمم بدقة متناهية ليطابق هيكل كاميرات Sony FX3/FX30، يوفر فتحات براغي ومسار NATO.',
    specs: {
      'الخامة': 'ألومنيوم طيران مدمج',
      'التوافق': 'Sony FX3 / FX30'
    }
  },

  // 10. أحزمة وستراب
  {
    id: 'STP-001',
    name: 'Peak Design Slide Strap',
    nameEn: 'Pro Camera Sling Quick-Release Strap',
    category: 'straps',
    brand: 'Peak Design',
    price: 69,
    oldPrice: 85,
    rating: 4.9,
    reviewsCount: 310,
    stock: 25,
    badge: 'سريع الفك',
    section: 'recommended',
    image: 'images/camera_bag.jpg',
    description: 'الحزام الأكثر شهرة عالمياً بين المصورين بنظام الروابط Anchor Links السريعة، يتميز بحشوة ناعمة لتوزيع وزن الكاميرا.',
    specs: {
      'قوة التحمل': 'تتحمل روابط Anchor حتى 90 كجم',
      'العرض': '45 مم مبطن'
    }
  },

  // 11. أغطية وحماية
  {
    id: 'COV-001',
    name: 'EasyCover Silicone Armor Case',
    nameEn: 'Protective Body Armor for Sony Alpha 7 IV',
    category: 'covers',
    brand: 'EasyCover',
    price: 35,
    oldPrice: 45,
    rating: 4.7,
    reviewsCount: 80,
    stock: 20,
    badge: 'حماية صدمات',
    section: 'recommended',
    image: 'images/camera_body.jpg',
    description: 'جراب سيليكون مصبوب خصيصاً يحمي جسم الكاميرا من الخدوش والصدمات دون إعاقة الوصول إلى الأزرار.',
    specs: {
      'الخامة': 'سيليكون ناعم عالي الكثافة مضاد للانزلاق',
      'الحماية': 'ضد الخدوش والضربات'
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_CATEGORIES, INITIAL_PRODUCTS };
}
