// ==========================================
// TOP CAM & Accessories - Master Product Database
// Official Authorized Store - Jordan
// EST. 2024
// ==========================================

const INITIAL_CATEGORIES = [
    {
        "id":  "all",
        "name":  "ط¬ظ…ظٹط¹ ط§ظ„ظ…ط¹ط¯ط§طھ",
        "icon":  "fa-layer-group",
        "count":  82
    },
    {
        "id":  "cameras",
        "name":  "ظƒط§ظ…ظٹط±ط§طھ ط³ظٹظ†ظ…ط§ ظˆظ…ظٹط±ظˆط±ظ„ظٹط³",
        "icon":  "fa-camera",
        "count":  45,
        "image":  "images/prod_sony_fx3_white.jpg"
    },
    {
        "id":  "filters",
        "name":  "ط¹ط¯ط³ط§طھ ظˆظپظ„ط§طھط±",
        "icon":  "fa-circle-half-stroke",
        "count":  56,
        "image":  "images/prod_sony_2470_gm2.png"
    },
    {
        "id":  "lighting",
        "name":  "ط¥ط¶ط§ط،ط§طھ ظˆط³ظˆظپطھ ط¨ظˆظƒط³",
        "icon":  "fa-lightbulb",
        "count":  60,
        "image":  "images/prod_godox_sl100d.jpg"
    },
    {
        "id":  "audio",
        "name":  "ظ…ط§ظٹظƒط§طھ ظˆط£ظ†ط¸ظ…ط© طµظˆطھ",
        "icon":  "fa-microphone",
        "count":  55,
        "image":  "images/prod_rode_wigo2.png"
    },
    {
        "id":  "gimbals",
        "name":  "ط³طھظٹط¨ظ„ط§ظٹط²ط±ط² ظˆط¬ظٹظ…ط¨ظ„",
        "icon":  "fa-gamepad",
        "count":  23,
        "image":  "images/prod_dji_rs4_pro.jpg"
    },
    {
        "id":  "stands",
        "name":  "ط³طھط§ظ†ط¯ط§طھ ظˆطھط±ط§ظٹط¨ظˆط¯",
        "icon":  "fa-monument",
        "count":  18,
        "image":  "images/prod_manfrotto_504x.jpg"
    },
    {
        "id":  "cages",
        "name":  "ظƒظٹط¬ ظƒط§ظ…ظٹط±ط§ ظˆطھط¬ظ‡ظٹط²ط§طھ",
        "icon":  "fa-border-all",
        "count":  29,
        "image":  "images/prod_smallrig_fx3_cage.jpg"
    },
    {
        "id":  "monitors",
        "name":  "ط´ط§ط´ط§طھ ظˆطھظ„ظ‚ظٹظ† Teleprompter",
        "icon":  "fa-tv",
        "count":  27,
        "image":  "images/prod_feelworld_lut7.jpg"
    },
    {
        "id":  "chargers_batteries",
        "name":  "ط´ظˆط§ط­ظ† ظˆط¨ط·ط§ط±ظٹط§طھ ط³ظٹظ†ظ…ط§",
        "icon":  "fa-battery-full",
        "count":  11,
        "image":  "images/prod_smallrig_vb99.jpg"
    },
    {
        "id":  "bags",
        "name":  "ط´ظ†ط§طھظٹ ظˆط­ظ‚ط§ط¦ط¨ ظ…ط¹ط¯ط§طھ",
        "icon":  "fa-suitcase-rolling",
        "count":  8,
        "image":  "images/prod_ulanzi_bp09.jpg"
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
        "badge":  "ظˆظپط± $50",
        "section":  "trending",
        "image":  "images/cam_sony_a7iii.jpg",
        "gallery":  [
                        "images/cam_sony_a7iii.jpg",
                        "images/prod_sony_a7iv_white.jpg"
                    ],
        "description":  "ظƒط§ظ…ظٹط±ط§ ط³ظˆظ†ظٹ Sony A7 III ط§ظ„ط§ط­طھط±ط§ظپظٹط© ط§ظ„ط£طµظ„ظٹط© ظ…ط¹ ظƒظپط§ظ„ط© ط³ظ†طھظٹظ† ظƒط§ظ…ظ„ط© ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ط±ط³ظ…ظٹ ظپظٹ ط§ظ„ط£ط±ط¯ظ†طŒ طھط¯ط¹ظ… ط£ط¹ظ„ظ‰ ظ…ط¹ط§ظٹظٹط± ط§ظ„طھطµظˆظٹط± ط§ظ„ظپظˆطھظˆط؛ط±ط§ظپظٹ ظˆط§ظ„ط³ظٹظ†ظ…ط§ط¦ظٹ.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "24.2MP Full-Frame Exmor R BSI CMOS",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "4K 30p HDR (HLG) \u0026 S-Log3 / 1080p 120fps",
                      "ظ†ط¸ط§ظ… ط§ظ„طھط±ظƒظٹط²":  "693 ظ†ظ‚ط§ط· ظپظˆظƒط³ ظ…ط¹ Real-Time Eye AF ظ„ظ„ط¨ط´ط± ظˆط§ظ„ط­ظٹظˆط§ظ†ط§طھ",
                      "ظ…ط§ظ†ط¹ ط§ظ„ط§ظ‡طھط²ط§ط²":  "5-Axis In-Body Image Stabilization (5.0 ظˆظ‚ظپط§طھ)",
                      "ط­ط³ط§ط³ظٹط© ط§ظ„ط¶ظˆط،":  "ISO 100-51,200 (ظٹطھظˆط³ط¹ ط­طھظ‰ 204,800)",
                      "ط³ط±ط¹ط© ط§ظ„ط§ظ„طھظ‚ط§ط·":  "10 ط¥ط·ط§ط±ط§طھ ط¨ط§ظ„ط«ط§ظ†ظٹط© ظ…ط¹ طھطھط¨ط¹ AF/AE ظƒط§ظ…ظ„",
                      "ط§ظ„ظ…ظ†ط§ظپط° ظˆط§ظ„ط°ط§ظƒط±ط©":  "ظ…ظ†ظپط°ط§ظ† ظ…ط²ط¯ظˆط¬ط§ظ† Dual SD Slots (UHS-II/UHS-I)",
                      "ط§ظ„ط¨ط·ط§ط±ظٹط©":  "Sony NP-FZ100 (ط­طھظ‰ 710 ظ„ظ‚ط·ط§طھ)",
                      "ط§ظ„ظ…ط§ظ†طھ":  "Sony E-Mount (Full-Frame)",
                      "ط§ظ„ط´ط§ط´ط©":  "ط´ط§ط´ط© ظ„ظ…ط³ 3.0 ط¨ظˆطµط© ظ‚ط§ط¨ظ„ط© ظ„ظ„ط¥ظ…ط§ظ„ط© ط¨ط¯ظ‚ط© 921K ظ†ظ‚ط·ط©",
                      "ط§ظ„ظˆط²ظ†":  "650 ط¬ظ… ظ‡ظٹظƒظ„ ط§ظ„ظƒط§ظ…ظٹط±ط§",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
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
        "badge":  "ظˆظپط± $50",
        "section":  "trending",
        "image":  "images/cam_sony_a7iv.jpg",
        "gallery":  [
                        "images/cam_sony_a7iv.jpg",
                        "images/prod_sony_a7iv_white.jpg"
                    ],
        "description":  "ظƒط§ظ…ظٹط±ط§ ط³ظˆظ†ظٹ Sony A7 IV ط§ظ„ط§ط­طھط±ط§ظپظٹط© ط¨ظ…ط³طھط´ط¹ط± 33 ظ…ظٹط¬ط§ط¨ظƒط³ظ„ ظˆط£ظ„ظˆط§ظ† S-Cinetone ط§ظ„ط³ظٹظ†ظ…ط§ط¦ظٹط© ط§ظ„ظ…ط°ظ‡ظ„ط© ظ…ط¹ ظƒظپط§ظ„ط© ط§ظ„ظˆظƒظٹظ„ ظپظٹ ط§ظ„ط£ط±ط¯ظ†.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "33MP Full-Frame Exmor R BSI CMOS",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "4K 60p 10-Bit 4:2:2 All-Intra / 7K Oversampling ظ…ط¹ S-Cinetone",
                      "ظ†ط¸ط§ظ… ط§ظ„طھط±ظƒظٹط²":  "759 ظ†ظ‚ط·ط© طھط±ظƒظٹط² ط¨ط¤ط±ظٹ ط°ظƒظٹ ظ…ط¹ طھطھط¨ط¹ ط¹ظٹظˆظ† ط§ظ„ط¨ط´ط± ظˆط§ظ„ط­ظٹظˆط§ظ†ط§طھ ظˆط§ظ„ط·ظٹظˆط±",
                      "ظ…ط§ظ†ط¹ ط§ظ„ط§ظ‡طھط²ط§ط²":  "5-Axis In-Body Stabilization ط­طھظ‰ 5.5 ظˆظ‚ظپط§طھ",
                      "ط§ظ„ظ…ظ†ط§ظپط° ظˆط§ظ„ط°ط§ظƒط±ط©":  "ظ…ظ†ظپط°ط§ظ† ظ…ط²ط¯ظˆط¬ط§ظ†: CFexpress Type A ظˆ SD UHS-II",
                      "ط§ظ„ط´ط§ط´ط©":  "ط´ط§ط´ط© ظ„ظ…ط³ظٹط© ظ…طھط؛ظٹط±ط© ط§ظ„ط²ظˆط§ظٹط§ Vari-Angle LCD ط¨ط¯ظ‚ط© 1.03M",
                      "ط§ظ„ط¨ط·ط§ط±ظٹط©":  "Sony NP-FZ100 (ط­طھظ‰ 580 ظ„ظ‚ط·ط©)",
                      "ط§ظ„ظ…ط§ظ†طھ":  "Sony E-Mount",
                      "ط§ظ„ظˆط²ظ†":  "658 ط¬ظ…",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
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
        "badge":  "ظˆظپط± $100",
        "section":  "trending",
        "image":  "images/cam_sony_a7siii.jpg",
        "gallery":  [
                        "images/cam_sony_a7siii.jpg",
                        "images/prod_sony_fx3_white.jpg"
                    ],
        "description":  "ظ…ظ„ظƒ ط§ظ„ط¥ط¶ط§ط،ط© ط§ظ„ظ…ظ†ط®ظپط¶ط© ظˆط§ظ„ظپظٹط¯ظٹظˆ ط¨ظ„ط§ ظ…ظ†ط§ط²ط¹: 4K 120p 10-Bit 4:2:2 ط¨ط¯ظˆظ† ط£ظٹ ط§ط±طھظپط§ط¹ ط­ط±ط§ط±ط© ظ…ط¹ ظ…ط¹ط§ظ„ط¬ BIONZ XR ط§ظ„ظ…ط²ط¯ظˆط¬.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "12.1MP Full-Frame Exmor R BSI CMOS ظ…ط®طµطµ ظ„ظ„ط¥ط¶ط§ط،ط© ط§ظ„ظ…ظ†ط®ظپط¶ط© ظˆط§ظ„ظپظٹط¯ظٹظˆ",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "4K 120p 10-Bit 4:2:2 All-Intra ط¨ط¯ظˆظ† ظƒط±ظˆط¨ ظˆط¨ط¯ظˆظ† ط§ط±طھظپط§ط¹ ط­ط±ط§ط±ط© / 16-Bit RAW",
                      "ظ†ط¸ط§ظ… ط§ظ„طھط±ظƒظٹط²":  "759 ظ†ظ‚ط·ط© ظپظˆظƒط³ ظ…ط¹ ط­ط³ط§ط³ظٹط© ظپط§ط¦ظ‚ط© ط­طھظ‰ EV -6 ظپظٹ ط§ظ„ط¸ظ„ط§ظ… ط§ظ„ط¯ط§ظ…ط³",
                      "ظ…ط§ظ†ط¹ ط§ظ„ط§ظ‡طھط²ط§ط²":  "5-Axis IBIS ظ…ط¹ ظˆط¶ط¹ Active Mode ط§ظ„ط±ظ‚ظ…ظٹ ط§ظ„ظ…طھظ‚ط¯ظ…",
                      "ط­ط³ط§ط³ظٹط© ط§ظ„ط¶ظˆط،":  "ظ†ط·ط§ظ‚ ظ‡ط§ط¦ظ„ ISO 80-102,400 (ظٹطھظˆط³ط¹ ط­طھظ‰ 409,600)",
                      "ط§ظ„ظ…ظ†ط§ظپط° ظˆط§ظ„ط°ط§ظƒط±ط©":  "ظ…ظ†ظپط°ط§ظ† ط«ظ†ط§ط¦ظٹط§ظ† CFexpress Type A ظˆ SD UHS-II",
                      "ط§ظ„ط´ط§ط´ط© ظˆط§ظ„ظ…ظ†ط¸ط§ط±":  "ط´ط§ط´ط© ظ„ظ…ط³ ظ…ظپطµظ„ظٹط© + ظ…ظ†ط¸ط§ط± OLED EVF ط¨ط¯ظ‚ط© 9.44 ظ…ظ„ظٹظˆظ† ظ†ظ‚ط·ط©",
                      "ط§ظ„ظˆط²ظ†":  "699 ط¬ظ…",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
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
        "reviewsCount":  64,
        "stock":  2,
        "badge":  "ظˆظپط± $90",
        "section":  "trending",
        "image":  "images/cam_sony_a7rv.jpg",
        "gallery":  [
                        "images/cam_sony_a7rv.jpg"
                    ],
        "description":  "ظˆط­ط´ ط§ظ„ط¯ظ‚ط© ط§ظ„ظپط§ط¦ظ‚ط© ظˆط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ ط¨ط¯ظ‚ط© 61 ظ…ظٹط¬ط§ط¨ظƒط³ظ„ ظˆظ…ط¹ط§ظ„ط¬ AI ظ…ط®طµطµ ظ„ظ„طھط±ظƒظٹط² ظˆط§ظ„طھطھط¨ط¹طŒ ظ…ط¹ طھط³ط¬ظٹظ„ ظپظٹط¯ظٹظˆ 8K 24p.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "61MP Full-Frame Exmor R BSI CMOS Sensor ظپط§ط¦ظ‚ ط§ظ„طھظپط§طµظٹظ„",
                      "ط§ظ„ظ…ط¹ط§ظ„ط¬ ط§ظ„ط°ظƒظٹ":  "ظˆط­ط¯ط© ظ…ط¹ط§ظ„ط¬ط© AI Processing Unit ظ…ط®طµطµط© ظ„ظ„طھط¹ط±ظپ ط¹ظ„ظ‰ ط§ظ„ط£ط´ط®ط§طµ ظˆط§ظ„ط³ظٹط§ط±ط§طھ ظˆط§ظ„ظ‚ط·ط§ط±ط§طھ ظˆط§ظ„ط·ط§ط¦ط±ط§طھ",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "8K 24p / 4K 60p 10-Bit 4:2:2 ظ…ط¹ S-Cinetone ظˆ S-Log3",
                      "ظ…ط§ظ†ط¹ ط§ظ„ط§ظ‡طھط²ط§ط²":  "طھط«ط¨ظٹطھ ط®ظ…ط§ط³ظٹ ط§ظ„ظ…ط­ط§ظˆط± ظپظٹ ط§ظ„ظ‡ظٹظƒظ„ ط­طھظ‰ 8.0 ظˆظ‚ظپط§طھ ظƒط§ظ…ظ„ط©",
                      "ط§ظ„ط´ط§ط´ط©":  "ط´ط§ط´ط© ظ…ط¨طھظƒط±ط© 4-Axis Multi-Angle LCD طھط¬ظ…ط¹ ط¨ظٹظ† ط§ظ„ط¥ظ…ط§ظ„ط© ظˆط§ظ„ظپطھط­ ط§ظ„ط¬ط§ظ†ط¨ظٹ",
                      "ط§ظ„ظ…ظ†ط¸ط§ط±":  "ظ…ظ†ط¸ط§ط± ط¥ظ„ظƒطھط±ظˆظ†ظٹ EVF ط¨ط¯ظ‚ط© 9.44M ظ†ظ‚ط·ط© ط¨ظ…ط¹ط¯ظ„ 120fps",
                      "ط§ظ„ظˆط²ظ†":  "723 ط¬ظ…",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
                  }
    },
    {
        "id":  "CAM-006",
        "name":  "Sony FX30 Digital Cinema Camera",
        "nameEn":  "Sony FX30 Digital Cinema Camera",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  1280,
        "oldPrice":  1350,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  5,
        "badge":  "ظˆظپط± $70",
        "section":  "trending",
        "image":  "images/prod_sony_fx3_white.jpg",
        "gallery":  [
                        "images/prod_sony_fx3_white.jpg",
                        "images/prod_smallrig_fx3_cage.jpg"
                    ],
        "description":  "ط¨ظˆط§ط¨طھظƒ ط§ظ„ط§ط­طھط±ط§ظپظٹط© ظ„ط¹ط§ظ„ظ… ط®ط· ط§ظ„ط³ظٹظ†ظ…ط§ ط§ظ„ط±ط³ظ…ظٹ Sony Cinema Line ظ…ط¹ ظ…ط³طھط´ط¹ط± Super 35 ط¨ط¯ظ‚ط© 6K Oversampling ظˆطھط¨ط±ظٹط¯ ظ†ط´ط·.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "26MP APS-C / Super 35 Exmor R BSI CMOS Sensor",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "4K ط­طھظ‰ 120p / 6K Oversampling ط¨ط¯ظ‚ط© 10-Bit 4:2:2 All-Intra",
                      "ط£ظ†ط¸ظ…ط© ط§ظ„ط£ظ„ظˆط§ظ†":  "S-CinetoneطŒ S-Log3 ظˆط¯ط¹ظ… طھط­ظ…ظٹظ„ User LUTs ظ…ط®طµطµط© ط¯ط§ط®ظ„ ط§ظ„ظƒط§ظ…ظٹط±ط§",
                      "ظ†ط¸ط§ظ… ط§ظ„طھط¨ط±ظٹط¯":  "ظ…ط±ظˆط­ط© طھط¨ط±ظٹط¯ ظ…ط¯ظ…ط¬ط© طھطھظٹط­ ط§ظ„طھطµظˆظٹط± ط§ظ„ظ…ط³طھظ…ط± ط¨ط¯ظˆظ† طھظˆظ‚ظپ ظ†ظ‡ط§ط¦ظٹط§ظ‹",
                      "ظ‡ظٹظƒظ„ ط§ظ„ظƒط§ظ…ظٹط±ط§":  "ظ‡ظٹظƒظ„ ط³ظٹظ†ظ…ط§ط¦ظٹ ظ…طھظٹظ† ظ…ط²ظˆط¯ ط¨ظ€ 5 ط¨ط±ط§ط؛ظٹ طھط«ط¨ظٹطھ 1/4\"-20 ظ…ط¨ط§ط´ط±ط© ط¨ط¯ظˆظ† ط§ظ„ط­ط§ط¬ط© ظ„ظƒظٹط¬ ط¥ط¶ط§ظپظٹ",
                      "ط§ظ„ظˆط²ظ†":  "646 ط¬ظ… ظپظ‚ط·",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
                  }
    },
    {
        "id":  "CAM-009",
        "name":  "Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens",
        "nameEn":  "Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  750,
        "oldPrice":  800,
        "rating":  4.8,
        "reviewsCount":  86,
        "stock":  7,
        "badge":  "ظˆظپط± $50",
        "section":  "trending",
        "image":  "images/cam_sony_zve10.jpg",
        "gallery":  [
                        "images/cam_sony_zve10.jpg"
                    ],
        "description":  "ط§ظ„ط¬ظٹظ„ ط§ظ„ط«ط§ظ†ظٹ ط§ظ„ط£ط­ط¯ط« ظ…ظ† ظƒط§ظ…ظٹط±ط§ طµظ†ط§ط¹ ط§ظ„ظ…ط­طھظˆظ‰ ط§ظ„ط£ظƒط«ط± ظ…ط¨ظٹط¹ط§ظ‹ ظ…ط¹ ظ…ط³طھط´ط¹ط± 26MP ظˆط¨ط·ط§ط±ظٹط© NP-FZ100 ط§ظ„ظƒط¨ظٹط±ط© ظˆظپظٹط¯ظٹظˆ 4K 60p.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "26MP APS-C Exmor R CMOS Sensor ط§ظ„ط£ط­ط¯ط«",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "4K 60p 10-Bit 4:2:2 ظ…ط¹ طھظ‚ظ†ظٹط© 5.6K Oversampling ط§ظ„ظپط§ط¦ظ‚ط©",
                      "ط§ظ„ط¨ط·ط§ط±ظٹط©":  "طھط±ظ‚ظٹط© ط¶ط®ظ…ط© ظ„ط¨ط·ط§ط±ظٹط© NP-FZ100 ط§ظ„ظƒط¨ظٹط±ط© ظ„طھط¯ظˆظ… ط³ط§ط¹ط§طھ ط·ظˆظٹظ„ط©",
                      "ط§ظ„طھط±ظƒظٹط² ظˆط§ظ„ظ…ظٹط²ط§طھ":  "ط²ط± Cinematic Vlog Setting ظˆ Product Showcase Mode ظˆظ…ظٹظƒط±ظˆظپظˆظ† ط§طھط¬ط§ظ‡ظٹ 3 ظƒط¨ط³ظˆظ„ط§طھ",
                      "ط§ظ„ط¹ط¯ط³ط© ط§ظ„ظ…ط±ظپظ‚ط©":  "ط¹ط¯ط³ط© ط²ظˆظ… ط³ظˆظ†ظٹ E PZ 16-50mm f/3.5-5.6 OSS II ط§ظ„ظ…ط¯ظ…ط¬ط©",
                      "ط§ظ„ظˆط²ظ†":  "377 ط¬ظ…",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
                  }
    },
    {
        "id":  "CAM-014",
        "name":  "Sony FX6 Full-Frame Cinema Camera (Body Only)",
        "nameEn":  "Sony FX6 Full-Frame Cinema Camera (Body Only)",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  4200,
        "oldPrice":  4350,
        "rating":  5.0,
        "reviewsCount":  29,
        "stock":  2,
        "badge":  "ظˆظپط± $150",
        "section":  "trending",
        "image":  "images/cam_sony_fx6.jpg",
        "gallery":  [
                        "images/cam_sony_fx6.jpg"
                    ],
        "description":  "ظƒط§ظ…ظٹط±ط§ ط§ظ„ط³ظٹظ†ظ…ط§ ط§ظ„ط§ط­طھط±ط§ظپظٹط© ط§ظ„ظ…طھظƒط§ظ…ظ„ط© ط¨ظ…ط³طھط´ط¹ط± ظپظ„ ظپط±ظٹظ… 4K 120p ظˆظپظ„طھط± ND ط¥ظ„ظƒطھط±ظˆظ†ظٹ ظ…طھط؛ظٹط± ظ…ط¯ظ…ط¬ ظˆظ…ط®ط§ط±ط¬ 12G-SDI ظ„ظ„ط¨ط« ط§ظ„طھظ„ظپط²ظٹظˆظ†ظٹ ظˆط§ظ„ط¥ظ†طھط§ط¬ ط§ظ„ط¶ط®ظ….",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "4K Full-Frame 10.2MP Back-Illuminated Exmor R CMOS Sensor",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "DCI 4K 120p / 4K 60p / FHD 240p ظ…ط¹ 15+ ظˆظ‚ظپط© ط¯ظٹظ†ط§ظ…ظٹظƒظٹط© Dynamic Range",
                      "ظپظ„طھط± ND ط§ظ„ط¯ط§ط®ظ„ظٹ":  "ظپظ„طھط± ND ط¥ظ„ظƒطھط±ظˆظ†ظٹ ظ…طھط؛ظٹط± ط«ظˆط±ظٹ ظ…ط¯ظ…ط¬ ظ…ظ† 1/4 ط­طھظ‰ 1/128 ND ط¨ظ„ظ…ط³ط© ط²ط±",
                      "ط§ظ„ظ…ط¯ظ‰ ط§ظ„ط¯ظٹظ†ط§ظ…ظٹظƒظٹ":  "Base ISO ظ…ط²ط¯ظˆط¬ 800 ظˆ 12,800 ظ„ط­ط³ط§ط³ظٹط© ط®ظٹط§ظ„ظٹط© ظپظٹ ط§ظ„ط¸ظ„ط§ظ…",
                      "ط§ظ„ظ…ظ†ط§ظپط° ط§ظ„ط§ط­طھط±ط§ظپظٹط©":  "12G-SDIطŒ HDMI ظƒط§ظ…ظ„طŒ ظ…ط®ط§ط±ط¬ طµظˆطھ XLR ظ…ط²ط¯ظˆط¬ط©طŒ TC In/Out",
                      "ط§ظ„ظˆط²ظ†":  "890 ط¬ظ… ظپظ‚ط· (ط¬ط³ظ… ط§ظ„ظƒط§ظ…ظٹط±ط§ ط®ظپظٹظپ ط¬ط¯ط§ظ‹ ظ„ظ…ط«ط¨طھط§طھ ط§ظ„ط¬ظٹظ…ط¨ظ„)",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
                  }
    },
    {
        "id":  "CAM-108",
        "name":  "Canon EOS R50 18-45mm",
        "nameEn":  "Canon EOS R50 18-45mm",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  540,
        "oldPrice":  580,
        "rating":  4.8,
        "reviewsCount":  73,
        "stock":  6,
        "badge":  "ظˆظپط± $40",
        "section":  "trending",
        "image":  "images/cam_canon_r50.jpg",
        "gallery":  [
                        "images/cam_canon_r50.jpg"
                    ],
        "description":  "ظƒط§ظ…ظٹط±ط§ ظƒط§ظ†ظˆظ† ط§ظ„ظ…ظٹط±ظˆط±ظ„ظٹط³ ط®ظپظٹظپط© ط§ظ„ظˆط²ظ† ظ„ظ„ظ…ط¨طھط¯ط¦ظٹظ† ظˆطµظ†ط§ط¹ ط§ظ„ظ…ط­طھظˆظ‰طŒ ظ…ط¹ ط¹ط¯ط³ط© RF-S 18-45mm ظˆطھط±ظƒظٹط² Dual Pixel CMOS AF II ظپط§ط¦ظ‚ ط§ظ„ط³ط±ط¹ط©.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "24.2MP APS-C CMOS Sensor",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "4K 30p ط¨ط¯ظ‚ط© 6K Oversampling ط¨ط¯ظˆظ† ط§ظ‚طھط·ط§ط¹ / FHD 120p",
                      "ظ†ط¸ط§ظ… ط§ظ„طھط±ظƒظٹط²":  "Dual Pixel CMOS AF II ظٹط؛ط·ظٹ 100% ظ…ظ† ط§ظ„ظƒط§ط¯ط± ظ…ط¹ طھطھط¨ط¹ ط°ظƒظٹ",
                      "ط§ظ„ط´ط§ط´ط©":  "ط´ط§ط´ط© ظ„ظ…ط³ 3.0 ط¨ظˆطµط© ظ…طھط؛ظٹط±ط© ط§ظ„ط²ظˆط§ظٹط§ Vari-Angle",
                      "ط§ظ„ط¹ط¯ط³ط© ط§ظ„ظ…ط±ظپظ‚ط©":  "Canon RF-S 18-45mm f/4.5-6.3 IS STM",
                      "ط§ظ„ظˆط²ظ†":  "375 ط¬ظ… ظ…ط¹ ط§ظ„ط¨ط·ط§ط±ظٹط©",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
                  }
    },
    {
        "id":  "CAM-111",
        "name":  "Canon EOS R8 Body",
        "nameEn":  "Canon EOS R8 Body",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  1050,
        "oldPrice":  1100,
        "rating":  4.9,
        "reviewsCount":  54,
        "stock":  5,
        "badge":  "ظˆظپط± $50",
        "section":  "trending",
        "image":  "images/cam_canon_r8.jpg",
        "gallery":  [
                        "images/cam_canon_r8.jpg"
                    ],
        "description":  "ط£ط®ظپ ظƒط§ظ…ظٹط±ط§ ظپظ„ ظپط±ظٹظ… ظ…ظ† ظƒط§ظ†ظˆظ† ط¨ظ…ط³طھط´ط¹ط± 24.2MP ظ…ظ…ط§ط«ظ„ ظ„ظƒط§ظ…ظٹط±ط§ R6 Mark II ط§ظ„ط±ط§ط¦ط¯ط©طŒ ظˆطھطµظˆظٹط± ظپظٹط¯ظٹظˆ 4K 60p 10-Bit ظ…ط¹ ظƒظپط§ظ„ط© ط§ظ„ظˆظƒظٹظ„ ط³ظ†طھظٹظ†.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "24.2MP Full-Frame CMOS Sensor ظپط§ط¦ظ‚ ط§ظ„ط¬ظˆط¯ط©",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "4K 60p 10-Bit 4:2:2 ظ…ط¹ Canon Log 3 ظˆ 6K Oversampling ط¨ط¯ظ‚ط© ط³ظٹظ†ظ…ط§ط¦ظٹط©",
                      "ظ†ط¸ط§ظ… ط§ظ„طھط±ظƒظٹط²":  "Dual Pixel CMOS AF II ظ…طھط·ظˆط± ظ…ط¹ ط§ظ„طھط¹ط±ظپ ط§ظ„طھظ„ظ‚ط§ط¦ظٹ ط¹ظ„ظ‰ ط§ظ„ط®ظٹظˆظ„ ظˆط§ظ„ط·ط§ط¦ط±ط§طھ ظˆط§ظ„ظ‚ط·ط§ط±ط§طھ",
                      "ط³ط±ط¹ط© ط§ظ„ط§ظ„طھظ‚ط§ط·":  "ط­طھظ‰ 40 ط¥ط·ط§ط±ط§ظ‹ ظپظٹ ط§ظ„ط«ط§ظ†ظٹط© ط¨ط§ظ„ط´ط§طھط± ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ",
                      "ط§ظ„ظˆط²ظ†":  "461 ط¬ظ… ظپظ‚ط· (ط£ط®ظپ ظƒط§ظ…ظٹط±ط§ Full Frame ظپظٹ ظپط¦طھظ‡ط§)",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
                  }
    },
    {
        "id":  "CAM-115",
        "name":  "Canon EOS R6 Mark II Body",
        "nameEn":  "Canon EOS R6 Mark II Body",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  1600,
        "oldPrice":  1680,
        "rating":  4.9,
        "reviewsCount":  81,
        "stock":  4,
        "badge":  "ظˆظپط± $80",
        "section":  "trending",
        "image":  "images/cam_canon_r6ii.jpg",
        "gallery":  [
                        "images/cam_canon_r6ii.jpg"
                    ],
        "description":  "ط§ظ„ظƒط§ظ…ظٹط±ط§ ط§ظ„ظ‡ط¬ظٹظ†ط© ط§ظ„ط´ط§ظ…ظ„ط© ط§ظ„ط£ظƒط«ط± ط·ظ„ط¨ط§ظ‹ ظ„ظ„ظ…ط­طھط±ظپظٹظ†: طھط«ط¨ظٹطھ ط¨طµط±ظٹ IBIS ط­طھظ‰ 8 ظˆظ‚ظپط§طھطŒ طھطµظˆظٹط± ظ…طھطھط§ط¨ط¹ 40fps ظˆظپظٹط¯ظٹظˆ 4K 60p ط¨ط¯ظˆظ† ط£ظٹ ط§ظ‚طھط·ط§ط¹.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "24.2MP Full-Frame CMOS Sensor ظ…ط·ظˆط±",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "4K 60p 10-Bit ط¨ط¯ظˆظ† ظƒط±ظˆط¨ ط¨طھط¬ظ…ظٹط¹ 6K / طھط³ط¬ظٹظ„ ط®ط§ط±ط¬ظٹ 6K RAW ط¹ط¨ط± HDMI",
                      "ظ…ط§ظ†ط¹ ط§ظ„ط§ظ‡طھط²ط§ط²":  "طھط«ط¨ظٹطھ ط¨طµط±ظٹ ط¯ط§ط®ظ„ظٹ IBIS ظ…طھط·ظˆط± ظٹطµظ„ ط­طھظ‰ 8.0 ظˆظ‚ظپط§طھ ظ…ط¹ ط¹ط¯ط³ط§طھ RF ط§ظ„ظ…ط¹طھظ…ط¯ط©",
                      "ط§ظ„ط³ط±ط¹ط©":  "40 ط¥ط·ط§ط±ط§ظ‹ ظپظٹ ط§ظ„ط«ط§ظ†ظٹط© ط¨ط§ظ„ط´ط§طھط± ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ ظ…ط¹ طھطھط¨ط¹ ط§ظ„ظپظˆظƒط³ ظˆط§ظ„طھط¹ط±ظٹط¶ ط§ظ„ظƒط§ظ…ظ„",
                      "ط§ظ„ظ…ظ†ط§ظپط° ظˆط§ظ„ط°ط§ظƒط±ط©":  "ظ…ظ†ظپط°ط§ظ† ظ…ط²ط¯ظˆط¬ط§ظ† ظ„ط¨ط·ط§ظ‚ط§طھ ط§ظ„ط°ط§ظƒط±ط© Dual SD UHS-II",
                      "ط§ظ„ظˆط²ظ†":  "670 ط¬ظ…",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
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
        "badge":  "ظˆظپط± $80",
        "section":  "trending",
        "image":  "images/cam_canon_r5ii.jpg",
        "gallery":  [
                        "images/cam_canon_r5ii.jpg",
                        "images/prod_canon_r5_white.jpg"
                    ],
        "description":  "ط§ظ„ط¹ظ…ظ„ط§ظ‚ ط§ظ„ط«ظˆط±ظٹ ط§ظ„ط¬ط¯ظٹط¯ ظ…ظ† ظƒط§ظ†ظˆظ† ط¨ظ…ط³طھط´ط¹ط± ظ…ظƒط¯ط³ 45MP ظˆظپظٹط¯ظٹظˆ 8K 60p RAW ط¯ط§ط®ظ„ظٹ ظˆظ†ط¸ط§ظ… طھط­ظƒظ… ط¨ظ†ظ‚ط·ط© ط§ظ„ظپظˆظƒط³ ط¨ظ†ط¸ط±ط© ط§ظ„ط¹ظٹظ† Eye Control AF.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "45MP Full-Frame Back-Illuminated Stacked CMOS Sensor ط«ظˆط±ظٹ",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "8K 60p RAW ط¯ط§ط®ظ„ظٹ / 4K 120p 10-Bit 4:2:2 / 4K 60p S-RAW ظ…ط¹ Canon Log 2 ظˆ 3",
                      "ظ†ط¸ط§ظ… ط§ظ„طھط±ظƒظٹط²":  "Eye Control AF (ط§ظ„طھط­ظƒظ… ط¨ظ†ظ‚ط·ط© ط§ظ„ظپظˆظƒط³ ط¨ظ†ط¸ط±ط© ط§ظ„ط¹ظٹظ†) ظ…ط¹ ظ…ط¹ط§ظ„ط¬ Accelerated Capture",
                      "ظ…ط§ظ†ط¹ ط§ظ„ط§ظ‡طھط²ط§ط²":  "طھط«ط¨ظٹطھ ط¨طµط±ظٹ ط¯ط§ط®ظ„ظٹ IBIS ظ…طھط·ظˆط± ظٹطµظ„ ط­طھظ‰ 8.5 ظˆظ‚ظپط§طھ",
                      "ط³ط±ط¹ط© ط§ظ„ط§ظ„طھظ‚ط§ط·":  "30 ط¥ط·ط§ط±ط§ظ‹ ظپظٹ ط§ظ„ط«ط§ظ†ظٹط© ط¨ط§ظ„ط´ط§طھط± ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ ط¨ط¯ظˆظ† ط£ظٹ طھط¹طھظٹظ… Blackout-free",
                      "طھط±ظ‚ظٹط© ط§ظ„ط¯ظ‚ط©":  "طھظ‚ظ†ظٹط© ط§ظ„طھظƒط¨ظٹط± ط¨ط§ظ„ط°ظƒط§ط، ط§ظ„ط§طµط·ظ†ط§ط¹ظٹ ط§ظ„ظ…ط¯ظ…ط¬ط© Neural Network Upscaling ط­طھظ‰ 179MP",
                      "ط§ظ„ظ…ظ†ط§ظپط° ظˆط§ظ„ط°ط§ظƒط±ط©":  "ظ…ظ†ظپط° ط¨ط·ط§ظ‚ط© CFexpress Type B ظپط§ط¦ظ‚ ط§ظ„ط³ط±ط¹ط© + ظ…ظ†ظپط° SD UHS-II",
                      "ط§ظ„ظˆط²ظ†":  "746 ط¬ظ…",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
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
        "badge":  "ظˆظپط± $80",
        "section":  "trending",
        "image":  "images/cam_canon_r5c.jpg",
        "gallery":  [
                        "images/cam_canon_r5c.jpg"
                    ],
        "description":  "ظƒط§ظ…ظٹط±ط§ ظƒط§ظ†ظˆظ† ط§ظ„ظ‡ط¬ظٹظ†ط© ط§ظ„ظ…ط¹طھظ…ط¯ط© ظ…ظ† Netflix: طھط¬ظ…ط¹ ط¨ظٹظ† ظƒط§ظ…ظٹط±ط§ طھطµظˆظٹط± ظپظˆطھظˆط؛ط±ط§ظپظٹ 45MP ظˆظƒط§ظ…ظٹط±ط§ ط³ظٹظ†ظ…ط§ ط±ط³ظ…ظٹط© Cinema EOS ظ…ط¹ طھط¨ط±ظٹط¯ ظ†ط´ط· ظˆظپظٹط¯ظٹظˆ 8K 60p.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "45MP Full-Frame CMOS Sensor ظ‡ط¬ظٹظ† ظپظˆطھظˆط؛ط±ط§ظپظٹ ظˆط³ظٹظ†ظ…ط§ط¦ظٹ ط±ط³ظ…ظٹ Cinema EOS",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "8K 60p 12-Bit Cinema RAW Light ط¯ط§ط®ظ„ظٹ / 4K 120p 10-Bit 4:2:2 ط¨ط¯ظˆظ† ط§ظ‚طھط·ط§ط¹",
                      "ظ†ط¸ط§ظ… ط§ظ„طھط¨ط±ظٹط¯":  "ظ…ط±ظˆط­ط© طھط¨ط±ظٹط¯ ظ…ط¯ظ…ط¬ط© Active Cooling ظ„ظ„طھط³ط¬ظٹظ„ ط§ظ„ظ…ط³طھظ…ط± ط¨ط¯ظˆظ† طھظˆظ‚ظپ",
                      "ظ†ط¸ط§ظ… ط§ظ„طھط´ط؛ظٹظ„":  "ظ†ط¸ط§ظ… طھط´ط؛ظٹظ„ ظ…ط²ط¯ظˆط¬: ظˆط§ط¬ظ‡ط© Cinema EOS ظ„ظ„ظپظٹط¯ظٹظˆ ظˆظˆط§ط¬ظ‡ط© EOS R ظ„ظ„ظپظˆطھظˆط؛ط±ط§ظپ",
                      "ط§ظ„ظ…ظ†ط§ظپط° ظˆط§ظ„ط°ط§ظƒط±ط©":  "ظ…ظ†ظپط° CFexpress Type B ط¹ط§ظ„ظٹ ط§ظ„ط³ط±ط¹ط© + ظ…ظ†ظپط° SD UHS-II",
                      "ط§ظ„ظˆط²ظ†":  "770 ط¬ظ…",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
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
        "badge":  "ظˆظپط± $50",
        "section":  "trending",
        "image":  "images/cam_canon_g7xiii.jpg",
        "gallery":  [
                        "images/cam_canon_g7xiii.jpg"
                    ],
        "description":  "ظƒط§ظ…ظٹط±ط§ ط§ظ„ط¬ظٹط¨ ط§ظ„ط£ط³ط·ظˆط±ظٹط© ظ„طµظ†ط§ط¹ ط§ظ„ظپظ„ظˆط¬ط§طھ ظˆظ…ظ‚ط§ط·ط¹ طھظٹظƒ طھظˆظƒ ظˆظٹظˆطھظٹظˆط¨طŒ ط¨ط¹ط¯ط³ط© f/1.8-2.8 ط³ط±ظٹط¹ط© ظˆط¨ط« ظ…ط¨ط§ط´ط± ظ…ط¯ظ…ط¬ ظˆظ…ط¯ط®ظ„ ظ…ط§ظٹظƒ ط®ط§ط±ط¬ظٹ.",
        "specs":  {
                      "ط§ظ„ظ…ط³طھط´ط¹ط±":  "20.1MP 1.0-inch Stacked CMOS Sensor ط§ظ„ظ…ظپط¶ظ„ ظ„طµظ†ط§ط¹ ط§ظ„ظ…ط­طھظˆظ‰ ظˆط§ظ„ظٹظˆطھظٹظˆط¨",
                      "ط§ظ„ط¹ط¯ط³ط©":  "ط¹ط¯ط³ط© ظƒط§ظ†ظˆظ† ط³ط±ظٹط¹ط© 24-100mm f/1.8-2.8 ظ…ط¹ طھظ‚ط±ظٹط¨ ط¨طµط±ظٹ 4.2x ظˆظ…ط«ط¨طھ ط¨طµط±ظٹ",
                      "ط§ظ„ظپظٹط¯ظٹظˆ":  "4K 30p ط¨ط¯ظˆظ† ظƒط±ظˆط¨ / Full HD 120p / ط¯ط¹ظ… ط§ظ„ط¨ط« ط§ظ„ظ…ط¨ط§ط´ط± ط¹ظ„ظ‰ YouTube Live",
                      "ط§ظ„طµظˆطھ":  "ظ…ط¯ط®ظ„ ظ…ط§ظٹظƒط±ظˆظپظˆظ† ط®ط§ط±ط¬ظٹ 3.5 ظ…ظ„ظ… ظ„طھط³ط¬ظٹظ„ طµظˆطھ ط§ط­طھط±ط§ظپظٹ",
                      "ط§ظ„ط´ط§ط´ط©":  "ط´ط§ط´ط© ظ„ظ…ط³ طھط±طھظپط¹ 180 ط¯ط±ط¬ط© ظ„ظ„ط£ط¹ظ„ظ‰ ظ„طھطµظˆظٹط± ط§ظ„ط³ظٹظ„ظپظٹ ظˆط§ظ„ظپظ„ظˆط¬ط§طھ",
                      "ط³ط±ط¹ط© ط§ظ„ط§ظ„طھظ‚ط§ط·":  "طھطµظˆظٹط± ظ…طھطھط§ط¨ط¹ ط­طھظ‰ 30 ط¥ط·ط§ط±ط§ظ‹ ظپظٹ ط§ظ„ط«ط§ظ†ظٹط© ظپظٹ ظˆط¶ط¹ RAW Burst",
                      "ط§ظ„ظˆط²ظ†":  "304 ط¬ظ… ظپظ‚ط· (ط­ط¬ظ… ط§ظ„ط¬ظٹط¨)",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ط±ط³ظ…ظٹط© ط³ظ†طھظٹظ† ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ظ…ط¹طھظ…ط¯"
                  }
    },
    {
        "id":  "LEN-018",
        "name":  "SONY FE 16-35mm F2.8 GM II",
        "nameEn":  "SONY FE 16-35mm F2.8 GM II",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1780,
        "oldPrice":  1850,
        "rating":  5.0,
        "reviewsCount":  38,
        "stock":  4,
        "badge":  "G Master II",
        "image":  "images/prod_sony_1635_gm2.jpg",
        "gallery":  [
                        "images/prod_sony_1635_gm2.jpg",
                        "images/prod_sony_1635_gm2_angle2.jpg",
                        "images/prod_sony_1635_gm2_angle3.jpg"
                    ],
        "description":  "ط¹ط¯ط³ط© ط²ط§ظˆظٹط© ط¹ط±ظٹط¶ط© ط§ط­طھط±ط§ظپظٹط© ط®ظپظٹظپط© ط§ظ„ظˆط²ظ† ظ…ظ† ط³ظˆظ†ظٹ ظ…ط¹ ط­ظ„ظ‚ط© ظپطھط­ط© ظ…ظٹظƒط§ظ†ظٹظƒظٹط© ظˆظپظˆظƒط³ ط®ط·ظٹ XD ظ…طھط·ظˆط± ظ„ظ„ط³ظٹظ†ظ…ط§ ظˆط§ظ„ظپظˆطھظˆط؛ط±ط§ظپ.",
        "specs":  {
                      "ط§ظ„ط¨ط¹ط¯ ط§ظ„ط¨ط¤ط±ظٹ":  "16-35mm Full-Frame",
                      "ظپطھط­ط© ط§ظ„ط¹ط¯ط³ط©":  "F2.8 ط«ط§ط¨طھط© ظ…ط¹ 11 ط´ظپط±ط© ط¯ط§ط¦ط±ظٹط©",
                      "ط§ظ„ظ…ط­ط±ظƒ":  "4 ظ…ط­ط±ظƒط§طھ ط®ط·ظٹط© XD Linear Motors ظپط§ط¦ظ‚ط© ط§ظ„ظ‡ط¯ظˆط،",
                      "ط§ظ„ظˆط²ظ†":  "547 ط¬ظ… (ط£ط®ظپ ط¨ظ†ط³ط¨ط© 20% ظ…ظ† ط§ظ„ط¬ظٹظ„ ط§ظ„ط£ظˆظ„)",
                      "ظ‚ط·ط± ط§ظ„ظپظ„طھط±":  "82mm"
                  }
    },
    {
        "id":  "LEN-020",
        "name":  "SONY FE 70-200mm F2.8 GM OSS II",
        "nameEn":  "SONY FE 70-200mm F2.8 GM OSS II",
        "category":  "filters",
        "brand":  "Sony",
        "price":  2040,
        "oldPrice":  2100,
        "rating":  5.0,
        "reviewsCount":  62,
        "stock":  3,
        "badge":  "طھظ„ظٹ ظپظˆطھظˆ ظپط§ط¦ظ‚",
        "image":  "images/prod_sony_70200_gm2.jpg",
        "gallery":  [
                        "images/prod_sony_70200_gm2.jpg",
                        "images/prod_sony_70200_gm2_angle2.jpg"
                    ],
        "description":  "ط£ط®ظپ ظˆط£ط¯ظ‚ ط¹ط¯ط³ط© 70-200mm F2.8 ظپظٹ ط§ظ„ط¹ط§ظ„ظ…طŒ طھظ…ظ†ط­ظƒ ط­ط¯ط© ط¨طµط±ظٹط© ط®ظٹط§ظ„ظٹط© ظˆط¹ط²ظ„ ط¨ظˆظƒظٹظ‡ ظ…ط°ظ‡ظ„ ظˆطھط«ط¨ظٹطھ ط¨طµط±ظٹ ظ…طھظ‚ط¯ظ… OSS.",
        "specs":  {
                      "ط§ظ„ط¨ط¹ط¯ ط§ظ„ط¨ط¤ط±ظٹ":  "70-200mm Telephoto Zoom",
                      "ظپطھط­ط© ط§ظ„ط¹ط¯ط³ط©":  "F2.8 ط«ط§ط¨طھط© ط¹ظ„ظ‰ ظƒط§ظ…ظ„ ط§ظ„ظ…ط¯ظ‰",
                      "ط§ظ„ظ…ط«ط¨طھ ط§ظ„ط¨طµط±ظٹ":  "Optical SteadyShot ط¨ط«ظ„ط§ط«ط© ط£ظˆط¶ط§ط¹ ظ…ط®طھظ„ظپط©",
                      "ط§ظ„ظˆط²ظ†":  "1,045 ط¬ظ… (ط£ط®ظپ ط¨ظ†ط³ط¨ط© 29% ظ…ظ† ط§ظ„ط¬ظٹظ„ ط§ظ„ط³ط§ط¨ظ‚)",
                      "ظ‚ط·ط± ط§ظ„ظپظ„طھط±":  "77mm"
                  }
    },
    {
        "id":  "LEN-024",
        "name":  "SONY FE 24-70mm F2.8 GM II",
        "nameEn":  "SONY FE 24-70mm F2.8 GM II",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1650,
        "oldPrice":  1720,
        "rating":  5.0,
        "reviewsCount":  110,
        "stock":  6,
        "badge":  "ط§ظ„ط£ظƒط«ط± ط·ظ„ط¨ط§ظ‹",
        "image":  "images/prod_sony_2470_gm2.png",
        "gallery":  [
                        "images/prod_sony_2470_gm2.png"
                    ],
        "description":  "ط§ظ„ط¹ط¯ط³ط© ط§ظ„ظ‚ظٹط§ط³ظٹط© ط§ظ„ط±ط§ط¦ط¯ط© ظ„ط³ظˆظ†ظٹ G Master IIطŒ ط­ط§ط¯ط© ظƒط§ظ„ط³ظƒظٹظ† ظ…ط¹ ط£طµط؛ط± ط­ط¬ظ… ظ…ظ…ظƒظ† ظˆطھطµظ…ظٹظ… ظ…ظ‚ط§ظˆظ… ظ„ط¬ظ…ظٹط¹ ط§ظ„ط¸ط±ظˆظپ ط§ظ„ط¬ظˆظٹط©.",
        "specs":  {
                      "ط§ظ„ط¨ط¹ط¯ ط§ظ„ط¨ط¤ط±ظٹ":  "24-70mm Standard Zoom",
                      "ظپطھط­ط© ط§ظ„ط¹ط¯ط³ط©":  "F2.8 ط«ط§ط¨طھط©",
                      "ط­ظ„ظ‚ط© ط§ظ„ظپطھط­ط©":  "ط­ظ„ظ‚ط© ظپطھط­ط© ظ…ط³طھظ‚ظ„ط© ظ…ط¹ ظ…ظپطھط§ط­ De-click ظ„طھطµظˆظٹط± ط§ظ„ظپظٹط¯ظٹظˆ ط§ظ„ط³ظ„ط³",
                      "ط§ظ„ظˆط²ظ†":  "695 ط¬ظ… ظپظ‚ط·",
                      "ظ‚ط·ط± ط§ظ„ظپظ„طھط±":  "82mm"
                  }
    },
    {
        "id":  "LEN-035",
        "name":  "SONY FE 35mm F1.4 GM",
        "nameEn":  "SONY FE 35mm F1.4 GM",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1150,
        "oldPrice":  1200,
        "rating":  4.9,
        "reviewsCount":  45,
        "stock":  3,
        "badge":  "ط¹ط¯ط³ط© ط¨ط±ط§ظٹظ… ط³ظٹظ†ظ…ط§",
        "image":  "images/prod_sony_35_14gm.jpg",
        "gallery":  [
                        "images/prod_sony_35_14gm.jpg",
                        "images/prod_sony_35_14gm_angle2.jpg"
                    ],
        "description":  "ط¹ط¯ط³ط© ط¨ط±ط§ظٹظ… ط³ظٹظ†ظ…ط§ط¦ظٹط© 35mm ظ…ظ† ظپط¦ط© G Master ط¨ظپطھط­ط© F1.4 ظ‡ط§ط¦ظ„ط© ظˆط¹ط²ظ„ ظ…ط°ظ‡ظ„ ظپظٹ ط§ظ„ط¥ط¶ط§ط،ط© ط§ظ„ط®ط§ظپطھط© ظ…ط¹ ط­ط¯ط© ط§ط³طھط«ظ†ط§ط¦ظٹط©.",
        "specs":  {
                      "ط§ظ„ط¨ط¹ط¯ ط§ظ„ط¨ط¤ط±ظٹ":  "35mm Prime Lens",
                      "ظپطھط­ط© ط§ظ„ط¹ط¯ط³ط©":  "F1.4 ط³ط±ظٹط¹ط© ط¬ط¯ط§ظ‹",
                      "ط§ظ„ط¹ظ†ط§طµط± ط§ظ„ط¨طµط±ظٹط©":  "ط¹ظ†طµط±ط§ظ† XA ظپط§ط¦ظ‚ط§ظ† ظ„ظ„ط¯ظ‚ط© ظˆط§ظ„ط­ط¯ط©",
                      "ط§ظ„ظˆط²ظ†":  "524 ط¬ظ…",
                      "ظ‚ط·ط± ط§ظ„ظپظ„طھط±":  "67mm"
                  }
    },
    {
        "id":  "LEN-036",
        "name":  "SIGMA 24-70mm F2.8 DG DN Art (Sony E)",
        "nameEn":  "SIGMA 24-70mm F2.8 DG DN Art (Sony E)",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  880,
        "oldPrice":  940,
        "rating":  4.9,
        "reviewsCount":  78,
        "stock":  5,
        "badge":  "ط³ظ„ط³ظ„ط© Art ط§ظ„ط´ظ‡ظٹط±ط©",
        "image":  "images/prod_sigma_2470_art.jpg",
        "gallery":  [
                        "images/prod_sigma_2470_art.jpg",
                        "images/prod_sigma_2470_art_angle2.jpg",
                        "images/prod_sigma_2470_art_angle3.jpg",
                        "images/prod_sigma_2470_art_angle4.jpg"
                    ],
        "description":  "ط£ط³ط·ظˆط±ط© ط³ظٹط¬ظ…ط§ ظپظٹ ظپط¦ط© ط§ظ„ظ€ 24-70mm Art ط¨ظƒظپط§ط،ط© ط¨طµط±ظٹط© ط®ط§ط±ظ‚ط© ظˆط£ظ„ظˆط§ظ† ظˆط§ظ‚ط¹ظٹط© ظ…ط¹ ظ…ط§ظ†طھ ط³ظˆظ†ظٹ E-Mount ط§ظ„ط£طµظ„ظٹ.",
        "specs":  {
                      "ط§ظ„ط¨ط¹ط¯ ط§ظ„ط¨ط¤ط±ظٹ":  "24-70mm",
                      "ظپطھط­ط© ط§ظ„ط¹ط¯ط³ط©":  "F2.8 ط«ط§ط¨طھط©",
                      "ط§ظ„ظ…ط§ظ†طھ":  "Sony E-Mount Full-Frame",
                      "ط§ظ„ظˆط²ظ†":  "835 ط¬ظ…",
                      "ظ‚ط·ط± ط§ظ„ظپظ„طھط±":  "82mm"
                  }
    },
    {
        "id":  "FLT-001",
        "name":  "PolarPro Peter McKinnon VND II (82mm)",
        "nameEn":  "PolarPro Peter McKinnon VND II (82mm)",
        "category":  "filters",
        "brand":  "PolarPro",
        "price":  249,
        "oldPrice":  279,
        "rating":  5.0,
        "reviewsCount":  92,
        "stock":  8,
        "badge":  "ظپظ„طھط± ND ظ…طھط؛ظٹط±",
        "image":  "images/prod_polarpro_vnd.jpg",
        "gallery":  [
                        "images/prod_polarpro_vnd.jpg"
                    ],
        "description":  "ط£ظپط¶ظ„ ظپظ„طھط± ND ظ…طھط؛ظٹط± ظپظٹ ط§ظ„ط¹ط§ظ„ظ… ط¨طھظˆظ‚ظٹط¹ ط¨ظٹطھط± ظ…ط§ظƒظٹظ†ظˆظ† ظˆط²ط¬ط§ط¬ ط£ظ„ظ…ط§ظ†ظٹ ظ…ط·ظ„ظٹ ظٹظ…ظ†ط¹ ط¸ظ‡ظˆط± ط¹ظ„ط§ظ…ط© X ط§ظ„ط§ط³طھظ‚ط·ط§ط¨ظٹط© طھظ…ط§ظ…ط§ظ‹.",
        "specs":  {
                      "ط§ظ„ظ‚ط·ط±":  "82mm ظ…ط¹ ط¥ظ…ظƒط§ظ†ظٹط© ط§ط³طھط®ط¯ط§ظ… ط­ظ„ظ‚ط§طھ طھط­ظˆظٹظ„ Step-up",
                      "ظ…ط¯ظ‰ ط§ظ„طھط¹طھظٹظ…":  "2-5 Stops (ND4 ط¥ظ„ظ‰ ND32)",
                      "ط§ظ„ظ…ط§ط¯ط©":  "ط¥ط·ط§ط± ظ…ظ† ط§ظ„ط£ظ„ظˆظ…ظ†ظٹظˆظ… ط§ظ„ظ…ط³طھط®ط¯ظ… ظپظٹ طµظ†ط§ط¹ط© ط§ظ„ط·ط§ط¦ط±ط§طھ ظ…ط¹ ط²ط¬ط§ط¬ ظƒظˆط§ط±طھط² ط¨طµط±ظٹ",
                      "ط§ظ„طھط­ظƒظ…":  "ظ†ظ‚ط§ط· طھظˆظ‚ظپ ظ„ظ…ط³ظٹط© Haptic Feedback ط¹ظ†ط¯ ظƒظ„ ظˆظ‚ظپط©"
                  }
    },
    {
        "id":  "LGT-148",
        "name":  "Godox SL60II-Bi Bi-Color LED Video Light",
        "nameEn":  "Godox SL60II-Bi Bi-Color LED Video Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  120,
        "oldPrice":  135,
        "rating":  4.9,
        "reviewsCount":  49,
        "stock":  12,
        "badge":  "ط¥ط¶ط§ط،ط© ط§ط³طھظˆط¯ظٹظˆ ظ…طھط؛ظٹط±ط©",
        "image":  "images/prod_godox_sl60iibi.jpg",
        "gallery":  [
                        "images/prod_godox_sl60iibi.jpg",
                        "images/prod_godox_sl60iibi_angle2.jpg",
                        "images/prod_godox_sl60iibi_angle3.jpg",
                        "images/prod_godox_sl60iibi_angle4.jpg"
                    ],
        "description":  "ط¥ط¶ط§ط،ط© ط§ط³طھظˆط¯ظٹظˆ ظ…ط³طھظ…ط±ط© ظ…طھط؛ظٹط±ط© ط­ط±ط§ط±ط© ط§ظ„ظ„ظˆظ† 2800K-6500K ظ…ط¹ طھط­ظƒظ… ظƒط§ظ…ظ„ ط¨ط§ظ„ط¨ظ„ظˆطھظˆط« ظˆطھط·ط¨ظٹظ‚ Godox Light ظˆظ…ط´طھطھ ط¨ظˆظٹظ†ط² ظ‚ظٹط§ط³ظٹ.",
        "specs":  {
                      "ط§ظ„ظ‚ط¯ط±ط©":  "70W ط¥ط¶ط§ط،ط© LED ظ…ط³طھظ…ط±ط© ظپط§ط¦ظ‚ط© ط§ظ„ظ‡ط¯ظˆط،",
                      "ط­ط±ط§ط±ط© ط§ظ„ظ„ظˆظ†":  "2800K - 6500K Bi-Color",
                      "ط¯ظ‚ط© ط§ظ„ط£ظ„ظˆط§ظ†":  "CRI 96+ / TLCI 97+",
                      "ط§ظ„ظ…ط§ظ†طھ":  "Bowens Mount ط§ظ„ظ‚ظٹط§ط³ظٹ ظ„طھط±ظƒظٹط¨ ط¬ظ…ظٹط¹ ط£ظ†ظˆط§ط¹ ط§ظ„ط³ظˆظپطھ ط¨ظˆظƒط³",
                      "ط§ظ„طھط­ظƒظ…":  "طھط·ط¨ظٹظ‚ Godox Light ط¹ط¨ط± Bluetooth"
                  }
    },
    {
        "id":  "LGT-149",
        "name":  "Godox SL100D Daylight LED Video Light",
        "nameEn":  "Godox SL100D Daylight LED Video Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  140,
        "oldPrice":  155,
        "rating":  4.9,
        "reviewsCount":  35,
        "stock":  10,
        "badge":  "ط³ط·ظˆط¹ ط¹ط§ظ„ظٹ 100W",
        "image":  "images/prod_godox_sl100d.jpg",
        "gallery":  [
                        "images/prod_godox_sl100d.jpg"
                    ],
        "description":  "ط¥ط¶ط§ط،ط© COB ظ‚ظˆظٹط© 100 ظˆط§ط· ط¨ط¶ظˆط، ظ†ظ‡ط§ط±ظٹ ظ†ظ‚ظٹ 5600KطŒ ظ…ظ…طھط§ط²ط© ظ„طھطµظˆظٹط± ظ…ظ‚ط§ط¨ظ„ط§طھ ط§ظ„ظٹظˆطھظٹظˆط¨ ظˆط§ظ„ظ…ظ†طھط¬ط§طھ ظˆط¥ط¶ط§ط،ط© ط§ظ„ط§ط³طھظˆط¯ظٹظˆ ط§ظ„ط±ط¦ظٹط³ظٹط©.",
        "specs":  {
                      "ط§ظ„ظ‚ط¯ط±ط©":  "100W ظ…ط¹ ط¥ط¶ط§ط،ط© ط­طھظ‰ 32,100 Lux ط¹ظ„ظ‰ ظ…ط³ط§ظپط© 1 ظ…طھط±",
                      "ط­ط±ط§ط±ط© ط§ظ„ظ„ظˆظ†":  "5600K Daylight ط¯ظ‚ظٹظ‚ط© ظˆط«ط§ط¨طھط©",
                      "ظ…ط¤ط´ط± ظ†ظ‚ط§ط، ط§ظ„ظ„ظˆظ†":  "CRI 96 / TLCI 97",
                      "ط§ظ„ظ…ط¤ط«ط±ط§طھ":  "8 طھط£ط«ظٹط±ط§طھ ط¥ط¶ط§ط،ط© ط³ظٹظ†ظ…ط§ط¦ظٹط© ظ…ط¯ظ…ط¬ط© (ط¨ط±ظ‚طŒ ظپظ„ط§ط´طŒ ط´ط§ط´ط©طŒ ط¥ظ„ط®)",
                      "ط§ظ„ظ…ط§ظ†طھ":  "Bowens Mount ط¹ط§ظ„ظ…ظٹ"
                  }
    },
    {
        "id":  "LGT-195",
        "name":  "Godox V1 Round Head Camera Flash",
        "nameEn":  "Godox V1 Round Head Camera Flash",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  195,
        "oldPrice":  220,
        "rating":  4.9,
        "reviewsCount":  61,
        "stock":  8,
        "badge":  "ظپظ„ط§ط´ ط±ط£ط³ ط¯ط§ط¦ط±ظٹ",
        "image":  "images/prod_godox_v1.jpg",
        "gallery":  [
                        "images/prod_godox_v1.jpg"
                    ],
        "description":  "ط§ظ„ظپظ„ط§ط´ ط§ظ„ط§ط­طھط±ط§ظپظٹ ط¨ط±ط£ط³ ط¯ط§ط¦ط±ظٹ ظٹظ…ظ†ط­ طھظˆط²ظٹط¹ ط¶ظˆط، ظ†ط§ط¹ظ… ظˆطھط¯ط±ظٹط¬ظٹ ظƒط¥ط¶ط§ط،ط© ط§ظ„ط§ط³طھظˆط¯ظٹظˆ ظ…ط¹ ط¨ط·ط§ط±ظٹط© ظ„ظٹط«ظٹظˆظ… 2600mAh طھط¯ظˆظ… 480 ظˆظ…ط¶ط© ط¨ظ‚ظˆط© ظƒط§ظ…ظ„ط©.",
        "specs":  {
                      "ط§ظ„ظ‚ط¯ط±ط©":  "76Ws ظ…ط¹ ط±ط£ط³ ط¯ط§ط¦ط±ظٹ ظˆظ…ظˆط²ط¹ ظ…ط؛ظ†ط§ط·ظٹط³ظٹ",
                      "ط§ظ„ط¨ط·ط§ط±ظٹط©":  "ط¨ط·ط§ط±ظٹط© ظ„ظٹط«ظٹظˆظ… ظ‚ط§ط¨ظ„ط© ظ„ظ„ط´ط­ظ† 7.2V / 2600mAh",
                      "ط³ط±ط¹ط© ط§ظ„ط´ط­ظ†":  "1.5 ط«ط§ظ†ظٹط© ظ„ط¥ط¹ط§ط¯ط© ط§ظ„ط´ط­ظ† ط¹ظ†ط¯ ط§ظ„ظ‚ظˆط© ط§ظ„ظƒط§ظ…ظ„ط©",
                      "ط§ظ„ظ„ط§ط³ظ„ظƒظٹ":  "ظ†ط¸ط§ظ… Godox 2.4G X System ط§ظ„ظ…ط¯ظ…ط¬ ظ„ظ„ط¥ط±ط³ط§ظ„ ظˆط§ظ„ط§ط³طھظ‚ط¨ط§ظ„",
                      "ط§ظ„ظ…ظٹط²ط§طھ":  "ط¯ط¹ظ… TTL ظˆ HSS ط­طھظ‰ 1/8000 ط«ط§ظ†ظٹط©"
                  }
    },
    {
        "id":  "LGT-201",
        "name":  "Godox Litemons LA150D Daylight LED Light",
        "nameEn":  "Godox Litemons LA150D Daylight LED Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  175,
        "oldPrice":  195,
        "rating":  4.8,
        "reviewsCount":  27,
        "stock":  6,
        "badge":  "ط¥ط¶ط§ط،ط© ظ‚ظˆظٹط© 150W",
        "image":  "images/godox_la150d_extracted.jpg",
        "gallery":  [
                        "images/godox_la150d_extracted.jpg"
                    ],
        "description":  "ظˆط­ط¯ط© ط¥ط¶ط§ط،ط© ظ…ط¯ظ…ط¬ط© ظˆط®ظپظٹظپط© ط§ظ„ظˆط²ظ† ط¨ظ‚ط¯ط±ط© 150 ظˆط§ط· ط¨ط³ط·ظˆط¹ ظ‡ط§ط¦ظ„ ظٹطµظ„ ط¥ظ„ظ‰ 84,800 Lux ظ…ط¹ ط¹ط§ظƒط³طŒ ظ…ط«ط§ظ„ظٹط© ظ„ظ„طھطµظˆظٹط± ط§ظ„ط§ط­طھط±ط§ظپظٹ ط§ظ„ظ…ظٹط¯ط§ظ†ظٹ.",
        "specs":  {
                      "ط§ظ„ظ‚ط¯ط±ط©":  "150W Daylight 5600K",
                      "ط§ظ„ط³ط·ظˆط¹":  "84,800 Lux @ 1m ظ…ط¹ ط§ظ„ط¹ط§ظƒط³ ط§ظ„ظ…ط±ظپظ‚",
                      "ط¯ظ‚ط© ط§ظ„ط£ظ„ظˆط§ظ†":  "CRI 96+ / TLCI 97+",
                      "ط§ظ„طھط­ظƒظ…":  "طھط·ط¨ظٹظ‚ Godox Light ط¹ط¨ط± ط§ظ„ظ‡ط§طھظپ",
                      "ط§ظ„ظ…ط§ظ†طھ":  "Bowens Mount ط§ظ„ظ‚ظٹط§ط³ظٹ"
                  }
    },
    {
        "id":  "AUD-042",
        "name":  "RODE Wireless GO II Dual Wireless Mic",
        "nameEn":  "RODE Wireless GO II Dual Wireless Mic",
        "category":  "audio",
        "brand":  "RODE",
        "price":  220,
        "oldPrice":  240,
        "rating":  4.9,
        "reviewsCount":  140,
        "stock":  9,
        "badge":  "ط§ظ„ط£ظƒط«ط± ظ…ط¨ظٹط¹ط§ظ‹ ظپظٹ ط§ظ„ط¹ط§ظ„ظ…",
        "image":  "images/prod_rode_wigo2.png",
        "gallery":  [
                        "images/prod_rode_wigo2.png"
                    ],
        "description":  "ط§ظ„ظ†ط¸ط§ظ… ط§ظ„ظ„ط§ط³ظ„ظƒظٹ ط§ظ„ظ…ط²ط¯ظˆط¬ ط§ظ„ط£ط´ظ‡ط± ظ„طµظ†ط§ط¹ ط§ظ„ظ…ط­طھظˆظ‰ ظ…ط¹ ظ…ظٹظƒط±ظˆظپظˆظ†ط§طھ ظ…ط¯ظ…ط¬ط© ظˆطھط³ط¬ظٹظ„ ط¯ط§ط®ظ„ظٹ ظ…ط¯ظ…ط¬ On-Board Recording ط­طھظ‰ 40 ط³ط§ط¹ط©.",
        "specs":  {
                      "ط§ظ„ظ‚ظ†ظˆط§طھ":  "ط¬ظ‡ط§ط² ط§ط³طھظ‚ط¨ط§ظ„ ظ…ط²ط¯ظˆط¬ ط§ظ„ظ‚ظ†ط§ط© + 2 ط£ط¬ظ‡ط²ط© ط¥ط±ط³ط§ظ„ ط¨ظ…ظٹظƒط±ظˆظپظˆظ† ظ…ط¯ظ…ط¬",
                      "ط§ظ„ظ…ط¯ظ‰":  "ط­طھظ‰ 200 ظ…طھط± ظپظٹ ط®ط· ط§ظ„ط±ط¤ظٹط© ظ…ط¹ ظ†ظ‚ظ„ ط±ظ‚ظ…ظٹ Series IV 2.4GHz ظ…ط´ظپط±",
                      "ط§ظ„طھط³ط¬ظٹظ„ ط§ظ„ط¯ط§ط®ظ„ظٹ":  "ط£ظƒط«ط± ظ…ظ† 40 ط³ط§ط¹ط© طھط³ط¬ظٹظ„ ط¯ط§ط®ظ„ظٹ ط¹ظ„ظ‰ ظƒظ„ ظ…ط±ط³ظ„ ظ„ظ„ط­ظ…ط§ظٹط© ظ…ظ† ط§ظ†ظ‚ط·ط§ط¹ ط§ظ„ط¥ط´ط§ط±ط©",
                      "ط§ظ„طھظˆطµظٹظ„":  "ظ…ط®ط±ط¬ 3.5mm TRS ظˆظ…ط®ط±ط¬ USB-C ظ…ط¨ط§ط´ط± ظ„ظ„ظ‡ظˆط§طھظپ ظˆط£ط¬ظ‡ط²ط© ط§ظ„ظƒظ…ط¨ظٹظˆطھط±"
                  }
    },
    {
        "id":  "AUD-043",
        "name":  "RODE Wireless PRO Dual Channel 32-Bit Float",
        "nameEn":  "RODE Wireless PRO Dual Channel 32-Bit Float",
        "category":  "audio",
        "brand":  "RODE",
        "price":  320,
        "oldPrice":  350,
        "rating":  5.0,
        "reviewsCount":  78,
        "stock":  6,
        "badge":  "طھط³ط¬ظٹظ„ 32-Bit ط¨ط¯ظˆظ† طھط´ظˆظٹط´",
        "image":  "images/prod_rode_wireless_pro.png",
        "gallery":  [
                        "images/prod_rode_wireless_pro.png"
                    ],
        "description":  "ط£ظ‚ظˆظ‰ ظ†ط¸ط§ظ… طµظˆطھ ظ„ط§ط³ظ„ظƒظٹ ط³ظٹظ†ظ…ط§ط¦ظٹ ط¨طھظ‚ظ†ظٹط© 32-bit Float On-Board ط§ظ„طھظٹ طھط³طھط­ظٹظ„ ظپظٹظ‡ط§ ط²ظٹط§ط¯ط© ط§ظ„طµظˆطھ ظˆط§ظ„طھط´ظˆظٹط´طŒ ظ…ط¹ Timecode ظˆظ…ط²ط§ظ…ظ†ط© ظƒط§ظ…ظ„ط©.",
        "specs":  {
                      "طھظ‚ظ†ظٹط© ط§ظ„طھط³ط¬ظٹظ„":  "32-Bit Float On-Board Recording ظ„ط§ ظٹظ…ظƒظ† ط£ظ† ظٹط­طµظ„ ط¨ظ‡ط§ Clipping طµظˆطھظٹ",
                      "ط§ظ„طھط²ط§ظ…ظ†":  "ظ…ظˆظ„ط¯ Timecode ظ…ط¯ظ…ط¬ ظ„ظ…ط²ط§ظ…ظ†ط© ط§ظ„طµظˆطھ ظ…ط¹ ط§ظ„ظپظٹط¯ظٹظˆ ط¨ط¯ظ‚ط© ط§ظ„ظپط±ظٹظ… ط§ظ„ظˆط§ط­ط¯",
                      "ط§ظ„ظ…ظ„ط­ظ‚ط§طھ ط§ظ„ظ…ط±ظپظ‚ط©":  "ط­ط§ظپط¸ط© ط´ط­ظ† ط°ظƒظٹط© + 2 ظ…ط§ظٹظƒ ظ„ط§ظپط§ظ„ظٹط± ط§ط­طھط±ط§ظپظٹ Lavalier II ظ…ط¹ ظ…ظˆطµظ„ط§طھ ظ‚ظپظ„",
                      "ط§ظ„ظ…ط¯ظ‰":  "ط­طھظ‰ 260 ظ…طھط±ط§ظ‹"
                  }
    },
    {
        "id":  "AUD-044",
        "name":  "RODE Wireless Micro Ultra-Compact Mic",
        "nameEn":  "RODE Wireless Micro Ultra-Compact Mic",
        "category":  "audio",
        "brand":  "RODE",
        "price":  115,
        "oldPrice":  130,
        "rating":  4.8,
        "reviewsCount":  51,
        "stock":  11,
        "badge":  "ظ…ط§ظٹظƒ ط§ظ„ظ‡ظˆط§طھظپ ط§ظ„ط°ظƒظٹط©",
        "image":  "images/prod_rode_wireless_micro.png",
        "gallery":  [
                        "images/prod_rode_wireless_micro.png"
                    ],
        "description":  "ط£طµط؛ط± ظ…ظٹظƒط±ظˆظپظˆظ† ظ„ط§ط³ظ„ظƒظٹ ظ„ظ„ظ‡ظˆط§طھظپ ط§ظ„ط°ظƒظٹط© ظ…ظ† ط±ظˆط¯طŒ ظٹط´ط¨ظƒ ظ…ط¨ط§ط´ط±ط© ط¨ظ…ظ†ظپط° USB-C ط£ظˆ Lightning ظ…ط¹ ط¹ظ„ط¨ط© ط´ط­ظ† ط¨ط­ط¬ظ… ط§ظ„ط¬ظٹط¨ ظˆطھظ‚ظ†ظٹط© GainAssist ط§ظ„ط°ظƒظٹط©.",
        "specs":  {
                      "ط§ظ„طھطµظ…ظٹظ…":  "ط­ط¬ظ… ظپط§ط¦ظ‚ ط§ظ„طµط؛ط± ظˆط®ظپظٹظپ ط¬ط¯ط§ظ‹ ظٹط«ط¨طھ ط¹ظ„ظ‰ ط§ظ„ظ…ظ„ط§ط¨ط³ ط¨ط¯ظˆظ† ط³ط­ط¨ ط§ظ„ظ‚ظ…ط§ط´",
                      "ط§ظ„ط¨ط·ط§ط±ظٹط©":  "ط­طھظ‰ 21 ط³ط§ط¹ط© ط¹ظ…ظ„ ط¥ط¬ظ…ط§ظ„ظٹط© ظ…ط¹ ط¹ظ„ط¨ط© ط§ظ„ط´ط­ظ† ط§ظ„ظ…ط­ظ…ظˆظ„ط©",
                      "ط§ظ„طھظ‚ظ†ظٹط© ط§ظ„طµظˆطھظٹط©":  "GainAssist ط§ظ„ط°ظƒظٹط© ظ„ط¶ط¨ط· ظ…ط³طھظˆظ‰ ط§ظ„طµظˆطھ طھظ„ظ‚ط§ط¦ظٹط§ظ‹ ط¨ط¯ظˆظ† طھط¹ط¨",
                      "ط§ظ„طھظˆط§ظپظ‚":  "ظ…طھظˆط§ظپظ‚ ظ…ط¹ ط¢ظٹظپظˆظ† ظˆط£ظ†ط¯ط±ظˆظٹط¯ ظ…ط¨ط§ط´ط±ط© ط¨ط¯ظˆظ† ظ…ط­ظˆظ„ط§طھ"
                  }
    },
    {
        "id":  "AUD-045",
        "name":  "RODE NT1 5th Generation Studio Condenser Mic",
        "nameEn":  "RODE NT1 5th Generation Studio Condenser Mic",
        "category":  "audio",
        "brand":  "RODE",
        "price":  195,
        "oldPrice":  215,
        "rating":  5.0,
        "reviewsCount":  63,
        "stock":  5,
        "badge":  "ظ…ط§ظٹظƒ ط§ط³طھظˆط¯ظٹظˆ ظ‡ط¬ظٹظ† XLR/USB",
        "image":  "images/prod_rode_nt1_5th.png",
        "gallery":  [
                        "images/prod_rode_nt1_5th.png"
                    ],
        "description":  "ط£ظ‡ط¯ط£ ظ…ظٹظƒط±ظˆظپظˆظ† ظƒظˆظ†ط¯ظ†ط³ط± ط§ط³طھظˆط¯ظٹظˆ ظپظٹ ط§ظ„ط¹ط§ظ„ظ…طŒ ظٹط¬ظ…ط¹ ظ„ط£ظˆظ„ ظ…ط±ط© ط¨ظٹظ† ظ…ط®ط±ط¬ XLR ط§ظ„طھظ†ط§ط¸ط±ظٹ ظˆظ…ط®ط±ط¬ USB-C ط§ظ„ط±ظ‚ظ…ظٹ ظ…ط¹ طھط³ط¬ظٹظ„ 32-bit Float ط¯ط§ط®ظ„ظٹ.",
        "specs":  {
                      "ط§ظ„ظƒط¨ط³ظˆظ„ط©":  "ظƒط¨ط³ظˆظ„ط© ظƒظˆظ†ط¯ظ†ط³ط± ظƒط¨ظٹط±ط© 1 ط¨ظˆطµط© ظ…ط·ظ„ظٹط© ط¨ط§ظ„ط°ظ‡ط¨ HF6",
                      "ط§ظ„ظ…ط®ط§ط±ط¬ ط§ظ„ظ…ط²ط¯ظˆط¬ط©":  "XLR طھظ‚ظ„ظٹط¯ظٹ + USB-C ط±ظ‚ظ…ظٹ ظ…ط¹ ط¨ط·ط§ظ‚ط© طµظˆطھ ط¯ط§ط®ظ„ظٹط© ظˆظ…ط¹ط§ظ„ط¬ DSP ظ…ط¯ظ…ط¬",
                      "ط§ظ„ط¶ظˆط¶ط§ط، ط§ظ„ط°ط§طھظٹط©":  "4dBA ظپظ‚ط· (ط£ظ‡ط¯ط£ ظ…ط§ظٹظƒط±ظˆظپظˆظ† ظپظٹ ط§ظ„ط¹ط§ظ„ظ…)",
                      "ط§ظ„ظ…ظ„ط­ظ‚ط§طھ":  "ط­ط§ظ…ظ„ طµط¯ظ…ط§طھ SM6 ظ…ط§ظ†ط¹ ظ„ظ„ط§ظ‡طھط²ط§ط² ظ…ط¹ ظپظ„طھط± ظ‡ظˆط§ط، Pop Filter ظ…ط¯ظ…ط¬"
                  }
    },
    {
        "id":  "AUD-049",
        "name":  "RODE PodMic Dynamic Podcasting Microphone",
        "nameEn":  "RODE PodMic Dynamic Podcasting Microphone",
        "category":  "audio",
        "brand":  "RODE",
        "price":  85,
        "oldPrice":  95,
        "rating":  4.9,
        "reviewsCount":  97,
        "stock":  14,
        "badge":  "ظ…ط§ظٹظƒ ط¨ظˆط¯ظƒط§ط³طھ ط§ط­طھط±ط§ظپظٹ",
        "image":  "images/prod_rode_podmic.png",
        "gallery":  [
                        "images/prod_rode_podmic.png"
                    ],
        "description":  "ط§ظ„ظ…ظٹظƒط±ظˆظپظˆظ† ط§ظ„ط¯ظٹظ†ط§ظ…ظٹظƒظٹ ط§ظ„ظ…ظپط¶ظ„ ظ„طµظ†ط§ط¹ ط§ظ„ط¨ظˆط¯ظƒط§ط³طھ ظˆط§ظ„ط¨ط« ط§ظ„طµظˆطھظٹ ط¨طµظˆطھ ط¥ط°ط§ط¹ظٹ ط¯ط§ظپط¦ ظˆط¨ظ†ظٹط© ظ…ط¹ط¯ظ†ظٹط© طµظ„ط¨ط© ظˆظ…ط«ط¨طھ ط¯ط§ط®ظ„ظٹ ظ…ط§ظ†ط¹ ظ„ظ„طµط¯ظ…ط§طھ.",
        "specs":  {
                      "ط§ظ„ظ†ظˆط¹":  "ط¯ط§ظٹظ†ط§ظ…ظٹظƒ Dynamic ظ…ظˆط¬ظ‡ ظ…ط¹ ظ†ظ…ط· ط§ظ„طھظ‚ط§ط· ظƒط§ط±ط¯ظٹظˆظٹط¯ ط¹ط§ط²ظ„ ظ„ظ„ط؛ط±ظپط©",
                      "ط§ظ„ط¨ظ†ظٹط©":  "ظ‡ظٹظƒظ„ ظ…ط¹ط¯ظ†ظٹ طµظ„ط¨ ط¨ط§ظ„ظƒط§ظ…ظ„ ظˆظ…ط«ط¨طھ ظ…ط¯ظ…ط¬ ظ…طھط£ط±ط¬ط­",
                      "ط§ظ„ظ…ط®ط±ط¬":  "XLR ظ‚ظٹط§ط³ظٹ ظ…طھظˆط§ظپظ‚ ظ…ط¹ ظƒط§ظپط© ظƒط±ظˆطھ ط§ظ„طµظˆطھ ظˆط§ظ„ظ…ظƒط³ط±ط§طھ",
                      "ط§ظ„ظپظ„طھط±":  "ظپظ„طھط± ط¯ط§ط®ظ„ظٹ ظ…ط²ط¯ظˆط¬ ظ„ظƒطھظ… ط£طµظˆط§طھ ط§ظ„ط¨ظˆط¨ ظˆط­ط±ظˆظپ ط§ظ„ط§ظ†ظپط¬ط§ط±"
                  }
    },
    {
        "id":  "AUD-061",
        "name":  "DJI Mic 2 (2 TX + 1 RX + Charging Case)",
        "nameEn":  "DJI Mic 2 (2 TX + 1 RX + Charging Case)",
        "category":  "audio",
        "brand":  "DJI",
        "price":  280,
        "oldPrice":  310,
        "rating":  5.0,
        "reviewsCount":  89,
        "stock":  7,
        "badge":  "ط¥ظ„ط؛ط§ط، ط¶ظˆط¶ط§ط، ط°ظƒظٹ",
        "image":  "images/prod_dji_mic2.jpg",
        "gallery":  [
                        "images/prod_dji_mic2.jpg"
                    ],
        "description":  "ظ†ط¸ط§ظ… ط§ظ„طµظˆطھ ط§ظ„ظ„ط§ط³ظ„ظƒظٹ ط§ظ„ظ…طھط·ظˆط± ظ…ظ† ط¯ظٹ ط¬ظٹ ط¢ظٹ ظ…ط¹ ط¹ظ„ط¨ط© ظ…ط¹ط¯ظ†ظٹط© ظپط§ط®ط±ط©طŒ ط¥ظ„ط؛ط§ط، ط¶ظˆط¶ط§ط، ط°ظƒظٹ ظپط¹ط§ظ„ ظˆطھط³ط¬ظٹظ„ ط¯ط§ط®ظ„ظٹ 32-bit Float.",
        "specs":  {
                      "ط§ظ„طھط³ط¬ظٹظ„":  "طھط³ط¬ظٹظ„ ط¯ط§ط®ظ„ظٹ 32-bit Float ط¨ط¹ظ…ظ‚ ظ‡ط§ط¦ظ„ ظ„ظ…ظ†ط¹ طھط´ظˆظٹط´ ط§ظ„طµظˆطھ",
                      "ط¥ظ„ط؛ط§ط، ط§ظ„ط¶ظˆط¶ط§ط،":  "ظ…ظٹط²ط© Intelligent Noise Cancelling ط§ظ„ط°ظƒظٹط© ظ„طھظ†ظ‚ظٹط© طµظˆطھ ط§ظ„ظ…طھط­ط¯ط« ظپظٹ ط§ظ„ط£ظ…ط§ظƒظ† ط§ظ„ظ…ط²ط¯ط­ظ…ط©",
                      "ط§ظ„ط¨ط·ط§ط±ظٹط©":  "18 ط³ط§ط¹ط© ط¹ظ…ظ„ ظƒط§ظ…ظ„ط© ظ…ط¹ ط¹ظ„ط¨ط© ط§ظ„ط´ط­ظ† ط§ظ„ظ…ط¹ط¯ظ†ظٹط© ط§ظ„ط£ظ†ظٹظ‚ط©",
                      "ط§ظ„ط§طھطµط§ظ„":  "ط§طھطµط§ظ„ ظ…ط¨ط§ط´ط± ط¨ط§ظ„ط¨ظ„ظˆطھظˆط« ظ…ط¹ ط§ظ„ظ‡ظˆط§طھظپ ط§ظ„ط°ظƒظٹط© ظˆظƒط§ظ…ظٹط±ط§طھ Osmo Pocket 3 ظˆ Action 4"
                  }
    },
    {
        "id":  "DJI-079",
        "name":  "DJI Osmo Mobile 6 Smartphone Gimbal",
        "nameEn":  "DJI Osmo Mobile 6 Smartphone Gimbal",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  115,
        "oldPrice":  130,
        "rating":  4.9,
        "reviewsCount":  112,
        "stock":  10,
        "badge":  "ظ…ط«ط¨طھ ظ…ظˆط¨ط§ظٹظ„ ط°ظƒظٹ",
        "image":  "images/prod_dji_osmo_mobile.jpg",
        "gallery":  [
                        "images/prod_dji_osmo_mobile.jpg",
                        "images/prod_dji_osmo_mobile_angle2.jpg",
                        "images/prod_dji_osmo_mobile_angle3.jpg",
                        "images/prod_dji_osmo_mobile_angle4.jpg"
                    ],
        "description":  "ظ…ط«ط¨طھ ط§ظ„ظ…ظˆط¨ط§ظٹظ„ ط§ظ„ط°ظƒظٹ ط«ظ„ط§ط«ظٹ ط§ظ„ظ…ط­ط§ظˆط± ظ…ظ† DJI ظ…ط¹ ط¹طµط§ طھظ…ط¯ظٹط¯ ظ…ط¯ظ…ط¬ط© ظˆطھطھط¨ط¹ ActiveTrack 6.0 ظˆط¹ط¬ظ„ط© طھط­ظƒظ… ط¬ط§ظ†ط¨ظٹط© ظپظٹ ط§ظ„ط²ظˆظ… ظˆط§ظ„ظپظˆظƒط³.",
        "specs":  {
                      "ط§ظ„ظ…ط­ط§ظˆط±":  "طھط«ط¨ظٹطھ ط«ظ„ط§ط«ظٹ ط§ظ„ظ…ط­ط§ظˆط± 3-Axis ظپط§ط¦ظ‚ ط§ظ„ظ†ط¹ظˆظ…ط©",
                      "ط¹طµط§ ط§ظ„طھظ…ط¯ظٹط¯":  "ط¹طµط§ طھظ…ط¯ظٹط¯ طھظ„ط³ظƒظˆط¨ظٹط© ظ…ط¯ظ…ط¬ط© ط¨ط·ظˆظ„ 215 ظ…ظ„ظ… ظ„ط²ظˆط§ظٹط§ ط§ظ„ط³ظٹظ„ظپظٹ ط§ظ„ظˆط§ط³ط¹ط©",
                      "ط§ظ„طھطھط¨ط¹":  "ActiveTrack 6.0 ظ„ظ…ظ„ط§ط­ظ‚ط© ط§ظ„ط£ط´ط®ط§طµ ط­طھظ‰ ط¹ظ†ط¯ ط§ظ„ط¯ظˆط±ط§ظ†",
                      "ط§ظ„طھط­ظƒظ…":  "ط¹ط¬ظ„ط© ط¬ط§ظ†ط¨ظٹط© ظ…ظٹظƒط§ظ†ظٹظƒظٹط© ظ„ظ„طھط­ظƒظ… ط¨ط§ظ„ظپظˆظƒط³ ظˆط§ظ„طھظ‚ط±ظٹط¨ ط¨ط¯ظ‚ط©"
                  }
    },
    {
        "id":  "DJI-084",
        "name":  "DJI RS 4 Mini Gimbal Stabilizer",
        "nameEn":  "DJI RS 4 Mini Gimbal Stabilizer",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  280,
        "oldPrice":  310,
        "rating":  4.8,
        "reviewsCount":  43,
        "stock":  5,
        "badge":  "ط®ظپظٹظپ ط§ظ„ظˆط²ظ† 2 ظƒط¬ظ… ط­ظ…ظˆظ„ط©",
        "image":  "images/prod_dji_rs4_mini.jpg",
        "gallery":  [
                        "images/prod_dji_rs4_mini.jpg",
                        "images/prod_dji_rs4_mini_angle2.jpg",
                        "images/prod_dji_rs4_mini_angle3.jpg",
                        "images/prod_dji_rs4_mini_angle4.jpg"
                    ],
        "description":  "ط¬ظٹظ…ط¨ظ„ ط§ط­طھط±ط§ظپظٹ طµط؛ظٹط± ط§ظ„ط­ط¬ظ… ظ„ظ…ظٹط±ظˆط±ظ„ظٹط³ ط³ظˆظ†ظٹ ظˆظƒط§ظ†ظˆظ†طŒ ظٹط¯ط¹ظ… ط§ظ„طھطµظˆظٹط± ط§ظ„ط¹ظ…ظˆط¯ظٹ ط§ظ„ظ…ط¨ط§ط´ط± Native Vertical ط¨ط¯ظˆظ† ط£ظٹ ظ‚ط·ط¹ ط¥ط¶ط§ظپظٹط©.",
        "specs":  {
                      "ط³ط¹ط© ط§ظ„ط­ظ…ظˆظ„ط©":  "ظٹطھط­ظ…ظ„ ط­طھظ‰ 2.0 ظƒط¬ظ… (ظ…ظ†ط§ط³ط¨ ظ„ظƒط§ظ…ظٹط±ط§ ط³ظˆظ†ظٹ A7 IV ظ…ط¹ ط¹ط¯ط³ط© 24-70mm)",
                      "ط§ظ„طھطµظˆظٹط± ط§ظ„ط±ط£ط³ظٹ":  "ط§ظ„طھط¨ط¯ظٹظ„ ط§ظ„ط³ط±ظٹط¹ ظ„ظ„ظˆط¶ط¹ ط§ظ„ط¹ظ…ظˆط¯ظٹ ط§ظ„ظ…ط®طµطµ ظ„ظ„ط±ظٹظ„ط² ظˆط§ظ„طھظٹظƒ طھظˆظƒ",
                      "ط§ظ„ظ‚ظپظ„ ط§ظ„ط¢ظ„ظٹ":  "ط£ظ‚ظپط§ظ„ ظ…ط­ط§ظˆط± ط¢ظ„ظٹط© ظ…ظ† ط§ظ„ط¬ظٹظ„ ط§ظ„ط«ط§ظ†ظٹ ط¨ظ…ط¬ط±ط¯ ط§ظ„ط¶ط؛ط· ط¹ظ„ظ‰ ط²ط± ط§ظ„طھط´ط؛ظٹظ„",
                      "ط§ظ„ظˆط²ظ†":  "795 ط¬ظ… ظپظ‚ط·"
                  }
    },
    {
        "id":  "DJI-086",
        "name":  "DJI RS 4 3-Axis Gimbal Stabilizer",
        "nameEn":  "DJI RS 4 3-Axis Gimbal Stabilizer",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  420,
        "oldPrice":  460,
        "rating":  4.9,
        "reviewsCount":  56,
        "stock":  6,
        "badge":  "ط­ظ…ظˆظ„ط© 3 ظƒط¬ظ…",
        "image":  "images/prod_dji_rs4.jpg",
        "gallery":  [
                        "images/prod_dji_rs4.jpg",
                        "images/prod_dji_rs4_angle2.jpg",
                        "images/prod_dji_rs4_angle3.jpg",
                        "images/prod_dji_rs4_angle4.jpg"
                    ],
        "description":  "ط§ظ„ط¬ظٹظ„ ط§ظ„ط±ط§ط¨ط¹ ط§ظ„ط±ط§ط¦ط¯ ظ…ط¹ ط®ظˆط§ط±ط²ظ…ظٹط© طھط«ط¨ظٹطھ RS ط§ظ„ط¬ظٹظ„ ط§ظ„ط±ط§ط¨ط¹طŒ ط·ظ„ط§ط، طھظپظ„ظˆظ† ظ„طھظˆط§ط²ظ† ظپط§ط¦ظ‚ ط§ظ„ط³ظ„ط§ط³ط© ظˆط¯ط¹ظ… ظ…ظˆطھظˆط± Focus Pro.",
        "specs":  {
                      "ط³ط¹ط© ط§ظ„ط­ظ…ظˆظ„ط©":  "3.0 ظƒط¬ظ… ظ„ظ…ط¬ظ…ظˆط¹ط§طھ ط§ظ„ظƒط§ظ…ظٹط±ط§طھ ظˆط§ظ„ط¹ط¯ط³ط§طھ ط§ظ„ط§ط­طھط±ط§ظپظٹط©",
                      "ط§ظ„ط£ط°ط±ط¹":  "ظ…ط­ط§ظˆط± ظ…ط؛ط·ط§ط© ط¨ط·ط¨ظ‚ط© طھظپظ„ظˆظ† Teflon ظ„طھظ‚ظ„ظٹظ„ ط§ظ„ط§ط­طھظƒط§ظƒ ظˆطھط³ظ‡ظٹظ„ ط§ظ„ظˆط²ظ† ط¨ط¯ظ‚ط© ط§ظ„ظ…ظ„ظٹظ…طھط±",
                      "ط§ظ„ط´ط§ط´ط©":  "ط´ط§ط´ط© ظ„ظ…ط³ ظ…ظ„ظˆظ†ط© OLED ظ…ط¹ ظ‚ظپظ„ طھظ„ظ‚ط§ط¦ظٹ ظ„ط­ظپط¸ ط§ظ„ط·ط§ظ‚ط©",
                      "ط§ظ„ط¨ط·ط§ط±ظٹط©":  "ط­طھظ‰ 12 ط³ط§ط¹ط© طھط´ط؛ظٹظ„ ظ…ط¹ ظ…ظ‚ط¨ط¶ ط¨ط·ط§ط±ظٹط© BG21"
                  }
    },
    {
        "id":  "DJI-088",
        "name":  "DJI RS 4 Pro Carbon Fiber Gimbal Stabilizer",
        "nameEn":  "DJI RS 4 Pro Carbon Fiber Gimbal Stabilizer",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  680,
        "oldPrice":  750,
        "rating":  5.0,
        "reviewsCount":  65,
        "stock":  4,
        "badge":  "ط£ظ„ظٹط§ظپ ظƒط±ط¨ظˆظ†ظٹط© 4.5 ظƒط¬ظ…",
        "image":  "images/prod_dji_rs4_pro.jpg",
        "gallery":  [
                        "images/prod_dji_rs4_pro.jpg",
                        "images/prod_dji_rs4_pro_angle2.jpg",
                        "images/prod_dji_rs4_pro_angle3.jpg",
                        "images/prod_dji_rs4_pro_angle4.jpg"
                    ],
        "description":  "ظˆط­ط´ ط§ظ„ط³ظٹظ†ظ…ط§ ظ…ظ† ط£ظ„ظٹط§ظپ ط§ظ„ظƒط±ط¨ظˆظ† ط¨ط£ط°ط±ط¹ ظƒط±ط¨ظˆظ† ظ…ظ…طھط¯ط© طھطھط­ظ…ظ„ ظƒط§ظ…ظٹط±ط§طھ Sony FX6 ظˆ RED Komodo ط­طھظ‰ 4.5 ظƒط¬ظ… ظ…ط¹ ط¹ط²ظ… ظ…ط­ط±ظƒط§طھ ط£ظ‚ظˆظ‰ ط¨ظ†ط³ط¨ط© 20%.",
        "specs":  {
                      "ط§ظ„ط¨ظ†ظٹط©":  "ط£ط°ط±ط¹ ط£ظ„ظٹط§ظپ ظƒط±ط¨ظˆظ†ظٹط© Carbon Fiber ط®ظپظٹظپط© ظˆط´ط¯ظٹط¯ط© ط§ظ„طµظ„ط§ط¨ط©",
                      "ط³ط¹ط© ط§ظ„ط­ظ…ظˆظ„ط©":  "4.5 ظƒط¬ظ… ط­ظ…ظˆظ„ط© ط³ظٹظ†ظ…ط§ط¦ظٹط© ط¶ط®ظ…ط©",
                      "ط¹ط²ظ… ط§ظ„ظ…ط­ط±ظƒط§طھ":  "ط²ظٹط§ط¯ط© ط¹ط²ظ… ط§ظ„ط¯ظˆط±ط§ظ† ط¨ظ†ط³ط¨ط© 20% ظ„ظƒط§ظپط© ط§ظ„ظ…ط­ط§ظˆط± ظ„طھط¬ط§ظˆط¨ ظپظˆط±ظٹ ط¨ط¯ظˆظ† ط§ظ‡طھط²ط§ط²",
                      "ط§ظ„طھظˆط§ظپظ‚":  "ط¯ط¹ظ… ظƒط§ظ…ظ„ ظ„ظ…ظ†ط¸ظˆظ…ط© ظپظˆظƒط³ DJI Focus Pro LiDAR ظˆ Transmission ط§ظ„ظ„ط§ط³ظ„ظƒظٹ"
                  }
    },
    {
        "id":  "DJI-090",
        "name":  "DJI RS 3 Pro Gimbal Stabilizer",
        "nameEn":  "DJI RS 3 Pro Gimbal Stabilizer",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  590,
        "oldPrice":  650,
        "rating":  4.9,
        "reviewsCount":  82,
        "stock":  3,
        "badge":  "ظƒط±ط¨ظˆظ† ظپط§ظٹط¨ط± ط£طµظ„ظٹ",
        "image":  "images/prod_dji_rs3_pro.png",
        "gallery":  [
                        "images/prod_dji_rs3_pro.png"
                    ],
        "description":  "ظ…ط«ط¨طھ ط§ظ„ظƒط§ظ…ظٹط±ط§ ط§ظ„ط³ظٹظ†ظ…ط§ط¦ظٹ ط¨ط£ط°ط±ط¹ ظƒط±ط¨ظˆظ†ظٹط© ظ…ظ…طھط¯ط© ظˆط³ط¹ط© ط­ظ…ظˆظ„ط© 4.5 ظƒط¬ظ… ظˆط´ط§ط´ط© ظ„ظ…ط³ OLED 1.8 ط¨ظˆطµط© ظ…طھظˆط§ظپظ‚ ظ…ط¹ ظƒط§ظ…ظٹط±ط§طھ FX3 ظˆ R5C.",
        "specs":  {
                      "ط§ظ„ط­ظ…ظˆظ„ط©":  "4.5 ظƒط¬ظ…",
                      "ط§ظ„ط£ط°ط±ط¹":  "ط£ظ„ظٹط§ظپ ظƒط±ط¨ظˆظ†ظٹط© ظ…طھطµظ„ط© ظ…ظ† ظ‚ط·ط¹ط© ظˆط§ط­ط¯ط© ط؛ظٹط± ظ…ظ„ط­ظˆظ…ط©",
                      "ط§ظ„ط´ط§ط´ط©":  "1.8 ط¨ظˆطµط© OLED ظ…ظ„ظˆظ†ط©",
                      "ط§ظ„ط£ظ‚ظپط§ظ„":  "ط£ظ‚ظپط§ظ„ ظ…ط­ط§ظˆط± ط£ظˆطھظˆظ…ط§طھظٹظƒظٹط© ط³ط±ظٹط¹ط©"
                  }
    },
    {
        "id":  "STN-301",
        "name":  "Kingjoy MP208F Heavy Duty Monopod with Base",
        "nameEn":  "Kingjoy MP208F Heavy Duty Monopod with Base",
        "category":  "stands",
        "brand":  "TOP CAM",
        "price":  75,
        "oldPrice":  85,
        "rating":  4.8,
        "reviewsCount":  24,
        "stock":  8,
        "badge":  "ظ…ظˆظ†ظˆ ط¨ظˆط¯ ظپظٹط¯ظٹظˆ ط§ط­طھط±ط§ظپظٹ",
        "image":  "images/prod_mp208f_monopod.jpg",
        "gallery":  [
                        "images/prod_mp208f_monopod.jpg"
                    ],
        "description":  "ظ…ظˆظ†ظˆط¨ظˆط¯ ط§ط­طھط±ط§ظپظٹ ظ‡ظٹط¯ط±ظˆظ„ظٹظƒظٹ ط¨ط£ط±ط¬ظ„ ط«ظ„ط§ط«ظٹط© ظ‚ط§ط¨ظ„ط© ظ„ظ„ط·ظٹ ظˆظ‚ط§ط¹ط¯ط© ظ…ط§ط¦ظ„ط© 360 ط¯ط±ط¬ط©طŒ ظ…ط«ط§ظ„ظٹ ظ„ظ…طµظˆط±ظٹ ط§ظ„ط£ط¹ط±ط§ط³ ظˆط§ظ„ظپط¹ط§ظ„ظٹط§طھ ط§ظ„ط±ظٹط§ط¶ظٹط©.",
        "specs":  {
                      "ط§ظ„ظ…ط§ط¯ط©":  "ط£ظ„ظˆظ…ظ†ظٹظˆظ… ظ…ظ‚ظˆظ‰ ط®ظپظٹظپ ظˆظ…طھظٹظ†",
                      "ط§ظ„ط§ط±طھظپط§ط¹ ط§ظ„ط£ظ‚طµظ‰":  "180 ط³ظ…",
                      "ط§ظ„ط­ظ…ظˆظ„ط© ط§ظ„ظ‚طµظˆظ‰":  "8 ظƒط¬ظ…",
                      "ط§ظ„ظ‚ط§ط¹ط¯ط©":  "ظ‚ط§ط¹ط¯ط© ط«ظ„ط§ط«ظٹط© ظ‡ظٹط¯ط±ظˆظ„ظٹظƒظٹط© ظ„ط­ط±ظƒط© ط¨ط§ظ† ط³ظ„ط³ط©"
                  }
    },
    {
        "id":  "STN-302",
        "name":  "Kingjoy VT-3510 Fluid Head Video Tripod",
        "nameEn":  "Kingjoy VT-3510 Fluid Head Video Tripod",
        "category":  "stands",
        "brand":  "TOP CAM",
        "price":  145,
        "oldPrice":  165,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  7,
        "badge":  "طھط±ط§ظٹط¨ظˆط¯ ظ‡ظٹط¯ط±ظˆظ„ظٹظƒ",
        "image":  "images/prod_vt3510_tripod.jpg",
        "gallery":  [
                        "images/prod_vt3510_tripod.jpg",
                        "images/prod_vt3510_tripod_angle2.jpg",
                        "images/prod_vt3510_tripod_angle3.jpg"
                    ],
        "description":  "ط­ط§ظ…ظ„ ظپظٹط¯ظٹظˆ ط«ظ„ط§ط«ظٹ ظ‚ظˆظٹ ط¨ط±ط£ط³ ظ‡ظٹط¯ط±ظˆظ„ظٹظƒظٹ ط§ط­طھط±ط§ظپظٹ VT-3510 ط¨ط­ط±ظƒط© ط¨ط§ظ† ظˆطھظٹظ„طھ ظ†ط§ط¹ظ…ط© ظƒط§ظ„ط­ط±ظٹط± ظˆظ…ظˆط²ط¹ ط£ظˆط³ط· ظ„ط«ط¨ط§طھ ظƒط§ظ…ظ„.",
        "specs":  {
                      "ط±ط£ط³ ط§ظ„ظپظٹط¯ظٹظˆ":  "ط±ط£ط³ ظ‡ظٹط¯ط±ظˆظ„ظٹظƒظٹ Fluid Damping Head ظ…ط¹ ط°ط±ط§ط¹ طھط­ظƒظ… ط·ظˆظٹظ„",
                      "ط§ظ„ط§ط±طھظپط§ط¹":  "ظ…ظ† 80 ط³ظ… ط­طھظ‰ 190 ط³ظ…",
                      "ط³ط¹ط© ط§ظ„ط­ظ…ظˆظ„ط©":  "10 ظƒط¬ظ…",
                      "ط§ظ„ط£ط±ط¬ظ„":  "ط£ط±ط¬ظ„ ط£ظ„ظˆظ…ظ†ظٹظˆظ… ظ…ط²ط¯ظˆط¬ط© ط§ظ„ط£ظ†ط§ط¨ظٹط¨ ظ…ط¹ ظ…ظˆط²ط¹ ظˆط³ط·ظٹ Mid-level spreader"
                  }
    },
    {
        "id":  "STN-312",
        "name":  "Manfrotto 504X Fluid Head Carbon Twin Tripod",
        "nameEn":  "Manfrotto 504X Fluid Head Carbon Twin Tripod",
        "category":  "stands",
        "brand":  "Manfrotto",
        "price":  490,
        "oldPrice":  540,
        "rating":  5.0,
        "reviewsCount":  36,
        "stock":  3,
        "badge":  "طھط±ط§ظٹط¨ظˆط¯ ط³ظٹظ†ظ…ط§ ط¥ظٹط·ط§ظ„ظٹ",
        "image":  "images/prod_manfrotto_504x.jpg",
        "gallery":  [
                        "images/prod_manfrotto_504x.jpg",
                        "images/prod_manfrotto_504x_angle2.jpg",
                        "images/prod_manfrotto_504x_angle3.jpg",
                        "images/prod_manfrotto_504x_angle4.jpg"
                    ],
        "description":  "ط§ظ„طھط±ط§ظٹط¨ظˆط¯ ط§ظ„ط³ظٹظ†ظ…ط§ط¦ظٹ ط§ظ„ط¥ظٹط·ط§ظ„ظٹ ط§ظ„ط±ط§ط¦ط¯ ط¨ط£ظ„ظٹط§ظپ ط§ظ„ظƒط±ط¨ظˆظ† ط®ظپظٹظپط© ط§ظ„ظˆط²ظ† ظˆط±ط£ط³ ظ‡ظٹط¯ط±ظˆظ„ظٹظƒظٹ 504X ط¨ظ†ط¸ط§ظ… ظ…ظˆط§ط²ظ†ط© ظ…طھط؛ظٹط± ظˆظ†طµظپ ظƒط±ط© 75 ظ…ظ„ظ….",
        "specs":  {
                      "ط±ط£ط³ ط§ظ„ظپظٹط¯ظٹظˆ":  "Manfrotto 504X Fluid Video Head ظ…ط¹ ظ†ط¸ط§ظ… Counterbalance ط°ظƒظٹ ط¨ظ€ 4 ط®ط·ظˆط§طھ",
                      "ط§ظ„ط£ط±ط¬ظ„":  "ط£ظ„ظٹط§ظپ ظƒط±ط¨ظˆظ†ظٹط© Fast Twin Carbon Legs ط¨ظ†ط¸ط§ظ… ظ‚ظپظ„ ط±ط§ظپط¹ط© ظˆط§ط­ط¯ ظپط§ط¦ظ‚ ط§ظ„ط³ط±ط¹ط©",
                      "ط§ظ„ط­ظ…ظˆظ„ط©":  "12 ظƒط¬ظ…",
                      "ط§ظ„ظˆط²ظ† ط§ظ„ط¥ط¬ظ…ط§ظ„ظٹ":  "3.9 ظƒط¬ظ… ظپظ‚ط·",
                      "ط§ظ„طµظ†ط§ط¹ط©":  "طµظ†ط§ط¹ط© ط¥ظٹط·ط§ظ„ظٹط© ظپط§ط®ط±ط© 100%"
                  }
    },
    {
        "id":  "STN-320",
        "name":  "Godox Heavy Duty Studio C-Stand with Boom Arm",
        "nameEn":  "Godox Heavy Duty Studio C-Stand with Boom Arm",
        "category":  "stands",
        "brand":  "Godox",
        "price":  110,
        "oldPrice":  125,
        "rating":  4.9,
        "reviewsCount":  58,
        "stock":  9,
        "badge":  "ط³ظٹ ط³طھط§ظ†ط¯ ط§ط³طھظˆط¯ظٹظˆ ط§ط­طھط±ط§ظپظٹ",
        "image":  "images/prod_godox_cstand.jpg",
        "gallery":  [
                        "images/prod_godox_cstand.jpg"
                    ],
        "description":  "ط³طھط§ظ†ط¯ ط¥ط¶ط§ط،ط© C-Stand ظپظˆظ„ط§ط°ظٹ طµظ„ط¨ ط؛ظٹط± ظ‚ط§ط¨ظ„ ظ„ظ„ظƒط³ط± ظ…ط¹ ط°ط±ط§ط¹ ط¨ظˆظ… ط¬ط±ظٹط¨ ظˆظ‚ط¨ط¶ط§طھ ط£ظ„ظ…ظ†ظٹظˆظ… ظ„ط­ظ…ظ„ ط§ظ„ط¥ط¶ط§ط،ط§طھ ط§ظ„ط«ظ‚ظٹظ„ط© ظˆط§ظ„ط³ظˆظپطھ ط¨ظˆظƒط³ ط¨ط£ظ…ط§ظ† طھط§ظ….",
        "specs":  {
                      "ط§ظ„ظ…ط§ط¯ط©":  "ط³طھط§ظ†ظ„ط³ ط³طھظٹظ„ ظ…ط¬ظ„ظپظ† ظ…ظ‚ط§ظˆظ… ظ„ظ„طµط¯ط£ ط¨ظ†ط³ط¨ط© 100%",
                      "ط§ظ„ط§ط±طھظپط§ط¹ ط§ظ„ط£ظ‚طµظ‰":  "3.3 ظ…طھط± (330 ط³ظ…)",
                      "ط°ط±ط§ط¹ ط§ظ„ط¨ظˆظ…":  "ط°ط±ط§ط¹ ط¨ظˆظ… ظ‡ظٹظپظٹ ط¯ظٹظˆطھظٹ ط¨ط·ظˆظ„ 127 ط³ظ… ظ…ط¹ ط±ط£ط³ظٹ ظ‚ط¨ط¶ط© Grip Heads ط¨ظ€ 4 ظپطھط­ط§طھ ظ…ط®طھظ„ظپط©",
                      "ط³ط¹ط© ط§ظ„ط­ظ…ظˆظ„ط©":  "ظٹطھط­ظ…ظ„ ط­طھظ‰ 20 ظƒط¬ظ… ط¨ط«ط¨ط§طھ ظ…ط·ظ„ظ‚",
                      "ط§ظ„ظ‚ط§ط¹ط¯ط©":  "ظ‚ط§ط¹ط¯ط© ط³ظ„ط­ظپط§ط© Turtle Base ظ‚ط§ط¨ظ„ط© ظ„ظ„ط¥ط²ط§ظ„ط© ظ…ط¹ ظپطھط­ط§طھ ظ„ط£ظƒظٹط§ط³ ط§ظ„ط±ظ…ظ„"
                  }
    },
    {
        "id":  "ACC-356",
        "name":  "SmallRig Full Camera Cage for Sony FX3 \u0026 FX30 (4183B)",
        "nameEn":  "SmallRig Full Camera Cage for Sony FX3 \u0026 FX30 (4183B)",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  89,
        "oldPrice":  99,
        "rating":  4.9,
        "reviewsCount":  67,
        "stock":  8,
        "badge":  "ظƒظٹط¬ ط£ظ„ظˆظ…ظ†ظٹظˆظ… CNC",
        "image":  "images/prod_smallrig_fx3_cage.jpg",
        "gallery":  [
                        "images/prod_smallrig_fx3_cage.jpg",
                        "images/prod_smallrig_fx3_cage_angle2.jpg",
                        "images/prod_smallrig_fx3_cage_angle3.jpg"
                    ],
        "description":  "ظ‚ظپطµ ظƒط§ظ…ظ„ ظ…ط®طµطµ ظ„ظƒط§ظ…ظٹط±ط§طھ ط³ظˆظ†ظٹ FX3 ظˆ FX30 ظ…طھظˆط§ظپظ‚ ظ…ط¹ ظ…ظ‚ط¨ط¶ ط§ظ„طµظˆطھ ط§ظ„ط£طµظ„ظٹ XLR Handle ظˆظٹظˆظپط± ط­ظ…ط§ظٹط© ظƒط§ظ…ظ„ط© ظˆظ…ظ†ط§ظپط° طھط«ط¨ظٹطھ ظ…طھط¹ط¯ط¯ط©.",
        "specs":  {
                      "ط§ظ„ظ…ط§ط¯ط©":  "ط£ظ„ظˆظ…ظ†ظٹظˆظ… CNC ط£ط³ظˆط¯ ظ…ط¤ظƒط³ط¯",
                      "ط§ظ„ظ…ظ†ط§ظپط°":  "ظپطھط­ط§طھ 1/4\"-20 ظˆ 3/8\"-16 ظ…ط¹ ظ†ظ‚ط§ط· طھظ…ظˆط¶ط¹ ARRI ظˆظ…ط¬ط±ظ‰ NATO ظˆط³ظƒط© ط­ط°ط§ط، ط¨ط§ط±ط¯",
                      "ط§ظ„طھظˆط§ظپظ‚ ظ…ط¹ ط§ظ„ظ…ظ‚ط¨ط¶":  "ظٹطھط¶ظ…ظ† ظ‚ط·ط¹ط© ط¹ظ„ظˆظٹط© ظ‚ط§ط¨ظ„ط© ظ„ظ„ط¥ط²ط§ظ„ط© ظ„طھط±ظƒظٹط¨ ظ…ظ‚ط¨ط¶ ط³ظˆظ†ظٹ XLR ط§ظ„ط£طµظ„ظٹ ط¨ط³ظ„ط§ط³ط©",
                      "ظ‚ط§ط¹ط¯ط© ط§ظ„طھط«ط¨ظٹطھ":  "ظ‚ط§ط¹ط¯ط© Arca-Swiss ط³ط±ظٹط¹ط© ظ…ط¯ظ…ط¬ط© ظ„ظ„طھط±ظƒظٹط¨ ط§ظ„ظ…ط¨ط§ط´ط± ط¹ظ„ظ‰ ظ…ط«ط¨طھط§طھ DJI RS"
                  }
    },
    {
        "id":  "ACC-358",
        "name":  "SmallRig Full Cage for Sony A7 IV / A7R V / A7S III (3667B)",
        "nameEn":  "SmallRig Full Cage for Sony A7 IV / A7R V / A7S III (3667B)",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  65,
        "oldPrice":  75,
        "rating":  4.9,
        "reviewsCount":  94,
        "stock":  10,
        "badge":  "ط§ظ„ط£ظƒط«ط± ظ…ط¨ظٹط¹ط§ظ‹ ظ„ظƒط§ظ…ظٹط±ط§طھ ط³ظˆظ†ظٹ",
        "image":  "images/prod_smallrig_a7iv_cage.jpg",
        "gallery":  [
                        "images/prod_smallrig_a7iv_cage.jpg",
                        "images/prod_smallrig_a7iv_cage_angle2.jpg",
                        "images/prod_smallrig_a7iv_cage_angle3.jpg",
                        "images/prod_smallrig_a7iv_cage_angle4.jpg"
                    ],
        "description":  "ط§ظ„ظ‚ظپطµ ط§ظ„ظ…طھظƒط§ظ…ظ„ ظ„ظƒط§ظ…ظٹط±ط§طھ ط³ظˆظ†ظٹ ط£ظ„ظپط§ Full-Frame ط¨ظ‚ظپظ„ ط«ظ†ط§ط¦ظٹ ط§ظ„ظ†ظ‚ط§ط· ظٹظ…ظ†ط¹ ط§ظ„ط§ظ„طھظˆط§ط، ظˆظ…ظپطھط§ط­ ظ…ط؛ظ†ط§ط·ظٹط³ظٹ ظ…ط¯ظ…ط¬ ظ„ط³ظ‡ظˆظ„ط© ط§ظ„ظپظƒ ظˆط§ظ„طھط±ظƒظٹط¨.",
        "specs":  {
                      "ط§ظ„طھظˆط§ظپظ‚":  "Sony Alpha 7 IVطŒ Alpha 7R VطŒ Alpha 7S IIIطŒ Alpha 1",
                      "ظ†ط¸ط§ظ… ط§ظ„ظ‚ظپظ„":  "ظ‚ظپظ„ ط¨ظ…ط³ظ…ط§ط± ط³ظپظ„ظٹ 1/4\" ظˆظ‚ظپظ„ ط¬ط§ظ†ط¨ظٹ ظپظٹ ط­ظ„ظ‚ط© ط§ظ„ط­ط²ط§ظ… ظ„ظ…ظ†ط¹ ط£ظٹ ط­ط±ظƒط© ظ†ظ‡ط§ط¦ظٹط§ظ‹",
                      "ط§ظ„ظ…ظ†ط§ظپط°":  "Arca Quick Release Plate ظ…ط¯ظ…ط¬ط© + ط³ظƒط© NATO ظˆظ…ظ†ط§ظپط° ARRI Locating",
                      "ط§ظ„ظˆط²ظ†":  "170 ط¬ظ…"
                  }
    },
    {
        "id":  "ACC-362",
        "name":  "SmallRig Ergonomic Top Handle with Shoe Mount (3764)",
        "nameEn":  "SmallRig Ergonomic Top Handle with Shoe Mount (3764)",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  35,
        "oldPrice":  42,
        "rating":  4.8,
        "reviewsCount":  51,
        "stock":  15,
        "badge":  "ظ…ظ‚ط¨ط¶ ط¹ظ„ظˆظٹ ظ…ط±ظٹط­",
        "image":  "images/prod_smallrig_top_handle.jpg",
        "gallery":  [
                        "images/prod_smallrig_top_handle.jpg",
                        "images/prod_smallrig_top_handle_angle2.jpg",
                        "images/prod_smallrig_top_handle_angle3.jpg",
                        "images/prod_smallrig_top_handle_angle4.jpg"
                    ],
        "description":  "ظ…ظ‚ط¨ط¶ ط¹ظ„ظˆظٹ ط®ظپظٹظپ ط§ظ„ظˆط²ظ† ظˆظ…ط±ظٹط­ ظ„ظ‚ط¨ط¶ط© ط§ظ„ظٹط¯ ظ…ط¹ ظ‚ط§ط¹ط¯ط© Cold Shoe ظ…ط¯ظ…ط¬ط© ظ„طھط±ظƒظٹط¨ ط´ط§ط´ط§طھ ط§ظ„ظ…ط±ط§ظ‚ط¨ط© ظˆط§ظ„ظ…ط§ظٹظƒط±ظˆظپظˆظ†ط§طھ ظˆط£ط¶ظˆط§ط، LED ط§ظ„طµط؛ظٹط±ط©.",
        "specs":  {
                      "ط§ظ„طھط«ط¨ظٹطھ":  "ظٹط«ط¨طھ ظ…ط¨ط§ط´ط±ط© ط¹ظ„ظ‰ ط£ظٹ ظ‚ط§ط¹ط¯ط© Cold Shoe ظ‚ظٹط§ط³ظٹط© ظ…ط¹ ظ…ط³ظ…ط§ط± ظ‚ظپظ„ ظ…ط±ظٹط­",
                      "ط§ظ„ظ…ظ†ط§ظپط°":  "ظ…ظ†ط§ظپط° 1/4\"-20 ظˆ 3/8\"-16 ظ…ط¹ ظ‚ط§ط¹ط¯ط© ط­ط°ط§ط، ط¨ط§ط±ط¯ ط¥ط¶ط§ظپظٹط© ظپظٹ ط§ظ„ظ…ظ‚ط¯ظ…ط©",
                      "ط§ظ„ظˆط²ظ†":  "129 ط¬ظ… ظپظ‚ط·"
                  }
    },
    {
        "id":  "MON-454",
        "name":  "Desview T3 Smartphone \u0026 Tablet Teleprompter",
        "nameEn":  "Desview T3 Smartphone \u0026 Tablet Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  85,
        "oldPrice":  99,
        "rating":  4.8,
        "reviewsCount":  46,
        "stock":  6,
        "badge":  "طھظ„ظٹط¨ط±ظˆظ…ط¨طھط± ظ…ظ„ظ‚ظ† ظ†طµظˆطµ",
        "image":  "images/prod_desview_t3.jpg",
        "gallery":  [
                        "images/prod_desview_t3.jpg",
                        "images/prod_desview_t3_angle2.jpg",
                        "images/prod_desview_t3_angle3.jpg"
                    ],
        "description":  "ظ…ظ„ظ‚ظ† ظ†طµظˆطµ ط§ط­طھط±ط§ظپظٹ ظ…ط­ظ…ظˆظ„ ظٹط¯ط¹ظ… ط§ظ„ظ‡ظˆط§طھظپ ظˆط§ظ„ط£ط¬ظ‡ط²ط© ط§ظ„ظ„ظˆط­ظٹط© ط­طھظ‰ 11 ط¨ظˆطµط©طŒ ظ…ط¹ ط²ط¬ط§ط¬ ظ…ظ‚ط³ظ… ظ„ظ„ط­ط²ظ…ط© 70/30 ظپط§ط¦ظ‚ ط§ظ„ط´ظپط§ظپظٹط© ظˆط±ظٹظ…ظˆطھ ظƒظ†طھط±ظˆظ„ ط¨ظ„ظˆطھظˆط«.",
        "specs":  {
                      "ط§ظ„ط²ط¬ط§ط¬":  "Beam Splitter Glass ط¹ط§ظ„ظٹ ط§ظ„ط¬ظˆط¯ط© ط¨ظ†ط³ط¨ط© 70/30 ط¨ط¯ظˆظ† ط£ظٹ طھط£ط«ظٹط± ط¹ظ„ظ‰ ط¬ظˆط¯ط© ط§ظ„طµظˆط±ط©",
                      "ط§ظ„ط£ط¬ظ‡ط²ط© ط§ظ„ظ…ط¯ط¹ظˆظ…ط©":  "ط§ظ„ظ‡ظˆط§طھظپ ط§ظ„ط°ظƒظٹط© ظˆط£ط¬ظ‡ط²ط© ط§ظ„طھط§ط¨ظ„طھ ط­طھظ‰ ط­ط¬ظ… 11 ط¨ظˆطµط© (ط¨ظ…ط§ ظپظٹ ط°ظ„ظƒ iPad)",
                      "ط­ظ„ظ‚ط§طھ ط§ظ„ط¹ط¯ط³ط§طھ":  "ظٹطھط¶ظ…ظ† 9 ط­ظ„ظ‚ط§طھ طھط­ظˆظٹظ„ ظ„ظ…ظ‚ط§ط³ط§طھ ط§ظ„ط¹ط¯ط³ط§طھ: 49, 52, 55, 58, 62, 67, 72, 77, 82 ظ…ظ…",
                      "ط§ظ„طھط­ظƒظ…":  "ط±ظٹظ…ظˆطھ ظƒظ†طھط±ظˆظ„ Bluetooth ظ…ط¯ظ…ط¬ ظ„ظ„طھط­ظƒظ… ط¨ط³ط±ط¹ط© ط§ظ„ظ†طµ ظˆط¥ظٹظ‚ط§ظپظ‡ ط¹ط¨ط± طھط·ط¨ظٹظ‚ Desview"
                  }
    },
    {
        "id":  "MON-478",
        "name":  "FeelWorld LUT7 7-Inch 2200nits 4K Field Monitor",
        "nameEn":  "FeelWorld LUT7 7-Inch 2200nits 4K Field Monitor",
        "category":  "monitors",
        "brand":  "FeelWorld",
        "price":  220,
        "oldPrice":  250,
        "rating":  4.9,
        "reviewsCount":  58,
        "stock":  5,
        "badge":  "ط³ط·ظˆط¹ ط®ط§ط±ظ‚ 2200nits طھط­طھ ط§ظ„ط´ظ…ط³",
        "image":  "images/prod_feelworld_lut7.jpg",
        "gallery":  [
                        "images/prod_feelworld_lut7.jpg",
                        "images/prod_feelworld_lut7_angle2.jpg",
                        "images/prod_feelworld_lut7_angle3.jpg",
                        "images/prod_feelworld_lut7_angle4.jpg"
                    ],
        "description":  "ط´ط§ط´ط© ظ…ط±ط§ظ‚ط¨ط© ظ…ظٹط¯ط§ظ†ظٹط© ط³ط§ط·ط¹ط© ظƒط§ظ„ظ†ظ‡ط§ط± 2200nits ظˆط§ط¶ط­ط© طھظ…ط§ظ…ط§ظ‹ طھط­طھ ط£ط´ط¹ط© ط§ظ„ط´ظ…ط³ ط§ظ„ظ…ط¨ط§ط´ط±ط© ط¨ط¯ظˆظ† ط´ظ…ط³ظٹط©طŒ ظ…ط¹ ط¯ط¹ظ… 3D LUT ط¨ط¯ظ‚ط© 4K HDMI.",
        "specs":  {
                      "ط§ظ„ط´ط§ط´ط©":  "7 ط¨ظˆطµط© IPS ط¨ط¯ظ‚ط© Full HD 1920x1200",
                      "ط§ظ„ط³ط·ظˆط¹":  "2200nits ظپط§ط¦ظ‚ط© ط§ظ„ط³ط·ظˆط¹ ظ„ظ„ط§ط³طھط®ط¯ط§ظ… ط§ظ„ط®ط§ط±ط¬ظٹ ط§ظ„ظ…ط¨ط§ط´ط±",
                      "ط§ظ„ظ…ظ†ط§ظپط°":  "ط¯ط®ظˆظ„ ظˆط®ط±ظˆط¬ 4K HDMI Loop-out",
                      "ط£ط¯ظˆط§طھ ط§ظ„طھطµظˆظٹط±":  "WaveformطŒ VectorscopeطŒ HistogramطŒ Peaking FocusطŒ False Colors",
                      "ط¯ط¹ظ… LUT":  "طھط­ظ…ظٹظ„ ط­طھظ‰ 50 ظ…ظ„ظپ 3D LUT ط¹ط¨ط± ط¨ط·ط§ظ‚ط© SD"
                  }
    },
    {
        "id":  "MON-481",
        "name":  "FeelWorld F6 Plus V2 5.5-Inch 3D LUT Touch Monitor",
        "nameEn":  "FeelWorld F6 Plus V2 5.5-Inch 3D LUT Touch Monitor",
        "category":  "monitors",
        "brand":  "FeelWorld",
        "price":  140,
        "oldPrice":  160,
        "rating":  4.8,
        "reviewsCount":  73,
        "stock":  7,
        "badge":  "ط´ط§ط´ط© ظ„ظ…ط³ ط®ظپظٹظپط© ظ„ظ„ط³طھظٹط¨ظ„ط§ظٹط²ط±",
        "image":  "images/prod_feelworld_f6_plus.jpg",
        "gallery":  [
                        "images/prod_feelworld_f6_plus.jpg",
                        "images/prod_feelworld_f6_plus_angle2.jpg",
                        "images/prod_feelworld_f6_plus_angle3.jpg",
                        "images/prod_feelworld_f6_plus_angle4.jpg"
                    ],
        "description":  "ط´ط§ط´ط© ظ…ظˆظ†ظٹطھط± ظ„ظ…ط³ظٹط© ط®ظپظٹظپط© ط§ظ„ظˆط²ظ† ظˆظ…ط¯ظ…ط¬ط© ظ…ط«ط§ظ„ظٹط© ظ„ظ…ط«ط¨طھط§طھ ط§ظ„ط¬ظٹظ…ط¨ظ„ ظˆط§ظ„ظƒط§ظ…ظٹط±ط§طھ ط§ظ„طµط؛ظٹط±ط©طŒ ظ…ط¹ ط¯ط¹ظ… 3D LUT ظˆظ…ط®ط±ط¬ ط·ط§ظ‚ط© DC ظ„طھط´ط؛ظٹظ„ ط§ظ„ظƒط§ظ…ظٹط±ط§.",
        "specs":  {
                      "ط§ظ„ط´ط§ط´ط©":  "5.5 ط¨ظˆطµط© ط´ط§ط´ط© ظ„ظ…ط³ طھط¹ظ…ظ„ ط¨ط§ظ„ظƒط§ظ…ظ„ ظ…ط¹ ظ‚ط§ط¦ظ…ط© OCR ط³ط±ظٹط¹ط©",
                      "ط§ظ„ظˆط²ظ†":  "235 ط¬ظ… ظپظ‚ط· (ط®ظپظٹظپط© ط¬ط¯ط§ظ‹ ظ„ظ…ط«ط¨طھط§طھ ط§ظ„ط¬ظٹظ…ط¨ظ„)",
                      "ط§ظ„ظ…ظ†ط§ظپط°":  "4K HDMI In \u0026 Out ظ…ط¹ ظ…ط¯ط®ظ„ ط¨ط·ط§ظ‚ط© SD ظ„طھط­ظ…ظٹظ„ ط§ظ„ظ€ LUTs",
                      "ط®ظٹط§ط±ط§طھ ط§ظ„ط·ط§ظ‚ط©":  "طھط¹ظ…ظ„ ط¨ط¨ط·ط§ط±ظٹط§طھ Sony NP-F ط£ظˆ ط¨ط·ط§ط±ظٹط§طھ Canon LP-E6 ط£ظˆ ط¹ط¨ط± ظ…ظ†ظپط° USB-C"
                  }
    },
    {
        "id":  "ACC-342",
        "name":  "SmallRig VB50 Mini V-Mount Battery (50Wh 3579B)",
        "nameEn":  "SmallRig VB50 Mini V-Mount Battery (50Wh 3579B)",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  125,
        "oldPrice":  140,
        "rating":  4.9,
        "reviewsCount":  44,
        "stock":  8,
        "badge":  "ط­ط¬ظ… ط§ظ„ط¬ظٹط¨ 50Wh",
        "image":  "images/prod_smallrig_vb50.jpg",
        "gallery":  [
                        "images/prod_smallrig_vb50.jpg"
                    ],
        "description":  "ط¨ط·ط§ط±ظٹط© V-Mount طµط؛ظٹط±ط© ط¬ط¯ط§ظ‹ ط¨ط­ط¬ظ… ط¨ط·ط§ظ‚ط© ط§ظ„ط¹ظ…ظ„ ظ…ط¹ ط´ط§ط´ط© OLED ط°ظƒظٹط© ظˆظ…ظ†ط§ظپط° ط´ط­ظ† ط³ط±ظٹط¹ USB-C PD ط¨ظ‚ظˆط© 45 ظˆط§ط· ظ„ط´ط­ظ† ط§ظ„ظƒط§ظ…ظٹط±ط§طھ ظˆط§ظ„ظ„ط§ط¨طھظˆط¨.",
        "specs":  {
                      "ط§ظ„ط³ط¹ط©":  "50Wh (14.8V 3400mAh) ظ…ط³ظ…ظˆط­ ط¨ط­ظ…ظ„ظ‡ط§ ط¹ظ„ظ‰ ظ…طھظ† ط§ظ„ط·ط§ط¦ط±ط§طھ",
                      "ط§ظ„ظ…ظ†ط§ظپط°":  "USB-C PD ط¨ظ‚ظˆط© 45WطŒ USB-AطŒ D-TapطŒ ظˆظ…ط®ط±ط¬ 8V DC ظˆظ…ط®ط±ط¬ 12V DC",
                      "ط§ظ„ط´ط§ط´ط©":  "ط´ط§ط´ط© OLED طھط¹ط±ط¶ ظ†ط³ط¨ط© ط§ظ„ط´ط­ظ† ط§ظ„ظ…طھط¨ظ‚ظٹط© ظˆط§ظ„ط¬ظ‡ط¯ ط¨ط¯ظ‚ط©",
                      "ط§ظ„ظˆط²ظ†":  "330 ط¬ظ… ظپظ‚ط·"
                  }
    },
    {
        "id":  "ACC-343",
        "name":  "SmallRig VB99 Mini V-Mount Battery (99Wh 3580B)",
        "nameEn":  "SmallRig VB99 Mini V-Mount Battery (99Wh 3580B)",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  175,
        "oldPrice":  195,
        "rating":  5.0,
        "reviewsCount":  88,
        "stock":  10,
        "badge":  "ط§ظ„ط£ظƒط«ط± ط·ظ„ط¨ط§ظ‹ ظ„ظ„ط³ظٹظ†ظ…ط§ 99Wh",
        "image":  "images/prod_smallrig_vb99.jpg",
        "gallery":  [
                        "images/prod_smallrig_vb99.jpg"
                    ],
        "description":  "ط§ظ„ط¨ط·ط§ط±ظٹط© ط§ظ„ط³ظٹظ†ظ…ط§ط¦ظٹط© ط§ظ„ط£ظƒط«ط± ط´ظ‡ط±ط© ط¨ط³ط¹ط© 99 ظˆط§ط·/ط³ط§ط¹ط© ط§ظ„ظ…ط³ظ…ظˆط­ ط¨ظ‡ط§ ظپظٹ ط§ظ„ط³ظپط± ط§ظ„ط¬ظˆظٹطŒ ظ…ط¹ ط´ط­ظ† ط³ط±ظٹط¹ 65W PD ط¹ط¨ط± USB-C ظ„طھط´ط؛ظٹظ„ ط§ظ„ظƒط§ظ…ظٹط±ط§ ظˆط§ظ„ظ…ظˆظ†ظٹطھط± ظ…ط¹ط§ظ‹.",
        "specs":  {
                      "ط§ظ„ط³ط¹ط©":  "99Wh (14.8V 6700mAh) Airline-Friendly",
                      "ط§ظ„ط´ط­ظ† ط§ظ„ط³ط±ظٹط¹":  "USB-C Bi-directional PD ط¨ظ‚ط¯ط±ط© 65W ظٹط´ط­ظ† ط§ظ„ط¨ط·ط§ط±ظٹط© ط¨ط§ظ„ظƒط§ظ…ظ„ ظپظٹ 2.5 ط³ط§ط¹ط©",
                      "ط§ظ„ظ…ظ†ط§ظپط°":  "D-TapطŒ USB-AطŒ USB-CطŒ DC 8VطŒ DC 12V ظ„طھط´ط؛ظٹظ„ ظ†ط¸ط§ظ… ط§ظ„ظƒط§ظ…ظٹط±ط§ ط¨ط§ظ„ظƒط§ظ…ظ„",
                      "ط§ظ„ط´ط§ط´ط©":  "ط´ط§ط´ط© OLED ط±ظ‚ظ…ظٹط© ظ„ط­ط§ظ„ط© ط§ظ„ط·ط§ظ‚ط© ط§ظ„ظپظˆط±ظٹط©",
                      "ط§ظ„ظˆط²ظ†":  "550 ط¬ظ…"
                  }
    },
    {
        "id":  "ACC-350",
        "name":  "Sony NP-FZ100 Original Rechargeable Battery",
        "nameEn":  "Sony NP-FZ100 Original Rechargeable Battery",
        "category":  "chargers_batteries",
        "brand":  "Sony",
        "price":  75,
        "oldPrice":  85,
        "rating":  5.0,
        "reviewsCount":  115,
        "stock":  20,
        "badge":  "ط£طµظ„ظٹط© 100% ظ…ط¹ ظƒظپط§ظ„ط© ط³ظˆظ†ظٹ",
        "image":  "images/prod_sony_npfz100.jpg",
        "gallery":  [
                        "images/prod_sony_npfz100.jpg"
                    ],
        "description":  "ط¨ط·ط§ط±ظٹط© ط³ظˆظ†ظٹ ط§ظ„ط£طµظ„ظٹط© NP-FZ100 ظ„ظƒط§ظ…ظٹط±ط§طھ A7 III ظˆ A7 IV ظˆ FX3 ظˆ FX30 ظˆ A7R V ظ…ط¹ ط±ظ‚ط§ظ‚ط© ط³ظˆظ†ظٹ ط§ظ„ط£طµظ„ظٹط© ظˆط³ط¹ط© 2280mAh.",
        "specs":  {
                      "ط§ظ„ط¬ظ‡ط¯ ظˆط§ظ„ط³ط¹ط©":  "7.2V / 2280mAh (16.4Wh)",
                      "ط§ظ„طھظˆط§ظپظ‚":  "ط¬ظ…ظٹط¹ ظƒط§ظ…ظٹط±ط§طھ ط³ظˆظ†ظٹ ظپط¦ط© ط£ظ„ظپط§ ظˆط³ظٹظ†ظ…ط§ ظ„ط§ظٹظ† ط§ظ„ط­ط¯ظٹط«ط©",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ط£طµظ„ظٹط© 100% ظ…ظ† ط§ظ„ظˆظƒظٹظ„ ط§ظ„ط±ط³ظ…ظٹ ظ…ط¹ ط±ظ…ط² ط§ظ„طھط­ظ‚ظ‚"
                  }
    },
    {
        "id":  "ACC-351",
        "name":  "Canon LP-E6NH Original Rechargeable Battery",
        "nameEn":  "Canon LP-E6NH Original Rechargeable Battery",
        "category":  "chargers_batteries",
        "brand":  "Canon",
        "price":  75,
        "oldPrice":  85,
        "rating":  5.0,
        "reviewsCount":  84,
        "stock":  16,
        "badge":  "ط£طµظ„ظٹط© 100% ظ…ط¹ ظƒظپط§ظ„ط© ظƒط§ظ†ظˆظ†",
        "image":  "images/prod_canon_lpe6nh.jpg",
        "gallery":  [
                        "images/prod_canon_lpe6nh.jpg"
                    ],
        "description":  "ط¨ط·ط§ط±ظٹط© ظƒط§ظ†ظˆظ† ط§ظ„ط£طµظ„ظٹط© ط¹ط§ظ„ظٹط© ط§ظ„ط³ط¹ط© 2130mAh ظ„ظƒط§ظ…ظٹط±ط§طھ EOS R5 Mark II ظˆ R6 Mark II ظˆ R5 ظˆ R6 ظ…ط¹ ط¯ط¹ظ… ط§ظ„ط´ط­ظ† ط§ظ„ط¯ط§ط®ظ„ظٹ ط¹ط¨ط± USB.",
        "specs":  {
                      "ط§ظ„ط¬ظ‡ط¯ ظˆط§ظ„ط³ط¹ط©":  "7.2V / 2130mAh",
                      "ط§ظ„طھظˆط§ظپظ‚":  "ظƒط§ظ…ظٹط±ط§طھ Canon EOS R5طŒ R5 Mark IIطŒ R6طŒ R6 Mark IIطŒ R7طŒ 5D Mark IV",
                      "ط§ظ„ط´ط­ظ†":  "طھط¯ط¹ظ… ط§ظ„ط´ط­ظ† ط¯ط§ط®ظ„ ط§ظ„ظƒط§ظ…ظٹط±ط§ ط¹ط¨ط± ظ…ظ†ظپط° USB-C"
                  }
    },
    {
        "id":  "ACC-406",
        "name":  "Peak Design Everyday Backpack 20L V2 (Black)",
        "nameEn":  "Peak Design Everyday Backpack 20L V2 (Black)",
        "category":  "bags",
        "brand":  "Peak Design",
        "price":  279,
        "oldPrice":  299,
        "rating":  5.0,
        "reviewsCount":  76,
        "stock":  4,
        "badge":  "ط­ظ‚ظٹط¨ط© ط§ظ„ظ…طµظˆط±ظٹظ† ط§ظ„ط£ظˆظ„ظ‰",
        "image":  "images/prod_peakdesign_everyday.jpg",
        "gallery":  [
                        "images/prod_peakdesign_everyday.jpg",
                        "images/prod_peakdesign_everyday_angle2.jpg",
                        "images/prod_peakdesign_everyday_angle3.jpg",
                        "images/prod_peakdesign_everyday_angle4.jpg"
                    ],
        "description":  "ط§ظ„ط­ظ‚ظٹط¨ط© ط§ظ„ط­ط§ط¦ط²ط© ط¹ظ„ظ‰ ط¬ظˆط§ط¦ط² ط§ظ„طھطµظ…ظٹظ… ط§ظ„ط¹ط§ظ„ظ…ظٹط© ط¨ظ†ط¸ط§ظ… ط§ظ„ظپظˆط§طµظ„ ط§ظ„ظ…ط±ظ†ط© FlexFold ظˆظ‚ظپظ„ MagLatch ط§ظ„ظ…ط؛ظ†ط§ط·ظٹط³ظٹ ظˆظ‚ظ…ط§ط´ ظ†ط§ظٹظ„ظˆظ† 400D ظ…ظ‚ط§ظˆظ… ظ„ظ„ط£ظ…ط·ط§ط± ط¨ظ†ط³ط¨ط© 100%.",
        "specs":  {
                      "ط§ظ„ط³ط¹ط©":  "20 ظ„طھط± ظ‚ط§ط¨ظ„ط© ظ„ظ„طھظˆط³ط¹ ط­طھظ‰ 23 ظ„طھط±",
                      "ط§ظ„ظˆطµظˆظ„ ط§ظ„ط³ط±ظٹط¹":  "ط³ط­ط§ط¨ط§طھ ط¬ط§ظ†ط¨ظٹط© ظ…ط²ط¯ظˆط¬ط© ظ…ط§ظ†ط¹ط© ظ„طھط³ط±ط¨ ط§ظ„ظ…ظٹط§ظ‡ UltraZips ظ„ظ„ظˆطµظˆظ„ ظ„ظ„ظƒط§ظ…ظٹط±ط§ ظپظٹ ط«ظˆط§ظ†ظچ",
                      "ط¬ظٹط¨ ط§ظ„ظ„ط§ط¨طھظˆط¨":  "ظٹطھط³ط¹ ظ„ط£ط¬ظ‡ط²ط© ظ„ط§ط¨طھظˆط¨ ط­طھظ‰ 15 ط¨ظˆطµط© ظ…ط¹ ط¬ظٹط¨ طھط§ط¨ظ„طھ ظ…ظ†ظپطµظ„",
                      "ط§ظ„ط¶ظ…ط§ظ†":  "ظƒظپط§ظ„ط© ظ…ط¯ظ‰ ط§ظ„ط­ظٹط§ط© ظ…ظ† ط§ظ„ط´ط±ظƒط© ط§ظ„ظ…طµظ†ط¹ط©"
                  }
    },
    {
        "id":  "ACC-407",
        "name":  "Lowepro ProTactic BP 450 AW II Pro Camera Backpack",
        "nameEn":  "Lowepro ProTactic BP 450 AW II Pro Camera Backpack",
        "category":  "bags",
        "brand":  "Lowepro",
        "price":  240,
        "oldPrice":  265,
        "rating":  5.0,
        "reviewsCount":  92,
        "stock":  5,
        "badge":  "ط­ظ…ط§ظٹط© ط¹ط³ظƒط±ظٹط© ظ…ط¯ط±ط¹ط©",
        "image":  "images/prod_lowepro_protactic.jpg",
        "gallery":  [
                        "images/prod_lowepro_protactic.jpg",
                        "images/prod_lowepro_protactic_angle2.jpg",
                        "images/prod_lowepro_protactic_angle3.jpg",
                        "images/prod_lowepro_protactic_angle4.jpg"
                    ],
        "description":  "ط­ظ‚ظٹط¨ط© ط§ظ„ط¸ظ‡ط± ط§ظ„ظ…ط¯ط±ط¹ط© ط§ظ„ط§ط­طھط±ط§ظپظٹط© ط¨ظ†ط¸ط§ظ… FormShell ط§ظ„طµظ„ط¨ ظ„ظ„ط­ظ…ط§ظٹط© ظ…ظ† ط§ظ„طµط¯ظ…ط§طھ ظˆ4 ظ†ظ‚ط§ط· ظˆطµظˆظ„ ظ„ظ„ظƒط§ظ…ظٹط±ط§ ظˆط§ظ„ط¹ط¯ط³ط§طھ ظ…ط¹ ط­ط²ط§ظ… ط®طµط± ظ…ط¯ط¹ظ….",
        "specs":  {
                      "ظ†ظ‚ط§ط· ط§ظ„ظˆطµظˆظ„":  "4 ظ†ظ‚ط§ط· ظˆطµظˆظ„ ط³ط±ظٹط¹ط© (ظ…ظ† ط§ظ„ط£ط¹ظ„ظ‰طŒ ظˆط§ظ„ط¬ط§ظ†ط¨ظٹظ†طŒ ظˆط§ظ„ط¸ظ‡ط± ط¨ط§ظ„ظƒط§ظ…ظ„)",
                      "ط§ظ„ط³ط¹ط©":  "طھطھط³ط¹ ظ„ظ€ 2 ظƒط§ظ…ظٹط±ط§ ط§ط­طھط±ط§ظپظٹط© ظ…ط¹ ط¹ط¯ط³ط© 70-200mm ظ…ط±ظƒط¨ط© ظˆ 6 ط¹ط¯ط³ط§طھ ط¥ط¶ط§ظپظٹط© ظˆط·ط§ط¦ط±ط© ط¯ط±ظˆظ†",
                      "ظ†ط¸ط§ظ… ط§ظ„ظ…ظ„ط­ظ‚ط§طھ":  "ظ†ط¸ط§ظ… ط£ط´ط±ط·ط© SlipLock ط§ظ„ظ…طھظˆط§ظپظ‚ ط¹ط³ظƒط±ظٹط§ظ‹ ظ„طھط¹ظ„ظٹظ‚ ط­ظˆط§ظ…ظ„ ط§ظ„طھط±ط§ظٹط¨ظˆط¯ ظˆظ…ط·ط±ط§طھ ط§ظ„ظ…ط§ط،",
                      "ط؛ط·ط§ط، ط§ظ„ظ…ط·ط±":  "ط؛ط·ط§ط، All Weather AW Cover ظ…ط¯ظ…ط¬ ظ„ظ„ط­ظ…ط§ظٹط© ظ…ظ† ط§ظ„ط¹ظˆط§طµظپ ظˆط§ظ„ط£ظ…ط·ط§ط± ط§ظ„ط؛ط²ظٹط±ط©"
                  }
    },
    {
        "id":  "ACC-408",
        "name":  "Ulanzi BP09 22L Weatherproof Camera Backpack",
        "nameEn":  "Ulanzi BP09 22L Weatherproof Camera Backpack",
        "category":  "bags",
        "brand":  "Ulanzi",
        "price":  85,
        "oldPrice":  99,
        "rating":  4.8,
        "reviewsCount":  49,
        "stock":  8,
        "badge":  "ظ…ظ‚ط§ظˆظ…ط© ظ„ظ„ظ…ط§ط، ظˆط³ط¹ط± ط§ظ‚طھطµط§ط¯ظٹ",
        "image":  "images/prod_ulanzi_bp09.jpg",
        "gallery":  [
                        "images/prod_ulanzi_bp09.jpg",
                        "images/prod_ulanzi_bp09_angle2.jpg",
                        "images/prod_ulanzi_bp09_angle3.jpg",
                        "images/prod_ulanzi_bp09_angle4.jpg"
                    ],
        "description":  "ط­ظ‚ظٹط¨ط© ط¸ظ‡ط± ط¹طµط±ظٹط© ظˆط£ظ†ظٹظ‚ط© ط¨ط³ط¹ط© 22 ظ„طھط± ظˆظ…ظ‚ط§ظˆظ…ط© ظ„ظ„ظ…ط§ط،طŒ ظ…ط¹ ط¨ط§ط¨ ط¬ط§ظ†ط¨ظٹ ط³ط±ظٹط¹ ظ„ط³ط­ط¨ ط§ظ„ظƒط§ظ…ظٹط±ط§ ظˆظپظˆط§طµظ„ ظ‚ط§ط¨ظ„ط© ظ„ظ„طھط®طµظٹطµ ظˆظ…ظƒط§ظ† ظ„ط­ظ…ظ„ ط§ظ„طھط±ط§ظٹط¨ظˆط¯.",
        "specs":  {
                      "ط§ظ„ط³ط¹ط©":  "22 ظ„طھط± طھطھط³ط¹ ظ„ظƒط§ظ…ظٹط±ط§ ظ…ط¹ ط¹ط¯ط³طھظٹظ† ظˆظ„ط§ط¨طھظˆط¨ 15.6 ط¨ظˆطµط©",
                      "ط§ظ„ظ…ط§ط¯ط©":  "ظ‚ظ…ط§ط´ ط¨ظˆظ„ظٹط³طھط± ظ…ظ‚ط§ظˆظ… ظ„ظ„ظ…ط§ط، ظˆط§ظ„طھظ…ط²ظ‚ ظ…ط¹ ط³ط­ط§ط¨ط§طھ ظ…ط­ظƒظ…ط© ط¶ط¯ ط§ظ„ظ…ط·ط±",
                      "ط§ظ„ظˆط²ظ†":  "1.7 ظƒط¬ظ… ظپظ‚ط· ظ…ط¹ ظˆط³ط§ط¦ط¯ ط¸ظ‡ط± ظ…ط±ظٹط­ط© ظˆط¬ظٹط¯ط© ط§ظ„طھظ‡ظˆظٹط©"
                  }
    },
    {
        "id":  "ACC-409",
        "name":  "Ulanzi AB01 TAI 38L Large Travel Camera Backpack",
        "nameEn":  "Ulanzi AB01 TAI 38L Large Travel Camera Backpack",
        "category":  "bags",
        "brand":  "Ulanzi",
        "price":  125,
        "oldPrice":  145,
        "rating":  4.9,
        "reviewsCount":  33,
        "stock":  6,
        "badge":  "ط³ط¹ط© ط³ظپط± ط¶ط®ظ…ط© 38L",
        "image":  "images/prod_ulanzi_ab01.jpg",
        "gallery":  [
                        "images/prod_ulanzi_ab01.jpg"
                    ],
        "description":  "ط­ظ‚ظٹط¨ط© ط§ظ„ط³ظپط± ط§ظ„ط¶ط®ظ…ط© ظ„ظ„ظ…طµظˆط±ظٹظ† ظˆط§ظ„ط³ظٹظ†ظ…ط§ط¦ظٹظٹظ† ط¨ط³ط¹ط© 38 ظ„طھط±طŒ طھط³طھظˆط¹ط¨ ظ…ط¹ط¯ط§طھ ط¥ظ†طھط§ط¬ ظƒط§ظ…ظ„ط© ظ…ط¹ ظ…ظ„ط§ط¨ط³ ظ„ظ„ط³ظپط± ظ„ط¹ط¯ط© ط£ظٹط§ظ… ظˆظ†ط¸ط§ظ… طھط¹ظ„ظٹظ‚ ظ…ط±ظٹط­ ظ„ظ„ط±ط­ظ„ط§طھ ط§ظ„ط·ظˆظٹظ„ط©.",
        "specs":  {
                      "ط§ظ„ط³ط¹ط©":  "38 ظ„طھط± ط³ط¹ط© طھط®ط²ظٹظ† ظ‡ط§ط¦ظ„ط© ظ…ظ‚ط³ظ…ط© ط¥ظ„ظ‰ ظ‚ط³ظ…ظٹظ† ظ…ظ†ظپطµظ„ظٹظ† ظ„ظ„ظ…ط¹ط¯ط§طھ ظˆط§ظ„ظ…ظ„ط§ط¨ط³",
                      "ط§ظ„ط­ظ…ط§ظٹط©":  "ط­ط´ظˆط© ط³ظ…ظٹظƒط© ظ…ظ‚ط§ظˆظ…ط© ظ„ظ„طµط¯ظ…ط§طھ ظˆظ‚ظ…ط§ط´ ظ…طھظٹظ† ظ…ط§ظ†ط¹ ظ„ظ„ط®ط¯ط´ ظˆط§ظ„ط¨ظ„ظ„",
                      "ط£ط­ط²ظ…ط© ط§ظ„طھط«ط¨ظٹطھ":  "ط£ط­ط²ظ…ط© طµط¯ط± ظˆط®طµط± ظ…ط±ظٹط­ط© ظ„طھظˆط²ظٹط¹ ط§ظ„ظˆط²ظ† ظˆطھط®ظپظٹظپ ط§ظ„ط­ظ…ظ„ ط¹ظ† ط§ظ„ط£ظƒطھط§ظپ"
                  }
    },
    {
        "id":  "CAM-015",
        "name":  "Sony FX3 Full-Frame Cinema Line Camera Body",
        "nameEn":  "Sony FX3 (A) Mirrorless Body",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  5449,
        "oldPrice":  5885,
        "rating":  4.9,
        "reviewsCount":  73,
        "stock":  7,
        "badge":  "سينمائي احترافي",
        "section":  "trending",
        "image":  "images/prod_sony_fx3_a_mirrorless_body.jpg",
        "gallery":  [
                        "images/prod_sony_fx3_a_mirrorless_body.jpg",
                        "images/prod_sony_fx3_a_mirrorless_body_angle2.jpg",
                        "images/prod_sony_fx3_a_mirrorless_body_angle3.jpg",
                        "images/prod_sony_fx3_a_mirrorless_body_angle4.jpg",
                        "images/prod_sony_fx3_a_mirrorless_body_angle5.jpg",
                        "images/prod_sony_fx3_a_mirrorless_body_angle6.jpg",
                        "images/prod_sony_fx3_a_mirrorless_body_angle7.jpg",
                        "images/prod_sony_fx3_a_mirrorless_body_angle8.jpg",
                        "images/prod_sony_fx3_a_mirrorless_body_angle9.jpg"
                    ],
        "description":  "كاميرا سوني السينمائية فل فريم الرائدة مع تبريد نشط ومقبض XLR ودعم 4K 120p 10-Bit و 16-Bit RAW خارجي.",
        "specs":  {
                      "المستشعر":  "12.1MP Full-Frame Exmor R BSI CMOS Sensor",
                      "الفيديو":  "4K 120p 10-Bit 4:2:2 All-Intra بدون ارتفاع حرارة نهائياً",
                      "نظام الصوت":  "مقبض صوتي أصلي XLR Top Handle بمخرجين XLR/TRS",
                      "المدى الديناميكي":  "15+ وقفة ديناميكية مع S-Cinetone و S-Log3 و Base ISO 800/12800",
                      "الوزن":  "715 جم",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-016",
        "name":  "Sony a6700 Flagship APS-C Mirrorless Body",
        "nameEn":  "Sony a6700 Body",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  1899,
        "oldPrice":  2051,
        "rating":  4.9,
        "reviewsCount":  106,
        "stock":  4,
        "badge":  "معالج ذكاء اصطناعي",
        "section":  "trending",
        "image":  "images/prod_sony_a6700_body.jpg",
        "gallery":  [
                        "images/prod_sony_a6700_body.jpg"
                    ],
        "description":  "أقوى كاميرا كروب من سوني بمستشعر 26MP ومعالج الذكاء الاصطناعي وتثبيت بصري IBIS وفيديو 4K 120p.",
        "specs":  {
                      "المستشعر":  "26.0MP APS-C Exmor R BSI CMOS Sensor",
                      "المعالج":  "معالج BIONZ XR المزدوج مع وحدة معالجة AI مخصصة",
                      "الفيديو":  "4K حتى 120p / 6K Oversampling بدقة 10-Bit 4:2:2",
                      "التثبيت":  "مانع اهتزاز مدمج بالهيكل 5-Axis IBIS حتى 5 وقفات",
                      "الوزن":  "493 جم"
                  }
    },
    {
        "id":  "CAM-017",
        "name":  "Sony a7C II Compact Full-Frame Body",
        "nameEn":  "Sony a7C II Body",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  2999,
        "oldPrice":  3239,
        "rating":  4.9,
        "reviewsCount":  48,
        "stock":  6,
        "badge":  "فل فريم مدمج",
        "section":  "trending",
        "image":  "images/prod_sony_a7c_ii_body.jpg",
        "gallery":  [
                        "images/prod_sony_a7c_ii_body.jpg",
                        "images/prod_sony_a7c_ii_body_angle2.jpg",
                        "images/prod_sony_a7c_ii_body_angle3.jpg",
                        "images/prod_sony_a7c_ii_body_angle4.jpg",
                        "images/prod_sony_a7c_ii_body_angle5.jpg",
                        "images/prod_sony_a7c_ii_body_angle6.jpg"
                    ],
        "description":  "كاميرا فل فريم مدمجة بحجم الجيب مع مستشعر 33 ميجابكسل ومعالج AI ذكي وفيديو 4K 60p 10-Bit.",
        "specs":  {
                      "المستشعر":  "33.0MP Full-Frame Exmor R CMOS Sensor",
                      "الفيديو":  "4K 60p 10-Bit 4:2:2 مع تقنية 7K Oversampling",
                      "الذكاء الاصطناعي":  "تتبع تركيز بؤري فوري بالذكاء الاصطناعي لكافة الأجسام",
                      "الوزن":  "514 جم فقط"
                  }
    },
    {
        "id":  "CAM-018",
        "name":  "Canon EOS R7 Mirrorless Body",
        "nameEn":  "Canon EOS R7 Body",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  1999,
        "oldPrice":  2159,
        "rating":  4.9,
        "reviewsCount":  104,
        "stock":  8,
        "badge":  "سرعة فائقة 30fps",
        "section":  "trending",
        "image":  "images/prod_canon_eos_r7_body.jpg",
        "gallery":  [
                        "images/prod_canon_eos_r7_body.jpg",
                        "images/prod_canon_eos_r7_body_angle2.jpg",
                        "images/prod_canon_eos_r7_body_angle3.jpg",
                        "images/prod_canon_eos_r7_body_angle4.jpg"
                    ],
        "description":  "كاميرا كانون السريعة للرياضة والحياة البرية بمستشعر 32.5MP وسرعة شاتر خيالية 30fps وتثبيت حتى 8 وقفات.",
        "specs":  {
                      "المستشعر":  "32.5MP APS-C CMOS Sensor",
                      "السرعة":  "30 إطاراً بالثانية بالشاتر الإلكتروني مع تتبع كامل",
                      "الفيديو":  "4K 60p 10-Bit بتجميع 7K مع Canon Log 3",
                      "الذاكرة":  "منفذان مزدوجان لبطاقات SD UHS-II"
                  }
    },
    {
        "id":  "CAM-019",
        "name":  "FUJIFILM X-T5 Mirrorless Body",
        "nameEn":  "FUJIFILM X-T5 Body",
        "category":  "cameras",
        "brand":  "FUJIFILM",
        "price":  2300,
        "oldPrice":  2484,
        "rating":  4.9,
        "reviewsCount":  101,
        "stock":  5,
        "badge":  "دقة 40MP كلاسيك",
        "section":  "trending",
        "image":  "images/prod_fujifilm_x_t5_body.jpg",
        "gallery":  [
                        "images/prod_fujifilm_x_t5_body.jpg",
                        "images/prod_fujifilm_x_t5_body_angle2.jpg",
                        "images/prod_fujifilm_x_t5_body_angle3.jpg",
                        "images/prod_fujifilm_x_t5_body_angle4.jpg",
                        "images/prod_fujifilm_x_t5_body_angle5.jpg",
                        "images/prod_fujifilm_x_t5_body_angle6.jpg"
                    ],
        "description":  "كاميرا فوجي فيلم الكلاسيكية بمستشعر 40 ميجابكسل وألوان محاكاة الفيلم Film Simulation وفيديو 6.2K.",
        "specs":  {
                      "المستشعر":  "40.2MP APS-C X-Trans CMOS 5 HR BSI Sensor",
                      "محاكاة الأفلام":  "19 نمط محاكاة أفلام فوجي فيلم الأصلية Film Simulation",
                      "الفيديو":  "6.2K 30p / 4K 60p 10-Bit 4:2:2 داخلي",
                      "مانع الاهتزاز":  "تثبيت بصري داخلي IBIS حتى 7.0 وقفات"
                  }
    },
    {
        "id":  "CAM-020",
        "name":  "Blackmagic Cinema Camera 6K Full-Frame",
        "nameEn":  "Blackmagic Cinema Camera 6K",
        "category":  "cameras",
        "brand":  "Blackmagic",
        "price":  2379,
        "oldPrice":  2569,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  9,
        "badge":  "سينما 6K فل فريم",
        "section":  "trending",
        "image":  "images/prod_blackmagic_cinema_camera_6k.jpg",
        "gallery":  [
                        "images/prod_blackmagic_cinema_camera_6k.jpg",
                        "images/prod_blackmagic_cinema_camera_6k_angle2.jpg",
                        "images/prod_blackmagic_cinema_camera_6k_angle3.jpg",
                        "images/prod_blackmagic_cinema_camera_6k_angle4.jpg"
                    ],
        "description":  "كاميرا السينما الاحترافية المتكاملة بمستشعر Full-Frame 6K ومانت L-Mount وشاشة لمس HDR ضخمة 5 بوصة.",
        "specs":  {
                      "المستشعر":  "6K Full-Frame 6048x4032 BSI Sensor مع 13 وقفة ديناميكية",
                      "الفيديو":  "Open Gate 3:2 بدقة 6K 36fps و 6K 17:9 حتى 48fps",
                      "التسجيل":  "Blackmagic RAW داخلي على بطاقات CFexpress Type B أو أقراص SSD خارجية",
                      "الشاشة":  "شاشة لمسية مائلة 5.0 بوصة بدرجة سطوع 1500nits HDR"
                  }
    },
    {
        "id":  "CAM-021",
        "name":  "Panasonic LUMIX S5 II Full-Frame Body",
        "nameEn":  "Panasonic LUMIX S5II Body",
        "category":  "cameras",
        "brand":  "Panasonic",
        "price":  2299,
        "oldPrice":  2483,
        "rating":  4.9,
        "reviewsCount":  102,
        "stock":  5,
        "badge":  "فوكس هجين ثوري",
        "section":  "trending",
        "image":  "images/prod_panasonic_lumix_s5_ii.jpg",
        "gallery":  [
                        "images/prod_panasonic_lumix_s5_ii.jpg",
                        "images/prod_panasonic_lumix_s5_ii_angle2.jpg",
                        "images/prod_panasonic_lumix_s5_ii_angle3.jpg",
                        "images/prod_panasonic_lumix_s5_ii_angle4.jpg",
                        "images/prod_panasonic_lumix_s5_ii_angle5.jpg",
                        "images/prod_panasonic_lumix_s5_ii_angle6.jpg"
                    ],
        "description":  "كاميرا باناسونيك فل فريم الأولى بنظام الفوكس الهجين Phase Detection وفيديو 6K وتثبيت بصري خارق Active I.S.",
        "specs":  {
                      "المستشعر":  "24.2MP Full-Frame CMOS Sensor مع Phase Hybrid AF",
                      "الفيديو":  "6K 30p 10-Bit 4:2:0 / C4K 60p 10-Bit 4:2:2 مفتوح بدون حدود",
                      "التبريد":  "مروحة تبريد مدمجة تتيح التصوير المستمر غير المحدود",
                      "المنافذ":  "منفذ HDMI كامل الحجم + منفذان Dual SD UHS-II"
                  }
    },
    {
        "id":  "LEN-050",
        "name":  "Sony FE 50mm F1.2 G Master Prime Lens",
        "nameEn":  "Sony FE 50mm f1.2 G Master",
        "category":  "filters",
        "brand":  "Sony",
        "price":  2599,
        "oldPrice":  2807,
        "rating":  4.9,
        "reviewsCount":  89,
        "stock":  6,
        "badge":  "فتحة خرافية F1.2",
        "section":  "trending",
        "image":  "images/prod_sony_fe_50mm_f1_2_gm.jpg",
        "gallery":  [
                        "images/prod_sony_fe_50mm_f1_2_gm.jpg"
                    ],
        "description":  "جوهرة سوني في فئة الـ 50mm: فتحة F1.2 أسطورية وعزل مذهل وحدّة خارقة على كامل الكادر من الحافة إلى الحافة.",
        "specs":  {
                      "البعد البؤري":  "50mm Prime Lens",
                      "أقصى فتحة":  "F1.2 سريعة للغاية",
                      "المحركات":  "4 محركات خطية XD Linear Motors فائقة السرعة",
                      "قطر الفلتر":  "72mm"
                  }
    },
    {
        "id":  "LEN-051",
        "name":  "Sony FE 85mm F1.4 G Master II Lens",
        "nameEn":  "Sony FE 85mm f1.4 G Master II",
        "category":  "filters",
        "brand":  "Sony",
        "price":  2499,
        "oldPrice":  2699,
        "rating":  4.9,
        "reviewsCount":  102,
        "stock":  10,
        "badge":  "الجيل الثاني 2026",
        "section":  "trending",
        "image":  "images/prod_sony_fe_85mm_f1_4_gm_ii.jpg",
        "gallery":  [
                        "images/prod_sony_fe_85mm_f1_4_gm_ii.jpg",
                        "images/prod_sony_fe_85mm_f1_4_gm_ii_angle2.jpg"
                    ],
        "description":  "الجيل الثاني الأحدث من عدسة البورتريه الأسطورية، أخف بنسبة 20% وفوكس أسرع بثلاث مرات مع بوكيه ناعم مخملي.",
        "specs":  {
                      "البعد البؤري":  "85mm Portrait Prime",
                      "فتحة العدسة":  "F1.4 مع 11 شفرة دائرية",
                      "الوزن":  "642 جم فقط",
                      "قطر الفلتر":  "77mm"
                  }
    },
    {
        "id":  "LEN-052",
        "name":  "Sony FE 200-600mm F5.6-6.3 G OSS Super-Tele",
        "nameEn":  "Sony FE 200-600mm f5.6-6.3 G OSS",
        "category":  "filters",
        "brand":  "Sony",
        "price":  2599,
        "oldPrice":  2807,
        "rating":  4.9,
        "reviewsCount":  86,
        "stock":  5,
        "badge":  "سوبر زوم برّي",
        "section":  "trending",
        "image":  "images/prod_sony_fe_200_600mm_f5_6_6_3_g_o.jpg",
        "gallery":  [
                        "images/prod_sony_fe_200_600mm_f5_6_6_3_g_o.jpg"
                    ],
        "description":  "عدسة السوبر تيليفوتو الاحترافية للحياة البرية والطيور مع زووم داخلي لا يغير طول العدسة وتثبيت بصري OSS متقدم.",
        "specs":  {
                      "البعد البؤري":  "200-600mm Super Telephoto",
                      "الزووم الداخلي":  "Internal Zoom لا يمتد للخارج للمحافظة على التوازن",
                      "التوافق مع التيليكونفرتر":  "متوافقة مع 1.4x و 2.0x ليصل المدى حتى 1200mm",
                      "قطر الفلتر":  "95mm"
                  }
    },
    {
        "id":  "LEN-053",
        "name":  "Canon RF 24-70mm F2.8 L IS USM Lens",
        "nameEn":  "Canon RF 24-70mm f2.8L IS USM",
        "category":  "filters",
        "brand":  "Canon",
        "price":  3399,
        "oldPrice":  3671,
        "rating":  4.9,
        "reviewsCount":  66,
        "stock":  9,
        "badge":  "الفئة الحمراء L",
        "section":  "trending",
        "image":  "images/prod_canon_rf_24_70mm_f2_8l_is_usm.jpg",
        "gallery":  [
                        "images/prod_canon_rf_24_70mm_f2_8l_is_usm.jpg"
                    ],
        "description":  "عدسة الزووم القياسية الفاخرة ذات الخط الأحمر من كانون مع تثبيت بصري IS حتى 5 وقفات ومحرك Nano USM فائق الهدوء.",
        "specs":  {
                      "البعد البؤري":  "24-70mm Full-Frame",
                      "فتحة العدسة":  "F2.8 ثابتة على كامل المدى",
                      "التثبيت البصري":  "Optical Image Stabilizer حتى 5 وقفات (8 وقفات مع IBIS)",
                      "قطر الفلتر":  "82mm"
                  }
    },
    {
        "id":  "LEN-054",
        "name":  "Canon RF 70-200mm F2.8 L IS USM Lens",
        "nameEn":  "Canon RF 70-200mm f2.8L IS USM",
        "category":  "filters",
        "brand":  "Canon",
        "price":  3999,
        "oldPrice":  4319,
        "rating":  4.9,
        "reviewsCount":  60,
        "stock":  6,
        "badge":  "زوم تقريب أسطوري",
        "section":  "trending",
        "image":  "images/prod_canon_rf_70_200mm_f2_8l_is_usm.jpg",
        "gallery":  [
                        "images/prod_canon_rf_70_200mm_f2_8l_is_usm.jpg"
                    ],
        "description":  "أصغر وأخف عدسة 70-200mm F2.8 احترافية لكانون في التاريخ، بتصميم تلسكوبي مبتكر وحماية طقس كاملة.",
        "specs":  {
                      "البعد البؤري":  "70-200mm Telephoto Zoom",
                      "الوزن":  "1,070 جم فقط (أقصر بنسبة 27% من عدسات EF)",
                      "المحركات":  "محركان Nano USM مستقلان للتركيز الخاطف",
                      "قطر الفلتر":  "77mm"
                  }
    },
    {
        "id":  "LEN-055",
        "name":  "Canon RF 50mm F1.2 L USM Prime Lens",
        "nameEn":  "Canon RF 50mm f1.2L USM *Open Box",
        "category":  "filters",
        "brand":  "Canon",
        "price":  2999,
        "oldPrice":  3239,
        "rating":  4.9,
        "reviewsCount":  100,
        "stock":  5,
        "badge":  "عزل فائق F1.2",
        "section":  "trending",
        "image":  "images/prod_canon_rf_50mm_f1_2l_usm.jpg",
        "gallery":  [
                        "images/prod_canon_rf_50mm_f1_2l_usm.jpg"
                    ],
        "description":  "العدسة البرايم الأكثر تميزاً في نظام كانون RF: فتحة F1.2 خارقة، عزل سينمائي ناعم وحدّة لا تضاهى حتى عند أوسع فتحة.",
        "specs":  {
                      "البعد البؤري":  "50mm Standard Prime",
                      "فتحة العدسة":  "F1.2 فائقة السطوع",
                      "حلقة التحكم":  "حلقة تحكم Control Ring مخصصة لضبط الآيزو والفتحة والشاتر",
                      "قطر الفلتر":  "95mm"
                  }
    },
    {
        "id":  "LEN-056",
        "name":  "Sigma 85mm F1.4 DG DN Art Lens (Sony E)",
        "nameEn":  "Sigma 85mm f1.4 DG DN ART - Sony E",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  1700,
        "oldPrice":  1836,
        "rating":  4.9,
        "reviewsCount":  75,
        "stock":  9,
        "badge":  "سلسلة Art للبورتوريه",
        "section":  "trending",
        "image":  "images/prod_sigma_85mm_f1_4_dg_dn_art_sony.jpg",
        "gallery":  [
                        "images/prod_sigma_85mm_f1_4_dg_dn_art_sony.jpg"
                    ],
        "description":  "عدسة البورتريه الحائزة على أعلى تقييمات الحدة عالمياً بتصميم مدمج مخصص لميرورليس سوني E-Mount مع حلقة فتحة قابلة للقفل.",
        "specs":  {
                      "البعد البؤري":  "85mm Prime Art",
                      "فتحة العدسة":  "F1.4 مع 11 شفرة دائرية",
                      "الوزن":  "630 جم فقط",
                      "قطر الفلتر":  "77mm"
                  }
    },
    {
        "id":  "LEN-057",
        "name":  "Sigma 14-24mm F2.8 DG DN Art Lens",
        "nameEn":  "Sigma 14-24mm f2.8 DG DN ART - L-Mount",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  2000,
        "oldPrice":  2160,
        "rating":  4.9,
        "reviewsCount":  38,
        "stock":  5,
        "badge":  "زاوية فائقة الاتساع",
        "section":  "trending",
        "image":  "images/prod_sigma_14_24mm_f2_8_dg_dn_art_l.jpg",
        "gallery":  [
                        "images/prod_sigma_14_24mm_f2_8_dg_dn_art_l.jpg"
                    ],
        "description":  "عدسة الزاوية العريضة الفائقة للمناظر الطبيعية والنجوم والعمارة بدون أي تشويه بصري مع طلاء نانو مسامي NPC متطور.",
        "specs":  {
                      "البعد البؤري":  "14-24mm Ultra Wide Angle",
                      "فتحة العدسة":  "F2.8 ثابتة",
                      "التشويه البصري":  "Zero Distortion شبه معدوم",
                      "المانت":  "مانت خلفي مدمج لفلاتر الجيلاتين"
                  }
    },
    {
        "id":  "LGT-052",
        "name":  "Godox AD200Pro II Pocket Strobe \u0026 Flash",
        "nameEn":  "Godox AD200Pro II",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  478,
        "oldPrice":  516,
        "rating":  4.9,
        "reviewsCount":  102,
        "stock":  11,
        "badge":  "فلاش محمول جبار",
        "section":  "trending",
        "image":  "images/prod_godox_ad200pro_ii.jpg",
        "gallery":  [
                        "images/prod_godox_ad200pro_ii.jpg",
                        "images/prod_godox_ad200pro_ii_angle2.jpg",
                        "images/prod_godox_ad200pro_ii_angle3.jpg",
                        "images/prod_godox_ad200pro_ii_angle4.jpg",
                        "images/prod_godox_ad200pro_ii_angle5.jpg",
                        "images/prod_godox_ad200pro_ii_angle6.jpg",
                        "images/prod_godox_ad200pro_ii_angle7.jpg",
                        "images/prod_godox_ad200pro_ii_angle8.jpg"
                    ],
        "description":  "الجيل الثاني الأحدث من فلاش الجيب الخارق بقدرة 200 واط مع شاشة ملونة ومؤشر مجموعة ثنائي اللون ورأسين قابلين للتبديل.",
        "specs":  {
                      "القدرة":  "200Ws قوة استوديو بحجم الجيب",
                      "الرؤوس":  "رأس فريسنل Speedlite + رأس لمبة عارية Bare Bulb",
                      "البطارية":  "بطارية ليثيوم 500 ومضة بقوة كاملة وسرعة شحن 0.01-1.8 ثانية",
                      "اللاسلكي":  "نظام 2.4G X System مع TTL و HSS حتى 1/8000s"
                  }
    },
    {
        "id":  "LGT-053",
        "name":  "Godox AD400Pro II All-in-One Strobe",
        "nameEn":  "Godox AD400Pro II",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  899,
        "oldPrice":  971,
        "rating":  4.9,
        "reviewsCount":  84,
        "stock":  5,
        "badge":  "إضاءة استوديو 400W",
        "section":  "trending",
        "image":  "images/prod_godox_ad400pro_ii.jpg",
        "gallery":  [
                        "images/prod_godox_ad400pro_ii.jpg",
                        "images/prod_godox_ad400pro_ii_angle2.jpg",
                        "images/prod_godox_ad400pro_ii_angle3.jpg",
                        "images/prod_godox_ad400pro_ii_angle4.jpg",
                        "images/prod_godox_ad400pro_ii_angle5.jpg",
                        "images/prod_godox_ad400pro_ii_angle6.jpg",
                        "images/prod_godox_ad400pro_ii_angle7.jpg",
                        "images/prod_godox_ad400pro_ii_angle8.jpg"
                    ],
        "description":  "فلاش استوديو خارجي جبار بقدرة 400 واط مع زمن إعادة شحن فائق السرعة 0.9 ثانية وبطارية ليثيوم ومانت بوينز لجميع المشتتات.",
        "specs":  {
                      "القدرة":  "400Ws إضاءة خارجية قادرة على مواجهة شمس الظهيرة",
                      "ثبات الألوان":  "وضع Stable Color Temperature بدقة ±75K",
                      "إعادة الشحن":  "0.9 ثانية فقط عند أقصى طاقة",
                      "البطارية":  "بطارية ليثيوم تدوم 390 ومضة كاملة"
                  }
    },
    {
        "id":  "AUD-070",
        "name":  "RODE VideoMic NTG On-Camera Shotgun Mic",
        "nameEn":  "Rode VideoMic NTG",
        "category":  "audio",
        "brand":  "RØDE",
        "price":  369,
        "oldPrice":  399,
        "rating":  4.9,
        "reviewsCount":  72,
        "stock":  7,
        "badge":  "شوت جن هجين USB",
        "section":  "trending",
        "image":  "images/prod_rode_videomic_ntg.jpg",
        "gallery":  [
                        "images/prod_rode_videomic_ntg.jpg"
                    ],
        "description":  "مايكروفون الشوت جن الهجين الاحترافي للكاميرات والهواتف والكمبيوتر مع بطارية قابلة للشحن ومخرج USB-C وتقنية الأمان المزدوج.",
        "specs":  {
                      "النمط":  "Supercardioid فائق الاتجاهية وصوت نقي طبيعي",
                      "البطارية":  "أكثر من 30 ساعة عمل متواصلة مع شحن USB-C",
                      "الميزات":  "Auto-Power يشتغل تلقائياً مع الكاميرا + قناة أمان Safety Channel",
                      "الاتصال":  "مخرج 3.5mm ذكي يكتشف الكاميرا أو الهاتف تلقائياً"
                  }
    },
    {
        "id":  "AUD-071",
        "name":  "RODE VideoMic Pro+ Premium Shotgun Mic",
        "nameEn":  "Rode VideoMic Pro+",
        "category":  "audio",
        "brand":  "RØDE",
        "price":  439,
        "oldPrice":  474,
        "rating":  4.9,
        "reviewsCount":  43,
        "stock":  9,
        "badge":  "المعيار الذهبي للفيديو",
        "section":  "trending",
        "image":  "images/prod_rode_videomic_pro_plus.jpg",
        "gallery":  [
                        "images/prod_rode_videomic_pro_plus.jpg",
                        "images/prod_rode_videomic_pro_plus_angle2.jpg",
                        "images/prod_rode_videomic_pro_plus_angle3.jpg",
                        "images/prod_rode_videomic_pro_plus_angle4.jpg"
                    ],
        "description":  "الميكروفون الأفضل في فئته للتصوير الميداني والأفلام الوثائقية مع باب بطارية مدمج ومفتاح تعزيز الترددات وفلتر تمرير عالي.",
        "specs":  {
                      "الطاقة":  "يعمل ببطارية ليثيوم قابلة للشحن LB-1 أو بطاريتي AA أو عبر USB",
                      "الميزات":  "تشغيل/إيقاف تلقائي مع الكاميرا للحفاظ على البطارية",
                      "مانع الصدمات":  "مانع صدمات Rycote Lyre الأصلي المدمج"
                  }
    },
    {
        "id":  "AUD-072",
        "name":  "RODE Wireless ME Ultra-Compact Wireless Mic",
        "nameEn":  "Rode Wireless ME",
        "category":  "audio",
        "brand":  "RØDE",
        "price":  199,
        "oldPrice":  215,
        "rating":  4.9,
        "reviewsCount":  79,
        "stock":  10,
        "badge":  "تسجيل ذكي GainAssist",
        "section":  "trending",
        "image":  "images/prod_rode_wireless_me.jpg",
        "gallery":  [
                        "images/prod_rode_wireless_me.jpg",
                        "images/prod_rode_wireless_me_angle2.jpg",
                        "images/prod_rode_wireless_me_angle3.jpg",
                        "images/prod_rode_wireless_me_angle4.jpg",
                        "images/prod_rode_wireless_me_angle5.jpg",
                        "images/prod_rode_wireless_me_angle6.jpg"
                    ],
        "description":  "النظام اللاسلكي الذكي بتقنية GainAssist مع ميكروفون مدمج في جهاز الإرسال والاستقبال لتسجيل صوت المصور والمتحدث معاً.",
        "specs":  {
                      "الميكروفونات":  "ميكروفون في المرسل + ميكروفون مدمج في المستقبل ME Mic",
                      "تقنية الصوت":  "GainAssist ذكية تضبط مستويات الصوت تلقائياً بدون تشويش",
                      "المدى":  "أكثر من 100 متر في خط الرؤية"
                  }
    },
    {
        "id":  "AUD-073",
        "name":  "RODE Caster Pro II Audio Production Studio",
        "nameEn":  "RODE RODECaster Pro II",
        "category":  "audio",
        "brand":  "RØDE",
        "price":  989,
        "oldPrice":  1068,
        "rating":  4.9,
        "reviewsCount":  52,
        "stock":  10,
        "badge":  "استوديو بودكاست متكامل",
        "section":  "trending",
        "image":  "images/prod_rode_rodecaster_pro_ii.jpg",
        "gallery":  [
                        "images/prod_rode_rodecaster_pro_ii.jpg",
                        "images/prod_rode_rodecaster_pro_ii_angle2.jpg",
                        "images/prod_rode_rodecaster_pro_ii_angle3.jpg",
                        "images/prod_rode_rodecaster_pro_ii_angle4.jpg",
                        "images/prod_rode_rodecaster_pro_ii_angle5.jpg"
                    ],
        "description":  "محطة إنتاج البودكاست والصوت المتكاملة الأقوى في العالم بمعالجات APHEX الاحترافية وشاشة لمس و 4 مداخل XLR/TRS ومحولات الثورة.",
        "specs":  {
                      "المضخمات":  "Revolution Preamps فائقة الهدوء بمستوى ضوضاء -131.5dBV",
                      "المداخل":  "4 مداخل كومبو Neutrik XLR/TRS للمايكات والآلات الموسيقية",
                      "المعالجة":  "معالجات APHEX استوديو (Aural Exciter, Big Bottom, Compellor)",
                      "الوسادات":  "8 وسادات SMART Pads قابلة للتخصيص الكامل"
                  }
    },
    {
        "id":  "AUD-074",
        "name":  "Hollyland Lark Max Duo Wireless Mic System",
        "nameEn":  "Hollyland Lark Max 2 Ultimate Combo",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  391,
        "oldPrice":  422,
        "rating":  4.9,
        "reviewsCount":  69,
        "stock":  7,
        "badge":  "عزل ضوضاء ENC متطور",
        "section":  "trending",
        "image":  "images/prod_hollyland_lark_max_2_ultimate.jpg",
        "gallery":  [
                        "images/prod_hollyland_lark_max_2_ultimate.jpg"
                    ],
        "description":  "نظام المايكروفونات اللاسلكية الاستوديو مع إلغاء الضوضاء بتقنية MaxTimbre وتسجيل داخلي 14 ساعة وعلبة شحن ذكية.",
        "specs":  {
                      "التقنية الصوتية":  "MaxTimbre Mic تقنية ميكروفون متقدمة بصوت دافئ",
                      "إلغاء الضوضاء":  "Environmental Noise Cancellation (ENC) ذكي بلمسة زر",
                      "التسجيل الداخلي":  "8GB ذاكرة داخلية تسجل حتى 14 ساعة صوت بدون ضغط",
                      "المدى":  "حتى 250 متراً"
                  }
    },
    {
        "id":  "AUD-075",
        "name":  "Hollyland Lark M2 Button-Sized Wireless Mic",
        "nameEn":  "Hollyland Lark M2 Combo",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  139,
        "oldPrice":  150,
        "rating":  4.9,
        "reviewsCount":  82,
        "stock":  4,
        "badge":  "حجم زر القميص فائق الخفة",
        "section":  "trending",
        "image":  "images/prod_hollyland_lark_m2_combo.jpg",
        "gallery":  [
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
        "description":  "أصغر ميكروفون لاسلكي في العالم بوزن 9 جرام فقط بحجم الزر مع تثبيت مغناطيسي مدهش وعمر بطارية يصل إلى 40 ساعة.",
        "specs":  {
                      "الوزن والحجم":  "9 جرام فقط بحجم العملة المعدنية",
                      "التثبيت":  "مغناطيس خلفي ومشابك وقلادة تعليق متعددة الخيارات",
                      "البطارية":  "حتى 40 ساعة تشغيل إجمالية مع علبة الشحن",
                      "جودة الصوت":  "صوت عالي الدقة 48kHz / 24-Bit مع إلغاء ضوضاء"
                  }
    },
    {
        "id":  "AUD-076",
        "name":  "Sennheiser MKE 600 Shotgun Microphone",
        "nameEn":  "Sennheiser MKE 600 Microphone",
        "category":  "audio",
        "brand":  "Sennheiser",
        "price":  449,
        "oldPrice":  485,
        "rating":  4.9,
        "reviewsCount":  46,
        "stock":  8,
        "badge":  "أداء احترافي ألماني",
        "section":  "trending",
        "image":  "images/prod_sennheiser_mke_600_microphone.jpg",
        "gallery":  [
                        "images/prod_sennheiser_mke_600_microphone.jpg"
                    ],
        "description":  "مايكروفون الشوت جن الألماني السينمائي الشهير لعزل أصوات الحوارات بدقة ونقاء فائق، يعمل ببطارية AA أو فانتوم 48V.",
        "specs":  {
                      "النمط القطبي":  "Supercardioid / Lobar فائق التوجيه يرفض الأصوات الجانبية تماماً",
                      "الطاقة":  "يعمل بطاقة Phantom 48V أو ببطارية AA عادية لأكثر من 150 ساعة",
                      "فلتر الصوت":  "Low-cut filter قابل للتشغيل لقص أصوات الرياح والمكيفات",
                      "الصناعة":  "صناعة ألمانية بمواصفات بث تلفزيوني"
                  }
    },
    {
        "id":  "AUD-077",
        "name":  "Shure SM7B Vocal Dynamic Microphone",
        "nameEn":  "Shure SM7B Vocal Microphone",
        "category":  "audio",
        "brand":  "Shure",
        "price":  569,
        "oldPrice":  615,
        "rating":  4.9,
        "reviewsCount":  71,
        "stock":  10,
        "badge":  "مايك الاستوديو الأسطوري",
        "section":  "trending",
        "image":  "images/prod_shure_sm7b_vocal_microphone.jpg",
        "gallery":  [
                        "images/prod_shure_sm7b_vocal_microphone.jpg"
                    ],
        "description":  "الميكروفون الأسطوري الأشهر في تاريخ الاستوديوهات الإذاعية والغنائية والبودكاست في العالم، صوت دافئ وناعم يعشقه الملايين.",
        "specs":  {
                      "النوع":  "دايناميك Dynamic استوديو بنمط كارديويد كلاسيكي",
                      "العزل":  "عزل كهرومغناطيسي داخلي يمنع طنين الشاشات والمحولات",
                      "تثبيت الصدمات":  "تثبيت هوائي داخلي يلغي الاهتزازات الميكانيكية",
                      "الفلاتر":  "مفتاح Bass Rolloff ومفتاح Mid-range Boost مدمج في الخلف"
                  }
    },
    {
        "id":  "GMB-022",
        "name":  "DJI Osmo Pocket 3 Creator Combo",
        "nameEn":  "DJI Osmo Pocket 4 Creator Combo",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  829,
        "oldPrice":  895,
        "rating":  4.9,
        "reviewsCount":  103,
        "stock":  7,
        "badge":  "مستشعر 1 بوصة سينمائي",
        "section":  "trending",
        "image":  "images/prod_dji_osmo_pocket_4_creator_comb.jpg",
        "gallery":  [
                        "images/prod_dji_osmo_pocket_4_creator_comb.jpg",
                        "images/prod_dji_osmo_pocket_4_creator_comb_angle2.jpg",
                        "images/prod_dji_osmo_pocket_4_creator_comb_angle3.jpg",
                        "images/prod_dji_osmo_pocket_4_creator_comb_angle4.jpg",
                        "images/prod_dji_osmo_pocket_4_creator_comb_angle5.jpg",
                        "images/prod_dji_osmo_pocket_4_creator_comb_angle6.jpg",
                        "images/prod_dji_osmo_pocket_4_creator_comb_angle7.jpg",
                        "images/prod_dji_osmo_pocket_4_creator_comb_angle8.jpg"
                    ],
        "description":  "كاميرا الجيمبل السحرية بمستشعر 1 بوصة CMOS وشاشة لمس OLED قابلة للتدوير وفيديو 4K 120p وألوان 10-Bit D-Log M.",
        "specs":  {
                      "المستشعر":  "مستشعر ضخم 1.0-inch CMOS لأداء سينمائي مذهل في الظلام",
                      "الشاشة":  "شاشة لمسية 2.0 بوصة OLED تدور للتبديل بين الأفقي والعمودي",
                      "الفيديو":  "4K 120p / 10-Bit D-Log M مع تتبع ذكي ActiveTrack 6.0",
                      "حزمة الكريتور":  "تتضمن مايك DJI Mic 2 اللاسلكي وعدسة واسعة وقبضة بطارية وترايبود"
                  }
    },
    {
        "id":  "GMB-023",
        "name":  "DJI Focus Pro Creator Combo LiDAR System",
        "nameEn":  "DJI Focus Pro Creator Combo",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  1105,
        "oldPrice":  1193,
        "rating":  4.9,
        "reviewsCount":  106,
        "stock":  6,
        "badge":  "فوكس ليدار خارق",
        "section":  "trending",
        "image":  "images/prod_dji_focus_pro_creator_combo.jpg",
        "gallery":  [
                        "images/prod_dji_focus_pro_creator_combo.jpg",
                        "images/prod_dji_focus_pro_creator_combo_angle2.jpg",
                        "images/prod_dji_focus_pro_creator_combo_angle3.jpg",
                        "images/prod_dji_focus_pro_creator_combo_angle4.jpg",
                        "images/prod_dji_focus_pro_creator_combo_angle5.jpg"
                    ],
        "description":  "نظام الفوكس الذكي المستقل LiDAR من دي جي آي: يمنح أي عدسة مانيوال تركيزاً بؤرياً آلياً وفائق الذكاء مع موتور Focus Pro.",
        "specs":  {
                      "نظام الليدار":  "وحدة LiDAR ترسل 76,800 نقطة قياس بمدى يصل إلى 20 متراً",
                      "الذكاء الاصطناعي":  "تعرف ذكي على الأشخاص والسيارات لتثبيت الفوكس التلقائي",
                      "الموتور":  "موتور Focus Pro فائق العزم بقوة واستجابة فائقة",
                      "التوافق":  "يعمل مع مثبتات RS 4 Pro أو بشكل مستقل تماماً على أي كاميرا"
                  }
    },
    {
        "id":  "STN-050",
        "name":  "Peak Design Travel Tripod (Carbon Fiber)",
        "nameEn":  "Peak Design Travel Tripod - Carbon Fibre",
        "category":  "stands",
        "brand":  "Peak Design",
        "price":  780,
        "oldPrice":  842,
        "rating":  4.9,
        "reviewsCount":  96,
        "stock":  7,
        "badge":  "كربون فايبر مدمج فائق",
        "section":  "trending",
        "image":  "images/prod_peak_design_travel_tripod_carb.jpg",
        "gallery":  [
                        "images/prod_peak_design_travel_tripod_carb.jpg"
                    ],
        "description":  "الترايبود الأكثر ثورية في الحجم وتوفير المساحة: هيكل كربون فايبر بقطر علبة ماء مع رأس كروي مدمج فائق الدقة.",
        "specs":  {
                      "المادة":  "ألياف كربونية Carbon Fiber خفيفة وشديدة الصلابة",
                      "الحجم عند الطي":  "قطر 7.9 سم فقط (يوفر نصف حجم الترايبود التقليدي)",
                      "الحمولة":  "يتحمل حتى 9.1 كجم بثبات مطلق",
                      "الوزن":  "1.27 كجم فقط"
                  }
    },
    {
        "id":  "STN-051",
        "name":  "Manfrotto Befree Live Carbon Fiber Tripod",
        "nameEn":  "Manfrotto BeFree Live Carbon Fibre Tripod",
        "category":  "stands",
        "brand":  "Manfrotto",
        "price":  600,
        "oldPrice":  648,
        "rating":  4.9,
        "reviewsCount":  91,
        "stock":  11,
        "badge":  "هيد هيدروليك ناعم",
        "section":  "trending",
        "image":  "images/prod_manfrotto_befree_live_carbon_f.jpg",
        "gallery":  [
                        "images/prod_manfrotto_befree_live_carbon_f.jpg"
                    ],
        "description":  "حامل فيديو كربوني مدمج مخصص للسفر وصناع المحتوى الميداني برأس هيدروليكي Befree Live ونظام قفل M-Lock السريع.",
        "specs":  {
                      "رأس الفيديو":  "رأس هيدروليكي Fluid Drag System لحركات بان وتيلت سينمائية",
                      "المادة":  "ألياف كربونية إيطالية فائقة الخفة",
                      "الحمولة":  "4.0 كجم مخصص لكاميرات الميرورليس والسينما المدمجة",
                      "الوزن":  "1.38 كجم فقط"
                  }
    },
    {
        "id":  "CAG-020",
        "name":  "Tilta Mirage Motorized VND Matte Box System",
        "nameEn":  "Tilta Mirage VND Matte Box",
        "category":  "cages",
        "brand":  "Tilta",
        "price":  150,
        "oldPrice":  162,
        "rating":  4.9,
        "reviewsCount":  100,
        "stock":  7,
        "badge":  "مات بوكس كربوني بموتور",
        "section":  "trending",
        "image":  "images/prod_tilta_mirage_vnd_matte_box.jpg",
        "gallery":  [
                        "images/prod_tilta_mirage_vnd_matte_box.jpg",
                        "images/prod_tilta_mirage_vnd_matte_box_angle2.jpg",
                        "images/prod_tilta_mirage_vnd_matte_box_angle3.jpg"
                    ],
        "description":  "صندوق التظليل السينمائي المات بوكس فائق الخفة مع فلتر ND متغير 95mm وتصميم ديناميكي يمنع تشوه الضوء على العدسة.",
        "specs":  {
                      "الوزن":  "130 جم فقط (أخف مات بوكس احترافي في العالم)",
                      "الفلتر":  "فلتر دائري 95mm VND متغير من 0.3 حتى 2.7 ND (1 إلى 9 وقفات)",
                      "المحرك":  "يدعم تركيب موتور لاسلكي للتحكم بدرجة التعتيم عن بعد",
                      "الحلقات":  "يتضمن حلقات تحويل لكافة مقاسات العدسات الشائعة"
                  }
    },
    {
        "id":  "CAM-010",
        "name":  "Sony ZV-E10 مع عدسة 16-50 مم لصناع المحتوى",
        "nameEn":  "Sony ZV-E10 with 16-50mm Lens",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  580,
        "oldPrice":  620,
        "rating":  4.9,
        "reviewsCount":  48,
        "stock":  9,
        "badge":  "الأكثر طلباً",
        "image":  "images/prod_cam_010.jpg",
        "images":  [
                       "images/prod_cam_010.jpg"
                   ],
        "description":  "كاميرا ميرورليس متطورة مخصصة لصناع المحتوى والمدونين بمستشعر APS-C كبير بدقة 24.2 ميجابكسل، تدعم تسجيل فيديو 4K فائق الوضوح مع زر عزل الخلفية البوكيه السريع وميزة Product Showcase للتركيز الفوري على المنتجات المعروضة.",
        "specs":  {
                      "المستشعر":  "24.2MP APS-C Exmor CMOS",
                      "الفيديو":  "4K 30p بدون اقتصاص مع دعم S-Log3 و HLG",
                      "التركيز":  "425 نقطة تتبع بؤري هجين مع Eye AF بالوقت الفعلي",
                      "الشاشة":  "شاشة لمسية مفصلية متقلبة بالكامل 3 بوصة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-012",
        "name":  "Sony a6700 Flagship APS-C Mirrorless Body",
        "nameEn":  "Sony a6700 Body",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  1050,
        "oldPrice":  1150,
        "rating":  4.9,
        "reviewsCount":  56,
        "stock":  6,
        "badge":  "الجيل الأحدث",
        "image":  "images/prod_cam_012.jpg",
        "images":  [
                       "images/prod_cam_012.jpg"
                   ],
        "description":  "الكاميرا الرائدة بمستشعر مقطوع المزودة بوحدة معالجة الذكاء الاصطناعي المخصصة للتعرف الفوري على الأشخاص والحيوانات والمركبات، وتوفر تسجيل فيديو سينمائي 4K 120p بدقة لونية 10-Bit 4:2:2 وتثبيت بصري مدمج داخل الهيكل خماسي المحاور.",
        "specs":  {
                      "المستشعر":  "26MP BSI APS-C Exmor R CMOS",
                      "الفيديو":  "4K 120p 10-bit 4:2:2 All-Intra",
                      "الذكاء الاصطناعي":  "وحدة مخصصة للتعرف والتتبع المتقدم AI Processing Unit",
                      "التثبيت":  "تثبيت داخلي 5 محاور IBIS بقوة 5 وقفات",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-013",
        "name":  "Sony a7C II Full-Frame Compact Mirrorless",
        "nameEn":  "Sony a7C II Body",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  1350,
        "oldPrice":  1450,
        "rating":  4.9,
        "reviewsCount":  39,
        "stock":  5,
        "badge":  "إصدار مدمج",
        "image":  "images/prod_cam_013.jpg",
        "images":  [
                       "images/prod_cam_013.jpg"
                   ],
        "description":  "تجمع بين قوة مستشعر الفل فريم الخارق بدقة 33 ميجابكسل وحجم الهيكل المدمج فائق الخفة، مما يجعلها الخيار المثالي للرحلات والإنتاج المستقل وتصوير الفيديو بجودة 4K 60p فائق المعالجة من 7K مع مظهر الألوان السينمائي S-Cinetone.",
        "specs":  {
                      "المستشعر":  "33MP Full-Frame Exmor R BSI",
                      "الفيديو":  "4K 60p 10-bit مع S-Cinetone و Log3",
                      "التثبيت":  "تثبيت بصري نشط 7.0 وقفات داخل الهيكل",
                      "الوزن":  "514 جم فقط مع البطارية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-105",
        "name":  "Canon EOS 2000D Kit with 18-55mm IS II",
        "nameEn":  "Canon EOS 2000D 18-55mm",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  330,
        "oldPrice":  365,
        "rating":  4.8,
        "reviewsCount":  62,
        "stock":  11,
        "badge":  "مناسب للمبتدئين",
        "image":  "images/prod_cam_105.jpg",
        "images":  [
                       "images/prod_cam_105.jpg"
                   ],
        "description":  "الكاميرا الاحترافية المثالية للانطلاق في عالم التصوير الفوتوغرافي بمستشعر APS-C بدقة 24.1 ميجابكسل، مع اتصال واي فاي سريع لنقل الصور ومشاركة اللحظات، وتأتي مع عدسة كانون الأصلية المزودة بمانع اهتزاز بصري.",
        "specs":  {
                      "المستشعر":  "24.1MP APS-C CMOS",
                      "العدسة":  "Canon EF-S 18-55mm f/3.5-5.6 IS II",
                      "الاتصال":  "Wi-Fi و NFC مدمج للمشاركة والتحكم",
                      "حساسية الضوء":  "ISO 100 - 6400 (قابلة للتوسيع حتى 12800)",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-106",
        "name":  "Canon EOS R50 Mirrorless with 18-45mm",
        "nameEn":  "Canon EOS R50 with 18-45mm",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  520,
        "oldPrice":  570,
        "rating":  4.9,
        "reviewsCount":  41,
        "stock":  8,
        "badge":  "اختيار صناع المحتوى",
        "image":  "images/prod_cam_106.jpg",
        "images":  [
                       "images/prod_cam_106.jpg"
                   ],
        "description":  "كاميرا ميرورليس مدمجة فائقة الذكاء مصممة للجيل الجديد من صناع المحتوى مع تصوير فيديو 4K بدقة كاملة مستخلصة من 6K ونظام تركيز Dual Pixel CMOS AF II فائق السرعة، مع شاشة لمسية متعددة الزوايا.",
        "specs":  {
                      "المستشعر":  "24.2MP APS-C CMOS",
                      "الفيديو":  "4K 30p فائق الحدة بدون اقتصاص",
                      "نظام الفوكس":  "Dual Pixel AF II مع تتبع العين والوجه",
                      "الشاشة":  "شاشة لمسية مفصلية Vari-angle",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "CAM-107",
        "name":  "Canon EOS R10 Mirrorless Camera Body",
        "nameEn":  "Canon EOS R10 Body",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  720,
        "oldPrice":  790,
        "rating":  4.9,
        "reviewsCount":  35,
        "stock":  5,
        "badge":  "سرعة خارقة",
        "image":  "images/prod_cam_107.jpg",
        "images":  [
                       "images/prod_cam_107.jpg"
                   ],
        "description":  "كاميرا عالية الأداء مخصصة لتصوير الحركة السريعة والرياضة والحياة البرية بسرعة تصوير متتابع تصل إلى 23 إطاراً في الثانية بغالق إلكتروني، مع فيديو 4K 60p ونظام تتبع ذكي يحدد الأهداف بدقة متناهية.",
        "specs":  {
                      "المستشعر":  "24.2MP APS-C CMOS Sensor",
                      "سرعة الغالق":  "23fps غالق إلكتروني / 15fps ميكانيكي",
                      "الفيديو":  "4K 60p اقتصاص / 4K 30p فائق النقاء من 6K",
                      "التركيز":  "Dual Pixel AF II مع تمييز المركبات والحيوانات",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "DJI-096",
        "name":  "DJI Osmo Pocket 3 Standard Edition",
        "nameEn":  "DJI Osmo Pocket 3",
        "category":  "cameras",
        "brand":  "DJI",
        "price":  479,
        "oldPrice":  510,
        "rating":  4.9,
        "reviewsCount":  78,
        "stock":  10,
        "badge":  "الأكثر شعبية",
        "image":  "images/prod_dji_096.jpg",
        "images":  [
                       "images/prod_dji_096.jpg"
                   ],
        "description":  "كاميرا الجيب الثورية المزودة بمستشعر ضخم مقاس 1 بوصة CMOS لتصوير سينمائي فائق النقاء في الإضاءة المنخفضة، وشاشة لمس أوليد دوارة قياس 2 بوصة مع تتبع تلقائي ذكي ActiveTrack 6.0 وتثبيت ميكانيكي ثلاثي المحاور.",
        "specs":  {
                      "المستشعر":  "1-inch CMOS Sensor",
                      "الفيديو":  "4K 120p مع ملف ألوان 10-bit D-Log M",
                      "التثبيت":  "تثبيت ميكانيكي حقيقي 3 محاور",
                      "الشاشة":  "شاشة OLED دوارة 2.0 بوصة أفقية وعمودية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "DJI-097",
        "name":  "DJI Osmo Pocket 3 Creator Combo",
        "nameEn":  "DJI Osmo Pocket 3 Creator Combo",
        "category":  "cameras",
        "brand":  "DJI",
        "price":  530,
        "oldPrice":  580,
        "rating":  4.9,
        "reviewsCount":  84,
        "stock":  8,
        "badge":  "باقة الإنتاج الكاملة",
        "image":  "images/prod_dji_097.jpg",
        "images":  [
                       "images/prod_dji_097.jpg"
                   ],
        "description":  "الحزمة الكاملة الشاملة لصناع المحتوى الاحترافي؛ تتضمن كاميرا بوكيت 3 بالإضافة إلى ميكروفون DJI Mic 2 اللاسلكي الأصلي، وعدسة الزاوية الواسعة، ومقبض البطارية الإضافي، وحامل الترايبود الصغير وحقيبة الحمل المدمجة.",
        "specs":  {
                      "المحتويات":  "كاميرا بوكيت 3 + مايك DJI Mic 2 + مقبض بطارية + حامل ثلاثي",
                      "المستشعر":  "1-inch CMOS مع ألوان D-Log M",
                      "عمر البطارية":  "حتى 166 دقيقة تشغيل متواصل مع مقبض الطاقة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "DJI-100",
        "name":  "DJI Osmo Action 4 Adventure Combo",
        "nameEn":  "DJI Action 4 Adventure Combo",
        "category":  "cameras",
        "brand":  "DJI",
        "price":  380,
        "oldPrice":  420,
        "rating":  4.9,
        "reviewsCount":  46,
        "stock":  7,
        "badge":  "مقاومة للماء والصدمات",
        "image":  "images/prod_dji_100.jpg",
        "images":  [
                       "images/prod_dji_100.jpg"
                   ],
        "description":  "كاميرا الأكشن والمغامرات الاحترافية بمستشعر كبير 1/1.3 بوصة يمنح جودة تصوير ليلية رائدة ومجال رؤية واسع للغاية 155 درجة، مع 3 بطاريات إكستريم وعصا تمديد 1.5 متر وحافظة بطاريات متعددة الوظائف.",
        "specs":  {
                      "المستشعر":  "1/1.3-inch CMOS Sensor",
                      "الفيديو":  "4K 120p بزاوية فائقة الاتساع 155°",
                      "مقاومة الماء":  "مقاومة للماء حتى عمق 18 متراً بدون حافظة غوص",
                      "البطارية":  "3 بطاريات Extreme مع علبة شحن سريعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-CAM-108",
        "name":  "Fujifilm X-T30 II Mirrorless Camera",
        "nameEn":  "Fujifilm X-T30 II Body",
        "category":  "cameras",
        "brand":  "Fujifilm",
        "price":  790,
        "oldPrice":  850,
        "rating":  4.9,
        "reviewsCount":  38,
        "stock":  4,
        "badge":  "ألوان سينمائية كلاسيكية",
        "image":  "images/prod_cam_108.jpg",
        "images":  [
                       "images/prod_cam_108.jpg"
                   ],
        "description":  "كاميرا ميرورليس راقية تجمع بين جمالية التصميم الكلاسيكي القديم وأحدث تقنيات التصوير الرقمي، مع محرك معالجة الألوان الأسطوري من فوجي فيلم الذي يضم 18 نمط محاكاة أفلام فوتوغرافية وسينمائية أصلية.",
        "specs":  {
                      "المستشعر":  "26.1MP X-Trans CMOS 4",
                      "المعالج":  "X-Processor 4 فائق السرعة",
                      "محاكاة الأفلام":  "18 وضع Film Simulation مع Classic Neg و Eterna",
                      "الفيديو":  "DCI 4K 30p و Full HD 240p حركة بطيئة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-015",
        "name":  "Sony FE 100mm F2.8 STF GM OSS",
        "nameEn":  "Sony FE 100mm F2.8 STF GM OSS",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1090,
        "oldPrice":  1190,
        "rating":  4.9,
        "reviewsCount":  27,
        "stock":  4,
        "badge":  "عزل بصري أسطوري",
        "image":  "images/prod_len_015.jpg",
        "images":  [
                       "images/prod_len_015.jpg"
                   ],
        "description":  "عدسة البورتريه الفريدة من سلسلة G Master بتقنية التدرج الضوئي المحيطي STF (Smooth Trans Focus) التي تمنح أنعم خلفية بوكيه دائرية في العالم دون أي تشويه للأطراف، مع تثبيت بصري OSS مدمج.",
        "specs":  {
                      "البعد البؤري":  "100mm Prime Lens",
                      "فتحة العدسة":  "F2.8 (T5.6 Apodization Element)",
                      "التثبيت":  "مانع اهتزاز بصري مدمج Optical SteadyShot",
                      "محرك الفوكس":  "Direct Drive SSM فائق الهدوء",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-016",
        "name":  "Sony FE 85mm F1.4 GM II",
        "nameEn":  "Sony FE 85mm F1.4 GM II",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1470,
        "oldPrice":  1580,
        "rating":  4.9,
        "reviewsCount":  32,
        "stock":  3,
        "badge":  "الجيل الثاني الجديد",
        "image":  "images/prod_len_016.jpg",
        "images":  [
                       "images/prod_len_016.jpg"
                   ],
        "description":  "الجيل الثاني المطور بالكامل من عدسة البورتريه الرائدة لشركة سوني؛ تأتي بوزن أخف بنسبة 20%، ومحركين خطيين XD للتركيز التلقائي أسرع بـ 3 أضعاف، مع حلقة فتحة عدسة قابلة لإلغاء النقرات لتصوير الفيديو السينمائي.",
        "specs":  {
                      "البعد البؤري":  "85mm Portrait Prime",
                      "أقصى فتحة عدسة":  "F/1.4 دائرية بـ 11 شفرة دائرية",
                      "محركات التركيز":  "محركان خطيان XD Linear Motors للسرعة الفائقة",
                      "الوزن":  "642 جم (أخف من الجيل السابق)",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-019",
        "name":  "Sony FE 16-35mm F2.8 GM II",
        "nameEn":  "Sony FE 16-35mm F2.8 GM II",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1260,
        "oldPrice":  1380,
        "rating":  4.9,
        "reviewsCount":  44,
        "stock":  5,
        "badge":  "زاوية فائقة الاتساع",
        "image":  "images/prod_len_019.jpg",
        "images":  [
                       "images/prod_len_019.jpg"
                   ],
        "description":  "عدسة زووم عريضة الزاوية سينمائية رائدة بفتحة F2.8 ثابتة عبر المدى بالكامل، تقدم حدة بصرية استثنائية من المركز وحتى الحواف مع كبح شبه تام لظاهرة تنفس التركيز Focus Breathing عند تسجيل الفيديو.",
        "specs":  {
                      "البعد البؤري":  "16-35mm Ultra Wide Zoom",
                      "فتحة العدسة":  "F/2.8 ثابتة على كامل المدى",
                      "العناصر البصرية":  "3 عناصر XA و عنصرين Super ED",
                      "الطلاء الخارجي":  "Nano AR Coating II المضاد للانعكاسات والوهج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-021",
        "name":  "Sony FE 70-200mm F2.8 GM OSS II",
        "nameEn":  "Sony FE 70-200mm F2.8 GM OSS II",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1370,
        "oldPrice":  1490,
        "rating":  4.9,
        "reviewsCount":  51,
        "stock":  4,
        "badge":  "اختيار المحترفين",
        "image":  "images/prod_len_021.jpg",
        "images":  [
                       "images/prod_len_021.jpg"
                   ],
        "description":  "أخف عدسة تليفوتو زووم بفتحة F2.8 في العالم، تمنح سرعة تتبع بؤري مذهلة للرياضات والأحداث والحفلات والمناظر الطبيعية، مع كبح متطور للاهتزاز البصري بـ 3 أوضاع مخصصة.",
        "specs":  {
                      "البعد البؤري":  "70-200mm Telephoto Zoom",
                      "الوزن":  "1045 جم (أخف بـ 29% من سابقتها)",
                      "التثبيت":  "Optical SteadyShot بثلاثة أوضاع حركية",
                      "محركات الفوكس":  "4 محركات XD Linear فائقة الاستجابة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-022",
        "name":  "Sony FE 50mm F1.4 GM",
        "nameEn":  "Sony FE 50mm F1.4 GM",
        "category":  "filters",
        "brand":  "Sony",
        "price":  970,
        "oldPrice":  1050,
        "rating":  4.9,
        "reviewsCount":  36,
        "stock":  6,
        "badge":  "عدسة قياسية خارقة",
        "image":  "images/prod_len_022.jpg",
        "images":  [
                       "images/prod_len_022.jpg"
                   ],
        "description":  "العدسة القياسية الأحدث والأكثر حدة وتوازناً؛ تقدم أداء سلسلة G Master الراقي بوزن مدمج للغاية مع فتحة F1.4 سريعة تتيح التصوير في أصعب ظروف الإضاءة بعزل بصري ساحر.",
        "specs":  {
                      "البعد البؤري":  "50mm Standard Prime",
                      "أقصى فتحة عدسة":  "F/1.4 بـ 11 شفرة دائرية للبوكيه الدائري",
                      "محرك الفوكس":  "محركان XD Linear صامتان للسينما",
                      "مقاومة العوامل":  "مقاومة للأتربة والرطوبة مع طلاء الفلورين",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-027",
        "name":  "Sony FE 90mm F2.8 Macro G OSS",
        "nameEn":  "Sony FE 90mm F2.8 Macro G OSS",
        "category":  "filters",
        "brand":  "Sony",
        "price":  660,
        "oldPrice":  720,
        "rating":  4.9,
        "reviewsCount":  58,
        "stock":  7,
        "badge":  "ماكرو حقيقي 1:1",
        "image":  "images/prod_len_027.jpg",
        "images":  [
                       "images/prod_len_027.jpg"
                   ],
        "description":  "العدسة المرجعية لتصوير الماكرو والمنتجات الدقيقة والمجوهرات والبورتريه بنسبة تكبير حقيقية 1:1 بالحجم الطبيعي، مع مفتاح تبديل مباشر بين الفوكس اليدوي والتلقائي بالسحب.",
        "specs":  {
                      "نسبة التكبير":  "1:1 Life-Size Magnification",
                      "البعد البؤري":  "90mm Telephoto Macro",
                      "التثبيت":  "مانع اهتزاز بصري OSS مدمج",
                      "آلية التبديل":  "حلقة فوكس انزلاقية سريعة AF/MF Push-Pull",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-028",
        "name":  "Sony FE 24mm F1.4 GM",
        "nameEn":  "Sony FE 24mm F1.4 GM",
        "category":  "filters",
        "brand":  "Sony",
        "price":  820,
        "oldPrice":  890,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  5,
        "badge":  "عدسة النجوم والمناظر",
        "image":  "images/prod_len_028.jpg",
        "images":  [
                       "images/prod_len_028.jpg"
                   ],
        "description":  "الخيار الأول لمصوري السماء الليلية والفلك والمشاهد الطبيعية والهندسة المعمارية، بفضل كبحها الاستثنائي للزيغ السهمي النقطي عند فتحة F1.4 وتصميمها المدمج خفيف الوزن البالغ 445 جم.",
        "specs":  {
                      "البعد البؤري":  "24mm Wide-Angle Prime",
                      "الفتحة القصوى":  "F/1.4 ممتازة للتصوير الليلي والفلكي",
                      "الوزن":  "445 جم فقط",
                      "العناصر الخاصة":  "عنصران XA (Extreme Aspherical)",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-030",
        "name":  "Sony FE 24-105mm F4 G OSS",
        "nameEn":  "Sony FE 24-105mm F4 G OSS",
        "category":  "filters",
        "brand":  "Sony",
        "price":  650,
        "oldPrice":  720,
        "rating":  4.9,
        "reviewsCount":  67,
        "stock":  8,
        "badge":  "زووم شامل متعدد الأغراض",
        "image":  "images/prod_len_030.jpg",
        "images":  [
                       "images/prod_len_030.jpg"
                   ],
        "description":  "العدسة الأكثر عملية لجميع المهام اليومية، من التصوير الواسع للرحلات وحتى التليفوتو للوجوه والأحداث بفتحة F4 ثابتة، مع تثبيت بصري قوي ونقاء لوني رائد لسلسلة G.",
        "specs":  {
                      "نطاق الزووم":  "24-105mm All-in-One Zoom",
                      "الفتحة":  "F/4 ثابتة على جميع أبعاد الزووم",
                      "الوزن":  "663 جم",
                      "التثبيت":  "Optical SteadyShot مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-031",
        "name":  "Sony FE 85mm F1.8 Portrait Lens",
        "nameEn":  "Sony FE 85mm F1.8",
        "category":  "filters",
        "brand":  "Sony",
        "price":  400,
        "oldPrice":  440,
        "rating":  4.9,
        "reviewsCount":  73,
        "stock":  9,
        "badge":  "أفضل قيمة لبورتريه",
        "image":  "images/prod_len_031.jpg",
        "images":  [
                       "images/prod_len_031.jpg"
                   ],
        "description":  "عدسة بورتريه استثنائية تجمع بين الحدة الفائقة والوزن الخفيف وسرعة الفوكس العالية مع خلفية ناعمة معزولة بفضل فتحة F1.8، وتعد العدسة ذات القيمة الأعلى مقابل السعر في فئتها.",
        "specs":  {
                      "البعد البؤري":  "85mm Medium Telephoto",
                      "الفتحة":  "F/1.8 سريعة وعالية السطوع",
                      "الوزن":  "371 جم مدمجة ومريحة",
                      "زر مخصص":  "Focus Hold Button قابل للتخصيص",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-032",
        "name":  "Sony FE 50mm F1.8 Prime Lens",
        "nameEn":  "Sony FE 50mm F1.8",
        "category":  "filters",
        "brand":  "Sony",
        "price":  190,
        "oldPrice":  220,
        "rating":  4.8,
        "reviewsCount":  81,
        "stock":  14,
        "badge":  "العدسة الأولى لكل مصور",
        "image":  "images/prod_len_032.jpg",
        "images":  [
                       "images/prod_len_032.jpg"
                   ],
        "description":  "عدسة كلاسيكية خفيفة الوزن ببعد بؤري 50 مم يماثل عين الإنسان، بفتحة F1.8 سريعة تمكنك من عزل العناصر بجمالية مذهلة والتقاط لقطات مشرقة في الأماكن المغلقة.",
        "specs":  {
                      "البعد البؤري":  "50mm Prime",
                      "أقصى فتحة عدسة":  "F/1.8 دائرية بـ 7 شفرات",
                      "الوزن":  "186 جم فقط",
                      "قطر الفلتر":  "49 مم",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-033",
        "name":  "Sigma 24-70mm F2.8 DG DN II Art for Sony E",
        "nameEn":  "Sigma 24-70mm F2.8 DG DN II Sony",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  820,
        "oldPrice":  890,
        "rating":  4.9,
        "reviewsCount":  54,
        "stock":  6,
        "badge":  "سلسلة Art الرائدة",
        "image":  "images/prod_len_033.jpg",
        "images":  [
                       "images/prod_len_033.jpg"
                   ],
        "description":  "الإصدار الثاني المتطور من سيجما آرت الشهيرة؛ يقدم أداءً بصرياً يضاهي أرقى العدسات الاحترافية مع محرك تركيز HLA عالي الاستجابة، وحلقة فتحة عدسة مدمجة مع مفتاح قفل ونقرات.",
        "specs":  {
                      "البعد البؤري":  "24-70mm Standard Zoom",
                      "الفتحة":  "F/2.8 ثابتة على كامل المدى",
                      "المحرك":  "HLA (High-response Linear Actuator)",
                      "الصناعة":  "صناعة يابانية أصلية 100% Made in Japan",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-034",
        "name":  "Sigma 85mm F1.4 DG DN Art for Sony E",
        "nameEn":  "Sigma 85mm F1.4 DG DN Art Sony",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  780,
        "oldPrice":  850,
        "rating":  4.9,
        "reviewsCount":  47,
        "stock":  5,
        "badge":  "سحر البورتريه الياباني",
        "image":  "images/prod_len_034.jpg",
        "images":  [
                       "images/prod_len_034.jpg"
                   ],
        "description":  "صممت خصيصاً من الصفر لكاميرات الميرورليس لتوفير أقصى درجات الحدة والتباين حتى عند الفتحة القصوى F1.4، مع بوكيه ناعم يخلو من الحواف الحادة لتصوير البورتريه والأزياء الراقية.",
        "specs":  {
                      "البعد البؤري":  "85mm Portrait Prime",
                      "الفتحة القصوى":  "F/1.4 مع 11 شفرة دائرية",
                      "الوزن":  "630 جم متوازنة تماماً",
                      "قطر الفلتر":  "77 مم",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-LEN-035",
        "name":  "Sigma 14-24mm F2.8 DG DN Art for Sony E",
        "nameEn":  "Sigma 14-24mm F2.8 DG DN Art Sony",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  890,
        "oldPrice":  960,
        "rating":  4.9,
        "reviewsCount":  33,
        "stock":  4,
        "badge":  "عدسة الزوايا المعمارية",
        "image":  "images/prod_len_035.jpg",
        "images":  [
                       "images/prod_len_035.jpg"
                   ],
        "description":  "تعتبر قمة الهندسة البصرية في تصوير المشاهد فائقة الاتساع والنجوم والمباني التاريخية والمعمارية، مع انعدام شبه كامل للتشويه الهندسي وطلاء NPC النانوي الحصري لمنع التوهج.",
        "specs":  {
                      "نطاق البعد البؤري":  "14-24mm Ultra-Wide Angle",
                      "الفتحة القصوى":  "F/2.8 ثابتة",
                      "حامل فلاتر خلفي":  "Rear Filter Holder مدمج للفلاتر الهلامية",
                      "الطلاء":  "Nano Porous Coating (NPC)",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "FLT-050",
        "name":  "Hoya Variable Density II 82mm Filter",
        "nameEn":  "Hoya Variable Density II 82mm",
        "category":  "filters",
        "brand":  "Hoya",
        "price":  95,
        "oldPrice":  110,
        "rating":  4.8,
        "reviewsCount":  42,
        "stock":  12,
        "badge":  "صناعة يابانية",
        "image":  "images/prod_flt_050.jpg",
        "images":  [
                       "images/prod_flt_050.jpg"
                   ],
        "description":  "فلتر كثافة حيادية متغير متقدم من هويا اليابانية يتيح تقليل الضوء من 1.5 إلى 9 وقفات ديناميكية بدون أي انحراف لوني أو تأثير تقاطع X، مثالي للتصوير السينمائي في ضوء الشمس الساطع.",
        "specs":  {
                      "المقاس":  "82mm Filter Thread",
                      "مدى التعتيم":  "ND3 إلى ND400 (1.5 إلى 9 وقفات تعتيم)",
                      "الإطار":  "إطار ألومنيوم دوار فائق النحافة Slim Frame",
                      "الزجاج":  "زجاج بصري ياباني معالج متعدد الطبقات",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "FLT-051",
        "name":  "Hoya HD Nano MK II UV Filter 77mm",
        "nameEn":  "Hoya HD Nano MK II UV 77mm",
        "category":  "filters",
        "brand":  "Hoya",
        "price":  65,
        "oldPrice":  75,
        "rating":  4.9,
        "reviewsCount":  38,
        "stock":  15,
        "badge":  "حماية فائقة الصلابة",
        "image":  "images/prod_flt_051.jpg",
        "images":  [
                       "images/prod_flt_051.jpg"
                   ],
        "description":  "أقوى فلتر حماية للعدسات في العالم بتقنية الزجاج المقسى المقاوم للصدمات بـ 4 أضعاف الزجاج العادي، مع 32 طبقة طلاء نانوي فائق النعومة طارد للمياه والزيوت ومقاوم للخدوش.",
        "specs":  {
                      "المقاس":  "77mm",
                      "الصلابة":  "زجاج مقسى كيميائياً فائق الصلابة 4x Tougher",
                      "الطبقات":  "32 طبقة طلاء نانوي مضاد للانعكاسات Ultra-Smooth Nano",
                      "النفاذية":  "نفاذية ضوء 99.7% لحدة نقية لا تشوبها شائبة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-AUD-042",
        "name":  "RODE Wireless GO II Dual Wireless System",
        "nameEn":  "RODE Wireless GO II Dual",
        "category":  "audio",
        "brand":  "RODE",
        "price":  195,
        "oldPrice":  220,
        "rating":  4.9,
        "reviewsCount":  82,
        "stock":  10,
        "badge":  "الأكثر طلباً عالمياً",
        "image":  "images/prod_aud_042.jpg",
        "images":  [
                       "images/prod_aud_042.jpg"
                   ],
        "description":  "نظام ميكروفون لاسلكي مزدوج يتيح تسجيل شخصين في نفس الوقت مع ذاكرة داخلية تسجل أكثر من 40 ساعة كنسخة احتياطية آمنة لمنع فقدان الصوت، ومدى إرسال رقمي مستقر حتى 200 متر.",
        "specs":  {
                      "النظام":  "مستقبل واحد + جهازا إرسال بميكروفونات مدمجة",
                      "المدى اللاسلكي":  "200 متر عبر تردد رقمي 2.4GHz مشفر Series IV",
                      "التسجيل الداخلي":  "أكثر من 40 ساعة تسجيل On-board Recording",
                      "البطارية":  "بطارية ليثيوم مدمجة تدوم حتى 7 ساعات",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-AUD-043",
        "name":  "RODE Interview GO Handheld Adapter",
        "nameEn":  "RODE Interview GO",
        "category":  "audio",
        "brand":  "RODE",
        "price":  40,
        "oldPrice":  48,
        "rating":  4.8,
        "reviewsCount":  45,
        "stock":  14,
        "badge":  "للمقابلات الميدانية",
        "image":  "images/prod_aud_043.jpg",
        "images":  [
                       "images/prod_aud_043.jpg"
                   ],
        "description":  "محول يدوي مريح يحول جهاز إرسال رود وايرلس جو في ثوانٍ إلى ميكروفون يدوي احترافي للمقابلات الميدانية والتقارير الصحفية، ويأتي مع إسفنجة حماية عالية الكثافة لمنع ضوضاء الهواء.",
        "specs":  {
                      "التوافق":  "متوافق مع Wireless GO و GO II و Wireless ME و PRO",
                      "الملحقات":  "يتضمن إسفنجة رياح عالية الكثافة من الفوم الأصلي",
                      "التصميم":  "هيكل متين خفيف الوزن مع مقبض مريح للمذيع",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-AUD-044",
        "name":  "RODE NT1 5th Gen XLR/USB Studio Mic",
        "nameEn":  "RODE NT1 5th Gen",
        "category":  "audio",
        "brand":  "RODE",
        "price":  270,
        "oldPrice":  299,
        "rating":  4.9,
        "reviewsCount":  39,
        "stock":  6,
        "badge":  "تسجيل 32-Bit Float الثوري",
        "image":  "images/prod_aud_044.jpg",
        "images":  [
                       "images/prod_aud_044.jpg"
                   ],
        "description":  "ميكروفون الاستوديو الرائد الحائز على جوائز عالمية، يجمع لأول مرة بين مخرج XLR الكلاسيكي و USB-C الرقمي مع تسجيل عائم 32-bit Float يمنع تشوه الصوت نهائياً حتى في أشد الصرخات صخباً.",
        "specs":  {
                      "المخرجات":  "مخرج تناظري XLR ومخرج رقمي USB-C Dual Connect",
                      "معالجة الصوت":  "32-bit Float Digital Output بدون Clipping نهائياً",
                      "الضوضاء الذاتية":  "4dBA فقط (أهدأ ميكروفون استوديو في العالم)",
                      "الملحقات":  "مانع صدمات SM6 مع فلتر بوب مدمج وكابلات أصلية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-AUD-045",
        "name":  "RODE NT1 Signature Series",
        "nameEn":  "RODE NT1 Signature Series",
        "category":  "audio",
        "brand":  "RODE",
        "price":  210,
        "oldPrice":  235,
        "rating":  4.9,
        "reviewsCount":  53,
        "stock":  7,
        "badge":  "نقاء كلاسيكي نقي",
        "image":  "images/prod_aud_045.jpg",
        "images":  [
                       "images/prod_aud_045.jpg"
                   ],
        "description":  "الإصدار الكلاسيكي الأنقى لميكروفون NT1 الأسطوري بمخرج XLR التقليدي؛ يتميز بكبسولة مكثفة مطلية بالذهب مقاس 1 بوصة تمنح الدفء الصوتي والمدى الديناميكي العالي للغناء والتعليق الصوتي.",
        "specs":  {
                      "الكبسولة":  "1-inch Gold-Sputtered True Condenser HF6",
                      "نمط الالتقاط":  "كارديويد قلبي Cardioid عازل للغرفة",
                      "الضوضاء الذاتية":  "4dBA فائقة الهدوء والنقاء",
                      "الاستجابة الترددية":  "20Hz إلى 20kHz مسطحة ودافئة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "AUD-046",
        "name":  "RODE NT1-A Complete Vocal Recording Kit",
        "nameEn":  "RODE NT1-A Kit",
        "category":  "audio",
        "brand":  "RODE",
        "price":  210,
        "oldPrice":  240,
        "rating":  4.8,
        "reviewsCount":  89,
        "stock":  9,
        "badge":  "الأسطورة الأكثر مبيعاً",
        "image":  "images/prod_aud_046.jpg",
        "images":  [
                       "images/prod_aud_046.jpg"
                   ],
        "description":  "الميكروفون الأكثر استخداماً واعتماداً في الاستوديوهات المنزلية والاحترافية حول العالم منذ أكثر من عقدين؛ يقدم دفء الصوت الإذاعي والوضوح البلوري مع طقم مانع اهتزاز وفلتر بوب كامل.",
        "specs":  {
                      "النوع":  "مكثف استوديو خارجي Large Diaphragm Condenser",
                      "الاستجابة":  "نبرة صوتية مشرقة تبرز تفاصيل الحروف اللاتينية والعربية",
                      "الضوضاء":  "5dBA مستوى ضوضاء ذاتي فائق الانخفاض",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "AUD-047",
        "name":  "RODE NT-USB Plus Professional USB Mic",
        "nameEn":  "RODE NT-USB Plus",
        "category":  "audio",
        "brand":  "RODE",
        "price":  170,
        "oldPrice":  190,
        "rating":  4.9,
        "reviewsCount":  44,
        "stock":  8,
        "badge":  "معالج APHEX مدمج",
        "image":  "images/prod_aud_047.jpg",
        "images":  [
                       "images/prod_aud_047.jpg"
                   ],
        "description":  "ميكروفون مكتبي احترافي متصل بـ USB-C مع مضخم صوت داخلي Revolution Preamp عالي الكسب، وشريحة DSP لمعالجة الصوت المباشر بتأثيرات APHEX الاحترافية مثل Big Bottom و Aural Exciter.",
        "specs":  {
                      "الاتصال":  "USB-C فوري بدون الحاجة لكرت صوت خارجي Plug \u0026 Play",
                      "معالجة الصوت":  "APHEX DSP داخلي لتحسين نبرة الصوت المباشرة",
                      "مخرج السماعات":  "مخرج 3.5 مم مع مراقبة صوتية بدون تأخير Zero-Latency",
                      "التوافق":  "الكمبيوتر، الآيباد، والهواتف الذكية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "AUD-048",
        "name":  "RODE NTH-100 Professional Studio Headphones",
        "nameEn":  "RODE NTH-100",
        "category":  "audio",
        "brand":  "RODE",
        "price":  150,
        "oldPrice":  175,
        "rating":  4.9,
        "reviewsCount":  37,
        "stock":  6,
        "badge":  "راحة مطلقة وجل التبريد",
        "image":  "images/prod_aud_048.jpg",
        "images":  [
                       "images/prod_aud_048.jpg"
                   ],
        "description":  "سماعات مراقبة استوديو مغلقة ومصممة هندسياً بأعلى معايير الدقة الصوتية والراحة؛ تتميز بوسائد أذن محشوة بجل التبريد CoolTech المغطى بقماش ألكانتارا الفاخر لجلسات مونتاج طويلة بدون إجهاد.",
        "specs":  {
                      "المشغلات":  "مشغلات 40 مم مضبوطة بخصائص بصرية صوتية متطورة",
                      "الوسائد":  "جل التبريد CoolTech مع قماش Alcantara الأصلي",
                      "القفل":  "نظام FitLok الحصري لتثبيت مقاس الرأس بدقة",
                      "العزل":  "عزل صوتي سلبي ممتاز لمنع تسرب الصوت للميكروفون",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-AUD-049",
        "name":  "RODE PodMic Dynamic Podcasting Mic",
        "nameEn":  "RODE PodMic",
        "category":  "audio",
        "brand":  "RODE",
        "price":  100,
        "oldPrice":  120,
        "rating":  4.9,
        "reviewsCount":  76,
        "stock":  12,
        "badge":  "صوت البودكاست الإذاعي",
        "image":  "images/prod_aud_049.jpg",
        "images":  [
                       "images/prod_aud_049.jpg"
                   ],
        "description":  "الميكروفون الدايناميك المصمم خصيصاً للبودكاست والبث المباشر؛ هيكل معدني متين مقاوم للصدمات مع فلتر بوب داخلي يمنع الحروف الانفجارية ونمط التقاط قلبي يعزل صدى الغرف غير المعالجة.",
        "specs":  {
                      "النوع":  "Dynamic Broadcast-grade Capsule",
                      "النمط القطبي":  "Cardioid لعزل صوت الكيبورد والضوضاء الخلفية",
                      "الهيكل":  "معدن نحاسي صلب بالكامل All-Metal Construction",
                      "حامل مدمج":  "ذراع تأرجح مدمج مخصص للتركيب على أذرع البث",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "AUD-050",
        "name":  "RODE PSA1 Professional Studio Boom Arm",
        "nameEn":  "RODE PSA1 Boom Arm",
        "category":  "audio",
        "brand":  "RODE",
        "price":  110,
        "oldPrice":  130,
        "rating":  4.9,
        "reviewsCount":  65,
        "stock":  9,
        "badge":  "ذراع استوديو قياسي",
        "image":  "images/prod_aud_050.jpg",
        "images":  [
                       "images/prod_aud_050.jpg"
                   ],
        "description":  "ذراع حمل الميكروفونات المكتبي الأشهر في العالم؛ يوفر دوراناً حراً 360 درجة مع مدى وصول أفقي 82 سم وحركة هيدروليكية صامتة تماماً تضمن بقاء الميكروفون ثابتاً في الموضع المطلوب بدقة.",
        "specs":  {
                      "المدى الأفقي":  "820 مم / المدى الرأسي: 840 مم",
                      "الحمولة القصوى":  "حتى 1.1 كجم للأوزان الثقيلة",
                      "التثبيت":  "يشمل مشبك Desk Clamp ومثبت الفتح المكتبي Desk Insert",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "AUD-051",
        "name":  "RODE PSA1+ Premium Studio Boom Arm",
        "nameEn":  "RODE PSA1+ Boom Arm",
        "category":  "audio",
        "brand":  "RODE",
        "price":  145,
        "oldPrice":  165,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  7,
        "badge":  "تصميم كتم فائق التطور",
        "image":  "images/prod_aud_051.jpg",
        "images":  [
                       "images/prod_aud_051.jpg"
                   ],
        "description":  "الترقية الفاخرة لذراع البث الأيقوني مع نظام نوابض متوازية مخفية ومغطاة بمادة النيوبرين الممتصة للاهتزازات، ومسارات مغناطيسية لتنظيم الكابلات، وحركة سلسة صامتة كلياً.",
        "specs":  {
                      "النوابض":  "تصميم نوابض متوازية مبتكر يمنع الضجيج نهائياً",
                      "إدارة الكابلات":  "مشابك تثبيت كابلات مدمجة لسطح مكتب أنيق",
                      "الحمولة":  "يدعم الميكروفونات من 94 جم حتى 1.2 كجم",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "AUD-052",
        "name":  "RODE PodMic USB Dynamic Broadcast Mic",
        "nameEn":  "RODE PodMic USB",
        "category":  "audio",
        "brand":  "RODE",
        "price":  165,
        "oldPrice":  185,
        "rating":  4.9,
        "reviewsCount":  48,
        "stock":  8,
        "badge":  "مخرجين XLR و USB-C",
        "image":  "images/prod_aud_052.jpg",
        "images":  [
                       "images/prod_aud_052.jpg"
                   ],
        "description":  "النسخة الأكثر تطوراً من ميكروفون البودمايك المحبوب؛ تدعم الاتصال التناظري عبر XLR للأجهزة الاحترافية والاتصال الرقمي USB-C فائق الوضوح مع معالج APHEX ومخرج سماعات للمراقبة المباشرة.",
        "specs":  {
                      "المنافذ":  "XLR تناظري + USB-C رقمي مع محول تناظري 48kHz/24-bit",
                      "المعالجة":  "معالج DSP داخلي مع APHEX و Noise Gate و Compressor",
                      "الفلتر":  "فلتر بوب خارجي إضافي عالي الكفاءة مشمول بالعلبة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "AUD-053",
        "name":  "RODE Procaster Broadcast Dynamic Mic",
        "nameEn":  "RODE Procaster",
        "category":  "audio",
        "brand":  "RODE",
        "price":  200,
        "oldPrice":  225,
        "rating":  4.8,
        "reviewsCount":  35,
        "stock":  5,
        "badge":  "صوت إذاعي احترافي",
        "image":  "images/prod_aud_053.jpg",
        "images":  [
                       "images/prod_aud_053.jpg"
                   ],
        "description":  "ميكروفون إذاعي دايناميك موجه لمحترفي البث المسموع والدوبلاج؛ يتميز بكبسولة عالية الإخراج محكمة التوجيه وعزل داخلي مفرط يمنع التقاط أصوات البيئة الخارجية والصوت المنعكس من الجدران.",
        "specs":  {
                      "النمط القطبي":  "Tight Cardioid عالي الدقة",
                      "الكبسولة":  "كبسولة دايناميك متطورة مع فلتر هواء داخلي",
                      "الهيكل":  "معدن مصقول فائق المتانة للمهام الإذاعية الشاقة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "AUD-054",
        "name":  "RODE Wireless ME Ultra-Compact System",
        "nameEn":  "RODE Wireless ME",
        "category":  "audio",
        "brand":  "RODE",
        "price":  120,
        "oldPrice":  140,
        "rating":  4.8,
        "reviewsCount":  59,
        "stock":  11,
        "badge":  "تقنية GainAssist الذكية",
        "image":  "images/prod_aud_054.jpg",
        "images":  [
                       "images/prod_aud_054.jpg"
                   ],
        "description":  "نظام ميكروفون لاسلكي ذكي فائق البساطة؛ يتميز بتقنية GainAssist الذكية التي تضبط مستوى الصوت تلقائياً لتجنب ارتفاع الصوت المفاجئ، مع ميكروفون مدمج في كل من جهاز الإرسال وجهاز الاستقبال.",
        "specs":  {
                      "الميكروفونات":  "ميكروفون في الإرسال + ميكروفون في الاستقبال لتسجيل المصور والمذيع",
                      "الذكاء الصوتي":  "تقنية ضبط مستوى الصوت التلقائي GainAssist الذكية",
                      "المدى":  "أكثر من 100 متر مدى إرسال رقمي مستقر",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "AUD-055",
        "name":  "RODE Wireless Micro Compact Mobile System",
        "nameEn":  "RODE Wireless Micro",
        "category":  "audio",
        "brand":  "RODE",
        "price":  110,
        "oldPrice":  125,
        "rating":  4.9,
        "reviewsCount":  31,
        "stock":  9,
        "badge":  "فائق الصغر للهواتف",
        "image":  "images/prod_aud_055.jpg",
        "images":  [
                       "images/prod_aud_055.jpg"
                   ],
        "description":  "أصغر وأخف نظام ميكروفون لاسلكي لهواتف الآيفون والأندرويد من رود؛ بحجم زر صغير يشتبك مباشرة بالملابس بدون أسلاك، مع علبة شحن ذكية بحجم الجيب تمنح حتى 21 ساعة تشغيل إجمالية.",
        "specs":  {
                      "الوزن":  "12 جم فقط لجهاز الإرسال الصغير جداً",
                      "الاتصال":  "يتصل مباشرة بمنفذ USB-C بالهاتف بدون أسلاك",
                      "البطارية":  "حتى 21 ساعة مع علبة الشحن المحمولة المرفقة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "AUD-057",
        "name":  "Hollyland Lark M2 Dual Wireless Combo",
        "nameEn":  "Hollyland Lark M2 Combo",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  110,
        "oldPrice":  130,
        "rating":  4.9,
        "reviewsCount":  68,
        "stock":  12,
        "badge":  "بحجم زر القميص 9 جم",
        "image":  "images/prod_aud_057.jpg",
        "images":  [
                       "images/prod_aud_057.jpg"
                   ],
        "description":  "ميكروفون لاسلكي ثوري بوزن 9 جرام فقط بحجم العملة المعدنية، يثبت مغناطيسياً على القمصان دون سحب الياقة، مع جودة صوت نقية 48kHz/24-bit وإلغاء ضوضاء بيئية ذكي بضغطة زر وبطارية تدوم 40 ساعة.",
        "specs":  {
                      "الوزن":  "9 جم فقط (الأخف في فئته)",
                      "جودة الصوت":  "Hi-Fi 48kHz / 24-bit Audio",
                      "المدى اللاسلكي":  "300 متر مدى خط الرؤية بدون عوائق",
                      "عمر البطارية":  "حتى 40 ساعة إجمالية مع حافظة الشحن المدمجة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-147",
        "name":  "Godox SL60II-D Daylight LED Video Light",
        "nameEn":  "Godox SL60II-D LED Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  100,
        "oldPrice":  115,
        "rating":  4.9,
        "reviewsCount":  71,
        "stock":  13,
        "badge":  "إضاءة الاستوديو الأولى",
        "image":  "images/prod_lgt_147.jpg",
        "images":  [
                       "images/prod_lgt_147.jpg"
                   ],
        "description":  "الجيل الثاني المحدث من إضاءة جودوكس الأكثر شهرة في صناعة المحتوى واليوتيوب؛ قوة 60 واط مع تبريد شبه صامت وتحكم كامل عبر تطبيق الهاتف الذكي Godox Light ومؤشر دقة ألوان CRI 96+.",
        "specs":  {
                      "القوة":  "60W Daylight 5600K COB LED",
                      "دقة الألوان":  "CRI 96 / TLCI 97 لإعادة إنتاج درجات البشرة الطبيعية",
                      "حامل المشتتات":  "Bowens Mount العالمي لتثبيت جميع أنواع السوفت بوكس",
                      "التحكم":  "تطبيق Godox Light عبر البلوتوث من الهاتف",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-LGT-148",
        "name":  "Godox SL60II-Bi Bi-Color LED Video Light",
        "nameEn":  "Godox SL60II-Bi Bi-Color Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  135,
        "oldPrice":  150,
        "rating":  4.9,
        "reviewsCount":  54,
        "stock":  10,
        "badge":  "حرارة لونية متغيرة",
        "image":  "images/prod_lgt_148.jpg",
        "images":  [
                       "images/prod_lgt_148.jpg"
                   ],
        "description":  "إضاءة استوديو متعددة الاستخدامات ثنائية اللون تمكنك من تغيير حرارة الإضاءة بسلاسة من 2800K دافئة إلى 6500K نهارية باردة لتتوافق مع إضاءة الغرفة والمشهد المحيط مع 11 تأثيراً ضوئياً مدمجاً.",
        "specs":  {
                      "درجة الحرارة اللونية":  "2800K - 6500K ثنائي الألوان Bi-Color",
                      "السطوع":  "تحكم دقيق من 0% إلى 100% بدون أي وميض",
                      "التأثيرات الضوئية":  "11 تأثيراً سينمائياً (برق، شمعة، تلفاز، وميض)",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-LGT-149",
        "name":  "Godox SL100D Daylight LED Video Light",
        "nameEn":  "Godox SL100D LED Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  150,
        "oldPrice":  170,
        "rating":  4.9,
        "reviewsCount":  49,
        "stock":  8,
        "badge":  "قوة 100 واط مضاعفة",
        "image":  "images/prod_lgt_149.jpg",
        "images":  [
                       "images/prod_lgt_149.jpg"
                   ],
        "description":  "إضاءة استوديو قوية ومدمجة بقدرة 100 واط توفر شدة إضاءة هائلة تصل إلى 32,100 لوكس على مسافة متر واحد مع العاكس، مما يجعلها ممتازة كإضاءة رئيسية Key Light للمقابلات وتصوير المنتجات.",
        "specs":  {
                      "القوة":  "100W Daylight 5600K",
                      "شدة السطوع":  "32,100 Lux على مسافة 1 متر مع العاكس الأصلي",
                      "التبريد":  "مروحة فائقة الهدوء لا تؤثر على تسجيل الصوت الحساس",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-150",
        "name":  "Godox SL100Bi Bi-Color LED Video Light",
        "nameEn":  "Godox SL100Bi LED Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  170,
        "oldPrice":  195,
        "rating":  4.9,
        "reviewsCount":  41,
        "stock":  7,
        "badge":  "100 واط ثنائي اللون",
        "image":  "images/prod_lgt_150.jpg",
        "images":  [
                       "images/prod_lgt_150.jpg"
                   ],
        "description":  "تجمع بين قوة 100 واط العالية وإمكانية ضبط درجات حرارة اللون بين 2800K و 6500K بدقة وسهولة، مع جسم خفيف الوزن مناسب للاستوديوهات المدمجة والمصنع بالكامل بحامل بوينز القياسي.",
        "specs":  {
                      "القوة والحرارة":  "100W مع مدى لوني واسع 2800K - 6500K",
                      "دقة الألوان":  "CRI 96+ / TLCI 97+ لألوان بشرة سينمائية",
                      "التحكم":  "تطبيق الهاتف وبلوتوث مدمج وجهاز تحكم اختياري",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-151",
        "name":  "Godox SL150III Daylight LED Video Light",
        "nameEn":  "Godox SL150III LED Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  250,
        "oldPrice":  280,
        "rating":  4.9,
        "reviewsCount":  36,
        "stock":  6,
        "badge":  "الجيل الثالث فائق الهدوء",
        "image":  "images/prod_lgt_151.jpg",
        "images":  [
                       "images/prod_lgt_151.jpg"
                   ],
        "description":  "الجيل الثالث المتطور بقدرة 150 واط مع إمكانية إيقاف تشغيل المروحة بضغطة زر للصمت التام في الاستوديو أثناء تسجيل الصوت الحرج، وشدة سطوع ضخمة تصل إلى 73,600 لوكس.",
        "specs":  {
                      "القوة":  "150W Daylight 5600K",
                      "السطوع":  "73,600 Lux عند مسافة 1 متر",
                      "الوضع الصامت":  "Silent Mode لإيقاف المروحة كلياً",
                      "حامل المشتتات":  "Bowens Mount معدني متين",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-153",
        "name":  "Godox SL200III Daylight LED Video Light",
        "nameEn":  "Godox SL200III LED Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  325,
        "oldPrice":  360,
        "rating":  4.9,
        "reviewsCount":  29,
        "stock":  5,
        "badge":  "إضاءة سينمائية 200 واط",
        "image":  "images/prod_lgt_153.jpg",
        "images":  [
                       "images/prod_lgt_153.jpg"
                   ],
        "description":  "إضاءة استوديو سينمائية رائدة بقوة 200 واط تمنح تدفقاً ضوئياً مبهراً يصل إلى 95,600 لوكس، قادرة على إضاءة المشاهد الكبيرة وإنتاج الإعلانات التجارية بكفاءة واستقرار لوني تام.",
        "specs":  {
                      "القوة":  "200W Daylight 5600K",
                      "السطوع القصوى":  "95,600 Lux على مسافة 1 متر مع العاكس",
                      "التحكم":  "Godox Light App عبر الهاتف بمسافة تصل إلى 30 متراً",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-155",
        "name":  "Godox SL300III Daylight LED Video Light",
        "nameEn":  "Godox SL300III LED Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  400,
        "oldPrice":  450,
        "rating":  4.9,
        "reviewsCount":  22,
        "stock":  4,
        "badge":  "وحش السطوع 300 واط",
        "image":  "images/prod_lgt_155.jpg",
        "images":  [
                       "images/prod_lgt_155.jpg"
                   ],
        "description":  "أقوى رأس إضاءة في سلسلة SL الشهيرة؛ بقوة 300 واط وسطوع جبار يصل إلى 99,300 لوكس ليحاكي ضوء الشمس الطبيعي من خلال النوافذ أو السوفت بوكسات العملاقة في كبرى الاستوديوهات.",
        "specs":  {
                      "القوة الكهربائية":  "300W Daylight COB LED",
                      "السطوع":  "99,300 Lux على مسافة 1 متر",
                      "مؤشر الألوان":  "CRI 96 / TLCI 97 لأدق استنساخ ألوان سينمائي",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-157",
        "name":  "Godox LA150D Litemons Compact LED Light",
        "nameEn":  "Godox LA150D LED Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  230,
        "oldPrice":  260,
        "rating":  4.8,
        "reviewsCount":  38,
        "stock":  8,
        "badge":  "سلسلة Litemons المدمجة",
        "image":  "images/prod_lgt_157.jpg",
        "images":  [
                       "images/prod_lgt_157.jpg"
                   ],
        "description":  "إضاءة ليد احترافية تجمع بين القوة العالية 150 واط والوزن الخفيف جداً بهيكل مدمج يسهل حمله وتثبيته في الأماكن الضيقة والمواقع الخارجية، مع توافق كامل مع تطبيق الهاتف.",
        "specs":  {
                      "القوة":  "150W Daylight 5600K",
                      "الوزن":  "1.4 كجم فقط سهلة التنقل والتعليق",
                      "السطوع":  "84,800 Lux مع العاكس المرفق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-158",
        "name":  "Godox LA200D Litemons Compact LED Light",
        "nameEn":  "Godox LA200D LED Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  250,
        "oldPrice":  285,
        "rating":  4.9,
        "reviewsCount":  33,
        "stock":  6,
        "badge":  "200 واط خفيفة الوزن",
        "image":  "images/prod_lgt_158.jpg",
        "images":  [
                       "images/prod_lgt_158.jpg"
                   ],
        "description":  "رأس إضاءة بقوة 200 واط حقيقية بوزن مدمج يبلغ 1.4 كجم فقط؛ يوفر شدة إضاءة هائلة تصل إلى 101,000 لوكس للتصوير الفوتوغرافي والفيديو الاحترافي بأسعار اقتصادية وجودة موثوقة.",
        "specs":  {
                      "القوة":  "200W Daylight 5600K",
                      "السطوع":  "101,000 Lux على مسافة 1 متر مع العاكس",
                      "التأثيرات":  "8 تأثيرات ضوئية مدمجة FX للدراما والسينما",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-159",
        "name":  "Godox LA200Bi Litemons Bi-Color LED Light",
        "nameEn":  "Godox LA200Bi LED Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  320,
        "oldPrice":  355,
        "rating":  4.9,
        "reviewsCount":  27,
        "stock":  5,
        "badge":  "200 واط ألوان دافئة وباردة",
        "image":  "images/prod_lgt_159.jpg",
        "images":  [
                       "images/prod_lgt_159.jpg"
                   ],
        "description":  "توفر قوة إضاءة هائلة 200 واط مع حرارة لونية قابلة للتعديل من 2800K إلى 6500K بهيكل مدمج وسهل النقل، مما يجعلها الحل الأمثل لمصوري الفيديو المتنقلين وصناع المحتوى.",
        "specs":  {
                      "القوة والحرارة":  "200W مع مدى لوني 2800K - 6500K",
                      "التحكم":  "Godox Light App عبر البلوتوث",
                      "حامل التثبيت":  "Bowens Mount لجميع مشتتات الإضاءة العالمية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-162",
        "name":  "Godox ML60II Bi Portable Handheld LED",
        "nameEn":  "Godox ML60II Bi LED Light",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  175,
        "oldPrice":  195,
        "rating":  4.9,
        "reviewsCount":  38,
        "stock":  7,
        "badge":  "محمولة بحجم قبضة اليد",
        "image":  "images/prod_lgt_162.jpg",
        "images":  [
                       "images/prod_lgt_162.jpg"
                   ],
        "description":  "إضاءة استوديو سينمائية مدمجة للغاية بحجم قبضة اليد بقوة 70 واط تدعم التشغيل بالبطاريات المحمولة والكهرباء، مع حرارة لونية قابلة للتعديل 2800K-6500K وحقيبة حمل فاخرة.",
        "specs":  {
                      "القوة":  "70W Bi-Color 2800K-6500K",
                      "الوزن":  "500 جم فقط (فائقة الخفة والصغر)",
                      "التغذية الكهربائية":  "محول تيار متردد أو بطاريتي NP-F أو بطارية V-Mount",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-163",
        "name":  "Godox TL30 RGB Tube Light",
        "nameEn":  "Godox TL30 RGB Tube",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  75,
        "oldPrice":  88,
        "rating":  4.8,
        "reviewsCount":  61,
        "stock":  12,
        "badge":  "مغناطيسي ملون مدمج",
        "image":  "images/prod_lgt_163.jpg",
        "images":  [
                       "images/prod_lgt_163.jpg"
                   ],
        "description":  "أنبوب إضاءة RGB ملون بطول 30 سم مزود بمغناطيس مدمج في أطرافه لتثبيته فوراً على أي سطح معدني، يمنح 36,000 لوناً وتأثيرات سينمائية مبتكرة لإضاءة خلفيات التصوير والفيديوهات الموسيقية.",
        "specs":  {
                      "الألوان":  "RGB / CCT / HSI مع تحكم بـ 36,000 لون",
                      "المغناطيس":  "مغناطيس داخلي في الطرفين للتثبيت المباشر على الحديد",
                      "البطارية":  "بطارية ليثيوم مدمجة تشحن عبر USB-C",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-164",
        "name":  "Godox TL60 RGB Tube Light",
        "nameEn":  "Godox TL60 RGB Tube",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  180,
        "oldPrice":  210,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  6,
        "badge":  "أنبوب سينمائي 60 سم",
        "image":  "images/prod_lgt_164.jpg",
        "images":  [
                       "images/prod_lgt_164.jpg"
                   ],
        "description":  "أنبوب إضاءة سينمائي بطول 60 سم مع تحكم كامل بألوان الطيف ودرجات حرارة CCT من 2700K إلى 6500K، يدعم بروتوكول التحكم اللاسلكي DMX وتطبيق الهاتف الذكي مع بطارية تشغيل تدوم لأكثر من ساعتين.",
        "specs":  {
                      "الطول والقدرة":  "60 سم / قدرة 18W RGB Full Color",
                      "التحكم":  "تطبيق الهاتف + ريموت كنترول + DMX اللاسلكي",
                      "الملحقات":  "مشابك تعليق وحبال أمان وحقيبة مبطنة مشمولة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-165",
        "name":  "Godox AD200Pro II Pocket Flash",
        "nameEn":  "Godox AD200Pro II Flash",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  290,
        "oldPrice":  325,
        "rating":  4.9,
        "reviewsCount":  57,
        "stock":  7,
        "badge":  "الجيل الثاني الأحدث",
        "image":  "images/prod_lgt_165.jpg",
        "images":  [
                       "images/prod_lgt_165.jpg"
                   ],
        "description":  "فلاش الجيب المتنقل الأقوى في فئته بقوة 200 واط/ثانية مع رأسين قابلين للتبديل (رأس سبيدلايت ورأس لمبة عارية 360 درجة)، مزود بشاشة ملونة جديدة وإضاءة نمذجة ثنائية الألوان أقوى بكثير.",
        "specs":  {
                      "القوة":  "200Ws TTL / Manual Pocket Flash",
                      "الرؤوس المشمولة":  "Speedlight Head + Bare Bulb Head",
                      "سرعة التزامن":  "تزامن عالي السرعة HSS حتى 1/8000 ثانية",
                      "البطارية":  "بطارية ليثيوم 2900mAh تكفي 500 ومضة بكامل القوة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-166",
        "name":  "Godox AD400Pro All-in-One Outdoor Flash",
        "nameEn":  "Godox AD400Pro Flash",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  450,
        "oldPrice":  499,
        "rating":  4.9,
        "reviewsCount":  31,
        "stock":  4,
        "badge":  "400 واط خارجي احترافي",
        "image":  "images/prod_lgt_166.jpg",
        "images":  [
                       "images/prod_lgt_166.jpg"
                   ],
        "description":  "فلاش استوديو خارجي متكامل بقوة 400Ws مع زمن إعادة شحن فائق السرعة 0.01 - 0.9 ثانية واستقرار لوني مذهل في حدود ±75K عبر كامل مدى الطاقة، مع بطارية ليثيوم تكفي 390 ومضة كاملة.",
        "specs":  {
                      "القوة":  "400Ws All-in-One Outdoor Strobe",
                      "الاستقرار اللوني":  "وضع Color Stable Mode فائق الدقة",
                      "التوافق":  "دعم كامل لأنظمة Canon و Nikon و Sony و Fuji و Olympus",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-167",
        "name":  "Nanlite Forza 60B II Bi-Color LED Light",
        "nameEn":  "Nanlite Forza 60B II",
        "category":  "lighting",
        "brand":  "Nanlite",
        "price":  220,
        "oldPrice":  245,
        "rating":  4.9,
        "reviewsCount":  34,
        "stock":  6,
        "badge":  "سلسلة Forza فائقة الصغر",
        "image":  "images/prod_lgt_167.jpg",
        "images":  [
                       "images/prod_lgt_167.jpg"
                   ],
        "description":  "إضاءة نانلايت فورزا الجيل الثاني المدمجة ثنائية اللون 2700K-6500K مع مروحة صامتة للغاية ومقبض بطاريات مريح يتيح استخدامها محمولة باليد في المواقع الخارجية دون الحاجة لمصدر كهرباء.",
        "specs":  {
                      "القدرة":  "60W Bi-Color COB LED",
                      "الوزن":  "700 جم فقط لهيكل المصباح",
                      "التحكم":  "تطبيق NANLINK عبر البلوتوث و 2.4G",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-168",
        "name":  "Nanlite PavoTube II 6C RGB Light Tube",
        "nameEn":  "Nanlite PavoTube II 6C",
        "category":  "lighting",
        "brand":  "Nanlite",
        "price":  85,
        "oldPrice":  99,
        "rating":  4.9,
        "reviewsCount":  52,
        "stock":  9,
        "badge":  "إضاءة جيب مغناطيسية",
        "image":  "images/prod_lgt_168.jpg",
        "images":  [
                       "images/prod_lgt_168.jpg"
                   ],
        "description":  "أنبوب إضاءة جيب متعدد الألوان فائق الجودة بطول 25 سم، يحتوي على مغناطيسين قويين في الخلف لتركيبه الفوري على أي عمود أو سطح معدني، مع بطارية تدوم ساعة كاملة على أقصى سطوع.",
        "specs":  {
                      "الألوان":  "CCT 2700K-7500K + ألوان كاملة 36,000 RGB",
                      "المغناطيس":  "مغناطيس قوي مدمج في الظهر مع مسامير 1/4 بوصة",
                      "التأثيرات":  "15 تأثيراً ضوئياً مبرمجاً مسبقاً",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-169",
        "name":  "Godox QR-P90 Quick Release Parabolic Softbox",
        "nameEn":  "Godox QR-P90 Softbox",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  85,
        "oldPrice":  105,
        "rating":  4.9,
        "reviewsCount":  49,
        "stock":  8,
        "badge":  "فتح سريع بضغطة زر",
        "image":  "images/prod_lgt_169.jpg",
        "images":  [
                       "images/prod_lgt_169.jpg"
                   ],
        "description":  "سوفت بوكس بارابوليك عميق بقطر 90 سم بنظام الفتح السريع القابل للطي في ثوانٍ معدودة؛ يمنح ضوءاً ناعماً ومتدرجاً مع انعكاسات دائرية طبيعية ساحرة في عيون الشخصيات المصورة بفضل أضلاعه الـ 16 المتينة.",
        "specs":  {
                      "القطر":  "90 سم عميق Parabolic Design",
                      "نظام الفتح":  "Quick-Release بضغطة زر واحدة لكل ضلع",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي",
                      "الملحقات":  "مشتتان داخلي وخارجي وقماش شبكة توجيه Grid وحقيبة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "DJI-078",
        "name":  "DJI Osmo Mobile SE Smartphone Gimbal",
        "nameEn":  "DJI Osmo Mobile SE",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  75,
        "oldPrice":  89,
        "rating":  4.8,
        "reviewsCount":  73,
        "stock":  11,
        "badge":  "تثبيت ذكي للهواتف",
        "image":  "images/prod_dji_078.jpg",
        "images":  [
                       "images/prod_dji_078.jpg"
                   ],
        "description":  "مانع اهتزاز ذكي ثلاثي المحاور للهواتف الذكية مع مشبك مغناطيسي سريع الفك والتركيب، وتصميم قابل للطي، وتقنية التتبع التلقائي الذكي ActiveTrack 5.0 التي تبقي الهدف في منتصف الإطار أثناء الحركة.",
        "specs":  {
                      "التثبيت":  "3-Axis Stabilization ثلاثي المحاور",
                      "المشبك":  "Magnetic Phone Clamp مشبك مغناطيسي سريع",
                      "التتبع":  "ActiveTrack 5.0 لتتبع الوجوه والأشخاص",
                      "البطارية":  "حتى 8 ساعات تشغيل متواصل",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-DJI-079",
        "name":  "DJI Osmo Mobile 6 Smartphone Gimbal",
        "nameEn":  "DJI Osmo Mobile 6",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  89,
        "oldPrice":  110,
        "rating":  4.9,
        "reviewsCount":  92,
        "stock":  14,
        "badge":  "الأكثر تطوراً للهواتف",
        "image":  "images/prod_dji_079.jpg",
        "images":  [
                       "images/prod_dji_079.jpg"
                   ],
        "description":  "مانع الاهتزاز الرائد للهواتف مع ذراع تمديد مدمج بطول 21.5 سم لالتقاط صور السيلفي والزوايا المرتفعة، وعجلة تحكم جانبية لضبط الزووم والفوكس اليدوي بدقة، ولوحة معلومات مدمجة لعرض مستوى البطارية والوضع.",
        "specs":  {
                      "عصا التمديد":  "Extension Rod مدمجة بطول 215 مم",
                      "التحكم":  "Side Wheel للتحكم السلس بالزووم والفوكس",
                      "التتبع الذكي":  "ActiveTrack 6.0 لتتبع فائق الثبات",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "DJI-083",
        "name":  "DJI RS 3 Mini Lightweight Camera Gimbal",
        "nameEn":  "DJI RS 3 Mini",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  239,
        "oldPrice":  269,
        "rating":  4.9,
        "reviewsCount":  63,
        "stock":  7,
        "badge":  "خفيف الوزن 795 جم",
        "image":  "images/prod_dji_083.jpg",
        "images":  [
                       "images/prod_dji_083.jpg"
                   ],
        "description":  "أول مانع اهتزاز صغير من سلسلة Ronin مصمم خصيصاً لكاميرات الميرورليس بوزن 795 جرام فقط وقدرة حمل تصل إلى 2 كجم، مع تصوير عمودي مدمج أصلي Native Vertical دون الحاجة لأي ملحقات إضافية.",
        "specs":  {
                      "الوزن":  "795 جم فقط (أخف بنسبة 50% من RS 3)",
                      "الحمولة القصوى":  "2.0 كجم تدعم سوني A7 و كانون R5",
                      "التصوير العمودي":  "تحويل فوري إلى الوضع الرأسي للسوشال ميديا",
                      "الشاشة":  "شاشة لمسية ملونة 1.4 بوصة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-DJI-084",
        "name":  "DJI RS 4 Standard 3-Axis Gimbal",
        "nameEn":  "DJI RS 4 Standard",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  390,
        "oldPrice":  440,
        "rating":  4.9,
        "reviewsCount":  45,
        "stock":  6,
        "badge":  "الجيل الرابع الجديد",
        "image":  "images/prod_dji_084.jpg",
        "images":  [
                       "images/prod_dji_084.jpg"
                   ],
        "description":  "الجيل الرابع المطور مع أقفال محاور آلية سريعة الفتح والقفل من الجيل الثاني، وتصوير عمودي أصلي سلس، وخوارزميات تثبيت RS من الجيل الرابع تمنح ثباتاً استثنائياً حتى أثناء الركض وحركة الكاميرا السريعة.",
        "specs":  {
                      "الحمولة":  "3.0 كجم تدعم كاميرات الميرورليس مع عدسات 24-70mm",
                      "الأقفال الآلية":  "Automated Axis Locks للفتح الفوري بضغطة زر",
                      "التشغيل الرأسي":  "2nd-Gen Native Vertical Shooting",
                      "البطارية":  "تصل إلى 12 ساعة مع شحن سريع بقدرة 18 واط",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "DJI-085",
        "name":  "DJI RS 4 Combo Kit with Focus Pro Motor",
        "nameEn":  "DJI RS 4 Combo",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  480,
        "oldPrice":  530,
        "rating":  4.9,
        "reviewsCount":  38,
        "stock":  5,
        "badge":  "حزمة الكومبو الكاملة",
        "image":  "images/prod_dji_085.jpg",
        "images":  [
                       "images/prod_dji_085.jpg"
                   ],
        "description":  "حزمة الكومبو الاحترافية المتكاملة؛ تتضمن مانع الاهتزاز DJI RS 4 مع محرك الفوكس الجديد Focus Pro Motor ومقبض الحقيبة Briefcase Handle ومعدات تثبيت العدسة وحقيبة حمل صلبة فاخرة.",
        "specs":  {
                      "المحتويات":  "جيمبل RS 4 + محرك Focus Pro + مقبض حقيبة + حقيبة صلبة",
                      "محرك الفوكس":  "أسرع بنسبة 30% مع قضيب 15 مم وتروس العدسة",
                      "المقبض":  "Briefcase Handle لتصوير الزوايا المنخفضة المريحة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-DJI-088",
        "name":  "DJI RS 4 Pro Commercial Gimbal",
        "nameEn":  "DJI RS 4 Pro",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  640,
        "oldPrice":  710,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  4,
        "badge":  "كربون فايبر سينمائي",
        "image":  "images/prod_dji_088.jpg",
        "images":  [
                       "images/prod_dji_088.jpg"
                   ],
        "description":  "مانع الاهتزاز التجاري الرائد لكاميرات السينما مثل Sony FX6 و Canon C70 و RED؛ مصنع بأذرع من ألياف الكربون فايبر خفيفة الوزن وفائقة الصلابة مع عزم دوران محركات أقوى بنسبة 20% وحمولة 4.5 كجم.",
        "specs":  {
                      "الحمولة القصوى":  "4.5 كجم (10 أرطال) لكاميرات السينما الاحترافية",
                      "الهيكل":  "أذرع ألياف الكربون المنسوجة Carbon Fiber Arms",
                      "التوافق":  "دعم كامل لمنظومة التركيز البصري LiDAR وناقل الفيديو Transmission",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "DJI-089",
        "name":  "DJI RS 4 Pro Combo Kit with Transmission",
        "nameEn":  "DJI RS 4 Pro Combo",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  780,
        "oldPrice":  860,
        "rating":  4.9,
        "reviewsCount":  26,
        "stock":  3,
        "badge":  "قمة الإنتاج السينمائي",
        "image":  "images/prod_dji_089.jpg",
        "images":  [
                       "images/prod_dji_089.jpg"
                   ],
        "description":  "الحزمة السينمائية القصوى لشركات الإنتاج والمخرجين؛ تشمل مانع الاهتزاز RS 4 Pro مع محرك الفوكس فائق السرعة، ومقبض الحقيبة، ومحول Ronin RavenEye لإرسال الفيديو اللاسلكي بدقة 1080p إلى شاشات الهواتف والمخرجين.",
        "specs":  {
                      "المحتويات":  "جيمبل RS 4 Pro + محرك Focus Pro + ناقل صورة + مقبض حقيبة",
                      "نقل الفيديو":  "نقل إشارة صورة لاسلكية منخفضة التأخير إلى شاشات الطاقم",
                      "التحكم":  "تحكم عن بعد بحركة الجيمبل من خلال الهاتف أو المونيتور",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "DJI-092",
        "name":  "DJI Focus Pro Creator Combo",
        "nameEn":  "DJI Focus Pro Creator Combo",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  690,
        "oldPrice":  770,
        "rating":  4.9,
        "reviewsCount":  21,
        "stock":  3,
        "badge":  "فوكس ليدار LiDAR ثوري",
        "image":  "images/prod_dji_092.jpg",
        "images":  [
                       "images/prod_dji_092.jpg"
                   ],
        "description":  "نظام التركيز البصري المستقل المتطور الأول من دي جي آي؛ يجمع بين مستشعر LiDAR بمدى 20 متراً مع 76,800 نقطة قياس، ووحدة تحكم يدوية بمقبض دوار لاسلكي، ومحرك فوكس فائق القوة لتحويل أي عدسة سينمائية يدوية إلى أوتوفوكس ذكي.",
        "specs":  {
                      "مستشعر LiDAR":  "76,800 نقطة قياس ليزرية بمدى 20 متراً",
                      "الوحدة اليدوية":  "Focus Pro Hand Unit مع شاشة لمسية ومحرك اهتزازي",
                      "التوافق":  "يعمل بشكل مستقل مع أي كاميرا دون الحاجة لجيمبل",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "MON-449",
        "name":  "FeelWorld F6 Plus V2 6-inch Touchscreen Monitor",
        "nameEn":  "FeelWorld F6 Plus V2",
        "category":  "monitors",
        "brand":  "FeelWorld",
        "price":  180,
        "oldPrice":  205,
        "rating":  4.9,
        "reviewsCount":  62,
        "stock":  8,
        "badge":  "شاشة لمس 4K مع 3D LUT",
        "image":  "images/prod_mon_449.jpg",
        "images":  [
                       "images/prod_mon_449.jpg"
                   ],
        "description":  "شاشة مراقبة حقلية خفيفة الوزن 6 بوصة تعمل باللمس الكامل مع دعم استيراد ملفات 3D LUT عبر بطاقة SD، وتدعم إشارة 4K HDMI مع مخرج طاقة DC لتشغيل الكاميرا مباشرة ببطارية الشاشة.",
        "specs":  {
                      "الشاشة":  "6-inch IPS Touchscreen بدقة 1920x1080 Full HD",
                      "السطوع":  "450 nits مع زاوية رؤية 160 درجة",
                      "المداخل والمخارج":  "4K HDMI In \u0026 Loop Out",
                      "أدوات المساعدة":  "Waveform و Vectorscope و Focus Peaking و False Color",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "MON-450",
        "name":  "FeelWorld F5 Pro X 5.5-inch High Bright Monitor",
        "nameEn":  "FeelWorld F5 Pro X",
        "category":  "monitors",
        "brand":  "FeelWorld",
        "price":  145,
        "oldPrice":  165,
        "rating":  4.8,
        "reviewsCount":  44,
        "stock":  9,
        "badge":  "سطوع 1600 شمعة تحت الشمس",
        "image":  "images/prod_mon_450.jpg",
        "images":  [
                       "images/prod_mon_450.jpg"
                   ],
        "description":  "شاشة مراقبة فائقة السطوع بقوة 1600 nits تمنح رؤية واضحة ونقية لأدق تفاصيل المشهد في الهواء الطلق وتحت أشعة الشمس المباشرة دون الحاجة لغطاء شمسي، مع قاعدة خلفية لتركيب ناقل الصورة اللاسلكي.",
        "specs":  {
                      "السطوع":  "1600 nits Daylight Viewable فائقة السطوع",
                      "المقاس":  "5.5 بوصة IPS Touchscreen",
                      "قاعدة التركيب الخلفية":  "F970 Install and Power Kit لتركيب أجهزة الإرسال",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "MON-451",
        "name":  "FeelWorld LUT7 7-inch Ultra-Bright 2200nit Monitor",
        "nameEn":  "FeelWorld LUT7",
        "category":  "monitors",
        "brand":  "FeelWorld",
        "price":  225,
        "oldPrice":  255,
        "rating":  4.9,
        "reviewsCount":  51,
        "stock":  6,
        "badge":  "سطوع خارق 2200 nits",
        "image":  "images/prod_mon_451.jpg",
        "images":  [
                       "images/prod_mon_451.jpg"
                   ],
        "description":  "شاشة مخرجين عملاقة قياس 7 بوصة بسطوع أسطوري يبلغ 2200 nits مع حساس ضوء محيطي ذكي يضبط شدة السطوع تلقائياً وفقاً للبيئة، مما يجعلها مثالية للتصوير السينمائي الخارجي واستخدام الـ Steadicam.",
        "specs":  {
                      "السطوع":  "2200 nits فائقة القوة (رؤية تامة بوضح النهار)",
                      "الحجم والدقة":  "7 بوصة بدقة 1920x1200 ونسبة تباين 1200:1",
                      "الحساس الذكي":  "حساس إضاءة تلقائي مدمج لتوفير استهلاك الطاقة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "MON-452",
        "name":  "FeelWorld LUT7S Pro 7-inch 3G-SDI \u0026 HDMI Monitor",
        "nameEn":  "FeelWorld LUT7S Pro",
        "category":  "monitors",
        "brand":  "FeelWorld",
        "price":  375,
        "oldPrice":  415,
        "rating":  4.9,
        "reviewsCount":  28,
        "stock":  4,
        "badge":  "منافذ 3G-SDI السينمائية",
        "image":  "images/prod_mon_452.jpg",
        "images":  [
                       "images/prod_mon_452.jpg"
                   ],
        "description":  "شاشة المخرجين الاحترافية المجهزة بمنافذ 3G-SDI و HDMI لتوصيل كاميرات البث التلفزيوني والسينمائي، بسطوع 2200 nits ولوحة لمس متطورة وقاعدة خلفية مبتكرة لتثبيت وتغذية وحدات الإرسال اللاسلكي.",
        "specs":  {
                      "المنافذ":  "3G-SDI In/Out + 4K HDMI In/Out مع تحويل متبادل",
                      "السطوع":  "2200 nits Daylight Viewable",
                      "دعم الـ LUTs":  "تحميل حتى 50 ملف 3D LUT مخصص عبر SD Card",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "MON-453",
        "name":  "FeelWorld LUT11S 10.1-inch SDI/HDMI Studio Monitor",
        "nameEn":  "FeelWorld LUT11S",
        "category":  "monitors",
        "brand":  "FeelWorld",
        "price":  300,
        "oldPrice":  340,
        "rating":  4.9,
        "reviewsCount":  23,
        "stock":  4,
        "badge":  "شاشة مخرجين 10.1 بوصة",
        "image":  "images/prod_mon_453.jpg",
        "images":  [
                       "images/prod_mon_453.jpg"
                   ],
        "description":  "شاشة مخرج واستوديو عملاقة بحجم 10.1 بوصة وسطوع 2000 nits تدعم إشارات 3G-SDI و 4K HDMI، تتيح للمخرج ومدير التصوير ومهندس الفوكس رؤية دقيقة للألوان وتفاصيل الكادر في شاشة واحدة واضحة.",
        "specs":  {
                      "المقاس":  "10.1-inch IPS Full HD 1920x1200",
                      "السطوع":  "2000 cd/m² شديد السطوع مع زوايا رؤية 170°",
                      "المداخل":  "3G-SDI و HDMI مع مخارج Loop Out لمزيد من الشاشات",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-MON-454",
        "name":  "Desview T3 Teleprompter for Tablet \u0026 Smartphone",
        "nameEn":  "Desview T3 Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  115,
        "oldPrice":  135,
        "rating":  4.8,
        "reviewsCount":  57,
        "stock":  11,
        "badge":  "تلقين احترافي لصناع المحتوى",
        "image":  "images/prod_mon_454.jpg",
        "images":  [
                       "images/prod_mon_454.jpg"
                   ],
        "description":  "جهاز تلقين نصوص محمول يدعم الأجهزة اللوحية حتى مقاس 11 بوصة والهواتف الذكية مع زجاج بصري مقسم للحزم الضوئية 70/30 بدون أي تأثير على جودة الصورة، ويشمل ريموت تحكم بلوتوث وحلقات تثبيت لجميع العدسات.",
        "specs":  {
                      "الزجاج البصري":  "70/30 Beam Splitter Glass عالي النفاذية",
                      "التوافق":  "حلقات مهايئ لجميع مقاسات العدسات من 49 مم حتى 82 مم",
                      "التحكم":  "جهاز تحكم عن بعد بلوتوث للتحكم بسرعة النص وتوقف القراءة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "MON-455",
        "name":  "Desview T12S Professional Teleprompter",
        "nameEn":  "Desview T12S Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  150,
        "oldPrice":  175,
        "rating":  4.9,
        "reviewsCount":  36,
        "stock":  7,
        "badge":  "هيكل ألومنيوم للاستوديو",
        "image":  "images/prod_mon_455.jpg",
        "images":  [
                       "images/prod_mon_455.jpg"
                   ],
        "description":  "جهاز تيليبرومبتر احترافي بهيكل ألومنيوم كامل يدعم أجهزة الآيباد برو الكبيرة مقاس 12.9 بوصة، مصمم لقنوات الأخبار والمؤتمرات والدورات التدريبية لتقديم أداء واثق ومباشر أمام الكاميرا دون نسيان النص.",
        "specs":  {
                      "حجم الشاشة":  "يدعم أجهزة لوحية حتى 12.9 بوصة (iPad Pro)",
                      "الهيكل":  "معدن ألومنيوم متين مع حامل صلب يثبت على الترايبود",
                      "زاوية الرؤية":  "زاوية قابلة للتعديل حتى 45 درجة لقراءة مريحة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "MON-456",
        "name":  "Desview TP150 Heavy Duty Studio Teleprompter",
        "nameEn":  "Desview TP150 Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  225,
        "oldPrice":  260,
        "rating":  4.9,
        "reviewsCount":  24,
        "stock":  5,
        "badge":  "للاستوديوهات التلفزيونية",
        "image":  "images/prod_mon_456.jpg",
        "images":  [
                       "images/prod_mon_456.jpg"
                   ],
        "description":  "منظومة تلقين استوديو احترافية للخدمة الشاقة مزودة بقضبان قضيبية مزدوجة 15 مم، وقناع عزل قماشي مانع لتسرب الضوء، وزجاج مقسى مقاس 15 بوصة يمنح وضوح قراءة يصل إلى 4 أمتار أمام الكاميرا.",
        "specs":  {
                      "المقاس البصري":  "شاشة زجاجية مقاس 15 بوصة لقراءة مريحة من مسافة بعيدة",
                      "نظام التثبيت":  "قضبان 15mm Rod System قياسية لتوزيع الوزن",
                      "الملحقات":  "حقيبة صلبة متنقلة Hard Case لحماية الزجاج أثناء النقل",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "MON-457",
        "name":  "Lilliput A7s 7-inch 4K Field Monitor",
        "nameEn":  "Lilliput A7s Monitor",
        "category":  "monitors",
        "brand":  "Lilliput",
        "price":  145,
        "oldPrice":  165,
        "rating":  4.8,
        "reviewsCount":  59,
        "stock":  8,
        "badge":  "شاشة 7 بوصة اقتصادية",
        "image":  "images/prod_mon_457.jpg",
        "images":  [
                       "images/prod_mon_457.jpg"
                   ],
        "description":  "شاشة مراقبة حقلية بحجم 7 بوصة بدقة Full HD تدعم إدخال إشارات 4K HDMI، تأتي مع إطار حماية سيليكون أحمر ممتص للصدمات وغطاء شمسي قابل للطي، وتعد الخيار الأكثر موثوقية واقتصادية للطلاب والمستقلين.",
        "specs":  {
                      "الشاشة":  "7-inch IPS بدقة 1920x1200 ونسبة تباين 1000:1",
                      "المداخل":  "4K HDMI In \u0026 Loop Out",
                      "الحماية":  "حافظة سيليكون واقية من السقوط وغطاء للشمس مشمول",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-329",
        "name":  "SmallRig Cage Kit for Sony ZV-E10 II 4867",
        "nameEn":  "SmallRig Cage for Sony ZV-E10 II",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  55,
        "oldPrice":  65,
        "rating":  4.9,
        "reviewsCount":  47,
        "stock":  10,
        "badge":  "مصمم خصيصاً لـ ZV-E10 II",
        "image":  "images/prod_acc_329.jpg",
        "images":  [
                       "images/prod_acc_329.jpg"
                   ],
        "description":  "قفص حماية متكامل مخصص لكاميرا سوني ZV-E10 II يمنح حماية شاملة مع قبضة مريحة مدمجة لراحة اليد، ويشمل مشبك كابل كابلات HDMI/USB لمنع تلف المنافذ وقاعدة Arca-Swiss سريعة التركيب على الجيمبل والترايبود.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى CNC فائق المتانة والخفة",
                      "القاعدة":  "Arca-Swiss مدمجة للتركيب الفوري على مانع اهتزاز DJI RS",
                      "نقاط التثبيت":  "فتحات 1/4 بوصة و ARRI 3/8 بوصة وحذاء بارد Cold Shoe",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-330",
        "name":  "SmallRig HawkLock Quick Release Cage for Sony a7R V",
        "nameEn":  "SmallRig HawkLock Cage Sony a7R V",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  85,
        "oldPrice":  100,
        "rating":  4.9,
        "reviewsCount":  38,
        "stock":  7,
        "badge":  "نظام HawkLock السريع",
        "image":  "images/prod_acc_330.jpg",
        "images":  [
                       "images/prod_acc_330.jpg"
                   ],
        "description":  "قفص الحماية الأكثر تطوراً لكاميرات سوني a7R V و a7 IV بتقنية HawkLock الحاصلة على براءة اختراع التي تتيح تركيب المقابض والملحقات بضغطة زر واحدة بدون مسامير، مع وصول كامل لكافة أزرار الكاميرا ومنافذ البطارية.",
        "specs":  {
                      "التوافق":  "Sony Alpha 7R V و Alpha 7 IV و Alpha 7S III",
                      "نظام التحرير":  "HawkLock Quick Release حاصل على براءة اختراع",
                      "القفل المزدوج":  "تثبيت سفلي وجانبي لمنع أي حركة أو التواء نهائياً",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-338",
        "name":  "SmallRig Full Cage for Sony FX3 / FX30 4183",
        "nameEn":  "SmallRig Cage for Sony FX3 FX30",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  90,
        "oldPrice":  105,
        "rating":  4.9,
        "reviewsCount":  54,
        "stock":  8,
        "badge":  "لسينما سوني FX3 / FX30",
        "image":  "images/prod_acc_338.jpg",
        "images":  [
                       "images/prod_acc_338.jpg"
                   ],
        "description":  "القفص السينمائي المخصص لكاميرتي Sony FX3 و FX30؛ مصمم هندسياً ليتوافق تماماً مع مقبض الصوت الأصلي Sony XLR Top Handle، ويوفر حماية للهيكل ومنافذ متعددة لتركيب شاشات المراقبة والميكروفونات والمات بوكس.",
        "specs":  {
                      "التوافق":  "متوافق 100% مع مقبض الصوت الأصلي XLR Handle",
                      "سكة ناتو":  "سكة NATO rail علوية قابلة للفك لسهولة تركيب المقابض",
                      "مشبك الكابل":  "مشبك حماية مدمج لكابل HDMI الأصلي",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-347",
        "name":  "SmallRig Cage with Silicone Grip for Sony ZV-E10",
        "nameEn":  "SmallRig Cage Sony ZV-E10 4293",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  45,
        "oldPrice":  55,
        "rating":  4.8,
        "reviewsCount":  61,
        "stock":  12,
        "badge":  "قبضة سيليكون مريحة",
        "image":  "images/prod_acc_347.jpg",
        "images":  [
                       "images/prod_acc_347.jpg"
                   ],
        "description":  "قفص حماية خفيف الوزن مزود بقبضة سيليكون جانبية مريحة تعزز ثبات الكاميرا في يد المصور أثناء تصوير الفلوجات الطويلة، مع فتحات تثبيت مخصصة للميكروفونات وإضاءات الليد الصغيرة.",
        "specs":  {
                      "القبضة":  "مقبض سيليكون مدمج ناعم ومريح ومقاوم للانزلاق",
                      "القفل":  "تثبيت عبر برغي 1/4 وقفل جانبي ضد الالتواء",
                      "الوزن":  "148 جم فقط خفيف للغاية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-348",
        "name":  "SmallRig Full Camera Cage for Sony ZV-E1 4256",
        "nameEn":  "SmallRig Cage for Sony ZV-E1",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  45,
        "oldPrice":  55,
        "rating":  4.9,
        "reviewsCount":  39,
        "stock":  7,
        "badge":  "لكاميرا الفل فريم ZV-E1",
        "image":  "images/prod_acc_348.jpg",
        "images":  [
                       "images/prod_acc_348.jpg"
                   ],
        "description":  "قفص حماية متين مصمم خصيصاً لكاميرا سوني ZV-E1 الفل فريم، يلتف حول الهيكل بانسيابية تامة لحمايته من الصدمات مع إبقاء منافذ التبريد والبطارية والشاشة المتقلبة حرة الحركة تماماً.",
        "specs":  {
                      "التوافق":  "Sony ZV-E1 Full-Frame Vlog Camera",
                      "القاعدة":  "Arca-Type Quick Release متوافقة مع مثبتات DJI RS",
                      "النقاط":  "منافذ 1/4-20 و ARRI 3/8 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-349",
        "name":  "SmallRig Black Mamba Cage for Canon EOS R5 Mark II",
        "nameEn":  "SmallRig Black Mamba Cage R5 II",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  70,
        "oldPrice":  85,
        "rating":  4.9,
        "reviewsCount":  33,
        "stock":  5,
        "badge":  "سلسلة Black Mamba الفاخرة",
        "image":  "images/prod_acc_349.jpg",
        "images":  [
                       "images/prod_acc_349.jpg"
                   ],
        "description":  "القفص الأكثر أناقة وانسيابية لكاميرا كانون R5 Mark II بتصميم مستوحى من جلد الأفعى يمنح قبضة محكمة للغاية ووصولاً كاملاً لكافة أزرار التحكم العلوية والخلفية للكاميرا دون أي عائق.",
        "specs":  {
                      "التصميم":  "Black Mamba الأيقوني الأنيق خفيف الوزن",
                      "التوافق":  "Canon EOS R5 Mark II و EOS R6 Mark II",
                      "الوزن":  "160 جم مصقول بالأكسدة السوداء غير اللامعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-352",
        "name":  "SmallRig Camera Cage for Canon EOS R6 Mark II 4159",
        "nameEn":  "SmallRig Cage Canon R6 II",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  60,
        "oldPrice":  75,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  6,
        "badge":  "حماية كاملة لكاميرا كانون R6 II",
        "image":  "images/prod_acc_352.jpg",
        "images":  [
                       "images/prod_acc_352.jpg"
                   ],
        "description":  "قفص مخصص لكاميرا كانون EOS R6 Mark II يوفر تثبيتاً آمناً ثلاثي النقاط يمنع دوران الكاميرا واهتزازها داخل القفص، مع قاعدة مدمجة بنظام أركا سويس لسرعة التبديل بين الترايبود والجيمبل.",
        "specs":  {
                      "التوافق":  "Canon EOS R6 Mark II",
                      "التثبيت":  "برغي 1/4 سفلي ومحولين جانبيين لقفل محكم لا يتزحزح",
                      "الوصول":  "مساحة مخصصة لفتح باب البطارية والشاشة الجانبية بحرية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-354",
        "name":  "SmallRig NATO Top Handle with Quick Release 1955",
        "nameEn":  "SmallRig NATO Top Handle",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  40,
        "oldPrice":  50,
        "rating":  4.9,
        "reviewsCount":  75,
        "stock":  13,
        "badge":  "المقبض الأكثر طلباً عالمياً",
        "image":  "images/prod_acc_354.jpg",
        "images":  [
                       "images/prod_acc_354.jpg"
                   ],
        "description":  "المقبض العلوي الكلاسيكي سريع الفك والتركيب بنظام سكة ناتو القياسية؛ يوفر قبضة مريحة وموزونة لحمل الكاميرا وتصوير اللقطات المنخفضة، ومزود بحذاءين باردين Cold Shoe لتثبيت الميكروفون والشاشة.",
        "specs":  {
                      "نظام التركيب":  "NATO Rail Quick Release بدون أدوات أو مسامير",
                      "الأحذية الباردة":  "حذاء بارد أمامي وحذاء بارد خلفي لمزيد من الملحقات",
                      "المادة":  "ألومنيوم مفرغ هندسياً للمتانة وخفة الوزن",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-355",
        "name":  "SmallRig Wooden Side Handle with ARRI Rosette",
        "nameEn":  "SmallRig Wooden Side Handle",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  65,
        "oldPrice":  80,
        "rating":  4.9,
        "reviewsCount":  29,
        "stock":  6,
        "badge":  "خشب الورد البرازيلي الفاخر",
        "image":  "images/prod_acc_355.jpg",
        "images":  [
                       "images/prod_acc_355.jpg"
                   ],
        "description":  "مقبض جانبي خشبي فاخر منحوت يدوياً من خشب الورد الطبيعي لراحة فائقة في اليد أثناء التصوير الطويل، مزود بقرص روزيت ARRI Rosette القياسي الذي يتيح دوران المقبض وتعديل زاويته بحرية 360 درجة.",
        "specs":  {
                      "المادة":  "خشب ورد طبيعي مصقول + سبائك ألومنيوم CNC",
                      "التثبيت":  "ARRI Standard Rosette M6 مع إمكانية الدوران 360°",
                      "الاستخدام":  "يمكن استخدامه لليد اليمنى أو اليسرى بسهولة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-ACC-356",
        "name":  "SmallRig Mini Matte Box Lightweight Carbon Fiber",
        "nameEn":  "SmallRig Mini Matte Box",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  75,
        "oldPrice":  90,
        "rating":  4.9,
        "reviewsCount":  48,
        "stock":  9,
        "badge":  "كربون فايبر مانع للوهج",
        "image":  "images/prod_acc_356.jpg",
        "images":  [
                       "images/prod_acc_356.jpg"
                   ],
        "description":  "مات بوكس سينمائي مدمج وفائق الخفة بوزن 150 جم فقط مع علم علوي مصنوع من ألياف الكربون فايبر لمنع الانعكاسات الضوئية وتشتت الضوء في العدسة، يدعم تركيب الفلاتر المربعة 4x5.65 والفلاتر الدائرية معاً.",
        "specs":  {
                      "الوزن":  "150 جم فقط (لا يثقل الكاميرا أثناء العمل على الجيمبل)",
                      "العلم العلوي":  "Top Flag من ألياف الكربون قابل للطي 180 درجة",
                      "الملحقات":  "4 حلقات مهايئ (67 مم، 72 مم، 77 مم، 82 مم)",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "STN-300",
        "name":  "TOPCAM Pro Dolly Wheels VX-600",
        "nameEn":  "TOPCAM Pro Dolly VX-600",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  30,
        "oldPrice":  40,
        "rating":  4.8,
        "reviewsCount":  41,
        "stock":  12,
        "badge":  "عجلات دولي قابلة للطي",
        "image":  "images/prod_stn_300.jpg",
        "images":  [
                       "images/prod_stn_300.jpg"
                   ],
        "description":  "قاعدة عجلات دولي ثلاثية احترافية قابلة للطي لتحويل أي ترايبود كاميرا أو ستاند إضاءة إلى منصة متحركة بسلاسة فائقة، مع فرامل أمان مستقلة على كل عجلة لمنع الانزلاق أثناء التصوير الثابت.",
        "specs":  {
                      "العجلات":  "عجلات مطاطية مقواة بقطر 3 بوصة مع دوران 360 درجة",
                      "الأقفال":  "فرامل Step-on Lock مستقلة لكل عجلة",
                      "الحمولة":  "تتحمل أوزاناً حتى 15 كجم مع أذرع تمديد قابلة للتعديل",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-STN-301",
        "name":  "TOPCAM Pro Video Monopod MP208F with VT1510",
        "nameEn":  "TOPCAM Pro Monopod MP208F",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  60,
        "oldPrice":  75,
        "rating":  4.8,
        "reviewsCount":  37,
        "stock":  8,
        "badge":  "مونوبود هيدروليكي بأرجل ثلاثية",
        "image":  "images/prod_stn_301.jpg",
        "images":  [
                       "images/prod_stn_301.jpg"
                   ],
        "description":  "مونوبود فيديو احترافي مع قاعدة ثلاثية الأرجل قابلة للطي ورأس هيدروليكي ناعم الحركة؛ يمنحك حرية الحركة السريعة في الأعراس والمؤتمرات مع ثبات الترايبود وإمكانية الدوران البانورامي 360 درجة.",
        "specs":  {
                      "الارتفاع الأقصى":  "180 سم / الارتفاع الأدنى: 65 سم",
                      "الرأس":  "رأس هايدروليك Fluid Drag Head مع ذراع تحكم طويل",
                      "القاعدة":  "قاعدة ثلاثية منخفضة مزودة بمفصل كروي للإمالة السلسة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-STN-302",
        "name":  "TOPCAM Pro Carbon Fiber Monopod MP4208F",
        "nameEn":  "TOPCAM Pro Carbon Monopod",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  110,
        "oldPrice":  130,
        "rating":  4.9,
        "reviewsCount":  29,
        "stock":  5,
        "badge":  "كربون فايبر 8 طبقات فائق الخفة",
        "image":  "images/prod_stn_302.jpg",
        "images":  [
                       "images/prod_stn_302.jpg"
                   ],
        "description":  "مونوبود فيديو فاخر مصنوع من ألياف الكربون فايبر بـ 8 طبقات مقواة لتقليل الوزن وامتصاص الاهتزازات كلياً، مزود برأس هايدروليك سينمائي VT-3510 بنظام موازنة دقيق لعدسات التيليفوتو الثقيلة.",
        "specs":  {
                      "المادة":  "8-Layer Carbon Fiber ألياف كربون عالية الصلابة",
                      "الرأس السينمائي":  "رأس هايدروليكي ثنائي الاتجاه Pan \u0026 Tilt Fluid Head",
                      "الحمولة القصوى":  "10 كجم لكاميرات السينما والعدسات الكبيرة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "STN-307",
        "name":  "TOPCAM Pro Heavy Duty Studio C-Stand with Boom",
        "nameEn":  "TOPCAM Pro Studio C-Stand",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  85,
        "oldPrice":  105,
        "rating":  4.9,
        "reviewsCount":  46,
        "stock":  9,
        "badge":  "ستاند استوديو حديد للخدمة الشاقة",
        "image":  "images/prod_stn_307.jpg",
        "images":  [
                       "images/prod_stn_307.jpg"
                   ],
        "description":  "ستاند الإضاءة السينمائي القياسي C-Stand من الفولاذ المقاوم للصدأ المطلي بالكروم؛ مزود بذراع بوم بطول 1.27 متر ورأسي مسك Grip Heads لحمل السوفت بوكسات الكبيرة والألواح العاكسة بأعلى درجات الأمان.",
        "specs":  {
                      "الارتفاع الأقصى":  "3.3 متر / سعة التحمل: 20 كجم",
                      "الأرجل":  "أرجل سلحفاة Turtle Base بتصميم متداخل يسهل رص الأكياس الرملية",
                      "الملحقات":  "ذراع إمساك 127 سم + رأسي مسك بفتحات متعددة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "STN-311",
        "name":  "TOPCAM Pro Horizontal Arm Tripod T1008R",
        "nameEn":  "TOPCAM Pro Overhead Tripod",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  80,
        "oldPrice":  95,
        "rating":  4.9,
        "reviewsCount":  34,
        "stock":  7,
        "badge":  "تصوير علوي 90 درجة للمنتجات",
        "image":  "images/prod_stn_311.jpg",
        "images":  [
                       "images/prod_stn_311.jpg"
                   ],
        "description":  "ترايبود احترافي متعدد الأوضاع مزود بعمود أوسط يميل أفقياً بزاوية 90 درجة لالتقاط صور وفيديوهات المنتجات والطبخ والأنشطة اليدوية من الأعلى مباشرة (Overhead Flat-Lay) بكل ثبات وسهولة.",
        "specs":  {
                      "العمود الأفقي":  "Multi-Angle Center Column يميل 90° ويدور 360°",
                      "الرأس":  "رأس كروي بانورامي 360 درجة مع مؤشر درجات دقيق",
                      "التحويل":  "إمكانية تحويل إحدى الأرجل إلى مونوبود مستقل",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-ACC-342",
        "name":  "SmallRig VB50 Mini V-Mount Battery 50Wh",
        "nameEn":  "SmallRig VB50 V-Mount Battery",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  120,
        "oldPrice":  140,
        "rating":  4.9,
        "reviewsCount":  58,
        "stock":  8,
        "badge":  "بحجم راحة اليد وشاشة OLED",
        "image":  "images/prod_acc_342.jpg",
        "images":  [
                       "images/prod_acc_342.jpg"
                   ],
        "description":  "بطارية سينمائية فائقة الصغر بحجم راحة اليد بسعة 50 واط/ساعة تدعم الشحن فائق السرعة عبر USB-C بقوة 45W، مزودة بشاشة أوليد لعرض نسبة الشحن والوقت المتبقي ومنافذ D-Tap و USB-A لتشغيل الكاميرا والشاشة معاً.",
        "specs":  {
                      "السعة":  "50Wh / 14.8V 3400mAh (مسموحة بحقيبة اليد بالطيران)",
                      "المنافذ":  "USB-C PD 45W + USB-A + D-Tap + مخرجين DC",
                      "الشاشة":  "شاشة OLED ذكية تعرض نسبة البطارية وجهد الشحن",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-344",
        "name":  "SmallRig VB99 Pro Mini V-Mount Battery 99Wh",
        "nameEn":  "SmallRig VB99 Pro V-Mount",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  200,
        "oldPrice":  230,
        "rating":  4.9,
        "reviewsCount":  43,
        "stock":  6,
        "badge":  "إصدار Pro مع شحن 100W PD",
        "image":  "images/prod_acc_344.jpg",
        "images":  [
                       "images/prod_acc_344.jpg"
                   ],
        "description":  "الإصدار الاحترافي الأحدث بسعة 99 واط/ساعة مصنوع بهيكل ألومنيوم مقاوم للصدمات ومزود بمنفذ USB-C ثنائي الاتجاه بقوة 100W PD لتشغيل وشحن أجهزة اللابتوب والكاميرات السينمائية بأعلى كفاءة وسرعة.",
        "specs":  {
                      "السعة":  "99Wh (الحد الأقصى المسموح به للسفر الجوي العالمي)",
                      "شحن فائق":  "منفذ USB-C يدعم إدخال وإخراج 100W Fast Charging",
                      "المتانة":  "واجهة زجاجية مقواة وهيكل ألومنيوم مصفح ومقاوم للسقوط",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-345",
        "name":  "SmallRig VB155 Mini V-Mount Battery 155Wh",
        "nameEn":  "SmallRig VB155 V-Mount",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  240,
        "oldPrice":  275,
        "rating":  4.9,
        "reviewsCount":  31,
        "stock":  5,
        "badge":  "سعة عملاقة 155 واط/ساعة",
        "image":  "images/prod_acc_345.jpg",
        "images":  [
                       "images/prod_acc_345.jpg"
                   ],
        "description":  "بطارية سينمائية مدمجة بسعة عملاقة 155 واط/ساعة تتيح تشغيل منصة الكاميرا الكاملة مع الشاشة ونظام الفوكس اللاسلكي طوال يوم التصوير دون الحاجة لتغيير البطارية، مع دعم USB-C PD 65W.",
        "specs":  {
                      "السعة":  "155Wh / 10,500mAh طاقة تكفي يوم تصوير كامل",
                      "المنافذ":  "USB-C PD 65W + USB-A + D-Tap + مخارج DC متعددة",
                      "الحماية":  "شريحة BMS ذكية للحماية من الشحن الزائد والحرارة المرتفعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-ACC-407",
        "name":  "Ulanzi BP04 Camera Travel Backpack",
        "nameEn":  "Ulanzi BP04 Backpack",
        "category":  "bags",
        "brand":  "Ulanzi",
        "price":  130,
        "oldPrice":  150,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  7,
        "badge":  "مقاومة للماء وسحابات ضد السرقة",
        "image":  "images/prod_acc_407.jpg",
        "images":  [
                       "images/prod_acc_407.jpg"
                   ],
        "description":  "حقيبة ظهر احترافية للرحلات والتصوير الخارجي مصنوعة من نسيج نايلون باليستي طارد للماء مع سحابات YKK محكمة ضد السرقة، تتسع لكاميرتين احترافيتين مع 4 عدسات وجهاز لابتوب مقاس 16 بوصة.",
        "specs":  {
                      "المادة":  "Waterproof Ballistic Nylon مقاوم للخدش والتمزق",
                      "جيب اللابتوب":  "حيز مبطن مخصص لأجهزة اللابتوب حتى 16 بوصة",
                      "الوصول السريع":  "منفذ جانبي سريع للوصول للكاميرا دون خلع الحقيبة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EXC-ACC-408",
        "name":  "Ulanzi BP09 Professional Camera Backpack 22L",
        "nameEn":  "Ulanzi BP09 Backpack 22L",
        "category":  "bags",
        "brand":  "Ulanzi",
        "price":  100,
        "oldPrice":  120,
        "rating":  4.9,
        "reviewsCount":  56,
        "stock":  9,
        "badge":  "سعة 22 لتر الأكثر شعبية",
        "image":  "images/prod_acc_408.jpg",
        "images":  [
                       "images/prod_acc_408.jpg"
                   ],
        "description":  "حقيبة مصورين عصرية بسعة 22 لتر تتميز بتقسيمات داخلية قابلة للتعديل بحرية، وأحزمة أمامية لتثبيت الترايبود، وظهر مريح مبطن بنظام تهوية شبكي يخفف الضغط على العمود الفقري أثناء المشي الطويل.",
        "specs":  {
                      "السعة":  "22L تتسع لكاميرا بودي + 4 عدسات + درون صغير",
                      "أحزمة الترايبود":  "أحزمة سريعة سفلية وجانبية لحمل الترايبود الثقيل",
                      "الوزن":  "1.7 كجم فارغة وموزعة الوزن هندسياً",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-023",
        "name":  "Sony FE 50mm F1.2 GM",
        "nameEn":  "Sony FE 50mm F1.2 GM",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1370,
        "oldPrice":  1490,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  4,
        "badge":  "فتحة F1.2 الأسطورية",
        "image":  "images/prod_len_023.jpg",
        "images":  [
                       "images/prod_len_023.jpg"
                   ],
        "description":  "القمة البصرية لعدسات سوني القياسية بفتحة F1.2 فائقة الاتساع والسطوع، تمنح عزلاً بصرياً سينمائياً ساحراً وحدّة مذهلة حتى عند أقصى فتحة، مع 4 محركات XD Linear لسرعة تركيز فائقة.",
        "specs":  {
                      "البعد البؤري":  "50mm Standard Prime",
                      "فتحة العدسة القصوى":  "F/1.2 دائرية بـ 11 شفرة",
                      "المحركات":  "4 محركات XD Linear فائقة القوة والهدوء",
                      "الوزن":  "778 جم فقط",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LEN-025",
        "name":  "Sony FE 24-70mm F2.8 GM",
        "nameEn":  "Sony FE 24-70mm F2.8 GM",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1130,
        "oldPrice":  1250,
        "rating":  4.9,
        "reviewsCount":  57,
        "stock":  5,
        "badge":  "العدسة القياسية الاحترافية",
        "image":  "images/prod_len_025.jpg",
        "images":  [
                       "images/prod_len_025.jpg"
                   ],
        "description":  "عدسة الزووم الاحترافية الأكثر اعتماداً في تصوير الحفلات والمناسبات والأفلام الوثائقية بفتحة F2.8 ثابتة، وتباين لوني رائد لسلسلة G Master مع طلاء Nano AR المضاد للانعكاسات.",
        "specs":  {
                      "نطاق الزووم":  "24-70mm Standard Zoom",
                      "الفتحة":  "F/2.8 ثابتة على كامل المدى",
                      "المحرك":  "Direct Drive SSM عالي الدقة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "AUD-058",
        "name":  "RODE Wireless PRO Dual Channel Wireless System",
        "nameEn":  "RODE Wireless PRO",
        "category":  "audio",
        "brand":  "RODE",
        "price":  340,
        "oldPrice":  375,
        "rating":  4.9,
        "reviewsCount":  38,
        "stock":  6,
        "badge":  "32-Bit Float و Timecode",
        "image":  "images/prod_aud_058.jpg",
        "images":  [
                       "images/prod_aud_058.jpg"
                   ],
        "description":  "نظام الميكروفون اللاسلكي الأكثر تطوراً في العالم؛ يوفر تسجيلاً داخلياً عائماً 32-bit Float ومزامنة التايم كود Timecode الاحترافية بين الكاميرات، مع علبة شحن ذكية تضم ميكروفونين لافالير احترافيين.",
        "specs":  {
                      "التسجيل الداخلي":  "32-bit Float On-board Recording بذاكرة 32GB لكل مرسل",
                      "مزامنة الكاميرات":  "مولد تايم كود Timecode Generator مدمج",
                      "الملحقات المشمولة":  "مايكان Lavalier II + علبة شحن + كابلات احترافية",
                      "المدى اللاسلكي":  "260 متراً عبر تردد مشفر 2.4GHz",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "LGT-170",
        "name":  "Godox V1 Round Head Camera Flash",
        "nameEn":  "Godox V1 Flash",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  220,
        "oldPrice":  245,
        "rating":  4.9,
        "reviewsCount":  64,
        "stock":  9,
        "badge":  "رأس دائري بضوء ناعم",
        "image":  "images/prod_lgt_170.jpg",
        "images":  [
                       "images/prod_lgt_170.jpg"
                   ],
        "description":  "سبيدلايت احترافي برأس دائري ثوري يمنح توزيعاً ضوئياً ناعماً ومتدرجاً يضاهي إضاءات الاستوديو الكبيرة، مزود بحامل مغناطيسي فوري للمشتتات وبطارية ليثيوم خارقة تكفي 480 ومضة بقوة كاملة.",
        "specs":  {
                      "القوة":  "76Ws Round Flash Head",
                      "البطارية":  "ليثيوم قابلة للشحن 7.2V/2600mAh",
                      "التوافق":  "TTL و Manual و High-Speed Sync 1/8000s",
                      "الحامل المغناطيسي":  "Magnetic Accessory Port لتثبيت المشتتات بثانية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "ACC-339",
        "name":  "SmallRig V-Mount Battery Mount Plate 4505B",
        "nameEn":  "SmallRig V-Mount Battery Plate",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  115,
        "oldPrice":  130,
        "rating":  4.8,
        "reviewsCount":  27,
        "stock":  7,
        "badge":  "قاعدة طاقة سينمائية",
        "image":  "images/prod_acc_339.jpg",
        "images":  [
                       "images/prod_acc_339.jpg"
                   ],
        "description":  "لوح تثبيت بطاريات V-Mount متطور للكاميرات السينمائية مزود بمنافذ طاقة متعددة (D-Tap و USB-C PD ومخارج DC 8V/12V)، مع مشبك قضبان 15 مم يتيح موازنة وزن الكاميرا على الكتف.",
        "specs":  {
                      "المنافذ":  "D-Tap + USB-C PD + DC 8V + DC 12V",
                      "التثبيت":  "مشابك متوافقة مع قضبان 15mm LWS Rods",
                      "الهيكل":  "سبائك ألومنيوم مفرغة عالية التحمل",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-CAM-003",
        "name":  "Sony A7 V - Full-frame Mirrorless Camera Body Only",
        "nameEn":  "Sony A7 V - Full-frame Mirrorless Camera Body Only",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  2100,
        "oldPrice":  2352,
        "rating":  4.9,
        "reviewsCount":  37,
        "stock":  8,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_cam_003.jpg",
        "images":  [
                       "images/prod_cam_003.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-CAM-007",
        "name":  "Sony FX2 Digital Cinema Camera",
        "nameEn":  "Sony FX2 Digital Cinema Camera",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  2000,
        "oldPrice":  2240,
        "rating":  4.9,
        "reviewsCount":  37,
        "stock":  3,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_cam_007.jpg",
        "images":  [
                       "images/prod_cam_007.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-CAM-008",
        "name":  "Sony FX3a Full-Frame Cinema Camera",
        "nameEn":  "Sony FX3a Full-Frame Cinema Camera",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  2550,
        "oldPrice":  2856,
        "rating":  4.9,
        "reviewsCount":  21,
        "stock":  6,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_cam_008.jpg",
        "images":  [
                       "images/prod_cam_008.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-CAM-010",
        "name":  "Sony ZV-E10 Mirrorless Camera with 16-50mm Lens",
        "nameEn":  "Sony ZV-E10 Mirrorless Camera with 16-50mm Lens",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  580,
        "oldPrice":  650,
        "rating":  4.9,
        "reviewsCount":  22,
        "stock":  4,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_cam_010.jpg",
        "images":  [
                       "images/prod_cam_010.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-CAM-011",
        "name":  "Sony a6400 with 16-50 lens",
        "nameEn":  "Sony a6400 with 16-50 lens",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  650,
        "oldPrice":  728,
        "rating":  4.9,
        "reviewsCount":  33,
        "stock":  11,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_cam_011.jpg",
        "images":  [
                       "images/prod_cam_011.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-CAM-012",
        "name":  "Sony a6700 Body Only",
        "nameEn":  "Sony a6700 Body Only",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  1050,
        "oldPrice":  1176,
        "rating":  4.9,
        "reviewsCount":  47,
        "stock":  6,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_cam_012.jpg",
        "images":  [
                       "images/prod_cam_012.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-CAM-013",
        "name":  "Sony a7C II Mirrorless Body only",
        "nameEn":  "Sony a7C II Mirrorless Body only",
        "category":  "cameras",
        "brand":  "Sony",
        "price":  1350,
        "oldPrice":  1512,
        "rating":  4.9,
        "reviewsCount":  39,
        "stock":  7,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_cam_013.jpg",
        "images":  [
                       "images/prod_cam_013.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-096",
        "name":  "DJI POCKET 3 STANDARD",
        "nameEn":  "DJI POCKET 3 STANDARD",
        "category":  "cameras",
        "brand":  "DJI",
        "price":  479,
        "oldPrice":  536,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  3,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_dji_096.jpg",
        "images":  [
                       "images/prod_dji_096.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-097",
        "name":  "DJI POCKET 3 CREATOR COMPO",
        "nameEn":  "DJI POCKET 3 CREATOR COMPO",
        "category":  "cameras",
        "brand":  "DJI",
        "price":  530,
        "oldPrice":  594,
        "rating":  4.9,
        "reviewsCount":  27,
        "stock":  11,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_dji_097.jpg",
        "images":  [
                       "images/prod_dji_097.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-098",
        "name":  "DJI POCKET 4 STANDARD",
        "nameEn":  "DJI POCKET 4 STANDARD",
        "category":  "cameras",
        "brand":  "DJI",
        "price":  520,
        "oldPrice":  582,
        "rating":  4.9,
        "reviewsCount":  27,
        "stock":  5,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_dji_098.jpg",
        "images":  [
                       "images/prod_dji_098.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-099",
        "name":  "DJI POCKET 4 CREATOR COMPO",
        "nameEn":  "DJI POCKET 4 CREATOR COMPO",
        "category":  "cameras",
        "brand":  "DJI",
        "price":  610,
        "oldPrice":  683,
        "rating":  4.9,
        "reviewsCount":  40,
        "stock":  4,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_dji_099.jpg",
        "images":  [
                       "images/prod_dji_099.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-100",
        "name":  "DJI ACTION Camera 6 ADVENTURE COMPO",
        "nameEn":  "DJI ACTION Camera 6 ADVENTURE COMPO",
        "category":  "cameras",
        "brand":  "DJI",
        "price":  450,
        "oldPrice":  504,
        "rating":  4.9,
        "reviewsCount":  27,
        "stock":  8,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_dji_100.jpg",
        "images":  [
                       "images/prod_dji_100.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-101",
        "name":  "DJI OSMO Camera 360 STANDARD",
        "nameEn":  "DJI OSMO Camera 360 STANDARD",
        "category":  "cameras",
        "brand":  "DJI",
        "price":  450,
        "oldPrice":  504,
        "rating":  4.9,
        "reviewsCount":  49,
        "stock":  11,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_dji_101.jpg",
        "images":  [
                       "images/prod_dji_101.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-102",
        "name":  "DJI OSMO Camera 360 ADVENTURE COMPO",
        "nameEn":  "DJI OSMO Camera 360 ADVENTURE COMPO",
        "category":  "cameras",
        "brand":  "DJI",
        "price":  530,
        "oldPrice":  594,
        "rating":  4.9,
        "reviewsCount":  41,
        "stock":  7,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_dji_102.jpg",
        "images":  [
                       "images/prod_dji_102.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-CAM-106",
        "name":  "Canon EOS R100 18-45mm",
        "nameEn":  "Canon EOS R100 18-45mm",
        "category":  "cameras",
        "brand":  "Canon",
        "price":  400,
        "oldPrice":  448,
        "rating":  4.9,
        "reviewsCount":  23,
        "stock":  11,
        "badge":  "كاميرا سينمائية",
        "image":  "images/prod_cam_106.jpg",
        "images":  [
                       "images/prod_cam_106.jpg"
                   ],
        "description":  "كاميرا احترافية متطورة تلبي تطلعات المصورين وصناع الأفلام بدقة تسجيل سينمائية 4K فائقة الوضوح ومستشعر عالي الحساسية للضوء مع نظام تركيز تلقائي ذكي وتثبيت بصري فعال لمنع الاهتزاز.",
        "specs":  {
                      "المستشعر":  "High Performance Digital Sensor",
                      "الفيديو":  "4K Ultra HD Cinema Recording",
                      "التركيز":  "Advanced Hybrid Phase Detection AF",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-147",
        "name":  "Godox sl60II",
        "nameEn":  "Godox sl60II",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  100,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  46,
        "stock":  4,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_147.jpg",
        "images":  [
                       "images/prod_lgt_147.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-148",
        "name":  "Godox sl60II bi",
        "nameEn":  "Godox sl60II bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  135,
        "oldPrice":  151,
        "rating":  4.9,
        "reviewsCount":  48,
        "stock":  5,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_148.jpg",
        "images":  [
                       "images/prod_lgt_148.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-149",
        "name":  "Godox SL100D",
        "nameEn":  "Godox SL100D",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  150,
        "oldPrice":  168,
        "rating":  4.9,
        "reviewsCount":  23,
        "stock":  7,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_149.jpg",
        "images":  [
                       "images/prod_lgt_149.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-150",
        "name":  "Godox SL100BI",
        "nameEn":  "Godox SL100BI",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  170,
        "oldPrice":  190,
        "rating":  4.9,
        "reviewsCount":  41,
        "stock":  8,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_150.jpg",
        "images":  [
                       "images/prod_lgt_150.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-151",
        "name":  "Godox sl 150 III",
        "nameEn":  "Godox sl 150 III",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  250,
        "oldPrice":  280,
        "rating":  4.9,
        "reviewsCount":  57,
        "stock":  6,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_151.jpg",
        "images":  [
                       "images/prod_lgt_151.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-152",
        "name":  "Godox sl 150 III bi",
        "nameEn":  "Godox sl 150 III bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  325,
        "oldPrice":  364,
        "rating":  4.9,
        "reviewsCount":  47,
        "stock":  9,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_152.jpg",
        "images":  [
                       "images/prod_lgt_152.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-153",
        "name":  "Godox sl 200 III",
        "nameEn":  "Godox sl 200 III",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  325,
        "oldPrice":  364,
        "rating":  4.9,
        "reviewsCount":  51,
        "stock":  4,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_153.jpg",
        "images":  [
                       "images/prod_lgt_153.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-154",
        "name":  "Godox sl 200 III bi",
        "nameEn":  "Godox sl 200 III bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  375,
        "oldPrice":  420,
        "rating":  4.9,
        "reviewsCount":  39,
        "stock":  10,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_154.jpg",
        "images":  [
                       "images/prod_lgt_154.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-155",
        "name":  "Godox sl300 III",
        "nameEn":  "Godox sl300 III",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  400,
        "oldPrice":  448,
        "rating":  4.9,
        "reviewsCount":  56,
        "stock":  8,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_155.jpg",
        "images":  [
                       "images/prod_lgt_155.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-156",
        "name":  "Godox sl300 III bi",
        "nameEn":  "Godox sl300 III bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  525,
        "oldPrice":  588,
        "rating":  4.9,
        "reviewsCount":  21,
        "stock":  8,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_156.jpg",
        "images":  [
                       "images/prod_lgt_156.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-157",
        "name":  "Godox la 150",
        "nameEn":  "Godox la 150",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  230,
        "oldPrice":  258,
        "rating":  4.9,
        "reviewsCount":  39,
        "stock":  3,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_157.jpg",
        "images":  [
                       "images/prod_lgt_157.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-158",
        "name":  "Godox la 200",
        "nameEn":  "Godox la 200",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  250,
        "oldPrice":  280,
        "rating":  4.9,
        "reviewsCount":  22,
        "stock":  10,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_158.jpg",
        "images":  [
                       "images/prod_lgt_158.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-159",
        "name":  "Godox la 200 bi",
        "nameEn":  "Godox la 200 bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  320,
        "oldPrice":  358,
        "rating":  4.9,
        "reviewsCount":  19,
        "stock":  11,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_159.jpg",
        "images":  [
                       "images/prod_lgt_159.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-160",
        "name":  "Godox la 300 bi (kit1)",
        "nameEn":  "Godox la 300 bi (kit1)",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  425,
        "oldPrice":  476,
        "rating":  4.9,
        "reviewsCount":  29,
        "stock":  8,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_160.jpg",
        "images":  [
                       "images/prod_lgt_160.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-161",
        "name":  "Godox la200 rgb (kit1)",
        "nameEn":  "Godox la200 rgb (kit1)",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  375,
        "oldPrice":  420,
        "rating":  4.9,
        "reviewsCount":  44,
        "stock":  5,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_161.jpg",
        "images":  [
                       "images/prod_lgt_161.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-162",
        "name":  "Godox la300 rgb (kit1)",
        "nameEn":  "Godox la300 rgb (kit1)",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  500,
        "oldPrice":  560,
        "rating":  4.9,
        "reviewsCount":  27,
        "stock":  9,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_162.jpg",
        "images":  [
                       "images/prod_lgt_162.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-163",
        "name":  "Godox la 600 bi (kit1)",
        "nameEn":  "Godox la 600 bi (kit1)",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  675,
        "oldPrice":  756,
        "rating":  4.9,
        "reviewsCount":  35,
        "stock":  7,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_163.jpg",
        "images":  [
                       "images/prod_lgt_163.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-164",
        "name":  "Godox la 600 rgb (kit1)",
        "nameEn":  "Godox la 600 rgb (kit1)",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  800,
        "oldPrice":  896,
        "rating":  4.9,
        "reviewsCount":  47,
        "stock":  11,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_164.jpg",
        "images":  [
                       "images/prod_lgt_164.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-165",
        "name":  "Godox le 200 bi",
        "nameEn":  "Godox le 200 bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  275,
        "oldPrice":  308,
        "rating":  4.9,
        "reviewsCount":  22,
        "stock":  6,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_165.jpg",
        "images":  [
                       "images/prod_lgt_165.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-166",
        "name":  "Godox le 300 bi",
        "nameEn":  "Godox le 300 bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  325,
        "oldPrice":  364,
        "rating":  4.9,
        "reviewsCount":  28,
        "stock":  8,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_166.jpg",
        "images":  [
                       "images/prod_lgt_166.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-167",
        "name":  "Godox Le 600 Bi",
        "nameEn":  "Godox Le 600 Bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  550,
        "oldPrice":  616,
        "rating":  4.9,
        "reviewsCount":  54,
        "stock":  11,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_167.jpg",
        "images":  [
                       "images/prod_lgt_167.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-168",
        "name":  "Godox ml 100 bi",
        "nameEn":  "Godox ml 100 bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  200,
        "oldPrice":  224,
        "rating":  4.9,
        "reviewsCount":  48,
        "stock":  4,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_168.jpg",
        "images":  [
                       "images/prod_lgt_168.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-169",
        "name":  "Godox ml 100 bi (kit2)",
        "nameEn":  "Godox ml 100 bi (kit2)",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  250,
        "oldPrice":  280,
        "rating":  4.9,
        "reviewsCount":  39,
        "stock":  7,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_169.jpg",
        "images":  [
                       "images/prod_lgt_169.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-170",
        "name":  "Godox ml 60 II bi",
        "nameEn":  "Godox ml 60 II bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  160,
        "oldPrice":  179,
        "rating":  4.9,
        "reviewsCount":  17,
        "stock":  11,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_170.jpg",
        "images":  [
                       "images/prod_lgt_170.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-171",
        "name":  "Godox ml 60 II bi (kit2)",
        "nameEn":  "Godox ml 60 II bi (kit2)",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  200,
        "oldPrice":  224,
        "rating":  4.9,
        "reviewsCount":  25,
        "stock":  4,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_171.jpg",
        "images":  [
                       "images/prod_lgt_171.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-172",
        "name":  "Godox ml 100 rgb (kit1)",
        "nameEn":  "Godox ml 100 rgb (kit1)",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  300,
        "oldPrice":  336,
        "rating":  4.9,
        "reviewsCount":  19,
        "stock":  6,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_172.jpg",
        "images":  [
                       "images/prod_lgt_172.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-173",
        "name":  "Godox ml 150",
        "nameEn":  "Godox ml 150",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  300,
        "oldPrice":  336,
        "rating":  4.9,
        "reviewsCount":  32,
        "stock":  4,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_173.jpg",
        "images":  [
                       "images/prod_lgt_173.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-174",
        "name":  "Godox Vl 150 II",
        "nameEn":  "Godox Vl 150 II",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  350,
        "oldPrice":  392,
        "rating":  4.9,
        "reviewsCount":  23,
        "stock":  8,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_174.jpg",
        "images":  [
                       "images/prod_lgt_174.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-175",
        "name":  "Godox vl 200 II",
        "nameEn":  "Godox vl 200 II",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  400,
        "oldPrice":  448,
        "rating":  4.9,
        "reviewsCount":  37,
        "stock":  3,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_175.jpg",
        "images":  [
                       "images/prod_lgt_175.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-176",
        "name":  "Godox VL 300 II",
        "nameEn":  "Godox VL 300 II",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  580,
        "oldPrice":  650,
        "rating":  4.9,
        "reviewsCount":  57,
        "stock":  4,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_176.jpg",
        "images":  [
                       "images/prod_lgt_176.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-177",
        "name":  "Godox fv 150",
        "nameEn":  "Godox fv 150",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  325,
        "oldPrice":  364,
        "rating":  4.9,
        "reviewsCount":  23,
        "stock":  11,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_177.jpg",
        "images":  [
                       "images/prod_lgt_177.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-178",
        "name":  "Godox fv 200",
        "nameEn":  "Godox fv 200",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  425,
        "oldPrice":  476,
        "rating":  4.9,
        "reviewsCount":  31,
        "stock":  9,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_178.jpg",
        "images":  [
                       "images/prod_lgt_178.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-179",
        "name":  "Godox godox lp1200bi",
        "nameEn":  "Godox godox lp1200bi",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  200,
        "oldPrice":  224,
        "rating":  4.9,
        "reviewsCount":  37,
        "stock":  9,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_179.jpg",
        "images":  [
                       "images/prod_lgt_179.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-180",
        "name":  "Godox LDX100R",
        "nameEn":  "Godox LDX100R",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  330,
        "oldPrice":  370,
        "rating":  4.9,
        "reviewsCount":  54,
        "stock":  5,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_180.jpg",
        "images":  [
                       "images/prod_lgt_180.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LGT-181",
        "name":  "Godox LDX50R",
        "nameEn":  "Godox LDX50R",
        "category":  "lighting",
        "brand":  "Godox",
        "price":  190,
        "oldPrice":  213,
        "rating":  4.9,
        "reviewsCount":  33,
        "stock":  5,
        "badge":  "إضاءة استوديو",
        "image":  "images/prod_lgt_181.jpg",
        "images":  [
                       "images/prod_lgt_181.jpg"
                   ],
        "description":  "إضاءة ليد احترافية مستمرة بتدفق ضوئي قوي ومستقر ومؤشر دقة ألوان فائق CRI 96+ لإعادة إنتاج درجات البشرة الطبيعية بواقعية تامة، تدعم التحكم اللاسلكي وحامل البوينز العالمي.",
        "specs":  {
                      "مؤشر الألوان":  "CRI 96+ / TLCI 97+ لألوان سينمائية طبيعية",
                      "الحامل":  "حامل بوينز Bowens Mount القياسي لجميع المشتتات",
                      "التحكم":  "تعديل دقيق للسطوع مع تحكم عبر التطبيق",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-078",
        "name":  "DJI MOBILE OM SE",
        "nameEn":  "DJI MOBILE OM SE",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  75,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  22,
        "stock":  5,
        "badge":  "مانع اهتزاز ذكي",
        "image":  "images/prod_dji_078.jpg",
        "images":  [
                       "images/prod_dji_078.jpg"
                   ],
        "description":  "مانع اهتزاز محوري احترافي يوفر سلاسة سينمائية فائقة لحركة الكاميرا والهواتف مع خوارزميات تثبيت متطورة ومحركات قوية وأوضاع تصوير ذكية تضمن ثبات اللقطات أثناء الحركة السريعة.",
        "specs":  {
                      "التثبيت":  "3-Axis Motorized Stabilization",
                      "التحكم":  "بلوتوث مدمج مع تحكم بالغالق والتتبع التلقائي",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-079",
        "name":  "DJI OSMO MOBILE Om 6",
        "nameEn":  "DJI OSMO MOBILE Om 6",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  89,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  27,
        "stock":  11,
        "badge":  "مانع اهتزاز ذكي",
        "image":  "images/prod_dji_079.jpg",
        "images":  [
                       "images/prod_dji_079.jpg"
                   ],
        "description":  "مانع اهتزاز محوري احترافي يوفر سلاسة سينمائية فائقة لحركة الكاميرا والهواتف مع خوارزميات تثبيت متطورة ومحركات قوية وأوضاع تصوير ذكية تضمن ثبات اللقطات أثناء الحركة السريعة.",
        "specs":  {
                      "التثبيت":  "3-Axis Motorized Stabilization",
                      "التحكم":  "بلوتوث مدمج مع تحكم بالغالق والتتبع التلقائي",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-080",
        "name":  "DJI OSMO MOBILE 7",
        "nameEn":  "DJI OSMO MOBILE 7",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  80,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  26,
        "stock":  10,
        "badge":  "مانع اهتزاز ذكي",
        "image":  "images/prod_dji_080.jpg",
        "images":  [
                       "images/prod_dji_080.jpg"
                   ],
        "description":  "مانع اهتزاز محوري احترافي يوفر سلاسة سينمائية فائقة لحركة الكاميرا والهواتف مع خوارزميات تثبيت متطورة ومحركات قوية وأوضاع تصوير ذكية تضمن ثبات اللقطات أثناء الحركة السريعة.",
        "specs":  {
                      "التثبيت":  "3-Axis Motorized Stabilization",
                      "التحكم":  "بلوتوث مدمج مع تحكم بالغالق والتتبع التلقائي",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-081",
        "name":  "DJI OSMO MOBILE 7P",
        "nameEn":  "DJI OSMO MOBILE 7P",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  110,
        "oldPrice":  123,
        "rating":  4.9,
        "reviewsCount":  54,
        "stock":  10,
        "badge":  "مانع اهتزاز ذكي",
        "image":  "images/prod_dji_081.jpg",
        "images":  [
                       "images/prod_dji_081.jpg"
                   ],
        "description":  "مانع اهتزاز محوري احترافي يوفر سلاسة سينمائية فائقة لحركة الكاميرا والهواتف مع خوارزميات تثبيت متطورة ومحركات قوية وأوضاع تصوير ذكية تضمن ثبات اللقطات أثناء الحركة السريعة.",
        "specs":  {
                      "التثبيت":  "3-Axis Motorized Stabilization",
                      "التحكم":  "بلوتوث مدمج مع تحكم بالغالق والتتبع التلقائي",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-082",
        "name":  "DJI OSMO MOBILE 8",
        "nameEn":  "DJI OSMO MOBILE 8",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  135,
        "oldPrice":  151,
        "rating":  4.9,
        "reviewsCount":  30,
        "stock":  9,
        "badge":  "مانع اهتزاز ذكي",
        "image":  "images/prod_dji_082.jpg",
        "images":  [
                       "images/prod_dji_082.jpg"
                   ],
        "description":  "مانع اهتزاز محوري احترافي يوفر سلاسة سينمائية فائقة لحركة الكاميرا والهواتف مع خوارزميات تثبيت متطورة ومحركات قوية وأوضاع تصوير ذكية تضمن ثبات اللقطات أثناء الحركة السريعة.",
        "specs":  {
                      "التثبيت":  "3-Axis Motorized Stabilization",
                      "التحكم":  "بلوتوث مدمج مع تحكم بالغالق والتتبع التلقائي",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-084",
        "name":  "DJI RS 4 MINI",
        "nameEn":  "DJI RS 4 MINI",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  310,
        "oldPrice":  347,
        "rating":  4.9,
        "reviewsCount":  26,
        "stock":  5,
        "badge":  "مانع اهتزاز ذكي",
        "image":  "images/prod_dji_084.jpg",
        "images":  [
                       "images/prod_dji_084.jpg"
                   ],
        "description":  "مانع اهتزاز محوري احترافي يوفر سلاسة سينمائية فائقة لحركة الكاميرا والهواتف مع خوارزميات تثبيت متطورة ومحركات قوية وأوضاع تصوير ذكية تضمن ثبات اللقطات أثناء الحركة السريعة.",
        "specs":  {
                      "التثبيت":  "3-Axis Motorized Stabilization",
                      "التحكم":  "بلوتوث مدمج مع تحكم بالغالق والتتبع التلقائي",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-085",
        "name":  "DJI RS 4  MINI COMPO",
        "nameEn":  "DJI RS 4  MINI COMPO",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  370,
        "oldPrice":  414,
        "rating":  4.9,
        "reviewsCount":  46,
        "stock":  6,
        "badge":  "مانع اهتزاز ذكي",
        "image":  "images/prod_dji_085.jpg",
        "images":  [
                       "images/prod_dji_085.jpg"
                   ],
        "description":  "مانع اهتزاز محوري احترافي يوفر سلاسة سينمائية فائقة لحركة الكاميرا والهواتف مع خوارزميات تثبيت متطورة ومحركات قوية وأوضاع تصوير ذكية تضمن ثبات اللقطات أثناء الحركة السريعة.",
        "specs":  {
                      "التثبيت":  "3-Axis Motorized Stabilization",
                      "التحكم":  "بلوتوث مدمج مع تحكم بالغالق والتتبع التلقائي",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-DJI-087",
        "name":  "DJI RS 4 COMPO",
        "nameEn":  "DJI RS 4 COMPO",
        "category":  "gimbals",
        "brand":  "DJI",
        "price":  480,
        "oldPrice":  538,
        "rating":  4.9,
        "reviewsCount":  19,
        "stock":  8,
        "badge":  "مانع اهتزاز ذكي",
        "image":  "images/prod_dji_087.jpg",
        "images":  [
                       "images/prod_dji_087.jpg"
                   ],
        "description":  "مانع اهتزاز محوري احترافي يوفر سلاسة سينمائية فائقة لحركة الكاميرا والهواتف مع خوارزميات تثبيت متطورة ومحركات قوية وأوضاع تصوير ذكية تضمن ثبات اللقطات أثناء الحركة السريعة.",
        "specs":  {
                      "التثبيت":  "3-Axis Motorized Stabilization",
                      "التحكم":  "بلوتوث مدمج مع تحكم بالغالق والتتبع التلقائي",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-015",
        "name":  "SONY FE 100mm F2.8 Macro GM OSS",
        "nameEn":  "SONY FE 100mm F2.8 Macro GM OSS",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1090,
        "oldPrice":  1221,
        "rating":  4.9,
        "reviewsCount":  32,
        "stock":  5,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_015.jpg",
        "images":  [
                       "images/prod_len_015.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-017",
        "name":  "SONY FE 85mm F1.4 GM",
        "nameEn":  "SONY FE 85mm F1.4 GM",
        "category":  "filters",
        "brand":  "Sony",
        "price":  890,
        "oldPrice":  997,
        "rating":  4.9,
        "reviewsCount":  38,
        "stock":  7,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_017.jpg",
        "images":  [
                       "images/prod_len_017.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-019",
        "name":  "SONY FE 16-35mm F2.8 GM",
        "nameEn":  "SONY FE 16-35mm F2.8 GM",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1260,
        "oldPrice":  1411,
        "rating":  4.9,
        "reviewsCount":  24,
        "stock":  9,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_019.jpg",
        "images":  [
                       "images/prod_len_019.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-021",
        "name":  "SONY FE 70-200mm F2.8 GM OSS",
        "nameEn":  "SONY FE 70-200mm F2.8 GM OSS",
        "category":  "filters",
        "brand":  "Sony",
        "price":  1370,
        "oldPrice":  1534,
        "rating":  4.9,
        "reviewsCount":  27,
        "stock":  11,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_021.jpg",
        "images":  [
                       "images/prod_len_021.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-029",
        "name":  "SONY E 18-135mm F3.5-5.6 OSS",
        "nameEn":  "SONY E 18-135mm F3.5-5.6 OSS",
        "category":  "filters",
        "brand":  "Sony",
        "price":  420,
        "oldPrice":  470,
        "rating":  4.9,
        "reviewsCount":  29,
        "stock":  7,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_029.jpg",
        "images":  [
                       "images/prod_len_029.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-030",
        "name":  "SONY FE 24-105mm F4 G OSS Lens",
        "nameEn":  "SONY FE 24-105mm F4 G OSS Lens",
        "category":  "filters",
        "brand":  "Sony",
        "price":  650,
        "oldPrice":  728,
        "rating":  4.9,
        "reviewsCount":  34,
        "stock":  7,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_030.jpg",
        "images":  [
                       "images/prod_len_030.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-031",
        "name":  "SONYFE 85mm F1.8",
        "nameEn":  "SONYFE 85mm F1.8",
        "category":  "filters",
        "brand":  "Sony",
        "price":  400,
        "oldPrice":  448,
        "rating":  4.9,
        "reviewsCount":  30,
        "stock":  7,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_031.jpg",
        "images":  [
                       "images/prod_len_031.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-033",
        "name":  "SIGMA 24-70mm F2.8 DG DN II for SONY",
        "nameEn":  "SIGMA 24-70mm F2.8 DG DN II for SONY",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  820,
        "oldPrice":  918,
        "rating":  4.9,
        "reviewsCount":  54,
        "stock":  8,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_033.jpg",
        "images":  [
                       "images/prod_len_033.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-034",
        "name":  "SIGMA 24mm F/1.4 DG DN",
        "nameEn":  "SIGMA 24mm F/1.4 DG DN",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  600,
        "oldPrice":  672,
        "rating":  4.9,
        "reviewsCount":  46,
        "stock":  11,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_034.jpg",
        "images":  [
                       "images/prod_len_034.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-035",
        "name":  "SIGMA 35MM F 1.4 DG DN",
        "nameEn":  "SIGMA 35MM F 1.4 DG DN",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  660,
        "oldPrice":  739,
        "rating":  4.9,
        "reviewsCount":  28,
        "stock":  11,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_035.jpg",
        "images":  [
                       "images/prod_len_035.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-036",
        "name":  "SIGMA 50mm f/1.4 DG HSM Art",
        "nameEn":  "SIGMA 50mm f/1.4 DG HSM Art",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  660,
        "oldPrice":  739,
        "rating":  4.9,
        "reviewsCount":  30,
        "stock":  3,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_036.jpg",
        "images":  [
                       "images/prod_len_036.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-037",
        "name":  "SIGMA 14-24mm f/2.8 DG DN Art",
        "nameEn":  "SIGMA 14-24mm f/2.8 DG DN Art",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  1040,
        "oldPrice":  1165,
        "rating":  4.9,
        "reviewsCount":  40,
        "stock":  3,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_037.jpg",
        "images":  [
                       "images/prod_len_037.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-038",
        "name":  "SIGMA 16mm f/1.4 DG DN",
        "nameEn":  "SIGMA 16mm f/1.4 DG DN",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  330,
        "oldPrice":  370,
        "rating":  4.9,
        "reviewsCount":  20,
        "stock":  9,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_038.jpg",
        "images":  [
                       "images/prod_len_038.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-039",
        "name":  "SIGMA 18-50mm f/2.8 DC DN Contemporary",
        "nameEn":  "SIGMA 18-50mm f/2.8 DC DN Contemporary",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  420,
        "oldPrice":  470,
        "rating":  4.9,
        "reviewsCount":  25,
        "stock":  3,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_039.jpg",
        "images":  [
                       "images/prod_len_039.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-040",
        "name":  "SIGMA 85mm f/1.4 DG DN Art",
        "nameEn":  "SIGMA 85mm f/1.4 DG DN Art",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  740,
        "oldPrice":  829,
        "rating":  4.9,
        "reviewsCount":  24,
        "stock":  10,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_040.jpg",
        "images":  [
                       "images/prod_len_040.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-041",
        "name":  "SIGMA 28-70MM F/2.8  DG DN",
        "nameEn":  "SIGMA 28-70MM F/2.8  DG DN",
        "category":  "filters",
        "brand":  "Sigma",
        "price":  630,
        "oldPrice":  706,
        "rating":  4.9,
        "reviewsCount":  35,
        "stock":  10,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_041.jpg",
        "images":  [
                       "images/prod_len_041.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-124",
        "name":  "Canon rf 50mm f/1.8 STM",
        "nameEn":  "Canon rf 50mm f/1.8 STM",
        "category":  "filters",
        "brand":  "Canon",
        "price":  170,
        "oldPrice":  190,
        "rating":  4.9,
        "reviewsCount":  48,
        "stock":  6,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_124.jpg",
        "images":  [
                       "images/prod_len_124.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-125",
        "name":  "Canon rf 16mm f/2.8 STM",
        "nameEn":  "Canon rf 16mm f/2.8 STM",
        "category":  "filters",
        "brand":  "Canon",
        "price":  250,
        "oldPrice":  280,
        "rating":  4.9,
        "reviewsCount":  17,
        "stock":  6,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_125.jpg",
        "images":  [
                       "images/prod_len_125.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-126",
        "name":  "Canon rf 35mm f/1.8 IS Macro STM",
        "nameEn":  "Canon rf 35mm f/1.8 IS Macro STM",
        "category":  "filters",
        "brand":  "Canon",
        "price":  410,
        "oldPrice":  459,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  10,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_126.jpg",
        "images":  [
                       "images/prod_len_126.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-127",
        "name":  "Canon rf 85mm f/2 IS Macro STM",
        "nameEn":  "Canon rf 85mm f/2 IS Macro STM",
        "category":  "filters",
        "brand":  "Canon",
        "price":  460,
        "oldPrice":  515,
        "rating":  4.9,
        "reviewsCount":  51,
        "stock":  11,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_127.jpg",
        "images":  [
                       "images/prod_len_127.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-128",
        "name":  "Canon rf 24-105mm f/4-7.1 IS STM",
        "nameEn":  "Canon rf 24-105mm f/4-7.1 IS STM",
        "category":  "filters",
        "brand":  "Canon",
        "price":  370,
        "oldPrice":  414,
        "rating":  4.9,
        "reviewsCount":  36,
        "stock":  5,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_128.jpg",
        "images":  [
                       "images/prod_len_128.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-129",
        "name":  "Canon rf 24-105mm f/4L IS USM",
        "nameEn":  "Canon rf 24-105mm f/4L IS USM",
        "category":  "filters",
        "brand":  "Canon",
        "price":  900,
        "oldPrice":  1008,
        "rating":  4.9,
        "reviewsCount":  53,
        "stock":  8,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_129.jpg",
        "images":  [
                       "images/prod_len_129.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-130",
        "name":  "Canon rf 24-105mm f/2.8L IS USM",
        "nameEn":  "Canon rf 24-105mm f/2.8L IS USM",
        "category":  "filters",
        "brand":  "Canon",
        "price":  2420,
        "oldPrice":  2710,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  7,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_130.jpg",
        "images":  [
                       "images/prod_len_130.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-131",
        "name":  "Canon rf 24-240mm f/4-6.3 IS USM",
        "nameEn":  "Canon rf 24-240mm f/4-6.3 IS USM",
        "category":  "filters",
        "brand":  "Canon",
        "price":  730,
        "oldPrice":  818,
        "rating":  4.9,
        "reviewsCount":  35,
        "stock":  8,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_131.jpg",
        "images":  [
                       "images/prod_len_131.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-LEN-132",
        "name":  "canon rf 15-35mm f/2.8L IS USM",
        "nameEn":  "canon rf 15-35mm f/2.8L IS USM",
        "category":  "filters",
        "brand":  "Canon",
        "price":  1500,
        "oldPrice":  1680,
        "rating":  4.9,
        "reviewsCount":  27,
        "stock":  7,
        "badge":  "عدسة بصرية فائقة",
        "image":  "images/prod_len_132.jpg",
        "images":  [
                       "images/prod_len_132.jpg"
                   ],
        "description":  "عدسة بصرية يابانية عالية الجودة تمنح حدة استثنائية من المركز للأطراف مع فتحة عدسة سريعة تتيح التصوير في الإضاءة الخافتة بعزل بصري سينمائي ناعم، ومحرك تركيز فائق السرعة والهدوء.",
        "specs":  {
                      "البصريات":  "عناصر زجاجية متعددة الطبقات لمنع التشتت والوهج",
                      "التركيز":  "محرك خطي سريع وصامت للصور والفيديو",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-331",
        "name":  "SmallRig Advanced Cage Kit with Battery Plate for Sony FX2 5590",
        "nameEn":  "SmallRig Advanced Cage Kit with Battery Plate for Sony FX2 5590",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  200,
        "oldPrice":  224,
        "rating":  4.9,
        "reviewsCount":  22,
        "stock":  7,
        "badge":  "طاقة سينمائية",
        "image":  "images/prod_acc_331.jpg",
        "images":  [
                       "images/prod_acc_331.jpg"
                   ],
        "description":  "بطارية سينمائية متطورة V-Mount وشواحن احترافية تمنح طاقة مستقرة للكاميرات والشاشات ووحدات الإرسال طوال يوم التصوير، مع دعم الشحن السريع عبر USB-C PD وحماية متكاملة من زيادة الجهد.",
        "specs":  {
                      "المنافذ":  "D-Tap + USB-C PD + DC Outputs",
                      "الحماية":  "شريحة BMS ذكية لمنع ارتفاع الحرارة والشحن الزائد",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-340",
        "name":  "SmallRig V Mount Battery Plate with Adjustable Arm 2991",
        "nameEn":  "SmallRig V Mount Battery Plate with Adjustable Arm 2991",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  65,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  17,
        "stock":  3,
        "badge":  "طاقة سينمائية",
        "image":  "images/prod_acc_340.jpg",
        "images":  [
                       "images/prod_acc_340.jpg"
                   ],
        "description":  "بطارية سينمائية متطورة V-Mount وشواحن احترافية تمنح طاقة مستقرة للكاميرات والشاشات ووحدات الإرسال طوال يوم التصوير، مع دعم الشحن السريع عبر USB-C PD وحماية متكاملة من زيادة الجهد.",
        "specs":  {
                      "المنافذ":  "D-Tap + USB-C PD + DC Outputs",
                      "الحماية":  "شريحة BMS ذكية لمنع ارتفاع الحرارة والشحن الزائد",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-342",
        "name":  "SmallRig VB50 mini V Mount Battery 50Wh 3579B",
        "nameEn":  "SmallRig VB50 mini V Mount Battery 50Wh 3579B",
        "category":  "chargers_batteries",
        "brand":  "SmallRig",
        "price":  120,
        "oldPrice":  134,
        "rating":  4.9,
        "reviewsCount":  17,
        "stock":  5,
        "badge":  "طاقة سينمائية",
        "image":  "images/prod_acc_342.jpg",
        "images":  [
                       "images/prod_acc_342.jpg"
                   ],
        "description":  "بطارية سينمائية متطورة V-Mount وشواحن احترافية تمنح طاقة مستقرة للكاميرات والشاشات ووحدات الإرسال طوال يوم التصوير، مع دعم الشحن السريع عبر USB-C PD وحماية متكاملة من زيادة الجهد.",
        "specs":  {
                      "المنافذ":  "D-Tap + USB-C PD + DC Outputs",
                      "الحماية":  "شريحة BMS ذكية لمنع ارتفاع الحرارة والشحن الزائد",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-042",
        "name":  "RODE GO II (Double)",
        "nameEn":  "RODE GO II (Double)",
        "category":  "audio",
        "brand":  "RODE",
        "price":  195,
        "oldPrice":  218,
        "rating":  4.9,
        "reviewsCount":  57,
        "stock":  10,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_042.jpg",
        "images":  [
                       "images/prod_aud_042.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-043",
        "name":  "RODE INTERVIEW",
        "nameEn":  "RODE INTERVIEW",
        "category":  "audio",
        "brand":  "RODE",
        "price":  40,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  43,
        "stock":  7,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_043.jpg",
        "images":  [
                       "images/prod_aud_043.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-046",
        "name":  "RODE NT1-A",
        "nameEn":  "RODE NT1-A",
        "category":  "audio",
        "brand":  "RODE",
        "price":  210,
        "oldPrice":  235,
        "rating":  4.9,
        "reviewsCount":  25,
        "stock":  6,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_046.jpg",
        "images":  [
                       "images/prod_aud_046.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-047",
        "name":  "RODE Mic NT-USB Plus",
        "nameEn":  "RODE Mic NT-USB Plus",
        "category":  "audio",
        "brand":  "RODE",
        "price":  170,
        "oldPrice":  190,
        "rating":  4.9,
        "reviewsCount":  43,
        "stock":  7,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_047.jpg",
        "images":  [
                       "images/prod_aud_047.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-049",
        "name":  "RODE POD MIC",
        "nameEn":  "RODE POD MIC",
        "category":  "audio",
        "brand":  "RODE",
        "price":  100,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  55,
        "stock":  7,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_049.jpg",
        "images":  [
                       "images/prod_aud_049.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-050",
        "name":  "RODE PSA1",
        "nameEn":  "RODE PSA1",
        "category":  "audio",
        "brand":  "RODE",
        "price":  110,
        "oldPrice":  123,
        "rating":  4.9,
        "reviewsCount":  31,
        "stock":  3,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_050.jpg",
        "images":  [
                       "images/prod_aud_050.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-051",
        "name":  "RODE PSA1+ Black",
        "nameEn":  "RODE PSA1+ Black",
        "category":  "audio",
        "brand":  "RODE",
        "price":  145,
        "oldPrice":  162,
        "rating":  4.9,
        "reviewsCount":  46,
        "stock":  9,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_051.jpg",
        "images":  [
                       "images/prod_aud_051.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-053",
        "name":  "RODE Procaster Dynamic mic",
        "nameEn":  "RODE Procaster Dynamic mic",
        "category":  "audio",
        "brand":  "RODE",
        "price":  200,
        "oldPrice":  224,
        "rating":  4.9,
        "reviewsCount":  25,
        "stock":  5,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_053.jpg",
        "images":  [
                       "images/prod_aud_053.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-054",
        "name":  "RODE RODE Wireless Go III",
        "nameEn":  "RODE RODE Wireless Go III",
        "category":  "audio",
        "brand":  "RODE",
        "price":  240,
        "oldPrice":  269,
        "rating":  4.9,
        "reviewsCount":  38,
        "stock":  3,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_054.jpg",
        "images":  [
                       "images/prod_aud_054.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-055",
        "name":  "RODE RODE Wireless Micro",
        "nameEn":  "RODE RODE Wireless Micro",
        "category":  "audio",
        "brand":  "RODE",
        "price":  110,
        "oldPrice":  123,
        "rating":  4.9,
        "reviewsCount":  27,
        "stock":  4,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_055.jpg",
        "images":  [
                       "images/prod_aud_055.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-056",
        "name":  "RODE XCM-50",
        "nameEn":  "RODE XCM-50",
        "category":  "audio",
        "brand":  "RODE",
        "price":  120,
        "oldPrice":  134,
        "rating":  4.9,
        "reviewsCount":  20,
        "stock":  6,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_056.jpg",
        "images":  [
                       "images/prod_aud_056.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-057",
        "name":  "RODE XDM-100",
        "nameEn":  "RODE XDM-100",
        "category":  "audio",
        "brand":  "RODE",
        "price":  170,
        "oldPrice":  190,
        "rating":  4.9,
        "reviewsCount":  49,
        "stock":  3,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_057.jpg",
        "images":  [
                       "images/prod_aud_057.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-058",
        "name":  "RODE PRO 2-Person",
        "nameEn":  "RODE PRO 2-Person",
        "category":  "audio",
        "brand":  "RODE",
        "price":  290,
        "oldPrice":  325,
        "rating":  4.9,
        "reviewsCount":  18,
        "stock":  8,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_058.jpg",
        "images":  [
                       "images/prod_aud_058.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-059",
        "name":  "RODE Caster Pro II",
        "nameEn":  "RODE Caster Pro II",
        "category":  "audio",
        "brand":  "RODE",
        "price":  540,
        "oldPrice":  605,
        "rating":  4.9,
        "reviewsCount":  16,
        "stock":  11,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_059.jpg",
        "images":  [
                       "images/prod_aud_059.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-060",
        "name":  "RODE Caster Duo",
        "nameEn":  "RODE Caster Duo",
        "category":  "audio",
        "brand":  "RODE",
        "price":  450,
        "oldPrice":  504,
        "rating":  4.9,
        "reviewsCount":  57,
        "stock":  4,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_060.jpg",
        "images":  [
                       "images/prod_aud_060.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-061",
        "name":  "Hollyland Lark A1 Combo",
        "nameEn":  "Hollyland Lark A1 Combo",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  80,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  43,
        "stock":  4,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_061.jpg",
        "images":  [
                       "images/prod_aud_061.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-062",
        "name":  "Hollyland Lark A1 Type C",
        "nameEn":  "Hollyland Lark A1 Type C",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  70,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  33,
        "stock":  9,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_062.jpg",
        "images":  [
                       "images/prod_aud_062.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-063",
        "name":  "Hollyland Lark M2S Combo",
        "nameEn":  "Hollyland Lark M2S Combo",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  125,
        "oldPrice":  140,
        "rating":  4.9,
        "reviewsCount":  48,
        "stock":  8,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_063.jpg",
        "images":  [
                       "images/prod_aud_063.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-064",
        "name":  "Hollyland Lark M2S Type-C Version",
        "nameEn":  "Hollyland Lark M2S Type-C Version",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  110,
        "oldPrice":  123,
        "rating":  4.9,
        "reviewsCount":  18,
        "stock":  9,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_064.jpg",
        "images":  [
                       "images/prod_aud_064.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-065",
        "name":  "Hollyland Hollyland Lark M2S Ultimate Combo",
        "nameEn":  "Hollyland Hollyland Lark M2S Ultimate Combo",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  115,
        "oldPrice":  129,
        "rating":  4.9,
        "reviewsCount":  33,
        "stock":  3,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_065.jpg",
        "images":  [
                       "images/prod_aud_065.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-066",
        "name":  "Hollyland LARK MAX DUO",
        "nameEn":  "Hollyland LARK MAX DUO",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  225,
        "oldPrice":  252,
        "rating":  4.9,
        "reviewsCount":  30,
        "stock":  7,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_066.jpg",
        "images":  [
                       "images/prod_aud_066.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-067",
        "name":  "Hollyland LARK MAX SOLO",
        "nameEn":  "Hollyland LARK MAX SOLO",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  165,
        "oldPrice":  185,
        "rating":  4.9,
        "reviewsCount":  29,
        "stock":  3,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_067.jpg",
        "images":  [
                       "images/prod_aud_067.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-068",
        "name":  "Hollyland Lark M2 Combo Version",
        "nameEn":  "Hollyland Lark M2 Combo Version",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  95,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  25,
        "stock":  10,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_068.jpg",
        "images":  [
                       "images/prod_aud_068.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-069",
        "name":  "Hollyland Solidom C1 4S",
        "nameEn":  "Hollyland Solidom C1 4S",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  1100,
        "oldPrice":  1232,
        "rating":  4.9,
        "reviewsCount":  50,
        "stock":  6,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_069.jpg",
        "images":  [
                       "images/prod_aud_069.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-AUD-070",
        "name":  "Hollyland Solidom C1 6S",
        "nameEn":  "Hollyland Solidom C1 6S",
        "category":  "audio",
        "brand":  "Hollyland",
        "price":  1550,
        "oldPrice":  1736,
        "rating":  4.9,
        "reviewsCount":  41,
        "stock":  11,
        "badge":  "صوتيات احترافية",
        "image":  "images/prod_aud_070.jpg",
        "images":  [
                       "images/prod_aud_070.jpg"
                   ],
        "description":  "نظام صوتي وميكروفون متطور مصمم لمنح نقاء صوتي فائق واستجابة ترددية متوازنة تعزل الضوضاء المحيطة وتبرز نبرة الصوت بوضوح، مثالي للبث المباشر والبودكاست والمقابلات الميدانية.",
        "specs":  {
                      "الالتقاط":  "نمط قطبي دقيق عازل لصدى الغرفة والضوضاء",
                      "الاتصال":  "توصيل سريع ومستقر مع استجابة ترددية واسعة",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-330",
        "name":  "SmallRig HawkLock Quick Release Advanced Cage Kit for Sony a7R V",
        "nameEn":  "SmallRig HawkLock Quick Release Advanced Cage Kit for Sony a7R V",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  230,
        "oldPrice":  258,
        "rating":  4.9,
        "reviewsCount":  45,
        "stock":  11,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_330.jpg",
        "images":  [
                       "images/prod_acc_330.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-332",
        "name":  "SmallRig Sunhood for Sony a7S III/a7C/ZV-1/FX3 Camera 3206",
        "nameEn":  "SmallRig Sunhood for Sony a7S III/a7C/ZV-1/FX3 Camera 3206",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  25,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  17,
        "stock":  6,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_332.jpg",
        "images":  [
                       "images/prod_acc_332.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-333",
        "name":  "SmallRig Arca-Type Quick Release Phone Support for DJI RS 4 Mini/RS 3 Mini 5338",
        "nameEn":  "SmallRig Arca-Type Quick Release Phone Support for DJI RS 4 Mini/RS 3 Mini 5338",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  25,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  24,
        "stock":  5,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_333.jpg",
        "images":  [
                       "images/prod_acc_333.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-334",
        "name":  "SmallRig Monitor Mounting Support with NATO Clamp for DJI RS 2 / RSC 2 / RS 3 / RS 3 Pro /RS 3 Mini / RS 4 / RS 4 Pro / RS 4 Mini 3026B",
        "nameEn":  "SmallRig Monitor Mounting Support with NATO Clamp for DJI RS 2 / RSC 2 / RS 3 / RS 3 Pro /RS 3 Mini / RS 4 / RS 4 Pro / RS 4 Mini 3026B",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  70,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  43,
        "stock":  11,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_334.jpg",
        "images":  [
                       "images/prod_acc_334.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-335",
        "name":  "SmallRig HawkLock H21 Quick Release Rosette Magic Arm (11) 4489",
        "nameEn":  "SmallRig HawkLock H21 Quick Release Rosette Magic Arm (11) 4489",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  85,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  20,
        "stock":  6,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_335.jpg",
        "images":  [
                       "images/prod_acc_335.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-336",
        "name":  "SmallRig HawkLock H21 Quick Release Rosette Magic  Arm (7) 4490",
        "nameEn":  "SmallRig HawkLock H21 Quick Release Rosette Magic  Arm (7) 4490",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  55,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  28,
        "stock":  4,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_336.jpg",
        "images":  [
                       "images/prod_acc_336.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-337",
        "name":  "SmallRig Cycling Camera Mount 5459",
        "nameEn":  "SmallRig Cycling Camera Mount 5459",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  80,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  23,
        "stock":  11,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_337.jpg",
        "images":  [
                       "images/prod_acc_337.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-338",
        "name":  "SmallRig Cage for Sony FX2 5587",
        "nameEn":  "SmallRig Cage for Sony FX2 5587",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  90,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  34,
        "stock":  4,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_338.jpg",
        "images":  [
                       "images/prod_acc_338.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-347",
        "name":  "SmallRig Camera Cage with Right-Side Handgrip for Sony ZV-E10  4293",
        "nameEn":  "SmallRig Camera Cage with Right-Side Handgrip for Sony ZV-E10  4293",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  45,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  35,
        "stock":  7,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_347.jpg",
        "images":  [
                       "images/prod_acc_347.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-349",
        "name":  "SmallRig Black Mamba Camera Cage for Canon EOS R5 Mark II 4975",
        "nameEn":  "SmallRig Black Mamba Camera Cage for Canon EOS R5 Mark II 4975",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  70,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  53,
        "stock":  4,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_349.jpg",
        "images":  [
                       "images/prod_acc_349.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-351",
        "name":  "SmallRig Cage for Canon EOS R Camera CCC2803",
        "nameEn":  "SmallRig Cage for Canon EOS R Camera CCC2803",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  50,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  49,
        "stock":  11,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_351.jpg",
        "images":  [
                       "images/prod_acc_351.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-353",
        "name":  "SmallRig Camera Cage with Silicone Handgrip for Sony a6400/a6300/a6100  3164B",
        "nameEn":  "SmallRig Camera Cage with Silicone Handgrip for Sony a6400/a6300/a6100  3164B",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  50,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  20,
        "stock":  5,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_353.jpg",
        "images":  [
                       "images/prod_acc_353.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-354",
        "name":  "SmallRig Advanced Cage Kit for Sony a7R V",
        "nameEn":  "SmallRig Advanced Cage Kit for Sony a7R V",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  145,
        "oldPrice":  162,
        "rating":  4.9,
        "reviewsCount":  40,
        "stock":  10,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_354.jpg",
        "images":  [
                       "images/prod_acc_354.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-355",
        "name":  "SmallRig Camera Cage for Canon 5D Mark III or 5D Mark IV  CCC2271",
        "nameEn":  "SmallRig Camera Cage for Canon 5D Mark III or 5D Mark IV  CCC2271",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  60,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  28,
        "stock":  10,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_355.jpg",
        "images":  [
                       "images/prod_acc_355.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-356",
        "name":  "SmallRig Camera Cage for Sony FX30 and FX3  4183B",
        "nameEn":  "SmallRig Camera Cage for Sony FX30 and FX3  4183B",
        "category":  "cages",
        "brand":  "SmallRig",
        "price":  80,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  26,
        "stock":  4,
        "badge":  "تجهيزات ريج",
        "image":  "images/prod_acc_356.jpg",
        "images":  [
                       "images/prod_acc_356.jpg"
                   ],
        "description":  "قفص حماية وملحقات تثبيت مصنعة من سبائك الألومنيوم المقوى CNC توفر حماية متكاملة لجسم الكاميرا ونقاط تثبيت متعددة للشاشات والميكروفونات مع قاعدة سريعة التركيب المتوافقة مع الترايبود.",
        "specs":  {
                      "المادة":  "سبائك ألومنيوم CNC Anodized خفيفة الوزن وفائقة الصلابة",
                      "نقاط التثبيت":  "فتحات 1/4-20 و 3/8-16 و Cold Shoe مدمج",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-STN-300",
        "name":  "Dolly wheels VX-600",
        "nameEn":  "Dolly wheels VX-600",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  30,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  22,
        "stock":  6,
        "badge":  "ستاند وترايبود",
        "image":  "images/prod_stn_300.jpg",
        "images":  [
                       "images/prod_stn_300.jpg"
                   ],
        "description":  "منظومة تثبيت وترايبود احترافية مصممة للخدمة الشاقة توفر ثباتاً مطلقاً في الاستوديو والمواقع الخارجية، مع رأس هايدروليك ناعم للحركة البانورامية 360 درجة وأقفال سريعة.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى / ألياف الكربون فايبر للتحمل الشاق",
                      "الرأس":  "رأس هايدروليك سلس للحركة الأفقية والرأسية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-STN-301",
        "name":  "Monopod MP208F + VT1510",
        "nameEn":  "Monopod MP208F + VT1510",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  60,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  46,
        "stock":  8,
        "badge":  "ستاند وترايبود",
        "image":  "images/prod_stn_301.jpg",
        "images":  [
                       "images/prod_stn_301.jpg"
                   ],
        "description":  "منظومة تثبيت وترايبود احترافية مصممة للخدمة الشاقة توفر ثباتاً مطلقاً في الاستوديو والمواقع الخارجية، مع رأس هايدروليك ناعم للحركة البانورامية 360 درجة وأقفال سريعة.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى / ألياف الكربون فايبر للتحمل الشاق",
                      "الرأس":  "رأس هايدروليك سلس للحركة الأفقية والرأسية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-STN-302",
        "name":  "Monopod MP4208F Fiber +VT-3510",
        "nameEn":  "Monopod MP4208F Fiber +VT-3510",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  110,
        "oldPrice":  123,
        "rating":  4.9,
        "reviewsCount":  50,
        "stock":  9,
        "badge":  "ستاند وترايبود",
        "image":  "images/prod_stn_302.jpg",
        "images":  [
                       "images/prod_stn_302.jpg"
                   ],
        "description":  "منظومة تثبيت وترايبود احترافية مصممة للخدمة الشاقة توفر ثباتاً مطلقاً في الاستوديو والمواقع الخارجية، مع رأس هايدروليك ناعم للحركة البانورامية 360 درجة وأقفال سريعة.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى / ألياف الكربون فايبر للتحمل الشاق",
                      "الرأس":  "رأس هايدروليك سلس للحركة الأفقية والرأسية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-STN-303",
        "name":  "Monopod MP208F",
        "nameEn":  "Monopod MP208F",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  40,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  46,
        "stock":  3,
        "badge":  "ستاند وترايبود",
        "image":  "images/prod_stn_303.jpg",
        "images":  [
                       "images/prod_stn_303.jpg"
                   ],
        "description":  "منظومة تثبيت وترايبود احترافية مصممة للخدمة الشاقة توفر ثباتاً مطلقاً في الاستوديو والمواقع الخارجية، مع رأس هايدروليك ناعم للحركة البانورامية 360 درجة وأقفال سريعة.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى / ألياف الكربون فايبر للتحمل الشاق",
                      "الرأس":  "رأس هايدروليك سلس للحركة الأفقية والرأسية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-STN-304",
        "name":  "Monopod MP308",
        "nameEn":  "Monopod MP308",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  45,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  39,
        "stock":  7,
        "badge":  "ستاند وترايبود",
        "image":  "images/prod_stn_304.jpg",
        "images":  [
                       "images/prod_stn_304.jpg"
                   ],
        "description":  "منظومة تثبيت وترايبود احترافية مصممة للخدمة الشاقة توفر ثباتاً مطلقاً في الاستوديو والمواقع الخارجية، مع رأس هايدروليك ناعم للحركة البانورامية 360 درجة وأقفال سريعة.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى / ألياف الكربون فايبر للتحمل الشاق",
                      "الرأس":  "رأس هايدروليك سلس للحركة الأفقية والرأسية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-STN-305",
        "name":  "Monopod MP1008F",
        "nameEn":  "Monopod MP1008F",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  35,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  44,
        "stock":  3,
        "badge":  "ستاند وترايبود",
        "image":  "images/prod_stn_305.jpg",
        "images":  [
                       "images/prod_stn_305.jpg"
                   ],
        "description":  "منظومة تثبيت وترايبود احترافية مصممة للخدمة الشاقة توفر ثباتاً مطلقاً في الاستوديو والمواقع الخارجية، مع رأس هايدروليك ناعم للحركة البانورامية 360 درجة وأقفال سريعة.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى / ألياف الكربون فايبر للتحمل الشاق",
                      "الرأس":  "رأس هايدروليك سلس للحركة الأفقية والرأسية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-STN-306",
        "name":  "Monopod MP408FL",
        "nameEn":  "Monopod MP408FL",
        "category":  "stands",
        "brand":  "TOPCAM Pro",
        "price":  55,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  35,
        "stock":  6,
        "badge":  "ستاند وترايبود",
        "image":  "images/prod_stn_306.jpg",
        "images":  [
                       "images/prod_stn_306.jpg"
                   ],
        "description":  "منظومة تثبيت وترايبود احترافية مصممة للخدمة الشاقة توفر ثباتاً مطلقاً في الاستوديو والمواقع الخارجية، مع رأس هايدروليك ناعم للحركة البانورامية 360 درجة وأقفال سريعة.",
        "specs":  {
                      "المادة":  "ألومنيوم مقوى / ألياف الكربون فايبر للتحمل الشاق",
                      "الرأس":  "رأس هايدروليك سلس للحركة الأفقية والرأسية",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-449",
        "name":  "Desview T22 Teleprompter",
        "nameEn":  "Desview T22 Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  600,
        "oldPrice":  672,
        "rating":  4.9,
        "reviewsCount":  52,
        "stock":  4,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_449.jpg",
        "images":  [
                       "images/prod_mon_449.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-450",
        "name":  "Desview T17 Teleprompter",
        "nameEn":  "Desview T17 Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  450,
        "oldPrice":  504,
        "rating":  4.9,
        "reviewsCount":  53,
        "stock":  11,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_450.jpg",
        "images":  [
                       "images/prod_mon_450.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-451",
        "name":  "Desview TP170 Teleprompter",
        "nameEn":  "Desview TP170 Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  355,
        "oldPrice":  398,
        "rating":  4.9,
        "reviewsCount":  48,
        "stock":  9,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_451.jpg",
        "images":  [
                       "images/prod_mon_451.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-455",
        "name":  "Desview T2 Teleprompter",
        "nameEn":  "Desview T2 Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  100,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  25,
        "stock":  11,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_455.jpg",
        "images":  [
                       "images/prod_mon_455.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-456",
        "name":  "Desview t12 Teleprompter",
        "nameEn":  "Desview t12 Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  175,
        "oldPrice":  196,
        "rating":  4.9,
        "reviewsCount":  30,
        "stock":  4,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_456.jpg",
        "images":  [
                       "images/prod_mon_456.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-457",
        "name":  "Desview t22 double monitor Teleprompter",
        "nameEn":  "Desview t22 double monitor Teleprompter",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  700,
        "oldPrice":  784,
        "rating":  4.9,
        "reviewsCount":  53,
        "stock":  11,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_457.jpg",
        "images":  [
                       "images/prod_mon_457.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-458",
        "name":  "Desview P5II",
        "nameEn":  "Desview P5II",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  120,
        "oldPrice":  134,
        "rating":  4.9,
        "reviewsCount":  42,
        "stock":  7,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_458.jpg",
        "images":  [
                       "images/prod_mon_458.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-459",
        "name":  "Desview R7III",
        "nameEn":  "Desview R7III",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  215,
        "oldPrice":  241,
        "rating":  4.9,
        "reviewsCount":  54,
        "stock":  5,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_459.jpg",
        "images":  [
                       "images/prod_mon_459.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-460",
        "name":  "Desview R7S III",
        "nameEn":  "Desview R7S III",
        "category":  "monitors",
        "brand":  "Desview",
        "price":  245,
        "oldPrice":  274,
        "rating":  4.9,
        "reviewsCount":  38,
        "stock":  7,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_460.jpg",
        "images":  [
                       "images/prod_mon_460.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-461",
        "name":  "LENSGO TC7 Teleprompter",
        "nameEn":  "LENSGO TC7 Teleprompter",
        "category":  "monitors",
        "brand":  "Lensgo",
        "price":  54,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  49,
        "stock":  5,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_461.jpg",
        "images":  [
                       "images/prod_mon_461.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-462",
        "name":  "LENSGO TC7S Teleprompter",
        "nameEn":  "LENSGO TC7S Teleprompter",
        "category":  "monitors",
        "brand":  "Lensgo",
        "price":  40,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  30,
        "stock":  8,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_462.jpg",
        "images":  [
                       "images/prod_mon_462.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-463",
        "name":  "LENSGO TC7II Teleprompter 7.9 (Camera Kit)",
        "nameEn":  "LENSGO TC7II Teleprompter 7.9 (Camera Kit)",
        "category":  "monitors",
        "brand":  "Lensgo",
        "price":  45,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  56,
        "stock":  4,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_463.jpg",
        "images":  [
                       "images/prod_mon_463.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-464",
        "name":  "LENSGO TC7II Teleprompter 7.9 (Ultimate Kit) for Phone \u0026 Canera",
        "nameEn":  "LENSGO TC7II Teleprompter 7.9 (Ultimate Kit) for Phone \u0026 Canera",
        "category":  "monitors",
        "brand":  "Lensgo",
        "price":  60,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  28,
        "stock":  9,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_464.jpg",
        "images":  [
                       "images/prod_mon_464.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-465",
        "name":  "LENSGO TC12 12.9 Teleprompter",
        "nameEn":  "LENSGO TC12 12.9 Teleprompter",
        "category":  "monitors",
        "brand":  "Lensgo",
        "price":  70,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  33,
        "stock":  7,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_465.jpg",
        "images":  [
                       "images/prod_mon_465.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-MON-466",
        "name":  "Seetec atem173s 4 sdi (17.3 inch)",
        "nameEn":  "Seetec atem173s 4 sdi (17.3 inch)",
        "category":  "monitors",
        "brand":  "Seetec",
        "price":  1350,
        "oldPrice":  1512,
        "rating":  4.9,
        "reviewsCount":  27,
        "stock":  6,
        "badge":  "شاشة مراقبة",
        "image":  "images/prod_mon_466.jpg",
        "images":  [
                       "images/prod_mon_466.jpg"
                   ],
        "description":  "شاشة مراقبة وتلقين احترافية عالية السطوع تمنح رؤية واضحة لأدق تفاصيل الكادر وأدوات مساعدة سينمائية متقدمة تشمل الويف فورم و 3D LUT مع زجاج مقسم للضوء فائق النفاذية في أجهزة التلقين.",
        "specs":  {
                      "الشاشة":  "IPS High Brightness Display مع دعم 4K HDMI",
                      "الميزات":  "Focus Peaking و False Color و Waveform",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-406",
        "name":  "Ulanzi OM-01 Multi function bag",
        "nameEn":  "Ulanzi OM-01 Multi function bag",
        "category":  "bags",
        "brand":  "Ulanzi",
        "price":  50,
        "oldPrice":  null,
        "rating":  4.9,
        "reviewsCount":  30,
        "stock":  10,
        "badge":  "حقيبة مصورين",
        "image":  "images/prod_acc_406.jpg",
        "images":  [
                       "images/prod_acc_406.jpg"
                   ],
        "description":  "حقيبة ظهر احترافية مصنوعة من خامات مقاومة للماء والتمزق مع تقسيمات داخلية مبطنة وقابلة للتعديل لحماية الكاميرات والعدسات الثمينة، وأحزمة خارجية لحمل الترايبود براحة تامة.",
        "specs":  {
                      "المادة":  "Waterproof Fabric مقاوم للعوامل الجوية الصعبة",
                      "السعة":  "مساحة واسعة لكاميرتين وعدسات متعددة مع جيب لابتوب",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    },
    {
        "id":  "EX2-ACC-407",
        "name":  "ulanzi backpack bp04",
        "nameEn":  "ulanzi backpack bp04",
        "category":  "bags",
        "brand":  "Ulanzi",
        "price":  130,
        "oldPrice":  146,
        "rating":  4.9,
        "reviewsCount":  52,
        "stock":  11,
        "badge":  "حقيبة مصورين",
        "image":  "images/prod_acc_407.jpg",
        "images":  [
                       "images/prod_acc_407.jpg"
                   ],
        "description":  "حقيبة ظهر احترافية مصنوعة من خامات مقاومة للماء والتمزق مع تقسيمات داخلية مبطنة وقابلة للتعديل لحماية الكاميرات والعدسات الثمينة، وأحزمة خارجية لحمل الترايبود براحة تامة.",
        "specs":  {
                      "المادة":  "Waterproof Fabric مقاوم للعوامل الجوية الصعبة",
                      "السعة":  "مساحة واسعة لكاميرتين وعدسات متعددة مع جيب لابتوب",
                      "الضمان":  "كفالة رسمية من الوكيل المعتمد"
                  }
    }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_CATEGORIES, INITIAL_PRODUCTS };
}