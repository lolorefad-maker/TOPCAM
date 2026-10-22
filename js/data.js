// بيانات المنتجات الأصلية لمتجر TOP CAM لمعدات التصوير والسينما
// تم تحديث الكتالوج الكامل (كاميرات، عدسات، صوتيات، إضاءة، كيج، شواحن، حقائب)

const INITIAL_CATEGORIES = [
  {
    "id": "all",
    "name": "جميع المعدات",
    "icon": "fa-layer-group",
    "count": 399
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
    "image": "images/prod_aud_042.jpg"
  },
  {
    "id": "lighting",
    "name": "إضاءات وسوفت بوكس",
    "icon": "fa-lightbulb",
    "count": 174,
    "image": "images/prod_godox_sl60iibi.jpg"
  },
  {
    "id": "gimbals",
    "name": "ستيبلايزرز وجيمبل",
    "icon": "fa-gamepad",
    "count": 14,
    "image": "images/prod_dji_rs4.jpg"
  },
  {
    "id": "cages",
    "name": "كيج كاميرا وتجهيزات",
    "icon": "fa-border-all",
    "count": 59,
    "image": "images/prod_smallrig_a7iv_cage.jpg"
  },
  {
    "id": "chargers_batteries",
    "name": "شواحن وبطاريات V-Mount",
    "icon": "fa-battery-full",
    "count": 8,
    "image": "images/prod_smallrig_vb99.jpg"
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
        "stock": 4,
        "name": "Sony A7 III - Full-frame Mirrorless Camera Body Only",
        "reviewsCount": 104,
        "oldPrice": 1050,
        "image": "images/cam_sony_a7iii.jpg",
        "nameEn": "Sony A7 III - Full-frame Mirrorless Camera Body Only",
        "badge": "وفر $50",
        "gallery": [
            "images/cam_sony_a7iii.jpg",
            "images/cam_sony_a7iv.jpg",
            "images/prod_sony_a7c_ii_body_angle3.jpg"
        ],
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
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 1000,
        "description": "كاميرا سوني Sony A7 III - Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-002",
        "stock": 3,
        "name": "Sony A7 IV - Full-frame Mirrorless Camera Body Only",
        "reviewsCount": 53,
        "oldPrice": 1450,
        "image": "images/cam_sony_a7iv.jpg",
        "nameEn": "Sony A7 IV - Full-frame Mirrorless Camera Body Only",
        "badge": "وفر $50",
        "gallery": [
            "images/cam_sony_a7iv.jpg",
            "images/cam_sony_a7iv.jpg",
            "images/prod_sony_a7c_ii_body_angle3.jpg"
        ],
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
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 1400,
        "description": "كاميرا سوني Sony A7 IV - Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-003",
        "stock": 10,
        "name": "Sony A7 V - Full-frame Mirrorless Camera Body Only",
        "reviewsCount": 107,
        "oldPrice": 2200,
        "image": "images/cam_sony_a7cii.jpg",
        "nameEn": "Sony A7 V - Full-frame Mirrorless Camera Body Only",
        "badge": "وفر $100",
        "gallery": [
            "images/cam_sony_a7cii.jpg"
        ],
        "specs": {
            "المستشعر": "36MP Full-Frame Exmor R BSI CMOS مع وحدة الذكاء الاصطناعي AI Unit",
            "الفيديو": "4K 120p / 4K 60p 10-Bit 4:2:2 مع S-Cinetone و S-Log3",
            "نظام التركيز": "AI Deep Learning AF مع تقدير وضعية الأجسام",
            "مانع الاهتزاز": "مانع اهتزاز خماسي المحاور فائق القوة حتى 8.0 وقفات",
            "المنافذ والذاكرة": "منفذان Dual CFexpress Type A / SD UHS-II",
            "الشاشة": "شاشة لمس رباعية المحاور 4-Axis Multi-Angle LCD",
            "البطارية": "Sony NP-FZ100 محسنة",
            "الوزن": "675 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 2100,
        "description": "كاميرا سوني Sony A7 V - Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-004",
        "stock": 10,
        "name": "Sony A7s iii Full-frame Mirrorless Camera Body Only",
        "reviewsCount": 98,
        "oldPrice": 2200,
        "image": "images/cam_sony_a7siii.jpg",
        "nameEn": "Sony A7s iii Full-frame Mirrorless Camera Body Only",
        "badge": "وفر $100",
        "gallery": [
            "images/cam_sony_a7siii.jpg",
            "images/prod_sony_a7c_ii_body_angle3.jpg"
        ],
        "specs": {
            "المستشعر": "12.1MP Full-Frame Exmor R BSI CMOS مخصص للإضاءة المنخفضة والفيديو",
            "الفيديو": "4K 120p 10-Bit 4:2:2 All-Intra بدون كروب وبدون ارتفاع حرارة / 16-Bit RAW",
            "نظام التركيز": "759 نقطة فوكس مع حساسية فائقة حتى EV -6 في الظلام الدامس",
            "مانع الاهتزاز": "5-Axis IBIS مع وضع Active Mode الرقمي المتقدم",
            "حساسية الضوء": "نطاق هائل ISO 80-102,400 (يتوسع حتى 409,600)",
            "المنافذ والذاكرة": "منفذان ثنائيان CFexpress Type A و SD UHS-II",
            "الشاشة والمنظار": "شاشة لمس مفصلية + منظار OLED EVF بدقة 9.44 مليون نقطة",
            "الوزن": "699 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 2100,
        "description": "كاميرا سوني Sony A7s iii Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-005",
        "stock": 4,
        "name": "Sony A7r V Full-frame Mirrorless Camera Body Only",
        "reviewsCount": 121,
        "oldPrice": 2250,
        "image": "images/cam_sony_a7rv.jpg",
        "nameEn": "Sony A7r V Full-frame Mirrorless Camera Body Only",
        "badge": "وفر $90",
        "gallery": [
            "images/cam_sony_a7rv.jpg",
            "images/prod_sony_a7c_ii_body_angle3.jpg"
        ],
        "specs": {
            "المستشعر": "61MP Full-Frame Exmor R BSI CMOS بأعلى دقة تفاصيل",
            "الفيديو": "8K 24/25p 10-Bit / 4K 60p 10-Bit / 4K 30p مسحوب من 6.2K",
            "نظام التركيز": "وحدة معالجة ذكاء اصطناعي مخصصة AI Processing Unit",
            "مانع الاهتزاز": "أقوى مانع اهتزاز من سوني يصل حتى 8.0 وقفات تثبيت",
            "المنافذ والذاكرة": "منفذان ثنائيان يدعمان CFexpress Type A و SD UHS-II",
            "الشاشة": "شاشة 4-Axis Multi-Angle مبتكرة تجمع بين الإمالة والدوران الكامل",
            "الوزن": "723 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 2160,
        "description": "كاميرا سوني Sony A7r V Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-006",
        "stock": 3,
        "name": "Sony FX30 Digital Cinema Camera",
        "reviewsCount": 81,
        "oldPrice": 1250,
        "image": "images/prod_cam_fx30.jpg",
        "nameEn": "Sony FX30 Digital Cinema Camera",
        "badge": "وفر $50",
        "gallery": [
            "images/prod_cam_fx30.jpg"
        ],
        "specs": {
            "المستشعر": "26MP APS-C / Super 35mm Exmor R BSI CMOS فئة السينما",
            "الفيديو": "4K Super 35 مع 6K Oversampling حتى 120fps 10-Bit 4:2:2 مع S-Cinetone",
            "نظام التركيز": "495 نقطة فوكس Phase Detection مع تتبع فوري للعيون والوجه",
            "مانع الاهتزاز": "5-Axis In-Body Stabilization مع وضع Active Mode",
            "نظام التبريد": "مروحة تبريد داخلية مدمجة للتصوير المستمر لساعات دون انقطاع",
            "الهيكل": "هيكل سينمائي متين بفتحات مسامير 1/4\"-20 لتثبيت الملحقات مباشرة",
            "المنافذ والذاكرة": "منفذان مزدوجان CFexpress Type A / SD UHS-II",
            "الوزن": "646 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 1200,
        "description": "كاميرا سوني Sony FX30 Digital Cinema Camera الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-007",
        "stock": 9,
        "name": "Sony FX2 Digital Cinema Camera",
        "reviewsCount": 69,
        "oldPrice": 2100,
        "image": "images/prod_cam_fx3.jpg",
        "nameEn": "Sony FX2 Digital Cinema Camera",
        "badge": "وفر $100",
        "gallery": [
            "images/prod_cam_fx3.jpg"
        ],
        "specs": {
            "المستشعر": "Full-Frame Exmor R CMOS بتصميم سينمائي متقدم",
            "الفيديو": "4K 120fps 10-Bit 4:2:2 All-Intra مع S-Log3 و S-Cinetone",
            "نظام التركيز": "تركيز بؤري سينمائي ذكي مع AF Assist و Focus Map",
            "مانع الاهتزاز": "تثبيت بصري مدمج خماسي المحاور مع دعم بيانات الجيروسكوب Catalyst",
            "الهيكل": "تصميم مدمج خفيف الوزن بأزرار تحكم سينمائية مخصصة",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 2000,
        "description": "كاميرا سوني Sony FX2 Digital Cinema Camera الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-008",
        "stock": 10,
        "name": "Sony FX3a Full-Frame Cinema Camera",
        "reviewsCount": 86,
        "oldPrice": 2650,
        "image": "images/prod_cam_007.jpg",
        "nameEn": "Sony FX3a Full-Frame Cinema Camera",
        "badge": "وفر $100",
        "gallery": [
            "images/prod_cam_007.jpg",
            "images/prod_sony_fx3_a_mirrorless_body_angle6.jpg",
            "images/prod_sony_fx3_a_mirrorless_body_angle7.jpg"
        ],
        "specs": {
            "المستشعر": "12.1MP Full-Frame Exmor R BSI CMOS من سلسلة Cinema Line",
            "الفيديو": "4K حتى 120p بدون اقتطاع / 10-Bit 4:2:2 All-Intra / RAW Output 16-Bit",
            "نظام التركيز": "Fast Hybrid AF مع 627 نقطة وتتبع بالذكاء الاصطناعي",
            "مانع الاهتزاز": "مانع اهتزاز بصري خماسي المحاور 5-Axis + Active Mode",
            "حساسية الضوء": "Dual Base ISO 800 و 12,800 مع مدى ديناميكي 15+ وقفة",
            "نظام التبريد": "مروحة تبريد داخلية صامتة لضمان التسجيل غير المحدود",
            "الوزن": "715 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 2550,
        "description": "كاميرا سوني Sony FX3a Full-Frame Cinema Camera الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-009",
        "stock": 10,
        "name": "Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens",
        "reviewsCount": 56,
        "oldPrice": 860,
        "image": "images/prod_cam_zve10ii.jpg",
        "nameEn": "Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens",
        "badge": "وفر $30",
        "gallery": [
            "images/prod_cam_zve10ii.jpg"
        ],
        "specs": {
            "المستشعر": "26MP APS-C Exmor R BSI CMOS لصناع المحتوى والفلوج",
            "الفيديو": "4K 60p 10-Bit 4:2:2 مسحوب من دقة 5.6K بدون دمج بكسلات",
            "نظام التركيز": "759 نقطة تركيز مع أوضاع Product Showcase و Background Defocus",
            "الصوت": "مايكروفون استوديو ثلاثي الكبسولات مدمج مع حاجب رياح احترافي Windscreen",
            "العدسة المرفقة": "مرفق عدسة سوني الأصلية القابلة للتقريب 16-50mm OSS",
            "الشاشة": "شاشة لمسية تدور 180 درجة مخصصة لصناع المحتوى",
            "البطارية": "بطارية سوني الكبيرة NP-FZ100 لمضاعفة وقت التصوير",
            "الوزن": "377 جم فقط",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 830,
        "description": "كاميرا سوني Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-010",
        "stock": 7,
        "name": "Sony ZV-E10 Mirrorless Camera with 16-50mm Lens",
        "reviewsCount": 56,
        "oldPrice": 600,
        "image": "images/prod_cam_010.jpg",
        "nameEn": "Sony ZV-E10 Mirrorless Camera with 16-50mm Lens",
        "badge": "وفر $20",
        "gallery": [
            "images/prod_cam_010.jpg"
        ],
        "specs": {
            "المستشعر": "24.2MP APS-C Exmor CMOS",
            "الفيديو": "4K 30p مع 6K Oversampling و 1080p حتى 120 إطار في الثانية",
            "نظام التركيز": "تركيز سريع 425 نقطة مع تتبع العيون وعرض المنتجات",
            "العدسة المرفقة": "عدسة سوني 16-50mm بمثبت بصري OSS مدمج",
            "الشاشة": "شاشة لمسية مفصلية تدور بالكامل",
            "الوزن": "343 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 580,
        "description": "كاميرا سوني Sony ZV-E10 Mirrorless Camera with 16-50mm Lens الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-011",
        "stock": 6,
        "name": "Sony a6400 with 16-50 lens",
        "reviewsCount": 59,
        "oldPrice": 680,
        "image": "images/prod_cam_011.jpg",
        "nameEn": "Sony a6400 with 16-50 lens",
        "badge": "وفر $30",
        "gallery": [
            "images/prod_cam_011.jpg"
        ],
        "specs": {
            "المستشعر": "24.2MP APS-C Exmor CMOS",
            "الفيديو": "4K HDR (HLG) مع S-Log3/S-Log2 و 1080p بمعدل 120fps للحركة البطيئة",
            "نظام التركيز": "أسرع تركيز بؤري 0.02 ثانية مع Real-time Eye AF",
            "العدسة المرفقة": "مرفق عدسة E PZ 16-50mm f/3.5-5.6 OSS",
            "الشاشة": "شاشة لمس قابلة للإمالة بزاوية 180 درجة للأعلى",
            "الوزن": "403 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 650,
        "description": "كاميرا سوني Sony a6400 with 16-50 lens الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-012",
        "stock": 4,
        "name": "Sony a6700 Body Only",
        "reviewsCount": 57,
        "oldPrice": 1100,
        "image": "images/prod_cam_012.jpg",
        "nameEn": "Sony a6700 Body Only",
        "badge": "وفر $50",
        "gallery": [
            "images/prod_cam_012.jpg"
        ],
        "specs": {
            "المستشعر": "26MP APS-C Exmor R BSI CMOS الأحدث في كاميرات سوني APS-C",
            "الفيديو": "4K 120p / 4K 60p مسحوب من 6K بنقاء 10-Bit 4:2:2 مع ألوان S-Cinetone",
            "نظام التركيز": "معالج الذكاء الاصطناعي AI Unit للتعرف على مختلف الكائنات والمركبات",
            "مانع الاهتزاز": "مانع اهتزاز بصري خماسي المحاور 5-Axis مدمج 5.0 وقفات",
            "البطارية": "بطارية NP-FZ100 الكبيرة لعمر تشغيل مضاعف",
            "الوزن": "493 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 1050,
        "description": "كاميرا سوني Sony a6700 Body Only الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-013",
        "stock": 6,
        "name": "Sony a7C II Mirrorless Body only",
        "reviewsCount": 120,
        "oldPrice": 1400,
        "image": "images/prod_cam_013.jpg",
        "nameEn": "Sony a7C II Mirrorless Body only",
        "badge": "وفر $50",
        "gallery": [
            "images/prod_cam_013.jpg",
            "images/prod_sony_a7c_ii_body_angle2.jpg",
            "images/prod_sony_a7c_ii_body_angle3.jpg"
        ],
        "specs": {
            "المستشعر": "33MP Full-Frame Exmor R BSI CMOS بهيكل فائق الصغر",
            "الفيديو": "4K 60p 10-bit 4:2:2 All-Intra و 7K Oversampling 4K 30p مع S-Cinetone",
            "نظام التركيز": "وحدة الذكاء الاصطناعي AI مع تتبع عالي الدقة",
            "مانع الاهتزاز": "مانع اهتزاز بصري داخلي خماسي المحاور حتى 7.0 وقفات",
            "الوزن": "514 جم فقط (أخف كاميرا فل فريم بمستشعر 33 ميجابكسل)",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 1350,
        "description": "كاميرا سوني Sony a7C II Mirrorless Body only الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-014",
        "stock": 5,
        "name": "Sony FX6 Full-Frame Cinema Camera (Body Only)",
        "reviewsCount": 116,
        "oldPrice": 4200,
        "image": "images/cam_sony_fx6.jpg",
        "nameEn": "Sony FX6 Full-Frame Cinema Camera (Body Only)",
        "badge": "وفر $200",
        "gallery": [
            "images/cam_sony_fx6.jpg"
        ],
        "specs": {
            "المستشعر": "10.2MP Full-Frame Back-Illuminated Exmor R CMOS سينمائي احترافي",
            "الفيديو": "DCI 4K حتى 60p / UHD 4K حتى 120p مع 16-Bit RAW خارجي",
            "المدى الديناميكي": "مدى ديناميكي مذهل 15+ وقفة مع ألوان S-Cinetone الرسمية",
            "فلتر ND مدمج": "فلتر كثافة حيادية إلكتروني متغير مدمج Electronic Variable ND",
            "حساسية الضوء": "Dual Base ISO 800 و 12,800 مع حساسية قصوى 409,600",
            "الصوت": "مقبض علوي بمنافذ صوت احترافية 2x XLR Inputs مع تحكم كامل",
            "نظام التبريد": "نظام تهوية نشط متطور للتصوير المستمر في أصعب الظروف",
            "الوزن": "890 جم (هيكل الكاميرا الأساسي)",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Sony",
        "price": 4000,
        "description": "كاميرا سوني Sony FX6 Full-Frame Cinema Camera (Body Only) الاحترافية الأصلية مع كفالة رسمية كفالة رسمية من الوكيل المعتمد في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "LEN-015",
        "stock": 10,
        "name": "SONY FE 100mm F2.8 Macro GM OSS",
        "reviewsCount": 29,
        "oldPrice": null,
        "image": "images/prod_len_015.jpg",
        "nameEn": "SONY FE 100mm F2.8 Macro GM OSS",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_015.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 1090,
        "description": "عدسة SONY FE 100mm F2.8 Macro GM OSS الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-016",
        "stock": 9,
        "name": "SONY FE 85mm F1.4 GM II",
        "reviewsCount": 49,
        "oldPrice": null,
        "image": "images/prod_sony_fe_85mm_f1_4_gm_ii.jpg",
        "nameEn": "SONY FE 85mm F1.4 GM II",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_sony_fe_85mm_f1_4_gm_ii.jpg",
            "images/prod_sony_fe_85mm_f1_4_gm_ii_angle2.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 1470,
        "description": "عدسة SONY FE 85mm F1.4 GM II الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-017",
        "stock": 8,
        "name": "SONY FE 85mm F1.4 GM",
        "reviewsCount": 34,
        "oldPrice": null,
        "image": "images/prod_len_017.jpg",
        "nameEn": "SONY FE 85mm F1.4 GM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_017.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 890,
        "description": "عدسة SONY FE 85mm F1.4 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-018",
        "stock": 15,
        "name": "SONY FE 16-35mm F2.8 GM II",
        "reviewsCount": 61,
        "oldPrice": null,
        "image": "images/prod_sony_1635_gm2.jpg",
        "nameEn": "SONY FE 16-35mm F2.8 GM II",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_sony_1635_gm2.jpg",
            "images/prod_sony_1635_gm2_angle2.jpg",
            "images/prod_sony_1635_gm2_angle3.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 1550,
        "description": "عدسة SONY FE 16-35mm F2.8 GM II الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-019",
        "stock": 15,
        "name": "SONY FE 16-35mm F2.8 GM",
        "reviewsCount": 24,
        "oldPrice": null,
        "image": "images/prod_len_019.jpg",
        "nameEn": "SONY FE 16-35mm F2.8 GM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_019.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 1260,
        "description": "عدسة SONY FE 16-35mm F2.8 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-020",
        "stock": 6,
        "name": "SONY FE 70-200mm F2.8 GM OSS II",
        "reviewsCount": 27,
        "oldPrice": null,
        "image": "images/prod_sony_70200_gm2.jpg",
        "nameEn": "SONY FE 70-200mm F2.8 GM OSS II",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_sony_70200_gm2.jpg",
            "images/prod_sony_70200_gm2_angle2.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 1700,
        "description": "عدسة SONY FE 70-200mm F2.8 GM OSS II الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-021",
        "stock": 8,
        "name": "SONY FE 70-200mm F2.8 GM OSS",
        "reviewsCount": 49,
        "oldPrice": null,
        "image": "images/prod_len_021.jpg",
        "nameEn": "SONY FE 70-200mm F2.8 GM OSS",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_021.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 1370,
        "description": "عدسة SONY FE 70-200mm F2.8 GM OSS الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-022",
        "stock": 8,
        "name": "SONY FE 50mm F1.4 GM",
        "reviewsCount": 31,
        "oldPrice": null,
        "image": "images/prod_len_022.jpg",
        "nameEn": "SONY FE 50mm F1.4 GM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_022.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 970,
        "description": "عدسة SONY FE 50mm F1.4 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-023",
        "stock": 12,
        "name": "SONY FE 50mm F1.2 GM",
        "reviewsCount": 52,
        "oldPrice": null,
        "image": "images/prod_sony_fe_50mm_f1_2_gm.jpg",
        "nameEn": "SONY FE 50mm F1.2 GM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_sony_fe_50mm_f1_2_gm.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 1370,
        "description": "عدسة SONY FE 50mm F1.2 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-024",
        "stock": 6,
        "name": "SONY FE 24-70mm F2.8 GM II",
        "reviewsCount": 23,
        "oldPrice": null,
        "image": "images/prod_sony_2470_gm2.png",
        "nameEn": "SONY FE 24-70mm F2.8 GM II",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_sony_2470_gm2.png"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 1420,
        "description": "عدسة SONY FE 24-70mm F2.8 GM II الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-025",
        "stock": 6,
        "name": "SONY FE 24-70mm F2.8 GM",
        "reviewsCount": 55,
        "oldPrice": null,
        "image": "images/prod_len_025.jpg",
        "nameEn": "SONY FE 24-70mm F2.8 GM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_025.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 1130,
        "description": "عدسة SONY FE 24-70mm F2.8 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-026",
        "stock": 7,
        "name": "SONY FE 35mm F1.4 GM",
        "reviewsCount": 37,
        "oldPrice": null,
        "image": "images/prod_sony_35_14gm.jpg",
        "nameEn": "SONY FE 35mm F1.4 GM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_sony_35_14gm.jpg",
            "images/prod_sony_35_14gm_angle2.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 980,
        "description": "عدسة SONY FE 35mm F1.4 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-027",
        "stock": 15,
        "name": "SONY FE 90mm F2.8 Macro G OSS",
        "reviewsCount": 49,
        "oldPrice": null,
        "image": "images/prod_len_027.jpg",
        "nameEn": "SONY FE 90mm F2.8 Macro G OSS",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_027.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 660,
        "description": "عدسة SONY FE 90mm F2.8 Macro G OSS الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-028",
        "stock": 10,
        "name": "SONY FE 24mm F1.4 GM",
        "reviewsCount": 49,
        "oldPrice": null,
        "image": "images/prod_len_028.jpg",
        "nameEn": "SONY FE 24mm F1.4 GM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_028.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 820,
        "description": "عدسة SONY FE 24mm F1.4 GM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-029",
        "stock": 14,
        "name": "SONY E 18-135mm F3.5-5.6 OSS",
        "reviewsCount": 23,
        "oldPrice": null,
        "image": "images/prod_len_029.jpg",
        "nameEn": "SONY E 18-135mm F3.5-5.6 OSS",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_029.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 420,
        "description": "عدسة SONY E 18-135mm F3.5-5.6 OSS الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-030",
        "stock": 11,
        "name": "SONY FE 24-105mm F4 G OSS Lens",
        "reviewsCount": 53,
        "oldPrice": null,
        "image": "images/prod_len_030.jpg",
        "nameEn": "SONY FE 24-105mm F4 G OSS Lens",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_030.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 650,
        "description": "عدسة SONY FE 24-105mm F4 G OSS Lens الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-031",
        "stock": 7,
        "name": "SONYFE 85mm F1.8",
        "reviewsCount": 33,
        "oldPrice": null,
        "image": "images/prod_len_031.jpg",
        "nameEn": "SONYFE 85mm F1.8",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_031.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 400,
        "description": "عدسة SONYFE 85mm F1.8 الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-032",
        "stock": 5,
        "name": "SONY FE 50mm F1.8",
        "reviewsCount": 49,
        "oldPrice": null,
        "image": "images/prod_len_032.jpg",
        "nameEn": "SONY FE 50mm F1.8",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_032.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Sony E-Mount",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sony",
        "price": 190,
        "description": "عدسة SONY FE 50mm F1.8 الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-033",
        "stock": 14,
        "name": "SIGMA 24-70mm F2.8 DG DN II for SONY",
        "reviewsCount": 60,
        "oldPrice": null,
        "image": "images/prod_sigma_2470_art_angle2.jpg",
        "nameEn": "SIGMA 24-70mm F2.8 DG DN II for SONY",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_sigma_2470_art_angle2.jpg",
            "images/prod_sigma_2470_art_angle3.jpg",
            "images/prod_sigma_2470_art_angle4.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 820,
        "description": "عدسة SIGMA 24-70mm F2.8 DG DN II for SONY الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-034",
        "stock": 15,
        "name": "SIGMA 24mm F/1.4 DG DN",
        "reviewsCount": 52,
        "oldPrice": null,
        "image": "images/prod_len_034.jpg",
        "nameEn": "SIGMA 24mm F/1.4 DG DN",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_034.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 600,
        "description": "عدسة SIGMA 24mm F/1.4 DG DN الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-035",
        "stock": 10,
        "name": "SIGMA 35MM F 1.4 DG DN",
        "reviewsCount": 50,
        "oldPrice": null,
        "image": "images/prod_len_035.jpg",
        "nameEn": "SIGMA 35MM F 1.4 DG DN",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_035.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 660,
        "description": "عدسة SIGMA 35MM F 1.4 DG DN الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-036",
        "stock": 13,
        "name": "SIGMA 50mm f/1.4 DG HSM Art",
        "reviewsCount": 40,
        "oldPrice": null,
        "image": "images/prod_len_036.jpg",
        "nameEn": "SIGMA 50mm f/1.4 DG HSM Art",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_036.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 660,
        "description": "عدسة SIGMA 50mm f/1.4 DG HSM Art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-037",
        "stock": 7,
        "name": "SIGMA 14-24mm f/2.8 DG DN Art",
        "reviewsCount": 63,
        "oldPrice": null,
        "image": "images/prod_sigma_14_24mm_f2_8_dg_dn_art_l.jpg",
        "nameEn": "SIGMA 14-24mm f/2.8 DG DN Art",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_sigma_14_24mm_f2_8_dg_dn_art_l.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 1040,
        "description": "عدسة SIGMA 14-24mm f/2.8 DG DN Art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-038",
        "stock": 10,
        "name": "SIGMA 16mm f/1.4 DG DN",
        "reviewsCount": 28,
        "oldPrice": null,
        "image": "images/prod_len_038.jpg",
        "nameEn": "SIGMA 16mm f/1.4 DG DN",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_038.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 330,
        "description": "عدسة SIGMA 16mm f/1.4 DG DN الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-039",
        "stock": 9,
        "name": "SIGMA 18-50mm f/2.8 DC DN Contemporary",
        "reviewsCount": 59,
        "oldPrice": null,
        "image": "images/prod_len_039.jpg",
        "nameEn": "SIGMA 18-50mm f/2.8 DC DN Contemporary",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_039.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 420,
        "description": "عدسة SIGMA 18-50mm f/2.8 DC DN Contemporary الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-040",
        "stock": 9,
        "name": "SIGMA 85mm f/1.4 DG DN Art",
        "reviewsCount": 42,
        "oldPrice": null,
        "image": "images/prod_sigma_85mm_f1_4_dg_dn_art_sony.jpg",
        "nameEn": "SIGMA 85mm f/1.4 DG DN Art",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_sigma_85mm_f1_4_dg_dn_art_sony.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 740,
        "description": "عدسة SIGMA 85mm f/1.4 DG DN Art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-041",
        "stock": 15,
        "name": "SIGMA 28-70MM F/2.8  DG DN",
        "reviewsCount": 44,
        "oldPrice": null,
        "image": "images/prod_len_041.jpg",
        "nameEn": "SIGMA 28-70MM F/2.8  DG DN",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_041.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 630,
        "description": "عدسة SIGMA 28-70MM F/2.8  DG DN الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "AUD-042",
        "stock": 16,
        "name": "RODE GO II (Double)",
        "reviewsCount": 52,
        "oldPrice": null,
        "image": "images/prod_aud_042.jpg",
        "nameEn": "RODE GO II (Double)",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_042.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 195,
        "description": "نظام تسجيل الصوت الاحترافي RODE GO II (Double) بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-043",
        "stock": 13,
        "name": "RODE INTERVIEW",
        "reviewsCount": 98,
        "oldPrice": null,
        "image": "images/prod_aud_043.jpg",
        "nameEn": "RODE INTERVIEW",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_043.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 40,
        "description": "نظام تسجيل الصوت الاحترافي RODE INTERVIEW بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-044",
        "stock": 10,
        "name": "RODE NT1 5th Gen",
        "reviewsCount": 44,
        "oldPrice": null,
        "image": "images/prod_aud_044.jpg",
        "nameEn": "RODE NT1 5th Gen",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_044.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 270,
        "description": "نظام تسجيل الصوت الاحترافي RODE NT1 5th Gen بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-045",
        "stock": 15,
        "name": "RODE NT1 Signature series",
        "reviewsCount": 91,
        "oldPrice": null,
        "image": "images/prod_aud_045.jpg",
        "nameEn": "RODE NT1 Signature series",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_045.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 210,
        "description": "نظام تسجيل الصوت الاحترافي RODE NT1 Signature series بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-046",
        "stock": 11,
        "name": "RODE NT1-A",
        "reviewsCount": 55,
        "oldPrice": null,
        "image": "images/prod_aud_046.jpg",
        "nameEn": "RODE NT1-A",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_046.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 210,
        "description": "نظام تسجيل الصوت الاحترافي RODE NT1-A بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-047",
        "stock": 12,
        "name": "RODE Mic NT-USB Plus",
        "reviewsCount": 76,
        "oldPrice": null,
        "image": "images/prod_aud_047.jpg",
        "nameEn": "RODE Mic NT-USB Plus",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_047.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 170,
        "description": "نظام تسجيل الصوت الاحترافي RODE Mic NT-USB Plus بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-048",
        "stock": 19,
        "name": "RODE NTH-100",
        "reviewsCount": 68,
        "oldPrice": null,
        "image": "images/prod_aud_048.jpg",
        "nameEn": "RODE NTH-100",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_048.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 150,
        "description": "نظام تسجيل الصوت الاحترافي RODE NTH-100 بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-049",
        "stock": 12,
        "name": "RODE POD MIC",
        "reviewsCount": 41,
        "oldPrice": null,
        "image": "images/prod_aud_049.jpg",
        "nameEn": "RODE POD MIC",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_049.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 100,
        "description": "نظام تسجيل الصوت الاحترافي RODE POD MIC بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-050",
        "stock": 5,
        "name": "RODE PSA1",
        "reviewsCount": 38,
        "oldPrice": null,
        "image": "images/prod_aud_050.jpg",
        "nameEn": "RODE PSA1",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_050.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 110,
        "description": "نظام تسجيل الصوت الاحترافي RODE PSA1 بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-051",
        "stock": 11,
        "name": "RODE PSA1+ Black",
        "reviewsCount": 75,
        "oldPrice": null,
        "image": "images/prod_aud_051.jpg",
        "nameEn": "RODE PSA1+ Black",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_051.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 145,
        "description": "نظام تسجيل الصوت الاحترافي RODE PSA1+ Black بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-052",
        "stock": 5,
        "name": "RODE PodMic USB",
        "reviewsCount": 84,
        "oldPrice": null,
        "image": "images/prod_aud_052.jpg",
        "nameEn": "RODE PodMic USB",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_052.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 165,
        "description": "نظام تسجيل الصوت الاحترافي RODE PodMic USB بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-053",
        "stock": 16,
        "name": "RODE Procaster Dynamic mic",
        "reviewsCount": 43,
        "oldPrice": null,
        "image": "images/prod_aud_053.jpg",
        "nameEn": "RODE Procaster Dynamic mic",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_053.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 200,
        "description": "نظام تسجيل الصوت الاحترافي RODE Procaster Dynamic mic بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-054",
        "stock": 11,
        "name": "RODE RODE Wireless Go III",
        "reviewsCount": 85,
        "oldPrice": null,
        "image": "images/prod_aud_054.jpg",
        "nameEn": "RODE RODE Wireless Go III",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_054.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 240,
        "description": "نظام تسجيل الصوت الاحترافي RODE RODE Wireless Go III بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-055",
        "stock": 15,
        "name": "RODE RODE Wireless Micro",
        "reviewsCount": 53,
        "oldPrice": null,
        "image": "images/prod_aud_055.jpg",
        "nameEn": "RODE RODE Wireless Micro",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_055.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 110,
        "description": "نظام تسجيل الصوت الاحترافي RODE RODE Wireless Micro بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-056",
        "stock": 10,
        "name": "RODE XCM-50",
        "reviewsCount": 50,
        "oldPrice": null,
        "image": "images/prod_aud_056.jpg",
        "nameEn": "RODE XCM-50",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_056.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 120,
        "description": "نظام تسجيل الصوت الاحترافي RODE XCM-50 بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-057",
        "stock": 11,
        "name": "RODE XDM-100",
        "reviewsCount": 94,
        "oldPrice": null,
        "image": "images/prod_aud_057.jpg",
        "nameEn": "RODE XDM-100",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_057.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 170,
        "description": "نظام تسجيل الصوت الاحترافي RODE XDM-100 بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-058",
        "stock": 16,
        "name": "RODE PRO 2-Person",
        "reviewsCount": 38,
        "oldPrice": null,
        "image": "images/prod_aud_058.jpg",
        "nameEn": "RODE PRO 2-Person",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_058.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 290,
        "description": "نظام تسجيل الصوت الاحترافي RODE PRO 2-Person بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-059",
        "stock": 7,
        "name": "RODE Caster Pro II",
        "reviewsCount": 34,
        "oldPrice": null,
        "image": "images/prod_aud_059.jpg",
        "nameEn": "RODE Caster Pro II",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_059.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 540,
        "description": "نظام تسجيل الصوت الاحترافي RODE Caster Pro II بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-060",
        "stock": 19,
        "name": "RODE Caster Duo",
        "reviewsCount": 68,
        "oldPrice": null,
        "image": "images/prod_aud_060.jpg",
        "nameEn": "RODE Caster Duo",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_060.jpg",
        "specs": {
            "الشركة المصنعة": "RODE",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "RODE",
        "price": 450,
        "description": "نظام تسجيل الصوت الاحترافي RODE Caster Duo بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-061",
        "stock": 5,
        "name": "Hollyland Lark A1 Combo",
        "reviewsCount": 35,
        "oldPrice": null,
        "image": "images/prod_aud_061.jpg",
        "nameEn": "Hollyland Lark A1 Combo",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_061.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 80,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Lark A1 Combo بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-062",
        "stock": 17,
        "name": "Hollyland Lark A1 Type C",
        "reviewsCount": 69,
        "oldPrice": null,
        "image": "images/prod_aud_062.jpg",
        "nameEn": "Hollyland Lark A1 Type C",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_062.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 70,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Lark A1 Type C بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-063",
        "stock": 14,
        "name": "Hollyland Lark M2S Combo",
        "reviewsCount": 48,
        "oldPrice": null,
        "image": "images/prod_aud_063.jpg",
        "nameEn": "Hollyland Lark M2S Combo",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_063.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 125,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Lark M2S Combo بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-064",
        "stock": 9,
        "name": "Hollyland Lark M2S Type-C Version",
        "reviewsCount": 81,
        "oldPrice": null,
        "image": "images/prod_aud_064.jpg",
        "nameEn": "Hollyland Lark M2S Type-C Version",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_064.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 110,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Lark M2S Type-C Version بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-065",
        "stock": 14,
        "name": "Hollyland Hollyland Lark M2S Ultimate Combo",
        "reviewsCount": 31,
        "oldPrice": null,
        "image": "images/prod_aud_065.jpg",
        "nameEn": "Hollyland Hollyland Lark M2S Ultimate Combo",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_065.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 115,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Hollyland Lark M2S Ultimate Combo بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-066",
        "stock": 14,
        "name": "Hollyland LARK MAX DUO",
        "reviewsCount": 47,
        "oldPrice": null,
        "image": "images/prod_aud_066.jpg",
        "nameEn": "Hollyland LARK MAX DUO",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_066.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 225,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland LARK MAX DUO بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-067",
        "stock": 14,
        "name": "Hollyland LARK MAX SOLO",
        "reviewsCount": 61,
        "oldPrice": null,
        "image": "images/prod_aud_067.jpg",
        "nameEn": "Hollyland LARK MAX SOLO",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_067.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 165,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland LARK MAX SOLO بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-068",
        "stock": 5,
        "name": "Hollyland Lark M2 Combo Version",
        "reviewsCount": 64,
        "oldPrice": null,
        "image": "images/prod_aud_068.jpg",
        "nameEn": "Hollyland Lark M2 Combo Version",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_068.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 95,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Lark M2 Combo Version بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-069",
        "stock": 18,
        "name": "Hollyland Solidom C1 4S",
        "reviewsCount": 50,
        "oldPrice": null,
        "image": "images/prod_aud_069.jpg",
        "nameEn": "Hollyland Solidom C1 4S",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_069.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 1100,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Solidom C1 4S بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-070",
        "stock": 11,
        "name": "Hollyland Solidom C1 6S",
        "reviewsCount": 54,
        "oldPrice": null,
        "image": "images/prod_aud_070.jpg",
        "nameEn": "Hollyland Solidom C1 6S",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_aud_070.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 1550,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Solidom C1 6S بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-071",
        "stock": 5,
        "name": "Hollyland Solidom C1 Pro-9S",
        "reviewsCount": 51,
        "oldPrice": null,
        "image": "images/prod_rode_videomic_pro_plus.jpg",
        "nameEn": "Hollyland Solidom C1 Pro-9S",
        "badge": "صوت سينمائي",
        "gallery": [
            "images/prod_rode_videomic_pro_plus.jpg",
            "images/prod_rode_videomic_pro_plus_angle2.jpg",
            "images/prod_rode_videomic_pro_plus_angle3.jpg",
            "images/prod_rode_videomic_pro_plus_angle4.jpg"
        ],
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 2600,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Solidom C1 Pro-9S بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-072",
        "stock": 6,
        "name": "Hollyland Solidom C1 Pro-6S",
        "reviewsCount": 33,
        "oldPrice": null,
        "image": "images/prod_rode_wireless_me.jpg",
        "nameEn": "Hollyland Solidom C1 Pro-6S",
        "badge": "صوت سينمائي",
        "gallery": [
            "images/prod_rode_wireless_me.jpg",
            "images/prod_rode_wireless_me_angle2.jpg",
            "images/prod_rode_wireless_me_angle3.jpg",
            "images/prod_rode_wireless_me_angle4.jpg",
            "images/prod_rode_wireless_me_angle5.jpg",
            "images/prod_rode_wireless_me_angle6.jpg"
        ],
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 1800,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Solidom C1 Pro-6S بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-073",
        "stock": 8,
        "name": "Hollyland Solidom C1 Pro-4S",
        "reviewsCount": 41,
        "oldPrice": null,
        "image": "images/prod_rode_rodecaster_pro_ii.jpg",
        "nameEn": "Hollyland Solidom C1 Pro-4S",
        "badge": "صوت سينمائي",
        "gallery": [
            "images/prod_rode_rodecaster_pro_ii.jpg",
            "images/prod_rode_rodecaster_pro_ii_angle2.jpg",
            "images/prod_rode_rodecaster_pro_ii_angle3.jpg",
            "images/prod_rode_rodecaster_pro_ii_angle4.jpg",
            "images/prod_rode_rodecaster_pro_ii_angle5.jpg"
        ],
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 1350,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Solidom C1 Pro-4S بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-074",
        "stock": 5,
        "name": "Hollyland Hollyland Mars 4K Video Transmission System",
        "reviewsCount": 86,
        "oldPrice": null,
        "image": "images/prod_hollyland_lark_max_2_ultimate.jpg",
        "nameEn": "Hollyland Hollyland Mars 4K Video Transmission System",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_hollyland_lark_max_2_ultimate.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 500,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Hollyland Mars 4K Video Transmission System بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-075",
        "stock": 8,
        "name": "Hollyland Hollyland Mars 400S PRO Video Transmission",
        "reviewsCount": 35,
        "oldPrice": null,
        "image": "images/prod_hollyland_lark_m2_combo.jpg",
        "nameEn": "Hollyland Hollyland Mars 400S PRO Video Transmission",
        "badge": "صوت سينمائي",
        "gallery": [
            "images/prod_hollyland_lark_m2_combo.jpg",
            "images/prod_hollyland_lark_m2_combo_angle2.jpg",
            "images/prod_hollyland_lark_m2_combo_angle3.jpg",
            "images/prod_hollyland_lark_m2_combo_angle4.jpg",
            "images/prod_hollyland_lark_m2_combo_angle5.jpg",
            "images/prod_hollyland_lark_m2_combo_angle6.jpg",
            "images/prod_hollyland_lark_m2_combo_angle7.jpg",
            "images/prod_hollyland_lark_m2_combo_angle8.jpg",
            "images/prod_hollyland_lark_m2_combo_angle9.jpg",
            "images/prod_hollyland_lark_m2_combo_angle10.jpg",
            "images/prod_hollyland_lark_m2_combo_angle11.jpg",
            "images/prod_hollyland_lark_m2_combo_angle12.jpg"
        ],
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 270,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Hollyland Mars 400S PRO Video Transmission بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-076",
        "stock": 7,
        "name": "Hollyland Hollyland Mars 400S PRO II Video Transmission",
        "reviewsCount": 90,
        "oldPrice": null,
        "image": "images/prod_sennheiser_mke_600_microphone.jpg",
        "nameEn": "Hollyland Hollyland Mars 400S PRO II Video Transmission",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_sennheiser_mke_600_microphone.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 400,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Hollyland Mars 400S PRO II Video Transmission بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "AUD-077",
        "stock": 6,
        "name": "Hollyland Hollyland Pyro S 4K Video Transmission",
        "reviewsCount": 73,
        "oldPrice": null,
        "image": "images/prod_shure_sm7b_vocal_microphone.jpg",
        "nameEn": "Hollyland Hollyland Pyro S 4K Video Transmission",
        "badge": "صوت سينمائي",
        "gallery": "images/prod_shure_sm7b_vocal_microphone.jpg",
        "specs": {
            "الشركة المصنعة": "Hollyland",
            "الاستخدام": "صوت استوديو وصناع محتوى وبث مباشر",
            "الكفالة": "كفالة الوكيل المعتمد سنتين"
        },
        "brand": "Hollyland",
        "price": 550,
        "description": "نظام تسجيل الصوت الاحترافي Hollyland Hollyland Pyro S 4K Video Transmission بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "DJI-078",
        "stock": 9,
        "name": "DJI MOBILE OM SE",
        "reviewsCount": 62,
        "oldPrice": null,
        "image": "images/prod_dji_078.jpg",
        "nameEn": "DJI MOBILE OM SE",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_078.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 75,
        "description": "منتج دي جي آي DJI MOBILE OM SE الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-079",
        "stock": 7,
        "name": "DJI OSMO MOBILE Om 6",
        "reviewsCount": 122,
        "oldPrice": null,
        "image": "images/prod_dji_osmo_mobile.jpg",
        "nameEn": "DJI OSMO MOBILE Om 6",
        "badge": "DJI Original",
        "gallery": [
            "images/prod_dji_osmo_mobile.jpg",
            "images/prod_dji_osmo_mobile_angle2.jpg",
            "images/prod_dji_osmo_mobile_angle3.jpg",
            "images/prod_dji_osmo_mobile_angle4.jpg"
        ],
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 89,
        "description": "منتج دي جي آي DJI OSMO MOBILE Om 6 الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-080",
        "stock": 10,
        "name": "DJI OSMO MOBILE 7",
        "reviewsCount": 80,
        "oldPrice": null,
        "image": "images/prod_dji_080.jpg",
        "nameEn": "DJI OSMO MOBILE 7",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_080.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 80,
        "description": "منتج دي جي آي DJI OSMO MOBILE 7 الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-081",
        "stock": 11,
        "name": "DJI OSMO MOBILE 7P",
        "reviewsCount": 81,
        "oldPrice": null,
        "image": "images/prod_dji_081.jpg",
        "nameEn": "DJI OSMO MOBILE 7P",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_081.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 110,
        "description": "منتج دي جي آي DJI OSMO MOBILE 7P الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-082",
        "stock": 13,
        "name": "DJI OSMO MOBILE 8",
        "reviewsCount": 148,
        "oldPrice": null,
        "image": "images/prod_dji_082.jpg",
        "nameEn": "DJI OSMO MOBILE 8",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_082.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 135,
        "description": "منتج دي جي آي DJI OSMO MOBILE 8 الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-083",
        "stock": 5,
        "name": "DJI RS 3 MINI",
        "reviewsCount": 125,
        "oldPrice": null,
        "image": "images/prod_dji_083.jpg",
        "nameEn": "DJI RS 3 MINI",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_083.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 239,
        "description": "منتج دي جي آي DJI RS 3 MINI الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-084",
        "stock": 7,
        "name": "DJI RS 4 MINI",
        "reviewsCount": 147,
        "oldPrice": null,
        "image": "images/prod_dji_rs4_mini.jpg",
        "nameEn": "DJI RS 4 MINI",
        "badge": "DJI Original",
        "gallery": [
            "images/prod_dji_rs4_mini.jpg",
            "images/prod_dji_rs4_mini_angle2.jpg",
            "images/prod_dji_rs4_mini_angle3.jpg",
            "images/prod_dji_rs4_mini_angle4.jpg"
        ],
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 310,
        "description": "منتج دي جي آي DJI RS 4 MINI الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-085",
        "stock": 9,
        "name": "DJI RS 4  MINI COMPO",
        "reviewsCount": 57,
        "oldPrice": null,
        "image": "images/prod_dji_085.jpg",
        "nameEn": "DJI RS 4  MINI COMPO",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_085.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 370,
        "description": "منتج دي جي آي DJI RS 4  MINI COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-086",
        "stock": 12,
        "name": "DJI RS 4 STANDARD",
        "reviewsCount": 71,
        "oldPrice": null,
        "image": "images/prod_dji_rs4.jpg",
        "nameEn": "DJI RS 4 STANDARD",
        "badge": "DJI Original",
        "gallery": [
            "images/prod_dji_rs4.jpg",
            "images/prod_dji_rs4_angle2.jpg",
            "images/prod_dji_rs4_angle3.jpg",
            "images/prod_dji_rs4_angle4.jpg"
        ],
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 390,
        "description": "منتج دي جي آي DJI RS 4 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-087",
        "stock": 11,
        "name": "DJI RS 4 COMPO",
        "reviewsCount": 87,
        "oldPrice": null,
        "image": "images/prod_dji_087.jpg",
        "nameEn": "DJI RS 4 COMPO",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_087.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 480,
        "description": "منتج دي جي آي DJI RS 4 COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-088",
        "stock": 6,
        "name": "DJI RS 4 PRO",
        "reviewsCount": 140,
        "oldPrice": null,
        "image": "images/prod_dji_rs4_pro.jpg",
        "nameEn": "DJI RS 4 PRO",
        "badge": "DJI Original",
        "gallery": [
            "images/prod_dji_rs4_pro.jpg",
            "images/prod_dji_rs4_pro_angle2.jpg",
            "images/prod_dji_rs4_pro_angle3.jpg",
            "images/prod_dji_rs4_pro_angle4.jpg"
        ],
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 640,
        "description": "منتج دي جي آي DJI RS 4 PRO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-089",
        "stock": 13,
        "name": "DJI RS 4 PRO COMPO",
        "reviewsCount": 83,
        "oldPrice": null,
        "image": "images/prod_dji_089.jpg",
        "nameEn": "DJI RS 4 PRO COMPO",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_089.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 780,
        "description": "منتج دي جي آي DJI RS 4 PRO COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-090",
        "stock": 10,
        "name": "DJI RS 5 STANDARD",
        "reviewsCount": 101,
        "oldPrice": null,
        "image": "images/prod_dji_rs3_pro.png",
        "nameEn": "DJI RS 5 STANDARD",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_rs3_pro.png",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 550,
        "description": "منتج دي جي آي DJI RS 5 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-091",
        "stock": 10,
        "name": "DJI RS 5 COMPO",
        "reviewsCount": 146,
        "oldPrice": null,
        "image": "images/prod_dji_091.jpg",
        "nameEn": "DJI RS 5 COMPO",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_091.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 650,
        "description": "منتج دي جي آي DJI RS 5 COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "gimbals"
    },
    {
        "id": "DJI-092",
        "stock": 6,
        "name": "DJI MIC MINI 2 persons",
        "reviewsCount": 63,
        "oldPrice": null,
        "image": "images/prod_dji_092.jpg",
        "nameEn": "DJI MIC MINI 2 persons",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_092.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 95,
        "description": "منتج دي جي آي DJI MIC MINI 2 persons الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "DJI-093",
        "stock": 12,
        "name": "DJI MIC Mini 2 New - 2 persons",
        "reviewsCount": 67,
        "oldPrice": null,
        "image": "images/prod_dji_093.jpg",
        "nameEn": "DJI MIC Mini 2 New - 2 persons",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_093.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 125,
        "description": "منتج دي جي آي DJI MIC Mini 2 New - 2 persons الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "DJI-094",
        "stock": 5,
        "name": "DJI MIC 3 2 persons",
        "reviewsCount": 134,
        "oldPrice": null,
        "image": "images/prod_dji_094.jpg",
        "nameEn": "DJI MIC 3 2 persons",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_094.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 290,
        "description": "منتج دي جي آي DJI MIC 3 2 persons الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "DJI-095",
        "stock": 7,
        "name": "DJI MIC 2 2 persons",
        "reviewsCount": 65,
        "oldPrice": null,
        "image": "images/prod_dji_095.jpg",
        "nameEn": "DJI MIC 2 2 persons",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_095.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 210,
        "description": "منتج دي جي آي DJI MIC 2 2 persons الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "DJI-096",
        "stock": 8,
        "name": "DJI POCKET 3 STANDARD",
        "reviewsCount": 76,
        "oldPrice": null,
        "image": "images/prod_dji_pocket3_std.jpg",
        "nameEn": "DJI POCKET 3 STANDARD",
        "badge": "DJI Original",
        "gallery": [
            "images/prod_dji_pocket3_std.jpg"
        ],
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 479,
        "description": "منتج دي جي آي DJI POCKET 3 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "DJI-097",
        "stock": 4,
        "name": "DJI POCKET 3 CREATOR COMPO",
        "reviewsCount": 144,
        "oldPrice": null,
        "image": "images/prod_dji_osmo_pocket_4_creator_comb.jpg",
        "nameEn": "DJI POCKET 3 CREATOR COMPO",
        "badge": "DJI Original",
        "gallery": [
            "images/prod_dji_osmo_pocket_4_creator_comb.jpg"
        ],
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 530,
        "description": "منتج دي جي آي DJI POCKET 3 CREATOR COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "DJI-098",
        "stock": 10,
        "name": "DJI POCKET 4 STANDARD",
        "reviewsCount": 83,
        "oldPrice": null,
        "image": "images/prod_dji_action4_std.jpg",
        "nameEn": "DJI POCKET 4 STANDARD",
        "badge": "DJI Original",
        "gallery": [
            "images/prod_dji_action4_std.jpg"
        ],
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 520,
        "description": "منتج دي جي آي DJI POCKET 4 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "DJI-099",
        "stock": 11,
        "name": "DJI POCKET 4 CREATOR COMPO",
        "reviewsCount": 126,
        "oldPrice": null,
        "image": "images/prod_dji_action4_adv.jpg",
        "nameEn": "DJI POCKET 4 CREATOR COMPO",
        "badge": "DJI Original",
        "gallery": [
            "images/prod_dji_action4_adv.jpg"
        ],
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 610,
        "description": "منتج دي جي آي DJI POCKET 4 CREATOR COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "DJI-100",
        "stock": 9,
        "name": "DJI ACTION Camera 6 ADVENTURE COMPO",
        "reviewsCount": 100,
        "oldPrice": null,
        "image": "images/prod_dji_100.jpg",
        "nameEn": "DJI ACTION Camera 6 ADVENTURE COMPO",
        "badge": "DJI Original",
        "gallery": [
            "images/prod_dji_100.jpg"
        ],
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 450,
        "description": "منتج دي جي آي DJI ACTION Camera 6 ADVENTURE COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "DJI-101",
        "stock": 10,
        "name": "DJI OSMO Camera 360 STANDARD",
        "reviewsCount": 51,
        "oldPrice": null,
        "image": "images/prod_dji_101.jpg",
        "nameEn": "DJI OSMO Camera 360 STANDARD",
        "badge": "DJI Original",
        "gallery": [
            "images/prod_dji_101.jpg"
        ],
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 450,
        "description": "منتج دي جي آي DJI OSMO Camera 360 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "DJI-102",
        "stock": 13,
        "name": "DJI OSMO Camera 360 ADVENTURE COMPO",
        "reviewsCount": 133,
        "oldPrice": null,
        "image": "images/prod_dji_102.jpg",
        "nameEn": "DJI OSMO Camera 360 ADVENTURE COMPO",
        "badge": "DJI Original",
        "gallery": [
            "images/prod_dji_102.jpg"
        ],
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 530,
        "description": "منتج دي جي آي DJI OSMO Camera 360 ADVENTURE COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "DJI-103",
        "stock": 11,
        "name": "DJI MIC 2 (Single)",
        "reviewsCount": 138,
        "oldPrice": null,
        "image": "images/prod_dji_103.jpg",
        "nameEn": "DJI MIC 2 (Single)",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_103.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 125,
        "description": "منتج دي جي آي DJI MIC 2 (Single) الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "DJI-104",
        "stock": 12,
        "name": "DJI Mic Mini Single",
        "reviewsCount": 145,
        "oldPrice": null,
        "image": "images/prod_dji_104.jpg",
        "nameEn": "DJI Mic Mini Single",
        "badge": "DJI Original",
        "gallery": "images/prod_dji_104.jpg",
        "specs": {
            "العلامة التجارية": "DJI Official",
            "الكفالة": "كفالة رسمية سنة من الوكيل"
        },
        "brand": "DJI",
        "price": 60,
        "description": "منتج دي جي آي DJI Mic Mini Single الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "CAM-105",
        "stock": 11,
        "name": "Canon EOS 2000d 18-55mm",
        "reviewsCount": 87,
        "oldPrice": 350,
        "image": "images/cam_canon_2000d_1855.jpg",
        "nameEn": "Canon EOS 2000d 18-55mm",
        "badge": "وفر $20",
        "gallery": [
            "images/cam_canon_2000d_1855.jpg"
        ],
        "specs": {
            "المستشعر": "24.1MP APS-C CMOS Sensor",
            "الفيديو": "Full HD 1080p حتى 30fps",
            "نظام التركيز": "9 نقاط فوكس مع نقطة مركزية Cross-type سريعة",
            "العدسة المرفقة": "مرفق عدسة كانون الأصلية EF-S 18-55mm IS II",
            "الشاشة": "شاشة LCD قياس 3.0 بوصة بدقة 920K نقطة",
            "الاتصال": "Wi-Fi مدمج لنقل الصور الفوري للهاتف الذكي",
            "الوزن": "475 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 330,
        "description": "كاميرا كانون Canon EOS 2000d 18-55mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-106",
        "stock": 5,
        "name": "Canon EOS R100 18-45mm",
        "reviewsCount": 49,
        "oldPrice": 430,
        "image": "images/prod_cam_106.jpg",
        "nameEn": "Canon EOS R100 18-45mm",
        "badge": "وفر $30",
        "gallery": [
            "images/prod_cam_106.jpg"
        ],
        "specs": {
            "المستشعر": "24.1MP APS-C CMOS Sensor",
            "الفيديو": "4K 24p و Full HD بمعدل 60 إطار في الثانية",
            "نظام التركيز": "Dual Pixel CMOS AF مع 143 منطقة فوكس وتتبع العيون",
            "العدسة المرفقة": "مرفق عدسة Canon RF-S 18-45mm f/4.5-6.3 IS STM المدمجة",
            "الوزن": "356 جم (أخف وأصغر كاميرا ميرورليس من كانون)",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 400,
        "description": "كاميرا كانون Canon EOS R100 18-45mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-107",
        "stock": 4,
        "name": "Canon EOS 250d 18-55mm",
        "reviewsCount": 70,
        "oldPrice": 500,
        "image": "images/cam_canon_250d_1855.jpg",
        "nameEn": "Canon EOS 250d 18-55mm",
        "badge": "وفر $30",
        "gallery": [
            "images/cam_canon_250d_1855.jpg"
        ],
        "specs": {
            "المستشعر": "24.1MP APS-C CMOS Sensor",
            "الفيديو": "4K 24p و Full HD 60p مع ميزة 4K Time-Lapse",
            "نظام التركيز": "Dual Pixel CMOS AF فائق السرعة عبر شاشة اللمس",
            "الشاشة": "شاشة لمسية متحركة بزوايا متعددة Vari-Angle Touchscreen",
            "العدسة المرفقة": "مرفق عدسة EF-S 18-55mm IS STM",
            "البطارية": "عمر بطارية استثنائي يتجاوز 1070 لقطة في الشحنة الواحدة",
            "الوزن": "449 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 470,
        "description": "كاميرا كانون Canon EOS 250d 18-55mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-108",
        "stock": 3,
        "name": "Canon EOS R50 18-45mm",
        "reviewsCount": 114,
        "oldPrice": 580,
        "image": "images/cam_canon_r50.jpg",
        "nameEn": "Canon EOS R50 18-45mm",
        "badge": "وفر $30",
        "gallery": [
            "images/cam_canon_r50.jpg",
            "images/prod_len_canon_rfs_1845.jpg"
        ],
        "specs": {
            "المستشعر": "24.2MP APS-C CMOS Sensor",
            "الفيديو": "4K 30p مسحوب من 6K بدون اقتطاع / Full HD 120p للحركة البطيئة",
            "نظام التركيز": "Dual Pixel CMOS AF II مع معالج DIGIC X والتعرف التلقائي على الأجسام",
            "الشاشة": "شاشة لمس متغيرة الزوايا 3.0 بوصة تدور بالكامل",
            "العدسة المرفقة": "مرفق عدسة كانون RF-S 18-45mm IS STM",
            "الوزن": "375 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 550,
        "description": "كاميرا كانون Canon EOS R50 18-45mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-109",
        "stock": 10,
        "name": "Canon EOS R50v 18-45mm",
        "reviewsCount": 66,
        "oldPrice": 699,
        "image": "images/prod_cam_r50_creator.jpg",
        "nameEn": "Canon EOS R50v 18-45mm",
        "badge": "وفر $40",
        "gallery": [
            "images/prod_cam_r50_creator.jpg"
        ],
        "specs": {
            "المستشعر": "24.2MP APS-C CMOS Sensor",
            "الفيديو": "4K 30p مسحوب من 6K بدون اقتطاع / Full HD 120p للحركة البطيئة",
            "نظام التركيز": "Dual Pixel CMOS AF II مع معالج DIGIC X والتعرف التلقائي على الأجسام",
            "الشاشة": "شاشة لمس متغيرة الزوايا 3.0 بوصة تدور بالكامل",
            "العدسة المرفقة": "مرفق عدسة كانون RF-S 18-45mm IS STM",
            "الوزن": "375 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 659,
        "description": "كاميرا كانون Canon EOS R50v 18-45mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-110",
        "stock": 11,
        "name": "Canon EOS R10 18-45mm",
        "reviewsCount": 95,
        "oldPrice": 750,
        "image": "images/cam_canon_r10_1845.jpg",
        "nameEn": "Canon EOS R10 18-45mm",
        "badge": "وفر $40",
        "gallery": [
            "images/cam_canon_r10_1845.jpg",
            "images/prod_len_canon_rfs_1845.jpg"
        ],
        "specs": {
            "المستشعر": "24.2MP APS-C CMOS Sensor مع معالج DIGIC X فائق السرعة",
            "الفيديو": "4K 60p أو 4K 30p مسحوب من 6K بدون كروب 10-Bit HDR PQ",
            "نظام التركيز": "Dual Pixel CMOS AF II مع 651 منطقة تركيز وتتبع الأجسام والحيوانات",
            "سرعة الالتقاط": "23 إطاراً بالثانية بالشاتر الإلكتروني و 15 إطاراً بالميكانيكي",
            "العدسة المرفقة": "مرفق عدسة RF-S 18-45mm IS STM",
            "الوزن": "429 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 710,
        "description": "كاميرا كانون Canon EOS R10 18-45mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-111",
        "stock": 5,
        "name": "Canon EOS R8 Body",
        "reviewsCount": 64,
        "oldPrice": 1050,
        "image": "images/cam_canon_r8.jpg",
        "nameEn": "Canon EOS R8 Body",
        "badge": "وفر $50",
        "gallery": [
            "images/cam_canon_r8.jpg"
        ],
        "specs": {
            "المستشعر": "24.2MP Full-Frame CMOS Sensor (نفس مستشعر R6 Mark II الرائدة)",
            "الفيديو": "4K 60p مسحوب من 6K بدون اقتطاع 10-Bit 4:2:2 مع Canon Log 3 / Full HD 180fps",
            "نظام التركيز": "Dual Pixel CMOS AF II مدعوم بخوارزميات الذكاء الاصطناعي",
            "سرعة الالتقاط": "حتى 40 إطاراً في الثانية مع الشاتر الإلكتروني",
            "الوزن": "461 جم فقط (أخف كاميرا فل فريم أنتجتها كانون على الإطلاق)",
            "المانت": "Canon RF Mount",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 1000,
        "description": "كاميرا كانون Canon EOS R8 Body الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-112",
        "stock": 10,
        "name": "Canon EOS R8 24-50mm",
        "reviewsCount": 67,
        "oldPrice": 1200,
        "image": "images/prod_cam_112.jpg",
        "nameEn": "Canon EOS R8 24-50mm",
        "badge": "وفر $50",
        "gallery": [
            "images/prod_cam_112.jpg",
            "images/cam_canon_r8.jpg"
        ],
        "specs": {
            "المستشعر": "24.2MP Full-Frame CMOS Sensor (نفس مستشعر R6 Mark II الرائدة)",
            "الفيديو": "4K 60p مسحوب من 6K بدون اقتطاع 10-Bit 4:2:2 مع Canon Log 3 / Full HD 180fps",
            "نظام التركيز": "Dual Pixel CMOS AF II مدعوم بخوارزميات الذكاء الاصطناعي",
            "سرعة الالتقاط": "حتى 40 إطاراً في الثانية مع الشاتر الإلكتروني",
            "الوزن": "461 جم فقط (أخف كاميرا فل فريم أنتجتها كانون على الإطلاق)",
            "المانت": "Canon RF Mount",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 1150,
        "description": "كاميرا كانون Canon EOS R8 24-50mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-113",
        "stock": 7,
        "name": "Canon EOS R7 Body",
        "reviewsCount": 53,
        "oldPrice": 900,
        "image": "images/prod_canon_eos_r7_body.jpg",
        "nameEn": "Canon EOS R7 Body",
        "badge": "وفر $40",
        "gallery": [
            "images/prod_canon_eos_r7_body.jpg"
        ],
        "specs": {
            "المستشعر": "32.5MP APS-C CMOS Sensor (الأعلى دقة في كاميرات كانون APS-C)",
            "الفيديو": "4K 60p 10-Bit / 4K 30p 7K Oversampling مع Canon Log 3 / Full HD 120p",
            "نظام التركيز": "Dual Pixel CMOS AF II مع ذكاء اصطناعي لتتبع الكائنات",
            "مانع الاهتزاز": "مانع اهتزاز مدمج بالهيكل IBIS يصل حتى 8.0 وقفات تثبيت",
            "سرعة الالتقاط": "حتى 30 إطاراً بالثانية مع شاتر إلكتروني",
            "المنافذ والذاكرة": "منفذان مزدوجان لبطاقات الذاكرة Dual SD UHS-II Slots",
            "البطارية": "بطارية LP-E6NH الكبيرة",
            "الوزن": "612 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 860,
        "description": "كاميرا كانون Canon EOS R7 Body الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-114",
        "stock": 8,
        "name": "Canon EOS R7 18-150mm",
        "reviewsCount": 91,
        "oldPrice": 1250,
        "image": "images/prod_canon_eos_r7_18150.jpg",
        "nameEn": "Canon EOS R7 18-150mm",
        "badge": "وفر $50",
        "gallery": [
            "images/prod_canon_eos_r7_18150.jpg"
        ],
        "specs": {
            "المستشعر": "32.5MP APS-C CMOS Sensor (الأعلى دقة في كاميرات كانون APS-C)",
            "الفيديو": "4K 60p 10-Bit / 4K 30p 7K Oversampling مع Canon Log 3 / Full HD 120p",
            "نظام التركيز": "Dual Pixel CMOS AF II مع ذكاء اصطناعي لتتبع الكائنات",
            "مانع الاهتزاز": "مانع اهتزاز مدمج بالهيكل IBIS يصل حتى 8.0 وقفات تثبيت",
            "سرعة الالتقاط": "حتى 30 إطاراً بالثانية مع شاتر إلكتروني",
            "المنافذ والذاكرة": "منفذان مزدوجان لبطاقات الذاكرة Dual SD UHS-II Slots",
            "البطارية": "بطارية LP-E6NH الكبيرة",
            "الوزن": "612 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 1200,
        "description": "كاميرا كانون Canon EOS R7 18-150mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-115",
        "stock": 4,
        "name": "Canon EOS R6 Mark II Body",
        "reviewsCount": 68,
        "oldPrice": 1450,
        "image": "images/cam_canon_r6ii.jpg",
        "nameEn": "Canon EOS R6 Mark II Body",
        "badge": "وفر $60",
        "gallery": [
            "images/cam_canon_r6ii.jpg",
            "images/prod_canon_eos_r7_body_angle3.jpg"
        ],
        "specs": {
            "المستشعر": "24.2MP Full-Frame CMOS Sensor عالي السرعة من الجيل الجديد",
            "الفيديو": "4K 60p مسحوب بالكامل من 6K بدون اقتطاع 10-Bit 4:2:2 Canon Log 3 / Full HD 180p",
            "نظام التركيز": "Dual Pixel CMOS AF II يتعرف على الطيور والقطارات والطائرات والسيارات",
            "مانع الاهتزاز": "مانع اهتزاز داخلي قوي 5-Axis IBIS يصل حتى 8.0 وقفات تثبيت",
            "سرعة الالتقاط": "التقاط فائق السرعة 40 إطاراً في الثانية بالشاتر الإلكتروني",
            "المنافذ والذاكرة": "منفذان لبطاقات الذاكرة Dual SD UHS-II",
            "البطارية": "بطارية LP-E6NH",
            "الوزن": "670 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 1390,
        "description": "كاميرا كانون Canon EOS R6 Mark II Body الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-116",
        "stock": 8,
        "name": "Canon EOS R6 Mark II 24-105 STM",
        "reviewsCount": 56,
        "oldPrice": 1700,
        "image": "images/prod_cam_116.jpg",
        "nameEn": "Canon EOS R6 Mark II 24-105 STM",
        "badge": "وفر $60",
        "gallery": [
            "images/prod_cam_116.jpg",
            "images/cam_canon_r6ii.jpg"
        ],
        "specs": {
            "المستشعر": "24.2MP Full-Frame CMOS Sensor عالي السرعة من الجيل الجديد",
            "الفيديو": "4K 60p مسحوب بالكامل من 6K بدون اقتطاع 10-Bit 4:2:2 Canon Log 3 / Full HD 180p",
            "نظام التركيز": "Dual Pixel CMOS AF II يتعرف على الطيور والقطارات والطائرات والسيارات",
            "مانع الاهتزاز": "مانع اهتزاز داخلي قوي 5-Axis IBIS يصل حتى 8.0 وقفات تثبيت",
            "سرعة الالتقاط": "التقاط فائق السرعة 40 إطاراً في الثانية بالشاتر الإلكتروني",
            "المنافذ والذاكرة": "منفذان لبطاقات الذاكرة Dual SD UHS-II",
            "البطارية": "بطارية LP-E6NH",
            "الوزن": "670 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 1640,
        "description": "كاميرا كانون Canon EOS R6 Mark II 24-105 STM الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-117",
        "stock": 11,
        "name": "Canon EOS R6 Mark II 24-105 f4 L",
        "reviewsCount": 111,
        "oldPrice": 2350,
        "image": "images/prod_cam_r6ii_24105l.jpg",
        "nameEn": "Canon EOS R6 Mark II 24-105 f4 L",
        "badge": "وفر $50",
        "gallery": [
            "images/prod_cam_r6ii_24105l.jpg"
        ],
        "specs": {
            "المستشعر": "24.2MP Full-Frame CMOS Sensor عالي السرعة من الجيل الجديد",
            "الفيديو": "4K 60p مسحوب بالكامل من 6K بدون اقتطاع 10-Bit 4:2:2 Canon Log 3 / Full HD 180p",
            "نظام التركيز": "Dual Pixel CMOS AF II يتعرف على الطيور والقطارات والطائرات والسيارات",
            "مانع الاهتزاز": "مانع اهتزاز داخلي قوي 5-Axis IBIS يصل حتى 8.0 وقفات تثبيت",
            "سرعة الالتقاط": "التقاط فائق السرعة 40 إطاراً في الثانية بالشاتر الإلكتروني",
            "المنافذ والذاكرة": "منفذان لبطاقات الذاكرة Dual SD UHS-II",
            "البطارية": "بطارية LP-E6NH",
            "الوزن": "670 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 2300,
        "description": "كاميرا كانون Canon EOS R6 Mark II 24-105 f4 L الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-118",
        "stock": 10,
        "name": "Canon EOS R6 Mark III",
        "reviewsCount": 69,
        "oldPrice": 2060,
        "image": "images/prod_cam_r6_body.jpg",
        "nameEn": "Canon EOS R6 Mark III",
        "badge": "وفر $60",
        "gallery": [
            "images/prod_cam_r6_body.jpg"
        ],
        "specs": {
            "المستشعر": "24.2MP Full-Frame CMOS Sensor عالي السرعة من الجيل الجديد",
            "الفيديو": "4K 60p مسحوب بالكامل من 6K بدون اقتطاع 10-Bit 4:2:2 Canon Log 3 / Full HD 180p",
            "نظام التركيز": "Dual Pixel CMOS AF II يتعرف على الطيور والقطارات والطائرات والسيارات",
            "مانع الاهتزاز": "مانع اهتزاز داخلي قوي 5-Axis IBIS يصل حتى 8.0 وقفات تثبيت",
            "سرعة الالتقاط": "التقاط فائق السرعة 40 إطاراً في الثانية بالشاتر الإلكتروني",
            "المنافذ والذاكرة": "منفذان لبطاقات الذاكرة Dual SD UHS-II",
            "البطارية": "بطارية LP-E6NH",
            "الوزن": "670 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 2000,
        "description": "كاميرا كانون Canon EOS R6 Mark III الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-119",
        "stock": 3,
        "name": "Canon EOS R5 Mark II Body",
        "reviewsCount": 58,
        "oldPrice": 2850,
        "image": "images/cam_canon_r5ii.jpg",
        "nameEn": "Canon EOS R5 Mark II Body",
        "badge": "وفر $80",
        "gallery": [
            "images/cam_canon_r5ii.jpg"
        ],
        "specs": {
            "المستشعر": "45MP Full-Frame Back-Illuminated Stacked CMOS Sensor ثوري",
            "الفيديو": "8K 60p RAW داخلي / 4K 120p 10-Bit 4:2:2 / 4K 60p S-RAW مع Canon Log 2 و 3",
            "نظام التركيز": "Eye Control AF (التحكم بنقطة الفوكس بنظرة العين) مع معالج Accelerated Capture",
            "مانع الاهتزاز": "تثبيت بصري داخلي IBIS متطور يصل حتى 8.5 وقفات",
            "سرعة الالتقاط": "30 إطاراً في الثانية بالشاتر الإلكتروني بدون أي تعتيم Blackout-free",
            "ترقية الدقة": "تقنية التكبير بالذكاء الاصطناعي المدمجة Neural Network Upscaling حتى 179MP",
            "المنافذ والذاكرة": "منفذ بطاقة CFexpress Type B فائق السرعة + منفذ SD UHS-II",
            "الوزن": "746 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 2770,
        "description": "كاميرا كانون Canon EOS R5 Mark II Body الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-120",
        "stock": 9,
        "name": "Camera EOS RP Body Only",
        "reviewsCount": 86,
        "oldPrice": 740,
        "image": "images/prod_cam_120.jpg",
        "nameEn": "Camera EOS RP Body Only",
        "badge": "وفر $40",
        "gallery": [
            "images/prod_cam_120.jpg"
        ],
        "specs": {
            "المستشعر": "26.2MP Full-Frame CMOS Sensor",
            "الفيديو": "4K 24p و Full HD حتى 60 إطار في الثانية",
            "نظام التركيز": "Dual Pixel CMOS AF مع 4779 نقطة تركيز وتتبع العيون",
            "الشاشة": "شاشة لمسية 3.0 بوصة تدور بالكامل بزوايا مختلفة",
            "الوزن": "485 جم (هيكل متين من سبائك المغنيسيوم خفيف الوزن)",
            "المانت": "Canon RF Mount",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 700,
        "description": "كاميرا كانون Camera EOS RP Body Only الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-121",
        "stock": 6,
        "name": "Camera EOS RP 24-105 STM Kit",
        "reviewsCount": 49,
        "oldPrice": 950,
        "image": "images/prod_cam_rp_24105.jpg",
        "nameEn": "Camera EOS RP 24-105 STM Kit",
        "badge": "وفر $50",
        "gallery": [
            "images/prod_cam_rp_24105.jpg"
        ],
        "specs": {
            "المستشعر": "26.2MP Full-Frame CMOS Sensor",
            "الفيديو": "4K 24p و Full HD حتى 60 إطار في الثانية",
            "نظام التركيز": "Dual Pixel CMOS AF مع 4779 نقطة تركيز وتتبع العيون",
            "الشاشة": "شاشة لمسية 3.0 بوصة تدور بالكامل بزوايا مختلفة",
            "الوزن": "485 جم (هيكل متين من سبائك المغنيسيوم خفيف الوزن)",
            "المانت": "Canon RF Mount",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 900,
        "description": "كاميرا كانون Camera EOS RP 24-105 STM Kit الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-122",
        "stock": 4,
        "name": "Canon EOS R5 C Cinema",
        "reviewsCount": 48,
        "oldPrice": 2380,
        "image": "images/cam_canon_r5c.jpg",
        "nameEn": "Canon EOS R5 C Cinema",
        "badge": "وفر $80",
        "gallery": [
            "images/cam_canon_r5c.jpg"
        ],
        "specs": {
            "المستشعر": "45MP Full-Frame CMOS Sensor هجين فوتوغرافي وسينمائي رسمي Cinema EOS",
            "الفيديو": "8K 60p 12-Bit Cinema RAW Light داخلي / 4K 120p 10-Bit 4:2:2 بدون اقتطاع",
            "نظام التبريد": "مروحة تبريد مدمجة Active Cooling للتسجيل المستمر بدون توقف",
            "نظام التشغيل": "نظام تشغيل مزدوج: واجهة Cinema EOS للفيديو وواجهة EOS R للفوتوغراف",
            "المنافذ والذاكرة": "منفذ CFexpress Type B عالي السرعة + منفذ SD UHS-II",
            "الوزن": "770 جم",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 2300,
        "description": "كاميرا كانون Canon EOS R5 C Cinema الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "CAM-123",
        "stock": 10,
        "name": "Canon PowerShot G7X III",
        "reviewsCount": 68,
        "oldPrice": 1150,
        "image": "images/cam_canon_g7xiii.jpg",
        "nameEn": "Canon PowerShot G7X III",
        "badge": "وفر $50",
        "gallery": [
            "images/cam_canon_g7xiii.jpg"
        ],
        "specs": {
            "المستشعر": "20.1MP 1.0-inch Stacked CMOS Sensor المفضل لصناع المحتوى واليوتيوب",
            "العدسة": "عدسة كانون سريعة 24-100mm f/1.8-2.8 مع تقريب بصري 4.2x ومثبت بصري",
            "الفيديو": "4K 30p بدون كروب / Full HD 120p / دعم البث المباشر المباشر على YouTube Live",
            "الصوت": "مدخل مايكروفون خارجي 3.5 ملم لتسجيل صوت احترافي",
            "الشاشة": "شاشة لمس ترتفع 180 درجة للأعلى لتصوير السيلفي والفلوجات",
            "سرعة الالتقاط": "تصوير متتابع حتى 30 إطاراً في الثانية في وضع RAW Burst",
            "الوزن": "304 جم فقط (حجم الجيب)",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "section": "trending",
        "brand": "Canon",
        "price": 1100,
        "description": "كاميرا كانون Canon PowerShot G7X III الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "rating": 4.9,
        "category": "cameras"
    },
    {
        "id": "LEN-124",
        "stock": 8,
        "name": "Canon rf 50mm f/1.8 STM",
        "reviewsCount": 30,
        "oldPrice": null,
        "image": "images/prod_len_124.jpg",
        "nameEn": "Canon rf 50mm f/1.8 STM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_124.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 170,
        "description": "عدسة Canon rf 50mm f/1.8 STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-125",
        "stock": 10,
        "name": "Canon rf 16mm f/2.8 STM",
        "reviewsCount": 31,
        "oldPrice": null,
        "image": "images/prod_len_125.jpg",
        "nameEn": "Canon rf 16mm f/2.8 STM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_125.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 250,
        "description": "عدسة Canon rf 16mm f/2.8 STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-126",
        "stock": 7,
        "name": "Canon rf 35mm f/1.8 IS Macro STM",
        "reviewsCount": 51,
        "oldPrice": null,
        "image": "images/prod_len_126.jpg",
        "nameEn": "Canon rf 35mm f/1.8 IS Macro STM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_126.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 410,
        "description": "عدسة Canon rf 35mm f/1.8 IS Macro STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-127",
        "stock": 12,
        "name": "Canon rf 85mm f/2 IS Macro STM",
        "reviewsCount": 60,
        "oldPrice": null,
        "image": "images/prod_len_127.jpg",
        "nameEn": "Canon rf 85mm f/2 IS Macro STM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_127.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 460,
        "description": "عدسة Canon rf 85mm f/2 IS Macro STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-128",
        "stock": 7,
        "name": "Canon rf 24-105mm f/4-7.1 IS STM",
        "reviewsCount": 38,
        "oldPrice": null,
        "image": "images/prod_len_128.jpg",
        "nameEn": "Canon rf 24-105mm f/4-7.1 IS STM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_128.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 370,
        "description": "عدسة Canon rf 24-105mm f/4-7.1 IS STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-129",
        "stock": 14,
        "name": "Canon rf 24-105mm f/4L IS USM",
        "reviewsCount": 40,
        "oldPrice": null,
        "image": "images/prod_len_129.jpg",
        "nameEn": "Canon rf 24-105mm f/4L IS USM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_129.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 900,
        "description": "عدسة Canon rf 24-105mm f/4L IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-130",
        "stock": 12,
        "name": "Canon rf 24-105mm f/2.8L IS USM",
        "reviewsCount": 24,
        "oldPrice": null,
        "image": "images/prod_len_130.jpg",
        "nameEn": "Canon rf 24-105mm f/2.8L IS USM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_130.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 2420,
        "description": "عدسة Canon rf 24-105mm f/2.8L IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-131",
        "stock": 4,
        "name": "Canon rf 24-240mm f/4-6.3 IS USM",
        "reviewsCount": 39,
        "oldPrice": null,
        "image": "images/prod_len_131.jpg",
        "nameEn": "Canon rf 24-240mm f/4-6.3 IS USM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_131.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 730,
        "description": "عدسة Canon rf 24-240mm f/4-6.3 IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-132",
        "stock": 14,
        "name": "canon rf 15-35mm f/2.8L IS USM",
        "reviewsCount": 63,
        "oldPrice": null,
        "image": "images/prod_len_132.jpg",
        "nameEn": "canon rf 15-35mm f/2.8L IS USM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_132.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 1500,
        "description": "عدسة canon rf 15-35mm f/2.8L IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-133",
        "stock": 15,
        "name": "canon rf 100mm f/2.8L marco is usm",
        "reviewsCount": 63,
        "oldPrice": null,
        "image": "images/prod_len_133.jpg",
        "nameEn": "canon rf 100mm f/2.8L marco is usm",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_133.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 920,
        "description": "عدسة canon rf 100mm f/2.8L marco is usm الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-134",
        "stock": 15,
        "name": "Canon rf 24-70mm f/2.8L IS USM",
        "reviewsCount": 35,
        "oldPrice": null,
        "image": "images/prod_canon_rf_24_70mm_f2_8l_is_usm.jpg",
        "nameEn": "Canon rf 24-70mm f/2.8L IS USM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_canon_rf_24_70mm_f2_8l_is_usm.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 1520,
        "description": "عدسة Canon rf 24-70mm f/2.8L IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-135",
        "stock": 7,
        "name": "Canon rf 70-200mm f/2.8L IS USM",
        "reviewsCount": 46,
        "oldPrice": null,
        "image": "images/prod_canon_rf_70_200mm_f2_8l_is_usm.jpg",
        "nameEn": "Canon rf 70-200mm f/2.8L IS USM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_canon_rf_70_200mm_f2_8l_is_usm.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 1620,
        "description": "عدسة Canon rf 70-200mm f/2.8L IS USM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-136",
        "stock": 6,
        "name": "canon ef 50mm f/1.8 stm",
        "reviewsCount": 50,
        "oldPrice": null,
        "image": "images/prod_len_136.jpg",
        "nameEn": "canon ef 50mm f/1.8 stm",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_136.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 100,
        "description": "عدسة canon ef 50mm f/1.8 stm الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-137",
        "stock": 8,
        "name": "canon ef 50mm f/1.4 usm",
        "reviewsCount": 31,
        "oldPrice": null,
        "image": "images/prod_len_137.jpg",
        "nameEn": "canon ef 50mm f/1.4 usm",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_137.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 255,
        "description": "عدسة canon ef 50mm f/1.4 usm الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-138",
        "stock": 15,
        "name": "canon ef-s 24mm f/2.8 STM",
        "reviewsCount": 49,
        "oldPrice": null,
        "image": "images/prod_len_138.jpg",
        "nameEn": "canon ef-s 24mm f/2.8 STM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_138.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 130,
        "description": "عدسة canon ef-s 24mm f/2.8 STM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-139",
        "stock": 15,
        "name": "canon ef-s 10-18mm f/4.5-5.6 is stm",
        "reviewsCount": 54,
        "oldPrice": null,
        "image": "images/prod_len_139.jpg",
        "nameEn": "canon ef-s 10-18mm f/4.5-5.6 is stm",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_139.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 235,
        "description": "عدسة canon ef-s 10-18mm f/4.5-5.6 is stm الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-140",
        "stock": 4,
        "name": "canon ef-s 18-135mm f/3.5-5.6 Usm Nano",
        "reviewsCount": 50,
        "oldPrice": null,
        "image": "images/prod_len_140.jpg",
        "nameEn": "canon ef-s 18-135mm f/3.5-5.6 Usm Nano",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_140.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "Canon RF/EF",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Canon",
        "price": 330,
        "description": "عدسة canon ef-s 18-135mm f/3.5-5.6 Usm Nano الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-141",
        "stock": 6,
        "name": "sigma 85mm f/1.4 dg hsm art",
        "reviewsCount": 37,
        "oldPrice": null,
        "image": "images/prod_len_141.jpg",
        "nameEn": "sigma 85mm f/1.4 dg hsm art",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_141.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 800,
        "description": "عدسة sigma 85mm f/1.4 dg hsm art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-142",
        "stock": 10,
        "name": "sigma 24-70mm f/2.8 dg os hsm art",
        "reviewsCount": 31,
        "oldPrice": null,
        "image": "images/prod_len_142.jpg",
        "nameEn": "sigma 24-70mm f/2.8 dg os hsm art",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_142.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 920,
        "description": "عدسة sigma 24-70mm f/2.8 dg os hsm art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-143",
        "stock": 10,
        "name": "sigma 18-35mmf/1.8 DC HSM Art",
        "reviewsCount": 25,
        "oldPrice": null,
        "image": "images/prod_len_143.jpg",
        "nameEn": "sigma 18-35mmf/1.8 DC HSM Art",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_143.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 570,
        "description": "عدسة sigma 18-35mmf/1.8 DC HSM Art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-144",
        "stock": 12,
        "name": "sigma 35mm f/1.4 GD HSm Art",
        "reviewsCount": 49,
        "oldPrice": null,
        "image": "images/prod_len_144.jpg",
        "nameEn": "sigma 35mm f/1.4 GD HSm Art",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_144.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 650,
        "description": "عدسة sigma 35mm f/1.4 GD HSm Art الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-145",
        "stock": 6,
        "name": "sigma 24-105mm f/4 DG OS HSM",
        "reviewsCount": 67,
        "oldPrice": null,
        "image": "images/prod_len_145.jpg",
        "nameEn": "sigma 24-105mm f/4 DG OS HSM",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_145.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 650,
        "description": "عدسة sigma 24-105mm f/4 DG OS HSM الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LEN-146",
        "stock": 7,
        "name": "sigma 16mm f/1.4 DG DN",
        "reviewsCount": 45,
        "oldPrice": null,
        "image": "images/prod_len_146.jpg",
        "nameEn": "sigma 16mm f/1.4 DG DN",
        "badge": "عدسات أصلية",
        "gallery": [
            "images/prod_len_146.jpg"
        ],
        "specs": {
            "النوع": "عدسة تصوير احترافية",
            "التوافق": "متوافقة مع كاميرات الفل فريم",
            "الكفالة": "كفالة الوكيل الرسمية سنتين"
        },
        "brand": "Sigma",
        "price": 330,
        "description": "عدسة sigma 16mm f/1.4 DG DN الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "rating": 4.8,
        "category": "filters"
    },
    {
        "id": "LGT-147",
        "stock": 20,
        "name": "Godox sl60II",
        "reviewsCount": 31,
        "oldPrice": 110,
        "image": "images/prod_lgt_147.jpg",
        "nameEn": "Godox sl60II",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_147.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 100,
        "description": "معدات إضاءة استوديو احترافية Godox sl60II بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-148",
        "stock": 9,
        "name": "Godox sl60II bi",
        "reviewsCount": 64,
        "oldPrice": 150,
        "image": "images/prod_lgt_148.jpg",
        "nameEn": "Godox sl60II bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_148.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 135,
        "description": "معدات إضاءة استوديو احترافية Godox sl60II bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-149",
        "stock": 7,
        "name": "Godox SL100D",
        "reviewsCount": 67,
        "oldPrice": 160,
        "image": "images/prod_lgt_149.jpg",
        "nameEn": "Godox SL100D",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_149.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 150,
        "description": "معدات إضاءة استوديو احترافية Godox Godox SL100D بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-150",
        "stock": 11,
        "name": "Godox SL100BI",
        "reviewsCount": 61,
        "oldPrice": 180,
        "image": "images/prod_lgt_150.jpg",
        "nameEn": "Godox SL100BI",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_150.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 170,
        "description": "معدات إضاءة استوديو احترافية Godox Godox SL100BI بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-151",
        "stock": 21,
        "name": "Godox sl 150 III",
        "reviewsCount": 27,
        "oldPrice": 275,
        "image": "images/prod_lgt_151.jpg",
        "nameEn": "Godox sl 150 III",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_151.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 250,
        "description": "معدات إضاءة استوديو احترافية Godox sl 150 III بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-152",
        "stock": 8,
        "name": "Godox sl 150 III bi",
        "reviewsCount": 63,
        "oldPrice": 350,
        "image": "images/prod_lgt_152.jpg",
        "nameEn": "Godox sl 150 III bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_152.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 325,
        "description": "معدات إضاءة استوديو احترافية Godox sl 150 III bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-153",
        "stock": 8,
        "name": "Godox sl 200 III",
        "reviewsCount": 39,
        "oldPrice": 350,
        "image": "images/prod_lgt_153.jpg",
        "nameEn": "Godox sl 200 III",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_153.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 325,
        "description": "معدات إضاءة استوديو احترافية Godox sl 200 III بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-154",
        "stock": 5,
        "name": "Godox sl 200 III bi",
        "reviewsCount": 47,
        "oldPrice": 400,
        "image": "images/prod_lgt_154.jpg",
        "nameEn": "Godox sl 200 III bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_154.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 375,
        "description": "معدات إضاءة استوديو احترافية Godox sl 200 III bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-155",
        "stock": 11,
        "name": "Godox sl300 III",
        "reviewsCount": 35,
        "oldPrice": 425,
        "image": "images/prod_lgt_155.jpg",
        "nameEn": "Godox sl300 III",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_155.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 400,
        "description": "معدات إضاءة استوديو احترافية Godox sl300 III بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-156",
        "stock": 12,
        "name": "Godox sl300 III bi",
        "reviewsCount": 35,
        "oldPrice": 575,
        "image": "images/prod_lgt_156.jpg",
        "nameEn": "Godox sl300 III bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_156.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 525,
        "description": "معدات إضاءة استوديو احترافية Godox sl300 III bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-157",
        "stock": 7,
        "name": "Godox la 150",
        "reviewsCount": 83,
        "oldPrice": 250,
        "image": "images/prod_lgt_157.jpg",
        "nameEn": "Godox la 150",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_157.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 230,
        "description": "معدات إضاءة استوديو احترافية Godox la 150 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-158",
        "stock": 6,
        "name": "Godox la 200",
        "reviewsCount": 67,
        "oldPrice": 280,
        "image": "images/prod_lgt_158.jpg",
        "nameEn": "Godox la 200",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_158.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 250,
        "description": "معدات إضاءة استوديو احترافية Godox la 200 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-159",
        "stock": 11,
        "name": "Godox la 200 bi",
        "reviewsCount": 48,
        "oldPrice": 350,
        "image": "images/prod_lgt_159.jpg",
        "nameEn": "Godox la 200 bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_159.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 320,
        "description": "معدات إضاءة استوديو احترافية Godox la 200 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-160",
        "stock": 22,
        "name": "Godox la 300 bi (kit1)",
        "reviewsCount": 82,
        "oldPrice": 475,
        "image": "images/prod_lgt_160.jpg",
        "nameEn": "Godox la 300 bi (kit1)",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_160.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 425,
        "description": "معدات إضاءة استوديو احترافية Godox la 300 bi (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-161",
        "stock": 8,
        "name": "Godox la200 rgb (kit1)",
        "reviewsCount": 31,
        "oldPrice": 425,
        "image": "images/prod_lgt_161.jpg",
        "nameEn": "Godox la200 rgb (kit1)",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_161.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 375,
        "description": "معدات إضاءة استوديو احترافية Godox la200 rgb (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-162",
        "stock": 9,
        "name": "Godox la300 rgb (kit1)",
        "reviewsCount": 29,
        "oldPrice": 550,
        "image": "images/prod_lgt_162.jpg",
        "nameEn": "Godox la300 rgb (kit1)",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_162.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 500,
        "description": "معدات إضاءة استوديو احترافية Godox la300 rgb (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-163",
        "stock": 5,
        "name": "Godox la 600 bi (kit1)",
        "reviewsCount": 45,
        "oldPrice": 750,
        "image": "images/prod_lgt_163.jpg",
        "nameEn": "Godox la 600 bi (kit1)",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_163.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 675,
        "description": "معدات إضاءة استوديو احترافية Godox la 600 bi (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-164",
        "stock": 10,
        "name": "Godox la 600 rgb (kit1)",
        "reviewsCount": 67,
        "oldPrice": 900,
        "image": "images/prod_lgt_164.jpg",
        "nameEn": "Godox la 600 rgb (kit1)",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_164.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 800,
        "description": "معدات إضاءة استوديو احترافية Godox la 600 rgb (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-165",
        "stock": 10,
        "name": "Godox le 200 bi",
        "reviewsCount": 39,
        "oldPrice": 300,
        "image": "images/prod_lgt_165.jpg",
        "nameEn": "Godox le 200 bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_165.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 275,
        "description": "معدات إضاءة استوديو احترافية Godox le 200 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-166",
        "stock": 19,
        "name": "Godox le 300 bi",
        "reviewsCount": 81,
        "oldPrice": 375,
        "image": "images/prod_lgt_166.jpg",
        "nameEn": "Godox le 300 bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_166.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 325,
        "description": "معدات إضاءة استوديو احترافية Godox le 300 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-167",
        "stock": 22,
        "name": "Godox Le 600 Bi",
        "reviewsCount": 59,
        "oldPrice": 600,
        "image": "images/prod_lgt_167.jpg",
        "nameEn": "Godox Le 600 Bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_167.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 550,
        "description": "معدات إضاءة استوديو احترافية Godox Le 600 Bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-168",
        "stock": 11,
        "name": "Godox ml 100 bi",
        "reviewsCount": 49,
        "oldPrice": 225,
        "image": "images/prod_lgt_168.jpg",
        "nameEn": "Godox ml 100 bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_168.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 200,
        "description": "معدات إضاءة استوديو احترافية Godox ml 100 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-169",
        "stock": 10,
        "name": "Godox ml 100 bi (kit2)",
        "reviewsCount": 27,
        "oldPrice": 275,
        "image": "images/prod_lgt_169.jpg",
        "nameEn": "Godox ml 100 bi (kit2)",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_169.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 250,
        "description": "معدات إضاءة استوديو احترافية Godox ml 100 bi (kit2) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-170",
        "stock": 15,
        "name": "Godox ml 60 II bi",
        "reviewsCount": 82,
        "oldPrice": 180,
        "image": "images/prod_lgt_170.jpg",
        "nameEn": "Godox ml 60 II bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_170.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 160,
        "description": "معدات إضاءة استوديو احترافية Godox ml 60 II bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-171",
        "stock": 5,
        "name": "Godox ml 60 II bi (kit2)",
        "reviewsCount": 31,
        "oldPrice": 225,
        "image": "images/prod_lgt_171.jpg",
        "nameEn": "Godox ml 60 II bi (kit2)",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_171.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 200,
        "description": "معدات إضاءة استوديو احترافية Godox ml 60 II bi (kit2) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-172",
        "stock": 5,
        "name": "Godox ml 100 rgb (kit1)",
        "reviewsCount": 76,
        "oldPrice": 325,
        "image": "images/prod_lgt_172.jpg",
        "nameEn": "Godox ml 100 rgb (kit1)",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_172.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 300,
        "description": "معدات إضاءة استوديو احترافية Godox ml 100 rgb (kit1) بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-173",
        "stock": 6,
        "name": "Godox ml 150",
        "reviewsCount": 28,
        "oldPrice": 325,
        "image": "images/prod_lgt_173.jpg",
        "nameEn": "Godox ml 150",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_173.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 300,
        "description": "معدات إضاءة استوديو احترافية Godox ml 150 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-174",
        "stock": 9,
        "name": "Godox Vl 150 II",
        "reviewsCount": 68,
        "oldPrice": 400,
        "image": "images/prod_lgt_174.jpg",
        "nameEn": "Godox Vl 150 II",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_174.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 350,
        "description": "معدات إضاءة استوديو احترافية Godox Vl 150 II بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-175",
        "stock": 21,
        "name": "Godox vl 200 II",
        "reviewsCount": 69,
        "oldPrice": 450,
        "image": "images/prod_lgt_175.jpg",
        "nameEn": "Godox vl 200 II",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_175.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 400,
        "description": "معدات إضاءة استوديو احترافية Godox vl 200 II بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-176",
        "stock": 21,
        "name": "Godox VL 300 II",
        "reviewsCount": 46,
        "oldPrice": 620,
        "image": "images/prod_lgt_176.jpg",
        "nameEn": "Godox VL 300 II",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_176.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 580,
        "description": "معدات إضاءة استوديو احترافية Godox VL 300 II بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-177",
        "stock": 14,
        "name": "Godox fv 150",
        "reviewsCount": 81,
        "oldPrice": 375,
        "image": "images/prod_lgt_177.jpg",
        "nameEn": "Godox fv 150",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_177.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 325,
        "description": "معدات إضاءة استوديو احترافية Godox fv 150 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-178",
        "stock": 18,
        "name": "Godox fv 200",
        "reviewsCount": 43,
        "oldPrice": 475,
        "image": "images/prod_lgt_178.jpg",
        "nameEn": "Godox fv 200",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_178.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 425,
        "description": "معدات إضاءة استوديو احترافية Godox fv 200 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-179",
        "stock": 21,
        "name": "Godox godox lp1200bi",
        "reviewsCount": 28,
        "oldPrice": 225,
        "image": "images/prod_lgt_179.jpg",
        "nameEn": "Godox godox lp1200bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_179.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 200,
        "description": "معدات إضاءة استوديو احترافية Godox godox lp1200bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-180",
        "stock": 13,
        "name": "Godox LDX100R",
        "reviewsCount": 64,
        "oldPrice": 370,
        "image": "images/prod_lgt_180.jpg",
        "nameEn": "Godox LDX100R",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_180.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 330,
        "description": "معدات إضاءة استوديو احترافية Godox LDX100R بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-181",
        "stock": 12,
        "name": "Godox LDX50R",
        "reviewsCount": 66,
        "oldPrice": 220,
        "image": "images/prod_lgt_181.jpg",
        "nameEn": "Godox LDX50R",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_181.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 190,
        "description": "معدات إضاءة استوديو احترافية Godox LDX50R بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-182",
        "stock": 14,
        "name": "Godox godox led 1000 bi ii",
        "reviewsCount": 63,
        "oldPrice": 275,
        "image": "images/prod_lgt_182.jpg",
        "nameEn": "Godox godox led 1000 bi ii",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_182.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 250,
        "description": "معدات إضاءة استوديو احترافية Godox godox led 1000 bi ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-183",
        "stock": 12,
        "name": "Godox godox c30 bi",
        "reviewsCount": 76,
        "oldPrice": 60,
        "image": "images/prod_lgt_183.jpg",
        "nameEn": "Godox godox c30 bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_183.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 50,
        "description": "معدات إضاءة استوديو احترافية Godox godox c30 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-184",
        "stock": 12,
        "name": "Godox godox c30 r",
        "reviewsCount": 80,
        "oldPrice": 75,
        "image": "images/prod_lgt_184.jpg",
        "nameEn": "Godox godox c30 r",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_184.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 65,
        "description": "معدات إضاءة استوديو احترافية Godox godox c30 r بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-185",
        "stock": 12,
        "name": "Godox godox p 260c pro bi",
        "reviewsCount": 37,
        "oldPrice": 110,
        "image": "images/prod_lgt_185.jpg",
        "nameEn": "Godox godox p 260c pro bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_185.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 100,
        "description": "معدات إضاءة استوديو احترافية Godox godox p 260c pro bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-186",
        "stock": 15,
        "name": "Godox godox m1 rgb",
        "reviewsCount": 70,
        "oldPrice": 125,
        "image": "images/prod_lgt_186.jpg",
        "nameEn": "Godox godox m1 rgb",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_186.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 110,
        "description": "معدات إضاءة استوديو احترافية Godox godox m1 rgb بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-187",
        "stock": 12,
        "name": "Godox godox lp600r",
        "reviewsCount": 58,
        "oldPrice": 200,
        "image": "images/prod_lgt_187.jpg",
        "nameEn": "Godox godox lp600r",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_187.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 175,
        "description": "معدات إضاءة استوديو احترافية Godox godox lp600r بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-188",
        "stock": 11,
        "name": "Godox godox lp600r Kit2",
        "reviewsCount": 42,
        "oldPrice": 390,
        "image": "images/prod_lgt_188.jpg",
        "nameEn": "Godox godox lp600r Kit2",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_188.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 350,
        "description": "معدات إضاءة استوديو احترافية Godox godox lp600r Kit2 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-189",
        "stock": 14,
        "name": "Godox godox lp1200r",
        "reviewsCount": 25,
        "oldPrice": 275,
        "image": "images/prod_lgt_189.jpg",
        "nameEn": "Godox godox lp1200r",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_189.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 230,
        "description": "معدات إضاءة استوديو احترافية Godox godox lp1200r بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-190",
        "stock": 10,
        "name": "Godox godox lp1200r Kit 2",
        "reviewsCount": 67,
        "oldPrice": 575,
        "image": "images/prod_lgt_190.jpg",
        "nameEn": "Godox godox lp1200r Kit 2",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_190.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 530,
        "description": "معدات إضاءة استوديو احترافية Godox godox lp1200r Kit 2 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-191",
        "stock": 21,
        "name": "Godox godox c5r rgb",
        "reviewsCount": 40,
        "oldPrice": 99,
        "image": "images/prod_lgt_191.jpg",
        "nameEn": "Godox godox c5r rgb",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_191.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 90,
        "description": "معدات إضاءة استوديو احترافية Godox godox c5r rgb بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-192",
        "stock": 9,
        "name": "Godox qr-p90 softbox with grid",
        "reviewsCount": 35,
        "oldPrice": 125,
        "image": "images/prod_lgt_192.jpg",
        "nameEn": "Godox qr-p90 softbox with grid",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_192.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 115,
        "description": "معدات إضاءة استوديو احترافية Godox qr-p90 softbox with grid بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-193",
        "stock": 16,
        "name": "Godox qr-p120 softbox with grid",
        "reviewsCount": 50,
        "oldPrice": 149,
        "image": "images/prod_lgt_193.jpg",
        "nameEn": "Godox qr-p120 softbox with grid",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_193.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 135,
        "description": "معدات إضاءة استوديو احترافية Godox qr-p120 softbox with grid بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-194",
        "stock": 15,
        "name": "Godox godox umbralla softbox60*60",
        "reviewsCount": 72,
        "oldPrice": 40,
        "image": "images/prod_lgt_194.jpg",
        "nameEn": "Godox godox umbralla softbox60*60",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_194.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 35,
        "description": "معدات إضاءة استوديو احترافية Godox godox umbralla softbox60*60 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-195",
        "stock": 20,
        "name": "Godox 60*90",
        "reviewsCount": 33,
        "oldPrice": 45,
        "image": "images/prod_lgt_195.jpg",
        "nameEn": "Godox 60*90",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_195.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 40,
        "description": "معدات إضاءة استوديو احترافية Godox 60*90 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-196",
        "stock": 16,
        "name": "Godox 80*120",
        "reviewsCount": 73,
        "oldPrice": 55,
        "image": "images/prod_lgt_196.jpg",
        "nameEn": "Godox 80*120",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_196.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 50,
        "description": "معدات إضاءة استوديو احترافية Godox 80*120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-197",
        "stock": 8,
        "name": "Godox octa 95",
        "reviewsCount": 68,
        "oldPrice": 55,
        "image": "images/prod_lgt_197.jpg",
        "nameEn": "Godox octa 95",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_197.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 50,
        "description": "معدات إضاءة استوديو احترافية Godox octa 95 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-198",
        "stock": 11,
        "name": "Godox octa 120",
        "reviewsCount": 64,
        "oldPrice": 65,
        "image": "images/prod_lgt_198.jpg",
        "nameEn": "Godox octa 120",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_198.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 60,
        "description": "معدات إضاءة استوديو احترافية Godox octa 120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-199",
        "stock": 22,
        "name": "Godox softbox with grid سياخ 60*60",
        "reviewsCount": 83,
        "oldPrice": 30,
        "image": "images/prod_lgt_199.jpg",
        "nameEn": "Godox softbox with grid سياخ 60*60",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_199.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 25,
        "description": "معدات إضاءة استوديو احترافية Godox softbox with grid سياخ 60*60 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-200",
        "stock": 17,
        "name": "Godox 60*90",
        "reviewsCount": 55,
        "oldPrice": 35,
        "image": "images/prod_lgt_200.jpg",
        "nameEn": "Godox 60*90",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_200.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 30,
        "description": "معدات إضاءة استوديو احترافية Godox 60*90 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-201",
        "stock": 8,
        "name": "Godox 80*120",
        "reviewsCount": 45,
        "oldPrice": 40,
        "image": "images/godox_la150d_extracted.jpg",
        "nameEn": "Godox 80*120",
        "badge": "إضاءة استوديو",
        "gallery": "images/godox_la150d_extracted.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 35,
        "description": "معدات إضاءة استوديو احترافية Godox 80*120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-202",
        "stock": 21,
        "name": "Godox 35*160",
        "reviewsCount": 29,
        "oldPrice": 40,
        "image": "images/prod_lgt_202.jpg",
        "nameEn": "Godox 35*160",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_202.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 35,
        "description": "معدات إضاءة استوديو احترافية Godox 35*160 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-203",
        "stock": 21,
        "name": "Godox octa 95",
        "reviewsCount": 30,
        "oldPrice": 40,
        "image": "images/prod_lgt_203.jpg",
        "nameEn": "Godox octa 95",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_203.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 35,
        "description": "معدات إضاءة استوديو احترافية Godox octa 95 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-204",
        "stock": 16,
        "name": "Godox octa120",
        "reviewsCount": 75,
        "oldPrice": 50,
        "image": "images/prod_lgt_204.jpg",
        "nameEn": "Godox octa120",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_204.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 45,
        "description": "معدات إضاءة استوديو احترافية Godox octa120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-205",
        "stock": 14,
        "name": "Godox octa 140",
        "reviewsCount": 39,
        "oldPrice": 60,
        "image": "images/prod_lgt_205.jpg",
        "nameEn": "Godox octa 140",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_205.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 55,
        "description": "معدات إضاءة استوديو احترافية Godox octa 140 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-206",
        "stock": 11,
        "name": "Godox godox diffuser 90*120",
        "reviewsCount": 54,
        "oldPrice": null,
        "image": "images/prod_lgt_206.jpg",
        "nameEn": "Godox godox diffuser 90*120",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_206.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 15,
        "description": "معدات إضاءة استوديو احترافية Godox godox diffuser 90*120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-207",
        "stock": 21,
        "name": "Godox 100*150",
        "reviewsCount": 28,
        "oldPrice": null,
        "image": "images/prod_lgt_207.jpg",
        "nameEn": "Godox 100*150",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_207.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 20,
        "description": "معدات إضاءة استوديو احترافية Godox 100*150 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-208",
        "stock": 16,
        "name": "Godox 120*180",
        "reviewsCount": 65,
        "oldPrice": null,
        "image": "images/prod_lgt_208.jpg",
        "nameEn": "Godox 120*180",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_208.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 25,
        "description": "معدات إضاءة استوديو احترافية Godox 120*180 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-209",
        "stock": 5,
        "name": "Godox 150*200",
        "reviewsCount": 70,
        "oldPrice": null,
        "image": "images/prod_lgt_209.jpg",
        "nameEn": "Godox 150*200",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_209.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 30,
        "description": "معدات إضاءة استوديو احترافية Godox 150*200 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-210",
        "stock": 8,
        "name": "Godox 7 in 1 Rectangular Refelctor& diffuser  60*90",
        "reviewsCount": 54,
        "oldPrice": null,
        "image": "images/prod_lgt_210.jpg",
        "nameEn": "Godox 7 in 1 Rectangular Refelctor& diffuser  60*90",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_210.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 25,
        "description": "معدات إضاءة استوديو احترافية Godox 7 in 1 Rectangular Refelctor& diffuser  60*90 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-211",
        "stock": 17,
        "name": "Godox 90*120",
        "reviewsCount": 82,
        "oldPrice": 40,
        "image": "images/prod_lgt_211.jpg",
        "nameEn": "Godox 90*120",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_211.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 35,
        "description": "معدات إضاءة استوديو احترافية Godox 90*120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-212",
        "stock": 21,
        "name": "Godox 120*180",
        "reviewsCount": 59,
        "oldPrice": 50,
        "image": "images/prod_lgt_212.jpg",
        "nameEn": "Godox 120*180",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_212.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 45,
        "description": "معدات إضاءة استوديو احترافية Godox 120*180 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-213",
        "stock": 6,
        "name": "Godox 150*200",
        "reviewsCount": 38,
        "oldPrice": 60,
        "image": "images/prod_lgt_213.jpg",
        "nameEn": "Godox 150*200",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_213.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 50,
        "description": "معدات إضاءة استوديو احترافية Godox 150*200 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-214",
        "stock": 5,
        "name": "Godox 7 in 1 Circle Refelctor& diffuser  80cm",
        "reviewsCount": 30,
        "oldPrice": null,
        "image": "images/prod_lgt_214.jpg",
        "nameEn": "Godox 7 in 1 Circle Refelctor& diffuser  80cm",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_214.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 20,
        "description": "معدات إضاءة استوديو احترافية Godox 7 in 1 Circle Refelctor& diffuser  80cm بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-215",
        "stock": 11,
        "name": "Godox 7 in 1 Circle Refelctor& diffuser  110cm",
        "reviewsCount": 25,
        "oldPrice": null,
        "image": "images/prod_lgt_215.jpg",
        "nameEn": "Godox 7 in 1 Circle Refelctor& diffuser  110cm",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_215.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 25,
        "description": "معدات إضاءة استوديو احترافية Godox 7 in 1 Circle Refelctor& diffuser  110cm بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-216",
        "stock": 15,
        "name": "Godox SF4560 Flodable Scrim Flag kit",
        "reviewsCount": 25,
        "oldPrice": 149,
        "image": "images/prod_lgt_216.jpg",
        "nameEn": "Godox SF4560 Flodable Scrim Flag kit",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_216.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 135,
        "description": "معدات إضاءة استوديو احترافية Godox SF4560 Flodable Scrim Flag kit بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-217",
        "stock": 7,
        "name": "Godox SF6090 Flodable Scrim Flag kit",
        "reviewsCount": 47,
        "oldPrice": 189,
        "image": "images/prod_lgt_217.jpg",
        "nameEn": "Godox SF6090 Flodable Scrim Flag kit",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_217.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 175,
        "description": "معدات إضاءة استوديو احترافية Godox SF6090 Flodable Scrim Flag kit بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-218",
        "stock": 20,
        "name": "Godox godox ml bowens adapter",
        "reviewsCount": 70,
        "oldPrice": null,
        "image": "images/prod_lgt_218.jpg",
        "nameEn": "Godox godox ml bowens adapter",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_218.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 25,
        "description": "معدات إضاءة استوديو احترافية Godox godox ml bowens adapter بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-219",
        "stock": 16,
        "name": "Godox godox lantern cs-65t",
        "reviewsCount": 57,
        "oldPrice": 55,
        "image": "images/prod_lgt_219.jpg",
        "nameEn": "Godox godox lantern cs-65t",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_219.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 45,
        "description": "معدات إضاءة استوديو احترافية Godox godox lantern cs-65t بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-220",
        "stock": 21,
        "name": "Godox godox lantern cs-85t",
        "reviewsCount": 76,
        "oldPrice": 65,
        "image": "images/prod_lgt_220.jpg",
        "nameEn": "Godox godox lantern cs-85t",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_220.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 55,
        "description": "معدات إضاءة استوديو احترافية Godox godox lantern cs-85t بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-221",
        "stock": 11,
        "name": "Godox godox lantern cs-65t with cover",
        "reviewsCount": 51,
        "oldPrice": 70,
        "image": "images/prod_lgt_221.jpg",
        "nameEn": "Godox godox lantern cs-65t with cover",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_221.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 65,
        "description": "معدات إضاءة استوديو احترافية Godox godox lantern cs-65t with cover بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-222",
        "stock": 12,
        "name": "Godox godox lantern cs-85t with cover",
        "reviewsCount": 26,
        "oldPrice": 85,
        "image": "images/prod_lgt_222.jpg",
        "nameEn": "Godox godox lantern cs-85t with cover",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_222.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 75,
        "description": "معدات إضاءة استوديو احترافية Godox godox lantern cs-85t with cover بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-223",
        "stock": 15,
        "name": "Godox godox qr-p60t with grid",
        "reviewsCount": 76,
        "oldPrice": 99,
        "image": "images/prod_lgt_223.jpg",
        "nameEn": "Godox godox qr-p60t with grid",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_223.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 85,
        "description": "معدات إضاءة استوديو احترافية Godox godox qr-p60t with grid بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-224",
        "stock": 10,
        "name": "Godox GODOX LSD40 Shooting Tent",
        "reviewsCount": 73,
        "oldPrice": 55,
        "image": "images/prod_lgt_224.jpg",
        "nameEn": "Godox GODOX LSD40 Shooting Tent",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_224.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 45,
        "description": "معدات إضاءة استوديو احترافية Godox GODOX LSD40 Shooting Tent بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-225",
        "stock": 11,
        "name": "Godox GODOX LSD60 Shooting Tent",
        "reviewsCount": 31,
        "oldPrice": 70,
        "image": "images/prod_lgt_225.jpg",
        "nameEn": "Godox GODOX LSD60 Shooting Tent",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_225.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 60,
        "description": "معدات إضاءة استوديو احترافية Godox GODOX LSD60 Shooting Tent بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-226",
        "stock": 20,
        "name": "Godox GODOX LSD80 Shooting Tent",
        "reviewsCount": 66,
        "oldPrice": 85,
        "image": "images/prod_lgt_226.jpg",
        "nameEn": "Godox GODOX LSD80 Shooting Tent",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_226.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 75,
        "description": "معدات إضاءة استوديو احترافية Godox GODOX LSD80 Shooting Tent بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-227",
        "stock": 22,
        "name": "Godox godox vb26a/vb26 for v1",
        "reviewsCount": 65,
        "oldPrice": 49,
        "image": "images/prod_lgt_227.jpg",
        "nameEn": "Godox godox vb26a/vb26 for v1",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_227.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 45,
        "description": "معدات إضاءة استوديو احترافية Godox godox vb26a/vb26 for v1 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-228",
        "stock": 8,
        "name": "Godox godox x3 trigger",
        "reviewsCount": 53,
        "oldPrice": 99,
        "image": "images/prod_lgt_228.jpg",
        "nameEn": "Godox godox x3 trigger",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_228.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 90,
        "description": "معدات إضاءة استوديو احترافية Godox godox x3 trigger بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-229",
        "stock": 9,
        "name": "Godox x-pro",
        "reviewsCount": 45,
        "oldPrice": 69,
        "image": "images/prod_lgt_229.jpg",
        "nameEn": "Godox x-pro",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_229.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 65,
        "description": "معدات إضاءة استوديو احترافية Godox x-pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-230",
        "stock": 15,
        "name": "Godox x-pro ii",
        "reviewsCount": 28,
        "oldPrice": 85,
        "image": "images/prod_lgt_230.jpg",
        "nameEn": "Godox x-pro ii",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_230.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 75,
        "description": "معدات إضاءة استوديو احترافية Godox x-pro ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-231",
        "stock": 15,
        "name": "Godox x2t",
        "reviewsCount": 58,
        "oldPrice": 55,
        "image": "images/prod_lgt_231.jpg",
        "nameEn": "Godox x2t",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_231.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 50,
        "description": "معدات إضاءة استوديو احترافية Godox x2t بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-232",
        "stock": 14,
        "name": "Godox at-04",
        "reviewsCount": 35,
        "oldPrice": null,
        "image": "images/prod_lgt_232.jpg",
        "nameEn": "Godox at-04",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_232.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 20,
        "description": "معدات إضاءة استوديو احترافية Godox at-04 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-233",
        "stock": 9,
        "name": "Godox Ad 200 pro ii",
        "reviewsCount": 34,
        "oldPrice": 375,
        "image": "images/prod_lgt_233.jpg",
        "nameEn": "Godox Ad 200 pro ii",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_233.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 325,
        "description": "معدات إضاءة استوديو احترافية Godox Ad 200 pro ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-234",
        "stock": 13,
        "name": "Godox Ad 300 pro",
        "reviewsCount": 51,
        "oldPrice": 375,
        "image": "images/prod_lgt_234.jpg",
        "nameEn": "Godox Ad 300 pro",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_234.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 350,
        "description": "معدات إضاءة استوديو احترافية Godox Ad 300 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-235",
        "stock": 21,
        "name": "Godox Ad 400 pro",
        "reviewsCount": 61,
        "oldPrice": 500,
        "image": "images/prod_lgt_235.jpg",
        "nameEn": "Godox Ad 400 pro",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_235.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 470,
        "description": "معدات إضاءة استوديو احترافية Godox Ad 400 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-236",
        "stock": 20,
        "name": "Godox Ad 400 pro ii",
        "reviewsCount": 37,
        "oldPrice": 550,
        "image": "images/prod_lgt_236.jpg",
        "nameEn": "Godox Ad 400 pro ii",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_236.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 500,
        "description": "معدات إضاءة استوديو احترافية Godox Ad 400 pro ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-237",
        "stock": 12,
        "name": "Godox ad 600 bm ii",
        "reviewsCount": 35,
        "oldPrice": 550,
        "image": "images/prod_lgt_237.jpg",
        "nameEn": "Godox ad 600 bm ii",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_237.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 500,
        "description": "معدات إضاءة استوديو احترافية Godox ad 600 bm ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-238",
        "stock": 8,
        "name": "Godox ad600 pro ii",
        "reviewsCount": 75,
        "oldPrice": 660,
        "image": "images/prod_lgt_238.jpg",
        "nameEn": "Godox ad600 pro ii",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_238.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 600,
        "description": "معدات إضاءة استوديو احترافية Godox ad600 pro ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-239",
        "stock": 16,
        "name": "Godox v850 ii",
        "reviewsCount": 63,
        "oldPrice": 140,
        "image": "images/prod_lgt_239.jpg",
        "nameEn": "Godox v850 ii",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_239.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 130,
        "description": "معدات إضاءة استوديو احترافية Godox v850 ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-240",
        "stock": 15,
        "name": "Godox v860 iii",
        "reviewsCount": 63,
        "oldPrice": 179,
        "image": "images/prod_lgt_240.jpg",
        "nameEn": "Godox v860 iii",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_240.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 165,
        "description": "معدات إضاءة استوديو احترافية Godox v860 iii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-241",
        "stock": 6,
        "name": "Godox v1 pro",
        "reviewsCount": 77,
        "oldPrice": 250,
        "image": "images/prod_lgt_241.jpg",
        "nameEn": "Godox v1 pro",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_241.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 225,
        "description": "معدات إضاءة استوديو احترافية Godox v1 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-242",
        "stock": 18,
        "name": "Godox qt 400 iii m",
        "reviewsCount": 70,
        "oldPrice": 375,
        "image": "images/prod_lgt_242.jpg",
        "nameEn": "Godox qt 400 iii m",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_242.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 330,
        "description": "معدات إضاءة استوديو احترافية Godox qt 400 iii m بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-243",
        "stock": 5,
        "name": "Godox qt 600 iii m",
        "reviewsCount": 36,
        "oldPrice": 475,
        "image": "images/prod_lgt_243.jpg",
        "nameEn": "Godox qt 600 iii m",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_243.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 425,
        "description": "معدات إضاءة استوديو احترافية Godox qt 600 iii m بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-244",
        "stock": 15,
        "name": "Godox DP 400 IIIV",
        "reviewsCount": 64,
        "oldPrice": 190,
        "image": "images/prod_lgt_244.jpg",
        "nameEn": "Godox DP 400 IIIV",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_244.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 180,
        "description": "معدات إضاءة استوديو احترافية Godox DP 400 IIIV بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-245",
        "stock": 22,
        "name": "Godox DP 600 IIIV",
        "reviewsCount": 34,
        "oldPrice": 220,
        "image": "images/prod_lgt_245.jpg",
        "nameEn": "Godox DP 600 IIIV",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_245.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 210,
        "description": "معدات إضاءة استوديو احترافية Godox DP 600 IIIV بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-246",
        "stock": 9,
        "name": "Godox DP 800 IIIV",
        "reviewsCount": 46,
        "oldPrice": 280,
        "image": "images/prod_lgt_246.jpg",
        "nameEn": "Godox DP 800 IIIV",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_246.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 260,
        "description": "معدات إضاءة استوديو احترافية Godox DP 800 IIIV بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-247",
        "stock": 10,
        "name": "Godox DP 1000 IIIV",
        "reviewsCount": 53,
        "oldPrice": 330,
        "image": "images/prod_lgt_247.jpg",
        "nameEn": "Godox DP 1000 IIIV",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_247.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 310,
        "description": "معدات إضاءة استوديو احترافية Godox DP 1000 IIIV بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-248",
        "stock": 16,
        "name": "Godox SK300 II-V",
        "reviewsCount": 52,
        "oldPrice": 129,
        "image": "images/prod_lgt_248.jpg",
        "nameEn": "Godox SK300 II-V",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_248.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 120,
        "description": "معدات إضاءة استوديو احترافية Godox SK300 II-V بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-249",
        "stock": 14,
        "name": "Godox SK400 II-V",
        "reviewsCount": 32,
        "oldPrice": 159,
        "image": "images/prod_lgt_249.jpg",
        "nameEn": "Godox SK400 II-V",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_249.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 140,
        "description": "معدات إضاءة استوديو احترافية Godox SK400 II-V بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-250",
        "stock": 8,
        "name": "Godox SK300 III-V",
        "reviewsCount": 83,
        "oldPrice": 139,
        "image": "images/prod_lgt_250.jpg",
        "nameEn": "Godox SK300 III-V",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_250.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 125,
        "description": "معدات إضاءة استوديو احترافية Godox SK300 III-V بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-251",
        "stock": 12,
        "name": "Godox SK400 III-V",
        "reviewsCount": 31,
        "oldPrice": 169,
        "image": "images/prod_lgt_251.jpg",
        "nameEn": "Godox SK400 III-V",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_251.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 145,
        "description": "معدات إضاءة استوديو احترافية Godox SK400 III-V بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-252",
        "stock": 16,
        "name": "Godox im30/im22/im20 mini flash",
        "reviewsCount": 65,
        "oldPrice": 35,
        "image": "images/prod_lgt_252.jpg",
        "nameEn": "Godox im30/im22/im20 mini flash",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_252.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 30,
        "description": "معدات إضاءة استوديو احترافية Godox im30/im22/im20 mini flash بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-253",
        "stock": 14,
        "name": "Godox ia 32 mini flash",
        "reviewsCount": 39,
        "oldPrice": 60,
        "image": "images/prod_lgt_253.jpg",
        "nameEn": "Godox ia 32 mini flash",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_253.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 50,
        "description": "معدات إضاءة استوديو احترافية Godox ia 32 mini flash بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-254",
        "stock": 12,
        "name": "Godox tt85 ii flash",
        "reviewsCount": 67,
        "oldPrice": 125,
        "image": "images/prod_lgt_254.jpg",
        "nameEn": "Godox tt85 ii flash",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_254.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 115,
        "description": "معدات إضاءة استوديو احترافية Godox tt85 ii flash بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-255",
        "stock": 9,
        "name": "Godox tt 600",
        "reviewsCount": 43,
        "oldPrice": 85,
        "image": "images/prod_lgt_255.jpg",
        "nameEn": "Godox tt 600",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_255.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 80,
        "description": "معدات إضاءة استوديو احترافية Godox tt 600 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-256",
        "stock": 7,
        "name": "Godox v100",
        "reviewsCount": 39,
        "oldPrice": 299,
        "image": "images/prod_lgt_256.jpg",
        "nameEn": "Godox v100",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_256.jpg",
            "images/prod_lgt_256_angle2.jpg",
            "images/prod_lgt_256_angle3.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 260,
        "description": "معدات إضاءة استوديو احترافية Godox v100 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-257",
        "stock": 8,
        "name": "Godox tt520 iii",
        "reviewsCount": 66,
        "oldPrice": 50,
        "image": "images/prod_lgt_257.jpg",
        "nameEn": "Godox tt520 iii",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_257.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 45,
        "description": "معدات إضاءة استوديو احترافية Godox tt520 iii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-258",
        "stock": 20,
        "name": "Godox tt560 ii",
        "reviewsCount": 83,
        "oldPrice": 65,
        "image": "images/prod_lgt_258.jpg",
        "nameEn": "Godox tt560 ii",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_258.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 60,
        "description": "معدات إضاءة استوديو احترافية Godox tt560 ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-259",
        "stock": 7,
        "name": "Godox V480",
        "reviewsCount": 68,
        "oldPrice": 149,
        "image": "images/prod_lgt_259.jpg",
        "nameEn": "Godox V480",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_259.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 140,
        "description": "معدات إضاءة استوديو احترافية Godox V480 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-260",
        "stock": 12,
        "name": "Godox ML-150 II Macro ring Flash",
        "reviewsCount": 25,
        "oldPrice": 85,
        "image": "images/prod_lgt_260.jpg",
        "nameEn": "Godox ML-150 II Macro ring Flash",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_260.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 75,
        "description": "معدات إضاءة استوديو احترافية Godox ML-150 II Macro ring Flash بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-261",
        "stock": 22,
        "name": "Godox MF-R76 Macro Ring Flash",
        "reviewsCount": 47,
        "oldPrice": 150,
        "image": "images/prod_lgt_261.jpg",
        "nameEn": "Godox MF-R76 Macro Ring Flash",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_261.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 135,
        "description": "معدات إضاءة استوديو احترافية Godox MF-R76 Macro Ring Flash بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-262",
        "stock": 11,
        "name": "Godox MF12 Dental Macro Flash Kit with Trigger Xpro",
        "reviewsCount": 49,
        "oldPrice": 330,
        "image": "images/prod_lgt_262.jpg",
        "nameEn": "Godox MF12 Dental Macro Flash Kit with Trigger Xpro",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_262.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 300,
        "description": "معدات إضاءة استوديو احترافية Godox MF12 Dental Macro Flash Kit with Trigger Xpro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-263",
        "stock": 18,
        "name": "Godox Flash Tube for AD600 pro",
        "reviewsCount": 45,
        "oldPrice": 135,
        "image": "images/prod_lgt_263.jpg",
        "nameEn": "Godox Flash Tube for AD600 pro",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_263.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 120,
        "description": "معدات إضاءة استوديو احترافية Godox Flash Tube for AD600 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-264",
        "stock": 6,
        "name": "Godox Flash Tube for AD400 pro",
        "reviewsCount": 68,
        "oldPrice": 125,
        "image": "images/prod_lgt_264.jpg",
        "nameEn": "Godox Flash Tube for AD400 pro",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_264.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 110,
        "description": "معدات إضاءة استوديو احترافية Godox Flash Tube for AD400 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-265",
        "stock": 20,
        "name": "Godox Ad400 Pro charger",
        "reviewsCount": 38,
        "oldPrice": 45,
        "image": "images/prod_lgt_265.jpg",
        "nameEn": "Godox Ad400 Pro charger",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_265.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 40,
        "description": "معدات إضاءة استوديو احترافية Godox Ad400 Pro charger بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-266",
        "stock": 18,
        "name": "Godox AD600 pro Charger",
        "reviewsCount": 82,
        "oldPrice": 60,
        "image": "images/prod_lgt_266.jpg",
        "nameEn": "Godox AD600 pro Charger",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_266.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 55,
        "description": "معدات إضاءة استوديو احترافية Godox AD600 pro Charger بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-267",
        "stock": 6,
        "name": "Godox VB18 Battery for Godox V850 V860 V860II",
        "reviewsCount": 42,
        "oldPrice": 35,
        "image": "images/prod_lgt_267.jpg",
        "nameEn": "Godox VB18 Battery for Godox V850 V860 V860II",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_267.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 30,
        "description": "معدات إضاءة استوديو احترافية Godox VB18 Battery for Godox V850 V860 V860II بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-268",
        "stock": 17,
        "name": "Godox WB29 Battery For Godox Ad200 pro",
        "reviewsCount": 78,
        "oldPrice": 65,
        "image": "images/prod_lgt_268.jpg",
        "nameEn": "Godox WB29 Battery For Godox Ad200 pro",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_268.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 60,
        "description": "معدات إضاءة استوديو احترافية Godox WB29 Battery For Godox Ad200 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-269",
        "stock": 6,
        "name": "Godox WB400P Battery For Godox Ad400 pro",
        "reviewsCount": 63,
        "oldPrice": 160,
        "image": "images/prod_lgt_269.jpg",
        "nameEn": "Godox WB400P Battery For Godox Ad400 pro",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_269.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 140,
        "description": "معدات إضاءة استوديو احترافية Godox WB400P Battery For Godox Ad400 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-270",
        "stock": 21,
        "name": "Godox AD-FT200 Bare Bulb for ad200 pro",
        "reviewsCount": 42,
        "oldPrice": 50,
        "image": "images/prod_lgt_270.jpg",
        "nameEn": "Godox AD-FT200 Bare Bulb for ad200 pro",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_270.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 45,
        "description": "معدات إضاءة استوديو احترافية Godox AD-FT200 Bare Bulb for ad200 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-271",
        "stock": 7,
        "name": "Godox WB26 battery for Godox AD600 pro",
        "reviewsCount": 34,
        "oldPrice": 175,
        "image": "images/prod_lgt_271.jpg",
        "nameEn": "Godox WB26 battery for Godox AD600 pro",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_271.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 150,
        "description": "معدات إضاءة استوديو احترافية Godox WB26 battery for Godox AD600 pro بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-272",
        "stock": 19,
        "name": "Godox AK-R1 Round Flash Accessories Kit",
        "reviewsCount": 49,
        "oldPrice": 65,
        "image": "images/prod_lgt_272.jpg",
        "nameEn": "Godox AK-R1 Round Flash Accessories Kit",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_272.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 55,
        "description": "معدات إضاءة استوديو احترافية Godox AK-R1 Round Flash Accessories Kit بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-273",
        "stock": 15,
        "name": "Godox AK-R21 Projection Attachment",
        "reviewsCount": 50,
        "oldPrice": 85,
        "image": "images/prod_lgt_273.jpg",
        "nameEn": "Godox AK-R21 Projection Attachment",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_273.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 75,
        "description": "معدات إضاءة استوديو احترافية Godox AK-R21 Projection Attachment بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-274",
        "stock": 14,
        "name": "Godox SA-17 Bownes Mount Adapter with SA-P+SA-06+SA-001-09+SA-10",
        "reviewsCount": 32,
        "oldPrice": 190,
        "image": "images/prod_lgt_274.jpg",
        "nameEn": "Godox SA-17 Bownes Mount Adapter with SA-P+SA-06+SA-001-09+SA-10",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_274.jpg",
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 170,
        "description": "معدات إضاءة استوديو احترافية Godox SA-17 Bownes Mount Adapter with SA-P+SA-06+SA-001-09+SA-10 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-275",
        "stock": 10,
        "name": "Godox ML-CD15 diffuser Dome",
        "reviewsCount": 71,
        "oldPrice": null,
        "image": "images/prod_lgt_275.jpg",
        "nameEn": "Godox ML-CD15 diffuser Dome",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_275.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 25,
        "description": "معدات إضاءة استوديو احترافية Godox ML-CD15 diffuser Dome بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-276",
        "stock": 5,
        "name": "Godox Barndoor BD-04 kit with Grid & color Gel",
        "reviewsCount": 49,
        "oldPrice": null,
        "image": "images/prod_lgt_276.jpg",
        "nameEn": "Godox Barndoor BD-04 kit with Grid & color Gel",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_276.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 25,
        "description": "معدات إضاءة استوديو احترافية Godox Godox Barndoor BD-04 kit with Grid & color Gel بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-277",
        "stock": 17,
        "name": "Godox Carrying bag with wheels CB-51",
        "reviewsCount": 43,
        "oldPrice": 90,
        "image": "images/prod_lowepro_protactic.jpg",
        "nameEn": "Godox Carrying bag with wheels CB-51",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lowepro_protactic.jpg",
            "images/prod_lowepro_protactic_angle2.jpg",
            "images/prod_lowepro_protactic_angle3.jpg",
            "images/prod_lowepro_protactic_angle4.jpg"
        ],
        "specs": {
            "الشركة": "Godox",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Godox",
        "price": 80,
        "description": "معدات إضاءة استوديو احترافية Godox Godox Carrying bag with wheels CB-51 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-278",
        "stock": 22,
        "name": "Colbor CL60 Bi",
        "reviewsCount": 73,
        "oldPrice": 140,
        "image": "images/prod_lgt_278.jpg",
        "nameEn": "Colbor CL60 Bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_278.jpg",
        "specs": {
            "الشركة": "Colbor",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Colbor",
        "price": 120,
        "description": "معدات إضاءة استوديو احترافية Colbor CL60 Bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-279",
        "stock": 21,
        "name": "Colbor CL60R RGB",
        "reviewsCount": 50,
        "oldPrice": 180,
        "image": "images/prod_lgt_279.jpg",
        "nameEn": "Colbor CL60R RGB",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_279.jpg",
        "specs": {
            "الشركة": "Colbor",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Colbor",
        "price": 160,
        "description": "معدات إضاءة استوديو احترافية Colbor CL60R RGB بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-280",
        "stock": 17,
        "name": "Nanlite forza720 bi",
        "reviewsCount": 43,
        "oldPrice": 1399,
        "image": "images/prod_lgt_280.jpg",
        "nameEn": "Nanlite forza720 bi",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_280.jpg"
        ],
        "specs": {
            "الشركة": "Nanlite",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Nanlite",
        "price": 1300,
        "description": "معدات إضاءة استوديو احترافية Nanlite forza720 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-281",
        "stock": 6,
        "name": "Nanlite forza500 bi ii",
        "reviewsCount": 79,
        "oldPrice": 1150,
        "image": "images/prod_lgt_281.jpg",
        "nameEn": "Nanlite forza500 bi ii",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_281.jpg"
        ],
        "specs": {
            "الشركة": "Nanlite",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Nanlite",
        "price": 1050,
        "description": "معدات إضاءة استوديو احترافية Nanlite forza500 bi ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-282",
        "stock": 20,
        "name": "Nanlite forza 300 bi ii",
        "reviewsCount": 35,
        "oldPrice": 925,
        "image": "images/prod_lgt_282.jpg",
        "nameEn": "Nanlite forza 300 bi ii",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_282.jpg"
        ],
        "specs": {
            "الشركة": "Nanlite",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Nanlite",
        "price": 850,
        "description": "معدات إضاءة استوديو احترافية Nanlite forza 300 bi ii بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-283",
        "stock": 21,
        "name": "Nanlite forza 150 bi",
        "reviewsCount": 56,
        "oldPrice": 440,
        "image": "images/prod_lgt_283.jpg",
        "nameEn": "Nanlite forza 150 bi",
        "badge": "إضاءة استوديو",
        "gallery": [
            "images/prod_lgt_283.jpg"
        ],
        "specs": {
            "الشركة": "Nanlite",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Nanlite",
        "price": 400,
        "description": "معدات إضاءة استوديو احترافية Nanlite forza 150 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-284",
        "stock": 5,
        "name": "Nanlite fc 500 bi",
        "reviewsCount": 42,
        "oldPrice": 590,
        "image": "images/prod_lgt_284.jpg",
        "nameEn": "Nanlite fc 500 bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_284.jpg",
        "specs": {
            "الشركة": "Nanlite",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Nanlite",
        "price": 530,
        "description": "معدات إضاءة استوديو احترافية Nanlite fc 500 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-285",
        "stock": 6,
        "name": "Nanlite fc 300 bi",
        "reviewsCount": 50,
        "oldPrice": 450,
        "image": "images/prod_lgt_285.jpg",
        "nameEn": "Nanlite fc 300 bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_285.jpg",
        "specs": {
            "الشركة": "Nanlite",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Nanlite",
        "price": 400,
        "description": "معدات إضاءة استوديو احترافية Nanlite fc 300 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-286",
        "stock": 17,
        "name": "Nanlite fc 120 bi",
        "reviewsCount": 75,
        "oldPrice": 260,
        "image": "images/prod_lgt_286.jpg",
        "nameEn": "Nanlite fc 120 bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_286.jpg",
        "specs": {
            "الشركة": "Nanlite",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Nanlite",
        "price": 230,
        "description": "معدات إضاءة استوديو احترافية Nanlite fc 120 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-287",
        "stock": 14,
        "name": "Nanlite fc 60 bi",
        "reviewsCount": 60,
        "oldPrice": 170,
        "image": "images/prod_lgt_287.jpg",
        "nameEn": "Nanlite fc 60 bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_287.jpg",
        "specs": {
            "الشركة": "Nanlite",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Nanlite",
        "price": 145,
        "description": "معدات إضاءة استوديو احترافية Nanlite fc 60 bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-288",
        "stock": 5,
        "name": "Nanlite fc500c",
        "reviewsCount": 44,
        "oldPrice": 749,
        "image": "images/prod_lgt_288.jpg",
        "nameEn": "Nanlite fc500c",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_288.jpg",
        "specs": {
            "الشركة": "Nanlite",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Nanlite",
        "price": 675,
        "description": "معدات إضاءة استوديو احترافية Nanlite fc500c بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-289",
        "stock": 21,
        "name": "Nanlite fc power controller/fc500/300",
        "reviewsCount": 42,
        "oldPrice": 349,
        "image": "images/prod_lgt_289.jpg",
        "nameEn": "Nanlite fc power controller/fc500/300",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_289.jpg",
        "specs": {
            "الشركة": "Nanlite",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Nanlite",
        "price": 300,
        "description": "معدات إضاءة استوديو احترافية Nanlite fc power controller/fc500/300 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-290",
        "stock": 10,
        "name": "Aputure amaran200ds",
        "reviewsCount": 67,
        "oldPrice": 350,
        "image": "images/prod_lgt_290.jpg",
        "nameEn": "Aputure amaran200ds",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_290.jpg",
        "specs": {
            "الشركة": "Aputure",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Aputure",
        "price": 325,
        "description": "معدات إضاءة استوديو احترافية Aputure amaran200ds بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-291",
        "stock": 7,
        "name": "Aputure amaran200xs bi",
        "reviewsCount": 39,
        "oldPrice": 400,
        "image": "images/prod_lgt_291.jpg",
        "nameEn": "Aputure amaran200xs bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_291.jpg",
        "specs": {
            "الشركة": "Aputure",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Aputure",
        "price": 375,
        "description": "معدات إضاءة استوديو احترافية Aputure amaran200xs bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-292",
        "stock": 14,
        "name": "Aputure amaran100ds",
        "reviewsCount": 26,
        "oldPrice": 200,
        "image": "images/prod_lgt_292.jpg",
        "nameEn": "Aputure amaran100ds",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_292.jpg",
        "specs": {
            "الشركة": "Aputure",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Aputure",
        "price": 175,
        "description": "معدات إضاءة استوديو احترافية Aputure amaran100ds بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-293",
        "stock": 12,
        "name": "Aputure amaran 100xs bi",
        "reviewsCount": 31,
        "oldPrice": 250,
        "image": "images/prod_lgt_293.jpg",
        "nameEn": "Aputure amaran 100xs bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_293.jpg",
        "specs": {
            "الشركة": "Aputure",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Aputure",
        "price": 225,
        "description": "معدات إضاءة استوديو احترافية Aputure amaran 100xs bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-294",
        "stock": 21,
        "name": "Aputure amaran 150 c",
        "reviewsCount": 60,
        "oldPrice": 375,
        "image": "images/prod_lgt_294.jpg",
        "nameEn": "Aputure amaran 150 c",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_294.jpg",
        "specs": {
            "الشركة": "Aputure",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Aputure",
        "price": 325,
        "description": "معدات إضاءة استوديو احترافية Aputure amaran 150 c بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-295",
        "stock": 10,
        "name": "Aputure amaran 300 c",
        "reviewsCount": 27,
        "oldPrice": 550,
        "image": "images/prod_lgt_295.jpg",
        "nameEn": "Aputure amaran 300 c",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_295.jpg",
        "specs": {
            "الشركة": "Aputure",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Aputure",
        "price": 475,
        "description": "معدات إضاءة استوديو احترافية Aputure amaran 300 c بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-296",
        "stock": 5,
        "name": "Aputure amaran Ray 360c",
        "reviewsCount": 51,
        "oldPrice": 580,
        "image": "images/prod_lgt_296.jpg",
        "nameEn": "Aputure amaran Ray 360c",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_296.jpg",
        "specs": {
            "الشركة": "Aputure",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Aputure",
        "price": 500,
        "description": "معدات إضاءة استوديو احترافية Aputure amaran Ray 360c بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-297",
        "stock": 11,
        "name": "Aputure amaran Ray 660c",
        "reviewsCount": 51,
        "oldPrice": 899,
        "image": "images/prod_lgt_297.jpg",
        "nameEn": "Aputure amaran Ray 660c",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_297.jpg",
        "specs": {
            "الشركة": "Aputure",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "Aputure",
        "price": 800,
        "description": "معدات إضاءة استوديو احترافية Aputure amaran Ray 660c بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-298",
        "stock": 14,
        "name": "K&F Concept Pl-60b bi",
        "reviewsCount": 60,
        "oldPrice": 140,
        "image": "images/prod_lgt_298.png",
        "nameEn": "K&F Concept Pl-60b bi",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_298.png",
        "specs": {
            "الشركة": "K&F Concept",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "K&F Concept",
        "price": 120,
        "description": "معدات إضاءة استوديو احترافية K&F Concept Pl-60b bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "LGT-299",
        "stock": 5,
        "name": "K&F Concept pl-60b bi with",
        "reviewsCount": 82,
        "oldPrice": 175,
        "image": "images/prod_lgt_299.png",
        "nameEn": "K&F Concept pl-60b bi with",
        "badge": "إضاءة استوديو",
        "gallery": "images/prod_lgt_299.png",
        "specs": {
            "الشركة": "K&F Concept",
            "التصنيف": "إضاءات واستوديو احترافي",
            "الكفالة": "كفالة رسمية سنة"
        },
        "brand": "K&F Concept",
        "price": 155,
        "description": "معدات إضاءة استوديو احترافية K&F Concept pl-60b bi with بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "rating": 4.8,
        "category": "lighting"
    },
    {
        "id": "ACC-329",
        "stock": 6,
        "name": "SmallRig Cage Kit for Sony ZV-E10 II 4867",
        "reviewsCount": 59,
        "oldPrice": null,
        "image": "images/prod_acc_329.jpg",
        "nameEn": "SmallRig Cage Kit for Sony ZV-E10 II 4867",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_329.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 55,
        "description": "منتج SmallRig الأصلي SmallRig Cage Kit for Sony ZV-E10 II 4867 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-330",
        "stock": 18,
        "name": "SmallRig HawkLock Quick Release Advanced Cage Kit for Sony a7R V",
        "reviewsCount": 70,
        "oldPrice": null,
        "image": "images/prod_acc_330.jpg",
        "nameEn": "SmallRig HawkLock Quick Release Advanced Cage Kit for Sony a7R V",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_330.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 230,
        "description": "منتج SmallRig الأصلي \"SmallRig HawkLock Quick Release Advanced Cage Kit for Sony a7R V بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-331",
        "stock": 9,
        "name": "SmallRig Advanced Cage Kit with Battery Plate for Sony FX2 5590",
        "reviewsCount": 79,
        "oldPrice": null,
        "image": "images/prod_acc_331.jpg",
        "nameEn": "SmallRig Advanced Cage Kit with Battery Plate for Sony FX2 5590",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_331.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 200,
        "description": "منتج SmallRig الأصلي SmallRig Advanced Cage Kit with Battery Plate for Sony FX2 5590 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "chargers_batteries"
    },
    {
        "id": "ACC-332",
        "stock": 10,
        "name": "SmallRig Sunhood for Sony a7S III/a7C/ZV-1/FX3 Camera 3206",
        "reviewsCount": 37,
        "oldPrice": null,
        "image": "images/prod_acc_332.jpg",
        "nameEn": "SmallRig Sunhood for Sony a7S III/a7C/ZV-1/FX3 Camera 3206",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_332.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 25,
        "description": "منتج SmallRig الأصلي SmallRig Sunhood for Sony a7S III/a7C/ZV-1/FX3 Camera 3206 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-333",
        "stock": 11,
        "name": "SmallRig Arca-Type Quick Release Phone Support for DJI RS 4 Mini/RS 3 Mini 5338",
        "reviewsCount": 48,
        "oldPrice": null,
        "image": "images/prod_acc_333.jpg",
        "nameEn": "SmallRig Arca-Type Quick Release Phone Support for DJI RS 4 Mini/RS 3 Mini 5338",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_333.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 25,
        "description": "منتج SmallRig الأصلي SmallRig Arca-Type Quick Release Phone Support for DJI RS 4 Mini/RS 3 Mini 5338 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-334",
        "stock": 9,
        "name": "SmallRig Monitor Mounting Support with NATO Clamp for DJI RS 2 / RSC 2 / RS 3 / RS 3 Pro /RS 3 Mini / RS 4 / RS 4 Pro / RS 4 Mini 3026B",
        "reviewsCount": 42,
        "oldPrice": null,
        "image": "images/prod_acc_334.jpg",
        "nameEn": "SmallRig Monitor Mounting Support with NATO Clamp for DJI RS 2 / RSC 2 / RS 3 / RS 3 Pro /RS 3 Mini / RS 4 / RS 4 Pro / RS 4 Mini 3026B",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_334.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 70,
        "description": "منتج SmallRig الأصلي SmallRig Monitor Mounting Support with NATO Clamp for DJI RS 2 / RSC 2 / RS 3 / RS 3 Pro /RS 3 Mini / RS 4 / RS 4 Pro / RS 4 Mini 3026B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-335",
        "stock": 23,
        "name": "SmallRig HawkLock H21 Quick Release Rosette Magic Arm (11) 4489",
        "reviewsCount": 53,
        "oldPrice": null,
        "image": "images/prod_acc_335.jpg",
        "nameEn": "SmallRig HawkLock H21 Quick Release Rosette Magic Arm (11) 4489",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_335.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 85,
        "description": "منتج SmallRig الأصلي \"SmallRig HawkLock H21 Quick Release Rosette Magic Arm (11\"\") 4489\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-336",
        "stock": 24,
        "name": "SmallRig HawkLock H21 Quick Release Rosette Magic  Arm (7) 4490",
        "reviewsCount": 33,
        "oldPrice": null,
        "image": "images/prod_acc_336.jpg",
        "nameEn": "SmallRig HawkLock H21 Quick Release Rosette Magic  Arm (7) 4490",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_336.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 55,
        "description": "منتج SmallRig الأصلي \"SmallRig HawkLock H21 Quick Release Rosette Magic  Arm (7\"\") 4490\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-337",
        "stock": 23,
        "name": "SmallRig Cycling Camera Mount 5459",
        "reviewsCount": 72,
        "oldPrice": null,
        "image": "images/prod_acc_337.jpg",
        "nameEn": "SmallRig Cycling Camera Mount 5459",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_337.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 80,
        "description": "منتج SmallRig الأصلي SmallRig Cycling Camera Mount 5459 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-338",
        "stock": 14,
        "name": "SmallRig Cage for Sony FX2 5587",
        "reviewsCount": 44,
        "oldPrice": null,
        "image": "images/prod_acc_338.jpg",
        "nameEn": "SmallRig Cage for Sony FX2 5587",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_338.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 90,
        "description": "منتج SmallRig الأصلي SmallRig Cage for Sony FX2 5587 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-339",
        "stock": 9,
        "name": "SmallRig V-Mount Battery Mount Plate 4505B",
        "reviewsCount": 31,
        "oldPrice": null,
        "image": "images/prod_acc_339.jpg",
        "nameEn": "SmallRig V-Mount Battery Mount Plate 4505B",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_339.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 115,
        "description": "منتج SmallRig الأصلي SmallRig V-Mount Battery Mount Plate 4505B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "chargers_batteries"
    },
    {
        "id": "ACC-340",
        "stock": 22,
        "name": "SmallRig V Mount Battery Plate with Adjustable Arm 2991",
        "reviewsCount": 30,
        "oldPrice": null,
        "image": "images/prod_acc_340.jpg",
        "nameEn": "SmallRig V Mount Battery Plate with Adjustable Arm 2991",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_340.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 65,
        "description": "منتج SmallRig الأصلي SmallRig V Mount Battery Plate with Adjustable Arm 2991 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "chargers_batteries"
    },
    {
        "id": "ACC-341",
        "stock": 9,
        "name": "SmallRig Camera Suction Cup Car Mount Kit for Panoramic Shooting 4380",
        "reviewsCount": 38,
        "oldPrice": null,
        "image": "images/prod_acc_341.jpg",
        "nameEn": "SmallRig Camera Suction Cup Car Mount Kit for Panoramic Shooting 4380",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_341.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 90,
        "description": "منتج SmallRig الأصلي SmallRig Camera Suction Cup Car Mount Kit for Panoramic Shooting 4380 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "ACC-342",
        "stock": 14,
        "name": "SmallRig VB50 mini V Mount Battery 50Wh 3579B",
        "reviewsCount": 76,
        "oldPrice": null,
        "image": "images/prod_acc_342.jpg",
        "nameEn": "SmallRig VB50 mini V Mount Battery 50Wh 3579B",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_342.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 120,
        "description": "منتج SmallRig الأصلي SmallRig VB50 mini V Mount Battery 50Wh 3579B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "chargers_batteries"
    },
    {
        "id": "ACC-343",
        "stock": 7,
        "name": "SmallRig VB99 Mini V-Mount Battery 99Wh 3580B",
        "reviewsCount": 31,
        "oldPrice": null,
        "image": "images/prod_smallrig_vb99.jpg",
        "nameEn": "SmallRig VB99 Mini V-Mount Battery 99Wh 3580B",
        "badge": "SmallRig",
        "gallery": "images/prod_smallrig_vb99.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 145,
        "description": "منتج SmallRig الأصلي SmallRig VB99 Mini V-Mount Battery 99Wh 3580B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "chargers_batteries"
    },
    {
        "id": "ACC-344",
        "stock": 5,
        "name": "SmallRig VB99 Pro V-Mount Battery 99Wh 4292",
        "reviewsCount": 31,
        "oldPrice": null,
        "image": "images/prod_acc_344.jpg",
        "nameEn": "SmallRig VB99 Pro V-Mount Battery 99Wh 4292",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_344.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 200,
        "description": "منتج SmallRig الأصلي SmallRig VB99 Pro V-Mount Battery 99Wh 4292 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "chargers_batteries"
    },
    {
        "id": "ACC-345",
        "stock": 13,
        "name": "SmallRig VB155 Mini V-Mount Battery 155Wh 3581B",
        "reviewsCount": 65,
        "oldPrice": null,
        "image": "images/prod_acc_345.jpg",
        "nameEn": "SmallRig VB155 Mini V-Mount Battery 155Wh 3581B",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_345.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 240,
        "description": "منتج SmallRig الأصلي SmallRig VB155 Mini V-Mount Battery 155Wh 3581B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "chargers_batteries"
    },
    {
        "id": "ACC-346",
        "stock": 17,
        "name": "SmallRig x Caleb Pike VB212 Mini V-Mount Battery 212Wh 4293",
        "reviewsCount": 39,
        "oldPrice": null,
        "image": "images/prod_acc_346.jpg",
        "nameEn": "SmallRig x Caleb Pike VB212 Mini V-Mount Battery 212Wh 4293",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_346.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 295,
        "description": "منتج SmallRig الأصلي SmallRig x Caleb Pike VB212 Mini V-Mount Battery 212Wh 4293 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "chargers_batteries"
    },
    {
        "id": "ACC-347",
        "stock": 8,
        "name": "SmallRig Camera Cage with Right-Side Handgrip for Sony ZV-E10  4293",
        "reviewsCount": 64,
        "oldPrice": null,
        "image": "images/prod_acc_347.jpg",
        "nameEn": "SmallRig Camera Cage with Right-Side Handgrip for Sony ZV-E10  4293",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_347.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 45,
        "description": "منتج SmallRig الأصلي SmallRig Camera Cage with Right-Side Handgrip for Sony ZV-E10  4293 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-348",
        "stock": 17,
        "name": "SmallRig Full Camera Cage for Sony ZV-E1 4256",
        "reviewsCount": 76,
        "oldPrice": null,
        "image": "images/prod_acc_348.jpg",
        "nameEn": "SmallRig Full Camera Cage for Sony ZV-E1 4256",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_348.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 45,
        "description": "منتج SmallRig الأصلي SmallRig Full Camera Cage for Sony ZV-E1 4256 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-349",
        "stock": 9,
        "name": "SmallRig Black Mamba Camera Cage for Canon EOS R5 Mark II 4975",
        "reviewsCount": 61,
        "oldPrice": null,
        "image": "images/prod_acc_349.jpg",
        "nameEn": "SmallRig Black Mamba Camera Cage for Canon EOS R5 Mark II 4975",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_349.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 70,
        "description": "منتج SmallRig الأصلي \"SmallRig \"\"Black Mamba\"\" Camera Cage for Canon EOS R5 Mark II 4975\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-350",
        "stock": 8,
        "name": "SmallRig Light Cage for Sony a7 III/a7R III/a9 2918",
        "reviewsCount": 32,
        "oldPrice": null,
        "image": "images/prod_sony_npfz100.jpg",
        "nameEn": "SmallRig Light Cage for Sony a7 III/a7R III/a9 2918",
        "badge": "SmallRig",
        "gallery": "images/prod_sony_npfz100.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 65,
        "description": "منتج SmallRig الأصلي SmallRig Light Cage for Sony a7 III/a7R III/a9 2918 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-351",
        "stock": 17,
        "name": "SmallRig Cage for Canon EOS R Camera CCC2803",
        "reviewsCount": 63,
        "oldPrice": null,
        "image": "images/prod_acc_351.jpg",
        "nameEn": "SmallRig Cage for Canon EOS R Camera CCC2803",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_351.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 50,
        "description": "منتج SmallRig الأصلي SmallRig Cage for Canon EOS R Camera CCC2803 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-352",
        "stock": 11,
        "name": "SmallRig Camera Cage for Canon EOS R6 Mark II 4159",
        "reviewsCount": 38,
        "oldPrice": null,
        "image": "images/prod_acc_352.jpg",
        "nameEn": "SmallRig Camera Cage for Canon EOS R6 Mark II 4159",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_352.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 60,
        "description": "منتج SmallRig الأصلي SmallRig Camera Cage for Canon EOS R6 Mark II 4159 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-353",
        "stock": 5,
        "name": "SmallRig Camera Cage with Silicone Handgrip for Sony a6400/a6300/a6100  3164B",
        "reviewsCount": 55,
        "oldPrice": null,
        "image": "images/prod_acc_353.jpg",
        "nameEn": "SmallRig Camera Cage with Silicone Handgrip for Sony a6400/a6300/a6100  3164B",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_353.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 50,
        "description": "منتج SmallRig الأصلي SmallRig Camera Cage with Silicone Handgrip for Sony a6400/a6300/a6100  3164B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-354",
        "stock": 8,
        "name": "SmallRig Advanced Cage Kit for Sony a7R V",
        "reviewsCount": 70,
        "oldPrice": null,
        "image": "images/prod_acc_354.jpg",
        "nameEn": "SmallRig Advanced Cage Kit for Sony a7R V",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_354.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 145,
        "description": "منتج SmallRig الأصلي \"SmallRig Advanced Cage Kit for Sony a7R V بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-355",
        "stock": 7,
        "name": "SmallRig Camera Cage for Canon 5D Mark III or 5D Mark IV  CCC2271",
        "reviewsCount": 43,
        "oldPrice": null,
        "image": "images/prod_acc_355.jpg",
        "nameEn": "SmallRig Camera Cage for Canon 5D Mark III or 5D Mark IV  CCC2271",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_355.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 60,
        "description": "منتج SmallRig الأصلي SmallRig Camera Cage for Canon 5D Mark III or 5D Mark IV  CCC2271 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-356",
        "stock": 6,
        "name": "SmallRig Camera Cage for Sony FX30 and FX3  4183B",
        "reviewsCount": 31,
        "oldPrice": null,
        "image": "images/prod_acc_356.jpg",
        "nameEn": "SmallRig Camera Cage for Sony FX30 and FX3  4183B",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_356.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 80,
        "description": "منتج SmallRig الأصلي SmallRig Camera Cage for Sony FX30 and FX3  4183B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-357",
        "stock": 23,
        "name": "SmallRig Professional Accessory Kit for Blackmagic Pocket Cinema Camera 6K Pro/6K G2 3299",
        "reviewsCount": 58,
        "oldPrice": null,
        "image": "images/prod_acc_357.jpg",
        "nameEn": "SmallRig Professional Accessory Kit for Blackmagic Pocket Cinema Camera 6K Pro/6K G2 3299",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_357.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 115,
        "description": "منتج SmallRig الأصلي SmallRig Professional Accessory Kit for Blackmagic Pocket Cinema Camera 6K Pro/6K G2 3299 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-358",
        "stock": 19,
        "name": "SmallRig Camera Cage for Sony a7 IV / a7R V / a7S III 3667B",
        "reviewsCount": 79,
        "oldPrice": null,
        "image": "images/prod_smallrig_a7iv_cage.jpg",
        "nameEn": "SmallRig Camera Cage for Sony a7 IV / a7R V / a7S III 3667B",
        "badge": "SmallRig",
        "gallery": [
            "images/prod_smallrig_a7iv_cage.jpg",
            "images/prod_smallrig_a7iv_cage_angle2.jpg",
            "images/prod_smallrig_a7iv_cage_angle3.jpg",
            "images/prod_smallrig_a7iv_cage_angle4.jpg"
        ],
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 65,
        "description": "منتج SmallRig الأصلي SmallRig Camera Cage for Sony a7 IV / a7R V / a7S III 3667B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-359",
        "stock": 15,
        "name": "SmallRig Camera Cage for Canon EOS R5 C",
        "reviewsCount": 55,
        "oldPrice": null,
        "image": "images/prod_acc_359.jpg",
        "nameEn": "SmallRig Camera Cage for Canon EOS R5 C",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_359.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 60,
        "description": "منتج SmallRig الأصلي \"SmallRig Camera Cage for Canon EOS R5 C بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-360",
        "stock": 18,
        "name": "SmallRig Full Camera Cage Kit for Sony a6700  4336",
        "reviewsCount": 50,
        "oldPrice": null,
        "image": "images/prod_acc_360.jpg",
        "nameEn": "SmallRig Full Camera Cage Kit for Sony a6700  4336",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_360.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 65,
        "description": "منتج SmallRig الأصلي SmallRig Full Camera Cage Kit for Sony a6700  4336 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-361",
        "stock": 21,
        "name": "SmallRig HawkLock Quick Release Advanced Cage Kit for Sony FX3 and FX30  4771",
        "reviewsCount": 35,
        "oldPrice": null,
        "image": "images/prod_acc_361.jpg",
        "nameEn": "SmallRig HawkLock Quick Release Advanced Cage Kit for Sony FX3 and FX30  4771",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_361.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 135,
        "description": "منتج SmallRig الأصلي SmallRig HawkLock Quick Release Advanced Cage Kit for Sony FX3 and FX30  4771 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-362",
        "stock": 12,
        "name": "SmallRig Top Handle with Shoe Mount (Lite) 3764",
        "reviewsCount": 53,
        "oldPrice": null,
        "image": "images/prod_smallrig_top_handle.jpg",
        "nameEn": "SmallRig Top Handle with Shoe Mount (Lite) 3764",
        "badge": "SmallRig",
        "gallery": [
            "images/prod_smallrig_top_handle.jpg",
            "images/prod_smallrig_top_handle_angle2.jpg",
            "images/prod_smallrig_top_handle_angle3.jpg",
            "images/prod_smallrig_top_handle_angle4.jpg"
        ],
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 30,
        "description": "منتج SmallRig الأصلي SmallRig Top Handle with Shoe Mount (Lite) 3764 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-363",
        "stock": 16,
        "name": "SmallRig Top Handle with ARRI-Style Anti-Twist Mount (Lite) 3765",
        "reviewsCount": 48,
        "oldPrice": null,
        "image": "images/prod_acc_363.jpg",
        "nameEn": "SmallRig Top Handle with ARRI-Style Anti-Twist Mount (Lite) 3765",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_363.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 35,
        "description": "منتج SmallRig الأصلي SmallRig Top Handle with ARRI-Style Anti-Twist Mount (Lite) 3765 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-364",
        "stock": 23,
        "name": "SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Canon R-Series Cameras 4300",
        "reviewsCount": 35,
        "oldPrice": null,
        "image": "images/prod_acc_364.jpg",
        "nameEn": "SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Canon R-Series Cameras 4300",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_364.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 55,
        "description": "منتج SmallRig الأصلي SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Canon R-Series Cameras 4300 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-365",
        "stock": 16,
        "name": "SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Sony A-Series",
        "reviewsCount": 38,
        "oldPrice": null,
        "image": "images/prod_acc_365.jpg",
        "nameEn": "SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Sony A-Series",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_365.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 55,
        "description": "منتج SmallRig الأصلي \"SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Select Sony A-Series بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-366",
        "stock": 11,
        "name": "SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Sony a7R IV",
        "reviewsCount": 37,
        "oldPrice": null,
        "image": "images/prod_acc_366.jpg",
        "nameEn": "SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Sony a7R IV",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_366.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 55,
        "description": "منتج SmallRig الأصلي \"SmallRig Rotatable Horizontal-to-Vertical Mount Plate Kit for Sony a7R IV بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-367",
        "stock": 21,
        "name": "SmallRig Dual Handgrip for DJI RS 2/RSC 2/RS 3/RS 3 Pro/RS 4/RS 4 Pro Gimbal 3027",
        "reviewsCount": 64,
        "oldPrice": null,
        "image": "images/prod_acc_367.jpg",
        "nameEn": "SmallRig Dual Handgrip for DJI RS 2/RSC 2/RS 3/RS 3 Pro/RS 4/RS 4 Pro Gimbal 3027",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_367.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 80,
        "description": "منتج SmallRig الأصلي SmallRig Dual Handgrip for DJI RS 2/RSC 2/RS 3/RS 3 Pro/RS 4/RS 4 Pro Gimbal 3027 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-368",
        "stock": 15,
        "name": "SmallRig Sling Handle for Select DJI RS-Series Gimbals 3028D",
        "reviewsCount": 38,
        "oldPrice": null,
        "image": "images/prod_acc_368.jpg",
        "nameEn": "SmallRig Sling Handle for Select DJI RS-Series Gimbals 3028D",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_368.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 65,
        "description": "منتج SmallRig الأصلي SmallRig Sling Handle for Select DJI RS-Series Gimbals 3028D بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-369",
        "stock": 8,
        "name": "SmallRig Articulating Arm (9.5) 2066B",
        "reviewsCount": 49,
        "oldPrice": null,
        "image": "images/prod_acc_369.jpg",
        "nameEn": "SmallRig Articulating Arm (9.5) 2066B",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_369.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 30,
        "description": "منتج SmallRig الأصلي \"SmallRig Articulating Arm (9.5\"\") 2066B\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-370",
        "stock": 14,
        "name": "SmallRig 5.5 Articulating Arm 2065B",
        "reviewsCount": 59,
        "oldPrice": null,
        "image": "images/prod_acc_370.jpg",
        "nameEn": "SmallRig 5.5 Articulating Arm 2065B",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_370.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 21,
        "description": "منتج SmallRig الأصلي \"SmallRig 5.5\"\" Articulating Arm 2065B\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-371",
        "stock": 7,
        "name": "SmallRig 2164 Multifunctional Crab Clamp with 3.5 Ball Head Arm 2164",
        "reviewsCount": 36,
        "oldPrice": null,
        "image": "images/prod_acc_371.jpg",
        "nameEn": "SmallRig 2164 Multifunctional Crab Clamp with 3.5 Ball Head Arm 2164",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_371.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 20,
        "description": "منتج SmallRig الأصلي \"SmallRig 2164 Multifunctional Crab Clamp with 3.5\"\" Ball Head Arm 2164\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-372",
        "stock": 24,
        "name": "SmallRig Magic Arm with Dual Ball Heads (1/4-20 Screws) 3873",
        "reviewsCount": 74,
        "oldPrice": null,
        "image": "images/prod_acc_372.jpg",
        "nameEn": "SmallRig Magic Arm with Dual Ball Heads (1/4-20 Screws) 3873",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_372.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 40,
        "description": "منتج SmallRig الأصلي \"SmallRig Magic Arm with Dual Ball Heads (1/4\"\"-20 Screws) 3873\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-373",
        "stock": 23,
        "name": "SmallRig Crab-Shaped Clamp & Magic Arm Kit 4454",
        "reviewsCount": 43,
        "oldPrice": null,
        "image": "images/prod_acc_373.jpg",
        "nameEn": "SmallRig Crab-Shaped Clamp & Magic Arm Kit 4454",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_373.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 35,
        "description": "منتج SmallRig الأصلي SmallRig Crab-Shaped Clamp & Magic Arm Kit 4454 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-374",
        "stock": 17,
        "name": "SmallRig Articulating Magic Arm 9.8 Inches with super Clamp 2732B",
        "reviewsCount": 36,
        "oldPrice": null,
        "image": "images/prod_acc_374.jpg",
        "nameEn": "SmallRig Articulating Magic Arm 9.8 Inches with super Clamp 2732B",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_374.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 35,
        "description": "منتج SmallRig الأصلي SmallRig Articulating Magic Arm 9.8 Inches with super Clamp 2732B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-375",
        "stock": 9,
        "name": "SmallRig Phone Holder for DJI RS Series Gimbals 4301",
        "reviewsCount": 55,
        "oldPrice": null,
        "image": "images/prod_acc_375.jpg",
        "nameEn": "SmallRig Phone Holder for DJI RS Series Gimbals 4301",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_375.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 17,
        "description": "منتج SmallRig الأصلي SmallRig Phone Holder for DJI RS Series Gimbals 4301 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-376",
        "stock": 5,
        "name": "SmallRig Swivel and Tilt Adjustable Monitor Mount with Cold Shoe Mount 2905B",
        "reviewsCount": 52,
        "oldPrice": null,
        "image": "images/prod_acc_376.jpg",
        "nameEn": "SmallRig Swivel and Tilt Adjustable Monitor Mount with Cold Shoe Mount 2905B",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_376.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 20,
        "description": "منتج SmallRig الأصلي SmallRig Swivel and Tilt Adjustable Monitor Mount with Cold Shoe Mount 2905B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-377",
        "stock": 22,
        "name": "SmallRig Swivel and Tilt Adjustable Monitor Support with 1/4-20 Screws 4886",
        "reviewsCount": 36,
        "oldPrice": null,
        "image": "images/prod_acc_377.jpg",
        "nameEn": "SmallRig Swivel and Tilt Adjustable Monitor Support with 1/4-20 Screws 4886",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_377.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 25,
        "description": "منتج SmallRig الأصلي \"SmallRig Swivel and Tilt Adjustable Monitor Support with 1/4\"\"-20 Screws 4886\" بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-378",
        "stock": 24,
        "name": "SmallRig Foldable Multi-Tool (Silver) AAK2213D",
        "reviewsCount": 68,
        "oldPrice": null,
        "image": "images/prod_acc_378.jpg",
        "nameEn": "SmallRig Foldable Multi-Tool (Silver) AAK2213D",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_378.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 15,
        "description": "منتج SmallRig الأصلي SmallRig Foldable Multi-Tool (Silver) AAK2213D بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-379",
        "stock": 20,
        "name": "SmallRig RF 10C Portable Focusable LED Video Light 4634",
        "reviewsCount": 58,
        "oldPrice": null,
        "image": "images/prod_acc_379.jpg",
        "nameEn": "SmallRig RF 10C Portable Focusable LED Video Light 4634",
        "badge": "SmallRig",
        "gallery": "images/prod_acc_379.jpg",
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 60,
        "description": "منتج SmallRig الأصلي SmallRig RF 10C Portable Focusable LED Video Light 4634 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-380",
        "stock": 21,
        "name": "SmallRig Star-Trail Lightweight Multifunctional Modular Matte Box VND Filter Bundle (95mm Back) 3645",
        "reviewsCount": 35,
        "oldPrice": null,
        "image": "images/prod_tilta_mirage_vnd_matte_box.jpg",
        "nameEn": "SmallRig Star-Trail Lightweight Multifunctional Modular Matte Box VND Filter Bundle (95mm Back) 3645",
        "badge": "SmallRig",
        "gallery": [
            "images/prod_tilta_mirage_vnd_matte_box.jpg",
            "images/prod_tilta_mirage_vnd_matte_box_angle2.jpg",
            "images/prod_tilta_mirage_vnd_matte_box_angle3.jpg"
        ],
        "specs": {
            "العلامة التجارية": "SmallRig",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "SmallRig",
        "price": 240,
        "description": "منتج SmallRig الأصلي SmallRig Star-Trail Lightweight Multifunctional Modular Matte Box VND Filter Bundle (95mm Back) 3645 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-381",
        "stock": 19,
        "name": "ulanzi th04 arm",
        "reviewsCount": 42,
        "oldPrice": null,
        "image": "images/prod_acc_381.jpg",
        "nameEn": "ulanzi th04 arm",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_381.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 70,
        "description": "منتج Ulanzi الأصلي ulanzi th04 arm بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-382",
        "stock": 24,
        "name": "ulanzi ma53 phone holder",
        "reviewsCount": 49,
        "oldPrice": null,
        "image": "images/prod_acc_382.jpg",
        "nameEn": "ulanzi ma53 phone holder",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_382.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 25,
        "description": "منتج Ulanzi الأصلي ulanzi ma53 phone holder بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-383",
        "stock": 24,
        "name": "ulanzi ma35 phone holder",
        "reviewsCount": 33,
        "oldPrice": null,
        "image": "images/prod_acc_383.jpg",
        "nameEn": "ulanzi ma35 phone holder",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_383.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 20,
        "description": "منتج Ulanzi الأصلي ulanzi ma35 phone holder بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-384",
        "stock": 5,
        "name": "ulanzi lino cage",
        "reviewsCount": 48,
        "oldPrice": null,
        "image": "images/prod_acc_384.jpg",
        "nameEn": "ulanzi lino cage",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_384.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 55,
        "description": "منتج Ulanzi الأصلي ulanzi lino cage بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-385",
        "stock": 8,
        "name": "Ulanzi Universal Smartphone Metal Cage 3127",
        "reviewsCount": 65,
        "oldPrice": null,
        "image": "images/prod_acc_385.jpg",
        "nameEn": "Ulanzi Universal Smartphone Metal Cage 3127",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_385.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 70,
        "description": "منتج Ulanzi الأصلي Ulanzi Universal Smartphone Metal Cage 3127 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-386",
        "stock": 13,
        "name": "Ulanzi MA07 Universal Smartphone  Cage",
        "reviewsCount": 39,
        "oldPrice": null,
        "image": "images/prod_acc_386.jpg",
        "nameEn": "Ulanzi MA07 Universal Smartphone  Cage",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_386.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 15,
        "description": "منتج Ulanzi الأصلي Ulanzi MA07 Universal Smartphone  Cage بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-389",
        "stock": 19,
        "name": "ulanzi universal desktop 2335",
        "reviewsCount": 72,
        "oldPrice": null,
        "image": "images/prod_acc_389.jpg",
        "nameEn": "ulanzi universal desktop 2335",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_389.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 70,
        "description": "منتج Ulanzi الأصلي ulanzi universal desktop 2335 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-390",
        "stock": 16,
        "name": "ulanzi suction cup 4.5 inch",
        "reviewsCount": 56,
        "oldPrice": null,
        "image": "images/prod_acc_390.jpg",
        "nameEn": "ulanzi suction cup 4.5 inch",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_390.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 50,
        "description": "منتج Ulanzi الأصلي ulanzi suction cup 4.5 inch بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-391",
        "stock": 8,
        "name": "ULANZI LM07 LED Photography Flashlight",
        "reviewsCount": 46,
        "oldPrice": null,
        "image": "images/prod_acc_391.jpg",
        "nameEn": "ULANZI LM07 LED Photography Flashlight",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_391.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 20,
        "description": "منتج Ulanzi الأصلي ULANZI LM07 LED Photography Flashlight بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-392",
        "stock": 8,
        "name": "Ulanzi VL49 Mini RGB video light",
        "reviewsCount": 79,
        "oldPrice": null,
        "image": "images/prod_acc_392.jpg",
        "nameEn": "Ulanzi VL49 Mini RGB video light",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_392.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 15,
        "description": "منتج Ulanzi الأصلي Ulanzi VL49 Mini RGB video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-393",
        "stock": 8,
        "name": "ulanzi Vl120 LED Pocket rgb video light",
        "reviewsCount": 35,
        "oldPrice": null,
        "image": "images/prod_acc_393.jpg",
        "nameEn": "ulanzi Vl120 LED Pocket rgb video light",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_393.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 40,
        "description": "منتج Ulanzi الأصلي ulanzi Vl120 LED Pocket rgb video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-394",
        "stock": 19,
        "name": "ulanzi Vl120 LED Pocket bi color video light",
        "reviewsCount": 63,
        "oldPrice": null,
        "image": "images/prod_acc_394.jpg",
        "nameEn": "ulanzi Vl120 LED Pocket bi color video light",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_394.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 30,
        "description": "منتج Ulanzi الأصلي ulanzi Vl120 LED Pocket bi color video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-395",
        "stock": 21,
        "name": "ulanzi LM-P40 RGB Video light",
        "reviewsCount": 62,
        "oldPrice": null,
        "image": "images/prod_acc_395.jpg",
        "nameEn": "ulanzi LM-P40 RGB Video light",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_395.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 45,
        "description": "منتج Ulanzi الأصلي ulanzi LM-P40 RGB Video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-396",
        "stock": 24,
        "name": "Ulanzi LT002  7inch Pocket Fill Light",
        "reviewsCount": 58,
        "oldPrice": null,
        "image": "images/prod_acc_396.jpg",
        "nameEn": "Ulanzi LT002  7inch Pocket Fill Light",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_396.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 30,
        "description": "منتج Ulanzi الأصلي Ulanzi LT002  7inch Pocket Fill Light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-397",
        "stock": 6,
        "name": "ulanzi LT003 RGB Video light",
        "reviewsCount": 79,
        "oldPrice": null,
        "image": "images/prod_acc_397.jpg",
        "nameEn": "ulanzi LT003 RGB Video light",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_397.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 45,
        "description": "منتج Ulanzi الأصلي ulanzi LT003 RGB Video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-398",
        "stock": 19,
        "name": "ulanzi Pl25 Bi color video light",
        "reviewsCount": 69,
        "oldPrice": null,
        "image": "images/prod_acc_398.jpg",
        "nameEn": "ulanzi Pl25 Bi color video light",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_398.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 25,
        "description": "منتج Ulanzi الأصلي ulanzi Pl25 Bi color video light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-399",
        "stock": 20,
        "name": "ulanzi air tube light 20w90*12cm",
        "reviewsCount": 39,
        "oldPrice": null,
        "image": "images/prod_acc_399.jpg",
        "nameEn": "ulanzi air tube light 20w90*12cm",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_399.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 60,
        "description": "منتج Ulanzi الأصلي ulanzi air tube light 20w90*12cm بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-400",
        "stock": 17,
        "name": "ulanzi air tube light 12w60*12cm",
        "reviewsCount": 67,
        "oldPrice": null,
        "image": "images/prod_acc_400.jpg",
        "nameEn": "ulanzi air tube light 12w60*12cm",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_400.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 45,
        "description": "منتج Ulanzi الأصلي ulanzi air tube light 12w60*12cm بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-401",
        "stock": 6,
        "name": "ulanzi air tube al60",
        "reviewsCount": 64,
        "oldPrice": null,
        "image": "images/prod_acc_401.jpg",
        "nameEn": "ulanzi air tube al60",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_401.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 110,
        "description": "منتج Ulanzi الأصلي ulanzi air tube al60 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-402",
        "stock": 6,
        "name": "ULANZI VL-120 Bi color V-Mount COB LED",
        "reviewsCount": 69,
        "oldPrice": null,
        "image": "images/prod_acc_402.jpg",
        "nameEn": "ULANZI VL-120 Bi color V-Mount COB LED",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_402.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 135,
        "description": "منتج Ulanzi الأصلي ULANZI VL-120 Bi color V-Mount COB LED بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-403",
        "stock": 6,
        "name": "ULANZI VL-120 RGB V-Mount COB LED",
        "reviewsCount": 38,
        "oldPrice": null,
        "image": "images/prod_acc_403.jpg",
        "nameEn": "ULANZI VL-120 RGB V-Mount COB LED",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_403.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 160,
        "description": "منتج Ulanzi الأصلي ULANZI VL-120 RGB V-Mount COB LED بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-404",
        "stock": 7,
        "name": "ULANZI VL-1200 Bi Color V-Mount COB LED",
        "reviewsCount": 67,
        "oldPrice": null,
        "image": "images/prod_acc_404.jpg",
        "nameEn": "ULANZI VL-1200 Bi Color V-Mount COB LED",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_404.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 170,
        "description": "منتج Ulanzi الأصلي ULANZI VL-1200 Bi Color V-Mount COB LED بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-406",
        "stock": 10,
        "name": "Ulanzi OM-01 Multi function bag",
        "reviewsCount": 47,
        "oldPrice": null,
        "image": "images/prod_acc_406.jpg",
        "nameEn": "Ulanzi OM-01 Multi function bag",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_406.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 50,
        "description": "منتج Ulanzi الأصلي Ulanzi OM-01 Multi function bag بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "bags"
    },
    {
        "id": "ACC-407",
        "stock": 13,
        "name": "ulanzi backpack bp04",
        "reviewsCount": 30,
        "oldPrice": null,
        "image": "images/prod_acc_407.jpg",
        "nameEn": "ulanzi backpack bp04",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_407.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 130,
        "description": "منتج Ulanzi الأصلي ulanzi backpack bp04 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "bags"
    },
    {
        "id": "ACC-408",
        "stock": 11,
        "name": "ulanzi backpack bp09 22L",
        "reviewsCount": 40,
        "oldPrice": null,
        "image": "images/prod_acc_408.jpg",
        "nameEn": "ulanzi backpack bp09 22L",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_408.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 100,
        "description": "منتج Ulanzi الأصلي ulanzi backpack bp09 22L بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "bags"
    },
    {
        "id": "ACC-409",
        "stock": 12,
        "name": "ulanzi backpack AB01 TAI 38L",
        "reviewsCount": 37,
        "oldPrice": null,
        "image": "images/prod_ulanzi_ab01.jpg",
        "nameEn": "ulanzi backpack AB01 TAI 38L",
        "badge": "Ulanzi",
        "gallery": "images/prod_ulanzi_ab01.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 250,
        "description": "منتج Ulanzi الأصلي ulanzi backpack AB01 TAI 38L بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "bags"
    },
    {
        "id": "ACC-410",
        "stock": 19,
        "name": "Ulanzi 2803 Multi-Functional Storage Bag",
        "reviewsCount": 35,
        "oldPrice": null,
        "image": "images/prod_acc_410.jpg",
        "nameEn": "Ulanzi 2803 Multi-Functional Storage Bag",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_410.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 10,
        "description": "منتج Ulanzi الأصلي Ulanzi 2803 Multi-Functional Storage Bag بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "bags"
    },
    {
        "id": "ACC-411",
        "stock": 18,
        "name": "Ulanzi BP15 SeeClear Tech Pouch Bag",
        "reviewsCount": 78,
        "oldPrice": null,
        "image": "images/prod_acc_411.jpg",
        "nameEn": "Ulanzi BP15 SeeClear Tech Pouch Bag",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_411.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 12,
        "description": "منتج Ulanzi الأصلي Ulanzi BP15 SeeClear Tech Pouch Bag بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "bags"
    },
    {
        "id": "ACC-412",
        "stock": 12,
        "name": "ulanzi dcm-05 podmic usb",
        "reviewsCount": 42,
        "oldPrice": null,
        "image": "images/prod_acc_412.jpg",
        "nameEn": "ulanzi dcm-05 podmic usb",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_412.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 70,
        "description": "منتج Ulanzi الأصلي ulanzi dcm-05 podmic usb بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "ACC-413",
        "stock": 10,
        "name": "Ulanzi Mic A21",
        "reviewsCount": 39,
        "oldPrice": null,
        "image": "images/prod_acc_413.jpg",
        "nameEn": "Ulanzi Mic A21",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_413.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 40,
        "description": "منتج Ulanzi الأصلي Ulanzi Mic A21 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "ACC-414",
        "stock": 6,
        "name": "Ulanzi mic A200",
        "reviewsCount": 54,
        "oldPrice": null,
        "image": "images/prod_acc_414.jpg",
        "nameEn": "Ulanzi mic A200",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_414.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 45,
        "description": "منتج Ulanzi الأصلي Ulanzi mic A200 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "ACC-415",
        "stock": 18,
        "name": "Ulanzi A100 Wireless Mic",
        "reviewsCount": 64,
        "oldPrice": null,
        "image": "images/prod_acc_415.jpg",
        "nameEn": "Ulanzi A100 Wireless Mic",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_415.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 40,
        "description": "منتج Ulanzi الأصلي Ulanzi A100 Wireless Mic بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "ACC-416",
        "stock": 22,
        "name": "Ulanzi AM18 U-Mic 2-Person Wireless Microphone",
        "reviewsCount": 40,
        "oldPrice": null,
        "image": "images/prod_acc_416.jpg",
        "nameEn": "Ulanzi AM18 U-Mic 2-Person Wireless Microphone",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_416.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 90,
        "description": "منتج Ulanzi الأصلي Ulanzi AM18 U-Mic 2-Person Wireless Microphone بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "audio"
    },
    {
        "id": "ACC-417",
        "stock": 15,
        "name": "ulanzi LM01 Flash Light spot",
        "reviewsCount": 46,
        "oldPrice": null,
        "image": "images/prod_acc_417.jpg",
        "nameEn": "ulanzi LM01 Flash Light spot",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_417.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 55,
        "description": "منتج Ulanzi الأصلي ulanzi LM01 Flash Light spot بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-418",
        "stock": 16,
        "name": "ulanzi MG14 Neck Mount",
        "reviewsCount": 51,
        "oldPrice": null,
        "image": "images/prod_acc_418.jpg",
        "nameEn": "ulanzi MG14 Neck Mount",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_418.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 25,
        "description": "منتج Ulanzi الأصلي ulanzi MG14 Neck Mount بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-420",
        "stock": 6,
        "name": "ulanzi TT24 Selfi stick",
        "reviewsCount": 61,
        "oldPrice": null,
        "image": "images/prod_acc_420.jpg",
        "nameEn": "ulanzi TT24 Selfi stick",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_420.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 19,
        "description": "منتج Ulanzi الأصلي ulanzi TT24 Selfi stick بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-423",
        "stock": 22,
        "name": "Ulanzi U-Rig Pro samrtphone Video Rig/cage",
        "reviewsCount": 64,
        "oldPrice": null,
        "image": "images/prod_acc_423.jpg",
        "nameEn": "Ulanzi U-Rig Pro samrtphone Video Rig/cage",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_423.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 15,
        "description": "منتج Ulanzi الأصلي Ulanzi U-Rig Pro samrtphone Video Rig/cage بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-424",
        "stock": 20,
        "name": "Ulanzi U200 Mobile Ring light",
        "reviewsCount": 65,
        "oldPrice": null,
        "image": "images/prod_acc_424.jpg",
        "nameEn": "Ulanzi U200 Mobile Ring light",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_424.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 55,
        "description": "منتج Ulanzi الأصلي Ulanzi U200 Mobile Ring light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-425",
        "stock": 7,
        "name": "Ulanzi R075 universal wooden Cage handle",
        "reviewsCount": 54,
        "oldPrice": null,
        "image": "images/prod_acc_425.jpg",
        "nameEn": "Ulanzi R075 universal wooden Cage handle",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_425.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 25,
        "description": "منتج Ulanzi الأصلي Ulanzi R075 universal wooden Cage handle بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-426",
        "stock": 9,
        "name": "Ulanzi VL110 RGB Tube Light",
        "reviewsCount": 30,
        "oldPrice": null,
        "image": "images/prod_acc_426.jpg",
        "nameEn": "Ulanzi VL110 RGB Tube Light",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_426.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 40,
        "description": "منتج Ulanzi الأصلي Ulanzi VL110 RGB Tube Light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-427",
        "stock": 17,
        "name": "ULANZI VL119 Handheld RGB LED Video Light Stick",
        "reviewsCount": 62,
        "oldPrice": null,
        "image": "images/prod_acc_427.jpg",
        "nameEn": "ULANZI VL119 Handheld RGB LED Video Light Stick",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_427.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 25,
        "description": "منتج Ulanzi الأصلي ULANZI VL119 Handheld RGB LED Video Light Stick بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-428",
        "stock": 15,
        "name": "ULANZI VL360 RGB Light Handheld LED Video Light",
        "reviewsCount": 74,
        "oldPrice": null,
        "image": "images/prod_acc_428.jpg",
        "nameEn": "ULANZI VL360 RGB Light Handheld LED Video Light",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_428.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 75,
        "description": "منتج Ulanzi الأصلي ULANZI VL360 RGB Light Handheld LED Video Light بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-430",
        "stock": 14,
        "name": "Ulanzi CR1 3-in-1 Card Reader",
        "reviewsCount": 70,
        "oldPrice": null,
        "image": "images/prod_acc_430.jpg",
        "nameEn": "Ulanzi CR1 3-in-1 Card Reader",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_430.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 12,
        "description": "منتج Ulanzi الأصلي Ulanzi CR1 3-in-1 Card Reader بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-431",
        "stock": 18,
        "name": "ULANZI CO23 Electric Air Duster Kit",
        "reviewsCount": 77,
        "oldPrice": null,
        "image": "images/prod_acc_431.jpg",
        "nameEn": "ULANZI CO23 Electric Air Duster Kit",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_431.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 70,
        "description": "منتج Ulanzi الأصلي ULANZI CO23 Electric Air Duster Kit بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    },
    {
        "id": "ACC-432",
        "stock": 16,
        "name": "Ulanzi Falcam Move LightGo",
        "reviewsCount": 37,
        "oldPrice": null,
        "image": "images/prod_acc_432.jpg",
        "nameEn": "Ulanzi Falcam Move LightGo",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_432.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 175,
        "description": "منتج Ulanzi الأصلي Ulanzi Falcam Move LightGo بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-433",
        "stock": 19,
        "name": "ULANZI FM01 FILMOG Ace Portable Fog Machine R001",
        "reviewsCount": 38,
        "oldPrice": null,
        "image": "images/prod_acc_433.jpg",
        "nameEn": "ULANZI FM01 FILMOG Ace Portable Fog Machine R001",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_433.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 75,
        "description": "منتج Ulanzi الأصلي ULANZI FM01 FILMOG Ace Portable Fog Machine R001 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-434",
        "stock": 13,
        "name": "Ulanzi FM02 FILMOG X Portable Fog Machine",
        "reviewsCount": 76,
        "oldPrice": null,
        "image": "images/prod_acc_434.jpg",
        "nameEn": "Ulanzi FM02 FILMOG X Portable Fog Machine",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_434.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 65,
        "description": "منتج Ulanzi الأصلي Ulanzi FM02 FILMOG X Portable Fog Machine بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "lighting"
    },
    {
        "id": "ACC-435",
        "stock": 6,
        "name": "ULANZI MT-52 Double Arm Gorilapod",
        "reviewsCount": 76,
        "oldPrice": null,
        "image": "images/prod_acc_435.jpg",
        "nameEn": "ULANZI MT-52 Double Arm Gorilapod",
        "badge": "Ulanzi",
        "gallery": "images/prod_acc_435.jpg",
        "specs": {
            "العلامة التجارية": "Ulanzi",
            "الضمان": "كفالة رسمية من الوكيل المعتمد في الأردن"
        },
        "brand": "Ulanzi",
        "price": 20,
        "description": "منتج Ulanzi الأصلي ULANZI MT-52 Double Arm Gorilapod بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "rating": 4.9,
        "category": "cages"
    }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_CATEGORIES, INITIAL_PRODUCTS };
}
