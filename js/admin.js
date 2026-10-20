// ══════════════════════════════════════════════════════════════════════
// برمجة لوحة تحكم TOP CAM العالمية المتطورة (TOP CAM Admin Engine 2.6)
// ══════════════════════════════════════════════════════════════════════

let currentOrderFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  renderAdminStats();
  renderAdminDashboardCharts();
  renderAdminOrders();
  renderAdminInventory();
  renderAdminBestSellers();
  renderAdminBrands();
  loadGearUpSettingsAdmin();
  loadHeroBannersAdmin();
  loadPromoPopupSettings();
  loadAdminSettings();

  // مزامنة تلقائية مع السيرفر لتوحيد الأصناف المحذوفة فورياً
  if (window.storeDB && storeDB.syncWithServer) {
    storeDB.syncWithServer().then(() => {
      renderAdminStats();
      renderAdminDashboardCharts();
      renderAdminInventory();
      renderAdminBrands();
    }).catch(() => {});
  }

  // الاستماع للتحديثات اللحظية عبر المتجر
  window.addEventListener('orders_updated', () => {
    renderAdminStats();
    renderAdminDashboardCharts();
    renderAdminOrders();
    renderAdminBestSellers();
    renderAdminBrands();
  });

  window.addEventListener('products_updated', () => {
    renderAdminStats();
    renderAdminDashboardCharts();
    renderAdminInventory();
    renderAdminBestSellers();
    renderAdminBrands();
  });

  window.addEventListener('gear_up_updated', () => {
    loadGearUpSettingsAdmin();
  });

  // دعم السحب والإفلات لصورة البضاعة في نافذة الإضافة
  const dropzone = document.getElementById('prodUploadDropzone');
  if (dropzone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('border-yellow-500', 'bg-yellow-100/50');
      }, false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('border-yellow-500', 'bg-yellow-100/50');
      }, false);
    });
    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files && files.length > 0) {
        handleImageFileUpload({ target: { files: files } }, 'prodImage', 'prodImagePreview', 'prodImagePreviewBox');
      }
    }, false);
  }
});

// ================= 1. التحكم بالسايدبار والتنقل =================
function toggleSidebar(open) {
  const sidebar = document.getElementById('adminSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (!sidebar) return;

  if (open) {
    sidebar.classList.remove('translate-x-full');
    overlay?.classList.remove('hidden');
  } else {
    sidebar.classList.add('translate-x-full');
    overlay?.classList.add('hidden');
  }
}

function switchSidebarTab(tabId, btn) {
  // إخفاء كل البانلز
  document.querySelectorAll('.admin-pane').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.sidebar-link').forEach(b => b.classList.remove('active'));

  // إظهار التبويب المطلوب
  const target = document.getElementById(tabId);
  if (target) target.classList.remove('hidden');

  if (btn) btn.classList.add('active');

  // تحديث عنوان الهيدر
  const titles = {
    dashboardTab: 'المؤشرات العامة والرسوم البيانية',
    ordersTab: 'إدارة واعتماد طلبات الشراء',
    inventoryTab: 'جرد الأسهم والمخزون والأسعار الفورية',
    bestSellersTab: 'جرد المنتجات الأكثر مبيعاً وإقبالاً',
    brandsTab: 'جرد الوكالات والعلامات التجارية العالمية',
    mediaTab: 'التحكم بكافة صور المتجر وقسم Gear Up',
    promoPopupTab: 'نافذة العرض الترويجي المنبثقة للزوار',
    settingsTab: 'إعدادات المتجر وبيانات الشحن'
  };
  const titleEl = document.getElementById('currentSectionTitle');
  if (titleEl && titles[tabId]) titleEl.textContent = titles[tabId];

  // إغلاق السايدبار في الموبايل عند النقر
  if (window.innerWidth < 768) {
    toggleSidebar(false);
  }

  // تحديث الجداول حسب التبويب
  if (tabId === 'dashboardTab') renderAdminDashboardCharts();
  if (tabId === 'inventoryTab') renderAdminInventory();
  if (tabId === 'bestSellersTab') renderAdminBestSellers();
  if (tabId === 'brandsTab') renderAdminBrands();
  if (tabId === 'mediaTab') {
    loadGearUpSettingsAdmin();
    loadHeroBannersAdmin();
  }
  if (tabId === 'promoPopupTab') loadPromoPopupSettings();
}

// ================= 2. حساب المؤشرات والرسوم البيانية التفاعلية =================
function renderAdminStats() {
  const orders = storeDB.getOrders();
  const audit = storeDB.getInventoryAudit();

  const pendingOrders = orders.filter(o => o.status === 'pending');
  const totalSales = orders
    .filter(o => o.status !== 'cancelled')
    .reduce((sum, o) => sum + (o.total || 0), 0);

  // تحديث شارات السايدبار
  const sbOrdersBadge = document.getElementById('sidebarOrdersBadge');
  const sbStockBadge = document.getElementById('sidebarStockBadge');
  const filterPending = document.getElementById('filterCountPending');
  const totalCountLabel = document.getElementById('ordersTotalCountLabel');

  if (sbOrdersBadge) sbOrdersBadge.textContent = pendingOrders.length;
  if (sbStockBadge) sbStockBadge.textContent = audit.totalUnits.toLocaleString();
  if (filterPending) filterPending.textContent = pendingOrders.length;
  if (totalCountLabel) totalCountLabel.textContent = `(${orders.length} طلب)`;
}

function renderAdminDashboardCharts() {
  const orders = storeDB.getOrders();
  const audit = storeDB.getInventoryAudit();
  const brands = storeDB.getBrandStats();

  const pendingOrders = orders.filter(o => o.status === 'pending');
  const totalSales = orders
    .filter(o => o.status !== 'cancelled')
    .reduce((sum, o) => sum + (o.total || 0), 0);

  // كروت المؤشرات العلوية
  const salesEl = document.getElementById('dashTotalSales');
  const unitsEl = document.getElementById('dashTotalUnits');
  const productsEl = document.getElementById('dashTotalProducts');
  const pendingEl = document.getElementById('dashPendingOrders');
  const valEl = document.getElementById('dashTotalValuation');
  const alertsEl = document.getElementById('dashAlertsSummary');

  if (salesEl) salesEl.textContent = storeDB.formatPrice(totalSales);
  if (unitsEl) unitsEl.textContent = audit.totalUnits.toLocaleString();
  if (productsEl) productsEl.textContent = `${audit.totalProducts} صنف مسجل`;
  if (pendingEl) pendingEl.textContent = pendingOrders.length;
  if (valEl) valEl.textContent = storeDB.formatPrice(audit.totalValuation);
  if (alertsEl) alertsEl.textContent = `يوجد ${audit.lowStock} صنف في مستوى حرج (< 5) و ${audit.outOfStock} صنف نفذت كميته تماماً.`;

  // 1. رسم بياني لتوزيع مخزون الوكالات (Brand Distribution Chart)
  const chartContainer = document.getElementById('chartBrandBars');
  if (chartContainer) {
    const totalVal = Math.max(1, audit.totalValuation);
    chartContainer.innerHTML = brands.slice(0, 6).map(b => {
      const pct = Math.min(100, Math.round((b.totalValue / totalVal) * 100));
      return `
        <div>
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-bold text-slate-800 flex items-center gap-1.5 font-en">
              <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span>${b.brand}</span>
              <span class="text-[10px] text-slate-400 font-normal">(${b.totalStock} قطعة)</span>
            </span>
            <div class="flex items-center gap-2 font-en">
              <span class="font-black text-slate-900">${storeDB.formatPrice(b.totalValue)}</span>
              <span class="text-[10px] text-slate-400 font-bold font-mono">${pct}%</span>
            </div>
          </div>
          <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden p-0.5">
            <div class="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-700" style="width: ${Math.max(4, pct)}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. توزيع حالات الطلبات
  const statusContainer = document.getElementById('dashOrderStatusList');
  const totalOrdersEl = document.getElementById('dashTotalOrdersCount');
  if (statusContainer) {
    const statusCounts = {
      pending: orders.filter(o => o.status === 'pending').length,
      approved: orders.filter(o => o.status === 'approved').length,
      shipped: orders.filter(o => o.status === 'shipped').length,
      completed: orders.filter(o => o.status === 'completed').length,
      cancelled: orders.filter(o => o.status === 'cancelled').length
    };

    if (totalOrdersEl) totalOrdersEl.textContent = `${orders.length} طلب`;

    const statusMeta = [
      { key: 'pending', name: 'بانتظار الموافقة', bg: 'bg-amber-500', text: 'text-amber-700' },
      { key: 'approved', name: 'معتمدة للتجهيز', bg: 'bg-emerald-500', text: 'text-emerald-700' },
      { key: 'shipped', name: 'قيد الشحن والتوصيل', bg: 'bg-blue-500', text: 'text-blue-700' },
      { key: 'completed', name: 'وصلت وتم التسليم', bg: 'bg-purple-500', text: 'text-purple-700' },
      { key: 'cancelled', name: 'مرفوضة / ملغية', bg: 'bg-rose-500', text: 'text-rose-700' }
    ];

    statusContainer.innerHTML = statusMeta.map(m => {
      const count = statusCounts[m.key] || 0;
      const pct = orders.length > 0 ? Math.round((count / orders.length) * 100) : 0;
      return `
        <div class="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${m.bg}"></span>
            <span class="font-bold text-slate-700">${m.name}</span>
          </div>
          <div class="flex items-center gap-2 font-en">
            <span class="font-black text-slate-900">${count}</span>
            <span class="text-[10px] text-slate-400 font-mono">(${pct}%)</span>
          </div>
        </div>
      `;
    }).join('');
  }
}

// ================= 3. إدارة الطلبات (قبول، رفض، شحن، وصلت) =================
function filterAdminOrders(filter, btn) {
  currentOrderFilter = filter;
  document.querySelectorAll('.order-filter-btn').forEach(b => {
    b.classList.remove('bg-slate-900', 'text-yellow-400', 'shadow-xs');
    b.classList.add('bg-slate-100', 'text-slate-700');
  });
  if (btn) {
    btn.classList.remove('bg-slate-100', 'text-slate-700');
    btn.classList.add('bg-slate-900', 'text-yellow-400', 'shadow-xs');
  }
  renderAdminOrders();
}

function renderAdminOrders() {
  const tbody = document.getElementById('ordersTableBody');
  if (!tbody) return;

  let orders = storeDB.getOrders();

  if (currentOrderFilter !== 'all') {
    orders = orders.filter(o => o.status === currentOrderFilter);
  }

  if (orders.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-12 text-center text-slate-400">
          <i class="fa-solid fa-folder-open text-3xl mb-2 text-slate-300"></i>
          <p class="text-xs">لا توجد طلبات في هذا التصنيف حالياً.</p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = orders.map(order => {
    const formattedDate = new Date(order.date).toLocaleString('ar-JO', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const itemsSummary = (order.items || []).map(item => `
      <div class="flex items-center gap-1.5 text-[11px] mb-1">
        <span class="font-black text-amber-600 font-en">${item.quantity || 1}×</span>
        <span class="text-slate-800 font-medium truncate max-w-[210px]">${item.name}</span>
      </div>
    `).join('');

    const statusConfig = {
      pending: { bg: 'bg-amber-50 text-amber-700 border-amber-300', text: 'بانتظار الموافقة', icon: 'fa-clock' },
      approved: { bg: 'bg-emerald-50 text-emerald-700 border-emerald-300', text: 'تمت الموافقة', icon: 'fa-check' },
      shipped: { bg: 'bg-blue-50 text-blue-700 border-blue-300', text: 'جاري الشحن والتوصيل', icon: 'fa-truck-fast' },
      completed: { bg: 'bg-purple-50 text-purple-700 border-purple-300', text: 'وصلت وتم التسليم', icon: 'fa-box-check' },
      cancelled: { bg: 'bg-rose-50 text-rose-700 border-rose-300', text: 'مرفوض / ملغي', icon: 'fa-ban' }
    }[order.status] || { bg: 'bg-slate-50 text-slate-700 border-slate-200', text: order.status, icon: 'fa-info' };

    return `
      <tr class="hover:bg-slate-50/80 transition">
        <td class="py-3 px-3.5 font-black text-slate-900 font-en">#${order.id}</td>
        <td class="py-3 px-3.5 text-slate-400 text-[11px] whitespace-nowrap">${formattedDate}</td>
        <td class="py-3 px-3.5">
          <div class="font-bold text-slate-900">${order.customerName}</div>
          <div class="text-[11px] text-slate-600 font-en font-bold">${order.phone}</div>
          <div class="text-[10px] text-slate-400 mt-0.5">${order.city ? order.city + ' - ' : ''}${order.address}</div>
          ${order.notes ? `<div class="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded mt-1 inline-block border border-amber-200/60">ملاحظة: ${order.notes}</div>` : ''}
        </td>
        <td class="py-3 px-3.5 max-w-[230px]">${itemsSummary}</td>
        <td class="py-3 px-3.5 font-black text-slate-900 font-en text-sm">${storeDB.formatPrice(order.total)}</td>
        <td class="py-3 px-3.5">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold border ${statusConfig.bg}">
            <i class="fa-solid ${statusConfig.icon}"></i>
            <span>${statusConfig.text}</span>
          </span>
        </td>
        <td class="py-3 px-3.5">
          <div class="flex flex-col gap-1.5 min-w-[155px]">
            
            ${order.status === 'pending' ? `
              <div class="grid grid-cols-2 gap-1">
                <button onclick="approveOrder('${order.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] py-1.5 px-2 rounded-lg transition flex items-center justify-center gap-1 shadow-xs">
                  <i class="fa-solid fa-check"></i>
                  <span>موافقة</span>
                </button>
                <button onclick="rejectOrder('${order.id}')" class="bg-rose-600 hover:bg-rose-700 text-white font-bold text-[10px] py-1.5 px-2 rounded-lg transition flex items-center justify-center gap-1">
                  <i class="fa-solid fa-xmark"></i>
                  <span>رفض</span>
                </button>
              </div>
            ` : ''}

            ${(order.status === 'approved' || order.status === 'shipped') ? `
              <button onclick="markOrderDelivered('${order.id}')" class="bg-purple-600 hover:bg-purple-700 text-white font-bold text-[10.5px] py-1.5 px-2.5 rounded-lg transition flex items-center justify-center gap-1 shadow-xs">
                <i class="fa-solid fa-circle-check"></i>
                <span>تأكيد أنها وصلت</span>
              </button>
            ` : ''}

            <select onchange="changeOrderStatus('${order.id}', this.value)" class="bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-2 py-1 text-[11px] font-semibold outline-none focus:border-yellow-400 cursor-pointer">
              <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>⏳ بانتظار الموافقة</option>
              <option value="approved" ${order.status === 'approved' ? 'selected' : ''}>✅ تمت الموافقة</option>
              <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>🚚 جاري الشحن</option>
              <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>🎉 وصلت بنجاح</option>
              <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>❌ مرفوض / ملغي</option>
            </select>

            <div class="flex items-center gap-1">
              <button onclick="contactCustomerWhatsApp('${order.id}')" class="flex-1 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-[10px] py-1 rounded-md transition flex items-center justify-center gap-1" title="مراسلة عبر واتساب">
                <i class="fa-brands fa-whatsapp"></i>
                <span>مراسلة</span>
              </button>
              <button onclick="deleteOrderPrompt('${order.id}')" class="bg-slate-100 hover:bg-rose-100 text-slate-400 hover:text-rose-600 p-1.5 rounded-md transition" title="حذف">
                <i class="fa-solid fa-trash-can text-xs"></i>
              </button>
            </div>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function approveOrder(orderId) {
  const updated = storeDB.updateOrderStatus(orderId, 'approved');
  if (updated) {
    showAdminToast(`✅ تمت الموافقة على الطلب #${orderId} بنجاح!`, 'success');
    renderAdminStats();
    renderAdminDashboardCharts();
    renderAdminOrders();

    if (confirm(`تمت الموافقة على الطلب #${orderId}. هل ترغب بفتح واتساب لإشعار العميل ${updated.customerName}؟`)) {
      const url = storeDB.generateCustomerStatusWhatsApp(updated, 'approved');
      window.open(url, '_blank');
    }
  }
}

function rejectOrder(orderId) {
  if (confirm(`هل أنت متأكد من رفض الطلب #${orderId}؟`)) {
    const updated = storeDB.updateOrderStatus(orderId, 'cancelled');
    if (updated) {
      showAdminToast(`تم رفض وإلغاء الطلب #${orderId}`, 'info');
      renderAdminStats();
      renderAdminDashboardCharts();
      renderAdminOrders();
    }
  }
}

function markOrderDelivered(orderId) {
  const updated = storeDB.updateOrderStatus(orderId, 'completed');
  if (updated) {
    showAdminToast(`🎉 تم تسجيل الطلب #${orderId} بأنه (وصل وتم التسليم بنجاح)!`, 'success');
    renderAdminStats();
    renderAdminDashboardCharts();
    renderAdminOrders();

    if (confirm(`هل تود إرسال رسالة شكر للعميل ${updated.customerName} عبر واتساب؟`)) {
      const url = storeDB.generateCustomerStatusWhatsApp(updated, 'completed');
      window.open(url, '_blank');
    }
  }
}

function changeOrderStatus(orderId, newStatus) {
  const updated = storeDB.updateOrderStatus(orderId, newStatus);
  if (updated) {
    showAdminToast(`تم تحديث حالة الطلب #${orderId} إلى "${updated.statusText}"`, 'info');
    renderAdminStats();
    renderAdminDashboardCharts();
    renderAdminOrders();
  }
}

function contactCustomerWhatsApp(orderId) {
  const orders = storeDB.getOrders();
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  const url = storeDB.generateCustomerStatusWhatsApp(order, order.status || 'approved');
  window.open(url, '_blank');
}

function deleteOrderPrompt(orderId) {
  if (confirm(`هل أنت متأكد من حذف الطلب #${orderId} نهائياً؟`)) {
    storeDB.deleteOrder(orderId);
    showAdminToast(`تم حذف الطلب #${orderId}`, 'info');
    renderAdminStats();
    renderAdminDashboardCharts();
    renderAdminOrders();
  }
}

function addMockTestOrder() {
  const sampleNames = ['أحمد الشوابكة', 'يزن الخوالدة', 'فرح حداد', 'زيد المجالي', 'ليلى العبداللات'];
  const sampleCities = ['عمان', 'إربد', 'العقبة', 'الزرقاء', 'السلط'];
  const sampleAreas = ['عبدون', 'الصويفية', 'الشميساني', 'الجبيهة', 'دابوق'];
  const products = storeDB.getProducts();

  const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
  const randomCity = sampleCities[Math.floor(Math.random() * sampleCities.length)];
  const randomArea = sampleAreas[Math.floor(Math.random() * sampleAreas.length)];
  const randomProd = products[Math.floor(Math.random() * products.length)] || {
    id: 'PRD-101',
    name: 'Sony FX3 Cinema Line',
    price: 3899,
    image: 'images/camera_body.jpg'
  };

  const newOrder = storeDB.createOrder({
    customerName: randomName,
    phone: '+96279' + Math.floor(1000000 + Math.random() * 9000000),
    city: randomCity,
    address: `${randomArea} - شارع الملك عبدالله الثاني`,
    paymentMethod: 'cash_on_delivery',
    notes: 'يرجى الاتصال قبل الوصول للتنسيق',
    items: [
      {
        id: randomProd.id,
        name: randomProd.name,
        price: randomProd.price,
        quantity: 1,
        image: randomProd.image
      }
    ],
    subtotal: randomProd.price,
    shipping: 0,
    total: randomProd.price
  });

  showAdminToast(`🛎️ تم استلام طلب تجريبي جديد بنجاح #${newOrder.order.id}!`, 'success');
  renderAdminStats();
  renderAdminDashboardCharts();
  renderAdminOrders();
}

// ================= 4. جرد المخزون والأسهم والأسعار =================
function renderAdminInventory() {
  const tbody = document.getElementById('inventoryTableBody');
  if (!tbody) return;

  const searchTerm = (document.getElementById('inventorySearchInput')?.value || '').toLowerCase().trim();
  const stockFilter = document.getElementById('inventoryStockFilter')?.value || 'all';
  const categoryFilter = document.getElementById('inventoryCategoryFilter')?.value || 'all';

  let products = storeDB.getProducts();

  if (searchTerm) {
    products = products.filter(p => 
      (p.name || '').toLowerCase().includes(searchTerm) ||
      (p.nameEn || '').toLowerCase().includes(searchTerm) ||
      (p.id || '').toLowerCase().includes(searchTerm) ||
      (p.brand || '').toLowerCase().includes(searchTerm)
    );
  }

  if (stockFilter === 'in_stock') {
    products = products.filter(p => (parseInt(p.stock) || 0) >= 5);
  } else if (stockFilter === 'low_stock') {
    products = products.filter(p => (parseInt(p.stock) || 0) > 0 && (parseInt(p.stock) || 0) < 5);
  } else if (stockFilter === 'out_of_stock') {
    products = products.filter(p => (parseInt(p.stock) || 0) === 0);
  }

  if (categoryFilter !== 'all') {
    products = products.filter(p => p.category === categoryFilter);
  }

  if (products.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" class="py-12 text-center text-slate-400">
          <i class="fa-solid fa-box-open text-3xl mb-2 text-slate-300"></i>
          <p class="text-xs">لا توجد أصناف تطابق معايير التصفية المحددة.</p>
        </td>
      </tr>
    `;
    return;
  }

  const categoryNames = {
    cameras: 'كاميرات سينما وميرورليس',
    stands: 'ستاندات وترايبود',
    lighting: 'إضاءات واستوديو',
    filters: 'فلاتر وعدسات',
    memory: 'ميموريات وذاكرة',
    chargers_batteries: 'شواحن وبطاريات',
    bags: 'شناتي وحقائب',
    stabilizers: 'ستيبلايزرز وجيمبل',
    cages: 'كيج كاميرا وتثبيت',
    straps: 'أحزمة وستراب',
    covers: 'أغطية وحماية'
  };

  tbody.innerHTML = products.map(product => {
    const stock = parseInt(product.stock) || 0;
    const price = parseFloat(product.price) || 0;
    const oldPrice = product.oldPrice ? parseFloat(product.oldPrice) : null;
    const totalValuation = stock * price;

    let stockPill = `<span class="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold text-[10.5px] border border-emerald-200">متوفر (${stock})</span>`;
    if (stock === 0) {
      stockPill = `<span class="inline-flex items-center gap-1 text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full font-black text-[10.5px] border border-rose-200">نفذت (0)</span>`;
    } else if (stock < 5) {
      stockPill = `<span class="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-bold text-[10.5px] border border-amber-200">حرج (${stock})</span>`;
    }

    return `
      <tr class="hover:bg-slate-50/80 transition">
        <td class="py-2.5 px-3 w-14">
          <img src="${product.image}" alt="${product.name}" class="w-12 h-12 object-contain bg-slate-50 rounded-lg p-1 border border-slate-200">
        </td>
        <td class="py-2.5 px-3 max-w-[200px]">
          <div class="font-bold text-slate-900 truncate" title="${product.name}">${product.name}</div>
          <div class="text-[10px] text-slate-400 font-en font-mono">ID: ${product.id}</div>
          ${product.badge ? `<span class="bg-slate-900 text-yellow-400 text-[8.5px] font-black px-1.5 py-0.2 rounded mt-0.5 inline-block">${product.badge}</span>` : ''}
        </td>
        <td class="py-2.5 px-3 font-bold text-slate-700 font-en">${product.brand || 'TOP CAM'}</td>
        <td class="py-2.5 px-3 text-slate-500 font-medium text-[11px]">${categoryNames[product.category] || product.category}</td>
        
        <td class="py-2.5 px-3">
          <div class="flex items-center gap-1 font-en">
            <span class="font-black text-slate-900 text-xs">$</span>
            <input 
              type="number" 
              value="${price}" 
              onchange="handleInlinePriceChange('${product.id}', this.value)" 
              class="w-20 bg-slate-50 border border-slate-200 rounded px-1.5 py-1 text-xs font-black text-slate-900 focus:bg-white focus:border-yellow-400 outline-none text-right font-en"
              title="تعديل السعر مباشرة"
            >
          </div>
        </td>

        <td class="py-2.5 px-3 text-slate-400 font-en text-[11px]">
          ${oldPrice ? `$${oldPrice}` : '—'}
        </td>

        <td class="py-2.5 px-3">
          <div class="flex items-center gap-1.5">
            <div class="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
              <button onclick="changeStockDelta('${product.id}', -1)" class="w-6 h-6 rounded bg-white hover:bg-slate-200 text-slate-700 font-black text-xs flex items-center justify-center transition active:scale-90">-</button>
              <input 
                type="number" 
                value="${stock}" 
                onchange="handleInlineStockChange('${product.id}', this.value)" 
                class="w-12 text-center bg-transparent text-xs font-black text-slate-900 outline-none font-en"
              >
              <button onclick="changeStockDelta('${product.id}', 1)" class="w-6 h-6 rounded bg-white hover:bg-slate-200 text-slate-700 font-black text-xs flex items-center justify-center transition active:scale-90">+</button>
            </div>
            ${stockPill}
          </div>
        </td>

        <td class="py-2.5 px-3 font-bold text-slate-900 font-en text-xs">
          ${storeDB.formatPrice(totalValuation)}
        </td>

        <td class="py-2.5 px-3 text-center">
          <div class="flex items-center justify-center gap-1">
            <button onclick="openProductEditModal('${product.id}')" class="p-1.5 rounded-lg bg-slate-100 hover:bg-yellow-400 text-slate-600 hover:text-slate-950 transition" title="تعديل">
              <i class="fa-solid fa-pen-to-square text-xs"></i>
            </button>
            <button onclick="confirmDeleteProduct('${product.id}')" class="p-1.5 rounded-lg bg-slate-100 hover:bg-rose-100 text-slate-400 hover:text-rose-600 transition" title="حذف">
              <i class="fa-solid fa-trash-can text-xs"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function handleInlinePriceChange(productId, newPrice) {
  const val = parseFloat(newPrice);
  if (isNaN(val) || val < 0) return alert('يرجى إدخال سعر صحيح.');
  storeDB.quickUpdatePrice(productId, val);
  showAdminToast('تم تحديث السعر بنجاح وينعكس فوراً بالمتجر!', 'success');
  renderAdminStats();
  renderAdminDashboardCharts();
  renderAdminInventory();
}

function handleInlineStockChange(productId, newStock) {
  const val = parseInt(newStock);
  if (isNaN(val) || val < 0) return alert('يرجى إدخال كمية صحيحة.');
  storeDB.quickUpdateStock(productId, val);
  showAdminToast('تم تحديث كمية المخزون!', 'success');
  renderAdminStats();
  renderAdminDashboardCharts();
  renderAdminInventory();
}

function changeStockDelta(productId, delta) {
  const prod = storeDB.getProductById(productId);
  if (!prod) return;
  const current = parseInt(prod.stock) || 0;
  const next = Math.max(0, current + delta);
  storeDB.quickUpdateStock(productId, next);
  renderAdminStats();
  renderAdminDashboardCharts();
  renderAdminInventory();
}

// ================= 5. جرد الأكثر مبيعاً (Best Sellers) =================
function renderAdminBestSellers() {
  const tbody = document.getElementById('bestSellersTableBody');
  const podium = document.getElementById('topThreeBestSellersCards');
  if (!tbody) return;

  const bestSellers = storeDB.getBestSellers();

  if (bestSellers.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-12 text-center text-slate-400">
          <i class="fa-solid fa-fire-burner text-3xl mb-2 text-slate-300"></i>
          <p class="text-xs">لا توجد بيانات مبيعات مسجلة حتى الآن.</p>
        </td>
      </tr>
    `;
    if (podium) podium.innerHTML = '';
    return;
  }

  if (podium) {
    const top3 = bestSellers.slice(0, 3);
    const medals = [
      { rank: '#1', title: 'الأكثر مبيعاً على الإطلاق', bg: 'bg-amber-500', text: 'text-amber-950', border: 'border-yellow-400' },
      { rank: '#2', title: 'المركز الثاني بالمبيعات', bg: 'bg-slate-300', text: 'text-slate-900', border: 'border-slate-300' },
      { rank: '#3', title: 'المركز الثالث بالمبيعات', bg: 'bg-amber-700', text: 'text-white', border: 'border-amber-600' }
    ];

    podium.innerHTML = top3.map((item, idx) => `
      <div class="bg-white p-4 rounded-2xl border ${medals[idx].border} shadow-xs relative overflow-hidden flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl ${medals[idx].bg} ${medals[idx].text} font-black text-sm flex items-center justify-center shrink-0 shadow-sm font-en">
          ${medals[idx].rank}
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-[10px] font-bold text-amber-700">${medals[idx].title}</div>
          <h4 class="text-xs font-black text-slate-900 truncate">${item.name}</h4>
          <div class="flex items-center gap-2 text-[11px] text-slate-500 mt-1">
            <span class="font-black text-slate-900 font-en">${item.unitsSold} قطعة مباعة</span>
            <span>•</span>
            <span class="font-bold text-emerald-600 font-en">${storeDB.formatPrice(item.revenue)}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  tbody.innerHTML = bestSellers.map((item, index) => {
    return `
      <tr class="hover:bg-slate-50/80 transition">
        <td class="py-3 px-3.5 font-black text-slate-900 font-en text-sm">
          <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">
            ${index + 1}
          </span>
        </td>
        <td class="py-3 px-3.5">
          <div class="font-bold text-slate-900 max-w-[240px] truncate">${item.name}</div>
          <div class="text-[10px] text-slate-400 font-en">سعر القطعة: $${item.price}</div>
        </td>
        <td class="py-3 px-3.5 font-black text-amber-600 font-en text-sm">
          ${item.unitsSold} قطع
        </td>
        <td class="py-3 px-3.5 font-black text-slate-900 font-en">
          ${storeDB.formatPrice(item.revenue)}
        </td>
        <td class="py-3 px-3.5">
          <span class="font-bold ${item.currentStock > 0 ? 'text-slate-700' : 'text-rose-600 font-black'}">
            ${item.currentStock > 0 ? `${item.currentStock} متوفر` : 'نفذت الكمية'}
          </span>
        </td>
        <td class="py-3 px-3.5">
          <div class="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
            <div class="bg-amber-400 h-full rounded-full" style="width: ${Math.min(100, item.unitsSold * 20)}%"></div>
          </div>
        </td>
        <td class="py-3 px-3.5 text-center">
          ${item.productId ? `
            <button onclick="toggleBestSellerBadge('${item.productId}')" class="bg-yellow-50 hover:bg-yellow-100 text-yellow-800 border border-yellow-300 font-bold text-[10px] px-2.5 py-1 rounded-lg transition" title="تمييز بشارة الأكثر طلباً بالمتجر">
              <i class="fa-solid fa-star text-amber-500 ml-1"></i>
              <span>تمييز بالمتجر</span>
            </button>
          ` : '—'}
        </td>
      </tr>
    `;
  }).join('');
}

function toggleBestSellerBadge(productId) {
  const prod = storeDB.getProductById(productId);
  if (!prod) return;
  const currentBadge = prod.badge;
  const newBadge = currentBadge === 'الأكثر طلباً' ? 'معدات مختارة' : 'الأكثر طلباً';
  storeDB.updateProduct(productId, { badge: newBadge });
  showAdminToast(`تم تحديث شارة المنتج إلى "${newBadge}" في المتجر!`, 'success');
  renderAdminBestSellers();
}

// ================= 6. جرد الوكالات والعلامات التجارية =================
function renderAdminBrands() {
  const container = document.getElementById('brandsGrid');
  if (!container) return;

  const brands = storeDB.getBrandStats();

  container.innerHTML = brands.map(b => {
    return `
      <div class="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
        <div class="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-slate-900 text-yellow-400 font-black flex items-center justify-center text-xs font-en">
              ${b.brand.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h4 class="font-black text-slate-900 text-sm font-en">${b.brand}</h4>
              <span class="text-[10px] text-slate-400">وكالة معتمدة</span>
            </div>
          </div>
          <span class="text-[10px] bg-yellow-400 text-slate-950 font-black px-2 py-0.5 rounded-full font-en">
            ${b.productCount} أصناف
          </span>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="bg-slate-50 p-2 rounded-xl">
            <span class="text-[10px] text-slate-400 block">إجمالي القطع:</span>
            <span class="font-black text-slate-900 font-en text-sm">${b.totalStock} قطعة</span>
          </div>
          <div class="bg-slate-50 p-2 rounded-xl">
            <span class="text-[10px] text-slate-400 block">قيمة المخزون:</span>
            <span class="font-black text-emerald-600 font-en text-xs">${storeDB.formatPrice(b.totalValue)}</span>
          </div>
        </div>

        <div class="pt-1 flex items-center justify-between text-[11px]">
          <span class="text-slate-500 font-medium">المبيعات المحققة:</span>
          <span class="font-black text-slate-900 font-en">${storeDB.formatPrice(b.totalSales)} (${b.unitsSold} مبيعات)</span>
        </div>

        <button onclick="filterInventoryByBrand('${b.brand}')" class="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2 rounded-xl transition flex items-center justify-center gap-1.5">
          <i class="fa-solid fa-filter text-[10px] text-yellow-600"></i>
          <span>عرض جميع منتجات ${b.brand}</span>
        </button>
      </div>
    `;
  }).join('');
}

function filterInventoryByBrand(brandName) {
  switchSidebarTab('inventoryTab', document.querySelectorAll('.sidebar-link')[2]);
  const input = document.getElementById('inventorySearchInput');
  if (input) {
    input.value = brandName;
    renderAdminInventory();
  }
}

// ================= 7. إدارة الصور وقسم Gear Up بالكامل =================
function loadGearUpSettingsAdmin() {
  const g = storeDB.getGearUp();
  const c1Img = document.getElementById('gearCard1Img');
  const c2Title = document.getElementById('gearCard2Title');
  const c2Badge = document.getElementById('gearCard2Badge');
  const c2Sub = document.getElementById('gearCard2Subtitle');
  const c3Img = document.getElementById('gearCard3Img');
  const frImg = document.getElementById('gearFrameImg');

  if (c1Img) {
    c1Img.value = g.card1Image || 'images/gear_camera_dials.jpg';
    document.getElementById('previewGearCard1').src = c1Img.value;
  }
  if (c2Title) c2Title.value = g.card2Title || "Gear Up for What's Next";
  if (c2Badge) c2Badge.value = g.card2Badge || "LIMITED TIME";
  if (c2Sub) c2Sub.value = g.card2Subtitle || "Up to 25% Off Selected Cameras & Lenses";
  if (c3Img) {
    c3Img.value = g.card3Image || 'images/gear_snow_mountain.jpg';
    document.getElementById('previewGearCard3').src = c3Img.value;
  }
  if (frImg) {
    frImg.value = g.frameMattersImage || 'images/gear_frame_matters.jpg';
    document.getElementById('previewFrameMatters').src = frImg.value;
  }
}

// ================= محرك رفع وضغط الصور من المعرض والجهاز =================
function triggerGalleryUpload(fileInputId) {
  const input = document.getElementById(fileInputId);
  if (input) {
    input.value = '';
    input.click();
  }
}

function handleImageFileUpload(event, targetInputId, previewImgId, containerId = null) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showAdminToast('يرجى اختيار ملف صورة صالح (JPG, PNG, WEBP)', 'error');
    return;
  }

  showAdminToast('جاري استيراد وضغط الصورة من ألبوم الصور...', 'info');

  compressImageFile(file, 1200, 0.85, (compressedDataUrl) => {
    const targetInput = document.getElementById(targetInputId);
    if (targetInput) {
      targetInput.value = compressedDataUrl;
      targetInput.dispatchEvent(new Event('input', { bubbles: true }));
    }

    const previewImg = document.getElementById(previewImgId);
    if (previewImg) {
      previewImg.src = compressedDataUrl;
    }

    if (containerId) {
      const container = document.getElementById(containerId);
      if (container) container.classList.remove('hidden');
    }

    showAdminToast('تم استيراد الصورة بنجاح وجاهزة للنشر في المتجر! 📸', 'success');
  });
}

function compressImageFile(file, maxDimension, quality, callback) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round((height * maxDimension) / width);
          width = maxDimension;
        } else {
          width = Math.round((width * maxDimension) / height);
          height = maxDimension;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const dataUrl = canvas.toDataURL('image/jpeg', quality);
      callback(dataUrl);
    };
    img.onerror = () => {
      showAdminToast('حدث خطأ أثناء قراءة الصورة، يرجى المحاولة بصورة أخرى.', 'error');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function setFastProdImg(imgPath) {
  const input = document.getElementById('prodImage');
  const preview = document.getElementById('prodImagePreview');
  if (input) input.value = imgPath;
  if (preview) preview.src = imgPath;
}

function setGearImg(inputId, previewId, imgPath) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  if (input) input.value = imgPath;
  if (preview) preview.src = imgPath;
}

function saveGearUpSettingsAdmin(e) {
  e.preventDefault();

  const gearUpData = {
    card1Image: document.getElementById('gearCard1Img').value.trim(),
    card2Title: document.getElementById('gearCard2Title').value.trim(),
    card2Badge: document.getElementById('gearCard2Badge').value.trim(),
    card2Subtitle: document.getElementById('gearCard2Subtitle').value.trim(),
    card3Image: document.getElementById('gearCard3Img').value.trim(),
    frameMattersImage: document.getElementById('gearFrameImg').value.trim()
  };

  storeDB.saveGearUp(gearUpData);
  showAdminToast('تم تحديث وتطبيق صور وبيانات قسم Gear Up في المتجر فورا!', 'success');
}

// سلايدر الهيرو الرئيسي
function loadHeroBannersAdmin() {
  const banners = storeDB.getBanners();
  if (banners.slide1) {
    const t1 = document.getElementById('hBanner1Title');
    const i1 = document.getElementById('hBanner1Image');
    if (t1) t1.value = banners.slide1.title || '';
    if (i1) i1.value = banners.slide1.image || '';
  }
  if (banners.slide2) {
    const t2 = document.getElementById('hBanner2Title');
    const i2 = document.getElementById('hBanner2Image');
    if (t2) t2.value = banners.slide2.title || '';
    if (i2) i2.value = banners.slide2.image || '';
  }
  if (banners.slide3) {
    const t3 = document.getElementById('hBanner3Title');
    const i3 = document.getElementById('hBanner3Image');
    if (t3) t3.value = banners.slide3.title || '';
    if (i3) i3.value = banners.slide3.image || '';
  }
}

function saveHeroBannersAdmin(e) {
  e.preventDefault();

  const current = storeDB.getBanners();
  const updatedBanners = {
    slide1: {
      ...current.slide1,
      title: document.getElementById('hBanner1Title').value.trim(),
      image: document.getElementById('hBanner1Image').value.trim()
    },
    slide2: {
      ...current.slide2,
      title: document.getElementById('hBanner2Title').value.trim(),
      image: document.getElementById('hBanner2Image').value.trim()
    },
    slide3: {
      ...current.slide3,
      title: document.getElementById('hBanner3Title').value.trim(),
      image: document.getElementById('hBanner3Image').value.trim()
    }
  };

  storeDB.saveBanners(updatedBanners);
  showAdminToast('تم حفظ وتحديث السلايدر الرئيسي بنجاح!', 'success');
}

// ================= 8. التحكم بنافذة العروض الترويجية المنبثقة =================
function loadPromoPopupSettings() {
  const promo = storeDB.getPromoPopup();
  
  const toggle = document.getElementById('promoEnabledToggle');
  const dot = document.getElementById('sidebarPromoDot');

  if (toggle) toggle.checked = !!promo.enabled;
  if (dot) {
    dot.className = promo.enabled ? 'w-2 h-2 rounded-full bg-emerald-500' : 'w-2 h-2 rounded-full bg-slate-500';
  }

  document.getElementById('promoTitle').value = promo.title || '';
  document.getElementById('promoSubtitle').value = promo.subtitle || '';
  document.getElementById('promoBadge').value = promo.badge || '';
  document.getElementById('promoCode').value = promo.promoCode || '';
  document.getElementById('promoCategory').value = promo.targetCategory || 'stands';
  document.getElementById('promoBtnText').value = promo.buttonText || '';
  const promoImgVal = promo.image || 'images/gear_frame_matters.jpg';
  document.getElementById('promoImage').value = promoImgVal;
  const promoPreview = document.getElementById('previewPromoFormImg');
  if (promoPreview) promoPreview.src = promoImgVal;
}

function savePromoPopupSettings(e) {
  e.preventDefault();

  const enabled = document.getElementById('promoEnabledToggle').checked;
  const promoData = {
    enabled: enabled,
    title: document.getElementById('promoTitle').value.trim(),
    subtitle: document.getElementById('promoSubtitle').value.trim(),
    badge: document.getElementById('promoBadge').value.trim(),
    promoCode: document.getElementById('promoCode').value.trim(),
    targetCategory: document.getElementById('promoCategory').value,
    buttonText: document.getElementById('promoBtnText').value.trim(),
    image: document.getElementById('promoImage').value.trim() || 'images/gear_frame_matters.jpg'
  };

  storeDB.savePromoPopup(promoData);
  loadPromoPopupSettings();

  showAdminToast(enabled 
    ? '🔥 تم تفعيل نافذة العرض المنبثقة بنجاح! ستظهر فوراً لزوار المتجر.' 
    : 'تم إيقاف نافذة العرض المنبثقة.', 'success');
}

function previewPromoPopupInAdmin() {
  const title = document.getElementById('promoTitle').value;
  const subtitle = document.getElementById('promoSubtitle').value;
  const badge = document.getElementById('promoBadge').value;
  const code = document.getElementById('promoCode').value;
  const btnText = document.getElementById('promoBtnText').value;
  const img = document.getElementById('promoImage').value || 'images/gear_frame_matters.jpg';

  document.getElementById('previewPromoTitle').textContent = title;
  document.getElementById('previewPromoSubtitle').textContent = subtitle;
  document.getElementById('previewPromoBadge').textContent = badge;
  document.getElementById('previewPromoCode').textContent = code;
  document.getElementById('previewPromoBtn').querySelector('span').textContent = btnText;
  document.getElementById('previewPromoImg').src = img;

  const modal = document.getElementById('promoPreviewModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// ================= 9. إضافة وتعديل البضاعة =================
function openProductEditModal(productId = null) {
  const modal = document.getElementById('productFormModal');
  const title = document.getElementById('productFormTitle');
  const form = document.getElementById('productEditForm');

  form.reset();
  document.getElementById('editProductId').value = '';

  const preview = document.getElementById('prodImagePreview');

  const deleteBtn = document.getElementById('btnDeleteCurrentProduct');

  if (productId) {
    const product = storeDB.getProductById(productId);
    if (!product) return;

    title.textContent = 'تعديل بيانات وسعر البضاعة';
    document.getElementById('editProductId').value = product.id;
    document.getElementById('prodName').value = product.name || '';
    document.getElementById('prodNameEn').value = product.nameEn || '';
    document.getElementById('prodBrand').value = product.brand || 'Sony';
    document.getElementById('prodCategory').value = product.category || 'cameras';
    document.getElementById('prodBadge').value = product.badge || '';
    document.getElementById('prodPrice').value = product.price || '';
    document.getElementById('prodOldPrice').value = product.oldPrice || '';
    document.getElementById('prodStock').value = product.stock !== undefined ? product.stock : 10;
    document.getElementById('prodImage').value = product.image || 'images/camera_body.jpg';
    if (preview) preview.src = product.image || 'images/camera_body.jpg';
    document.getElementById('prodDescription').value = product.description || '';

    if (deleteBtn) {
      deleteBtn.classList.remove('hidden');
      deleteBtn.classList.add('flex');
    }
  } else {
    title.textContent = 'إضافة بضاعة جديدة للمخزن';
    document.getElementById('prodStock').value = 10;
    document.getElementById('prodImage').value = 'images/camera_body.jpg';
    if (preview) preview.src = 'images/camera_body.jpg';

    if (deleteBtn) {
      deleteBtn.classList.add('hidden');
      deleteBtn.classList.remove('flex');
    }
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function handleProductFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('editProductId').value;
  const productData = {
    name: document.getElementById('prodName').value.trim(),
    nameEn: document.getElementById('prodNameEn').value.trim(),
    brand: document.getElementById('prodBrand').value,
    category: document.getElementById('prodCategory').value,
    badge: document.getElementById('prodBadge').value.trim(),
    price: parseFloat(document.getElementById('prodPrice').value),
    oldPrice: document.getElementById('prodOldPrice').value ? parseFloat(document.getElementById('prodOldPrice').value) : null,
    stock: parseInt(document.getElementById('prodStock').value) || 0,
    image: document.getElementById('prodImage').value.trim() || 'images/camera_body.jpg',
    description: document.getElementById('prodDescription').value.trim()
  };

  if (id) {
    storeDB.updateProduct(id, productData);
    showAdminToast('تم تحديث بيانات البضاعة بنجاح في المتجر!', 'success');
  } else {
    storeDB.addProduct(productData);
    showAdminToast('تمت إضافة البضاعة الجديدة ونشرها بالمتجر فورا!', 'success');
  }

  closeModal('productFormModal');
  renderAdminStats();
  renderAdminDashboardCharts();
  renderAdminInventory();
  renderAdminBrands();
}

function deleteCurrentEditingProduct() {
  const id = document.getElementById('editProductId').value;
  if (!id) return;
  const product = storeDB.getProductById(id);
  const name = product ? product.name : id;

  if (confirm(`هل أنت متأكد من حذف هذا الصنف نهائياً من المتجر والمخزن؟\n"${name}"`)) {
    storeDB.deleteProduct(id);
    closeModal('productFormModal');
    showAdminToast('تم حذف الصنف بنجاح من المتجر والمخزن.', 'info');
    renderAdminStats();
    renderAdminDashboardCharts();
    renderAdminInventory();
    renderAdminBrands();
  }
}

function confirmDeleteProduct(id) {
  const product = storeDB.getProductById(id);
  if (!product) return;

  if (confirm(`هل أنت متأكد من حذف هذا الصنف من المخزن: "${product.name}"؟`)) {
    storeDB.deleteProduct(id);
    showAdminToast('تم حذف الصنف من المخزن.', 'info');
    renderAdminStats();
    renderAdminDashboardCharts();
    renderAdminInventory();
    renderAdminBrands();
  }
}

// ================= 10. إعدادات المتجر العامة =================
function loadAdminSettings() {
  const settings = storeDB.getSettings();
  const nameInput = document.getElementById('settingStoreName');
  const waInput = document.getElementById('settingWhatsapp');
  const shipInput = document.getElementById('settingFreeShipping');

  if (nameInput) nameInput.value = settings.storeName || '';
  if (waInput) waInput.value = settings.whatsappNumber || '';
  if (shipInput) shipInput.value = settings.freeShippingThreshold || 500;
}

function saveStoreSettings(e) {
  e.preventDefault();

  const storeName = document.getElementById('settingStoreName').value.trim();
  const whatsappNumber = document.getElementById('settingWhatsapp').value.trim().replace(/[^0-9]/g, '');
  const freeShippingThreshold = parseFloat(document.getElementById('settingFreeShipping').value) || 500;

  storeDB.saveSettings({
    storeName,
    whatsappNumber,
    freeShippingThreshold
  });

  showAdminToast('تم حفظ الإعدادات ورقم الواتساب بنجاح!', 'success');
}

async function triggerServerSyncAdmin() {
  const btn = document.getElementById('btnAdminServerSync');
  if (btn) btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-amber-600"></i> <span class="hidden sm:inline">جاري المزامنة...</span>';
  try {
    await storeDB.syncWithServer();
    renderAdminStats();
    renderAdminDashboardCharts();
    renderAdminInventory();
    renderAdminBrands();
    showAdminToast('تمت مزامنة كافة المحذوفات والبيانات مع السيرفر وكافة أجهزة الهواتف بنجاح!', 'success');
  } catch(e) {
    showAdminToast('تعذر الاتصال بالسيرفر للمزامنة.', 'error');
  } finally {
    if (btn) btn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up text-amber-600"></i> <span class="hidden sm:inline">مزامنة السيرفر والهاتف</span>';
  }
}

function resetStoreData() {
  if (confirm('هل أنت متأكد من استعادة بيانات المنتجات الافتراضية؟')) {
    try {
      localStorage.removeItem(STORE_KEYS.DELETED_IDS);
      fetch('/api/reset-deleted', { method: 'POST' }).catch(() => {});
    } catch (e) {}
    storeDB.saveProducts(typeof INITIAL_PRODUCTS !== 'undefined' ? INITIAL_PRODUCTS : []);
    showAdminToast('تم استعادة البيانات الافتراضية بنجاح!', 'success');
    renderAdminStats();
    renderAdminDashboardCharts();
    renderAdminInventory();
    renderAdminBrands();
  }
}

// نافذة منبثقة عامة
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add('hidden');
    m.classList.remove('flex');
  }
}

function showAdminToast(msg, type = 'info') {
  const c = document.getElementById('toastContainer');
  if (!c) return;

  const t = document.createElement('div');
  t.className = `bg-slate-950 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 border border-slate-700 animate-slideIn`;
  t.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check text-emerald-400' : 'fa-circle-info text-yellow-400'}"></i>
    <span>${msg}</span>
  `;
  c.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transition = 'opacity 0.4s ease';
    setTimeout(() => t.remove(), 400);
  }, 4000);
}
