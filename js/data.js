// بيانات المنتجات الأصلية لمتجر TOP CAM لمعدات التصوير والسينما
// تم تحديث الكتالوج الكامل وفق ملف الإكسل المحدث (كاميرات، عدسات، صوتيات، إضاءة، ستاندات، كيج، شاشات)

const INITIAL_CATEGORIES = [
  {
    "id": "all",
    "name": "جميع المعدات",
    "icon": "fa-layer-group",
    "count": 485
  },
  {
    "id": "cameras",
    "name": "كاميرات سينما وميرورليس",
    "icon": "fa-camera",
    "count": 40,
    "image": "images/camera_body.jpg"
  },
  {
    "id": "filters",
    "name": "عدسات وفلاتر",
    "icon": "fa-circle-half-stroke",
    "count": 50,
    "image": "images/filter_lens.jpg"
  },
  {
    "id": "audio",
    "name": "مايكات وأنظمة صوت",
    "icon": "fa-microphone",
    "count": 48,
    "image": "images/camera_dials.jpg"
  },
  {
    "id": "lighting",
    "name": "إضاءات وسوفت بوكس",
    "icon": "fa-lightbulb",
    "count": 174,
    "image": "images/flash_light.jpg"
  },
  {
    "id": "gimbals",
    "name": "ستيبلايزرز وجيمبل",
    "icon": "fa-gamepad",
    "count": 14,
    "image": "images/gimbal_stab.jpg"
  },
  {
    "id": "stands",
    "name": "ستاندات وترايبود",
    "icon": "fa-monument",
    "count": 49,
    "image": "images/tripod_stand.jpg"
  },
  {
    "id": "cages",
    "name": "كيج كاميرا وتجهيزات",
    "icon": "fa-border-all",
    "count": 59,
    "image": "images/camera_cage.jpg"
  },
  {
    "id": "monitors",
    "name": "شاشات وتلقين Teleprompter",
    "icon": "fa-tv",
    "count": 37,
    "image": "images/camera_dials.jpg"
  },
  {
    "id": "chargers_batteries",
    "name": "شواحن وبطاريات V-Mount",
    "icon": "fa-battery-full",
    "count": 8,
    "image": "images/vmount_battery.jpg"
  },
  {
    "id": "bags",
    "name": "شناتي وحقائب معدات",
    "icon": "fa-suitcase-rolling",
    "count": 6,
    "image": "images/camera_bag.jpg"
  }
];

const INITIAL_PRODUCTS = [
  {
    "id": "CAM-001",
    "name": "Sony A7 III - Full-frame Mirrorless Camera Body Only",
    "nameEn": "Sony A7 III - Full-frame Mirrorless Camera Body Only",
    "category": "cameras",
    "brand": "Sony",
    "price": 1000,
    "oldPrice": 1050,
    "rating": 4.9,
    "reviewsCount": 104,
    "stock": 4,
    "badge": "وفر $50",
    "section": "trending",
    "image": "images/cam_sony_a7iii.jpg",
    "description": "كاميرا سوني Sony A7 III - Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "24.2MP Full-Frame Exmor R BSI CMOS",
      "الفيديو": "4K 30p HDR (HLG) & S-Log3 / 1080p 120fps",
      "نظام التركيز": "693 نقاط فوكس مع Real-Time Eye AF للبشر والحيوانات",
      "مانع الاهتزاز": "5-Axis In-Body Image Stabilization (5.0 وقفات)",
      "حساسية الضوء": "ISO 100-51,200 (يتوسع حتى 204,800)",
      "سرعة الالتقاط": "10 إطارات بالثانية مع تتبع AF/AE كامل",
      "المنافذ والذاكرة": "منفذان مزدوجان Dual SD Slots (UHS-II/UHS-I)",
      "البطارية": "Sony NP-FZ100 (حتى 710 لقطات)",
      "المانت": "Sony E-Mount (Full-Frame)",
      "الشاشة": "شاشة لمس 3.0 بوصة قابلة للإمالة بدقة 921K نقطة",
      "الوزن": "650 جم هيكل الكاميرا",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-002",
    "name": "Sony A7 IV - Full-frame Mirrorless Camera Body Only",
    "nameEn": "Sony A7 IV - Full-frame Mirrorless Camera Body Only",
    "category": "cameras",
    "brand": "Sony",
    "price": 1400,
    "oldPrice": 1450,
    "rating": 4.9,
    "reviewsCount": 53,
    "stock": 3,
    "badge": "وفر $50",
    "section": "trending",
    "image": "images/cam_sony_a7iv.jpg",
    "description": "كاميرا سوني Sony A7 IV - Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "33MP Full-Frame Exmor R BSI CMOS",
      "الفيديو": "4K 60p 10-Bit 4:2:2 All-Intra / 7K Oversampling مع S-Cinetone",
      "نظام التركيز": "759 نقطة تركيز بؤري ذكي مع تتبع عيون البشر والحيوانات والطيور",
      "مانع الاهتزاز": "5-Axis In-Body Stabilization حتى 5.5 وقفات",
      "المنافذ والذاكرة": "منفذان مزدوجان: CFexpress Type A و SD UHS-II",
      "الشاشة": "شاشة لمسية متغيرة الزوايا Vari-Angle LCD بدقة 1.03M",
      "البطارية": "Sony NP-FZ100 (حتى 580 لقطة)",
      "المانت": "Sony E-Mount",
      "الوزن": "658 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-003",
    "name": "Sony A7 V - Full-frame Mirrorless Camera Body Only",
    "nameEn": "Sony A7 V - Full-frame Mirrorless Camera Body Only",
    "category": "cameras",
    "brand": "Sony",
    "price": 2100,
    "oldPrice": 2200,
    "rating": 4.9,
    "reviewsCount": 107,
    "stock": 10,
    "badge": "وفر $100",
    "section": "trending",
    "image": "images/cam_sony_a7iv.jpg",
    "description": "كاميرا سوني Sony A7 V - Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "36MP Full-Frame Exmor R BSI CMOS مع وحدة الذكاء الاصطناعي AI Unit",
      "الفيديو": "4K 120p / 4K 60p 10-Bit 4:2:2 مع S-Cinetone و S-Log3",
      "نظام التركيز": "AI Deep Learning AF مع تقدير وضعية الأجسام",
      "مانع الاهتزاز": "مانع اهتزاز خماسي المحاور فائق القوة حتى 8.0 وقفات",
      "المنافذ والذاكرة": "منفذان Dual CFexpress Type A / SD UHS-II",
      "الشاشة": "شاشة لمس رباعية المحاور 4-Axis Multi-Angle LCD",
      "البطارية": "Sony NP-FZ100 محسنة",
      "الوزن": "675 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-004",
    "name": "Sony A7s iii Full-frame Mirrorless Camera Body Only",
    "nameEn": "Sony A7s iii Full-frame Mirrorless Camera Body Only",
    "category": "cameras",
    "brand": "Sony",
    "price": 2100,
    "oldPrice": 2200,
    "rating": 4.9,
    "reviewsCount": 98,
    "stock": 10,
    "badge": "وفر $100",
    "section": "trending",
    "image": "images/cam_sony_a7siii.jpg",
    "description": "كاميرا سوني Sony A7s iii Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "12.1MP Full-Frame Exmor R BSI CMOS مخصص للإضاءة المنخفضة والفيديو",
      "الفيديو": "4K 120p 10-Bit 4:2:2 All-Intra بدون كروب وبدون ارتفاع حرارة / 16-Bit RAW",
      "نظام التركيز": "759 نقطة فوكس مع حساسية فائقة حتى EV -6 في الظلام الدامس",
      "مانع الاهتزاز": "5-Axis IBIS مع وضع Active Mode الرقمي المتقدم",
      "حساسية الضوء": "نطاق هائل ISO 80-102,400 (يتوسع حتى 409,600)",
      "المنافذ والذاكرة": "منفذان ثنائيان CFexpress Type A و SD UHS-II",
      "الشاشة والمنظار": "شاشة لمس مفصلية + منظار OLED EVF بدقة 9.44 مليون نقطة",
      "الوزن": "699 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-005",
    "name": "Sony A7r V Full-frame Mirrorless Camera Body Only",
    "nameEn": "Sony A7r V Full-frame Mirrorless Camera Body Only",
    "category": "cameras",
    "brand": "Sony",
    "price": 2160,
    "oldPrice": 2250,
    "rating": 4.9,
    "reviewsCount": 121,
    "stock": 4,
    "badge": "وفر $90",
    "section": "trending",
    "image": "images/cam_sony_a7rv.jpg",
    "description": "كاميرا سوني Sony A7r V Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "61MP Full-Frame Exmor R BSI CMOS بأعلى دقة تفاصيل",
      "الفيديو": "8K 24/25p 10-Bit / 4K 60p 10-Bit / 4K 30p مسحوب من 6.2K",
      "نظام التركيز": "وحدة معالجة ذكاء اصطناعي مخصصة AI Processing Unit",
      "مانع الاهتزاز": "أقوى مانع اهتزاز من سوني يصل حتى 8.0 وقفات تثبيت",
      "المنافذ والذاكرة": "منفذان ثنائيان يدعمان CFexpress Type A و SD UHS-II",
      "الشاشة": "شاشة 4-Axis Multi-Angle مبتكرة تجمع بين الإمالة والدوران الكامل",
      "الوزن": "723 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-006",
    "name": "Sony FX30 Digital Cinema Camera",
    "nameEn": "Sony FX30 Digital Cinema Camera",
    "category": "cameras",
    "brand": "Sony",
    "price": 1200,
    "oldPrice": 1250,
    "rating": 4.9,
    "reviewsCount": 81,
    "stock": 3,
    "badge": "وفر $50",
    "section": "trending",
    "image": "images/prod_sony_fx3_white.jpg",
    "description": "كاميرا سوني Sony FX30 Digital Cinema Camera الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "26MP APS-C / Super 35mm Exmor R BSI CMOS فئة السينما",
      "الفيديو": "4K Super 35 مع 6K Oversampling حتى 120fps 10-Bit 4:2:2 مع S-Cinetone",
      "نظام التركيز": "495 نقطة فوكس Phase Detection مع تتبع فوري للعيون والوجه",
      "مانع الاهتزاز": "5-Axis In-Body Stabilization مع وضع Active Mode",
      "نظام التبريد": "مروحة تبريد داخلية مدمجة للتصوير المستمر لساعات دون انقطاع",
      "الهيكل": "هيكل سينمائي متين بفتحات مسامير 1/4\"-20 لتثبيت الملحقات مباشرة",
      "المنافذ والذاكرة": "منفذان مزدوجان CFexpress Type A / SD UHS-II",
      "الوزن": "646 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-007",
    "name": "Sony FX2 Digital Cinema Camera",
    "nameEn": "Sony FX2 Digital Cinema Camera",
    "category": "cameras",
    "brand": "Sony",
    "price": 2000,
    "oldPrice": 2100,
    "rating": 4.9,
    "reviewsCount": 69,
    "stock": 9,
    "badge": "وفر $100",
    "section": "trending",
    "image": "images/prod_sony_fx3_white.jpg",
    "description": "كاميرا سوني Sony FX2 Digital Cinema Camera الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "Full-Frame Exmor R CMOS بتصميم سينمائي متقدم",
      "الفيديو": "4K 120fps 10-Bit 4:2:2 All-Intra مع S-Log3 و S-Cinetone",
      "نظام التركيز": "تركيز بؤري سينمائي ذكي مع AF Assist و Focus Map",
      "مانع الاهتزاز": "تثبيت بصري مدمج خماسي المحاور مع دعم بيانات الجيروسكوب Catalyst",
      "الهيكل": "تصميم مدمج خفيف الوزن بأزرار تحكم سينمائية مخصصة",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-008",
    "name": "Sony FX3a Full-Frame Cinema Camera",
    "nameEn": "Sony FX3a Full-Frame Cinema Camera",
    "category": "cameras",
    "brand": "Sony",
    "price": 2550,
    "oldPrice": 2650,
    "rating": 4.9,
    "reviewsCount": 86,
    "stock": 10,
    "badge": "وفر $100",
    "section": "trending",
    "image": "images/prod_sony_fx3_white.jpg",
    "description": "كاميرا سوني Sony FX3a Full-Frame Cinema Camera الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "12.1MP Full-Frame Exmor R BSI CMOS من سلسلة Cinema Line",
      "الفيديو": "4K حتى 120p بدون اقتطاع / 10-Bit 4:2:2 All-Intra / RAW Output 16-Bit",
      "نظام التركيز": "Fast Hybrid AF مع 627 نقطة وتتبع بالذكاء الاصطناعي",
      "مانع الاهتزاز": "مانع اهتزاز بصري خماسي المحاور 5-Axis + Active Mode",
      "حساسية الضوء": "Dual Base ISO 800 و 12,800 مع مدى ديناميكي 15+ وقفة",
      "نظام التبريد": "مروحة تبريد داخلية صامتة لضمان التسجيل غير المحدود",
      "الوزن": "715 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-009",
    "name": "Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens",
    "nameEn": "Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens",
    "category": "cameras",
    "brand": "Sony",
    "price": 830,
    "oldPrice": 860,
    "rating": 4.9,
    "reviewsCount": 56,
    "stock": 10,
    "badge": "وفر $30",
    "section": "trending",
    "image": "images/cam_sony_zve10.jpg",
    "description": "كاميرا سوني Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "26MP APS-C Exmor R BSI CMOS لصناع المحتوى والفلوج",
      "الفيديو": "4K 60p 10-Bit 4:2:2 مسحوب من دقة 5.6K بدون دمج بكسلات",
      "نظام التركيز": "759 نقطة تركيز مع أوضاع Product Showcase و Background Defocus",
      "الصوت": "مايكروفون استوديو ثلاثي الكبسولات مدمج مع حاجب رياح احترافي Windscreen",
      "العدسة المرفقة": "مرفق عدسة سوني الأصلية القابلة للتقريب 16-50mm OSS",
      "الشاشة": "شاشة لمسية تدور 180 درجة مخصصة لصناع المحتوى",
      "البطارية": "بطارية سوني الكبيرة NP-FZ100 لمضاعفة وقت التصوير",
      "الوزن": "377 جم فقط",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-010",
    "name": "Sony ZV-E10 Mirrorless Camera with 16-50mm Lens",
    "nameEn": "Sony ZV-E10 Mirrorless Camera with 16-50mm Lens",
    "category": "cameras",
    "brand": "Sony",
    "price": 580,
    "oldPrice": 600,
    "rating": 4.9,
    "reviewsCount": 56,
    "stock": 7,
    "badge": "وفر $20",
    "section": "trending",
    "image": "images/cam_sony_zve10.jpg",
    "description": "كاميرا سوني Sony ZV-E10 Mirrorless Camera with 16-50mm Lens الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "24.2MP APS-C Exmor CMOS",
      "الفيديو": "4K 30p مع 6K Oversampling و 1080p حتى 120 إطار في الثانية",
      "نظام التركيز": "تركيز سريع 425 نقطة مع تتبع العيون وعرض المنتجات",
      "العدسة المرفقة": "عدسة سوني 16-50mm بمثبت بصري OSS مدمج",
      "الشاشة": "شاشة لمسية مفصلية تدور بالكامل",
      "الوزن": "343 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-011",
    "name": "Sony a6400 with 16-50 lens",
    "nameEn": "Sony a6400 with 16-50 lens",
    "category": "cameras",
    "brand": "Sony",
    "price": 650,
    "oldPrice": 680,
    "rating": 4.9,
    "reviewsCount": 59,
    "stock": 6,
    "badge": "وفر $30",
    "section": "trending",
    "image": "images/new_camera.jpg",
    "description": "كاميرا سوني Sony a6400 with 16-50 lens الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "24.2MP APS-C Exmor CMOS",
      "الفيديو": "4K HDR (HLG) مع S-Log3/S-Log2 و 1080p بمعدل 120fps للحركة البطيئة",
      "نظام التركيز": "أسرع تركيز بؤري 0.02 ثانية مع Real-time Eye AF",
      "العدسة المرفقة": "مرفق عدسة E PZ 16-50mm f/3.5-5.6 OSS",
      "الشاشة": "شاشة لمس قابلة للإمالة بزاوية 180 درجة للأعلى",
      "الوزن": "403 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-012",
    "name": "Sony a6700 Body Only",
    "nameEn": "Sony a6700 Body Only",
    "category": "cameras",
    "brand": "Sony",
    "price": 1050,
    "oldPrice": 1100,
    "rating": 4.9,
    "reviewsCount": 57,
    "stock": 4,
    "badge": "وفر $50",
    "section": "trending",
    "image": "images/new_camera.jpg",
    "description": "كاميرا سوني Sony a6700 Body Only الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "26MP APS-C Exmor R BSI CMOS الأحدث في كاميرات سوني APS-C",
      "الفيديو": "4K 120p / 4K 60p مسحوب من 6K بنقاء 10-Bit 4:2:2 مع ألوان S-Cinetone",
      "نظام التركيز": "معالج الذكاء الاصطناعي AI Unit للتعرف على مختلف الكائنات والمركبات",
      "مانع الاهتزاز": "مانع اهتزاز بصري خماسي المحاور 5-Axis مدمج 5.0 وقفات",
      "البطارية": "بطارية NP-FZ100 الكبيرة لعمر تشغيل مضاعف",
      "الوزن": "493 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-013",
    "name": "Sony a7C II Mirrorless Body only",
    "nameEn": "Sony a7C II Mirrorless Body only",
    "category": "cameras",
    "brand": "Sony",
    "price": 1350,
    "oldPrice": 1400,
    "rating": 4.9,
    "reviewsCount": 120,
    "stock": 6,
    "badge": "وفر $50",
    "section": "trending",
    "image": "images/cam_sony_a7iv.jpg",
    "description": "كاميرا سوني Sony a7C II Mirrorless Body only الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "33MP Full-Frame Exmor R BSI CMOS بهيكل فائق الصغر",
      "الفيديو": "4K 60p 10-bit 4:2:2 All-Intra و 7K Oversampling 4K 30p مع S-Cinetone",
      "نظام التركيز": "وحدة الذكاء الاصطناعي AI مع تتبع عالي الدقة",
      "مانع الاهتزاز": "مانع اهتزاز بصري داخلي خماسي المحاور حتى 7.0 وقفات",
      "الوزن": "514 جم فقط (أخف كاميرا فل فريم بمستشعر 33 ميجابكسل)",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-014",
    "name": "Sony FX6 Full-Frame Cinema Camera (Body Only)",
    "nameEn": "Sony FX6 Full-Frame Cinema Camera (Body Only)",
    "category": "cameras",
    "brand": "Sony",
    "price": 4000,
    "oldPrice": 4200,
    "rating": 4.9,
    "reviewsCount": 116,
    "stock": 5,
    "badge": "وفر $200",
    "section": "trending",
    "image": "images/cam_sony_fx6.jpg",
    "description": "كاميرا سوني Sony FX6 Full-Frame Cinema Camera (Body Only) الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
    "specs": {
      "المستشعر": "10.2MP Full-Frame Back-Illuminated Exmor R CMOS سينمائي احترافي",
      "الفيديو": "DCI 4K حتى 60p / UHD 4K حتى 120p مع 16-Bit RAW خارجي",
      "المدى الديناميكي": "مدى ديناميكي مذهل 15+ وقفة مع ألوان S-Cinetone الرسمية",
      "فلتر ND مدمج": "فلتر كثافة حيادية إلكتروني متغير مدمج Electronic Variable ND",
      "حساسية الضوء": "Dual Base ISO 800 و 12,800 مع حساسية قصوى 409,600",
      "الصوت": "مقبض علوي بمنافذ صوت احترافية 2x XLR Inputs مع تحكم كامل",
      "نظام التبريد": "نظام تهوية نشط متطور للتصوير المستمر في أصعب الظروف",
      "الوزن": "890 جم (هيكل الكاميرا الأساسي)",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "LEN-015",
    "name": "SONY FE 100mm F2.8 Macro GM OSS",
    "nameEn": "SONY FE 100mm F2.8 Macro GM OSS",
    "category": "filters",
    "brand": "Sony",
    "price": 1090,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 29,
    "stock": 10,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 100mm F2.8 Macro GM OSS الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-016",
    "name": "SONY FE 85mm F1.4 GM II",
    "nameEn": "SONY FE 85mm F1.4 GM II",
    "category": "filters",
    "brand": "Sony",
    "price": 1470,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 9,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 85mm F1.4 GM II الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-017",
    "name": "SONY FE 85mm F1.4 GM",
    "nameEn": "SONY FE 85mm F1.4 GM",
    "category": "filters",
    "brand": "Sony",
    "price": 890,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 34,
    "stock": 8,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 85mm F1.4 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-018",
    "name": "SONY FE 16-35mm F2.8 GM II",
    "nameEn": "SONY FE 16-35mm F2.8 GM II",
    "category": "filters",
    "brand": "Sony",
    "price": 1550,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 61,
    "stock": 15,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 16-35mm F2.8 GM II الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-019",
    "name": "SONY FE 16-35mm F2.8 GM",
    "nameEn": "SONY FE 16-35mm F2.8 GM",
    "category": "filters",
    "brand": "Sony",
    "price": 1260,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 24,
    "stock": 15,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 16-35mm F2.8 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-020",
    "name": "SONY FE 70-200mm F2.8 GM OSS II",
    "nameEn": "SONY FE 70-200mm F2.8 GM OSS II",
    "category": "filters",
    "brand": "Sony",
    "price": 1700,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 27,
    "stock": 6,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 70-200mm F2.8 GM OSS II الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-021",
    "name": "SONY FE 70-200mm F2.8 GM OSS",
    "nameEn": "SONY FE 70-200mm F2.8 GM OSS",
    "category": "filters",
    "brand": "Sony",
    "price": 1370,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 8,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 70-200mm F2.8 GM OSS الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-022",
    "name": "SONY FE 50mm F1.4 GM",
    "nameEn": "SONY FE 50mm F1.4 GM",
    "category": "filters",
    "brand": "Sony",
    "price": 970,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 8,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 50mm F1.4 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-023",
    "name": "SONY FE 50mm F1.2 GM",
    "nameEn": "SONY FE 50mm F1.2 GM",
    "category": "filters",
    "brand": "Sony",
    "price": 1370,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 52,
    "stock": 12,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 50mm F1.2 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-024",
    "name": "SONY FE 24-70mm F2.8 GM II",
    "nameEn": "SONY FE 24-70mm F2.8 GM II",
    "category": "filters",
    "brand": "Sony",
    "price": 1420,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 23,
    "stock": 6,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 24-70mm F2.8 GM II الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-025",
    "name": "SONY FE 24-70mm F2.8 GM",
    "nameEn": "SONY FE 24-70mm F2.8 GM",
    "category": "filters",
    "brand": "Sony",
    "price": 1130,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 55,
    "stock": 6,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 24-70mm F2.8 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-026",
    "name": "SONY FE 35mm F1.4 GM",
    "nameEn": "SONY FE 35mm F1.4 GM",
    "category": "filters",
    "brand": "Sony",
    "price": 980,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 37,
    "stock": 7,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 35mm F1.4 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-027",
    "name": "SONY FE 90mm F2.8 Macro G OSS",
    "nameEn": "SONY FE 90mm F2.8 Macro G OSS",
    "category": "filters",
    "brand": "Sony",
    "price": 660,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 15,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 90mm F2.8 Macro G OSS الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-028",
    "name": "SONY FE 24mm F1.4 GM",
    "nameEn": "SONY FE 24mm F1.4 GM",
    "category": "filters",
    "brand": "Sony",
    "price": 820,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 10,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 24mm F1.4 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-029",
    "name": "SONY E 18-135mm F3.5-5.6 OSS",
    "nameEn": "SONY E 18-135mm F3.5-5.6 OSS",
    "category": "filters",
    "brand": "Sony",
    "price": 420,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 23,
    "stock": 14,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY E 18-135mm F3.5-5.6 OSS الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-030",
    "name": "SONY FE 24-105mm F4 G OSS Lens",
    "nameEn": "SONY FE 24-105mm F4 G OSS Lens",
    "category": "filters",
    "brand": "Sony",
    "price": 650,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 53,
    "stock": 11,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 24-105mm F4 G OSS Lens الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-031",
    "name": "SONYFE 85mm F1.8",
    "nameEn": "SONYFE 85mm F1.8",
    "category": "filters",
    "brand": "Sony",
    "price": 400,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 33,
    "stock": 7,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONYFE 85mm F1.8 الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-032",
    "name": "SONY FE 50mm F1.8",
    "nameEn": "SONY FE 50mm F1.8",
    "category": "filters",
    "brand": "Sony",
    "price": 190,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 5,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SONY FE 50mm F1.8 الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Sony E-Mount",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-033",
    "name": "SIGMA 24-70mm F2.8 DG DN II for SONY",
    "nameEn": "SIGMA 24-70mm F2.8 DG DN II for SONY",
    "category": "filters",
    "brand": "Sigma",
    "price": 820,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 60,
    "stock": 14,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SIGMA 24-70mm F2.8 DG DN II for SONY الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-034",
    "name": "SIGMA 24mm F/1.4 DG DN",
    "nameEn": "SIGMA 24mm F/1.4 DG DN",
    "category": "filters",
    "brand": "Sigma",
    "price": 600,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 52,
    "stock": 15,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SIGMA 24mm F/1.4 DG DN الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-035",
    "name": "SIGMA 35MM F 1.4 DG DN",
    "nameEn": "SIGMA 35MM F 1.4 DG DN",
    "category": "filters",
    "brand": "Sigma",
    "price": 660,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 50,
    "stock": 10,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SIGMA 35MM F 1.4 DG DN الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-036",
    "name": "SIGMA 50mm f/1.4 DG HSM Art",
    "nameEn": "SIGMA 50mm f/1.4 DG HSM Art",
    "category": "filters",
    "brand": "Sigma",
    "price": 660,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 40,
    "stock": 13,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SIGMA 50mm f/1.4 DG HSM Art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-037",
    "name": "SIGMA 14-24mm f/2.8 DG DN Art",
    "nameEn": "SIGMA 14-24mm f/2.8 DG DN Art",
    "category": "filters",
    "brand": "Sigma",
    "price": 1040,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 63,
    "stock": 7,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SIGMA 14-24mm f/2.8 DG DN Art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-038",
    "name": "SIGMA 16mm f/1.4 DG DN",
    "nameEn": "SIGMA 16mm f/1.4 DG DN",
    "category": "filters",
    "brand": "Sigma",
    "price": 330,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 28,
    "stock": 10,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SIGMA 16mm f/1.4 DG DN الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-039",
    "name": "SIGMA 18-50mm f/2.8 DC DN Contemporary",
    "nameEn": "SIGMA 18-50mm f/2.8 DC DN Contemporary",
    "category": "filters",
    "brand": "Sigma",
    "price": 420,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 59,
    "stock": 9,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SIGMA 18-50mm f/2.8 DC DN Contemporary الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-040",
    "name": "SIGMA 85mm f/1.4 DG DN Art",
    "nameEn": "SIGMA 85mm f/1.4 DG DN Art",
    "category": "filters",
    "brand": "Sigma",
    "price": 740,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 42,
    "stock": 9,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SIGMA 85mm f/1.4 DG DN Art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-041",
    "name": "SIGMA 28-70MM F/2.8  DG DN",
    "nameEn": "SIGMA 28-70MM F/2.8  DG DN",
    "category": "filters",
    "brand": "Sigma",
    "price": 630,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 44,
    "stock": 15,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة SIGMA 28-70MM F/2.8  DG DN الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "AUD-042",
    "name": "RODE GO II (Double)",
    "nameEn": "RODE GO II (Double)",
    "category": "audio",
    "brand": "RODE",
    "price": 195,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 52,
    "stock": 16,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE GO II (Double) بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-043",
    "name": "RODE INTERVIEW",
    "nameEn": "RODE INTERVIEW",
    "category": "audio",
    "brand": "RODE",
    "price": 40,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 98,
    "stock": 13,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE INTERVIEW بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-044",
    "name": "RODE NT1 5th Gen",
    "nameEn": "RODE NT1 5th Gen",
    "category": "audio",
    "brand": "RODE",
    "price": 270,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 44,
    "stock": 10,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE NT1 5th Gen بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-045",
    "name": "RODE NT1 Signature series",
    "nameEn": "RODE NT1 Signature series",
    "category": "audio",
    "brand": "RODE",
    "price": 210,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 91,
    "stock": 15,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE NT1 Signature series بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-046",
    "name": "RODE NT1-A",
    "nameEn": "RODE NT1-A",
    "category": "audio",
    "brand": "RODE",
    "price": 210,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 55,
    "stock": 11,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE NT1-A بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-047",
    "name": "RODE Mic NT-USB Plus",
    "nameEn": "RODE Mic NT-USB Plus",
    "category": "audio",
    "brand": "RODE",
    "price": 170,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 76,
    "stock": 12,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE Mic NT-USB Plus بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-048",
    "name": "RODE NTH-100",
    "nameEn": "RODE NTH-100",
    "category": "audio",
    "brand": "RODE",
    "price": 150,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 68,
    "stock": 19,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE NTH-100 بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-049",
    "name": "RODE POD MIC",
    "nameEn": "RODE POD MIC",
    "category": "audio",
    "brand": "RODE",
    "price": 100,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 41,
    "stock": 12,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE POD MIC بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-050",
    "name": "RODE PSA1",
    "nameEn": "RODE PSA1",
    "category": "audio",
    "brand": "RODE",
    "price": 110,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 38,
    "stock": 5,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE PSA1 بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-051",
    "name": "RODE PSA1+ Black",
    "nameEn": "RODE PSA1+ Black",
    "category": "audio",
    "brand": "RODE",
    "price": 145,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 75,
    "stock": 11,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE PSA1+ Black بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-052",
    "name": "RODE PodMic USB",
    "nameEn": "RODE PodMic USB",
    "category": "audio",
    "brand": "RODE",
    "price": 165,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 84,
    "stock": 5,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE PodMic USB بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-053",
    "name": "RODE Procaster Dynamic mic",
    "nameEn": "RODE Procaster Dynamic mic",
    "category": "audio",
    "brand": "RODE",
    "price": 200,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 43,
    "stock": 16,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE Procaster Dynamic mic بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-054",
    "name": "RODE RODE Wireless Go III",
    "nameEn": "RODE RODE Wireless Go III",
    "category": "audio",
    "brand": "RODE",
    "price": 240,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 85,
    "stock": 11,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE RODE Wireless Go III بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-055",
    "name": "RODE RODE Wireless Micro",
    "nameEn": "RODE RODE Wireless Micro",
    "category": "audio",
    "brand": "RODE",
    "price": 110,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 53,
    "stock": 15,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE RODE Wireless Micro بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-056",
    "name": "RODE XCM-50",
    "nameEn": "RODE XCM-50",
    "category": "audio",
    "brand": "RODE",
    "price": 120,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 50,
    "stock": 10,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE XCM-50 بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-057",
    "name": "RODE XDM-100",
    "nameEn": "RODE XDM-100",
    "category": "audio",
    "brand": "RODE",
    "price": 170,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 94,
    "stock": 11,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE XDM-100 بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-058",
    "name": "RODE PRO 2-Person",
    "nameEn": "RODE PRO 2-Person",
    "category": "audio",
    "brand": "RODE",
    "price": 290,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 38,
    "stock": 16,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE PRO 2-Person بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-059",
    "name": "RODE Caster Pro II",
    "nameEn": "RODE Caster Pro II",
    "category": "audio",
    "brand": "RODE",
    "price": 540,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 34,
    "stock": 7,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE Caster Pro II بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-060",
    "name": "RODE Caster Duo",
    "nameEn": "RODE Caster Duo",
    "category": "audio",
    "brand": "RODE",
    "price": 450,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 68,
    "stock": 19,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي RODE Caster Duo بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "RODE",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-061",
    "name": "Hollyland Lark A1 Combo",
    "nameEn": "Hollyland Lark A1 Combo",
    "category": "audio",
    "brand": "Hollyland",
    "price": 80,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 35,
    "stock": 5,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Lark A1 Combo بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-062",
    "name": "Hollyland Lark A1 Type C",
    "nameEn": "Hollyland Lark A1 Type C",
    "category": "audio",
    "brand": "Hollyland",
    "price": 70,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 69,
    "stock": 17,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Lark A1 Type C بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-063",
    "name": "Hollyland Lark M2S Combo",
    "nameEn": "Hollyland Lark M2S Combo",
    "category": "audio",
    "brand": "Hollyland",
    "price": 125,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 48,
    "stock": 14,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Lark M2S Combo بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-064",
    "name": "Hollyland Lark M2S Type-C Version",
    "nameEn": "Hollyland Lark M2S Type-C Version",
    "category": "audio",
    "brand": "Hollyland",
    "price": 110,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 81,
    "stock": 9,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Lark M2S Type-C Version بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-065",
    "name": "Hollyland Hollyland Lark M2S Ultimate Combo",
    "nameEn": "Hollyland Hollyland Lark M2S Ultimate Combo",
    "category": "audio",
    "brand": "Hollyland",
    "price": 115,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 31,
    "stock": 14,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Hollyland Lark M2S Ultimate Combo بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-066",
    "name": "Hollyland LARK MAX DUO",
    "nameEn": "Hollyland LARK MAX DUO",
    "category": "audio",
    "brand": "Hollyland",
    "price": 225,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 47,
    "stock": 14,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland LARK MAX DUO بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-067",
    "name": "Hollyland LARK MAX SOLO",
    "nameEn": "Hollyland LARK MAX SOLO",
    "category": "audio",
    "brand": "Hollyland",
    "price": 165,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 61,
    "stock": 14,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland LARK MAX SOLO بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-068",
    "name": "Hollyland Lark M2 Combo Version",
    "nameEn": "Hollyland Lark M2 Combo Version",
    "category": "audio",
    "brand": "Hollyland",
    "price": 95,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 64,
    "stock": 5,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Lark M2 Combo Version بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-069",
    "name": "Hollyland Solidom C1 4S",
    "nameEn": "Hollyland Solidom C1 4S",
    "category": "audio",
    "brand": "Hollyland",
    "price": 1100,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 50,
    "stock": 18,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Solidom C1 4S بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-070",
    "name": "Hollyland Solidom C1 6S",
    "nameEn": "Hollyland Solidom C1 6S",
    "category": "audio",
    "brand": "Hollyland",
    "price": 1550,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 54,
    "stock": 11,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Solidom C1 6S بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-071",
    "name": "Hollyland Solidom C1 Pro-9S",
    "nameEn": "Hollyland Solidom C1 Pro-9S",
    "category": "audio",
    "brand": "Hollyland",
    "price": 2600,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 51,
    "stock": 5,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Solidom C1 Pro-9S بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-072",
    "name": "Hollyland Solidom C1 Pro-6S",
    "nameEn": "Hollyland Solidom C1 Pro-6S",
    "category": "audio",
    "brand": "Hollyland",
    "price": 1800,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 33,
    "stock": 6,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Solidom C1 Pro-6S بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-073",
    "name": "Hollyland Solidom C1 Pro-4S",
    "nameEn": "Hollyland Solidom C1 Pro-4S",
    "category": "audio",
    "brand": "Hollyland",
    "price": 1350,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 41,
    "stock": 8,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Solidom C1 Pro-4S بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-074",
    "name": "Hollyland Hollyland Mars 4K Video Transmission System",
    "nameEn": "Hollyland Hollyland Mars 4K Video Transmission System",
    "category": "audio",
    "brand": "Hollyland",
    "price": 500,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 86,
    "stock": 5,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Hollyland Mars 4K Video Transmission System بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-075",
    "name": "Hollyland Hollyland Mars 400S PRO Video Transmission",
    "nameEn": "Hollyland Hollyland Mars 400S PRO Video Transmission",
    "category": "audio",
    "brand": "Hollyland",
    "price": 270,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 35,
    "stock": 8,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Hollyland Mars 400S PRO Video Transmission بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-076",
    "name": "Hollyland Hollyland Mars 400S PRO II Video Transmission",
    "nameEn": "Hollyland Hollyland Mars 400S PRO II Video Transmission",
    "category": "audio",
    "brand": "Hollyland",
    "price": 400,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 90,
    "stock": 7,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Hollyland Mars 400S PRO II Video Transmission بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "AUD-077",
    "name": "Hollyland Hollyland Pyro S 4K Video Transmission",
    "nameEn": "Hollyland Hollyland Pyro S 4K Video Transmission",
    "category": "audio",
    "brand": "Hollyland",
    "price": 550,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 73,
    "stock": 6,
    "badge": "صوت سينمائي",
    "image": "images/camera_dials.jpg",
    "description": "نظام تسجيل الصوت الاحترافي Hollyland Hollyland Pyro S 4K Video Transmission بنقاء استوديو وبث لاسلكي مشفر مستقر.",
    "specs": {
      "الشركة المصنعة": "Hollyland",
      "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
      "الكفالة": "كفالة الوكيل المعتمد سنتين"
    }
  },
  {
    "id": "DJI-078",
    "name": "DJI MOBILE OM SE",
    "nameEn": "DJI MOBILE OM SE",
    "category": "gimbals",
    "brand": "DJI",
    "price": 75,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 62,
    "stock": 9,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI MOBILE OM SE الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-079",
    "name": "DJI OSMO MOBILE Om 6",
    "nameEn": "DJI OSMO MOBILE Om 6",
    "category": "gimbals",
    "brand": "DJI",
    "price": 89,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 122,
    "stock": 7,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI OSMO MOBILE Om 6 الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-080",
    "name": "DJI OSMO MOBILE 7",
    "nameEn": "DJI OSMO MOBILE 7",
    "category": "gimbals",
    "brand": "DJI",
    "price": 80,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 80,
    "stock": 10,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI OSMO MOBILE 7 الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-081",
    "name": "DJI OSMO MOBILE 7P",
    "nameEn": "DJI OSMO MOBILE 7P",
    "category": "gimbals",
    "brand": "DJI",
    "price": 110,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 81,
    "stock": 11,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI OSMO MOBILE 7P الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-082",
    "name": "DJI OSMO MOBILE 8",
    "nameEn": "DJI OSMO MOBILE 8",
    "category": "gimbals",
    "brand": "DJI",
    "price": 135,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 148,
    "stock": 13,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI OSMO MOBILE 8 الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-083",
    "name": "DJI RS 3 MINI",
    "nameEn": "DJI RS 3 MINI",
    "category": "gimbals",
    "brand": "DJI",
    "price": 239,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 125,
    "stock": 5,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI RS 3 MINI الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-084",
    "name": "DJI RS 4 MINI",
    "nameEn": "DJI RS 4 MINI",
    "category": "gimbals",
    "brand": "DJI",
    "price": 310,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 147,
    "stock": 7,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI RS 4 MINI الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-085",
    "name": "DJI RS 4  MINI COMPO",
    "nameEn": "DJI RS 4  MINI COMPO",
    "category": "gimbals",
    "brand": "DJI",
    "price": 370,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 57,
    "stock": 9,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI RS 4  MINI COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-086",
    "name": "DJI RS 4 STANDARD",
    "nameEn": "DJI RS 4 STANDARD",
    "category": "gimbals",
    "brand": "DJI",
    "price": 390,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 71,
    "stock": 12,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI RS 4 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-087",
    "name": "DJI RS 4 COMPO",
    "nameEn": "DJI RS 4 COMPO",
    "category": "gimbals",
    "brand": "DJI",
    "price": 480,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 87,
    "stock": 11,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI RS 4 COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-088",
    "name": "DJI RS 4 PRO",
    "nameEn": "DJI RS 4 PRO",
    "category": "gimbals",
    "brand": "DJI",
    "price": 640,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 140,
    "stock": 6,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI RS 4 PRO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-089",
    "name": "DJI RS 4 PRO COMPO",
    "nameEn": "DJI RS 4 PRO COMPO",
    "category": "gimbals",
    "brand": "DJI",
    "price": 780,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 83,
    "stock": 13,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI RS 4 PRO COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-090",
    "name": "DJI RS 5 STANDARD",
    "nameEn": "DJI RS 5 STANDARD",
    "category": "gimbals",
    "brand": "DJI",
    "price": 550,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 101,
    "stock": 10,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI RS 5 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-091",
    "name": "DJI RS 5 COMPO",
    "nameEn": "DJI RS 5 COMPO",
    "category": "gimbals",
    "brand": "DJI",
    "price": 650,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 146,
    "stock": 10,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI RS 5 COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-092",
    "name": "DJI MIC MINI 2 persons",
    "nameEn": "DJI MIC MINI 2 persons",
    "category": "audio",
    "brand": "DJI",
    "price": 95,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 63,
    "stock": 6,
    "badge": "DJI Original",
    "image": "images/camera_dials.jpg",
    "description": "منتج دي جي آي DJI MIC MINI 2 persons الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-093",
    "name": "DJI MIC Mini 2 New - 2 persons",
    "nameEn": "DJI MIC Mini 2 New - 2 persons",
    "category": "audio",
    "brand": "DJI",
    "price": 125,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 67,
    "stock": 12,
    "badge": "DJI Original",
    "image": "images/camera_dials.jpg",
    "description": "منتج دي جي آي DJI MIC Mini 2 New - 2 persons الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-094",
    "name": "DJI MIC 3 2 persons",
    "nameEn": "DJI MIC 3 2 persons",
    "category": "audio",
    "brand": "DJI",
    "price": 290,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 134,
    "stock": 5,
    "badge": "DJI Original",
    "image": "images/camera_dials.jpg",
    "description": "منتج دي جي آي DJI MIC 3 2 persons الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-095",
    "name": "DJI MIC 2 2 persons",
    "nameEn": "DJI MIC 2 2 persons",
    "category": "audio",
    "brand": "DJI",
    "price": 210,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 65,
    "stock": 7,
    "badge": "DJI Original",
    "image": "images/camera_dials.jpg",
    "description": "منتج دي جي آي DJI MIC 2 2 persons الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-096",
    "name": "DJI POCKET 3 STANDARD",
    "nameEn": "DJI POCKET 3 STANDARD",
    "category": "cameras",
    "brand": "DJI",
    "price": 479,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 76,
    "stock": 8,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI POCKET 3 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-097",
    "name": "DJI POCKET 3 CREATOR COMPO",
    "nameEn": "DJI POCKET 3 CREATOR COMPO",
    "category": "cameras",
    "brand": "DJI",
    "price": 530,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 144,
    "stock": 4,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI POCKET 3 CREATOR COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-098",
    "name": "DJI POCKET 4 STANDARD",
    "nameEn": "DJI POCKET 4 STANDARD",
    "category": "cameras",
    "brand": "DJI",
    "price": 520,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 83,
    "stock": 10,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI POCKET 4 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-099",
    "name": "DJI POCKET 4 CREATOR COMPO",
    "nameEn": "DJI POCKET 4 CREATOR COMPO",
    "category": "cameras",
    "brand": "DJI",
    "price": 610,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 126,
    "stock": 11,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI POCKET 4 CREATOR COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-100",
    "name": "DJI ACTION Camera 6 ADVENTURE COMPO",
    "nameEn": "DJI ACTION Camera 6 ADVENTURE COMPO",
    "category": "cameras",
    "brand": "DJI",
    "price": 450,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 100,
    "stock": 9,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI ACTION Camera 6 ADVENTURE COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-101",
    "name": "DJI OSMO Camera 360 STANDARD",
    "nameEn": "DJI OSMO Camera 360 STANDARD",
    "category": "cameras",
    "brand": "DJI",
    "price": 450,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 51,
    "stock": 10,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI OSMO Camera 360 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-102",
    "name": "DJI OSMO Camera 360 ADVENTURE COMPO",
    "nameEn": "DJI OSMO Camera 360 ADVENTURE COMPO",
    "category": "cameras",
    "brand": "DJI",
    "price": 530,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 133,
    "stock": 13,
    "badge": "DJI Original",
    "image": "images/gimbal_stab.jpg",
    "description": "منتج دي جي آي DJI OSMO Camera 360 ADVENTURE COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-103",
    "name": "DJI MIC 2 (Single)",
    "nameEn": "DJI MIC 2 (Single)",
    "category": "audio",
    "brand": "DJI",
    "price": 125,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 138,
    "stock": 11,
    "badge": "DJI Original",
    "image": "images/camera_dials.jpg",
    "description": "منتج دي جي آي DJI MIC 2 (Single) الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "DJI-104",
    "name": "DJI Mic Mini Single",
    "nameEn": "DJI Mic Mini Single",
    "category": "audio",
    "brand": "DJI",
    "price": 60,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 145,
    "stock": 12,
    "badge": "DJI Original",
    "image": "images/camera_dials.jpg",
    "description": "منتج دي جي آي DJI Mic Mini Single الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
    "specs": {
      "العلامة التجارية": "DJI Official",
      "الكفالة": "كفالة رسمية سنة من الوكيل"
    }
  },
  {
    "id": "CAM-105",
    "name": "Canon EOS 2000d 18-55mm",
    "nameEn": "Canon EOS 2000d 18-55mm",
    "category": "cameras",
    "brand": "Canon",
    "price": 330,
    "oldPrice": 350,
    "rating": 4.9,
    "reviewsCount": 87,
    "stock": 11,
    "badge": "وفر $20",
    "section": "trending",
    "image": "images/hero_camera.jpg",
    "description": "كاميرا كانون Canon EOS 2000d 18-55mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.1MP APS-C CMOS Sensor",
      "الفيديو": "Full HD 1080p حتى 30fps",
      "نظام التركيز": "9 نقاط فوكس مع نقطة مركزية Cross-type سريعة",
      "العدسة المرفقة": "مرفق عدسة كانون الأصلية EF-S 18-55mm IS II",
      "الشاشة": "شاشة LCD قياس 3.0 بوصة بدقة 920K نقطة",
      "الاتصال": "Wi-Fi مدمج لنقل الصور الفوري للهاتف الذكي",
      "الوزن": "475 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-106",
    "name": "Canon EOS R100 18-45mm",
    "nameEn": "Canon EOS R100 18-45mm",
    "category": "cameras",
    "brand": "Canon",
    "price": 400,
    "oldPrice": 430,
    "rating": 4.9,
    "reviewsCount": 49,
    "stock": 5,
    "badge": "وفر $30",
    "section": "trending",
    "image": "images/cam_canon_r50.jpg",
    "description": "كاميرا كانون Canon EOS R100 18-45mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.1MP APS-C CMOS Sensor",
      "الفيديو": "4K 24p و Full HD بمعدل 60 إطار في الثانية",
      "نظام التركيز": "Dual Pixel CMOS AF مع 143 منطقة فوكس وتتبع العيون",
      "العدسة المرفقة": "مرفق عدسة Canon RF-S 18-45mm f/4.5-6.3 IS STM المدمجة",
      "الوزن": "356 جم (أخف وأصغر كاميرا ميرورليس من كانون)",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-107",
    "name": "Canon EOS 250d 18-55mm",
    "nameEn": "Canon EOS 250d 18-55mm",
    "category": "cameras",
    "brand": "Canon",
    "price": 470,
    "oldPrice": 500,
    "rating": 4.9,
    "reviewsCount": 70,
    "stock": 4,
    "badge": "وفر $30",
    "section": "trending",
    "image": "images/hero_camera.jpg",
    "description": "كاميرا كانون Canon EOS 250d 18-55mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.1MP APS-C CMOS Sensor",
      "الفيديو": "4K 24p و Full HD 60p مع ميزة 4K Time-Lapse",
      "نظام التركيز": "Dual Pixel CMOS AF فائق السرعة عبر شاشة اللمس",
      "الشاشة": "شاشة لمسية متحركة بزوايا متعددة Vari-Angle Touchscreen",
      "العدسة المرفقة": "مرفق عدسة EF-S 18-55mm IS STM",
      "البطارية": "عمر بطارية استثنائي يتجاوز 1070 لقطة في الشحنة الواحدة",
      "الوزن": "449 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-108",
    "name": "Canon EOS R50 18-45mm",
    "nameEn": "Canon EOS R50 18-45mm",
    "category": "cameras",
    "brand": "Canon",
    "price": 550,
    "oldPrice": 580,
    "rating": 4.9,
    "reviewsCount": 114,
    "stock": 3,
    "badge": "وفر $30",
    "section": "trending",
    "image": "images/cam_canon_r50.jpg",
    "description": "كاميرا كانون Canon EOS R50 18-45mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.2MP APS-C CMOS Sensor",
      "الفيديو": "4K 30p مسحوب من 6K بدون اقتطاع / Full HD 120p للحركة البطيئة",
      "نظام التركيز": "Dual Pixel CMOS AF II مع معالج DIGIC X والتعرف التلقائي على الأجسام",
      "الشاشة": "شاشة لمس متغيرة الزوايا 3.0 بوصة تدور بالكامل",
      "العدسة المرفقة": "مرفق عدسة كانون RF-S 18-45mm IS STM",
      "الوزن": "375 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-109",
    "name": "Canon EOS R50v 18-45mm",
    "nameEn": "Canon EOS R50v 18-45mm",
    "category": "cameras",
    "brand": "Canon",
    "price": 659,
    "oldPrice": 699,
    "rating": 4.9,
    "reviewsCount": 66,
    "stock": 10,
    "badge": "وفر $40",
    "section": "trending",
    "image": "images/cam_canon_r50.jpg",
    "description": "كاميرا كانون Canon EOS R50v 18-45mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.2MP APS-C CMOS Sensor",
      "الفيديو": "4K 30p مسحوب من 6K بدون اقتطاع / Full HD 120p للحركة البطيئة",
      "نظام التركيز": "Dual Pixel CMOS AF II مع معالج DIGIC X والتعرف التلقائي على الأجسام",
      "الشاشة": "شاشة لمس متغيرة الزوايا 3.0 بوصة تدور بالكامل",
      "العدسة المرفقة": "مرفق عدسة كانون RF-S 18-45mm IS STM",
      "الوزن": "375 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-110",
    "name": "Canon EOS R10 18-45mm",
    "nameEn": "Canon EOS R10 18-45mm",
    "category": "cameras",
    "brand": "Canon",
    "price": 710,
    "oldPrice": 750,
    "rating": 4.9,
    "reviewsCount": 95,
    "stock": 11,
    "badge": "وفر $40",
    "section": "trending",
    "image": "images/cam_canon_r50.jpg",
    "description": "كاميرا كانون Canon EOS R10 18-45mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.2MP APS-C CMOS Sensor مع معالج DIGIC X فائق السرعة",
      "الفيديو": "4K 60p أو 4K 30p مسحوب من 6K بدون كروب 10-Bit HDR PQ",
      "نظام التركيز": "Dual Pixel CMOS AF II مع 651 منطقة تركيز وتتبع الأجسام والحيوانات",
      "سرعة الالتقاط": "23 إطاراً بالثانية بالشاتر الإلكتروني و 15 إطاراً بالميكانيكي",
      "العدسة المرفقة": "مرفق عدسة RF-S 18-45mm IS STM",
      "الوزن": "429 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-111",
    "name": "Canon EOS R8 Body",
    "nameEn": "Canon EOS R8 Body",
    "category": "cameras",
    "brand": "Canon",
    "price": 1000,
    "oldPrice": 1050,
    "rating": 4.9,
    "reviewsCount": 64,
    "stock": 5,
    "badge": "وفر $50",
    "section": "trending",
    "image": "images/cam_canon_r8.jpg",
    "description": "كاميرا كانون Canon EOS R8 Body الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.2MP Full-Frame CMOS Sensor (نفس مستشعر R6 Mark II الرائدة)",
      "الفيديو": "4K 60p مسحوب من 6K بدون اقتطاع 10-Bit 4:2:2 مع Canon Log 3 / Full HD 180fps",
      "نظام التركيز": "Dual Pixel CMOS AF II مدعوم بخوارزميات الذكاء الاصطناعي",
      "سرعة الالتقاط": "حتى 40 إطاراً في الثانية مع الشاتر الإلكتروني",
      "الوزن": "461 جم فقط (أخف كاميرا فل فريم أنتجتها كانون على الإطلاق)",
      "المانت": "Canon RF Mount",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-112",
    "name": "Canon EOS R8 24-50mm",
    "nameEn": "Canon EOS R8 24-50mm",
    "category": "cameras",
    "brand": "Canon",
    "price": 1150,
    "oldPrice": 1200,
    "rating": 4.9,
    "reviewsCount": 67,
    "stock": 10,
    "badge": "وفر $50",
    "section": "trending",
    "image": "images/cam_canon_r8.jpg",
    "description": "كاميرا كانون Canon EOS R8 24-50mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.2MP Full-Frame CMOS Sensor (نفس مستشعر R6 Mark II الرائدة)",
      "الفيديو": "4K 60p مسحوب من 6K بدون اقتطاع 10-Bit 4:2:2 مع Canon Log 3 / Full HD 180fps",
      "نظام التركيز": "Dual Pixel CMOS AF II مدعوم بخوارزميات الذكاء الاصطناعي",
      "سرعة الالتقاط": "حتى 40 إطاراً في الثانية مع الشاتر الإلكتروني",
      "الوزن": "461 جم فقط (أخف كاميرا فل فريم أنتجتها كانون على الإطلاق)",
      "المانت": "Canon RF Mount",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-113",
    "name": "Canon EOS R7 Body",
    "nameEn": "Canon EOS R7 Body",
    "category": "cameras",
    "brand": "Canon",
    "price": 860,
    "oldPrice": 900,
    "rating": 4.9,
    "reviewsCount": 53,
    "stock": 7,
    "badge": "وفر $40",
    "section": "trending",
    "image": "images/prod_canon_r5_white.jpg",
    "description": "كاميرا كانون Canon EOS R7 Body الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "32.5MP APS-C CMOS Sensor (الأعلى دقة في كاميرات كانون APS-C)",
      "الفيديو": "4K 60p 10-Bit / 4K 30p 7K Oversampling مع Canon Log 3 / Full HD 120p",
      "نظام التركيز": "Dual Pixel CMOS AF II مع ذكاء اصطناعي لتتبع الكائنات",
      "مانع الاهتزاز": "مانع اهتزاز مدمج بالهيكل IBIS يصل حتى 8.0 وقفات تثبيت",
      "سرعة الالتقاط": "حتى 30 إطاراً بالثانية مع شاتر إلكتروني",
      "المنافذ والذاكرة": "منفذان مزدوجان لبطاقات الذاكرة Dual SD UHS-II Slots",
      "البطارية": "بطارية LP-E6NH الكبيرة",
      "الوزن": "612 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-114",
    "name": "Canon EOS R7 18-150mm",
    "nameEn": "Canon EOS R7 18-150mm",
    "category": "cameras",
    "brand": "Canon",
    "price": 1200,
    "oldPrice": 1250,
    "rating": 4.9,
    "reviewsCount": 91,
    "stock": 8,
    "badge": "وفر $50",
    "section": "trending",
    "image": "images/prod_canon_r5_white.jpg",
    "description": "كاميرا كانون Canon EOS R7 18-150mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "32.5MP APS-C CMOS Sensor (الأعلى دقة في كاميرات كانون APS-C)",
      "الفيديو": "4K 60p 10-Bit / 4K 30p 7K Oversampling مع Canon Log 3 / Full HD 120p",
      "نظام التركيز": "Dual Pixel CMOS AF II مع ذكاء اصطناعي لتتبع الكائنات",
      "مانع الاهتزاز": "مانع اهتزاز مدمج بالهيكل IBIS يصل حتى 8.0 وقفات تثبيت",
      "سرعة الالتقاط": "حتى 30 إطاراً بالثانية مع شاتر إلكتروني",
      "المنافذ والذاكرة": "منفذان مزدوجان لبطاقات الذاكرة Dual SD UHS-II Slots",
      "البطارية": "بطارية LP-E6NH الكبيرة",
      "الوزن": "612 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-115",
    "name": "Canon EOS R6 Mark II Body",
    "nameEn": "Canon EOS R6 Mark II Body",
    "category": "cameras",
    "brand": "Canon",
    "price": 1390,
    "oldPrice": 1450,
    "rating": 4.9,
    "reviewsCount": 68,
    "stock": 4,
    "badge": "وفر $60",
    "section": "trending",
    "image": "images/cam_canon_r6ii.jpg",
    "description": "كاميرا كانون Canon EOS R6 Mark II Body الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.2MP Full-Frame CMOS Sensor عالي السرعة من الجيل الجديد",
      "الفيديو": "4K 60p مسحوب بالكامل من 6K بدون اقتطاع 10-Bit 4:2:2 Canon Log 3 / Full HD 180p",
      "نظام التركيز": "Dual Pixel CMOS AF II يتعرف على الطيور والقطارات والطائرات والسيارات",
      "مانع الاهتزاز": "مانع اهتزاز داخلي قوي 5-Axis IBIS يصل حتى 8.0 وقفات تثبيت",
      "سرعة الالتقاط": "التقاط فائق السرعة 40 إطاراً في الثانية بالشاتر الإلكتروني",
      "المنافذ والذاكرة": "منفذان لبطاقات الذاكرة Dual SD UHS-II",
      "البطارية": "بطارية LP-E6NH",
      "الوزن": "670 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-116",
    "name": "Canon EOS R6 Mark II 24-105 STM",
    "nameEn": "Canon EOS R6 Mark II 24-105 STM",
    "category": "cameras",
    "brand": "Canon",
    "price": 1640,
    "oldPrice": 1700,
    "rating": 4.9,
    "reviewsCount": 56,
    "stock": 8,
    "badge": "وفر $60",
    "section": "trending",
    "image": "images/cam_canon_r6ii.jpg",
    "description": "كاميرا كانون Canon EOS R6 Mark II 24-105 STM الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.2MP Full-Frame CMOS Sensor عالي السرعة من الجيل الجديد",
      "الفيديو": "4K 60p مسحوب بالكامل من 6K بدون اقتطاع 10-Bit 4:2:2 Canon Log 3 / Full HD 180p",
      "نظام التركيز": "Dual Pixel CMOS AF II يتعرف على الطيور والقطارات والطائرات والسيارات",
      "مانع الاهتزاز": "مانع اهتزاز داخلي قوي 5-Axis IBIS يصل حتى 8.0 وقفات تثبيت",
      "سرعة الالتقاط": "التقاط فائق السرعة 40 إطاراً في الثانية بالشاتر الإلكتروني",
      "المنافذ والذاكرة": "منفذان لبطاقات الذاكرة Dual SD UHS-II",
      "البطارية": "بطارية LP-E6NH",
      "الوزن": "670 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-117",
    "name": "Canon EOS R6 Mark II 24-105 f4 L",
    "nameEn": "Canon EOS R6 Mark II 24-105 f4 L",
    "category": "cameras",
    "brand": "Canon",
    "price": 2300,
    "oldPrice": 2350,
    "rating": 4.9,
    "reviewsCount": 111,
    "stock": 11,
    "badge": "وفر $50",
    "section": "trending",
    "image": "images/cam_canon_r6ii.jpg",
    "description": "كاميرا كانون Canon EOS R6 Mark II 24-105 f4 L الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.2MP Full-Frame CMOS Sensor عالي السرعة من الجيل الجديد",
      "الفيديو": "4K 60p مسحوب بالكامل من 6K بدون اقتطاع 10-Bit 4:2:2 Canon Log 3 / Full HD 180p",
      "نظام التركيز": "Dual Pixel CMOS AF II يتعرف على الطيور والقطارات والطائرات والسيارات",
      "مانع الاهتزاز": "مانع اهتزاز داخلي قوي 5-Axis IBIS يصل حتى 8.0 وقفات تثبيت",
      "سرعة الالتقاط": "التقاط فائق السرعة 40 إطاراً في الثانية بالشاتر الإلكتروني",
      "المنافذ والذاكرة": "منفذان لبطاقات الذاكرة Dual SD UHS-II",
      "البطارية": "بطارية LP-E6NH",
      "الوزن": "670 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-118",
    "name": "Canon EOS R6 Mark III",
    "nameEn": "Canon EOS R6 Mark III",
    "category": "cameras",
    "brand": "Canon",
    "price": 2000,
    "oldPrice": 2060,
    "rating": 4.9,
    "reviewsCount": 69,
    "stock": 10,
    "badge": "وفر $60",
    "section": "trending",
    "image": "images/cam_canon_r6ii.jpg",
    "description": "كاميرا كانون Canon EOS R6 Mark III الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "24.2MP Full-Frame CMOS Sensor عالي السرعة من الجيل الجديد",
      "الفيديو": "4K 60p مسحوب بالكامل من 6K بدون اقتطاع 10-Bit 4:2:2 Canon Log 3 / Full HD 180p",
      "نظام التركيز": "Dual Pixel CMOS AF II يتعرف على الطيور والقطارات والطائرات والسيارات",
      "مانع الاهتزاز": "مانع اهتزاز داخلي قوي 5-Axis IBIS يصل حتى 8.0 وقفات تثبيت",
      "سرعة الالتقاط": "التقاط فائق السرعة 40 إطاراً في الثانية بالشاتر الإلكتروني",
      "المنافذ والذاكرة": "منفذان لبطاقات الذاكرة Dual SD UHS-II",
      "البطارية": "بطارية LP-E6NH",
      "الوزن": "670 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-119",
    "name": "Canon EOS R5 Mark II Body",
    "nameEn": "Canon EOS R5 Mark II Body",
    "category": "cameras",
    "brand": "Canon",
    "price": 2770,
    "oldPrice": 2850,
    "rating": 4.9,
    "reviewsCount": 58,
    "stock": 3,
    "badge": "وفر $80",
    "section": "trending",
    "image": "images/cam_canon_r5ii.jpg",
    "description": "كاميرا كانون Canon EOS R5 Mark II Body الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "45MP Full-Frame Back-Illuminated Stacked CMOS Sensor ثوري",
      "الفيديو": "8K 60p RAW داخلي / 4K 120p 10-Bit 4:2:2 / 4K 60p S-RAW مع Canon Log 2 و 3",
      "نظام التركيز": "Eye Control AF (التحكم بنقطة الفوكس بنظرة العين) مع معالج Accelerated Capture",
      "مانع الاهتزاز": "تثبيت بصري داخلي IBIS متطور يصل حتى 8.5 وقفات",
      "سرعة الالتقاط": "30 إطاراً في الثانية بالشاتر الإلكتروني بدون أي تعتيم Blackout-free",
      "ترقية الدقة": "تقنية التكبير بالذكاء الاصطناعي المدمجة Neural Network Upscaling حتى 179MP",
      "المنافذ والذاكرة": "منفذ بطاقة CFexpress Type B فائق السرعة + منفذ SD UHS-II",
      "الوزن": "746 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-120",
    "name": "Camera EOS RP Body Only",
    "nameEn": "Camera EOS RP Body Only",
    "category": "cameras",
    "brand": "Canon",
    "price": 700,
    "oldPrice": 740,
    "rating": 4.9,
    "reviewsCount": 86,
    "stock": 9,
    "badge": "وفر $40",
    "section": "trending",
    "image": "images/cam_canon_r8.jpg",
    "description": "كاميرا كانون Camera EOS RP Body Only الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "26.2MP Full-Frame CMOS Sensor",
      "الفيديو": "4K 24p و Full HD حتى 60 إطار في الثانية",
      "نظام التركيز": "Dual Pixel CMOS AF مع 4779 نقطة تركيز وتتبع العيون",
      "الشاشة": "شاشة لمسية 3.0 بوصة تدور بالكامل بزوايا مختلفة",
      "الوزن": "485 جم (هيكل متين من سبائك المغنيسيوم خفيف الوزن)",
      "المانت": "Canon RF Mount",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-121",
    "name": "Camera EOS RP 24-105 STM Kit",
    "nameEn": "Camera EOS RP 24-105 STM Kit",
    "category": "cameras",
    "brand": "Canon",
    "price": 900,
    "oldPrice": 950,
    "rating": 4.9,
    "reviewsCount": 49,
    "stock": 6,
    "badge": "وفر $50",
    "section": "trending",
    "image": "images/cam_canon_r8.jpg",
    "description": "كاميرا كانون Camera EOS RP 24-105 STM Kit الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "26.2MP Full-Frame CMOS Sensor",
      "الفيديو": "4K 24p و Full HD حتى 60 إطار في الثانية",
      "نظام التركيز": "Dual Pixel CMOS AF مع 4779 نقطة تركيز وتتبع العيون",
      "الشاشة": "شاشة لمسية 3.0 بوصة تدور بالكامل بزوايا مختلفة",
      "الوزن": "485 جم (هيكل متين من سبائك المغنيسيوم خفيف الوزن)",
      "المانت": "Canon RF Mount",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-122",
    "name": "Canon EOS R5 C Cinema",
    "nameEn": "Canon EOS R5 C Cinema",
    "category": "cameras",
    "brand": "Canon",
    "price": 2300,
    "oldPrice": 2380,
    "rating": 4.9,
    "reviewsCount": 48,
    "stock": 4,
    "badge": "وفر $80",
    "section": "trending",
    "image": "images/cam_canon_r5c.jpg",
    "description": "كاميرا كانون Canon EOS R5 C Cinema الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "45MP Full-Frame CMOS Sensor هجين فوتوغرافي وسينمائي رسمي Cinema EOS",
      "الفيديو": "8K 60p 12-Bit Cinema RAW Light داخلي / 4K 120p 10-Bit 4:2:2 بدون اقتطاع",
      "نظام التبريد": "مروحة تبريد مدمجة Active Cooling للتسجيل المستمر بدون توقف",
      "نظام التشغيل": "نظام تشغيل مزدوج: واجهة Cinema EOS للفيديو وواجهة EOS R للفوتوغراف",
      "المنافذ والذاكرة": "منفذ CFexpress Type B عالي السرعة + منفذ SD UHS-II",
      "الوزن": "770 جم",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "CAM-123",
    "name": "Canon PowerShot G7X III",
    "nameEn": "Canon PowerShot G7X III",
    "category": "cameras",
    "brand": "Canon",
    "price": 1100,
    "oldPrice": 1150,
    "rating": 4.9,
    "reviewsCount": 68,
    "stock": 10,
    "badge": "وفر $50",
    "section": "trending",
    "image": "images/cam_canon_g7xiii.jpg",
    "description": "كاميرا كانون Canon PowerShot G7X III الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
    "specs": {
      "المستشعر": "20.1MP 1.0-inch Stacked CMOS Sensor المفضل لصناع المحتوى واليوتيوب",
      "العدسة": "عدسة كانون سريعة 24-100mm f/1.8-2.8 مع تقريب بصري 4.2x ومثبت بصري",
      "الفيديو": "4K 30p بدون كروب / Full HD 120p / دعم البث المباشر المباشر على YouTube Live",
      "الصوت": "مدخل مايكروفون خارجي 3.5 ملم لتسجيل صوت احترافي",
      "الشاشة": "شاشة لمس ترتفع 180 درجة للأعلى لتصوير السيلفي والفلوجات",
      "سرعة الالتقاط": "تصوير متتابع حتى 30 إطاراً في الثانية في وضع RAW Burst",
      "الوزن": "304 جم فقط (حجم الجيب)",
      "الضمان": "كفالة رسمية سنتين من الوكيل المعتمد"
    }
  },
  {
    "id": "LEN-124",
    "name": "Canon rf 50mm f/1.8 STM",
    "nameEn": "Canon rf 50mm f/1.8 STM",
    "category": "filters",
    "brand": "Canon",
    "price": 170,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 30,
    "stock": 8,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة Canon rf 50mm f/1.8 STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-125",
    "name": "Canon rf 16mm f/2.8 STM",
    "nameEn": "Canon rf 16mm f/2.8 STM",
    "category": "filters",
    "brand": "Canon",
    "price": 250,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 10,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة Canon rf 16mm f/2.8 STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-126",
    "name": "Canon rf 35mm f/1.8 IS Macro STM",
    "nameEn": "Canon rf 35mm f/1.8 IS Macro STM",
    "category": "filters",
    "brand": "Canon",
    "price": 410,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 51,
    "stock": 7,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة Canon rf 35mm f/1.8 IS Macro STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-127",
    "name": "Canon rf 85mm f/2 IS Macro STM",
    "nameEn": "Canon rf 85mm f/2 IS Macro STM",
    "category": "filters",
    "brand": "Canon",
    "price": 460,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 60,
    "stock": 12,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة Canon rf 85mm f/2 IS Macro STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-128",
    "name": "Canon rf 24-105mm f/4-7.1 IS STM",
    "nameEn": "Canon rf 24-105mm f/4-7.1 IS STM",
    "category": "filters",
    "brand": "Canon",
    "price": 370,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 38,
    "stock": 7,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة Canon rf 24-105mm f/4-7.1 IS STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-129",
    "name": "Canon rf 24-105mm f/4L IS USM",
    "nameEn": "Canon rf 24-105mm f/4L IS USM",
    "category": "filters",
    "brand": "Canon",
    "price": 900,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 40,
    "stock": 14,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة Canon rf 24-105mm f/4L IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-130",
    "name": "Canon rf 24-105mm f/2.8L IS USM",
    "nameEn": "Canon rf 24-105mm f/2.8L IS USM",
    "category": "filters",
    "brand": "Canon",
    "price": 2420,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 24,
    "stock": 12,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة Canon rf 24-105mm f/2.8L IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-131",
    "name": "Canon rf 24-240mm f/4-6.3 IS USM",
    "nameEn": "Canon rf 24-240mm f/4-6.3 IS USM",
    "category": "filters",
    "brand": "Canon",
    "price": 730,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 39,
    "stock": 4,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة Canon rf 24-240mm f/4-6.3 IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-132",
    "name": "canon rf 15-35mm f/2.8L IS USM",
    "nameEn": "canon rf 15-35mm f/2.8L IS USM",
    "category": "filters",
    "brand": "Canon",
    "price": 1500,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 63,
    "stock": 14,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة canon rf 15-35mm f/2.8L IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-133",
    "name": "canon rf 100mm f/2.8L marco is usm",
    "nameEn": "canon rf 100mm f/2.8L marco is usm",
    "category": "filters",
    "brand": "Canon",
    "price": 920,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 63,
    "stock": 15,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة canon rf 100mm f/2.8L marco is usm الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-134",
    "name": "Canon rf 24-70mm f/2.8L IS USM",
    "nameEn": "Canon rf 24-70mm f/2.8L IS USM",
    "category": "filters",
    "brand": "Canon",
    "price": 1520,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 35,
    "stock": 15,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة Canon rf 24-70mm f/2.8L IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-135",
    "name": "Canon rf 70-200mm f/2.8L IS USM",
    "nameEn": "Canon rf 70-200mm f/2.8L IS USM",
    "category": "filters",
    "brand": "Canon",
    "price": 1620,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 46,
    "stock": 7,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة Canon rf 70-200mm f/2.8L IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-136",
    "name": "canon ef 50mm f/1.8 stm",
    "nameEn": "canon ef 50mm f/1.8 stm",
    "category": "filters",
    "brand": "Canon",
    "price": 100,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 50,
    "stock": 6,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة canon ef 50mm f/1.8 stm الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-137",
    "name": "canon ef 50mm f/1.4 usm",
    "nameEn": "canon ef 50mm f/1.4 usm",
    "category": "filters",
    "brand": "Canon",
    "price": 255,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 8,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة canon ef 50mm f/1.4 usm الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-138",
    "name": "canon ef-s 24mm f/2.8 STM",
    "nameEn": "canon ef-s 24mm f/2.8 STM",
    "category": "filters",
    "brand": "Canon",
    "price": 130,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 15,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة canon ef-s 24mm f/2.8 STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-139",
    "name": "canon ef-s 10-18mm f/4.5-5.6 is stm",
    "nameEn": "canon ef-s 10-18mm f/4.5-5.6 is stm",
    "category": "filters",
    "brand": "Canon",
    "price": 235,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 54,
    "stock": 15,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة canon ef-s 10-18mm f/4.5-5.6 is stm الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-140",
    "name": "canon ef-s 18-135mm f/3.5-5.6 Usm Nano",
    "nameEn": "canon ef-s 18-135mm f/3.5-5.6 Usm Nano",
    "category": "filters",
    "brand": "Canon",
    "price": 330,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 50,
    "stock": 4,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة canon ef-s 18-135mm f/3.5-5.6 Usm Nano الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "Canon RF/EF",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-141",
    "name": "sigma 85mm f/1.4 dg hsm art",
    "nameEn": "sigma 85mm f/1.4 dg hsm art",
    "category": "filters",
    "brand": "Sigma",
    "price": 800,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 37,
    "stock": 6,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة sigma 85mm f/1.4 dg hsm art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-142",
    "name": "sigma 24-70mm f/2.8 dg os hsm art",
    "nameEn": "sigma 24-70mm f/2.8 dg os hsm art",
    "category": "filters",
    "brand": "Sigma",
    "price": 920,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 10,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة sigma 24-70mm f/2.8 dg os hsm art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-143",
    "name": "sigma 18-35mmf/1.8 DC HSM Art",
    "nameEn": "sigma 18-35mmf/1.8 DC HSM Art",
    "category": "filters",
    "brand": "Sigma",
    "price": 570,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 25,
    "stock": 10,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة sigma 18-35mmf/1.8 DC HSM Art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-144",
    "name": "sigma 35mm f/1.4 GD HSm Art",
    "nameEn": "sigma 35mm f/1.4 GD HSm Art",
    "category": "filters",
    "brand": "Sigma",
    "price": 650,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 12,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة sigma 35mm f/1.4 GD HSm Art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-145",
    "name": "sigma 24-105mm f/4 DG OS HSM",
    "nameEn": "sigma 24-105mm f/4 DG OS HSM",
    "category": "filters",
    "brand": "Sigma",
    "price": 650,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 67,
    "stock": 6,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة sigma 24-105mm f/4 DG OS HSM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LEN-146",
    "name": "sigma 16mm f/1.4 DG DN",
    "nameEn": "sigma 16mm f/1.4 DG DN",
    "category": "filters",
    "brand": "Sigma",
    "price": 330,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 45,
    "stock": 7,
    "badge": "عدسات أصلية",
    "image": "images/filter_lens.jpg",
    "description": "عدسة sigma 16mm f/1.4 DG DN الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
    "specs": {
      "النوع": "عدسة تصوير احترافية",
      "التوافق": "متوافقة مع كاميرات الفل فريم",
      "الكفالة": "كفالة الوكيل الرسمية سنتين"
    }
  },
  {
    "id": "LGT-147",
    "name": "Godox sl60II",
    "nameEn": "Godox sl60II",
    "category": "lighting",
    "brand": "Godox",
    "price": 100,
    "oldPrice": 110,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 20,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox sl60II بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-148",
    "name": "Godox sl60II bi",
    "nameEn": "Godox sl60II bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 135,
    "oldPrice": 150,
    "rating": 4.8,
    "reviewsCount": 64,
    "stock": 9,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox sl60II bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-149",
    "name": "Godox SL100D",
    "nameEn": "Godox SL100D",
    "category": "lighting",
    "brand": "Godox",
    "price": 150,
    "oldPrice": 160,
    "rating": 4.8,
    "reviewsCount": 67,
    "stock": 7,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Godox SL100D بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-150",
    "name": "Godox SL100BI",
    "nameEn": "Godox SL100BI",
    "category": "lighting",
    "brand": "Godox",
    "price": 170,
    "oldPrice": 180,
    "rating": 4.8,
    "reviewsCount": 61,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Godox SL100BI بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-151",
    "name": "Godox sl 150 III",
    "nameEn": "Godox sl 150 III",
    "category": "lighting",
    "brand": "Godox",
    "price": 250,
    "oldPrice": 275,
    "rating": 4.8,
    "reviewsCount": 27,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox sl 150 III بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-152",
    "name": "Godox sl 150 III bi",
    "nameEn": "Godox sl 150 III bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 325,
    "oldPrice": 350,
    "rating": 4.8,
    "reviewsCount": 63,
    "stock": 8,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox sl 150 III bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-153",
    "name": "Godox sl 200 III",
    "nameEn": "Godox sl 200 III",
    "category": "lighting",
    "brand": "Godox",
    "price": 325,
    "oldPrice": 350,
    "rating": 4.8,
    "reviewsCount": 39,
    "stock": 8,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox sl 200 III بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-154",
    "name": "Godox sl 200 III bi",
    "nameEn": "Godox sl 200 III bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 375,
    "oldPrice": 400,
    "rating": 4.8,
    "reviewsCount": 47,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox sl 200 III bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-155",
    "name": "Godox sl300 III",
    "nameEn": "Godox sl300 III",
    "category": "lighting",
    "brand": "Godox",
    "price": 400,
    "oldPrice": 425,
    "rating": 4.8,
    "reviewsCount": 35,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox sl300 III بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-156",
    "name": "Godox sl300 III bi",
    "nameEn": "Godox sl300 III bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 525,
    "oldPrice": 575,
    "rating": 4.8,
    "reviewsCount": 35,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox sl300 III bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-157",
    "name": "Godox la 150",
    "nameEn": "Godox la 150",
    "category": "lighting",
    "brand": "Godox",
    "price": 230,
    "oldPrice": 250,
    "rating": 4.8,
    "reviewsCount": 83,
    "stock": 7,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox la 150 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-158",
    "name": "Godox la 200",
    "nameEn": "Godox la 200",
    "category": "lighting",
    "brand": "Godox",
    "price": 250,
    "oldPrice": 280,
    "rating": 4.8,
    "reviewsCount": 67,
    "stock": 6,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox la 200 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-159",
    "name": "Godox la 200 bi",
    "nameEn": "Godox la 200 bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 320,
    "oldPrice": 350,
    "rating": 4.8,
    "reviewsCount": 48,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox la 200 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-160",
    "name": "Godox la 300 bi (kit1)",
    "nameEn": "Godox la 300 bi (kit1)",
    "category": "lighting",
    "brand": "Godox",
    "price": 425,
    "oldPrice": 475,
    "rating": 4.8,
    "reviewsCount": 82,
    "stock": 22,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox la 300 bi (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-161",
    "name": "Godox la200 rgb (kit1)",
    "nameEn": "Godox la200 rgb (kit1)",
    "category": "lighting",
    "brand": "Godox",
    "price": 375,
    "oldPrice": 425,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 8,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox la200 rgb (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-162",
    "name": "Godox la300 rgb (kit1)",
    "nameEn": "Godox la300 rgb (kit1)",
    "category": "lighting",
    "brand": "Godox",
    "price": 500,
    "oldPrice": 550,
    "rating": 4.8,
    "reviewsCount": 29,
    "stock": 9,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox la300 rgb (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-163",
    "name": "Godox la 600 bi (kit1)",
    "nameEn": "Godox la 600 bi (kit1)",
    "category": "lighting",
    "brand": "Godox",
    "price": 675,
    "oldPrice": 750,
    "rating": 4.8,
    "reviewsCount": 45,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox la 600 bi (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-164",
    "name": "Godox la 600 rgb (kit1)",
    "nameEn": "Godox la 600 rgb (kit1)",
    "category": "lighting",
    "brand": "Godox",
    "price": 800,
    "oldPrice": 900,
    "rating": 4.8,
    "reviewsCount": 67,
    "stock": 10,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox la 600 rgb (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-165",
    "name": "Godox le 200 bi",
    "nameEn": "Godox le 200 bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 275,
    "oldPrice": 300,
    "rating": 4.8,
    "reviewsCount": 39,
    "stock": 10,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox le 200 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-166",
    "name": "Godox le 300 bi",
    "nameEn": "Godox le 300 bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 325,
    "oldPrice": 375,
    "rating": 4.8,
    "reviewsCount": 81,
    "stock": 19,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox le 300 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-167",
    "name": "Godox Le 600 Bi",
    "nameEn": "Godox Le 600 Bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 550,
    "oldPrice": 600,
    "rating": 4.8,
    "reviewsCount": 59,
    "stock": 22,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Le 600 Bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-168",
    "name": "Godox ml 100 bi",
    "nameEn": "Godox ml 100 bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 200,
    "oldPrice": 225,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox ml 100 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-169",
    "name": "Godox ml 100 bi (kit2)",
    "nameEn": "Godox ml 100 bi (kit2)",
    "category": "lighting",
    "brand": "Godox",
    "price": 250,
    "oldPrice": 275,
    "rating": 4.8,
    "reviewsCount": 27,
    "stock": 10,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox ml 100 bi (kit2) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-170",
    "name": "Godox ml 60 II bi",
    "nameEn": "Godox ml 60 II bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 160,
    "oldPrice": 180,
    "rating": 4.8,
    "reviewsCount": 82,
    "stock": 15,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox ml 60 II bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-171",
    "name": "Godox ml 60 II bi (kit2)",
    "nameEn": "Godox ml 60 II bi (kit2)",
    "category": "lighting",
    "brand": "Godox",
    "price": 200,
    "oldPrice": 225,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox ml 60 II bi (kit2) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-172",
    "name": "Godox ml 100 rgb (kit1)",
    "nameEn": "Godox ml 100 rgb (kit1)",
    "category": "lighting",
    "brand": "Godox",
    "price": 300,
    "oldPrice": 325,
    "rating": 4.8,
    "reviewsCount": 76,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox ml 100 rgb (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-173",
    "name": "Godox ml 150",
    "nameEn": "Godox ml 150",
    "category": "lighting",
    "brand": "Godox",
    "price": 300,
    "oldPrice": 325,
    "rating": 4.8,
    "reviewsCount": 28,
    "stock": 6,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox ml 150 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-174",
    "name": "Godox Vl 150 II",
    "nameEn": "Godox Vl 150 II",
    "category": "lighting",
    "brand": "Godox",
    "price": 350,
    "oldPrice": 400,
    "rating": 4.8,
    "reviewsCount": 68,
    "stock": 9,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Vl 150 II بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-175",
    "name": "Godox vl 200 II",
    "nameEn": "Godox vl 200 II",
    "category": "lighting",
    "brand": "Godox",
    "price": 400,
    "oldPrice": 450,
    "rating": 4.8,
    "reviewsCount": 69,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox vl 200 II بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-176",
    "name": "Godox VL 300 II",
    "nameEn": "Godox VL 300 II",
    "category": "lighting",
    "brand": "Godox",
    "price": 580,
    "oldPrice": 620,
    "rating": 4.8,
    "reviewsCount": 46,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox VL 300 II بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-177",
    "name": "Godox fv 150",
    "nameEn": "Godox fv 150",
    "category": "lighting",
    "brand": "Godox",
    "price": 325,
    "oldPrice": 375,
    "rating": 4.8,
    "reviewsCount": 81,
    "stock": 14,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox fv 150 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-178",
    "name": "Godox fv 200",
    "nameEn": "Godox fv 200",
    "category": "lighting",
    "brand": "Godox",
    "price": 425,
    "oldPrice": 475,
    "rating": 4.8,
    "reviewsCount": 43,
    "stock": 18,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox fv 200 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-179",
    "name": "Godox godox lp1200bi",
    "nameEn": "Godox godox lp1200bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 200,
    "oldPrice": 225,
    "rating": 4.8,
    "reviewsCount": 28,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox lp1200bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-180",
    "name": "Godox LDX100R",
    "nameEn": "Godox LDX100R",
    "category": "lighting",
    "brand": "Godox",
    "price": 330,
    "oldPrice": 370,
    "rating": 4.8,
    "reviewsCount": 64,
    "stock": 13,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox LDX100R بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-181",
    "name": "Godox LDX50R",
    "nameEn": "Godox LDX50R",
    "category": "lighting",
    "brand": "Godox",
    "price": 190,
    "oldPrice": 220,
    "rating": 4.8,
    "reviewsCount": 66,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox LDX50R بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-182",
    "name": "Godox godox led 1000 bi ii",
    "nameEn": "Godox godox led 1000 bi ii",
    "category": "lighting",
    "brand": "Godox",
    "price": 250,
    "oldPrice": 275,
    "rating": 4.8,
    "reviewsCount": 63,
    "stock": 14,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox led 1000 bi ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-183",
    "name": "Godox godox c30 bi",
    "nameEn": "Godox godox c30 bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 50,
    "oldPrice": 60,
    "rating": 4.8,
    "reviewsCount": 76,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox c30 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-184",
    "name": "Godox godox c30 r",
    "nameEn": "Godox godox c30 r",
    "category": "lighting",
    "brand": "Godox",
    "price": 65,
    "oldPrice": 75,
    "rating": 4.8,
    "reviewsCount": 80,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox c30 r بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-185",
    "name": "Godox godox p 260c pro bi",
    "nameEn": "Godox godox p 260c pro bi",
    "category": "lighting",
    "brand": "Godox",
    "price": 100,
    "oldPrice": 110,
    "rating": 4.8,
    "reviewsCount": 37,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox p 260c pro bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-186",
    "name": "Godox godox m1 rgb",
    "nameEn": "Godox godox m1 rgb",
    "category": "lighting",
    "brand": "Godox",
    "price": 110,
    "oldPrice": 125,
    "rating": 4.8,
    "reviewsCount": 70,
    "stock": 15,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox m1 rgb بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-187",
    "name": "Godox godox lp600r",
    "nameEn": "Godox godox lp600r",
    "category": "lighting",
    "brand": "Godox",
    "price": 175,
    "oldPrice": 200,
    "rating": 4.8,
    "reviewsCount": 58,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox lp600r بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-188",
    "name": "Godox godox lp600r Kit2",
    "nameEn": "Godox godox lp600r Kit2",
    "category": "lighting",
    "brand": "Godox",
    "price": 350,
    "oldPrice": 390,
    "rating": 4.8,
    "reviewsCount": 42,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox lp600r Kit2 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-189",
    "name": "Godox godox lp1200r",
    "nameEn": "Godox godox lp1200r",
    "category": "lighting",
    "brand": "Godox",
    "price": 230,
    "oldPrice": 275,
    "rating": 4.8,
    "reviewsCount": 25,
    "stock": 14,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox lp1200r بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-190",
    "name": "Godox godox lp1200r Kit 2",
    "nameEn": "Godox godox lp1200r Kit 2",
    "category": "lighting",
    "brand": "Godox",
    "price": 530,
    "oldPrice": 575,
    "rating": 4.8,
    "reviewsCount": 67,
    "stock": 10,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox lp1200r Kit 2 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-191",
    "name": "Godox godox c5r rgb",
    "nameEn": "Godox godox c5r rgb",
    "category": "lighting",
    "brand": "Godox",
    "price": 90,
    "oldPrice": 99,
    "rating": 4.8,
    "reviewsCount": 40,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox c5r rgb بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-192",
    "name": "Godox qr-p90 softbox with grid",
    "nameEn": "Godox qr-p90 softbox with grid",
    "category": "lighting",
    "brand": "Godox",
    "price": 115,
    "oldPrice": 125,
    "rating": 4.8,
    "reviewsCount": 35,
    "stock": 9,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox qr-p90 softbox with grid بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-193",
    "name": "Godox qr-p120 softbox with grid",
    "nameEn": "Godox qr-p120 softbox with grid",
    "category": "lighting",
    "brand": "Godox",
    "price": 135,
    "oldPrice": 149,
    "rating": 4.8,
    "reviewsCount": 50,
    "stock": 16,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox qr-p120 softbox with grid بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-194",
    "name": "Godox godox umbralla softbox60*60",
    "nameEn": "Godox godox umbralla softbox60*60",
    "category": "lighting",
    "brand": "Godox",
    "price": 35,
    "oldPrice": 40,
    "rating": 4.8,
    "reviewsCount": 72,
    "stock": 15,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox umbralla softbox60*60 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-195",
    "name": "Godox 60*90",
    "nameEn": "Godox 60*90",
    "category": "lighting",
    "brand": "Godox",
    "price": 40,
    "oldPrice": 45,
    "rating": 4.8,
    "reviewsCount": 33,
    "stock": 20,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 60*90 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-196",
    "name": "Godox 80*120",
    "nameEn": "Godox 80*120",
    "category": "lighting",
    "brand": "Godox",
    "price": 50,
    "oldPrice": 55,
    "rating": 4.8,
    "reviewsCount": 73,
    "stock": 16,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 80*120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-197",
    "name": "Godox octa 95",
    "nameEn": "Godox octa 95",
    "category": "lighting",
    "brand": "Godox",
    "price": 50,
    "oldPrice": 55,
    "rating": 4.8,
    "reviewsCount": 68,
    "stock": 8,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox octa 95 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-198",
    "name": "Godox octa 120",
    "nameEn": "Godox octa 120",
    "category": "lighting",
    "brand": "Godox",
    "price": 60,
    "oldPrice": 65,
    "rating": 4.8,
    "reviewsCount": 64,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox octa 120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-199",
    "name": "Godox softbox with grid سياخ 60*60",
    "nameEn": "Godox softbox with grid سياخ 60*60",
    "category": "lighting",
    "brand": "Godox",
    "price": 25,
    "oldPrice": 30,
    "rating": 4.8,
    "reviewsCount": 83,
    "stock": 22,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox softbox with grid سياخ 60*60 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-200",
    "name": "Godox 60*90",
    "nameEn": "Godox 60*90",
    "category": "lighting",
    "brand": "Godox",
    "price": 30,
    "oldPrice": 35,
    "rating": 4.8,
    "reviewsCount": 55,
    "stock": 17,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 60*90 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-201",
    "name": "Godox 80*120",
    "nameEn": "Godox 80*120",
    "category": "lighting",
    "brand": "Godox",
    "price": 35,
    "oldPrice": 40,
    "rating": 4.8,
    "reviewsCount": 45,
    "stock": 8,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 80*120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-202",
    "name": "Godox 35*160",
    "nameEn": "Godox 35*160",
    "category": "lighting",
    "brand": "Godox",
    "price": 35,
    "oldPrice": 40,
    "rating": 4.8,
    "reviewsCount": 29,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 35*160 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-203",
    "name": "Godox octa 95",
    "nameEn": "Godox octa 95",
    "category": "lighting",
    "brand": "Godox",
    "price": 35,
    "oldPrice": 40,
    "rating": 4.8,
    "reviewsCount": 30,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox octa 95 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-204",
    "name": "Godox octa120",
    "nameEn": "Godox octa120",
    "category": "lighting",
    "brand": "Godox",
    "price": 45,
    "oldPrice": 50,
    "rating": 4.8,
    "reviewsCount": 75,
    "stock": 16,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox octa120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-205",
    "name": "Godox octa 140",
    "nameEn": "Godox octa 140",
    "category": "lighting",
    "brand": "Godox",
    "price": 55,
    "oldPrice": 60,
    "rating": 4.8,
    "reviewsCount": 39,
    "stock": 14,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox octa 140 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-206",
    "name": "Godox godox diffuser 90*120",
    "nameEn": "Godox godox diffuser 90*120",
    "category": "lighting",
    "brand": "Godox",
    "price": 15,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 54,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox diffuser 90*120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-207",
    "name": "Godox 100*150",
    "nameEn": "Godox 100*150",
    "category": "lighting",
    "brand": "Godox",
    "price": 20,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 28,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 100*150 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-208",
    "name": "Godox 120*180",
    "nameEn": "Godox 120*180",
    "category": "lighting",
    "brand": "Godox",
    "price": 25,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 65,
    "stock": 16,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 120*180 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-209",
    "name": "Godox 150*200",
    "nameEn": "Godox 150*200",
    "category": "lighting",
    "brand": "Godox",
    "price": 30,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 70,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 150*200 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-210",
    "name": "Godox 7 in 1 Rectangular Refelctor& diffuser  60*90",
    "nameEn": "Godox 7 in 1 Rectangular Refelctor& diffuser  60*90",
    "category": "lighting",
    "brand": "Godox",
    "price": 25,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 54,
    "stock": 8,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 7 in 1 Rectangular Refelctor& diffuser  60*90 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-211",
    "name": "Godox 90*120",
    "nameEn": "Godox 90*120",
    "category": "lighting",
    "brand": "Godox",
    "price": 35,
    "oldPrice": 40,
    "rating": 4.8,
    "reviewsCount": 82,
    "stock": 17,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 90*120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-212",
    "name": "Godox 120*180",
    "nameEn": "Godox 120*180",
    "category": "lighting",
    "brand": "Godox",
    "price": 45,
    "oldPrice": 50,
    "rating": 4.8,
    "reviewsCount": 59,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 120*180 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-213",
    "name": "Godox 150*200",
    "nameEn": "Godox 150*200",
    "category": "lighting",
    "brand": "Godox",
    "price": 50,
    "oldPrice": 60,
    "rating": 4.8,
    "reviewsCount": 38,
    "stock": 6,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 150*200 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-214",
    "name": "Godox 7 in 1 Circle Refelctor& diffuser  80cm",
    "nameEn": "Godox 7 in 1 Circle Refelctor& diffuser  80cm",
    "category": "lighting",
    "brand": "Godox",
    "price": 20,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 30,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 7 in 1 Circle Refelctor& diffuser  80cm بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-215",
    "name": "Godox 7 in 1 Circle Refelctor& diffuser  110cm",
    "nameEn": "Godox 7 in 1 Circle Refelctor& diffuser  110cm",
    "category": "lighting",
    "brand": "Godox",
    "price": 25,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 25,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox 7 in 1 Circle Refelctor& diffuser  110cm بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-216",
    "name": "Godox SF4560 Flodable Scrim Flag kit",
    "nameEn": "Godox SF4560 Flodable Scrim Flag kit",
    "category": "lighting",
    "brand": "Godox",
    "price": 135,
    "oldPrice": 149,
    "rating": 4.8,
    "reviewsCount": 25,
    "stock": 15,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox SF4560 Flodable Scrim Flag kit بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-217",
    "name": "Godox SF6090 Flodable Scrim Flag kit",
    "nameEn": "Godox SF6090 Flodable Scrim Flag kit",
    "category": "lighting",
    "brand": "Godox",
    "price": 175,
    "oldPrice": 189,
    "rating": 4.8,
    "reviewsCount": 47,
    "stock": 7,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox SF6090 Flodable Scrim Flag kit بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-218",
    "name": "Godox godox ml bowens adapter",
    "nameEn": "Godox godox ml bowens adapter",
    "category": "lighting",
    "brand": "Godox",
    "price": 25,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 70,
    "stock": 20,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox ml bowens adapter بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-219",
    "name": "Godox godox lantern cs-65t",
    "nameEn": "Godox godox lantern cs-65t",
    "category": "lighting",
    "brand": "Godox",
    "price": 45,
    "oldPrice": 55,
    "rating": 4.8,
    "reviewsCount": 57,
    "stock": 16,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox lantern cs-65t بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-220",
    "name": "Godox godox lantern cs-85t",
    "nameEn": "Godox godox lantern cs-85t",
    "category": "lighting",
    "brand": "Godox",
    "price": 55,
    "oldPrice": 65,
    "rating": 4.8,
    "reviewsCount": 76,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox lantern cs-85t بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-221",
    "name": "Godox godox lantern cs-65t with cover",
    "nameEn": "Godox godox lantern cs-65t with cover",
    "category": "lighting",
    "brand": "Godox",
    "price": 65,
    "oldPrice": 70,
    "rating": 4.8,
    "reviewsCount": 51,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox lantern cs-65t with cover بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-222",
    "name": "Godox godox lantern cs-85t with cover",
    "nameEn": "Godox godox lantern cs-85t with cover",
    "category": "lighting",
    "brand": "Godox",
    "price": 75,
    "oldPrice": 85,
    "rating": 4.8,
    "reviewsCount": 26,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox lantern cs-85t with cover بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-223",
    "name": "Godox godox qr-p60t with grid",
    "nameEn": "Godox godox qr-p60t with grid",
    "category": "lighting",
    "brand": "Godox",
    "price": 85,
    "oldPrice": 99,
    "rating": 4.8,
    "reviewsCount": 76,
    "stock": 15,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox qr-p60t with grid بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-224",
    "name": "Godox GODOX LSD40 Shooting Tent",
    "nameEn": "Godox GODOX LSD40 Shooting Tent",
    "category": "lighting",
    "brand": "Godox",
    "price": 45,
    "oldPrice": 55,
    "rating": 4.8,
    "reviewsCount": 73,
    "stock": 10,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox GODOX LSD40 Shooting Tent بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-225",
    "name": "Godox GODOX LSD60 Shooting Tent",
    "nameEn": "Godox GODOX LSD60 Shooting Tent",
    "category": "lighting",
    "brand": "Godox",
    "price": 60,
    "oldPrice": 70,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox GODOX LSD60 Shooting Tent بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-226",
    "name": "Godox GODOX LSD80 Shooting Tent",
    "nameEn": "Godox GODOX LSD80 Shooting Tent",
    "category": "lighting",
    "brand": "Godox",
    "price": 75,
    "oldPrice": 85,
    "rating": 4.8,
    "reviewsCount": 66,
    "stock": 20,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox GODOX LSD80 Shooting Tent بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-227",
    "name": "Godox godox vb26a/vb26 for v1",
    "nameEn": "Godox godox vb26a/vb26 for v1",
    "category": "lighting",
    "brand": "Godox",
    "price": 45,
    "oldPrice": 49,
    "rating": 4.8,
    "reviewsCount": 65,
    "stock": 22,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox vb26a/vb26 for v1 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-228",
    "name": "Godox godox x3 trigger",
    "nameEn": "Godox godox x3 trigger",
    "category": "lighting",
    "brand": "Godox",
    "price": 90,
    "oldPrice": 99,
    "rating": 4.8,
    "reviewsCount": 53,
    "stock": 8,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox godox x3 trigger بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-229",
    "name": "Godox x-pro",
    "nameEn": "Godox x-pro",
    "category": "lighting",
    "brand": "Godox",
    "price": 65,
    "oldPrice": 69,
    "rating": 4.8,
    "reviewsCount": 45,
    "stock": 9,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox x-pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-230",
    "name": "Godox x-pro ii",
    "nameEn": "Godox x-pro ii",
    "category": "lighting",
    "brand": "Godox",
    "price": 75,
    "oldPrice": 85,
    "rating": 4.8,
    "reviewsCount": 28,
    "stock": 15,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox x-pro ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-231",
    "name": "Godox x2t",
    "nameEn": "Godox x2t",
    "category": "lighting",
    "brand": "Godox",
    "price": 50,
    "oldPrice": 55,
    "rating": 4.8,
    "reviewsCount": 58,
    "stock": 15,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox x2t بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-232",
    "name": "Godox at-04",
    "nameEn": "Godox at-04",
    "category": "lighting",
    "brand": "Godox",
    "price": 20,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 35,
    "stock": 14,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox at-04 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-233",
    "name": "Godox Ad 200 pro ii",
    "nameEn": "Godox Ad 200 pro ii",
    "category": "lighting",
    "brand": "Godox",
    "price": 325,
    "oldPrice": 375,
    "rating": 4.8,
    "reviewsCount": 34,
    "stock": 9,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Ad 200 pro ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-234",
    "name": "Godox Ad 300 pro",
    "nameEn": "Godox Ad 300 pro",
    "category": "lighting",
    "brand": "Godox",
    "price": 350,
    "oldPrice": 375,
    "rating": 4.8,
    "reviewsCount": 51,
    "stock": 13,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Ad 300 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-235",
    "name": "Godox Ad 400 pro",
    "nameEn": "Godox Ad 400 pro",
    "category": "lighting",
    "brand": "Godox",
    "price": 470,
    "oldPrice": 500,
    "rating": 4.8,
    "reviewsCount": 61,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Ad 400 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-236",
    "name": "Godox Ad 400 pro ii",
    "nameEn": "Godox Ad 400 pro ii",
    "category": "lighting",
    "brand": "Godox",
    "price": 500,
    "oldPrice": 550,
    "rating": 4.8,
    "reviewsCount": 37,
    "stock": 20,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Ad 400 pro ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-237",
    "name": "Godox ad 600 bm ii",
    "nameEn": "Godox ad 600 bm ii",
    "category": "lighting",
    "brand": "Godox",
    "price": 500,
    "oldPrice": 550,
    "rating": 4.8,
    "reviewsCount": 35,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox ad 600 bm ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-238",
    "name": "Godox ad600 pro ii",
    "nameEn": "Godox ad600 pro ii",
    "category": "lighting",
    "brand": "Godox",
    "price": 600,
    "oldPrice": 660,
    "rating": 4.8,
    "reviewsCount": 75,
    "stock": 8,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox ad600 pro ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-239",
    "name": "Godox v850 ii",
    "nameEn": "Godox v850 ii",
    "category": "lighting",
    "brand": "Godox",
    "price": 130,
    "oldPrice": 140,
    "rating": 4.8,
    "reviewsCount": 63,
    "stock": 16,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox v850 ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-240",
    "name": "Godox v860 iii",
    "nameEn": "Godox v860 iii",
    "category": "lighting",
    "brand": "Godox",
    "price": 165,
    "oldPrice": 179,
    "rating": 4.8,
    "reviewsCount": 63,
    "stock": 15,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox v860 iii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-241",
    "name": "Godox v1 pro",
    "nameEn": "Godox v1 pro",
    "category": "lighting",
    "brand": "Godox",
    "price": 225,
    "oldPrice": 250,
    "rating": 4.8,
    "reviewsCount": 77,
    "stock": 6,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox v1 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-242",
    "name": "Godox qt 400 iii m",
    "nameEn": "Godox qt 400 iii m",
    "category": "lighting",
    "brand": "Godox",
    "price": 330,
    "oldPrice": 375,
    "rating": 4.8,
    "reviewsCount": 70,
    "stock": 18,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox qt 400 iii m بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-243",
    "name": "Godox qt 600 iii m",
    "nameEn": "Godox qt 600 iii m",
    "category": "lighting",
    "brand": "Godox",
    "price": 425,
    "oldPrice": 475,
    "rating": 4.8,
    "reviewsCount": 36,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox qt 600 iii m بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-244",
    "name": "Godox DP 400 IIIV",
    "nameEn": "Godox DP 400 IIIV",
    "category": "lighting",
    "brand": "Godox",
    "price": 180,
    "oldPrice": 190,
    "rating": 4.8,
    "reviewsCount": 64,
    "stock": 15,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox DP 400 IIIV بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-245",
    "name": "Godox DP 600 IIIV",
    "nameEn": "Godox DP 600 IIIV",
    "category": "lighting",
    "brand": "Godox",
    "price": 210,
    "oldPrice": 220,
    "rating": 4.8,
    "reviewsCount": 34,
    "stock": 22,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox DP 600 IIIV بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-246",
    "name": "Godox DP 800 IIIV",
    "nameEn": "Godox DP 800 IIIV",
    "category": "lighting",
    "brand": "Godox",
    "price": 260,
    "oldPrice": 280,
    "rating": 4.8,
    "reviewsCount": 46,
    "stock": 9,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox DP 800 IIIV بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-247",
    "name": "Godox DP 1000 IIIV",
    "nameEn": "Godox DP 1000 IIIV",
    "category": "lighting",
    "brand": "Godox",
    "price": 310,
    "oldPrice": 330,
    "rating": 4.8,
    "reviewsCount": 53,
    "stock": 10,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox DP 1000 IIIV بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-248",
    "name": "Godox SK300 II-V",
    "nameEn": "Godox SK300 II-V",
    "category": "lighting",
    "brand": "Godox",
    "price": 120,
    "oldPrice": 129,
    "rating": 4.8,
    "reviewsCount": 52,
    "stock": 16,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox SK300 II-V بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-249",
    "name": "Godox SK400 II-V",
    "nameEn": "Godox SK400 II-V",
    "category": "lighting",
    "brand": "Godox",
    "price": 140,
    "oldPrice": 159,
    "rating": 4.8,
    "reviewsCount": 32,
    "stock": 14,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox SK400 II-V بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-250",
    "name": "Godox SK300 III-V",
    "nameEn": "Godox SK300 III-V",
    "category": "lighting",
    "brand": "Godox",
    "price": 125,
    "oldPrice": 139,
    "rating": 4.8,
    "reviewsCount": 83,
    "stock": 8,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox SK300 III-V بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-251",
    "name": "Godox SK400 III-V",
    "nameEn": "Godox SK400 III-V",
    "category": "lighting",
    "brand": "Godox",
    "price": 145,
    "oldPrice": 169,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox SK400 III-V بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-252",
    "name": "Godox im30/im22/im20 mini flash",
    "nameEn": "Godox im30/im22/im20 mini flash",
    "category": "lighting",
    "brand": "Godox",
    "price": 30,
    "oldPrice": 35,
    "rating": 4.8,
    "reviewsCount": 65,
    "stock": 16,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox im30/im22/im20 mini flash بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-253",
    "name": "Godox ia 32 mini flash",
    "nameEn": "Godox ia 32 mini flash",
    "category": "lighting",
    "brand": "Godox",
    "price": 50,
    "oldPrice": 60,
    "rating": 4.8,
    "reviewsCount": 39,
    "stock": 14,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox ia 32 mini flash بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-254",
    "name": "Godox tt85 ii flash",
    "nameEn": "Godox tt85 ii flash",
    "category": "lighting",
    "brand": "Godox",
    "price": 115,
    "oldPrice": 125,
    "rating": 4.8,
    "reviewsCount": 67,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox tt85 ii flash بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-255",
    "name": "Godox tt 600",
    "nameEn": "Godox tt 600",
    "category": "lighting",
    "brand": "Godox",
    "price": 80,
    "oldPrice": 85,
    "rating": 4.8,
    "reviewsCount": 43,
    "stock": 9,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox tt 600 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-256",
    "name": "Godox v100",
    "nameEn": "Godox v100",
    "category": "lighting",
    "brand": "Godox",
    "price": 260,
    "oldPrice": 299,
    "rating": 4.8,
    "reviewsCount": 39,
    "stock": 7,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox v100 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-257",
    "name": "Godox tt520 iii",
    "nameEn": "Godox tt520 iii",
    "category": "lighting",
    "brand": "Godox",
    "price": 45,
    "oldPrice": 50,
    "rating": 4.8,
    "reviewsCount": 66,
    "stock": 8,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox tt520 iii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-258",
    "name": "Godox tt560 ii",
    "nameEn": "Godox tt560 ii",
    "category": "lighting",
    "brand": "Godox",
    "price": 60,
    "oldPrice": 65,
    "rating": 4.8,
    "reviewsCount": 83,
    "stock": 20,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox tt560 ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-259",
    "name": "Godox V480",
    "nameEn": "Godox V480",
    "category": "lighting",
    "brand": "Godox",
    "price": 140,
    "oldPrice": 149,
    "rating": 4.8,
    "reviewsCount": 68,
    "stock": 7,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox V480 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-260",
    "name": "Godox ML-150 II Macro ring Flash",
    "nameEn": "Godox ML-150 II Macro ring Flash",
    "category": "lighting",
    "brand": "Godox",
    "price": 75,
    "oldPrice": 85,
    "rating": 4.8,
    "reviewsCount": 25,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox ML-150 II Macro ring Flash بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-261",
    "name": "Godox MF-R76 Macro Ring Flash",
    "nameEn": "Godox MF-R76 Macro Ring Flash",
    "category": "lighting",
    "brand": "Godox",
    "price": 135,
    "oldPrice": 150,
    "rating": 4.8,
    "reviewsCount": 47,
    "stock": 22,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox MF-R76 Macro Ring Flash بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-262",
    "name": "Godox MF12 Dental Macro Flash Kit with Trigger Xpro",
    "nameEn": "Godox MF12 Dental Macro Flash Kit with Trigger Xpro",
    "category": "lighting",
    "brand": "Godox",
    "price": 300,
    "oldPrice": 330,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox MF12 Dental Macro Flash Kit with Trigger Xpro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-263",
    "name": "Godox Flash Tube for AD600 pro",
    "nameEn": "Godox Flash Tube for AD600 pro",
    "category": "lighting",
    "brand": "Godox",
    "price": 120,
    "oldPrice": 135,
    "rating": 4.8,
    "reviewsCount": 45,
    "stock": 18,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Flash Tube for AD600 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-264",
    "name": "Godox Flash Tube for AD400 pro",
    "nameEn": "Godox Flash Tube for AD400 pro",
    "category": "lighting",
    "brand": "Godox",
    "price": 110,
    "oldPrice": 125,
    "rating": 4.8,
    "reviewsCount": 68,
    "stock": 6,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Flash Tube for AD400 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-265",
    "name": "Godox Ad400 Pro charger",
    "nameEn": "Godox Ad400 Pro charger",
    "category": "lighting",
    "brand": "Godox",
    "price": 40,
    "oldPrice": 45,
    "rating": 4.8,
    "reviewsCount": 38,
    "stock": 20,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Ad400 Pro charger بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-266",
    "name": "Godox AD600 pro Charger",
    "nameEn": "Godox AD600 pro Charger",
    "category": "lighting",
    "brand": "Godox",
    "price": 55,
    "oldPrice": 60,
    "rating": 4.8,
    "reviewsCount": 82,
    "stock": 18,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox AD600 pro Charger بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-267",
    "name": "Godox VB18 Battery for Godox V850 V860 V860II",
    "nameEn": "Godox VB18 Battery for Godox V850 V860 V860II",
    "category": "lighting",
    "brand": "Godox",
    "price": 30,
    "oldPrice": 35,
    "rating": 4.8,
    "reviewsCount": 42,
    "stock": 6,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox VB18 Battery for Godox V850 V860 V860II بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-268",
    "name": "Godox WB29 Battery For Godox Ad200 pro",
    "nameEn": "Godox WB29 Battery For Godox Ad200 pro",
    "category": "lighting",
    "brand": "Godox",
    "price": 60,
    "oldPrice": 65,
    "rating": 4.8,
    "reviewsCount": 78,
    "stock": 17,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox WB29 Battery For Godox Ad200 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-269",
    "name": "Godox WB400P Battery For Godox Ad400 pro",
    "nameEn": "Godox WB400P Battery For Godox Ad400 pro",
    "category": "lighting",
    "brand": "Godox",
    "price": 140,
    "oldPrice": 160,
    "rating": 4.8,
    "reviewsCount": 63,
    "stock": 6,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox WB400P Battery For Godox Ad400 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-270",
    "name": "Godox AD-FT200 Bare Bulb for ad200 pro",
    "nameEn": "Godox AD-FT200 Bare Bulb for ad200 pro",
    "category": "lighting",
    "brand": "Godox",
    "price": 45,
    "oldPrice": 50,
    "rating": 4.8,
    "reviewsCount": 42,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox AD-FT200 Bare Bulb for ad200 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-271",
    "name": "Godox WB26 battery for Godox AD600 pro",
    "nameEn": "Godox WB26 battery for Godox AD600 pro",
    "category": "lighting",
    "brand": "Godox",
    "price": 150,
    "oldPrice": 175,
    "rating": 4.8,
    "reviewsCount": 34,
    "stock": 7,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox WB26 battery for Godox AD600 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-272",
    "name": "Godox AK-R1 Round Flash Accessories Kit",
    "nameEn": "Godox AK-R1 Round Flash Accessories Kit",
    "category": "lighting",
    "brand": "Godox",
    "price": 55,
    "oldPrice": 65,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 19,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox AK-R1 Round Flash Accessories Kit بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-273",
    "name": "Godox AK-R21 Projection Attachment",
    "nameEn": "Godox AK-R21 Projection Attachment",
    "category": "lighting",
    "brand": "Godox",
    "price": 75,
    "oldPrice": 85,
    "rating": 4.8,
    "reviewsCount": 50,
    "stock": 15,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox AK-R21 Projection Attachment بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-274",
    "name": "Godox SA-17 Bownes Mount Adapter with SA-P+SA-06+SA-001-09+SA-10",
    "nameEn": "Godox SA-17 Bownes Mount Adapter with SA-P+SA-06+SA-001-09+SA-10",
    "category": "lighting",
    "brand": "Godox",
    "price": 170,
    "oldPrice": 190,
    "rating": 4.8,
    "reviewsCount": 32,
    "stock": 14,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox SA-17 Bownes Mount Adapter with SA-P+SA-06+SA-001-09+SA-10 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-275",
    "name": "Godox ML-CD15 diffuser Dome",
    "nameEn": "Godox ML-CD15 diffuser Dome",
    "category": "lighting",
    "brand": "Godox",
    "price": 25,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 71,
    "stock": 10,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox ML-CD15 diffuser Dome بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-276",
    "name": "Godox Barndoor BD-04 kit with Grid & color Gel",
    "nameEn": "Godox Barndoor BD-04 kit with Grid & color Gel",
    "category": "lighting",
    "brand": "Godox",
    "price": 25,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Godox Barndoor BD-04 kit with Grid & color Gel بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-277",
    "name": "Godox Carrying bag with wheels CB-51",
    "nameEn": "Godox Carrying bag with wheels CB-51",
    "category": "lighting",
    "brand": "Godox",
    "price": 80,
    "oldPrice": 90,
    "rating": 4.8,
    "reviewsCount": 43,
    "stock": 17,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Godox Godox Carrying bag with wheels CB-51 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Godox",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-278",
    "name": "Colbor CL60 Bi",
    "nameEn": "Colbor CL60 Bi",
    "category": "lighting",
    "brand": "Colbor",
    "price": 120,
    "oldPrice": 140,
    "rating": 4.8,
    "reviewsCount": 73,
    "stock": 22,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Colbor CL60 Bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Colbor",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-279",
    "name": "Colbor CL60R RGB",
    "nameEn": "Colbor CL60R RGB",
    "category": "lighting",
    "brand": "Colbor",
    "price": 160,
    "oldPrice": 180,
    "rating": 4.8,
    "reviewsCount": 50,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Colbor CL60R RGB بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Colbor",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-280",
    "name": "Nanlite forza720 bi",
    "nameEn": "Nanlite forza720 bi",
    "category": "lighting",
    "brand": "Nanlite",
    "price": 1300,
    "oldPrice": 1399,
    "rating": 4.8,
    "reviewsCount": 43,
    "stock": 17,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Nanlite forza720 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Nanlite",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-281",
    "name": "Nanlite forza500 bi ii",
    "nameEn": "Nanlite forza500 bi ii",
    "category": "lighting",
    "brand": "Nanlite",
    "price": 1050,
    "oldPrice": 1150,
    "rating": 4.8,
    "reviewsCount": 79,
    "stock": 6,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Nanlite forza500 bi ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Nanlite",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-282",
    "name": "Nanlite forza 300 bi ii",
    "nameEn": "Nanlite forza 300 bi ii",
    "category": "lighting",
    "brand": "Nanlite",
    "price": 850,
    "oldPrice": 925,
    "rating": 4.8,
    "reviewsCount": 35,
    "stock": 20,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Nanlite forza 300 bi ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Nanlite",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-283",
    "name": "Nanlite forza 150 bi",
    "nameEn": "Nanlite forza 150 bi",
    "category": "lighting",
    "brand": "Nanlite",
    "price": 400,
    "oldPrice": 440,
    "rating": 4.8,
    "reviewsCount": 56,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Nanlite forza 150 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Nanlite",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-284",
    "name": "Nanlite fc 500 bi",
    "nameEn": "Nanlite fc 500 bi",
    "category": "lighting",
    "brand": "Nanlite",
    "price": 530,
    "oldPrice": 590,
    "rating": 4.8,
    "reviewsCount": 42,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Nanlite fc 500 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Nanlite",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-285",
    "name": "Nanlite fc 300 bi",
    "nameEn": "Nanlite fc 300 bi",
    "category": "lighting",
    "brand": "Nanlite",
    "price": 400,
    "oldPrice": 450,
    "rating": 4.8,
    "reviewsCount": 50,
    "stock": 6,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Nanlite fc 300 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Nanlite",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-286",
    "name": "Nanlite fc 120 bi",
    "nameEn": "Nanlite fc 120 bi",
    "category": "lighting",
    "brand": "Nanlite",
    "price": 230,
    "oldPrice": 260,
    "rating": 4.8,
    "reviewsCount": 75,
    "stock": 17,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Nanlite fc 120 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Nanlite",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-287",
    "name": "Nanlite fc 60 bi",
    "nameEn": "Nanlite fc 60 bi",
    "category": "lighting",
    "brand": "Nanlite",
    "price": 145,
    "oldPrice": 170,
    "rating": 4.8,
    "reviewsCount": 60,
    "stock": 14,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Nanlite fc 60 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Nanlite",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-288",
    "name": "Nanlite fc500c",
    "nameEn": "Nanlite fc500c",
    "category": "lighting",
    "brand": "Nanlite",
    "price": 675,
    "oldPrice": 749,
    "rating": 4.8,
    "reviewsCount": 44,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Nanlite fc500c بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Nanlite",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-289",
    "name": "Nanlite fc power controller/fc500/300",
    "nameEn": "Nanlite fc power controller/fc500/300",
    "category": "lighting",
    "brand": "Nanlite",
    "price": 300,
    "oldPrice": 349,
    "rating": 4.8,
    "reviewsCount": 42,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Nanlite fc power controller/fc500/300 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Nanlite",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-290",
    "name": "Aputure amaran200ds",
    "nameEn": "Aputure amaran200ds",
    "category": "lighting",
    "brand": "Aputure",
    "price": 325,
    "oldPrice": 350,
    "rating": 4.8,
    "reviewsCount": 67,
    "stock": 10,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Aputure amaran200ds بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Aputure",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-291",
    "name": "Aputure amaran200xs bi",
    "nameEn": "Aputure amaran200xs bi",
    "category": "lighting",
    "brand": "Aputure",
    "price": 375,
    "oldPrice": 400,
    "rating": 4.8,
    "reviewsCount": 39,
    "stock": 7,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Aputure amaran200xs bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Aputure",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-292",
    "name": "Aputure amaran100ds",
    "nameEn": "Aputure amaran100ds",
    "category": "lighting",
    "brand": "Aputure",
    "price": 175,
    "oldPrice": 200,
    "rating": 4.8,
    "reviewsCount": 26,
    "stock": 14,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Aputure amaran100ds بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Aputure",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-293",
    "name": "Aputure amaran 100xs bi",
    "nameEn": "Aputure amaran 100xs bi",
    "category": "lighting",
    "brand": "Aputure",
    "price": 225,
    "oldPrice": 250,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 12,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Aputure amaran 100xs bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Aputure",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-294",
    "name": "Aputure amaran 150 c",
    "nameEn": "Aputure amaran 150 c",
    "category": "lighting",
    "brand": "Aputure",
    "price": 325,
    "oldPrice": 375,
    "rating": 4.8,
    "reviewsCount": 60,
    "stock": 21,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Aputure amaran 150 c بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Aputure",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-295",
    "name": "Aputure amaran 300 c",
    "nameEn": "Aputure amaran 300 c",
    "category": "lighting",
    "brand": "Aputure",
    "price": 475,
    "oldPrice": 550,
    "rating": 4.8,
    "reviewsCount": 27,
    "stock": 10,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Aputure amaran 300 c بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Aputure",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-296",
    "name": "Aputure amaran Ray 360c",
    "nameEn": "Aputure amaran Ray 360c",
    "category": "lighting",
    "brand": "Aputure",
    "price": 500,
    "oldPrice": 580,
    "rating": 4.8,
    "reviewsCount": 51,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Aputure amaran Ray 360c بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Aputure",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-297",
    "name": "Aputure amaran Ray 660c",
    "nameEn": "Aputure amaran Ray 660c",
    "category": "lighting",
    "brand": "Aputure",
    "price": 800,
    "oldPrice": 899,
    "rating": 4.8,
    "reviewsCount": 51,
    "stock": 11,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية Aputure amaran Ray 660c بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "Aputure",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-298",
    "name": "K&F Concept Pl-60b bi",
    "nameEn": "K&F Concept Pl-60b bi",
    "category": "lighting",
    "brand": "K&F Concept",
    "price": 120,
    "oldPrice": 140,
    "rating": 4.8,
    "reviewsCount": 60,
    "stock": 14,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية K&F Concept Pl-60b bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "K&F Concept",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "LGT-299",
    "name": "K&F Concept pl-60b bi with",
    "nameEn": "K&F Concept pl-60b bi with",
    "category": "lighting",
    "brand": "K&F Concept",
    "price": 155,
    "oldPrice": 175,
    "rating": 4.8,
    "reviewsCount": 82,
    "stock": 5,
    "badge": "إضاءة استوديو",
    "image": "images/flash_light.jpg",
    "description": "معدات إضاءة استوديو احترافية K&F Concept pl-60b bi with بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
    "specs": {
      "الشركة": "K&F Concept",
      "التصنيف": "إضاءات واستوديو احترافي",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "STN-300",
    "name": "Dolly wheels VX-600",
    "nameEn": "Dolly wheels VX-600",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 30,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 43,
    "stock": 8,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Dolly wheels VX-600 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-301",
    "name": "Monopod MP208F + VT1510",
    "nameEn": "Monopod MP208F + VT1510",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 60,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 40,
    "stock": 19,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Monopod MP208F + VT1510 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-302",
    "name": "Monopod MP4208F Fiber +VT-3510",
    "nameEn": "Monopod MP4208F Fiber +VT-3510",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 110,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 56,
    "stock": 18,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Monopod MP4208F Fiber +VT-3510 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-303",
    "name": "Monopod MP208F",
    "nameEn": "Monopod MP208F",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 40,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 44,
    "stock": 19,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Monopod MP208F بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-304",
    "name": "Monopod MP308",
    "nameEn": "Monopod MP308",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 45,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 8,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Monopod MP308 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-305",
    "name": "Monopod MP1008F",
    "nameEn": "Monopod MP1008F",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 35,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 13,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Monopod MP1008F بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-306",
    "name": "Monopod MP408FL",
    "nameEn": "Monopod MP408FL",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 55,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 24,
    "stock": 20,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Monopod MP408FL بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-307",
    "name": "Tripod S600+GS10",
    "nameEn": "Tripod S600+GS10",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 30,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 59,
    "stock": 16,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Tripod S600+GS10 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-308",
    "name": "Tripod G555 + Go",
    "nameEn": "Tripod G555 + Go",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 55,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 33,
    "stock": 18,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Tripod G555 + Go بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-309",
    "name": "Tripod  VT-890H Multi Function",
    "nameEn": "Tripod  VT-890H Multi Function",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 35,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 28,
    "stock": 7,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Tripod  VT-890H Multi Function بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-310",
    "name": "Tripod VT-890H6 Multi Function",
    "nameEn": "Tripod VT-890H6 Multi Function",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 55,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 27,
    "stock": 7,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Tripod VT-890H6 Multi Function بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-311",
    "name": "Tripod Horizantal T1008R + Go Head",
    "nameEn": "Tripod Horizantal T1008R + Go Head",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 80,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 23,
    "stock": 10,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Tripod Horizantal T1008R + Go Head بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-312",
    "name": "Tripod VT-866",
    "nameEn": "Tripod VT-866",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 40,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 28,
    "stock": 10,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Tripod VT-866 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-313",
    "name": "Tripod  VT-1500",
    "nameEn": "Tripod  VT-1500",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 50,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 43,
    "stock": 14,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Tripod  VT-1500 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-314",
    "name": "Tripod VT-880",
    "nameEn": "Tripod VT-880",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 30,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 26,
    "stock": 18,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Tripod VT-880 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-315",
    "name": "Tripod VT-1600",
    "nameEn": "Tripod VT-1600",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 55,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 10,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي Tripod VT-1600 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-316",
    "name": "video tripod VT-2100L",
    "nameEn": "video tripod VT-2100L",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 115,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 26,
    "stock": 7,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي video tripod VT-2100L بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-317",
    "name": "video tripod  VT-2500",
    "nameEn": "video tripod  VT-2500",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 105,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 57,
    "stock": 20,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي video tripod  VT-2500 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-318",
    "name": "video tripod  VT-3500",
    "nameEn": "video tripod  VT-3500",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 190,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 56,
    "stock": 6,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي video tripod  VT-3500 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "ACC-319",
    "name": "SmallRig Heavy-Duty Carbon Fiber Tripod Kit AD-120 4463",
    "nameEn": "SmallRig Heavy-Duty Carbon Fiber Tripod Kit AD-120 4463",
    "category": "stands",
    "brand": "SmallRig",
    "price": 550,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 66,
    "stock": 11,
    "badge": "SmallRig",
    "image": "images/tripod_stand.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Heavy-Duty Carbon Fiber Tripod Kit AD-120 4463 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-320",
    "name": "SmallRig CT-10 Aluminum Camera Tripod 3935",
    "nameEn": "SmallRig CT-10 Aluminum Camera Tripod 3935",
    "category": "stands",
    "brand": "SmallRig",
    "price": 70,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 32,
    "stock": 24,
    "badge": "SmallRig",
    "image": "images/tripod_stand.jpg",
    "description": "منتج SmallRig الأصلي SmallRig CT-10 Aluminum Camera Tripod 3935 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-321",
    "name": "SmallRig Carbon Fiber Tripod with Center Column AP-20 & Ball Head 4059",
    "nameEn": "SmallRig Carbon Fiber Tripod with Center Column AP-20 & Ball Head 4059",
    "category": "stands",
    "brand": "SmallRig",
    "price": 130,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 39,
    "stock": 21,
    "badge": "SmallRig",
    "image": "images/tripod_stand.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Carbon Fiber Tripod with Center Column AP-20 & Ball Head 4059 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-322",
    "name": "SmallRig Portable Aluminum Video Tripod with Center Column 5474",
    "nameEn": "SmallRig Portable Aluminum Video Tripod with Center Column 5474",
    "category": "stands",
    "brand": "SmallRig",
    "price": 50,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 48,
    "stock": 23,
    "badge": "SmallRig",
    "image": "images/tripod_stand.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Portable Aluminum Video Tripod with Center Column 5474 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-323",
    "name": "SmallRig Compact Aluminum Tripod with Phone Clamp 5473",
    "nameEn": "SmallRig Compact Aluminum Tripod with Phone Clamp 5473",
    "category": "stands",
    "brand": "SmallRig",
    "price": 40,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 58,
    "stock": 8,
    "badge": "SmallRig",
    "image": "images/tripod_stand.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Compact Aluminum Tripod with Phone Clamp 5473 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-324",
    "name": "SmallRig AD-01 Heavy-Duty Tripod with Fluid Head 3751B",
    "nameEn": "SmallRig AD-01 Heavy-Duty Tripod with Fluid Head 3751B",
    "category": "stands",
    "brand": "SmallRig",
    "price": 200,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 52,
    "stock": 14,
    "badge": "SmallRig",
    "image": "images/tripod_stand.jpg",
    "description": "منتج SmallRig الأصلي SmallRig AD-01 Heavy-Duty Tripod with Fluid Head 3751B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-325",
    "name": "SmallRig AD-50Lite Lightweight Aluminum Alloy Video Tripod 4684",
    "nameEn": "SmallRig AD-50Lite Lightweight Aluminum Alloy Video Tripod 4684",
    "category": "stands",
    "brand": "SmallRig",
    "price": 140,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 37,
    "stock": 5,
    "badge": "SmallRig",
    "image": "images/tripod_stand.jpg",
    "description": "منتج SmallRig الأصلي SmallRig AD-50Lite Lightweight Aluminum Alloy Video Tripod 4684 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-326",
    "name": "SmallRig AD-50 Lightweight Carbon Fiber Video Tripod 4685",
    "nameEn": "SmallRig AD-50 Lightweight Carbon Fiber Video Tripod 4685",
    "category": "stands",
    "brand": "SmallRig",
    "price": 210,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 55,
    "stock": 6,
    "badge": "SmallRig",
    "image": "images/tripod_stand.jpg",
    "description": "منتج SmallRig الأصلي SmallRig AD-50 Lightweight Carbon Fiber Video Tripod 4685 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-327",
    "name": "SmallRig FreeBlazer Heavy-Duty Carbon Fiber Tripod 3989",
    "nameEn": "SmallRig FreeBlazer Heavy-Duty Carbon Fiber Tripod 3989",
    "category": "stands",
    "brand": "SmallRig",
    "price": 450,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 64,
    "stock": 6,
    "badge": "SmallRig",
    "image": "images/tripod_stand.jpg",
    "description": "منتج SmallRig الأصلي SmallRig FreeBlazer Heavy-Duty Carbon Fiber Tripod 3989 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-328",
    "name": "SmallRig Quick-Lock Photography Heavy Duty Tripod Dolly 5020",
    "nameEn": "SmallRig Quick-Lock Photography Heavy Duty Tripod Dolly 5020",
    "category": "stands",
    "brand": "SmallRig",
    "price": 70,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 40,
    "stock": 23,
    "badge": "SmallRig",
    "image": "images/tripod_stand.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Quick-Lock Photography Heavy Duty Tripod Dolly 5020 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-329",
    "name": "SmallRig Cage Kit for Sony ZV-E10 II 4867",
    "nameEn": "SmallRig Cage Kit for Sony ZV-E10 II 4867",
    "category": "cages",
    "brand": "SmallRig",
    "price": 55,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 59,
    "stock": 6,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Cage Kit for Sony ZV-E10 II 4867 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-330",
    "name": "\"SmallRig HawkLock Quick Release Advanced Cage Kit for Sony a7R V",
    "nameEn": "\"SmallRig HawkLock Quick Release Advanced Cage Kit for Sony a7R V",
    "category": "cages",
    "brand": "SmallRig",
    "price": 230,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 70,
    "stock": 18,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig HawkLock Quick Release Advanced Cage Kit for Sony a7R V بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-331",
    "name": "SmallRig Advanced Cage Kit with Battery Plate for Sony FX2 5590",
    "nameEn": "SmallRig Advanced Cage Kit with Battery Plate for Sony FX2 5590",
    "category": "chargers_batteries",
    "brand": "SmallRig",
    "price": 200,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 79,
    "stock": 9,
    "badge": "SmallRig",
    "image": "images/vmount_battery.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Advanced Cage Kit with Battery Plate for Sony FX2 5590 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-332",
    "name": "SmallRig Sunhood for Sony a7S III/a7C/ZV-1/FX3 Camera 3206",
    "nameEn": "SmallRig Sunhood for Sony a7S III/a7C/ZV-1/FX3 Camera 3206",
    "category": "cages",
    "brand": "SmallRig",
    "price": 25,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 37,
    "stock": 10,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Sunhood for Sony a7S III/a7C/ZV-1/FX3 Camera 3206 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-333",
    "name": "SmallRig Arca-Type Quick Release Phone Support for DJI RS 4 Mini/RS 3 Mini 5338",
    "nameEn": "SmallRig Arca-Type Quick Release Phone Support for DJI RS 4 Mini/RS 3 Mini 5338",
    "category": "cages",
    "brand": "SmallRig",
    "price": 25,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 48,
    "stock": 11,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Arca-Type Quick Release Phone Support for DJI RS 4 Mini/RS 3 Mini 5338 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-334",
    "name": "SmallRig Monitor Mounting Support with NATO Clamp for DJI RS 2 / RSC 2 / RS 3 / RS 3 Pro /RS 3 Mini / RS 4 / RS 4 Pro / RS 4 Mini 3026B",
    "nameEn": "SmallRig Monitor Mounting Support with NATO Clamp for DJI RS 2 / RSC 2 / RS 3 / RS 3 Pro /RS 3 Mini / RS 4 / RS 4 Pro / RS 4 Mini 3026B",
    "category": "cages",
    "brand": "SmallRig",
    "price": 70,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 42,
    "stock": 9,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Monitor Mounting Support with NATO Clamp for DJI RS 2 / RSC 2 / RS 3 / RS 3 Pro /RS 3 Mini / RS 4 / RS 4 Pro / RS 4 Mini 3026B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-335",
    "name": "\"SmallRig HawkLock H21 Quick Release Rosette Magic Arm (11\"\") 4489\"",
    "nameEn": "\"SmallRig HawkLock H21 Quick Release Rosette Magic Arm (11\"\") 4489\"",
    "category": "cages",
    "brand": "SmallRig",
    "price": 85,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 53,
    "stock": 23,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig HawkLock H21 Quick Release Rosette Magic Arm (11\"\") 4489\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-336",
    "name": "\"SmallRig HawkLock H21 Quick Release Rosette Magic  Arm (7\"\") 4490\"",
    "nameEn": "\"SmallRig HawkLock H21 Quick Release Rosette Magic  Arm (7\"\") 4490\"",
    "category": "cages",
    "brand": "SmallRig",
    "price": 55,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 33,
    "stock": 24,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig HawkLock H21 Quick Release Rosette Magic  Arm (7\"\") 4490\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-337",
    "name": "SmallRig Cycling Camera Mount 5459",
    "nameEn": "SmallRig Cycling Camera Mount 5459",
    "category": "cages",
    "brand": "SmallRig",
    "price": 80,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 72,
    "stock": 23,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Cycling Camera Mount 5459 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-338",
    "name": "SmallRig Cage for Sony FX2 5587",
    "nameEn": "SmallRig Cage for Sony FX2 5587",
    "category": "cages",
    "brand": "SmallRig",
    "price": 90,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 44,
    "stock": 14,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Cage for Sony FX2 5587 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-339",
    "name": "SmallRig V-Mount Battery Mount Plate 4505B",
    "nameEn": "SmallRig V-Mount Battery Mount Plate 4505B",
    "category": "chargers_batteries",
    "brand": "SmallRig",
    "price": 115,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 31,
    "stock": 9,
    "badge": "SmallRig",
    "image": "images/vmount_battery.jpg",
    "description": "منتج SmallRig الأصلي SmallRig V-Mount Battery Mount Plate 4505B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-340",
    "name": "SmallRig V Mount Battery Plate with Adjustable Arm 2991",
    "nameEn": "SmallRig V Mount Battery Plate with Adjustable Arm 2991",
    "category": "chargers_batteries",
    "brand": "SmallRig",
    "price": 65,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 30,
    "stock": 22,
    "badge": "SmallRig",
    "image": "images/vmount_battery.jpg",
    "description": "منتج SmallRig الأصلي SmallRig V Mount Battery Plate with Adjustable Arm 2991 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-341",
    "name": "SmallRig Camera Suction Cup Car Mount Kit for Panoramic Shooting 4380",
    "nameEn": "SmallRig Camera Suction Cup Car Mount Kit for Panoramic Shooting 4380",
    "category": "audio",
    "brand": "SmallRig",
    "price": 90,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 38,
    "stock": 9,
    "badge": "SmallRig",
    "image": "images/camera_dials.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Camera Suction Cup Car Mount Kit for Panoramic Shooting 4380 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-342",
    "name": "SmallRig VB50 mini V Mount Battery 50Wh 3579B",
    "nameEn": "SmallRig VB50 mini V Mount Battery 50Wh 3579B",
    "category": "chargers_batteries",
    "brand": "SmallRig",
    "price": 120,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 76,
    "stock": 14,
    "badge": "SmallRig",
    "image": "images/vmount_battery.jpg",
    "description": "منتج SmallRig الأصلي SmallRig VB50 mini V Mount Battery 50Wh 3579B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-343",
    "name": "SmallRig VB99 Mini V-Mount Battery 99Wh 3580B",
    "nameEn": "SmallRig VB99 Mini V-Mount Battery 99Wh 3580B",
    "category": "chargers_batteries",
    "brand": "SmallRig",
    "price": 145,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 31,
    "stock": 7,
    "badge": "SmallRig",
    "image": "images/vmount_battery.jpg",
    "description": "منتج SmallRig الأصلي SmallRig VB99 Mini V-Mount Battery 99Wh 3580B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-344",
    "name": "SmallRig VB99 Pro V-Mount Battery 99Wh 4292",
    "nameEn": "SmallRig VB99 Pro V-Mount Battery 99Wh 4292",
    "category": "chargers_batteries",
    "brand": "SmallRig",
    "price": 200,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 31,
    "stock": 5,
    "badge": "SmallRig",
    "image": "images/vmount_battery.jpg",
    "description": "منتج SmallRig الأصلي SmallRig VB99 Pro V-Mount Battery 99Wh 4292 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-345",
    "name": "SmallRig VB155 Mini V-Mount Battery 155Wh 3581B",
    "nameEn": "SmallRig VB155 Mini V-Mount Battery 155Wh 3581B",
    "category": "chargers_batteries",
    "brand": "SmallRig",
    "price": 240,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 65,
    "stock": 13,
    "badge": "SmallRig",
    "image": "images/vmount_battery.jpg",
    "description": "منتج SmallRig الأصلي SmallRig VB155 Mini V-Mount Battery 155Wh 3581B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-346",
    "name": "SmallRig x Caleb Pike VB212 Mini V-Mount Battery 212Wh 4293",
    "nameEn": "SmallRig x Caleb Pike VB212 Mini V-Mount Battery 212Wh 4293",
    "category": "chargers_batteries",
    "brand": "SmallRig",
    "price": 295,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 39,
    "stock": 17,
    "badge": "SmallRig",
    "image": "images/vmount_battery.jpg",
    "description": "منتج SmallRig الأصلي SmallRig x Caleb Pike VB212 Mini V-Mount Battery 212Wh 4293 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-347",
    "name": "SmallRig Camera Cage with Right-Side Handgrip for Sony ZV-E10  4293",
    "nameEn": "SmallRig Camera Cage with Right-Side Handgrip for Sony ZV-E10  4293",
    "category": "cages",
    "brand": "SmallRig",
    "price": 45,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 64,
    "stock": 8,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Camera Cage with Right-Side Handgrip for Sony ZV-E10  4293 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-348",
    "name": "SmallRig Full Camera Cage for Sony ZV-E1 4256",
    "nameEn": "SmallRig Full Camera Cage for Sony ZV-E1 4256",
    "category": "cages",
    "brand": "SmallRig",
    "price": 45,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 76,
    "stock": 17,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Full Camera Cage for Sony ZV-E1 4256 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-349",
    "name": "\"SmallRig \"\"Black Mamba\"\" Camera Cage for Canon EOS R5 Mark II 4975\"",
    "nameEn": "\"SmallRig \"\"Black Mamba\"\" Camera Cage for Canon EOS R5 Mark II 4975\"",
    "category": "cages",
    "brand": "SmallRig",
    "price": 70,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 61,
    "stock": 9,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig \"\"Black Mamba\"\" Camera Cage for Canon EOS R5 Mark II 4975\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-350",
    "name": "SmallRig Light Cage for Sony a7 III/a7R III/a9 2918",
    "nameEn": "SmallRig Light Cage for Sony a7 III/a7R III/a9 2918",
    "category": "lighting",
    "brand": "SmallRig",
    "price": 65,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 32,
    "stock": 8,
    "badge": "SmallRig",
    "image": "images/flash_light.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Light Cage for Sony a7 III/a7R III/a9 2918 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-351",
    "name": "SmallRig Cage for Canon EOS R Camera CCC2803",
    "nameEn": "SmallRig Cage for Canon EOS R Camera CCC2803",
    "category": "cages",
    "brand": "SmallRig",
    "price": 50,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 63,
    "stock": 17,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Cage for Canon EOS R Camera CCC2803 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-352",
    "name": "SmallRig Camera Cage for Canon EOS R6 Mark II 4159",
    "nameEn": "SmallRig Camera Cage for Canon EOS R6 Mark II 4159",
    "category": "cages",
    "brand": "SmallRig",
    "price": 60,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 38,
    "stock": 11,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Camera Cage for Canon EOS R6 Mark II 4159 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-353",
    "name": "SmallRig Camera Cage with Silicone Handgrip for Sony a6400/a6300/a6100  3164B",
    "nameEn": "SmallRig Camera Cage with Silicone Handgrip for Sony a6400/a6300/a6100  3164B",
    "category": "cages",
    "brand": "SmallRig",
    "price": 50,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 55,
    "stock": 5,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Camera Cage with Silicone Handgrip for Sony a6400/a6300/a6100  3164B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-354",
    "name": "\"SmallRig Advanced Cage Kit for Sony a7R V",
    "nameEn": "\"SmallRig Advanced Cage Kit for Sony a7R V",
    "category": "cages",
    "brand": "SmallRig",
    "price": 145,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 70,
    "stock": 8,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig Advanced Cage Kit for Sony a7R V بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-355",
    "name": "SmallRig Camera Cage for Canon 5D Mark III or 5D Mark IV  CCC2271",
    "nameEn": "SmallRig Camera Cage for Canon 5D Mark III or 5D Mark IV  CCC2271",
    "category": "cages",
    "brand": "SmallRig",
    "price": 60,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 43,
    "stock": 7,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Camera Cage for Canon 5D Mark III or 5D Mark IV  CCC2271 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-356",
    "name": "SmallRig Camera Cage for Sony FX30 and FX3  4183B",
    "nameEn": "SmallRig Camera Cage for Sony FX30 and FX3  4183B",
    "category": "cages",
    "brand": "SmallRig",
    "price": 80,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 31,
    "stock": 6,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Camera Cage for Sony FX30 and FX3  4183B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-357",
    "name": "SmallRig Professional Accessory Kit for Blackmagic Pocket Cinema Camera 6K Pro/6K G2 3299",
    "nameEn": "SmallRig Professional Accessory Kit for Blackmagic Pocket Cinema Camera 6K Pro/6K G2 3299",
    "category": "cages",
    "brand": "SmallRig",
    "price": 115,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 58,
    "stock": 23,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Professional Accessory Kit for Blackmagic Pocket Cinema Camera 6K Pro/6K G2 3299 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-358",
    "name": "SmallRig Camera Cage for Sony a7 IV / a7R V / a7S III 3667B",
    "nameEn": "SmallRig Camera Cage for Sony a7 IV / a7R V / a7S III 3667B",
    "category": "cages",
    "brand": "SmallRig",
    "price": 65,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 79,
    "stock": 19,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Camera Cage for Sony a7 IV / a7R V / a7S III 3667B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-359",
    "name": "\"SmallRig Camera Cage for Canon EOS R5 C",
    "nameEn": "\"SmallRig Camera Cage for Canon EOS R5 C",
    "category": "cages",
    "brand": "SmallRig",
    "price": 60,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 55,
    "stock": 15,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig Camera Cage for Canon EOS R5 C بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-360",
    "name": "SmallRig Full Camera Cage Kit for Sony a6700  4336",
    "nameEn": "SmallRig Full Camera Cage Kit for Sony a6700  4336",
    "category": "cages",
    "brand": "SmallRig",
    "price": 65,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 50,
    "stock": 18,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Full Camera Cage Kit for Sony a6700  4336 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-361",
    "name": "SmallRig HawkLock Quick Release Advanced Cage Kit for Sony FX3 and FX30  4771",
    "nameEn": "SmallRig HawkLock Quick Release Advanced Cage Kit for Sony FX3 and FX30  4771",
    "category": "cages",
    "brand": "SmallRig",
    "price": 135,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 35,
    "stock": 21,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig HawkLock Quick Release Advanced Cage Kit for Sony FX3 and FX30  4771 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-362",
    "name": "SmallRig Top Handle with Shoe Mount (Lite) 3764",
    "nameEn": "SmallRig Top Handle with Shoe Mount (Lite) 3764",
    "category": "cages",
    "brand": "SmallRig",
    "price": 30,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 53,
    "stock": 12,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Top Handle with Shoe Mount (Lite) 3764 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-363",
    "name": "SmallRig Top Handle with ARRI-Style Anti-Twist Mount (Lite) 3765",
    "nameEn": "SmallRig Top Handle with ARRI-Style Anti-Twist Mount (Lite) 3765",
    "category": "cages",
    "brand": "SmallRig",
    "price": 35,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 48,
    "stock": 16,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Top Handle with ARRI-Style Anti-Twist Mount (Lite) 3765 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-364",
    "name": "SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Canon R-Series Cameras 4300",
    "nameEn": "SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Canon R-Series Cameras 4300",
    "category": "cages",
    "brand": "SmallRig",
    "price": 55,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 35,
    "stock": 23,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Canon R-Series Cameras 4300 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-365",
    "name": "\"SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Sony A-Series",
    "nameEn": "\"SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Sony A-Series",
    "category": "cages",
    "brand": "SmallRig",
    "price": 55,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 38,
    "stock": 16,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Sony A-Series بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-366",
    "name": "\"SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Sony a7R IV",
    "nameEn": "\"SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Sony a7R IV",
    "category": "cages",
    "brand": "SmallRig",
    "price": 55,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 37,
    "stock": 11,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Sony a7R IV بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-367",
    "name": "SmallRig Dual Handgrip for DJI RS 2/RSC 2/RS 3/RS 3 Pro/RS 4/RS 4 Pro Gimbal 3027",
    "nameEn": "SmallRig Dual Handgrip for DJI RS 2/RSC 2/RS 3/RS 3 Pro/RS 4/RS 4 Pro Gimbal 3027",
    "category": "cages",
    "brand": "SmallRig",
    "price": 80,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 64,
    "stock": 21,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Dual Handgrip for DJI RS 2/RSC 2/RS 3/RS 3 Pro/RS 4/RS 4 Pro Gimbal 3027 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-368",
    "name": "SmallRig Sling Handle for Select DJI RS-Series Gimbals 3028D",
    "nameEn": "SmallRig Sling Handle for Select DJI RS-Series Gimbals 3028D",
    "category": "cages",
    "brand": "SmallRig",
    "price": 65,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 38,
    "stock": 15,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Sling Handle for Select DJI RS-Series Gimbals 3028D بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-369",
    "name": "\"SmallRig Articulating Arm (9.5\"\") 2066B\"",
    "nameEn": "\"SmallRig Articulating Arm (9.5\"\") 2066B\"",
    "category": "cages",
    "brand": "SmallRig",
    "price": 30,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 49,
    "stock": 8,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig Articulating Arm (9.5\"\") 2066B\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-370",
    "name": "\"SmallRig 5.5\"\" Articulating Arm 2065B\"",
    "nameEn": "\"SmallRig 5.5\"\" Articulating Arm 2065B\"",
    "category": "cages",
    "brand": "SmallRig",
    "price": 21,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 59,
    "stock": 14,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig 5.5\"\" Articulating Arm 2065B\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-371",
    "name": "\"SmallRig 2164 Multifunctional Crab Clamp with 3.5\"\" Ball Head Arm 2164\"",
    "nameEn": "\"SmallRig 2164 Multifunctional Crab Clamp with 3.5\"\" Ball Head Arm 2164\"",
    "category": "cages",
    "brand": "SmallRig",
    "price": 20,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 36,
    "stock": 7,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig 2164 Multifunctional Crab Clamp with 3.5\"\" Ball Head Arm 2164\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-372",
    "name": "\"SmallRig Magic Arm with Dual Ball Heads (1/4\"\"-20 Screws) 3873\"",
    "nameEn": "\"SmallRig Magic Arm with Dual Ball Heads (1/4\"\"-20 Screws) 3873\"",
    "category": "cages",
    "brand": "SmallRig",
    "price": 40,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 74,
    "stock": 24,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig Magic Arm with Dual Ball Heads (1/4\"\"-20 Screws) 3873\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-373",
    "name": "SmallRig Crab-Shaped Clamp & Magic Arm Kit 4454",
    "nameEn": "SmallRig Crab-Shaped Clamp & Magic Arm Kit 4454",
    "category": "cages",
    "brand": "SmallRig",
    "price": 35,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 43,
    "stock": 23,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Crab-Shaped Clamp & Magic Arm Kit 4454 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-374",
    "name": "SmallRig Articulating Magic Arm 9.8 Inches with super Clamp 2732B",
    "nameEn": "SmallRig Articulating Magic Arm 9.8 Inches with super Clamp 2732B",
    "category": "cages",
    "brand": "SmallRig",
    "price": 35,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 36,
    "stock": 17,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Articulating Magic Arm 9.8 Inches with super Clamp 2732B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-375",
    "name": "SmallRig Phone Holder for DJI RS Series Gimbals 4301",
    "nameEn": "SmallRig Phone Holder for DJI RS Series Gimbals 4301",
    "category": "cages",
    "brand": "SmallRig",
    "price": 17,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 55,
    "stock": 9,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Phone Holder for DJI RS Series Gimbals 4301 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-376",
    "name": "SmallRig Swivel and Tilt Adjustable Monitor Mount with Cold Shoe Mount 2905B",
    "nameEn": "SmallRig Swivel and Tilt Adjustable Monitor Mount with Cold Shoe Mount 2905B",
    "category": "cages",
    "brand": "SmallRig",
    "price": 20,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 52,
    "stock": 5,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Swivel and Tilt Adjustable Monitor Mount with Cold Shoe Mount 2905B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-377",
    "name": "\"SmallRig Swivel and Tilt Adjustable Monitor Support with 1/4\"\"-20 Screws 4886\"",
    "nameEn": "\"SmallRig Swivel and Tilt Adjustable Monitor Support with 1/4\"\"-20 Screws 4886\"",
    "category": "cages",
    "brand": "SmallRig",
    "price": 25,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 36,
    "stock": 22,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي \"SmallRig Swivel and Tilt Adjustable Monitor Support with 1/4\"\"-20 Screws 4886\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-378",
    "name": "SmallRig Foldable Multi-Tool (Silver) AAK2213D",
    "nameEn": "SmallRig Foldable Multi-Tool (Silver) AAK2213D",
    "category": "cages",
    "brand": "SmallRig",
    "price": 15,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 68,
    "stock": 24,
    "badge": "SmallRig",
    "image": "images/camera_cage.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Foldable Multi-Tool (Silver) AAK2213D بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-379",
    "name": "SmallRig RF 10C Portable Focusable LED Video Light 4634",
    "nameEn": "SmallRig RF 10C Portable Focusable LED Video Light 4634",
    "category": "lighting",
    "brand": "SmallRig",
    "price": 60,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 58,
    "stock": 20,
    "badge": "SmallRig",
    "image": "images/flash_light.jpg",
    "description": "منتج SmallRig الأصلي SmallRig RF 10C Portable Focusable LED Video Light 4634 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-380",
    "name": "SmallRig Star-Trail Lightweight Multifunctional Modular Matte Box VND Filter Bundle (95mm Back) 3645",
    "nameEn": "SmallRig Star-Trail Lightweight Multifunctional Modular Matte Box VND Filter Bundle (95mm Back) 3645",
    "category": "lighting",
    "brand": "SmallRig",
    "price": 240,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 35,
    "stock": 21,
    "badge": "SmallRig",
    "image": "images/flash_light.jpg",
    "description": "منتج SmallRig الأصلي SmallRig Star-Trail Lightweight Multifunctional Modular Matte Box VND Filter Bundle (95mm Back) 3645 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "SmallRig",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-381",
    "name": "ulanzi th04 arm",
    "nameEn": "ulanzi th04 arm",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 70,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 42,
    "stock": 19,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi th04 arm بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-382",
    "name": "ulanzi ma53 phone holder",
    "nameEn": "ulanzi ma53 phone holder",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 25,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 49,
    "stock": 24,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi ma53 phone holder بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-383",
    "name": "ulanzi ma35 phone holder",
    "nameEn": "ulanzi ma35 phone holder",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 20,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 33,
    "stock": 24,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi ma35 phone holder بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-384",
    "name": "ulanzi lino cage",
    "nameEn": "ulanzi lino cage",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 55,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 48,
    "stock": 5,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi lino cage بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-385",
    "name": "Ulanzi Universal Smartphone Metal Cage 3127",
    "nameEn": "Ulanzi Universal Smartphone Metal Cage 3127",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 70,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 65,
    "stock": 8,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi Universal Smartphone Metal Cage 3127 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-386",
    "name": "Ulanzi MA07 Universal Smartphone  Cage",
    "nameEn": "Ulanzi MA07 Universal Smartphone  Cage",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 15,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 39,
    "stock": 13,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi MA07 Universal Smartphone  Cage بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-387",
    "name": "ulanzi ls24 desk stand",
    "nameEn": "ulanzi ls24 desk stand",
    "category": "stands",
    "brand": "Ulanzi",
    "price": 40,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 39,
    "stock": 13,
    "badge": "Ulanzi",
    "image": "images/tripod_stand.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi ls24 desk stand بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-388",
    "name": "ulanzi ls08 desk stand2666",
    "nameEn": "ulanzi ls08 desk stand2666",
    "category": "stands",
    "brand": "Ulanzi",
    "price": 40,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 47,
    "stock": 17,
    "badge": "Ulanzi",
    "image": "images/tripod_stand.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi ls08 desk stand2666 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-389",
    "name": "ulanzi universal desktop 2335",
    "nameEn": "ulanzi universal desktop 2335",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 70,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 72,
    "stock": 19,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi universal desktop 2335 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-390",
    "name": "ulanzi suction cup 4.5 inch",
    "nameEn": "ulanzi suction cup 4.5 inch",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 50,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 56,
    "stock": 16,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi suction cup 4.5 inch بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-391",
    "name": "ULANZI LM07 LED Photography Flashlight",
    "nameEn": "ULANZI LM07 LED Photography Flashlight",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 20,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 46,
    "stock": 8,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ULANZI LM07 LED Photography Flashlight بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-392",
    "name": "Ulanzi VL49 Mini RGB video light",
    "nameEn": "Ulanzi VL49 Mini RGB video light",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 15,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 79,
    "stock": 8,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi VL49 Mini RGB video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-393",
    "name": "ulanzi Vl120 LED Pocket rgb video light",
    "nameEn": "ulanzi Vl120 LED Pocket rgb video light",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 40,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 35,
    "stock": 8,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi Vl120 LED Pocket rgb video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-394",
    "name": "ulanzi Vl120 LED Pocket bi color video light",
    "nameEn": "ulanzi Vl120 LED Pocket bi color video light",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 30,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 63,
    "stock": 19,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi Vl120 LED Pocket bi color video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-395",
    "name": "ulanzi LM-P40 RGB Video light",
    "nameEn": "ulanzi LM-P40 RGB Video light",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 45,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 62,
    "stock": 21,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi LM-P40 RGB Video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-396",
    "name": "Ulanzi LT002  7inch Pocket Fill Light",
    "nameEn": "Ulanzi LT002  7inch Pocket Fill Light",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 30,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 58,
    "stock": 24,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi LT002  7inch Pocket Fill Light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-397",
    "name": "ulanzi LT003 RGB Video light",
    "nameEn": "ulanzi LT003 RGB Video light",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 45,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 79,
    "stock": 6,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi LT003 RGB Video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-398",
    "name": "ulanzi Pl25 Bi color video light",
    "nameEn": "ulanzi Pl25 Bi color video light",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 25,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 69,
    "stock": 19,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi Pl25 Bi color video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-399",
    "name": "ulanzi air tube light 20w90*12cm",
    "nameEn": "ulanzi air tube light 20w90*12cm",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 60,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 39,
    "stock": 20,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi air tube light 20w90*12cm بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-400",
    "name": "ulanzi air tube light 12w60*12cm",
    "nameEn": "ulanzi air tube light 12w60*12cm",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 45,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 67,
    "stock": 17,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi air tube light 12w60*12cm بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-401",
    "name": "ulanzi air tube al60",
    "nameEn": "ulanzi air tube al60",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 110,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 64,
    "stock": 6,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi air tube al60 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-402",
    "name": "ULANZI VL-120 Bi color V-Mount COB LED",
    "nameEn": "ULANZI VL-120 Bi color V-Mount COB LED",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 135,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 69,
    "stock": 6,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ULANZI VL-120 Bi color V-Mount COB LED بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-403",
    "name": "ULANZI VL-120 RGB V-Mount COB LED",
    "nameEn": "ULANZI VL-120 RGB V-Mount COB LED",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 160,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 38,
    "stock": 6,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ULANZI VL-120 RGB V-Mount COB LED بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-404",
    "name": "ULANZI VL-1200 Bi Color V-Mount COB LED",
    "nameEn": "ULANZI VL-1200 Bi Color V-Mount COB LED",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 170,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 67,
    "stock": 7,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ULANZI VL-1200 Bi Color V-Mount COB LED بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-405",
    "name": "ulanzi 1.5m monopod tb 12",
    "nameEn": "ulanzi 1.5m monopod tb 12",
    "category": "stands",
    "brand": "Ulanzi",
    "price": 20,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 48,
    "stock": 13,
    "badge": "Ulanzi",
    "image": "images/tripod_stand.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi 1.5m monopod tb 12 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-406",
    "name": "Ulanzi OM-01 Multi function bag",
    "nameEn": "Ulanzi OM-01 Multi function bag",
    "category": "bags",
    "brand": "Ulanzi",
    "price": 50,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 47,
    "stock": 10,
    "badge": "Ulanzi",
    "image": "images/camera_bag.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi OM-01 Multi function bag بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-407",
    "name": "ulanzi backpack bp04",
    "nameEn": "ulanzi backpack bp04",
    "category": "bags",
    "brand": "Ulanzi",
    "price": 130,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 30,
    "stock": 13,
    "badge": "Ulanzi",
    "image": "images/camera_bag.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi backpack bp04 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-408",
    "name": "ulanzi backpack bp09 22L",
    "nameEn": "ulanzi backpack bp09 22L",
    "category": "bags",
    "brand": "Ulanzi",
    "price": 100,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 40,
    "stock": 11,
    "badge": "Ulanzi",
    "image": "images/camera_bag.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi backpack bp09 22L بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-409",
    "name": "ulanzi backpack AB01 TAI 38L",
    "nameEn": "ulanzi backpack AB01 TAI 38L",
    "category": "bags",
    "brand": "Ulanzi",
    "price": 250,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 37,
    "stock": 12,
    "badge": "Ulanzi",
    "image": "images/camera_bag.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi backpack AB01 TAI 38L بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-410",
    "name": "Ulanzi 2803 Multi-Functional Storage Bag",
    "nameEn": "Ulanzi 2803 Multi-Functional Storage Bag",
    "category": "bags",
    "brand": "Ulanzi",
    "price": 10,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 35,
    "stock": 19,
    "badge": "Ulanzi",
    "image": "images/camera_bag.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi 2803 Multi-Functional Storage Bag بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-411",
    "name": "Ulanzi BP15 SeeClear Tech Pouch Bag",
    "nameEn": "Ulanzi BP15 SeeClear Tech Pouch Bag",
    "category": "bags",
    "brand": "Ulanzi",
    "price": 12,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 78,
    "stock": 18,
    "badge": "Ulanzi",
    "image": "images/camera_bag.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi BP15 SeeClear Tech Pouch Bag بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-412",
    "name": "ulanzi dcm-05 podmic usb",
    "nameEn": "ulanzi dcm-05 podmic usb",
    "category": "audio",
    "brand": "Ulanzi",
    "price": 70,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 42,
    "stock": 12,
    "badge": "Ulanzi",
    "image": "images/camera_dials.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi dcm-05 podmic usb بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-413",
    "name": "Ulanzi Mic A21",
    "nameEn": "Ulanzi Mic A21",
    "category": "audio",
    "brand": "Ulanzi",
    "price": 40,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 39,
    "stock": 10,
    "badge": "Ulanzi",
    "image": "images/camera_dials.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi Mic A21 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-414",
    "name": "Ulanzi mic A200",
    "nameEn": "Ulanzi mic A200",
    "category": "audio",
    "brand": "Ulanzi",
    "price": 45,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 54,
    "stock": 6,
    "badge": "Ulanzi",
    "image": "images/camera_dials.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi mic A200 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-415",
    "name": "Ulanzi A100 Wireless Mic",
    "nameEn": "Ulanzi A100 Wireless Mic",
    "category": "audio",
    "brand": "Ulanzi",
    "price": 40,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 64,
    "stock": 18,
    "badge": "Ulanzi",
    "image": "images/camera_dials.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi A100 Wireless Mic بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-416",
    "name": "Ulanzi AM18 U-Mic 2-Person Wireless Microphone",
    "nameEn": "Ulanzi AM18 U-Mic 2-Person Wireless Microphone",
    "category": "audio",
    "brand": "Ulanzi",
    "price": 90,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 40,
    "stock": 22,
    "badge": "Ulanzi",
    "image": "images/camera_dials.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi AM18 U-Mic 2-Person Wireless Microphone بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-417",
    "name": "ulanzi LM01 Flash Light spot",
    "nameEn": "ulanzi LM01 Flash Light spot",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 55,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 46,
    "stock": 15,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi LM01 Flash Light spot بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-418",
    "name": "ulanzi MG14 Neck Mount",
    "nameEn": "ulanzi MG14 Neck Mount",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 25,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 51,
    "stock": 16,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi MG14 Neck Mount بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-419",
    "name": "ulanzi TT23 Selfi stick & tripod",
    "nameEn": "ulanzi TT23 Selfi stick & tripod",
    "category": "stands",
    "brand": "Ulanzi",
    "price": 30,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 59,
    "stock": 24,
    "badge": "Ulanzi",
    "image": "images/tripod_stand.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi TT23 Selfi stick & tripod بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-420",
    "name": "ulanzi TT24 Selfi stick",
    "nameEn": "ulanzi TT24 Selfi stick",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 19,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 61,
    "stock": 6,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ulanzi TT24 Selfi stick بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-421",
    "name": "Ulanzi TT-88 Mini Tripod for Magnetic Smartphones",
    "nameEn": "Ulanzi TT-88 Mini Tripod for Magnetic Smartphones",
    "category": "stands",
    "brand": "Ulanzi",
    "price": 20,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 78,
    "stock": 10,
    "badge": "Ulanzi",
    "image": "images/tripod_stand.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi TT-88 Mini Tripod for Magnetic Smartphones بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-422",
    "name": "ULANZI MA09 Extendable Selfie Stick Tripod Stand",
    "nameEn": "ULANZI MA09 Extendable Selfie Stick Tripod Stand",
    "category": "stands",
    "brand": "Ulanzi",
    "price": 20,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 78,
    "stock": 10,
    "badge": "Ulanzi",
    "image": "images/tripod_stand.jpg",
    "description": "منتج Ulanzi الأصلي ULANZI MA09 Extendable Selfie Stick Tripod Stand بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-423",
    "name": "Ulanzi U-Rig Pro samrtphone Video Rig/cage",
    "nameEn": "Ulanzi U-Rig Pro samrtphone Video Rig/cage",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 15,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 64,
    "stock": 22,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi U-Rig Pro samrtphone Video Rig/cage بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-424",
    "name": "Ulanzi U200 Mobile Ring light",
    "nameEn": "Ulanzi U200 Mobile Ring light",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 55,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 65,
    "stock": 20,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi U200 Mobile Ring light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-425",
    "name": "Ulanzi R075 universal wooden Cage handle",
    "nameEn": "Ulanzi R075 universal wooden Cage handle",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 25,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 54,
    "stock": 7,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi R075 universal wooden Cage handle بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-426",
    "name": "Ulanzi VL110 RGB Tube Light",
    "nameEn": "Ulanzi VL110 RGB Tube Light",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 40,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 30,
    "stock": 9,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi VL110 RGB Tube Light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-427",
    "name": "ULANZI VL119 Handheld RGB LED Video Light Stick",
    "nameEn": "ULANZI VL119 Handheld RGB LED Video Light Stick",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 25,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 62,
    "stock": 17,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ULANZI VL119 Handheld RGB LED Video Light Stick بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-428",
    "name": "ULANZI VL360 RGB Light Handheld LED Video Light",
    "nameEn": "ULANZI VL360 RGB Light Handheld LED Video Light",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 75,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 74,
    "stock": 15,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ULANZI VL360 RGB Light Handheld LED Video Light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-429",
    "name": "Ulanzi 2089 broadcast stand with table clamp and 3 Arms",
    "nameEn": "Ulanzi 2089 broadcast stand with table clamp and 3 Arms",
    "category": "stands",
    "brand": "Ulanzi",
    "price": 85,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 60,
    "stock": 17,
    "badge": "Ulanzi",
    "image": "images/tripod_stand.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi 2089 broadcast stand with table clamp and 3 Arms بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-430",
    "name": "Ulanzi CR1 3-in-1 Card Reader",
    "nameEn": "Ulanzi CR1 3-in-1 Card Reader",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 12,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 70,
    "stock": 14,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi CR1 3-in-1 Card Reader بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-431",
    "name": "ULANZI CO23 Electric Air Duster Kit",
    "nameEn": "ULANZI CO23 Electric Air Duster Kit",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 70,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 77,
    "stock": 18,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ULANZI CO23 Electric Air Duster Kit بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-432",
    "name": "Ulanzi Falcam Move LightGo",
    "nameEn": "Ulanzi Falcam Move LightGo",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 175,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 37,
    "stock": 16,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi Falcam Move LightGo بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-433",
    "name": "ULANZI FM01 FILMOG Ace Portable Fog Machine R001",
    "nameEn": "ULANZI FM01 FILMOG Ace Portable Fog Machine R001",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 75,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 38,
    "stock": 19,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي ULANZI FM01 FILMOG Ace Portable Fog Machine R001 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-434",
    "name": "Ulanzi FM02 FILMOG X Portable Fog Machine",
    "nameEn": "Ulanzi FM02 FILMOG X Portable Fog Machine",
    "category": "lighting",
    "brand": "Ulanzi",
    "price": 65,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 76,
    "stock": 13,
    "badge": "Ulanzi",
    "image": "images/flash_light.jpg",
    "description": "منتج Ulanzi الأصلي Ulanzi FM02 FILMOG X Portable Fog Machine بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "ACC-435",
    "name": "ULANZI MT-52 Double Arm Gorilapod",
    "nameEn": "ULANZI MT-52 Double Arm Gorilapod",
    "category": "cages",
    "brand": "Ulanzi",
    "price": 20,
    "oldPrice": null,
    "rating": 4.9,
    "reviewsCount": 76,
    "stock": 6,
    "badge": "Ulanzi",
    "image": "images/camera_cage.jpg",
    "description": "منتج Ulanzi الأصلي ULANZI MT-52 Double Arm Gorilapod بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
    "specs": {
      "العلامة التجارية": "Ulanzi",
      "الضمان": "كفالة الوكيل المعتمد"
    }
  },
  {
    "id": "STN-436",
    "name": "meking (mfa-4500f)",
    "nameEn": "meking (mfa-4500f)",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 175,
    "oldPrice": 199,
    "rating": 4.8,
    "reviewsCount": 56,
    "stock": 20,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي meking (mfa-4500f) بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-437",
    "name": "meking (mfa-3300f)",
    "nameEn": "meking (mfa-3300f)",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 150,
    "oldPrice": 169,
    "rating": 4.8,
    "reviewsCount": 34,
    "stock": 8,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي meking (mfa-3300f) بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-438",
    "name": "nanlite (ls-fl-t12) floor stand",
    "nameEn": "nanlite (ls-fl-t12) floor stand",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 30,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 58,
    "stock": 10,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي nanlite (ls-fl-t12) floor stand بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-439",
    "name": "qihe (j190s) stainless steel",
    "nameEn": "qihe (j190s) stainless steel",
    "category": "stands",
    "brand": "Qihe",
    "price": 20,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 32,
    "stock": 10,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي qihe (j190s) stainless steel بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-440",
    "name": "jinbel (m-8 light stand)",
    "nameEn": "jinbel (m-8 light stand)",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 315,
    "oldPrice": 350,
    "rating": 4.8,
    "reviewsCount": 27,
    "stock": 19,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي jinbel (m-8 light stand) بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-441",
    "name": "qihe (l6-2400) light stand",
    "nameEn": "qihe (l6-2400) light stand",
    "category": "stands",
    "brand": "Qihe",
    "price": 175,
    "oldPrice": 199,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 19,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي qihe (l6-2400) light stand بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-442",
    "name": "qihe (j2650t light stand)",
    "nameEn": "qihe (j2650t light stand)",
    "category": "stands",
    "brand": "Qihe",
    "price": 175,
    "oldPrice": 199,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 13,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي qihe (j2650t light stand) بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-443",
    "name": "qihe (288s stainless steel stand)",
    "nameEn": "qihe (288s stainless steel stand)",
    "category": "stands",
    "brand": "Qihe",
    "price": 40,
    "oldPrice": 45,
    "rating": 4.8,
    "reviewsCount": 47,
    "stock": 12,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي qihe (288s stainless steel stand) بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-444",
    "name": "qihe stainless steel 3*3m b026s",
    "nameEn": "qihe stainless steel 3*3m b026s",
    "category": "stands",
    "brand": "Qihe",
    "price": 90,
    "oldPrice": 99,
    "rating": 4.8,
    "reviewsCount": 51,
    "stock": 20,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي qihe stainless steel 3*3m b026s بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-445",
    "name": "qihe electric background support 3axel",
    "nameEn": "qihe electric background support 3axel",
    "category": "stands",
    "brand": "Qihe",
    "price": 135,
    "oldPrice": 150,
    "rating": 4.8,
    "reviewsCount": 20,
    "stock": 9,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي qihe electric background support 3axel بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-446",
    "name": "qihe electric background support 4axel",
    "nameEn": "qihe electric background support 4axel",
    "category": "stands",
    "brand": "Qihe",
    "price": 170,
    "oldPrice": 185,
    "rating": 4.8,
    "reviewsCount": 36,
    "stock": 20,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي qihe electric background support 4axel بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-447",
    "name": "qihe electric background support 6axel",
    "nameEn": "qihe electric background support 6axel",
    "category": "stands",
    "brand": "Qihe",
    "price": 200,
    "oldPrice": 225,
    "rating": 4.8,
    "reviewsCount": 36,
    "stock": 7,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي qihe electric background support 6axel بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "STN-448",
    "name": "pantograph ceiling drop rail system",
    "nameEn": "pantograph ceiling drop rail system",
    "category": "stands",
    "brand": "TOPCAM Pro",
    "price": 360,
    "oldPrice": 400,
    "rating": 4.8,
    "reviewsCount": 35,
    "stock": 10,
    "badge": "تحمل عالي",
    "image": "images/tripod_stand.jpg",
    "description": "ستاند وترايبود تصوير احترافي pantograph ceiling drop rail system بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
    "specs": {
      "المادة": "ألومنيوم مقوى أو ألياف كربون",
      "الاستخدام": "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
    }
  },
  {
    "id": "MON-449",
    "name": "Desview T22 Teleprompter",
    "nameEn": "Desview T22 Teleprompter",
    "category": "monitors",
    "brand": "Desview",
    "price": 600,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 10,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "Desview T22 Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-450",
    "name": "Desview T17 Teleprompter",
    "nameEn": "Desview T17 Teleprompter",
    "category": "monitors",
    "brand": "Desview",
    "price": 450,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 29,
    "stock": 8,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "Desview T17 Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-451",
    "name": "Desview TP170 Teleprompter",
    "nameEn": "Desview TP170 Teleprompter",
    "category": "monitors",
    "brand": "Desview",
    "price": 355,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 43,
    "stock": 11,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "Desview TP170 Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-452",
    "name": "Desview TP150 Teleprompter",
    "nameEn": "Desview TP150 Teleprompter",
    "category": "monitors",
    "brand": "Desview",
    "price": 225,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 16,
    "stock": 5,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "Desview TP150 Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-453",
    "name": "Desview T12S Teleprompter",
    "nameEn": "Desview T12S Teleprompter",
    "category": "monitors",
    "brand": "Desview",
    "price": 150,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 38,
    "stock": 7,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "Desview T12S Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-454",
    "name": "Desview T3 Teleprompter",
    "nameEn": "Desview T3 Teleprompter",
    "category": "monitors",
    "brand": "Desview",
    "price": 115,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 9,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "Desview T3 Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-455",
    "name": "Desview T2 Teleprompter",
    "nameEn": "Desview T2 Teleprompter",
    "category": "monitors",
    "brand": "Desview",
    "price": 100,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 21,
    "stock": 4,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "Desview T2 Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-456",
    "name": "Desview t12 Teleprompter",
    "nameEn": "Desview t12 Teleprompter",
    "category": "monitors",
    "brand": "Desview",
    "price": 175,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 48,
    "stock": 8,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "Desview t12 Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-457",
    "name": "Desview t22 double monitor Teleprompter",
    "nameEn": "Desview t22 double monitor Teleprompter",
    "category": "monitors",
    "brand": "Desview",
    "price": 700,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 35,
    "stock": 8,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "Desview t22 double monitor Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-458",
    "name": "Desview P5II",
    "nameEn": "Desview P5II",
    "category": "monitors",
    "brand": "Desview",
    "price": 120,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 19,
    "stock": 6,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "Desview P5II عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-459",
    "name": "Desview R7III",
    "nameEn": "Desview R7III",
    "category": "monitors",
    "brand": "Desview",
    "price": 215,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 24,
    "stock": 11,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "Desview R7III عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-460",
    "name": "Desview R7S III",
    "nameEn": "Desview R7S III",
    "category": "monitors",
    "brand": "Desview",
    "price": 245,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 23,
    "stock": 6,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "Desview R7S III عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Desview",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-461",
    "name": "LENSGO TC7 Teleprompter",
    "nameEn": "LENSGO TC7 Teleprompter",
    "category": "monitors",
    "brand": "Lensgo",
    "price": 54,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 42,
    "stock": 6,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "LENSGO TC7 Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Lensgo",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-462",
    "name": "LENSGO TC7S Teleprompter",
    "nameEn": "LENSGO TC7S Teleprompter",
    "category": "monitors",
    "brand": "Lensgo",
    "price": 40,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 42,
    "stock": 12,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "LENSGO TC7S Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Lensgo",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-463",
    "name": "LENSGO TC7II Teleprompter 7.9'' (Camera Kit)",
    "nameEn": "LENSGO TC7II Teleprompter 7.9'' (Camera Kit)",
    "category": "monitors",
    "brand": "Lensgo",
    "price": 45,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 47,
    "stock": 9,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "LENSGO TC7II Teleprompter 7.9'' (Camera Kit) عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Lensgo",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-464",
    "name": "LENSGO TC7II Teleprompter 7.9'' (Ultimate Kit) for Phone & Canera",
    "nameEn": "LENSGO TC7II Teleprompter 7.9'' (Ultimate Kit) for Phone & Canera",
    "category": "monitors",
    "brand": "Lensgo",
    "price": 60,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 25,
    "stock": 8,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "LENSGO TC7II Teleprompter 7.9'' (Ultimate Kit) for Phone & Canera عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Lensgo",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-465",
    "name": "LENSGO TC12 12.9'' Teleprompter",
    "nameEn": "LENSGO TC12 12.9'' Teleprompter",
    "category": "monitors",
    "brand": "Lensgo",
    "price": 70,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 52,
    "stock": 8,
    "badge": "ملقن نصوص",
    "image": "images/camera_dials.jpg",
    "description": "LENSGO TC12 12.9'' Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Lensgo",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-466",
    "name": "Seetec atem173s 4 sdi (17.3 inch)",
    "nameEn": "Seetec atem173s 4 sdi (17.3 inch)",
    "category": "monitors",
    "brand": "Seetec",
    "price": 1350,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 54,
    "stock": 6,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "Seetec atem173s 4 sdi (17.3 inch) عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Seetec",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-467",
    "name": "SEETEC P215-9HSD-CO (21.5 Inch )",
    "nameEn": "SEETEC P215-9HSD-CO (21.5 Inch )",
    "category": "monitors",
    "brand": "Seetec",
    "price": 850,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 25,
    "stock": 5,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "SEETEC P215-9HSD-CO (21.5 Inch ) عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Seetec",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-468",
    "name": "seetec atem156 4 hdmi (15.6 inch)",
    "nameEn": "seetec atem156 4 hdmi (15.6 inch)",
    "category": "monitors",
    "brand": "Seetec",
    "price": 800,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 37,
    "stock": 4,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "seetec atem156 4 hdmi (15.6 inch) عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Seetec",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-469",
    "name": "feelworld TP16",
    "nameEn": "feelworld TP16",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 220,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 45,
    "stock": 4,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "feelworld TP16 عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-470",
    "name": "feelworld TP13A",
    "nameEn": "feelworld TP13A",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 145,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 49,
    "stock": 12,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "feelworld TP13A عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-471",
    "name": "feelworld TP10",
    "nameEn": "feelworld TP10",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 85,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 52,
    "stock": 8,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "feelworld TP10 عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-472",
    "name": "feelworld TP2",
    "nameEn": "feelworld TP2",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 70,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 27,
    "stock": 3,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "feelworld TP2 عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-473",
    "name": "feelworld TP2A",
    "nameEn": "feelworld TP2A",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 75,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 45,
    "stock": 8,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "feelworld TP2A عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-474",
    "name": "FeelWorld F5 Pro",
    "nameEn": "FeelWorld F5 Pro",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 135,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 41,
    "stock": 4,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "FeelWorld F5 Pro عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-475",
    "name": "FeelWorld F5 Pro X",
    "nameEn": "FeelWorld F5 Pro X",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 145,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 29,
    "stock": 10,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "FeelWorld F5 Pro X عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-476",
    "name": "FEELWORLD LUT11",
    "nameEn": "FEELWORLD LUT11",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 245,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 47,
    "stock": 5,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "FEELWORLD LUT11 عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-477",
    "name": "FEELWORLD LUT11S",
    "nameEn": "FEELWORLD LUT11S",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 300,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 37,
    "stock": 4,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "FEELWORLD LUT11S عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-478",
    "name": "feelworld lut7s pro",
    "nameEn": "feelworld lut7s pro",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 375,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 17,
    "stock": 7,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "feelworld lut7s pro عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-479",
    "name": "feelworld p6xl",
    "nameEn": "feelworld p6xl",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 225,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 15,
    "stock": 11,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "feelworld p6xl عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-480",
    "name": "feelworld f7 plus",
    "nameEn": "feelworld f7 plus",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 215,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 42,
    "stock": 5,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "feelworld f7 plus عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-481",
    "name": "feelworld f6 plus",
    "nameEn": "feelworld f6 plus",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 170,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 39,
    "stock": 12,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "feelworld f6 plus عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-482",
    "name": "FeeLWorld F6 Plus V2",
    "nameEn": "FeeLWorld F6 Plus V2",
    "category": "monitors",
    "brand": "FeelWorld",
    "price": 180,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 23,
    "stock": 7,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "FeeLWorld F6 Plus V2 عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "FeelWorld",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-483",
    "name": "viltrox dc-550 pro",
    "nameEn": "viltrox dc-550 pro",
    "category": "monitors",
    "brand": "Viltrox",
    "price": 200,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 40,
    "stock": 3,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "viltrox dc-550 pro عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Viltrox",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-484",
    "name": "viltrox dc-x3",
    "nameEn": "viltrox dc-x3",
    "category": "monitors",
    "brand": "Viltrox",
    "price": 250,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 31,
    "stock": 8,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "viltrox dc-x3 عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Viltrox",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  },
  {
    "id": "MON-485",
    "name": "Lilliput A7s",
    "nameEn": "Lilliput A7s",
    "category": "monitors",
    "brand": "Lilliput",
    "price": 145,
    "oldPrice": null,
    "rating": 4.8,
    "reviewsCount": 52,
    "stock": 3,
    "badge": "شاشة مونيتر",
    "image": "images/camera_dials.jpg",
    "description": "Lilliput A7s عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
    "specs": {
      "العلامة التجارية": "Lilliput",
      "التطبيق": "شاشات عرض وتلقين احترافية",
      "الكفالة": "كفالة رسمية سنة"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_CATEGORIES, INITIAL_PRODUCTS };
}
