// بيانات المنتجات الأصلية لمتجر TOP CAM لمعدات التصوير والسينما
// صور استوديو احترافية بخلفيات بيضاء نقية ومواصفات تفصيلية

const INITIAL_CATEGORIES = [
  { id: 'all', name: 'جميع المعدات', icon: 'fa-layer-group', count: 0 },
  { id: 'cameras', name: 'كاميرات سينما وميرورليس', icon: 'fa-camera', count: 0, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80' },
  { id: 'stands', name: 'ستاندات وترايبود', icon: 'fa-monument', count: 0, image: 'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=300&q=80' },
  { id: 'lighting', name: 'إضاءات وسوفت بوكس', icon: 'fa-lightbulb', count: 0, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=300&q=80' },
  { id: 'filters', name: 'فلاتر وعدسات', icon: 'fa-circle-half-stroke', count: 0, image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=300&q=80' },
  { id: 'memory', name: 'ميموريات وكروت ذاكرة', icon: 'fa-sd-card', count: 0, image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80' },
  { id: 'chargers_batteries', name: 'شواحن وبطاريات', icon: 'fa-battery-full', count: 0, image: 'https://images.unsplash.com/photo-1619725002198-6a689b72f41d?auto=format&fit=crop&w=300&q=80' },
  { id: 'bags', name: 'شناتي وحقائب معدات', icon: 'fa-suitcase-rolling', count: 0, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80' },
  { id: 'stabilizers', name: 'ستيبلايزرز وجيمبل', icon: 'fa-gamepad', count: 0, image: 'https://images.unsplash.com/photo-1589872545564-96464f89d311?auto=format&fit=crop&w=300&q=80' },
  { id: 'cages', name: 'كيج كاميرا وتجهيزات', icon: 'fa-border-all', count: 0, image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=300&q=80' },
  { id: 'straps', name: 'أحزمة وستراب كاميرا', icon: 'fa-ribbon', count: 0, image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=300&q=80' },
  { id: 'covers', name: 'أغطية وحماية الكاميرات', icon: 'fa-shield-halved', count: 0, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' }
];

const INITIAL_PRODUCTS = [
  // 1. كاميرات
  {
    id: 'CAM-001',
    name: 'Sony FX3 Cinema Line',
    nameEn: 'Full-Frame 4K 120p Camera',
    category: 'cameras',
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
    name: 'DJI RS 4 Mini Lightweight Travel Gimbal',
    nameEn: 'مانع اهتزاز ميني خفيف الوزن يدعم التصوير العمودي فوري لتيك توك',
    category: 'stabilizers',
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
    nameEn: '200W Daylight COB Light',
    category: 'lighting',
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
      'درجة اللون': '5600K نهارية ثابتة',
      'التحكم': 'تطبيق هاتف ذكي بلوتوث Sidus Link'
    }
  },
  {
    id: 'LGT-002',
    name: 'Aputure Lantern 65cm Quick-Setup Softbox',
    nameEn: 'سوفت بوكس كروي فانوسي يوزع الإضاءة بزاوية 360 درجة ناعمة',
    category: 'lighting',
    price: 89,
    oldPrice: 110,
    rating: 4.8,
    reviewsCount: 88,
    stock: 20,
    badge: '',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    description: 'سوفت بوكس فانوسي كروي ينتج إضاءة ناعمة محيطية 360 درجة، مثالي للبثوث وصناع المحتوى وتصوير المقابلات مع تركيب سريع في ثوانٍ معدودة.',
    specs: {
      'القطر': '65 سم (26 بوصة)',
      'التركيب': 'فتح سريع بضغطة واحدة',
      'القاعدة': 'Bowens Mount قياسية'
    }
  },

  // 4. ستاندات وترايبود
  {
    id: 'STD-001',
    name: 'Manfrotto Befree Advanced Carbon Fiber Tripod',
    nameEn: 'ترايبود سفر احترافي من ألياف الكربون خفيف وقوي مع رأس هيدروليكي',
    category: 'stands',
    price: 349,
    oldPrice: 399,
    rating: 4.8,
    reviewsCount: 78,
    stock: 14,
    badge: 'كربون فايبر',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=800&q=80',
    description: 'ترايبود سفر احترافي مصنوع من ألياف الكربون فائقة القوة وخفة الوزن، مزود برأس كروي هيدروليكي 494 Center Ball Head مع أقفال M-Lock سريعة.',
    specs: {
      'الخامة': 'ألياف كربون 100%',
      'أقصى حمولة': '9 كجم',
      'أقصى ارتفاع': '150 سم'
    }
  },
  {
    id: 'STD-002',
    name: 'Heavy-Duty 3.3m Stainless Steel C-Stand with Boom Arm',
    nameEn: 'ستاند سي ستاند فولاذي مع ذراع بوم أرم لحمل الإضاءات الثقيلة في الاستوديو',
    category: 'stands',
    price: 189,
    oldPrice: 220,
    rating: 4.9,
    reviewsCount: 65,
    stock: 18,
    badge: 'استوديو ثقيل',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&w=800&q=80',
    description: 'ستاند سي ستاند من الستانلس ستيل المقاوم للصدأ للاستوديوهات الاحترافية مع ذراع تثبيت Grip Head وبوم أرم لحمل الإضاءات الثقيلة والسوفت بوكس بأمان تام.',
    specs: {
      'أقصى ارتفاع': '330 سم (3.3 متر)',
      'الذراع': 'بوم أرم 128 سم مع رأس قبضة مزدوج',
      'الحمولة': 'حتى 20 كجم'
    }
  },

  // 5. فلاتر وعدسات
  {
    id: 'FLT-001',
    name: 'PolarPro 82mm Peter McKinnon Variable ND (2-5 Stop)',
    nameEn: 'فلتر بولاربرو إن دي المتغير زجاج ألماني نقي بدون تشويه سينمائي',
    category: 'filters',
    price: 249,
    oldPrice: 280,
    rating: 5.0,
    reviewsCount: 142,
    stock: 11,
    badge: 'زجاج كوارتز',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    description: 'فلتر ND متغير من زجاج الكوارتز الألماني النقي يمنحك تحكماً دقيقاً في التعريض الضوئي من 2 إلى 5 وقفات بدون أي تشويه ألوان أو خطوط متقاطعة X-Pattern.',
    specs: {
      'القطر': '82 مم',
      'الوقفات': '2 إلى 5 وقفات (ND4 إلى ND32)',
      'الزجاج': 'CinemaSeries Quartz Glass'
    }
  },
  {
    id: 'FLT-002',
    name: 'NiSi 77mm Black Mist 1/4 Cinema Effect Filter',
    nameEn: 'فلتر ضباب سينمائي ينعم ملامح البشرة ويمنح الهايلايت هالة سينمائية دافئة',
    category: 'filters',
    price: 79,
    oldPrice: 95,
    rating: 4.8,
    reviewsCount: 94,
    stock: 16,
    badge: 'طابع سينمائي',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    description: 'فلتر تنعيم وتشتيت الضوء لتخفيف حدة المستشعرات الرقمية، يمنح الهايلايت هالة ناعمة سينمائية دافئة وينعم تفاصيل البشرة دون فقدان التباين.',
    specs: {
      'القطر': '77 مم',
      'الكثافة': '1/4 Black Mist',
      'الطلاء': 'Nano Coating مضاد للماء والخدوش'
    }
  },

  // 6. ميموريات وكروت ذاكرة
  {
    id: 'MEM-001',
    name: 'Sony TOUGH CFexpress Type A 160GB Memory Card',
    nameEn: 'بطاقة ذاكرة سوني تاف غير قابلة للكسر لتسجيل 4K 120p بسرعة 800MB/s',
    category: 'memory',
    price: 369,
    oldPrice: 399,
    rating: 4.9,
    reviewsCount: 110,
    stock: 15,
    badge: 'مقاوم للصدمات',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description: 'أقوى بطاقة ذاكرة CFexpress Type A بتصميم TOUGH غير قابل للكسر، سرعة قراءة تصل إلى 800 ميجابايت/ثانية وكتابة 700 ميجابايت/ثانية لتصوير 4K 120p و All-Intra.',
    specs: {
      'السعة': '160 جيجابايت',
      'سرعة القراءة': '800 ميجابايت/ثانية',
      'سرعة الكتابة': '700 ميجابايت/ثانية'
    }
  },

  // 7. شواحن وبطاريات
  {
    id: 'BAT-001',
    name: 'SmallRig NP-FZ100 USB-C Rechargeable Battery',
    nameEn: 'بطارية لكاميرات سوني تشحن مباشرة بسلك تايب سي دون الحاجة لشاحن خارجي',
    category: 'chargers_batteries',
    price: 49,
    oldPrice: 65,
    rating: 4.8,
    reviewsCount: 220,
    stock: 30,
    badge: 'منفذ Type-C',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1619725002198-6a689b72f41d?auto=format&fit=crop&w=800&q=80',
    description: 'بطارية بديلة لكاميرات سوني تتميز بمنفذ شحن USB-C مدمج لشحنها مباشرة من الباوربانك أو شاحن الهاتف دون الحاجة لشاحن خارجي.',
    specs: {
      'السعة': '2400 مللي أمبير',
      'المنفذ': 'USB Type-C مدمج للشحن السريع',
      'التوافق': 'Sony FX3, FX30, A7IV, A7SIII, A7CII'
    }
  },
  {
    id: 'BAT-002',
    name: 'SmallRig VB99 Pro Mini V-Mount Battery 99Wh',
    nameEn: 'بطارية سينمائية ميني مصرح بها في الطائرات مع شاشة OLED ومنافذ 100W PD',
    category: 'chargers_batteries',
    price: 279,
    oldPrice: 320,
    rating: 4.9,
    reviewsCount: 55,
    stock: 8,
    badge: '100W PD',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    description: 'بطارية V-Mount سينمائية فائقة الصغر مطابقة لمعايير الطيران، بقدرة 99Wh وشاشة ملونة TFT لعرض الوقت المتبقي، ومنافذ شحن 100W PD و D-Tap و DC.',
    specs: {
      'السعة': '99Wh (معتمدة للسفر بالطائرات)',
      'المنافذ': 'USB-C 100W PD, D-Tap, USB-A, DC',
      'الشاشة': 'TFT ملونة تعرض مستوى الشحن والواط'
    }
  },

  // 8. حقائب وشناتي
  {
    id: 'BAG-001',
    name: 'Wandrd PRVKE 31L V3 Photography Backpack',
    nameEn: 'حقيبة ظهر المصورين الأشهر عالمياً مقاومة للأمطار مع وصول جانبي سريع للكاميرا',
    category: 'bags',
    price: 299,
    oldPrice: 350,
    rating: 4.9,
    reviewsCount: 130,
    stock: 10,
    badge: 'مقاومة للماء',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    description: 'حقيبة المصورين الأكثر أناقة وعملية، مصنوعة من القماش المشمع المقاوم للماء وسحابات YKK محكمة، مع وصول جانبي سريع للكاميرا ومكان مخصص للابتوب والترايبود.',
    specs: {
      'السعة': '31 لتر وتتوسع إلى 36 لتر',
      'المادة': 'قماش Tarpaulin مقاوم للمطر وسحابات عازلة',
      'حجرة اللابتوب': 'تتسع لأجهزة حتى 16 بوصة'
    }
  },

  // 9. كيج كاميرا وتجهيزات التثبيت
  {
    id: 'CAG-001',
    name: 'SmallRig Camera Cage for Sony FX3 & FX30',
    nameEn: 'قفص كاميرا سمول ريج لكاميرات سوني FX3/FX30 من الألومنيوم مع قفل كابل HDMI',
    category: 'cages',
    price: 99,
    oldPrice: 120,
    rating: 4.8,
    reviewsCount: 175,
    stock: 18,
    badge: 'أكثر طلباً',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80',
    description: 'كيج حماية وتثبيت ألومنيوم مصمم بدقة متناهية ليطابق هيكل كاميرات Sony FX3/FX30، يوفر فتحات براغي 1/4 و 3/8 وقاعدة Arca-Swiss سريعة ومنفذ Cold Shoe.',
    specs: {
      'الخامة': 'ألومنيوم طيران مدمج',
      'التوافق': 'Sony FX3 و FX30 متوافق مع المقبض الصوتي الأصلي XLR',
      'القاعدة': 'Arca-Swiss جاهزة للجيمبل والترايبود'
    }
  },

  // 10. أحزمة وستراب
  {
    id: 'STP-001',
    name: 'Peak Design Slide Camera Sling Strap',
    nameEn: 'حزام كتف بيك ديزاين سريع الفك بنظام Anchor Links فائق التحمل',
    category: 'straps',
    price: 69,
    oldPrice: 85,
    rating: 4.9,
    reviewsCount: 310,
    stock: 25,
    badge: 'سريع الفك',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80',
    description: 'الحزام الأكثر شهرة عالمياً بين المصورين بنظام الروابط Anchor Links السريعة، يتميز بحشوة داخلية ناعمة لتوزيع وزن الكاميرا الثقيلة على الكتف بدون إجهاد.',
    specs: {
      'قوة التحمل': 'تتحمل روابط Anchor حتى 90 كجم من الوزن',
      'العرض': '45 مم مبطن ناعم'
    }
  },

  // 11. أغطية وحماية
  {
    id: 'COV-001',
    name: 'EasyCover Silicone Armor Case for Sony A7IV',
    nameEn: 'غطاء سيليكون مدرع يحمي جسم الكاميرا من الصدمات والخدوش مع الحفاظ على الأزرار',
    category: 'covers',
    price: 35,
    oldPrice: 45,
    rating: 4.7,
    reviewsCount: 80,
    stock: 20,
    badge: 'حماية صدمات',
    section: 'recommended',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    description: 'جراب سيليكون مصبوب خصيصاً يحمي جسم الكاميرا من الخدوش والصدمات دون إعاقة الوصول إلى الأزرار والشاشة الدوارة ومنافذ البطارية والكروت.',
    specs: {
      'الخامة': 'سيليكون ناعم عالي الكثافة مضاد للانزلاق',
      'الحماية': 'ضد الخدوش والضربات والأتربة'
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_CATEGORIES, INITIAL_PRODUCTS };
}
