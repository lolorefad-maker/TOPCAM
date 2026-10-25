// طبقة إدارة البيانات والطلبات والتخزين المحلي لمتجر الكاميرات
// Camera Store Database & State Layer - TOP CAM Jordan

const STORE_KEYS = {
  PRODUCTS: 'camera_store_products_v24_availability_badges',
  DELETED_IDS: 'camera_store_deleted_ids_v1',
  ORDERS: 'camera_store_orders_v1',
  CART: 'camera_store_cart_v1',
  SETTINGS: 'camera_store_settings_v1',
  BANNERS: 'camera_store_banners_v1',
  PROMO_POPUP: 'camera_store_promo_popup_v3_logo',
  GEAR_UP: 'camera_store_gear_up_v1'
};

const DEFAULT_SETTINGS = {
  storeName: 'TOP CAM | شركة مخزن الكاميرات',
  whatsappNumber: '962790000000', // رقم الواتساب الافتراضي للمتجر
  currency: 'د.أ',
  currencyName: 'دينار أردني',
  currencyRate: 1, // مقابل الدينار الأردني
  currencies: {
    JOD: { symbol: 'د.أ', name: 'دينار أردني', rate: 1 },
    USD: { symbol: '$', name: 'دولار أمريكي', rate: 1.41 }
  },
  activeCurrency: 'JOD',
  taxRate: 0.0,
  freeShippingThreshold: 50,
  // موقع المعرض وساعات العمل (يُعدَّلان من لوحة الإدارة ← الإعدادات)
  storeAddress: 'إربد - شارع الجامعة الرئيسي',
  storeAddressDetails: 'قرب إشارة الإسكان ومجمع الدوار، مقابل البوابة الشمالية لجامعة اليرموك - مجمع الأندلس التجاري، الطابق الأرضي.',
  mapLat: 32.5376,
  mapLng: 35.8567,
  mapsLink: '',
  openWeek: '10:00',
  closeWeek: '22:00',
  openFri: '14:00',
  closeFri: '22:00'
};

const DEFAULT_BANNERS = {
  slide1: {
    title: 'NEW ERA OF CINEMATOGRAPHY',
    subtitle: 'كاميرات سوني وسلسلة السينما الاحترافية مع كفالة الوكيل الرسمية في الأردن',
    badge: 'OFFICIAL AGENT • JORDAN',
    image: 'images/about_showroom_amman.jpg',
    ctaText: 'استكشف كاميرات السينما',
    category: 'cameras'
  },
  slide2: {
    title: 'PRO STUDIO LIGHTING & APUTURE',
    subtitle: 'إضاءات الاستوديو المستمرة والسوفت بوكس من Godox و Aputure بأفضل الأسعار',
    badge: 'SPECIAL BUNDLES',
    image: 'images/about_filmmaker_set.jpg',
    ctaText: 'تصفح الإضاءات والاستوديو',
    category: 'lighting'
  },
  slide3: {
    title: 'STABILIZERS & MASTER RIGS',
    subtitle: 'مانعات اهتزاز DJI RS 3 Pro وأقفاص Tilta و SmallRig المتطورة في المستودع',
    badge: 'BEST PRICE GUARANTEE',
    image: 'images/about_gear_testing_lab.jpg',
    ctaText: 'تجهيزات الستيبلايزر',
    category: 'stabilizers'
  }
};

const DEFAULT_PROMO_POPUP = {
  enabled: true,
  title: '🚚 عرض خاص: توصيل مجاني وسريع لكافة أنحاء المملكة!',
  subtitle: 'اطلب أي كاميرا أو معدات تصوير الآن بدون أي رسوم شحن، مع تغليف احترافي مؤمن وتوصيل فوري لباب بيتك أو موقع التصوير.',
  badge: 'توصيل مجاني 100%',
  targetCategory: 'all',
  promoCode: 'FREESHIP',
  buttonText: 'تسوق الآن مع التوصيل المجاني 📦',
  image: 'images/logo.jpg'
};

const DEFAULT_GEAR_UP = {
  card1Image: 'images/gear_camera_dials.jpg',
  card2Badge: 'LIMITED TIME',
  card2Title: "Gear Up for What's Next",
  card2Subtitle: 'Up to 25% Off Selected Cameras & Lenses',
  card2BtnText: 'Shop the Sale',
  card2Category: 'cameras',
  card3Image: 'images/gear_snow_mountain.jpg',
  card3Headline: 'Better<br>Gear<br>Brighter<br>Stories',
  frameMattersImage: 'images/gear_frame_matters.jpg',
  frameMattersTitle: 'FRAME WHAT MATTERS',
  frameMattersSubtitle: 'The Art of Visual Storytelling with TOP CAM Jordan'
};

class StoreDB {
  constructor() {
    this.init();
  }

  init() {
    // 1. Permanently track in deleted IDs list so it never resurrects
    const legacyKeys = [
      'camera_store_products_v1',
      'camera_store_products_v2',
      'camera_store_products_v3',
      'camera_store_products_v4',
      'camera_store_products_v5',
      'camera_store_products_v6',
      'camera_store_products_v7',
      'camera_store_products_v8',
      'camera_store_products_v9',
      'camera_store_products_v10_real_images',
      'camera_store_products_v11_pure_authentic',
      'camera_store_products_v12_flawless_authentic',
      'camera_store_products_v15_332_full_catalog',
      'camera_store_products_v16_500_full_catalog',
      'camera_store_promo_popup_v1',
      'camera_store_promo_popup_v2_free_delivery'
    ];
    legacyKeys.forEach(k => {
      try { localStorage.removeItem(k); } catch(e){}
    });

    let currentProds = [];
    try {
      const stored = localStorage.getItem(STORE_KEYS.PRODUCTS);
      currentProds = stored ? JSON.parse(stored) : (typeof INITIAL_PRODUCTS !== 'undefined' ? JSON.parse(JSON.stringify(INITIAL_PRODUCTS)) : []);
    } catch(e) {
      currentProds = typeof INITIAL_PRODUCTS !== 'undefined' ? JSON.parse(JSON.stringify(INITIAL_PRODUCTS)) : [];
    }

    // تصفية وحصر الكتالوج بالكامل على المنتجات الأصلية الحقيقية فقط
    const deletedIds = new Set(this.getDeletedProductIds());
    const stored = localStorage.getItem(STORE_KEYS.PRODUCTS);

    if (!stored) {
      if (typeof INITIAL_PRODUCTS !== 'undefined' && INITIAL_PRODUCTS.length > 0) {
        currentProds = JSON.parse(JSON.stringify(INITIAL_PRODUCTS)).filter(p => !deletedIds.has(p.id));
      }
    } else {
      if (Array.isArray(currentProds)) {
        currentProds = currentProds.filter(p => !deletedIds.has(p.id));
      }
    }
    try {
      localStorage.setItem(STORE_KEYS.PRODUCTS, JSON.stringify(currentProds));
    } catch (e) {
      console.warn('localStorage setItem failed:', e);
    }

    // 2. Remove product from current list and persist
    if (!localStorage.getItem(STORE_KEYS.ORDERS)) {
      localStorage.setItem(STORE_KEYS.ORDERS, '[]');
    }

    // 3. تهيئة السلة
    if (!localStorage.getItem(STORE_KEYS.CART)) {
      localStorage.setItem(STORE_KEYS.CART, JSON.stringify([]));
    }

    // 4. تهيئة الإعدادات
    if (!localStorage.getItem(STORE_KEYS.SETTINGS)) {
      localStorage.setItem(STORE_KEYS.SETTINGS, JSON.stringify(DEFAULT_SETTINGS));
    }

    // 5. تهيئة البانرات
    if (!localStorage.getItem(STORE_KEYS.BANNERS)) {
      localStorage.setItem(STORE_KEYS.BANNERS, JSON.stringify(DEFAULT_BANNERS));
    }

    // 6. تهيئة نافذة العروض المنبثقة
    if (!localStorage.getItem(STORE_KEYS.PROMO_POPUP)) {
      localStorage.setItem(STORE_KEYS.PROMO_POPUP, JSON.stringify(DEFAULT_PROMO_POPUP));
    }

    // مزامنة فورية مع السيرفر لتوحيد المنتجات المحذوفة بين اللابتوب والهواتف
    try {
      this.syncWithServer().catch(() => {});
    } catch(e) {}
  }

  // ================= مزامنة السيرفر عبر الأجهزة =================
  // مفتاح الأدمن يُحفظ في sessionStorage بعد تسجيل الدخول في لوحة الإدارة
  adminKey() {
    try { return sessionStorage.getItem('topcam_admin_key') || ''; } catch (e) { return ''; }
  }

  apiFetch(url, opts = {}) {
    const headers = Object.assign({ 'Content-Type': 'application/json' }, opts.headers || {});
    const key = this.adminKey();
    if (key) headers['x-admin-key'] = key;
    return fetch(url, Object.assign({}, opts, { headers, cache: 'no-store' }));
  }

  // رفع الكتالوج (للأدمن فقط) بعد أي تعديل، مع تجميع التعديلات المتتالية
  pushCatalog() {
    if (!this.adminKey()) return;
    clearTimeout(this._catalogTimer);
    this._catalogTimer = setTimeout(() => {
      const prods = this.getProducts();
      if (!Array.isArray(prods) || prods.length === 0) return;
      this.apiFetch('/api/save-catalog', { method: 'POST', body: JSON.stringify({ products: prods }) }).catch(() => {});
    }, 400);
  }

  pushKv(name, value) {
    if (!this.adminKey()) return;
    this.apiFetch('/api/kv/' + name, { method: 'PUT', body: JSON.stringify({ value }) }).catch(() => {});
  }

  async syncWithServer() {
    try {
      const isAdmin = !!this.adminKey();

      // السيرفر هو المرجع: نسحب المحذوفات والكتالوج والإعدادات
      const [delRes, catRes, kvRes] = await Promise.all([
        fetch('/api/deleted-ids', { cache: 'no-store' }),
        fetch('/api/catalog', { cache: 'no-store' }),
        fetch('/api/kv', { cache: 'no-store' })
      ]);

      // saved = كتالوج اعتمده الأدمن (يطابق كل الأجهزة). seed = لم يُعتمد بعد، فنبقي كتالوج الجهاز كما هو.
      const source = catRes.headers.get('X-Catalog-Source') || 'saved';
      let catalogFromServer = null;
      if (catRes.ok) {
        const list = await catRes.json();
        if (source === 'saved' && Array.isArray(list) && list.length > 0) catalogFromServer = list;
      }

      if (catalogFromServer) {
        // كتالوج معتمد: يُستبدل كتالوج الجهاز به، وقائمة المحذوفات تُشتق منه
        const next = JSON.stringify(catalogFromServer);
        if (localStorage.getItem(STORE_KEYS.PRODUCTS) !== next) {
          this.backupDeviceCatalog();
          localStorage.setItem(STORE_KEYS.PRODUCTS, next);
        }
        const keep = new Set(catalogFromServer.map(p => p.id));
        const base = (typeof INITIAL_PRODUCTS !== 'undefined' ? INITIAL_PRODUCTS : []);
        localStorage.setItem(STORE_KEYS.DELETED_IDS, JSON.stringify(base.map(p => p.id).filter(id => !keep.has(id))));
        this.dispatchChange('products_updated');
      } else if (delRes.ok) {
        // لا كتالوج معتمد بعد: نطبّق المحذوفات المسجلة على السيرفر فقط
        const serverDeleted = await delRes.json();
        if (Array.isArray(serverDeleted) && serverDeleted.length > 0) {
          const merged = Array.from(new Set([...this.getDeletedProductIds(), ...serverDeleted]));
          localStorage.setItem(STORE_KEYS.DELETED_IDS, JSON.stringify(merged));
          const current = this.getProducts();
          const deleted = new Set(merged);
          const clean = current.filter(p => !deleted.has(p.id));
          if (clean.length !== current.length) this.saveProducts(clean, { noPush: true });
        }
      }

      if (kvRes.ok) {
        const kv = await kvRes.json();
        const map = {
          settings: [STORE_KEYS.SETTINGS, 'settings_updated'],
          banners: [STORE_KEYS.BANNERS, 'banners_updated'],
          promo: [STORE_KEYS.PROMO_POPUP, 'promo_popup_updated'],
          gearUp: [STORE_KEYS.GEAR_UP, 'gear_up_updated']
        };
        Object.keys(map).forEach(name => {
          if (kv && kv[name] && typeof kv[name] === 'object') {
            const next = JSON.stringify(kv[name]);
            if (localStorage.getItem(map[name][0]) !== next) {
              localStorage.setItem(map[name][0], next);
              this.dispatchChange(map[name][1]);
            }
          }
        });
      }

      // 3. طلبات معلّقة لم تصل السيرفر سابقاً، وطلبات الأدمن
      await this.flushPendingOrders();
      if (isAdmin) await this.syncOrders();
    } catch (e) {
      // وضع غير متصل أو تشغيل بدون خادم
    }
  }

  // يحفظ نسخة من كتالوج هذا الجهاز (مرة واحدة فقط) قبل أن يستبدله كتالوج السيرفر،
  // ليستطيع الأدمن اعتماده كنسخة رئيسية من لوحة الإدارة.
  backupDeviceCatalog() {
    try {
      if (localStorage.getItem('topcam_device_catalog_backup')) return;
      const raw = localStorage.getItem(STORE_KEYS.PRODUCTS);
      if (!raw) return;
      const products = JSON.parse(raw);
      if (!Array.isArray(products) || !products.length) return;
      localStorage.setItem('topcam_device_catalog_backup', JSON.stringify({ savedAt: new Date().toISOString(), count: products.length, products }));
    } catch (e) {}
  }

  getDeviceCatalogBackup() {
    try {
      const b = JSON.parse(localStorage.getItem('topcam_device_catalog_backup') || 'null');
      return b && Array.isArray(b.products) ? b : null;
    } catch (e) { return null; }
  }

  // الأدمن: جلب كل الطلبات من السيرفر
  async syncOrders() {
    if (!this.adminKey()) return false;
    try {
      const res = await this.apiFetch('/api/orders');
      if (res.status === 401) {
        try { sessionStorage.removeItem('topcam_admin_key'); } catch (e) {}
        window.dispatchEvent(new CustomEvent('admin_unauthorized'));
        return false;
      }
      if (!res.ok) return false;
      const list = await res.json();
      if (!Array.isArray(list)) return false;
      const next = JSON.stringify(list);
      if (localStorage.getItem(STORE_KEYS.ORDERS) !== next) {
        localStorage.setItem(STORE_KEYS.ORDERS, next);
        this.dispatchChange('orders_updated');
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  // الزبون: إرسال الطلب للسيرفر، وإن فشل نحتفظ به ونعيد المحاولة لاحقاً
  async postOrder(order) {
    try {
      const res = await this.apiFetch('/api/orders', { method: 'POST', body: JSON.stringify(order) });
      if (res.status >= 400 && res.status < 500 && res.status !== 429) return 'rejected';
      return res.ok ? 'ok' : 'retry';
    } catch (e) {
      return 'retry';
    }
  }

  getPendingOrders() {
    try { return JSON.parse(localStorage.getItem('topcam_pending_orders') || '[]'); } catch (e) { return []; }
  }

  async flushPendingOrders() {
    const pending = this.getPendingOrders();
    if (!pending.length) return;
    const left = [];
    for (const o of pending) {
      const r = await this.postOrder(o);
      if (r === 'retry') left.push(o);
    }
    try { localStorage.setItem('topcam_pending_orders', JSON.stringify(left)); } catch (e) {}
  }

  // ================= المنتجات =================
  getDeletedProductIds() {
    try {
      let deleted = [];
      const data = localStorage.getItem(STORE_KEYS.DELETED_IDS);
      if (data) {
        try { deleted = JSON.parse(data) || []; } catch(e) { deleted = []; }
      }

      // كشف تلقائي ذكي: أي صنف غير موجود في قائمة المنتجات المخزنة على هذا الجهاز يتم احتسابه كمحذوف تلقائياً
      const storedProds = localStorage.getItem(STORE_KEYS.PRODUCTS);
      if (storedProds && typeof INITIAL_PRODUCTS !== 'undefined') {
        try {
          const prods = JSON.parse(storedProds);
          if (Array.isArray(prods) && prods.length > 0 && prods.length < INITIAL_PRODUCTS.length) {
            const currentIds = new Set(prods.map(p => p.id));
            let addedNew = false;
            INITIAL_PRODUCTS.forEach(ip => {
              if (!currentIds.has(ip.id) && !deleted.includes(ip.id)) {
                deleted.push(ip.id);
                addedNew = true;
              }
            });
            if (addedNew) {
              try { localStorage.setItem(STORE_KEYS.DELETED_IDS, JSON.stringify(deleted)); } catch(e) {}
            }
          }
        } catch(e) {}
      }

      return deleted;
    } catch (e) {
      return [];
    }
  }

  isProductDeleted(id) {
    if (!id) return false;
    const deleted = this.getDeletedProductIds();
    return deleted.includes(id);
  }

  getProducts() {
    try {
      const deleted = new Set(this.getDeletedProductIds());
      const data = localStorage.getItem(STORE_KEYS.PRODUCTS);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) {
          return deleted.size > 0 ? parsed.filter(p => !deleted.has(p.id)) : parsed;
        }
      }
      const base = typeof INITIAL_PRODUCTS !== 'undefined' ? INITIAL_PRODUCTS : [];
      return deleted.size > 0 ? base.filter(p => !deleted.has(p.id)) : base;
    } catch (e) {
      const deleted = new Set(this.getDeletedProductIds());
      const base = typeof INITIAL_PRODUCTS !== 'undefined' ? INITIAL_PRODUCTS : [];
      return deleted.size > 0 ? base.filter(p => !deleted.has(p.id)) : base;
    }
  }

  getProductById(id) {
    if (this.isProductDeleted(id)) return null;
    const products = this.getProducts();
    return products.find(p => p.id === id) || null;
  }

  saveProducts(products, opts = {}) {
    const deleted = new Set(this.getDeletedProductIds());
    const cleanList = Array.isArray(products) ? products.filter(p => !deleted.has(p.id)) : [];
    localStorage.setItem(STORE_KEYS.PRODUCTS, JSON.stringify(cleanList));
    this.dispatchChange('products_updated');
    if (!opts.noPush) this.pushCatalog();
  }

  addProduct(productData) {
    const products = this.getProducts();
    const newId = 'PRD-' + Math.floor(1000 + Math.random() * 9000);
    const newProduct = {
      id: newId,
      name: productData.name,
      nameEn: productData.nameEn || '',
      brand: productData.brand || this.detectBrand(productData.name + ' ' + (productData.nameEn || '')),
      category: productData.category || 'cameras',
      price: parseFloat(productData.price) || 0,
      oldPrice: productData.oldPrice ? parseFloat(productData.oldPrice) : null,
      rating: 5.0,
      stock: parseInt(productData.stock) || 1,
      badge: productData.badge || '',
      availability: productData.availability || 'none',
      image: productData.image || 'images/camera_body.jpg',
      description: productData.description || '',
      specs: productData.specs || {}
    };
    products.unshift(newProduct);
    this.saveProducts(products);
    return newProduct;
  }

  updateProduct(id, updates) {
    const products = this.getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      if (updates.name && !updates.brand) {
        updates.brand = this.detectBrand(updates.name + ' ' + (updates.nameEn || products[index].nameEn || ''));
      }
      products[index] = { ...products[index], ...updates };
      this.saveProducts(products);
      return products[index];
    }
    return null;
  }

  quickUpdateStock(id, newStock) {
    return this.updateProduct(id, { stock: Math.max(0, parseInt(newStock) || 0) });
  }

  quickUpdatePrice(id, newPrice, newOldPrice = null) {
    const updates = { price: parseFloat(newPrice) || 0 };
    if (newOldPrice !== null) updates.oldPrice = parseFloat(newOldPrice) || null;
    return this.updateProduct(id, updates);
  }

  deleteProduct(id) {
    if (!id) return false;
    // 1. Permanently track in deleted IDs list so it never resurrects
    const deleted = this.getDeletedProductIds();
    if (!deleted.includes(id)) {
      deleted.push(id);
      try {
        localStorage.setItem(STORE_KEYS.DELETED_IDS, JSON.stringify(deleted));
      } catch (e) {}
    }

    // 2. إرسال فوري إلى السيرفر ليتزامن الحذف على الهواتف وكافة الأجهزة الأخرى
    try {
      this.apiFetch('/api/deleted-ids', {
        method: 'POST',
        body: JSON.stringify({ id })
      }).catch(() => {});
    } catch (e) {}

    // 3. Remove product from current list and persist
    const products = this.getProducts();
    const filtered = products.filter(p => p.id !== id);
    this.saveProducts(filtered);
    return true;
  }

  detectBrand(text) {
    const t = (text || '').toLowerCase();
    if (t.includes('sony') || t.includes('سوني')) return 'Sony';
    if (t.includes('canon') || t.includes('كانون')) return 'Canon';
    if (t.includes('dji') || t.includes('دي جي آي')) return 'DJI';
    if (t.includes('aputure') || t.includes('أبوتشر')) return 'Aputure';
    if (t.includes('godox') || t.includes('جودوكس')) return 'Godox';
    if (t.includes('tilta') || t.includes('تيلتا')) return 'Tilta';
    if (t.includes('smallrig') || t.includes('سمول ريج')) return 'SmallRig';
    if (t.includes('sigma') || t.includes('سيجما')) return 'Sigma';
    if (t.includes('sennheiser') || t.includes('سنهيزر')) return 'Sennheiser';
    if (t.includes('rode') || t.includes('رود')) return 'Røde';
    if (t.includes('sandisk') || t.includes('سان ديسك')) return 'SanDisk';
    return 'TOP CAM Exclusive';
  }

  // ================= جرد المخزون والأسهم =================
  getInventoryAudit() {
    const products = this.getProducts();
    const totalCount = products.length;
    let totalStockUnits = 0;
    let totalValue = 0;
    let lowStockCount = 0;
    let outOfStockCount = 0;

    products.forEach(p => {
      const stock = parseInt(p.stock) || 0;
      const price = parseFloat(p.price) || 0;
      totalStockUnits += stock;
      totalValue += (stock * price);
      if (stock === 0) outOfStockCount++;
      else if (stock < 5) lowStockCount++;
    });

    return {
      totalProducts: totalCount,
      totalUnits: totalStockUnits,
      totalValuation: totalValue,
      lowStock: lowStockCount,
      outOfStock: outOfStockCount
    };
  }

  // ================= جرد الأكثر مبيعاً (Best Sellers) =================
  getBestSellers() {
    const orders = this.getOrders();
    const products = this.getProducts();
    const salesMap = {};

    // تتبع مبيعات كل منتج من الطلبات المؤكدة وغير الملغاة
    orders.forEach(order => {
      if (order.status !== 'cancelled') {
        (order.items || []).forEach(item => {
          const key = item.name || item.id;
          if (!salesMap[key]) {
            salesMap[key] = {
              name: item.name,
              id: item.id,
              image: item.image,
              price: item.price,
              unitsSold: 0,
              revenue: 0,
              ordersCount: 0
            };
          }
          const qty = parseInt(item.quantity) || 1;
          salesMap[key].unitsSold += qty;
          salesMap[key].revenue += (qty * (parseFloat(item.price) || 0));
          salesMap[key].ordersCount += 1;
        });
      }
    });

    // تحويل إلى مصفوفة وربطها بالمخزون الحالي
    const bestSellersList = Object.values(salesMap).map(item => {
      const currentProduct = products.find(p => p.name === item.name || p.id === item.id);
      return {
        ...item,
        currentStock: currentProduct ? (currentProduct.stock || 0) : 0,
        productId: currentProduct ? currentProduct.id : null,
        badge: currentProduct ? currentProduct.badge : ''
      };
    });

    bestSellersList.sort((a, b) => b.unitsSold - a.unitsSold);
    return bestSellersList;
  }

  // ================= إحصائيات الوكالات والعلامات التجارية =================
  getBrandStats() {
    const products = this.getProducts();
    const orders = this.getOrders();
    const brandsMap = {};

    products.forEach(p => {
      const brand = p.brand || this.detectBrand(p.name + ' ' + (p.nameEn || ''));
      if (!brandsMap[brand]) {
        brandsMap[brand] = {
          brand: brand,
          productCount: 0,
          totalStock: 0,
          totalValue: 0,
          unitsSold: 0,
          totalSales: 0
        };
      }
      const stock = parseInt(p.stock) || 0;
      const price = parseFloat(p.price) || 0;
      brandsMap[brand].productCount += 1;
      brandsMap[brand].totalStock += stock;
      brandsMap[brand].totalValue += (stock * price);
    });

    orders.forEach(order => {
      if (order.status !== 'cancelled') {
        (order.items || []).forEach(item => {
          const brand = this.detectBrand(item.name);
          if (brandsMap[brand]) {
            const qty = parseInt(item.quantity) || 1;
            brandsMap[brand].unitsSold += qty;
            brandsMap[brand].totalSales += (qty * (parseFloat(item.price) || 0));
          }
        });
      }
    });

    return Object.values(brandsMap).sort((a, b) => b.totalValue - a.totalValue);
  }

  // ================= إدارة البانرات والصور =================
  getBanners() {
    try {
      const data = localStorage.getItem(STORE_KEYS.BANNERS);
      return data ? { ...DEFAULT_BANNERS, ...JSON.parse(data) } : DEFAULT_BANNERS;
    } catch (e) {
      return DEFAULT_BANNERS;
    }
  }

  saveBanners(banners) {
    const current = this.getBanners();
    const updated = { ...current, ...banners };
    localStorage.setItem(STORE_KEYS.BANNERS, JSON.stringify(updated));
    this.dispatchChange('banners_updated');
    this.pushKv('banners', updated);
    return updated;
  }

  // ================= إدارة نافذة العرض المنبثقة (Promo Popup Modal) =================
  getPromoPopup() {
    try {
      const data = localStorage.getItem(STORE_KEYS.PROMO_POPUP);
      return data ? { ...DEFAULT_PROMO_POPUP, ...JSON.parse(data) } : DEFAULT_PROMO_POPUP;
    } catch (e) {
      return DEFAULT_PROMO_POPUP;
    }
  }

  savePromoPopup(promo) {
    const current = this.getPromoPopup();
    const updated = { ...current, ...promo };
    localStorage.setItem(STORE_KEYS.PROMO_POPUP, JSON.stringify(updated));
    this.dispatchChange('promo_popup_updated');
    this.pushKv('promo', updated);
    return updated;
  }

  // ================= إدارة قسم Gear Up وصور المتجر =================
  getGearUp() {
    try {
      const data = localStorage.getItem(STORE_KEYS.GEAR_UP);
      return data ? { ...DEFAULT_GEAR_UP, ...JSON.parse(data) } : DEFAULT_GEAR_UP;
    } catch (e) {
      return DEFAULT_GEAR_UP;
    }
  }

  saveGearUp(gearUpData) {
    const current = this.getGearUp();
    const updated = { ...current, ...gearUpData };
    localStorage.setItem(STORE_KEYS.GEAR_UP, JSON.stringify(updated));
    this.dispatchChange('gear_up_updated');
    this.pushKv('gearUp', updated);
    return updated;
  }

  // ================= السلة (Cart) =================
  getCart() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEYS.CART) || '[]');
    } catch (e) {
      return [];
    }
  }

  saveCart(cart) {
    localStorage.setItem(STORE_KEYS.CART, JSON.stringify(cart));
    this.dispatchChange('cart_updated');
  }

  addToCart(productId, quantity = 1) {
    const product = this.getProductById(productId);
    if (!product) return false;

    let cart = this.getCart();
    const existing = cart.find(item => item.id === productId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: quantity
      });
    }

    this.saveCart(cart);
    return true;
  }

  removeFromCart(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== productId);
    this.saveCart(cart);
  }

  clearCart() {
    this.saveCart([]);
  }

  getCartCount() {
    const cart = this.getCart();
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  // ================= الطلبات ولوحة التحكم ونظام واتساب =================
  getOrders() {
    try {
      const data = localStorage.getItem(STORE_KEYS.ORDERS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveOrders(orders) {
    localStorage.setItem(STORE_KEYS.ORDERS, JSON.stringify(orders));
    this.dispatchChange('orders_updated');
  }

  createOrder(orderData) {
    const orders = this.getOrders();
    const settings = this.getSettings();
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

    const newOrder = {
      id: orderId,
      date: new Date().toISOString(),
      customerName: orderData.customerName,
      phone: orderData.phone,
      city: orderData.city || '',
      address: orderData.address,
      paymentMethod: orderData.paymentMethod || 'cash_on_delivery',
      notes: orderData.notes || '',
      status: 'pending',
      statusText: 'قيد المراجعة وبانتظار الموافقة',
      items: orderData.items || this.getCart(),
      subtotal: orderData.subtotal,
      shipping: orderData.shipping || 0,
      total: orderData.total
    };

    // الطلب يُرسل للسيرفر (هو من يخصم المخزون ويعيد حساب السعر). إن فشل الإرسال نعيد المحاولة لاحقاً.
    if (this.adminKey()) {
      orders.unshift(newOrder);
      this.saveOrders(orders);
    }
    this.clearCart();
    this.postOrder(newOrder).then(r => {
      if (r === 'retry') {
        const pending = this.getPendingOrders();
        pending.push(newOrder);
        try { localStorage.setItem('topcam_pending_orders', JSON.stringify(pending)); } catch (e) {}
      }
      if (this.adminKey()) this.syncOrders();
      else this.syncWithServer();
    });

    const whatsappUrl = this.generateWhatsAppMessage(newOrder, settings);

    return {
      order: newOrder,
      whatsappUrl: whatsappUrl
    };
  }

  generateWhatsAppMessage(order, settings) {
    const isEn = (typeof localStorage !== 'undefined' && localStorage.getItem('topcam_lang') === 'en');
    const currency = isEn ? 'JOD' : (settings.currency || 'د.أ');
    const storeNumber = (settings.whatsappNumber || '962790000000').replace(/[^0-9]/g, '');

    const paymentMap = {
      cash_on_delivery: 'الدفع عند الاستلام',
      bank_transfer: 'تحويل بنكي / محفظة إلكترونية',
      credit_card: 'بطاقة فيزا / ماستركارد'
    };

    let msg = `📸 *طلب شراء جديد من متجر TOP CAM الأردن*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `🔖 *رقم الطلب:* #${order.id}\n`;
    msg += `👤 *اسم العميل:* ${order.customerName}\n`;
    msg += `📱 *رقم الهاتف:* ${order.phone}\n`;
    msg += `📍 *المدينة والعنوان:* ${order.city} - ${order.address}\n`;
    msg += `💳 *طريقة الدفع:* ${paymentMap[order.paymentMethod] || order.paymentMethod}\n`;
    if (order.notes) {
      msg += `📝 *ملاحظات:* ${order.notes}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📦 *المعدات المطلوبة:*\n`;

    order.items.forEach((item, index) => {
      const preTag = item.isPreOrder ? (isEn ? ' [PRE-ORDER]' : ' [طلب مسبق]') : '';
      msg += `${index + 1}. ${item.name}${preTag}\n`;
      msg += `   └ الكمية: ${item.quantity} × ${item.price} ${currency} = ${item.quantity * item.price} ${currency}\n`;
    });

    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `💰 *المجموع:* ${order.subtotal} ${currency}\n`;
    msg += `🚚 *الشحن:* ${order.shipping === 0 ? 'مجاني' : order.shipping + ' ' + currency}\n`;
    msg += `✨ *الإجمالي الكلي:* *${order.total} ${currency}*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `⏳ *حالة الطلب في النظام:* بانتظار اعتماد الإدارة وتأكيد الشحن.\n`;

    return `https://wa.me/${storeNumber}?text=${encodeURIComponent(msg)}`;
  }

  generateCustomerStatusWhatsApp(order, newStatus) {
    const settings = this.getSettings();
    const phone = (order.phone || '').replace(/[^0-9]/g, '');

    const statusTexts = {
      approved: '✅ تم اعتماد وموافقة طلبك بنجاح وجاري تجهيز المعدات للشحن.',
      shipped: '🚚 تم تسليم طلبك لشركة الشحن السريع، وهو في طريقه إليك الآن.',
      completed: '🎉 تم تأكيد وصول الطلب بنجاح. شكراً لثقتكم بشركة TOP CAM ونرجو لكم تصويراً رائعاً!',
      cancelled: '❌ تم إلغاء الطلب بناءً على المراجعة. نعتذر لأي إزعاج ويسعدنا دائماً خدمتكم.'
    };

    let msg = `مرحباً أ/ *${order.customerName}* 📸\n\n`;
    msg += `بخصوص طلبك رقم *#${order.id}* من *${settings.storeName}*:\n`;
    msg += `${statusTexts[newStatus] || 'تم تحديث حالة طلبك.'}\n\n`;
    msg += `قيمة الطلب: *${order.total} ${settings.currency}*\n`;
    msg += `لأي استفسار، فريقنا في خدمتكم دائماً! ✨`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }

  updateOrderStatus(orderId, status) {
    const orders = this.getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      const statusMap = {
        pending: 'قيد المراجعة',
        approved: 'تمت الموافقة',
        shipped: 'قيد الشحن والتوصيل',
        completed: 'تم التوصيل بنجاح',
        cancelled: 'ملغي / مرفوض'
      };
      order.statusText = statusMap[status] || status;
      order.updatedAt = new Date().toISOString();
      this.saveOrders(orders);
      this.apiFetch('/api/orders/' + encodeURIComponent(orderId), { method: 'PATCH', body: JSON.stringify({ status }) })
        .then(r => { if (!r.ok) this.syncOrders(); }).catch(() => {});
      return order;
    }
    return null;
  }

  deleteOrder(orderId) {
    let orders = this.getOrders();
    orders = orders.filter(o => o.id !== orderId);
    this.saveOrders(orders);
    this.apiFetch('/api/orders/' + encodeURIComponent(orderId), { method: 'DELETE' })
      .then(r => { if (!r.ok) this.syncOrders(); }).catch(() => {});
    return true;
  }

  // ================= الإعدادات =================
  getSettings() {
    try {
      const data = localStorage.getItem(STORE_KEYS.SETTINGS);
      if (data) {
        const parsed = JSON.parse(data);
        // ترقية العملة تلقائياً إلى الدينار الأردني إذا كانت دولار أو غير محددة
        if (parsed.currency === '$' || !parsed.currency || parsed.activeCurrency === 'USD') {
          parsed.currency = 'د.أ';
          parsed.currencyName = 'دينار أردني';
          parsed.activeCurrency = 'JOD';
          this.saveSettings(parsed);
        }
        return { ...DEFAULT_SETTINGS, ...parsed };
      }
      return DEFAULT_SETTINGS;
    } catch (e) {
      return DEFAULT_SETTINGS;
    }
  }

  saveSettings(newSettings) {
    const current = this.getSettings();
    const updated = { ...current, ...newSettings };
    localStorage.setItem(STORE_KEYS.SETTINGS, JSON.stringify(updated));
    this.dispatchChange('settings_updated');
    this.pushKv('settings', updated);
    return updated;
  }

  formatPrice(price) {
    const isEn = (typeof localStorage !== 'undefined' && localStorage.getItem('topcam_lang') === 'en');
    const symbol = isEn ? 'JOD' : 'د.أ';
    const num = Math.round(price || 0);
    return `${num.toLocaleString()} ${symbol}`;
  }

  dispatchChange(eventName) {
    window.dispatchEvent(new CustomEvent(eventName));
  }
}

// إنشاء مثيل عام للمتجر
const storeDB = new StoreDB();
window.storeDB = storeDB;

// الأدمن: تحديث الطلبات تلقائياً كل 8 ثوانٍ، والكتالوج والإعدادات كل دقيقة
if (storeDB.adminKey()) {
  setInterval(() => { if (!document.hidden) storeDB.syncOrders(); }, 8000);
  setInterval(() => { if (!document.hidden) storeDB.syncWithServer(); }, 60000);
}
// الزبون: إعادة محاولة إرسال أي طلب لم يصل
window.addEventListener('online', () => storeDB.flushPendingOrders());
