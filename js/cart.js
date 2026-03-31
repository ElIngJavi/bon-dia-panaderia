/**
 * cart.js — Carrito de compras + pedido automático por WhatsApp
 * Bon Dia Panadería
 *
 * Para agregar/quitar productos del catálogo edita el array PRODUCTS.
 * Para cambiar el número de WhatsApp edita WA_NUMBER.
 */

const Cart = (() => {

  // ============================================================
  // CONFIGURACIÓN
  // ============================================================
  const WA_NUMBER = '526645022113';

  const PRODUCTS = [
    // --- Pan de Masa Madre ---
    { id: 'hogaza-normal',     name: 'Hogaza Normal',             price: 140, category: 'Pan de Masa Madre' },
    { id: 'hogaza-integral',   name: 'Hogaza Integral',           price: 150, category: 'Pan de Masa Madre' },
    { id: 'hogaza-hierbas',    name: 'Hogaza de Hierbas',         price: 160, category: 'Pan de Masa Madre', note: 'Tomillo, romero y orégano fresco' },
    { id: 'hogaza-arandanos',  name: 'Hogaza Arándanos con Nuez', price: 180, category: 'Pan de Masa Madre', note: 'Nuez de castilla y arándanos' },
    { id: 'hogaza-semillas',   name: 'Hogaza Semillas',             price: 160, category: 'Pan de Masa Madre', note: 'Linaza, girasol, chía y ajonjolí' },
    { id: 'hogaza-olivas',     name: 'Hogaza Olivas',               price: 160, category: 'Pan de Masa Madre', note: 'Olivas kalamata y romero' },
    { id: 'hogaza-tomate',     name: 'Hogaza Tomate con Albahaca',  price: 180, category: 'Pan de Masa Madre', note: 'Tomate deshidratado y albahaca fresca' },
    { id: 'hogaza-jalapeno',   name: 'Hogaza Jalapeño con Cheddar', price: 180, category: 'Pan de Masa Madre', note: 'Jalapeño fresco y cheddar' },
    { id: 'pan-ajo-parmesano', name: 'Pan Ajo Parmesano',           price: 180, category: 'Pan de Masa Madre', note: 'Ajo confitado y parmesano rallado' },
    // --- Bollos ---
    { id: 'bollos-queso-12',   name: 'Bollos con Queso (12 pz)', price: 200, category: 'Bollos' },
    { id: 'bollos-queso-24',   name: 'Bollos con Queso (24 pz)', price: 380, category: 'Bollos' },
    { id: 'bollos-nat-1',      name: 'Bollo Natural (1 pz)',      price:  10, category: 'Bollos' },
    { id: 'bollos-nat-12',     name: 'Bollos Naturales (12 pz)', price: 115, category: 'Bollos' },
    { id: 'bollos-nat-24',     name: 'Bollos Naturales (24 pz)', price: 225, category: 'Bollos' },
    { id: 'bollos-ajo-12',     name: 'Bollos de Ajo (12 pz)',    price: 160, category: 'Bollos' },
    { id: 'bollos-ajo-24',     name: 'Bollos de Ajo (24 pz)',    price: 300, category: 'Bollos' },
    // --- Roles y Otros ---
    { id: 'rol-canela',        name: 'Rol de Canela',            price:  60, category: 'Roles y Otros', note: 'Glaseado de queso crema con vainilla' },
  ];
  // ============================================================

  const WA_ICON = `<svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  const CART_ICON = `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`;

  const CLOSE_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

  // Estado interno
  let items = [];

  // Refs del DOM
  let cartPanel, cartOverlay, cartCountBadge, cartTotalEl, cartItemsList, cartEmptyMsg, checkoutBtn;

  // ── Inyectar HTML del carrito en el DOM ──────────────────────────
  function injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
      <div id="cart-overlay"
        class="fixed inset-0 bg-bark/50 backdrop-blur-sm z-40 opacity-0 pointer-events-none"></div>

      <aside id="cart-panel"
        class="fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 shadow-2xl flex flex-col translate-x-full"
        aria-label="Carrito de compras">

        <div class="flex items-center justify-between px-6 py-5 border-b border-wheat/40 bg-white/70 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            ${CART_ICON}
            <h2 class="font-display font-bold text-lg text-bark">Tu Pedido</h2>
          </div>
          <button id="cart-close-btn" aria-label="Cerrar carrito"
            class="w-9 h-9 rounded-full bg-bark/5 hover:bg-bark/10 flex items-center justify-center text-bark/50 hover:text-bark transition-all">
            ${CLOSE_ICON}
          </button>
        </div>

        <div class="flex-1 overflow-y-auto px-6 py-4">
          <div id="cart-empty" class="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
            <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <svg class="w-10 h-10 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <div>
              <p class="font-display font-bold text-bark text-lg">Tu carrito está vacío</p>
              <p class="font-body text-bark/50 text-sm mt-1">Agrega productos desde el menú</p>
            </div>
            <button onclick="Cart.closeCart()"
              class="text-primary font-body font-bold text-sm border border-primary/30 px-5 py-2 rounded-full hover:bg-primary/10 transition-colors">
              ← Ver productos
            </button>
          </div>
          <div id="cart-items-list" style="display:none;"></div>
        </div>

        <div class="flex-shrink-0 border-t border-wheat/40 bg-white/70 backdrop-blur-sm px-6 py-5 space-y-4">
          <div class="flex items-center justify-between">
            <span class="font-body text-bark/60 text-sm tracking-wide uppercase">Total del pedido</span>
            <span id="cart-total" class="font-display font-black text-2xl text-primary">$0</span>
          </div>
          <button id="cart-checkout-btn" disabled
            class="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-body font-bold text-sm tracking-wide opacity-50 cursor-not-allowed">
            ${WA_ICON} Enviar pedido por WhatsApp
          </button>
          <p class="text-center font-body text-bark/40 text-xs leading-relaxed">
            Se abrirá WhatsApp con tu ticket de pedido 🧾
          </p>
        </div>

      </aside>
    `);
  }

  // ── Utilidades ────────────────────────────────────────────────────
  function getTotal()     { return items.reduce((s, i) => s + i.product.price * i.qty, 0); }
  function getItemCount() { return items.reduce((s, i) => s + i.qty, 0); }
  function findProduct(id){ return PRODUCTS.find(p => p.id === id); }

  // ── Renderizar el panel ───────────────────────────────────────────
  function render() {
    const count = getItemCount();
    const total = getTotal();

    cartCountBadge.textContent   = count;
    cartCountBadge.style.display = count > 0 ? 'flex' : 'none';
    cartTotalEl.textContent      = `$${total}`;

    checkoutBtn.disabled = count === 0;
    checkoutBtn.classList.toggle('opacity-50',        count === 0);
    checkoutBtn.classList.toggle('cursor-not-allowed', count === 0);

    if (items.length === 0) {
      cartEmptyMsg.style.display  = 'flex';
      cartItemsList.style.display = 'none';
    } else {
      cartEmptyMsg.style.display  = 'none';
      cartItemsList.style.display = 'block';

      cartItemsList.innerHTML = items.map(({ product, qty }) => `
        <div class="cart-item flex items-center gap-3 py-3 border-b border-wheat/30 last:border-0">
          <div class="flex-1 min-w-0">
            <p class="font-body font-bold text-bark text-sm leading-tight">${product.name}</p>
            ${product.note ? `<p class="font-body text-bark/50 text-xs mt-0.5">${product.note}</p>` : ''}
            <p class="font-accent text-primary font-bold text-sm mt-0.5">$${product.price} c/u</p>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0">
            <button onclick="Cart.changeQty('${product.id}', -1)"
              class="w-7 h-7 rounded-full border-2 border-primary/30 text-primary font-bold hover:bg-primary hover:text-cream hover:border-primary transition-all duration-200 flex items-center justify-center text-base leading-none">−</button>
            <span class="font-body font-bold text-bark text-sm w-5 text-center">${qty}</span>
            <button onclick="Cart.changeQty('${product.id}', 1)"
              class="w-7 h-7 rounded-full border-2 border-primary/30 text-primary font-bold hover:bg-primary hover:text-cream hover:border-primary transition-all duration-200 flex items-center justify-center text-base leading-none">+</button>
          </div>
          <p class="font-accent font-bold text-bark text-sm flex-shrink-0 min-w-[44px] text-right">$${product.price * qty}</p>
          <button onclick="Cart.removeItem('${product.id}')"
            class="text-bark/25 hover:text-red-500 transition-colors flex-shrink-0" aria-label="Eliminar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      `).join('');
    }
  }

  // ── Agregar producto ─────────────────────────────────────────────
  function addItem(productId) {
    const product = findProduct(productId);
    if (!product) return;

    const existing = items.find(i => i.product.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ product, qty: 1 });
    }

    render();
    openCart();
    animateAddButton(productId);
  }

  // ── Cambiar cantidad ─────────────────────────────────────────────
  function changeQty(productId, delta) {
    const idx = items.findIndex(i => i.product.id === productId);
    if (idx === -1) return;
    items[idx].qty += delta;
    if (items[idx].qty <= 0) items.splice(idx, 1);
    render();
  }

  // ── Eliminar item ────────────────────────────────────────────────
  function removeItem(productId) {
    items = items.filter(i => i.product.id !== productId);
    render();
  }

  // ── Abrir / cerrar panel ─────────────────────────────────────────
  function openCart() {
    cartPanel.classList.remove('translate-x-full');
    cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartPanel.classList.add('translate-x-full');
    cartOverlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  // ── Feedback visual del botón agregar ────────────────────────────
  function animateAddButton(productId) {
    const btn = document.querySelector(`[data-add-to-cart="${productId}"]`);
    if (!btn) return;

    const originalHTML = btn.innerHTML;
    btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Agregado`;
    btn.style.background = '#16a34a';

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
    }, 1500);
  }

  // ── Generar ticket y abrir WhatsApp ──────────────────────────────
  function sendWhatsAppOrder() {
    if (items.length === 0) return;

    const now   = new Date();
    const fecha = now.toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const hora  = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });

    const byCategory = {};
    items.forEach(({ product, qty }) => {
      if (!byCategory[product.category]) byCategory[product.category] = [];
      byCategory[product.category].push({ product, qty });
    });

    let msg = `🍞 *PEDIDO — BON DIA PANADERÍA*\n`;
    msg += `📅 ${fecha}\n`;
    msg += `🕐 ${hora}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    Object.entries(byCategory).forEach(([cat, catItems]) => {
      msg += `*📦 ${cat}*\n`;
      catItems.forEach(({ product, qty }) => {
        msg += `  • ${product.name} × ${qty}`;
        if (product.note) msg += ` _(${product.note})_`;
        msg += `  →  *$${product.price * qty}*\n`;
      });
      msg += `\n`;
    });

    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `🧾 *TOTAL: $${getTotal()} MXN*\n\n`;
    msg += `¡Hola! Me gustaría hacer este pedido 😊 ¿Pueden confirmarme disponibilidad y forma de entrega?`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  // ── Init ──────────────────────────────────────────────────────────
  function init() {
    injectHTML();

    cartPanel       = document.getElementById('cart-panel');
    cartOverlay     = document.getElementById('cart-overlay');
    cartCountBadge  = document.getElementById('cart-count');
    cartTotalEl     = document.getElementById('cart-total');
    cartItemsList   = document.getElementById('cart-items-list');
    cartEmptyMsg    = document.getElementById('cart-empty');
    checkoutBtn     = document.getElementById('cart-checkout-btn');

    if (!cartPanel) return;

    document.getElementById('cart-open-btn')?.addEventListener('click', openCart);
    document.getElementById('cart-close-btn')?.addEventListener('click', closeCart);
    cartOverlay?.addEventListener('click', closeCart);
    checkoutBtn?.addEventListener('click', sendWhatsAppOrder);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeCart();
    });

    render();
  }

  return { init, addItem, changeQty, removeItem, openCart, closeCart };
})();

document.addEventListener('DOMContentLoaded', Cart.init);
