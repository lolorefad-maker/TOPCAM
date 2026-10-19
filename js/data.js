// بيانات المنتجات الأصلية لمتجر TOP CAM لمعدات التصوير والسينما
// تم تحديث الكتالوج الكامل وفق ملف الإكسل المحدث (كاميرات، عدسات، صوتيات، إضاءة، ستاندات، كيج، شاشات)

const INITIAL_CATEGORIES = [
  {
    "id": "all",
    "name": "جميع المعدات",
    "icon": "fa-layer-group",
    "count": 59
  },
  {
    "id": "cameras",
    "name": "كاميرات سينما وميرورليس",
    "icon": "fa-camera",
    "count": 13,
    "image": "images/prod_sony_fx3_white.jpg"
  },
  {
    "id": "filters",
    "name": "عدسات وفلاتر",
    "icon": "fa-circle-half-stroke",
    "count": 6,
    "image": "images/prod_sony_2470_gm2.png"
  },
  {
    "id": "audio",
    "name": "مايكات وأنظمة صوت",
    "icon": "fa-microphone",
    "count": 6,
    "image": "images/prod_rode_wigo2.png"
  },
  {
    "id": "lighting",
    "name": "إضاءات وسوفت بوكس",
    "icon": "fa-lightbulb",
    "count": 6,
    "image": "images/prod_godox_sl100d.jpg"
  },
  {
    "id": "gimbals",
    "name": "ستيبلايزرز وجيمبل",
    "icon": "fa-gamepad",
    "count": 8,
    "image": "images/prod_dji_rs4_pro.jpg"
  },
  {
    "id": "stands",
    "name": "ستاندات وترايبود",
    "icon": "fa-monument",
    "count": 4,
    "image": "images/prod_vt3510_tripod.jpg"
  },
  {
    "id": "cages",
    "name": "كيج كاميرا وتجهيزات",
    "icon": "fa-border-all",
    "count": 3,
    "image": "images/prod_smallrig_fx3_cage.jpg"
  },
  {
    "id": "monitors",
    "name": "شاشات وتلقين Teleprompter",
    "icon": "fa-tv",
    "count": 4,
    "image": "images/prod_feelworld_lut7.jpg"
  },
  {
    "id": "chargers_batteries",
    "name": "شواحن وبطاريات V-Mount",
    "icon": "fa-battery-full",
    "count": 5,
    "image": "images/prod_smallrig_vb99.jpg"
  },
  {
    "id": "bags",
    "name": "شناتي وحقائب معدات",
    "icon": "fa-suitcase-rolling",
    "count": 4,
    "image": "images/prod_ulanzi_bp09.jpg"
  }
];

const INITIAL_PRODUCTS = [
    {
        "id":  "CAM-001",
        "name":  "Sony A7 III - Full-frame Mirrorless Camera Body Only",
        "nameEn":  "Sony A7 III - Full-frame Mirrorless Camera Body Only",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  1000,
        "oldPrice":  1050,
        "rating":  4.9,
        "reviewsCount":  104,
        "stock":  4,
        "badge":  "وفر $50",
        "section":  "trending",
        "image":  "images/cam_sony_a7iii.jpg",
        "gallery":  [
                        "images/cam_sony_a7iii.jpg",
                        "images/prod_sony_a7iv_white.jpg"
                    ],
        "description":  "كاميرا سوني Sony A7 III - Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "specs":  {
                      "المستشعر":  "24.2MP Full-Frame Exmor R BSI CMOS",
                      "الفيديو":  "4K 30p HDR (HLG) \u0026 S-Log3 / 1080p 120fps",
                      "نظام التركيز":  "693 نقاط فوكس مع Real-Time Eye AF للبشر والحيوانات",
                      "مانع الاهتزاز":  "5-Axis In-Body Image Stabilization (5.0 وقفات)",
                      "حساسية الضوء":  "ISO 100-51,200 (يتوسع حتى 204,800)",
                      "سرعة الالتقاط":  "10 إطارات بالثانية مع تتبع AF/AE كامل",
                      "المنافذ والذاكرة":  "منفذان مزدوجان Dual SD Slots (UHS-II/UHS-I)",
                      "البطارية":  "Sony NP-FZ100 (حتى 710 لقطات)",
                      "المانت":  "Sony E-Mount (Full-Frame)",
                      "الشاشة":  "شاشة لمس 3.0 بوصة قابلة للإمالة بدقة 921K نقطة",
                      "الوزن":  "650 جم هيكل الكاميرا",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-002",
        "name":  "Sony A7 IV - Full-frame Mirrorless Camera Body Only",
        "nameEn":  "Sony A7 IV - Full-frame Mirrorless Camera Body Only",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  1400,
        "oldPrice":  1450,
        "rating":  4.9,
        "reviewsCount":  53,
        "stock":  3,
        "badge":  "وفر $50",
        "section":  "trending",
        "image":  "images/cam_sony_a7iv.jpg",
        "gallery":  [
                        "images/cam_sony_a7iv.jpg",
                        "images/prod_sony_a7iv_white.jpg"
                    ],
        "description":  "كاميرا سوني Sony A7 IV - Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "specs":  {
                      "المستشعر":  "33MP Full-Frame Exmor R BSI CMOS",
                      "الفيديو":  "4K 60p 10-Bit 4:2:2 All-Intra / 7K Oversampling مع S-Cinetone",
                      "نظام التركيز":  "759 نقطة تركيز بؤري ذكي مع تتبع عيون البشر والحيوانات والطيور",
                      "مانع الاهتزاز":  "5-Axis In-Body Stabilization حتى 5.5 وقفات",
                      "المنافذ والذاكرة":  "منفذان مزدوجان: CFexpress Type A و SD UHS-II",
                      "الشاشة":  "شاشة لمسية متغيرة الزوايا Vari-Angle LCD بدقة 1.03M",
                      "البطارية":  "Sony NP-FZ100 (حتى 580 لقطة)",
                      "المانت":  "Sony E-Mount",
                      "الوزن":  "658 جم",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-004",
        "name":  "Sony A7s iii Full-frame Mirrorless Camera Body Only",
        "nameEn":  "Sony A7s iii Full-frame Mirrorless Camera Body Only",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  2100,
        "oldPrice":  2200,
        "rating":  4.9,
        "reviewsCount":  98,
        "stock":  10,
        "badge":  "وفر $100",
        "section":  "trending",
        "image":  "images/cam_sony_a7siii.jpg",
        "gallery":  [
                        "images/cam_sony_a7siii.jpg",
                        "images/prod_sony_fx3_white.jpg"
                    ],
        "description":  "كاميرا سوني Sony A7s iii Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "specs":  {
                      "المستشعر":  "12.1MP Full-Frame Exmor R BSI CMOS مخصص للإضاءة المنخفضة والفيديو",
                      "الفيديو":  "4K 120p 10-Bit 4:2:2 All-Intra بدون كروب وبدون ارتفاع حرارة / 16-Bit RAW",
                      "نظام التركيز":  "759 نقطة فوكس مع حساسية فائقة حتى EV -6 في الظلام الدامس",
                      "مانع الاهتزاز":  "5-Axis IBIS مع وضع Active Mode الرقمي المتقدم",
                      "حساسية الضوء":  "نطاق هائل ISO 80-102,400 (يتوسع حتى 409,600)",
                      "المنافذ والذاكرة":  "منفذان ثنائيان CFexpress Type A و SD UHS-II",
                      "الشاشة والمنظار":  "شاشة لمس مفصلية + منظار OLED EVF بدقة 9.44 مليون نقطة",
                      "الوزن":  "699 جم",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-005",
        "name":  "Sony A7r V Full-frame Mirrorless Camera Body Only",
        "nameEn":  "Sony A7r V Full-frame Mirrorless Camera Body Only",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  2160,
        "oldPrice":  2250,
        "rating":  4.9,
        "reviewsCount":  121,
        "stock":  4,
        "badge":  "وفر $90",
        "section":  "trending",
        "image":  "images/cam_sony_a7rv.jpg",
        "gallery":  [
                        "images/cam_sony_a7rv.jpg",
                        "images/cam_sony_a7iv.jpg"
                    ],
        "description":  "كاميرا سوني Sony A7r V Full-frame Mirrorless Camera Body Only الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "specs":  {
                      "المستشعر":  "61MP Full-Frame Exmor R BSI CMOS بأعلى دقة تفاصيل",
                      "الفيديو":  "8K 24/25p 10-Bit / 4K 60p 10-Bit / 4K 30p مسحوب من 6.2K",
                      "نظام التركيز":  "وحدة معالجة ذكاء اصطناعي مخصصة AI Processing Unit",
                      "مانع الاهتزاز":  "أقوى مانع اهتزاز من سوني يصل حتى 8.0 وقفات تثبيت",
                      "المنافذ والذاكرة":  "منفذان ثنائيان يدعمان CFexpress Type A و SD UHS-II",
                      "الشاشة":  "شاشة 4-Axis Multi-Angle مبتكرة تجمع بين الإمالة والدوران الكامل",
                      "الوزن":  "723 جم",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-006",
        "name":  "Sony FX30 Digital Cinema Camera",
        "nameEn":  "Sony FX30 Digital Cinema Camera",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  1200,
        "oldPrice":  1250,
        "rating":  4.9,
        "reviewsCount":  81,
        "stock":  3,
        "badge":  "وفر $50",
        "section":  "trending",
        "image":  "images/prod_sony_fx3_white.jpg",
        "gallery":  [
                        "images/prod_sony_fx3_white.jpg",
                        "images/prod_smallrig_fx3_cage.jpg"
                    ],
        "description":  "كاميرا سوني Sony FX30 Digital Cinema Camera الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "specs":  {
                      "المستشعر":  "26MP APS-C / Super 35mm Exmor R BSI CMOS فئة السينما",
                      "الفيديو":  "4K Super 35 مع 6K Oversampling حتى 120fps 10-Bit 4:2:2 مع S-Cinetone",
                      "نظام التركيز":  "495 نقطة فوكس Phase Detection مع تتبع فوري للعيون والوجه",
                      "مانع الاهتزاز":  "5-Axis In-Body Stabilization مع وضع Active Mode",
                      "نظام التبريد":  "مروحة تبريد داخلية مدمجة للتصوير المستمر لساعات دون انقطاع",
                      "الهيكل":  "هيكل سينمائي متين بفتحات مسامير 1/4\"-20 لتثبيت الملحقات مباشرة",
                      "المنافذ والذاكرة":  "منفذان مزدوجان CFexpress Type A / SD UHS-II",
                      "الوزن":  "646 جم",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-009",
        "name":  "Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens",
        "nameEn":  "Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  830,
        "oldPrice":  860,
        "rating":  4.9,
        "reviewsCount":  56,
        "stock":  10,
        "badge":  "وفر $30",
        "section":  "trending",
        "image":  "images/cam_sony_zve10.jpg",
        "gallery":  [
                        "images/cam_sony_zve10.jpg"
                    ],
        "description":  "كاميرا سوني Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "specs":  {
                      "المستشعر":  "26MP APS-C Exmor R BSI CMOS لصناع المحتوى والفلوج",
                      "الفيديو":  "4K 60p 10-Bit 4:2:2 مسحوب من دقة 5.6K بدون دمج بكسلات",
                      "نظام التركيز":  "759 نقطة تركيز مع أوضاع Product Showcase و Background Defocus",
                      "الصوت":  "مايكروفون استوديو ثلاثي الكبسولات مدمج مع حاجب رياح احترافي Windscreen",
                      "العدسة المرفقة":  "مرفق عدسة سوني الأصلية القابلة للتقريب 16-50mm OSS",
                      "الشاشة":  "شاشة لمسية تدور 180 درجة مخصصة لصناع المحتوى",
                      "البطارية":  "بطارية سوني الكبيرة NP-FZ100 لمضاعفة وقت التصوير",
                      "الوزن":  "377 جم فقط",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-014",
        "name":  "Sony FX6 Full-Frame Cinema Camera (Body Only)",
        "nameEn":  "Sony FX6 Full-Frame Cinema Camera (Body Only)",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  4000,
        "oldPrice":  4200,
        "rating":  4.9,
        "reviewsCount":  116,
        "stock":  5,
        "badge":  "وفر $200",
        "section":  "trending",
        "image":  "images/cam_sony_fx6.jpg",
        "gallery":  [
                        "images/cam_sony_fx6.jpg",
                        "images/prod_sony_fx3_white.jpg"
                    ],
        "description":  "كاميرا سوني Sony FX6 Full-Frame Cinema Camera (Body Only) الاحترافية الأصلية مع كفالة سنتين كاملة من الوكيل الرسمي في الأردن، تدعم أعلى معايير التصوير الفوتوغرافي والسينمائي.",
        "specs":  {
                      "المستشعر":  "10.2MP Full-Frame Back-Illuminated Exmor R CMOS سينمائي احترافي",
                      "الفيديو":  "DCI 4K حتى 60p / UHD 4K حتى 120p مع 16-Bit RAW خارجي",
                      "المدى الديناميكي":  "مدى ديناميكي مذهل 15+ وقفة مع ألوان S-Cinetone الرسمية",
                      "فلتر ND مدمج":  "فلتر كثافة حيادية إلكتروني متغير مدمج Electronic Variable ND",
                      "حساسية الضوء":  "Dual Base ISO 800 و 12,800 مع حساسية قصوى 409,600",
                      "الصوت":  "مقبض علوي بمنافذ صوت احترافية 2x XLR Inputs مع تحكم كامل",
                      "نظام التبريد":  "نظام تهوية نشط متطور للتصوير المستمر في أصعب الظروف",
                      "الوزن":  "890 جم (هيكل الكاميرا الأساسي)",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-018",
        "name":  "SONY FE 16-35mm F2.8 GM II",
        "nameEn":  "SONY FE 16-35mm F2.8 GM II",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1550,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  61,
        "stock":  15,
        "badge":  "عدسات أصلية",
        "image":  "images/prod_sony_1635_gm2.jpg",
        "gallery":  [
                        "images/prod_sony_1635_gm2.jpg",
                        "images/prod_sony_1635_gm2_angle2.jpg",
                        "images/prod_sony_1635_gm2_angle3.jpg"
                    ],
        "description":  "عدسة SONY FE 16-35mm F2.8 GM II الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "specs":  {
                      "النوع":  "عدسة تصوير احترافية",
                      "التوافق":  "Sony E-Mount",
                      "الكفالة":  "كفالة الوكيل الرسمية سنتين"
                  }
    },
    {
        "id":  "LEN-020",
        "name":  "SONY FE 70-200mm F2.8 GM OSS II",
        "nameEn":  "SONY FE 70-200mm F2.8 GM OSS II",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1700,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  27,
        "stock":  6,
        "badge":  "عدسات أصلية",
        "image":  "images/prod_sony_70200_gm2.jpg",
        "gallery":  [
                        "images/prod_sony_70200_gm2.jpg",
                        "images/prod_sony_70200_gm2_angle2.jpg"
                    ],
        "description":  "عدسة SONY FE 70-200mm F2.8 GM OSS II الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "specs":  {
                      "النوع":  "عدسة تصوير احترافية",
                      "التوافق":  "Sony E-Mount",
                      "الكفالة":  "كفالة الوكيل الرسمية سنتين"
                  }
    },
    {
        "id":  "LEN-024",
        "name":  "SONY FE 24-70mm F2.8 GM II",
        "nameEn":  "SONY FE 24-70mm F2.8 GM II",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1420,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  23,
        "stock":  6,
        "badge":  "عدسات أصلية",
        "image":  "images/prod_sony_2470_gm2.png",
        "gallery":  [
                        "images/prod_sony_2470_gm2.png"
                    ],
        "description":  "عدسة SONY FE 24-70mm F2.8 GM II الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "specs":  {
                      "النوع":  "عدسة تصوير احترافية",
                      "التوافق":  "Sony E-Mount",
                      "الكفالة":  "كفالة الوكيل الرسمية سنتين"
                  }
    },
    {
        "id":  "LEN-029",
        "name":  "SONY E 18-135mm F3.5-5.6 OSS",
        "nameEn":  "SONY E 18-135mm F3.5-5.6 OSS",
        "category":  "filters",
        "brand":  "Sony",
        "price":  420,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  23,
        "stock":  14,
        "badge":  "عدسات أصلية",
        "image":  "images/prod_sony_35_14gm.jpg",
        "gallery":  [
                        "images/prod_sony_35_14gm.jpg",
                        "images/prod_sony_35_14gm_angle2.jpg"
                    ],
        "description":  "عدسة SONY E 18-135mm F3.5-5.6 OSS الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "specs":  {
                      "النوع":  "عدسة تصوير احترافية",
                      "التوافق":  "Sony E-Mount",
                      "الكفالة":  "كفالة الوكيل الرسمية سنتين"
                  }
    },
    {
        "id":  "LEN-030",
        "name":  "SONY FE 24-105mm F4 G OSS Lens",
        "nameEn":  "SONY FE 24-105mm F4 G OSS Lens",
        "category":  "filters",
        "brand":  "Sony",
        "price":  650,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  53,
        "stock":  11,
        "badge":  "عدسات أصلية",
        "image":  "images/prod_sigma_2470_art.jpg",
        "gallery":  [
                        "images/prod_sigma_2470_art.jpg",
                        "images/prod_sigma_2470_art_angle2.jpg",
                        "images/prod_sigma_2470_art_angle3.jpg",
                        "images/prod_sigma_2470_art_angle4.jpg"
                    ],
        "description":  "عدسة SONY FE 24-105mm F4 G OSS Lens الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "specs":  {
                      "النوع":  "عدسة تصوير احترافية",
                      "التوافق":  "Sony E-Mount",
                      "الكفالة":  "كفالة الوكيل الرسمية سنتين"
                  }
    },
    {
        "id":  "LEN-035",
        "name":  "SIGMA 35MM F 1.4 DG DN",
        "nameEn":  "SIGMA 35MM F 1.4 DG DN",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  660,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  50,
        "stock":  10,
        "badge":  "عدسات أصلية",
        "image":  "images/prod_polarpro_vnd.jpg",
        "gallery":  [
                        "images/prod_polarpro_vnd.jpg"
                    ],
        "description":  "عدسة SIGMA 35MM F 1.4 DG DN الاحترافية بحدة بصرية فائقة وطلاء نانو لمنع التوهج مع محرك تركيز فائق الهدوء والسرعة.",
        "specs":  {
                      "النوع":  "عدسة تصوير احترافية",
                      "التوافق":  "متوافقة مع كاميرات الفل فريم",
                      "الكفالة":  "كفالة الوكيل الرسمية سنتين"
                  }
    },
    {
        "id":  "AUD-042",
        "name":  "RODE GO II (Double)",
        "nameEn":  "RODE GO II (Double)",
        "category":  "audio",
        "brand":  "RODE",
        "price":  195,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  52,
        "stock":  16,
        "badge":  "صوت سينمائي",
        "image":  "images/prod_rode_wigo2.png",
        "gallery":  [
                        "images/prod_rode_wigo2.png",
                        "images/prod_rode_wireless_pro.png"
                    ],
        "description":  "نظام تسجيل الصوت الاحترافي RODE GO II (Double) بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "specs":  {
                      "الشركة المصنعة":  "RODE",
                      "الاستخدام":  "صوت استوديو وصناع محتوى وبث مباشر",
                      "الكفالة":  "كفالة الوكيل المعتمد سنتين"
                  }
    },
    {
        "id":  "AUD-044",
        "name":  "RODE NT1 5th Gen",
        "nameEn":  "RODE NT1 5th Gen",
        "category":  "audio",
        "brand":  "RODE",
        "price":  270,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  44,
        "stock":  10,
        "badge":  "صوت سينمائي",
        "image":  "images/prod_rode_nt1_5th.png",
        "gallery":  [
                        "images/prod_rode_nt1_5th.png"
                    ],
        "description":  "نظام تسجيل الصوت الاحترافي RODE NT1 5th Gen بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "specs":  {
                      "الشركة المصنعة":  "RODE",
                      "الاستخدام":  "صوت استوديو وصناع محتوى وبث مباشر",
                      "الكفالة":  "كفالة الوكيل المعتمد سنتين"
                  }
    },
    {
        "id":  "AUD-049",
        "name":  "RODE POD MIC",
        "nameEn":  "RODE POD MIC",
        "category":  "audio",
        "brand":  "RODE",
        "price":  100,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  41,
        "stock":  12,
        "badge":  "صوت سينمائي",
        "image":  "images/prod_rode_podmic.png",
        "gallery":  [
                        "images/prod_rode_podmic.png"
                    ],
        "description":  "نظام تسجيل الصوت الاحترافي RODE POD MIC بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "specs":  {
                      "الشركة المصنعة":  "RODE",
                      "الاستخدام":  "صوت استوديو وصناع محتوى وبث مباشر",
                      "الكفالة":  "كفالة الوكيل المعتمد سنتين"
                  }
    },
    {
        "id":  "AUD-052",
        "name":  "RODE PodMic USB",
        "nameEn":  "RODE PodMic USB",
        "category":  "audio",
        "brand":  "RODE",
        "price":  165,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  84,
        "stock":  5,
        "badge":  "صوت سينمائي",
        "image":  "images/prod_rode_wireless_pro.png",
        "gallery":  [
                        "images/prod_rode_wireless_pro.png"
                    ],
        "description":  "نظام تسجيل الصوت الاحترافي RODE PodMic USB بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "specs":  {
                      "الشركة المصنعة":  "RODE",
                      "الاستخدام":  "صوت استوديو وصناع محتوى وبث مباشر",
                      "الكفالة":  "كفالة الوكيل المعتمد سنتين"
                  }
    },
    {
        "id":  "AUD-053",
        "name":  "RODE Procaster Dynamic mic",
        "nameEn":  "RODE Procaster Dynamic mic",
        "category":  "audio",
        "brand":  "RODE",
        "price":  200,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  43,
        "stock":  16,
        "badge":  "صوت سينمائي",
        "image":  "images/prod_rode_wireless_micro.png",
        "gallery":  [
                        "images/prod_rode_wireless_micro.png"
                    ],
        "description":  "نظام تسجيل الصوت الاحترافي RODE Procaster Dynamic mic بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "specs":  {
                      "الشركة المصنعة":  "RODE",
                      "الاستخدام":  "صوت استوديو وصناع محتوى وبث مباشر",
                      "الكفالة":  "كفالة الوكيل المعتمد سنتين"
                  }
    },
    {
        "id":  "AUD-061",
        "name":  "Hollyland Lark A1 Combo",
        "nameEn":  "Hollyland Lark A1 Combo",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  80,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  35,
        "stock":  5,
        "badge":  "صوت سينمائي",
        "image":  "images/prod_dji_mic2.jpg",
        "gallery":  [
                        "images/prod_dji_mic2.jpg"
                    ],
        "description":  "نظام تسجيل الصوت الاحترافي Hollyland Lark A1 Combo بنقاء استوديو وبث لاسلكي مشفر مستقر.",
        "specs":  {
                      "الشركة المصنعة":  "Hollyland",
                      "الاستخدام":  "صوت استوديو وصناع محتوى وبث مباشر",
                      "الكفالة":  "كفالة الوكيل المعتمد سنتين"
                  }
    },
    {
        "id":  "DJI-078",
        "name":  "DJI MOBILE OM SE",
        "nameEn":  "DJI MOBILE OM SE",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  75,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  62,
        "stock":  9,
        "badge":  "DJI Original",
        "image":  "images/prod_dji_osmo_mobile.jpg",
        "gallery":  [
                        "images/prod_dji_osmo_mobile.jpg",
                        "images/prod_dji_osmo_mobile_angle2.jpg"
                    ],
        "description":  "منتج دي جي آي DJI MOBILE OM SE الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "specs":  {
                      "العلامة التجارية":  "DJI Official",
                      "الكفالة":  "كفالة رسمية سنة من الوكيل"
                  }
    },
    {
        "id":  "DJI-079",
        "name":  "DJI OSMO MOBILE Om 6",
        "nameEn":  "DJI OSMO MOBILE Om 6",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  89,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  122,
        "stock":  7,
        "badge":  "DJI Original",
        "image":  "images/prod_dji_osmo_mobile.jpg",
        "gallery":  [
                        "images/prod_dji_osmo_mobile.jpg",
                        "images/prod_dji_osmo_mobile_angle2.jpg",
                        "images/prod_dji_osmo_mobile_angle3.jpg",
                        "images/prod_dji_osmo_mobile_angle4.jpg"
                    ],
        "description":  "منتج دي جي آي DJI OSMO MOBILE Om 6 الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "specs":  {
                      "العلامة التجارية":  "DJI Official",
                      "الكفالة":  "كفالة رسمية سنة من الوكيل"
                  }
    },
    {
        "id":  "DJI-083",
        "name":  "DJI RS 3 MINI",
        "nameEn":  "DJI RS 3 MINI",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  239,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  125,
        "stock":  5,
        "badge":  "DJI Original",
        "image":  "images/prod_dji_rs4_mini.jpg",
        "gallery":  [
                        "images/prod_dji_rs4_mini.jpg",
                        "images/prod_dji_rs4_mini_angle2.jpg"
                    ],
        "description":  "منتج دي جي آي DJI RS 3 MINI الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "specs":  {
                      "العلامة التجارية":  "DJI Official",
                      "الكفالة":  "كفالة رسمية سنة من الوكيل"
                  }
    },
    {
        "id":  "DJI-084",
        "name":  "DJI RS 4 MINI",
        "nameEn":  "DJI RS 4 MINI",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  310,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  147,
        "stock":  7,
        "badge":  "DJI Original",
        "image":  "images/prod_dji_rs4_mini.jpg",
        "gallery":  [
                        "images/prod_dji_rs4_mini.jpg",
                        "images/prod_dji_rs4_mini_angle2.jpg",
                        "images/prod_dji_rs4_mini_angle3.jpg",
                        "images/prod_dji_rs4_mini_angle4.jpg"
                    ],
        "description":  "منتج دي جي آي DJI RS 4 MINI الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "specs":  {
                      "العلامة التجارية":  "DJI Official",
                      "الكفالة":  "كفالة رسمية سنة من الوكيل"
                  }
    },
    {
        "id":  "DJI-086",
        "name":  "DJI RS 4 STANDARD",
        "nameEn":  "DJI RS 4 STANDARD",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  390,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  71,
        "stock":  12,
        "badge":  "DJI Original",
        "image":  "images/prod_dji_rs4.jpg",
        "gallery":  [
                        "images/prod_dji_rs4.jpg",
                        "images/prod_dji_rs4_angle2.jpg",
                        "images/prod_dji_rs4_angle3.jpg",
                        "images/prod_dji_rs4_angle4.jpg"
                    ],
        "description":  "منتج دي جي آي DJI RS 4 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "specs":  {
                      "العلامة التجارية":  "DJI Official",
                      "الكفالة":  "كفالة رسمية سنة من الوكيل"
                  }
    },
    {
        "id":  "DJI-088",
        "name":  "DJI RS 4 PRO",
        "nameEn":  "DJI RS 4 PRO",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  640,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  140,
        "stock":  6,
        "badge":  "DJI Original",
        "image":  "images/prod_dji_rs4_pro.jpg",
        "gallery":  [
                        "images/prod_dji_rs4_pro.jpg",
                        "images/prod_dji_rs4_pro_angle2.jpg",
                        "images/prod_dji_rs4_pro_angle3.jpg",
                        "images/prod_dji_rs4_pro_angle4.jpg"
                    ],
        "description":  "منتج دي جي آي DJI RS 4 PRO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "specs":  {
                      "العلامة التجارية":  "DJI Official",
                      "الكفالة":  "كفالة رسمية سنة من الوكيل"
                  }
    },
    {
        "id":  "DJI-089",
        "name":  "DJI RS 4 PRO COMPO",
        "nameEn":  "DJI RS 4 PRO COMPO",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  780,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  83,
        "stock":  13,
        "badge":  "DJI Original",
        "image":  "images/prod_dji_rs4_pro.jpg",
        "gallery":  [
                        "images/prod_dji_rs4_pro.jpg",
                        "images/prod_dji_rs4_pro_angle2.jpg",
                        "images/prod_dji_rs4_pro_angle3.jpg"
                    ],
        "description":  "منتج دي جي آي DJI RS 4 PRO COMPO الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "specs":  {
                      "العلامة التجارية":  "DJI Official",
                      "الكفالة":  "كفالة رسمية سنة من الوكيل"
                  }
    },
    {
        "id":  "DJI-090",
        "name":  "DJI RS 5 STANDARD",
        "nameEn":  "DJI RS 5 STANDARD",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  550,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  101,
        "stock":  10,
        "badge":  "DJI Original",
        "image":  "images/prod_dji_rs3_pro.png",
        "gallery":  [
                        "images/prod_dji_rs3_pro.png"
                    ],
        "description":  "منتج دي جي آي DJI RS 5 STANDARD الأصلي بأحدث تقنيات التثبيت والبث والتصوير الذكي.",
        "specs":  {
                      "العلامة التجارية":  "DJI Official",
                      "الكفالة":  "كفالة رسمية سنة من الوكيل"
                  }
    },
    {
        "id":  "CAM-108",
        "name":  "Canon EOS R50 18-45mm",
        "nameEn":  "Canon EOS R50 18-45mm",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  550,
        "oldPrice":  580,
        "rating":  4.9,
        "reviewsCount":  114,
        "stock":  3,
        "badge":  "وفر $30",
        "section":  "trending",
        "image":  "images/cam_canon_r50.jpg",
        "gallery":  [
                        "images/cam_canon_r50.jpg",
                        "images/cam_canon_r8.jpg"
                    ],
        "description":  "كاميرا كانون Canon EOS R50 18-45mm الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "specs":  {
                      "المستشعر":  "24.2MP APS-C CMOS Sensor",
                      "الفيديو":  "4K 30p مسحوب من 6K بدون اقتطاع / Full HD 120p للحركة البطيئة",
                      "نظام التركيز":  "Dual Pixel CMOS AF II مع معالج DIGIC X والتعرف التلقائي على الأجسام",
                      "الشاشة":  "شاشة لمس متغيرة الزوايا 3.0 بوصة تدور بالكامل",
                      "العدسة المرفقة":  "مرفق عدسة كانون RF-S 18-45mm IS STM",
                      "الوزن":  "375 جم",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-111",
        "name":  "Canon EOS R8 Body",
        "nameEn":  "Canon EOS R8 Body",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  1000,
        "oldPrice":  1050,
        "rating":  4.9,
        "reviewsCount":  64,
        "stock":  5,
        "badge":  "وفر $50",
        "section":  "trending",
        "image":  "images/cam_canon_r8.jpg",
        "gallery":  [
                        "images/cam_canon_r8.jpg",
                        "images/cam_canon_r50.jpg"
                    ],
        "description":  "كاميرا كانون Canon EOS R8 Body الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "specs":  {
                      "المستشعر":  "24.2MP Full-Frame CMOS Sensor (نفس مستشعر R6 Mark II الرائدة)",
                      "الفيديو":  "4K 60p مسحوب من 6K بدون اقتطاع 10-Bit 4:2:2 مع Canon Log 3 / Full HD 180fps",
                      "نظام التركيز":  "Dual Pixel CMOS AF II مدعوم بخوارزميات الذكاء الاصطناعي",
                      "سرعة الالتقاط":  "حتى 40 إطاراً في الثانية مع الشاتر الإلكتروني",
                      "الوزن":  "461 جم فقط (أخف كاميرا فل فريم أنتجتها كانون على الإطلاق)",
                      "المانت":  "Canon RF Mount",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-115",
        "name":  "Canon EOS R6 Mark II Body",
        "nameEn":  "Canon EOS R6 Mark II Body",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  1390,
        "oldPrice":  1450,
        "rating":  4.9,
        "reviewsCount":  68,
        "stock":  4,
        "badge":  "وفر $60",
        "section":  "trending",
        "image":  "images/cam_canon_r6ii.jpg",
        "gallery":  [
                        "images/cam_canon_r6ii.jpg",
                        "images/prod_canon_r5_white.jpg"
                    ],
        "description":  "كاميرا كانون Canon EOS R6 Mark II Body الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "specs":  {
                      "المستشعر":  "24.2MP Full-Frame CMOS Sensor عالي السرعة من الجيل الجديد",
                      "الفيديو":  "4K 60p مسحوب بالكامل من 6K بدون اقتطاع 10-Bit 4:2:2 Canon Log 3 / Full HD 180p",
                      "نظام التركيز":  "Dual Pixel CMOS AF II يتعرف على الطيور والقطارات والطائرات والسيارات",
                      "مانع الاهتزاز":  "مانع اهتزاز داخلي قوي 5-Axis IBIS يصل حتى 8.0 وقفات تثبيت",
                      "سرعة الالتقاط":  "التقاط فائق السرعة 40 إطاراً في الثانية بالشاتر الإلكتروني",
                      "المنافذ والذاكرة":  "منفذان لبطاقات الذاكرة Dual SD UHS-II",
                      "البطارية":  "بطارية LP-E6NH",
                      "الوزن":  "670 جم",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-119",
        "name":  "Canon EOS R5 Mark II Body",
        "nameEn":  "Canon EOS R5 Mark II Body",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  2770,
        "oldPrice":  2850,
        "rating":  4.9,
        "reviewsCount":  58,
        "stock":  3,
        "badge":  "وفر $80",
        "section":  "trending",
        "image":  "images/cam_canon_r5ii.jpg",
        "gallery":  [
                        "images/cam_canon_r5ii.jpg",
                        "images/prod_canon_r5_white.jpg"
                    ],
        "description":  "كاميرا كانون Canon EOS R5 Mark II Body الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "specs":  {
                      "المستشعر":  "45MP Full-Frame Back-Illuminated Stacked CMOS Sensor ثوري",
                      "الفيديو":  "8K 60p RAW داخلي / 4K 120p 10-Bit 4:2:2 / 4K 60p S-RAW مع Canon Log 2 و 3",
                      "نظام التركيز":  "Eye Control AF (التحكم بنقطة الفوكس بنظرة العين) مع معالج Accelerated Capture",
                      "مانع الاهتزاز":  "تثبيت بصري داخلي IBIS متطور يصل حتى 8.5 وقفات",
                      "سرعة الالتقاط":  "30 إطاراً في الثانية بالشاتر الإلكتروني بدون أي تعتيم Blackout-free",
                      "ترقية الدقة":  "تقنية التكبير بالذكاء الاصطناعي المدمجة Neural Network Upscaling حتى 179MP",
                      "المنافذ والذاكرة":  "منفذ بطاقة CFexpress Type B فائق السرعة + منفذ SD UHS-II",
                      "الوزن":  "746 جم",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-122",
        "name":  "Canon EOS R5 C Cinema",
        "nameEn":  "Canon EOS R5 C Cinema",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  2300,
        "oldPrice":  2380,
        "rating":  4.9,
        "reviewsCount":  48,
        "stock":  4,
        "badge":  "وفر $80",
        "section":  "trending",
        "image":  "images/cam_canon_r5c.jpg",
        "gallery":  [
                        "images/cam_canon_r5c.jpg"
                    ],
        "description":  "كاميرا كانون Canon EOS R5 C Cinema الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "specs":  {
                      "المستشعر":  "45MP Full-Frame CMOS Sensor هجين فوتوغرافي وسينمائي رسمي Cinema EOS",
                      "الفيديو":  "8K 60p 12-Bit Cinema RAW Light داخلي / 4K 120p 10-Bit 4:2:2 بدون اقتطاع",
                      "نظام التبريد":  "مروحة تبريد مدمجة Active Cooling للتسجيل المستمر بدون توقف",
                      "نظام التشغيل":  "نظام تشغيل مزدوج: واجهة Cinema EOS للفيديو وواجهة EOS R للفوتوغراف",
                      "المنافذ والذاكرة":  "منفذ CFexpress Type B عالي السرعة + منفذ SD UHS-II",
                      "الوزن":  "770 جم",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-123",
        "name":  "Canon PowerShot G7X III",
        "nameEn":  "Canon PowerShot G7X III",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  1100,
        "oldPrice":  1150,
        "rating":  4.9,
        "reviewsCount":  68,
        "stock":  10,
        "badge":  "وفر $50",
        "section":  "trending",
        "image":  "images/cam_canon_g7xiii.jpg",
        "gallery":  [
                        "images/cam_canon_g7xiii.jpg"
                    ],
        "description":  "كاميرا كانون Canon PowerShot G7X III الاحترافية مع ضمان الوكيل المعتمد لمدة سنتين، بأداء استثنائي وألوان كانون السينمائية الشهيرة.",
        "specs":  {
                      "المستشعر":  "20.1MP 1.0-inch Stacked CMOS Sensor المفضل لصناع المحتوى واليوتيوب",
                      "العدسة":  "عدسة كانون سريعة 24-100mm f/1.8-2.8 مع تقريب بصري 4.2x ومثبت بصري",
                      "الفيديو":  "4K 30p بدون كروب / Full HD 120p / دعم البث المباشر المباشر على YouTube Live",
                      "الصوت":  "مدخل مايكروفون خارجي 3.5 ملم لتسجيل صوت احترافي",
                      "الشاشة":  "شاشة لمس ترتفع 180 درجة للأعلى لتصوير السيلفي والفلوجات",
                      "سرعة الالتقاط":  "تصوير متتابع حتى 30 إطاراً في الثانية في وضع RAW Burst",
                      "الوزن":  "304 جم فقط (حجم الجيب)",
                      "الضمان":  "كفالة رسمية سنتين من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-147",
        "name":  "Godox sl60II",
        "nameEn":  "Godox sl60II",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  100,
        "oldPrice":  110,
        "rating":  4.8,
        "reviewsCount":  31,
        "stock":  20,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_godox_sl60iibi.jpg",
        "gallery":  [
                        "images/prod_godox_sl60iibi.jpg",
                        "images/prod_godox_sl60iibi_angle2.jpg",
                        "images/prod_godox_sl60iibi_angle3.jpg",
                        "images/prod_godox_sl60iibi_angle4.jpg"
                    ],
        "description":  "معدات إضاءة استوديو احترافية Godox sl60II بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "specs":  {
                      "الشركة":  "Godox",
                      "التصنيف":  "إضاءات واستوديو احترافي",
                      "الكفالة":  "كفالة رسمية سنة"
                  }
    },
    {
        "id":  "LGT-148",
        "name":  "Godox sl60II bi",
        "nameEn":  "Godox sl60II bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  135,
        "oldPrice":  150,
        "rating":  4.8,
        "reviewsCount":  64,
        "stock":  9,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_godox_sl60iibi.jpg",
        "gallery":  [
                        "images/prod_godox_sl60iibi.jpg",
                        "images/prod_godox_sl60iibi_angle2.jpg",
                        "images/prod_godox_sl60iibi_angle3.jpg"
                    ],
        "description":  "معدات إضاءة استوديو احترافية Godox sl60II bi بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "specs":  {
                      "الشركة":  "Godox",
                      "التصنيف":  "إضاءات واستوديو احترافي",
                      "الكفالة":  "كفالة رسمية سنة"
                  }
    },
    {
        "id":  "LGT-149",
        "name":  "Godox SL100D",
        "nameEn":  "Godox SL100D",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  150,
        "oldPrice":  160,
        "rating":  4.8,
        "reviewsCount":  67,
        "stock":  7,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_godox_sl100d.jpg",
        "gallery":  [
                        "images/prod_godox_sl100d.jpg"
                    ],
        "description":  "معدات إضاءة استوديو احترافية Godox Godox SL100D بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "specs":  {
                      "الشركة":  "Godox",
                      "التصنيف":  "إضاءات واستوديو احترافي",
                      "الكفالة":  "كفالة رسمية سنة"
                  }
    },
    {
        "id":  "LGT-150",
        "name":  "Godox SL100BI",
        "nameEn":  "Godox SL100BI",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  170,
        "oldPrice":  180,
        "rating":  4.8,
        "reviewsCount":  61,
        "stock":  11,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_godox_sl100d.jpg",
        "gallery":  [
                        "images/prod_godox_sl100d.jpg"
                    ],
        "description":  "معدات إضاءة استوديو احترافية Godox Godox SL100BI بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "specs":  {
                      "الشركة":  "Godox",
                      "التصنيف":  "إضاءات واستوديو احترافي",
                      "الكفالة":  "كفالة رسمية سنة"
                  }
    },
    {
        "id":  "LGT-195",
        "name":  "Godox 60*90",
        "nameEn":  "Godox 60*90",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  40,
        "oldPrice":  45,
        "rating":  4.8,
        "reviewsCount":  33,
        "stock":  20,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_godox_v1.jpg",
        "gallery":  [
                        "images/prod_godox_v1.jpg"
                    ],
        "description":  "معدات إضاءة استوديو احترافية Godox 60*90 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "specs":  {
                      "الشركة":  "Godox",
                      "التصنيف":  "إضاءات واستوديو احترافي",
                      "الكفالة":  "كفالة رسمية سنة"
                  }
    },
    {
        "id":  "LGT-201",
        "name":  "Godox 80*120",
        "nameEn":  "Godox 80*120",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  35,
        "oldPrice":  40,
        "rating":  4.8,
        "reviewsCount":  45,
        "stock":  8,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_godox_cstand.jpg",
        "gallery":  [
                        "images/prod_godox_cstand.jpg"
                    ],
        "description":  "معدات إضاءة استوديو احترافية Godox 80*120 بدقة لونية فائقة CRI/TLCI 96+ وتحكم لاسلكي كامل.",
        "specs":  {
                      "الشركة":  "Godox",
                      "التصنيف":  "إضاءات واستوديو احترافي",
                      "الكفالة":  "كفالة رسمية سنة"
                  }
    },
    {
        "id":  "STN-301",
        "name":  "Monopod MP208F + VT1510",
        "nameEn":  "Monopod MP208F + VT1510",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  60,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  40,
        "stock":  19,
        "badge":  "تحمل عالي",
        "image":  "images/prod_mp208f_monopod.jpg",
        "gallery":  [
                        "images/prod_mp208f_monopod.jpg"
                    ],
        "description":  "ستاند وترايبود تصوير احترافي Monopod MP208F + VT1510 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى أو ألياف كربون",
                      "الاستخدام":  "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
                  }
    },
    {
        "id":  "STN-302",
        "name":  "Monopod MP4208F Fiber +VT-3510",
        "nameEn":  "Monopod MP4208F Fiber +VT-3510",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  110,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  56,
        "stock":  18,
        "badge":  "تحمل عالي",
        "image":  "images/prod_vt3510_tripod.jpg",
        "gallery":  [
                        "images/prod_vt3510_tripod.jpg",
                        "images/prod_vt3510_tripod_angle2.jpg",
                        "images/prod_vt3510_tripod_angle3.jpg"
                    ],
        "description":  "ستاند وترايبود تصوير احترافي Monopod MP4208F Fiber +VT-3510 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى أو ألياف كربون",
                      "الاستخدام":  "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
                  }
    },
    {
        "id":  "STN-309",
        "name":  "Tripod  VT-890H Multi Function",
        "nameEn":  "Tripod  VT-890H Multi Function",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  35,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  28,
        "stock":  7,
        "badge":  "تحمل عالي",
        "image":  "images/prod_vt3510_tripod.jpg",
        "gallery":  [
                        "images/prod_vt3510_tripod.jpg",
                        "images/prod_vt3510_tripod_angle2.jpg"
                    ],
        "description":  "ستاند وترايبود تصوير احترافي Tripod  VT-890H Multi Function بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى أو ألياف كربون",
                      "الاستخدام":  "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
                  }
    },
    {
        "id":  "STN-312",
        "name":  "Tripod VT-866",
        "nameEn":  "Tripod VT-866",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  40,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  28,
        "stock":  10,
        "badge":  "تحمل عالي",
        "image":  "images/prod_manfrotto_504x.jpg",
        "gallery":  [
                        "images/prod_manfrotto_504x.jpg",
                        "images/prod_manfrotto_504x_angle2.jpg",
                        "images/prod_manfrotto_504x_angle3.jpg",
                        "images/prod_manfrotto_504x_angle4.jpg"
                    ],
        "description":  "ستاند وترايبود تصوير احترافي Tripod VT-866 بهيكل معدني متين لتحمل الكاميرات والمعدات الثقيلة بأقصى ثبات.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى أو ألياف كربون",
                      "الاستخدام":  "تثبيت الكاميرات والإضاءات في الاستوديو والميدان"
                  }
    },
    {
        "id":  "ACC-342",
        "name":  "SmallRig VB50 mini V Mount Battery 50Wh 3579B",
        "nameEn":  "SmallRig VB50 mini V Mount Battery 50Wh 3579B",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  120,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  76,
        "stock":  14,
        "badge":  "SmallRig",
        "image":  "images/prod_smallrig_vb50.jpg",
        "gallery":  [
                        "images/prod_smallrig_vb50.jpg"
                    ],
        "description":  "منتج SmallRig الأصلي SmallRig VB50 mini V Mount Battery 50Wh 3579B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "SmallRig",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-343",
        "name":  "SmallRig VB99 Mini V-Mount Battery 99Wh 3580B",
        "nameEn":  "SmallRig VB99 Mini V-Mount Battery 99Wh 3580B",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  145,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  31,
        "stock":  7,
        "badge":  "SmallRig",
        "image":  "images/prod_smallrig_vb99.jpg",
        "gallery":  [
                        "images/prod_smallrig_vb99.jpg"
                    ],
        "description":  "منتج SmallRig الأصلي SmallRig VB99 Mini V-Mount Battery 99Wh 3580B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "SmallRig",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-344",
        "name":  "SmallRig VB99 Pro V-Mount Battery 99Wh 4292",
        "nameEn":  "SmallRig VB99 Pro V-Mount Battery 99Wh 4292",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  200,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  31,
        "stock":  5,
        "badge":  "SmallRig",
        "image":  "images/prod_smallrig_vb99.jpg",
        "gallery":  [
                        "images/prod_smallrig_vb99.jpg"
                    ],
        "description":  "منتج SmallRig الأصلي SmallRig VB99 Pro V-Mount Battery 99Wh 4292 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "SmallRig",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-345",
        "name":  "SmallRig VB155 Mini V-Mount Battery 155Wh 3581B",
        "nameEn":  "SmallRig VB155 Mini V-Mount Battery 155Wh 3581B",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  240,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  65,
        "stock":  13,
        "badge":  "SmallRig",
        "image":  "images/prod_smallrig_vb99.jpg",
        "gallery":  [
                        "images/prod_smallrig_vb99.jpg"
                    ],
        "description":  "منتج SmallRig الأصلي SmallRig VB155 Mini V-Mount Battery 155Wh 3581B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "SmallRig",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-346",
        "name":  "SmallRig x Caleb Pike VB212 Mini V-Mount Battery 212Wh 4293",
        "nameEn":  "SmallRig x Caleb Pike VB212 Mini V-Mount Battery 212Wh 4293",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  295,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  39,
        "stock":  17,
        "badge":  "SmallRig",
        "image":  "images/prod_smallrig_vb99.jpg",
        "gallery":  [
                        "images/prod_smallrig_vb99.jpg"
                    ],
        "description":  "منتج SmallRig الأصلي SmallRig x Caleb Pike VB212 Mini V-Mount Battery 212Wh 4293 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "SmallRig",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-356",
        "name":  "SmallRig Camera Cage for Sony FX30 and FX3  4183B",
        "nameEn":  "SmallRig Camera Cage for Sony FX30 and FX3  4183B",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  80,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  31,
        "stock":  6,
        "badge":  "SmallRig",
        "image":  "images/prod_smallrig_fx3_cage.jpg",
        "gallery":  [
                        "images/prod_smallrig_fx3_cage.jpg",
                        "images/prod_smallrig_fx3_cage_angle2.jpg",
                        "images/prod_smallrig_fx3_cage_angle3.jpg"
                    ],
        "description":  "منتج SmallRig الأصلي SmallRig Camera Cage for Sony FX30 and FX3  4183B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "SmallRig",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-358",
        "name":  "SmallRig Camera Cage for Sony a7 IV / a7R V / a7S III 3667B",
        "nameEn":  "SmallRig Camera Cage for Sony a7 IV / a7R V / a7S III 3667B",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  65,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  79,
        "stock":  19,
        "badge":  "SmallRig",
        "image":  "images/prod_smallrig_a7iv_cage.jpg",
        "gallery":  [
                        "images/prod_smallrig_a7iv_cage.jpg",
                        "images/prod_smallrig_a7iv_cage_angle2.jpg",
                        "images/prod_smallrig_a7iv_cage_angle3.jpg",
                        "images/prod_smallrig_a7iv_cage_angle4.jpg"
                    ],
        "description":  "منتج SmallRig الأصلي SmallRig Camera Cage for Sony a7 IV / a7R V / a7S III 3667B بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "SmallRig",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-362",
        "name":  "SmallRig Top Handle with Shoe Mount (Lite) 3764",
        "nameEn":  "SmallRig Top Handle with Shoe Mount (Lite) 3764",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  30,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  53,
        "stock":  12,
        "badge":  "SmallRig",
        "image":  "images/prod_smallrig_top_handle.jpg",
        "gallery":  [
                        "images/prod_smallrig_top_handle.jpg",
                        "images/prod_smallrig_top_handle_angle2.jpg",
                        "images/prod_smallrig_top_handle_angle3.jpg",
                        "images/prod_smallrig_top_handle_angle4.jpg"
                    ],
        "description":  "منتج SmallRig الأصلي SmallRig Top Handle with Shoe Mount (Lite) 3764 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "SmallRig",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-406",
        "name":  "Ulanzi OM-01 Multi function bag",
        "nameEn":  "Ulanzi OM-01 Multi function bag",
        "category":  "bags",
        "brand":  "Ulanzi",
        "price":  50,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  47,
        "stock":  10,
        "badge":  "Ulanzi",
        "image":  "images/prod_peakdesign_everyday.jpg",
        "gallery":  [
                        "images/prod_peakdesign_everyday.jpg",
                        "images/prod_peakdesign_everyday_angle2.jpg",
                        "images/prod_peakdesign_everyday_angle3.jpg",
                        "images/prod_peakdesign_everyday_angle4.jpg"
                    ],
        "description":  "منتج Ulanzi الأصلي Ulanzi OM-01 Multi function bag بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "Ulanzi",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-407",
        "name":  "ulanzi backpack bp04",
        "nameEn":  "ulanzi backpack bp04",
        "category":  "bags",
        "brand":  "Ulanzi",
        "price":  130,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  30,
        "stock":  13,
        "badge":  "Ulanzi",
        "image":  "images/prod_lowepro_protactic.jpg",
        "gallery":  [
                        "images/prod_lowepro_protactic.jpg",
                        "images/prod_lowepro_protactic_angle2.jpg",
                        "images/prod_lowepro_protactic_angle3.jpg",
                        "images/prod_lowepro_protactic_angle4.jpg"
                    ],
        "description":  "منتج Ulanzi الأصلي ulanzi backpack bp04 بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "Ulanzi",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-408",
        "name":  "ulanzi backpack bp09 22L",
        "nameEn":  "ulanzi backpack bp09 22L",
        "category":  "bags",
        "brand":  "Ulanzi",
        "price":  100,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  40,
        "stock":  11,
        "badge":  "Ulanzi",
        "image":  "images/prod_ulanzi_bp09.jpg",
        "gallery":  [
                        "images/prod_ulanzi_bp09.jpg",
                        "images/prod_ulanzi_bp09_angle2.jpg",
                        "images/prod_ulanzi_bp09_angle3.jpg",
                        "images/prod_ulanzi_bp09_angle4.jpg"
                    ],
        "description":  "منتج Ulanzi الأصلي ulanzi backpack bp09 22L بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "Ulanzi",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-409",
        "name":  "ulanzi backpack AB01 TAI 38L",
        "nameEn":  "ulanzi backpack AB01 TAI 38L",
        "category":  "bags",
        "brand":  "Ulanzi",
        "price":  250,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  37,
        "stock":  12,
        "badge":  "Ulanzi",
        "image":  "images/prod_ulanzi_ab01.jpg",
        "gallery":  [
                        "images/prod_ulanzi_ab01.jpg"
                    ],
        "description":  "منتج Ulanzi الأصلي ulanzi backpack AB01 TAI 38L بتصنيع دقيق من خامات عالية الجودة لبيئات التصوير الاحترافية.",
        "specs":  {
                      "العلامة التجارية":  "Ulanzi",
                      "الضمان":  "كفالة الوكيل المعتمد"
                  }
    },
    {
        "id":  "MON-449",
        "name":  "Desview T22 Teleprompter",
        "nameEn":  "Desview T22 Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  600,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  49,
        "stock":  10,
        "badge":  "ملقن نصوص",
        "image":  "images/prod_desview_t3.jpg",
        "gallery":  [
                        "images/prod_desview_t3.jpg",
                        "images/prod_desview_t3_angle2.jpg"
                    ],
        "description":  "Desview T22 Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
        "specs":  {
                      "العلامة التجارية":  "Desview",
                      "التطبيق":  "شاشات عرض وتلقين احترافية",
                      "الكفالة":  "كفالة رسمية سنة"
                  }
    },
    {
        "id":  "MON-454",
        "name":  "Desview T3 Teleprompter",
        "nameEn":  "Desview T3 Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  115,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  49,
        "stock":  9,
        "badge":  "ملقن نصوص",
        "image":  "images/prod_desview_t3.jpg",
        "gallery":  [
                        "images/prod_desview_t3.jpg",
                        "images/prod_desview_t3_angle2.jpg",
                        "images/prod_desview_t3_angle3.jpg"
                    ],
        "description":  "Desview T3 Teleprompter عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
        "specs":  {
                      "العلامة التجارية":  "Desview",
                      "التطبيق":  "شاشات عرض وتلقين احترافية",
                      "الكفالة":  "كفالة رسمية سنة"
                  }
    },
    {
        "id":  "MON-478",
        "name":  "feelworld lut7s pro",
        "nameEn":  "feelworld lut7s pro",
        "category":  "monitors",
        "brand":  "FeelWorld",
        "price":  375,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  17,
        "stock":  7,
        "badge":  "شاشة مونيتر",
        "image":  "images/prod_feelworld_lut7.jpg",
        "gallery":  [
                        "images/prod_feelworld_lut7.jpg",
                        "images/prod_feelworld_lut7_angle2.jpg",
                        "images/prod_feelworld_lut7_angle3.jpg",
                        "images/prod_feelworld_lut7_angle4.jpg"
                    ],
        "description":  "feelworld lut7s pro عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
        "specs":  {
                      "العلامة التجارية":  "FeelWorld",
                      "التطبيق":  "شاشات عرض وتلقين احترافية",
                      "الكفالة":  "كفالة رسمية سنة"
                  }
    },
    {
        "id":  "MON-481",
        "name":  "feelworld f6 plus",
        "nameEn":  "feelworld f6 plus",
        "category":  "monitors",
        "brand":  "FeelWorld",
        "price":  170,
        "oldPrice":  null,
        "rating":  4.8,
        "reviewsCount":  39,
        "stock":  12,
        "badge":  "شاشة مونيتر",
        "image":  "images/prod_feelworld_f6_plus.jpg",
        "gallery":  [
                        "images/prod_feelworld_f6_plus.jpg",
                        "images/prod_feelworld_f6_plus_angle2.jpg",
                        "images/prod_feelworld_f6_plus_angle3.jpg",
                        "images/prod_feelworld_f6_plus_angle4.jpg"
                    ],
        "description":  "feelworld f6 plus عالي الدقة والسطوع لاستوديوهات التلفزيون وصناع المحتوى والتصوير السينمائي.",
        "specs":  {
                      "العلامة التجارية":  "FeelWorld",
                      "التطبيق":  "شاشات عرض وتلقين احترافية",
                      "الكفالة":  "كفالة رسمية سنة"
                  }
    }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_CATEGORIES, INITIAL_PRODUCTS };
}

