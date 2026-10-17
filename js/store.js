// طبقة إدارة البيانات والطلبات والتخزين المحلي لمتجر الكاميرات
// Camera Store Database & State Layer - TOP CAM Jordan

const STORE_KEYS = {
  PRODUCTS: 'camera_store_products_v1',
  ORDERS: 'camera_store_orders_v1',
  CART: 'camera_store_cart_v1',
  SETTINGS: 'camera_store_settings_v1',
  BANNERS: 'camera_store_banners_v1',
  PROMO_POPUP: 'camera_store_promo_popup_v1',
  GEAR_UP: 'camera_store_gear_up_v1'
};

const DEFAULT_SETTINGS = {
  storeName: 'TOP CAM | شركة مخزن الكاميرات',
  whatsappNumber: '962790000000', // رقم الواتساب الافتراضي للمتجر
  currency: '$',
  currencyName: 'دولار أمريكي',
  currencyRate: 1, // مقابل الدولار
  currencies: {
    USD: { symbol: '$', name: 'دولار أمريكي', rate: 1 },
    SAR: { symbol: 'ر.س', name: 'ريال سعودي', rate: 3.75 },
    AED: { symbol: 'د.إ', name: 'درهم إماراتي', rate: 3.67 },
    JOD: { symbol: 'د.أ', name: 'دينار أردني', rate: 0.71 }
  },
  activeCurrency: 'USD',
  taxRate: 0.05,
  freeShippingThreshold: 500
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
  title: '🔥 عرض خاص: خصم 25% على جميع الستاندات ومعدات الاستوديو!',
  subtitle: 'استخدم كود الخصم (TOP25) عند إتمام أي طلب، العرض متاح لفترة محدودة لكافة صناع المحتوى والمصورين في الأردن.',
  badge: 'خصم 25% لفترة محدودة',
  targetCategory: 'stands',
  promoCode: 'TOP25',
  buttonText: 'تصفح عروض الستاندات الآن 🛍️',
  image: 'images/gear_frame_matters.jpg'
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
    // 1. تهيئة وتحديث صور المنتجات المحلية الأساسية لضمان بقاء صور الكاميرات والستاندات والعدسات الحقيقية
    const localImageMap = {
      'CAM-001': 'images/camera_body.jpg',
      'CAM-002': 'images/new_camera.jpg',
      'CAM-003': 'images/hero_camera.jpg',
      'GMB-001': 'images/gimbal_stab.jpg',
      'GMB-002': 'images/gimbal_stab.jpg',
      'LGT-001': 'images/flash_light.jpg',
      'LGT-002': 'images/flash_light.jpg',
      'STD-001': 'images/tripod_stand.jpg',
      'STD-002': 'images/tripod_stand.jpg',
      'FLT-001': 'images/filter_lens.jpg',
      'FLT-002': 'images/filter_lens.jpg',
      'MEM-001': 'images/camera_dials.jpg',
      'BAT-001': 'images/vmount_battery.jpg',
      'BAT-002': 'images/vmount_battery.jpg',
      'BAG-001': 'images/camera_bag.jpg',
      'CAG-001': 'images/camera_cage.jpg',
      'STP-001': 'images/camera_bag.jpg',
      'COV-001': 'images/camera_body.jpg'
    };
    let currentProds = [];
    try {
      const stored = localStorage.getItem(STORE_KEYS.PRODUCTS);
      currentProds = stored ? JSON.parse(stored) : (typeof INITIAL_PRODUCTS !== 'undefined' ? INITIAL_PRODUCTS : []);
    } catch(e) {
      currentProds = typeof INITIAL_PRODUCTS !== 'undefined' ? INITIAL_PRODUCTS : [];
    }
    // مسح وتحديث أي صور خارجية قديمة (كصور السيارات أو الأشخاص) فوراً
    const hasExternalImages = currentProds.some(p => p.image && (p.image.startsWith('http') || p.image.includes('unsplash')));
    if (hasExternalImages || currentProds.length === 0) {
      currentProds = (typeof INITIAL_PRODUCTS !== 'undefined' ? INITIAL_PRODUCTS : []);
    } else {
      currentProds.forEach(p => {
        if (localImageMap[p.id]) {
          p.image = localImageMap[p.id];
        }
      });
    }
    localStorage.setItem(STORE_KEYS.PRODUCTS, JSON.stringify(currentProds));

    // 2. تهيئة الطلبات الأولية
    if (!localStorage.getItem(STORE_KEYS.ORDERS)) {
      const sampleOrders = [
        {
          id: 'ORD-72941',
          date: new Date(Date.now() - 3600000 * 3).toISOString(),
          customerName: 'طارق الأحمد',
          phone: '+962791234567',
          city: 'عمان',
          address: 'عبدون - شارع دمشق - مجمع رقم 14',
          paymentMethod: 'cash_on_delivery',
          notes: 'يرجى التوصيل بعد الساعة 4 عصراً والتأكد من وجود الكفالة',
          status: 'pending',
          statusText: 'قيد المراجعة',
          items: [
            {
              id: 'CAM-001',
              name: 'Sony FX3 Cinema Line Full-Frame Camera',
              price: 3899,
              quantity: 1,
              image: 'images/camera_body.jpg'
            },
            {
              id: 'CAG-001',
              name: 'قفص كاميرا سمول ريج SmallRig Cage FX3',
              price: 99,
              quantity: 1,
              image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=400&q=80'
            }
          ],
          subtotal: 3998,
          shipping: 0,
          total: 3998
        },
        {
          id: 'ORD-61830',
          date: new Date(Date.now() - 3600000 * 20).toISOString(),
          customerName: 'سارة خالد المنصور',
          phone: '+962788765432',
          city: 'عمان',
          address: 'دابوق - قرب قصر المؤتمرات',
          paymentMethod: 'bank_transfer',
          notes: 'تم إرسال إشعار التحويل البنكي',
          status: 'approved',
          statusText: 'تمت الموافقة والتجهيز',
          items: [
            {
              id: 'GMB-001',
              name: 'DJI RS 3 Pro Gimbal Stabilizer Combo',
              price: 869,
              quantity: 1,
              image: 'https://images.unsplash.com/photo-1589872545564-96464f89d311?auto=format&fit=crop&w=400&q=80'
            },
            {
              id: 'MEM-001',
              name: 'Sony TOUGH CFexpress Type A 160GB',
              price: 369,
              quantity: 2,
              image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80'
            }
          ],
          subtotal: 1607,
          shipping: 0,
          total: 1607
        },
        {
          id: 'ORD-54912',
          date: new Date(Date.now() - 3600000 * 48).toISOString(),
          customerName: 'محمد القيسي',
          phone: '+962795551234',
          city: 'إربد',
          address: 'شارع الجامعة - مجمع التاج',
          paymentMethod: 'cash_on_delivery',
          notes: 'توصيل عبر شركة الشحن السريع',
          status: 'completed',
          statusText: 'تم التوصيل بنجاح',
          items: [
            {
              id: 'CAM-002',
              name: 'Sony Alpha 7 IV Mirrorless Camera',
              price: 2499,
              quantity: 1,
              image: 'images/new_camera.jpg'
            }
          ],
          subtotal: 2499,
          shipping: 0,
          total: 2499
        }
      ];
      localStorage.setItem(STORE_KEYS.ORDERS, JSON.stringify(sampleOrders));
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
  }

  // ================= المنتجات =================
  getProducts() {
    try {
      const data = localStorage.getItem(STORE_KEYS.PRODUCTS);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return typeof INITIAL_PRODUCTS !== 'undefined' ? INITIAL_PRODUCTS : [];
    } catch (e) {
      return typeof INITIAL_PRODUCTS !== 'undefined' ? INITIAL_PRODUCTS : [];
    }
  }

  getProductById(id) {
    const products = this.getProducts();
    return products.find(p => p.id === id) || null;
  }

  saveProducts(products) {
    localStorage.setItem(STORE_KEYS.PRODUCTS, JSON.stringify(products));
    this.dispatchChange('products_updated');
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
      badge: productData.badge || 'جديد',
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
    const orderId = 'ORD-' + Math.floor(10000 + Math.random() * 90000);

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

    // تقليل المخزون تلقائياً عند إنشاء الطلب
    if (newOrder.items && Array.isArray(newOrder.items)) {
      newOrder.items.forEach(item => {
        const prod = this.getProductById(item.id) || this.getProducts().find(p => p.name === item.name);
        if (prod) {
          const newStock = Math.max(0, (prod.stock || 0) - (item.quantity || 1));
          this.quickUpdateStock(prod.id, newStock);
        }
      });
    }

    orders.unshift(newOrder);
    this.saveOrders(orders);
    this.clearCart();

    const whatsappUrl = this.generateWhatsAppMessage(newOrder, settings);

    return {
      order: newOrder,
      whatsappUrl: whatsappUrl
    };
  }

  generateWhatsAppMessage(order, settings) {
    const currency = settings.currency || '$';
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
      msg += `${index + 1}. ${item.name}\n`;
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
      return order;
    }
    return null;
  }

  deleteOrder(orderId) {
    let orders = this.getOrders();
    orders = orders.filter(o => o.id !== orderId);
    this.saveOrders(orders);
    return true;
  }

  // ================= الإعدادات =================
  getSettings() {
    try {
      const data = localStorage.getItem(STORE_KEYS.SETTINGS);
      return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
    } catch (e) {
      return DEFAULT_SETTINGS;
    }
  }

  saveSettings(newSettings) {
    const current = this.getSettings();
    const updated = { ...current, ...newSettings };
    localStorage.setItem(STORE_KEYS.SETTINGS, JSON.stringify(updated));
    this.dispatchChange('settings_updated');
    return updated;
  }

  formatPrice(priceInUSD) {
    const settings = this.getSettings();
    const symbol = settings.currency || '$';
    const num = Math.round(priceInUSD);
    return `${num.toLocaleString()} ${symbol}`;
  }

  dispatchChange(eventName) {
    window.dispatchEvent(new CustomEvent(eventName));
  }
}

// إنشاء مثيل عام للمتجر
const storeDB = new StoreDB();
window.storeDB = storeDB;
