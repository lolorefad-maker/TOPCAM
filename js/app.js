// تطبيق واجهة TOP CAM العالمية - الجيل القادم من متاجر الإلكترونيات (TechNova Pattern)

let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'default';

document.addEventListener('DOMContentLoaded', () => {
  renderCatStrip();
  renderCircleCats();
  renderProducts();
  updateCartUI();
  initFlashTimer();

  window.addEventListener('products_updated', () => {
    renderCatStrip();
    renderCircleCats();
    renderProducts();
  });
  window.addEventListener('cart_updated', updateCartUI);
  window.addEventListener('settings_updated', () => {
    renderProducts();
    updateCartUI();
  });
});

// ================= 1. شريط الفئات النصي العلوي =================
function renderCatStrip() {
  const container = document.getElementById('catStripNav');
  if (!container) return;

  container.innerHTML = INITIAL_CATEGORIES.map(cat => `
    <button 
      onclick="filterByCategory('${cat.id}')"
      class="px-3.5 py-1.5 rounded-full transition-all text-xs font-bold whitespace-nowrap flex items-center gap-1.5 ${
        currentCategory === cat.id 
          ? 'bg-brand-600 text-white shadow-sm' 
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
      }"
    >
      <i class="fa-solid ${cat.icon} text-[11px]"></i>
      <span>${cat.name}</span>
    </button>
  `).join('');
}

// ================= 2. شريط الفئات الدائرية (Exact TechNova Circle Bubbles) =================
function renderCircleCats() {
  const container = document.getElementById('circleCatsRow');
  if (!container) return;

  const cats = INITIAL_CATEGORIES.filter(c => c.id !== 'all');

  container.innerHTML = cats.map(cat => `
    <div 
      onclick="filterByCategory('${cat.id}')"
      class="flex flex-col items-center gap-2 cursor-pointer group min-w-[76px] transition-all"
    >
      <div class="w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center border-2 transition-all duration-200 group-hover:-translate-y-1 ${
        currentCategory === cat.id 
          ? 'border-brand-600 bg-brand-50/80 shadow-md ring-4 ring-brand-500/10' 
          : 'border-slate-200 bg-slate-50/60 group-hover:border-brand-500 group-hover:bg-white shadow-sm'
      }">
        <i class="fa-solid ${cat.icon} text-xl transition-all ${
          currentCategory === cat.id ? 'text-brand-600' : 'text-slate-600 group-hover:text-brand-600'
        }"></i>
      </div>
      <span class="text-[11px] font-bold text-center whitespace-nowrap transition-colors leading-tight ${
        currentCategory === cat.id ? 'text-brand-600 font-black' : 'text-slate-600 group-hover:text-brand-600'
      }">
        ${cat.name.split(' ')[0]}
      </span>
    </div>
  `).join('');
}

// ================= 3. تصفية وبحث =================
function filterByCategory(catId) {
  currentCategory = catId;
  renderCatStrip();
  renderCircleCats();
  renderProducts();

  const titleEl = document.getElementById('currentCategoryTitle');
  const cat = INITIAL_CATEGORIES.find(c => c.id === catId);
  if (titleEl && cat) {
    titleEl.textContent = cat.name;
  }
  scrollToProducts();
}

function handleSearch(val) {
  currentSearch = val.trim().toLowerCase();
  renderProducts();
}

function handleSortChange(sortVal) {
  currentSort = sortVal;
  renderProducts();
}

function scrollToProducts() {
  const el = document.getElementById('productsSection');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ================= 4. رسم كروت المنتجات العالمية (TechNova Clean Card) =================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('productsCountText');
  if (!grid) return;

  let products = storeDB.getProducts();

  if (currentCategory !== 'all') {
    products = products.filter(p => p.category === currentCategory);
  }

  if (currentSearch) {
    products = products.filter(p => {
      return (p.name || '').toLowerCase().includes(currentSearch) ||
             (p.nameEn || '').toLowerCase().includes(currentSearch) ||
             (p.description || '').toLowerCase().includes(currentSearch);
    });
  }

  if (currentSort === 'price-asc') products.sort((a, b) => a.price - b.price);
  else if (currentSort === 'price-desc') products.sort((a, b) => b.price - a.price);
  else if (currentSort === 'rating') products.sort((a, b) => (b.rating || 0) - (a.rating || 0));

  if (countEl) countEl.textContent = `${products.length} Products`;

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full bg-white rounded-3xl p-12 text-center border border-dashed border-slate-200">
        <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-2xl mx-auto mb-3">
          <i class="fa-solid fa-camera-rotate"></i>
        </div>
        <h4 class="text-base font-black text-slate-900 mb-1">لم يتم العثور على معدات مطابقة</h4>
        <p class="text-xs text-slate-500">جرب البحث بكلمة أخرى أو اختر قسماً آخر من شريط الأقسام أعلاه.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map(product => {
    const formattedPrice = storeDB.formatPrice(product.price);
    const formattedOld = product.oldPrice ? storeDB.formatPrice(product.oldPrice) : null;
    const cat = INITIAL_CATEGORIES.find(c => c.id === product.category);
    const catName = cat ? cat.name : product.category;
    const stars = Math.round(product.rating || 5);

    return `
      <div class="group bg-white rounded-2xl border border-slate-200/80 hover:border-brand-500/60 p-3.5 flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover relative hover:-translate-y-1">
        
        <!-- Top Row: Badge & Wishlist Heart -->
        <div class="flex items-center justify-between mb-2">
          ${product.badge 
            ? `<span class="bg-slate-900 text-white text-[10px] font-black px-2 py-0.5 rounded-md font-en tracking-wide">${product.badge}</span>` 
            : `<span></span>`}

          <button 
            onclick="toggleWishlist('${product.id}', this)" 
            class="w-7 h-7 rounded-full bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 border border-slate-200 flex items-center justify-center transition text-xs"
            title="إضافة للمفضلة"
          >
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>

        <!-- Product Image -->
        <div 
          onclick="openProductModal('${product.id}')"
          class="relative w-full h-40 bg-slate-50/70 rounded-xl overflow-hidden flex items-center justify-center p-3 cursor-pointer mb-3 group-hover:bg-slate-100/70 transition"
        >
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy" 
            class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-108"
          >
        </div>

        <!-- Product Info -->
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">${catName}</div>
            
            <h4 
              onclick="openProductModal('${product.id}')" 
              class="text-xs sm:text-sm font-black text-slate-900 line-clamp-2 leading-snug cursor-pointer group-hover:text-brand-600 transition mb-1"
              title="${product.name}"
            >
              ${product.name}
            </h4>

            <p class="text-[11px] text-slate-500 line-clamp-1 mb-2 font-light">
              ${product.nameEn || product.description || ''}
            </p>
          </div>

          <!-- Price & Rating Row -->
          <div class="pt-2 border-t border-slate-100 mt-2">
            <div class="flex items-baseline gap-1.5 mb-1.5 font-en">
              <span class="text-sm sm:text-base font-black text-brand-600">${formattedPrice}</span>
              ${formattedOld ? `<span class="text-xs text-slate-400 line-through">${formattedOld}</span>` : ''}
            </div>

            <!-- Star Rating -->
            <div class="flex items-center justify-between text-[11px]">
              <div class="flex items-center gap-1">
                <div class="flex text-amber-400 text-[10px]">
                  ${Array.from({ length: 5 }).map((_, i) => `<i class="fa-${i < stars ? 'solid' : 'regular'} fa-star"></i>`).join('')}
                </div>
                <span class="font-bold text-slate-700 font-en text-[11px]">(${product.reviewsCount || 85})</span>
              </div>

              <!-- Quick Add Button -->
              <button 
                onclick="addToCart('${product.id}')" 
                class="w-7 h-7 rounded-lg bg-slate-900 hover:bg-brand-600 text-white flex items-center justify-center transition shadow-sm active:scale-95"
                title="شراء فوري"
              >
                <i class="fa-solid fa-plus text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ================= 5. قائمة المفضلة =================
function toggleWishlist(id, btn) {
  const icon = btn.querySelector('i');
  if (icon.classList.contains('fa-regular')) {
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
    btn.classList.add('text-red-500', 'bg-red-50');
    showToast('تمت إضافة المنتج إلى قائمة المفضلة', 'info');
  } else {
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
    btn.classList.remove('text-red-500', 'bg-red-50');
  }
}

// ================= 6. السلة والدرج المنزلق =================
function addToCart(productId, quantity = 1) {
  const success = storeDB.addToCart(productId, quantity);
  if (success) {
    const product = storeDB.getProductById(productId);
    showToast(`تمت إضافة "${product.name.substring(0, 26)}..." إلى السلة!`, 'success');
    updateCartUI();
  }
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const list = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');
  const cartFooter = document.getElementById('cartFooter');

  const cart = storeDB.getCart();
  const totals = storeDB.getCartTotals();

  if (badge) badge.textContent = totals.itemsCount;
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div class="text-center py-16 text-slate-400 space-y-3">
        <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 text-2xl mx-auto">
          <i class="fa-solid fa-basket-shopping"></i>
        </div>
        <p class="text-sm font-bold text-slate-700">سلة مشترياتك فارغة</p>
        <p class="text-xs text-slate-400">تصفح الكتالوج وأضف الكاميرات والمعدات التي تلزمك.</p>
      </div>
    `;
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  if (cartFooter) cartFooter.style.display = 'block';

  list.innerHTML = cart.map(item => `
    <div class="flex items-center gap-3 bg-slate-50 border border-slate-200/80 p-3 rounded-2xl">
      <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-contain bg-white rounded-xl p-1 border border-slate-200 shrink-0">
      
      <div class="flex-1 min-w-0">
        <h5 class="text-xs font-bold text-slate-900 line-clamp-1">${item.name}</h5>
        <div class="text-xs font-black text-brand-600 font-en mt-0.5">${storeDB.formatPrice(item.price)}</div>
        
        <div class="flex items-center gap-2 mt-2">
          <button onclick="storeDB.updateCartQuantity('${item.id}', ${item.quantity - 1})" class="w-6 h-6 rounded bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:border-brand-600">-</button>
          <span class="text-xs font-bold text-slate-900 font-en min-w-[16px] text-center">${item.quantity}</span>
          <button onclick="storeDB.updateCartQuantity('${item.id}', ${item.quantity + 1})" class="w-6 h-6 rounded bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:border-brand-600">+</button>
        </div>
      </div>

      <button onclick="storeDB.removeFromCart('${item.id}')" class="text-slate-400 hover:text-red-500 p-2 transition text-sm">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = storeDB.formatPrice(totals.subtotal);
  if (shippingEl) shippingEl.textContent = totals.shipping === 0 ? 'شحن مجاني' : storeDB.formatPrice(totals.shipping);
  if (totalEl) totalEl.textContent = storeDB.formatPrice(totals.total);
}

function toggleCartDrawer(open) {
  const overlay = document.getElementById('cartOverlay');
  const box = document.getElementById('cartDrawerBox');
  if (!overlay || !box) return;

  if (open) {
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');
    box.classList.remove('-translate-x-full');
    box.classList.add('translate-x-0');
  } else {
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100');
    box.classList.add('-translate-x-full');
    box.classList.remove('translate-x-0');
  }
}

function handleOverlayClick(e) {
  if (e.target.id === 'cartOverlay') {
    toggleCartDrawer(false);
  }
}

// ================= 7. تفاصيل المنتج المنبثقة =================
function openProductModal(productId) {
  const product = storeDB.getProductById(productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const title = document.getElementById('modalProductName');
  const body = document.getElementById('productModalBody');

  title.textContent = product.name;

  let specsHtml = '';
  if (product.specs && Object.keys(product.specs).length > 0) {
    specsHtml = `
      <div class="mt-6 pt-6 border-t border-slate-100">
        <h5 class="text-xs font-black text-slate-900 uppercase tracking-wider mb-3">المواصفات التقنية الرسمية:</h5>
        <div class="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden divide-y divide-slate-200/60 text-xs">
          ${Object.entries(product.specs).map(([key, val]) => `
            <div class="flex justify-between p-3">
              <span class="text-slate-500 font-medium">${key}</span>
              <span class="text-slate-900 font-bold text-left font-en">${val}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  body.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
      <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 flex items-center justify-center">
        <img src="${product.image}" alt="${product.name}" class="max-h-64 max-w-full object-contain">
      </div>

      <div class="space-y-4 text-right">
        <div class="text-[11px] font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md inline-block font-en">${product.category}</div>
        <h4 class="text-base sm:text-lg font-black text-slate-900 leading-snug">${product.name}</h4>
        
        <div class="flex items-baseline gap-2 font-en">
          <span class="text-2xl font-black text-brand-600">${storeDB.formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="text-sm text-slate-400 line-through">${storeDB.formatPrice(product.oldPrice)}</span>` : ''}
        </div>

        <p class="text-xs text-slate-600 leading-relaxed">${product.description || ''}</p>

        <div class="flex items-center gap-2 pt-2">
          <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <i class="fa-solid fa-check"></i> متوفر في المستودع (${product.stock} قطع)
          </span>
          <span class="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <i class="fa-solid fa-shield"></i> كفالة رسمية معتمدة
          </span>
        </div>

        <button onclick="addToCart('${product.id}'); closeModal('productModal');" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow-blue-glow transition flex items-center justify-center gap-2 text-sm mt-4">
          <i class="fa-solid fa-cart-plus"></i>
          <span>إضافة إلى سلة المشتريات</span>
        </button>
      </div>
    </div>
    ${specsHtml}
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// ================= 8. إتمام الطلب المزدوج (واتساب + لوحة الإدارة) =================
function openCheckoutModal() {
  const cart = storeDB.getCart();
  if (cart.length === 0) {
    showToast('سلتك فارغة حالياً!', 'info');
    return;
  }
  toggleCartDrawer(false);
  const m = document.getElementById('checkoutModal');
  m.classList.remove('hidden');
  m.classList.add('flex');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const city = document.getElementById('custCity').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const paymentMethod = document.getElementById('custPayment').value;
  const notes = document.getElementById('custNotes').value.trim();

  const totals = storeDB.getCartTotals();
  const items = storeDB.getCart();

  const result = storeDB.createOrder({
    customerName: name,
    phone: phone,
    city: city,
    address: address,
    paymentMethod: paymentMethod,
    notes: notes,
    items: items,
    subtotal: totals.subtotal,
    shipping: totals.shipping,
    total: totals.total
  });

  closeModal('checkoutModal');

  const successModal = document.getElementById('orderSuccessModal');
  const orderIdBadge = document.getElementById('successOrderId');
  const whatsappBtn = document.getElementById('successWhatsappBtn');

  if (orderIdBadge) orderIdBadge.textContent = `#${result.order.id}`;
  if (whatsappBtn) whatsappBtn.href = result.whatsappUrl;

  successModal.classList.remove('hidden');
  successModal.classList.add('flex');

  updateCartUI();
  showToast(`تم تسجيل الطلب #${result.order.id} بنجاح!`, 'success');
  window.open(result.whatsappUrl, '_blank');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function changeCurrency(code) {
  storeDB.setCurrency(code);
  renderProducts();
  updateCartUI();
  showToast(`تم تغيير العملة إلى ${code}`, 'info');
}

function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 transition-all duration-300 border border-slate-700 pointer-events-auto`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check text-emerald-400' : 'fa-circle-info text-blue-400'}"></i>
    <span>${msg}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ================= 9. مؤقت عروض البرق التنازلي =================
function initFlashTimer() {
  let seconds = 45;
  let minutes = 36;
  let hours = 12;

  setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        hours--;
        if (hours < 0) hours = 24;
      }
    }
    const secEl = document.getElementById('timerSecs');
    const minEl = document.getElementById('timerMins');
    const hrEl = document.getElementById('timerHours');

    if (secEl) secEl.textContent = String(seconds).padStart(2, '0');
    if (minEl) minEl.textContent = String(minutes).padStart(2, '0');
    if (hrEl) hrEl.textContent = String(hours).padStart(2, '0');
  }, 1000);
}
