/**
 * products.js — Catálogo de productos y renderizado de la sección Productos
 * Bon Dia Panadería
 *
 * Para editar productos: modifica CATALOG en este archivo.
 * Para cambiar precios del carrito: también actualiza PRODUCTS en cart.js.
 */

const ICON_PLUS_SM = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
const ICON_PLUS_MD = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;

// ── Helpers ──────────────────────────────────────────────────────────

function addBtn(id) {
  return `<button data-add-to-cart="${id}" onclick="Cart.addItem('${id}')" class="add-to-cart-btn">${ICON_PLUS_SM} Agregar</button>`;
}

function productRow(id, name, price, note, isLast) {
  return `
    <li class="product-item flex justify-between items-center gap-2 py-3 ${isLast ? '' : 'border-b border-wheat/40'}">
      <div class="flex-1">
        <p class="font-body font-bold text-bark text-sm">${name}</p>
        ${note ? `<p class="font-body text-bark/50 text-xs mt-0.5">${note}</p>` : ''}
      </div>
      <span class="font-accent font-bold text-primary text-base whitespace-nowrap">$${price}</span>
      ${addBtn(id)}
    </li>`;
}

function bolloRow(id, label, price, isLast) {
  return `
    <div class="flex items-center gap-2 py-2.5 ${isLast ? '' : 'border-b border-wheat/40'}">
      <span class="font-body text-sm text-bark flex-1">${label}</span>
      <span class="font-accent font-bold text-primary">$${price}</span>
      ${addBtn(id)}
    </div>`;
}

// ── Plantillas de columnas ────────────────────────────────────────────

function colMasamadre() {
  return `
    <div class="product-card reveal-on-scroll bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
        </div>
        <h3 class="font-display font-bold text-xl text-primary">Pan de Masa Madre</h3>
      </div>
      <ul class="space-y-1">
        ${productRow('hogaza-normal',     'Hogaza Normal',             140)}
        ${productRow('hogaza-integral',   'Hogaza Integral',           150)}
        ${productRow('hogaza-hierbas',    'Hogaza de Hierbas',         160, 'Tomillo, romero y orégano fresco')}
        ${productRow('hogaza-arandanos',  'Hogaza Arándanos con Nuez', 180, 'Nuez de castilla tostada y arándanos')}
        ${productRow('hogaza-semillas',   'Hogaza Semillas',             160, 'Linaza, girasol, chía y ajonjolí')}
        ${productRow('hogaza-olivas',     'Hogaza Olivas',             160, 'Olivas kalamata y romero')}
        ${productRow('hogaza-tomate',     'Hogaza Tomate con Albahaca', 180, 'Tomate deshidratado y albahaca fresca')}
        ${productRow('hogaza-jalapeno',   'Hogaza Jalapeño con Cheddar',180, 'Jalapeño fresco y cheddar')}
        ${productRow('pan-ajo-parmesano', 'Pan Ajo Parmesano',         180, 'Ajo confitado y parmesano rallado', true)}
      </ul>
    </div>`;
}

function colBollos() {
  return `
    <div class="product-card reveal-on-scroll bg-primary/5 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2" style="transition-delay:100ms">
      <div class="space-y-8">

        <div>
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
              <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
            </div>
            <h3 class="font-display font-bold text-xl text-primary">Bollos con Queso</h3>
          </div>
          <div class="space-y-1">
            ${bolloRow('bollos-queso-12', '12 piezas', 200)}
            ${bolloRow('bollos-queso-24', '24 piezas', 380, true)}
          </div>
        </div>

        <div>
          <h3 class="font-display font-bold text-xl text-primary mb-4">Bollos Naturales</h3>
          <div class="space-y-1">
            ${bolloRow('bollos-nat-1',  '1 pieza',   10)}
            ${bolloRow('bollos-nat-12', '12 piezas', 115)}
            ${bolloRow('bollos-nat-24', '24 piezas', 225, true)}
          </div>
        </div>

        <div>
          <h3 class="font-display font-bold text-xl text-primary mb-4">Bollos de Ajo</h3>
          <div class="space-y-1">
            ${bolloRow('bollos-ajo-12', '12 piezas', 160)}
            ${bolloRow('bollos-ajo-24', '24 piezas', 300, true)}
          </div>
        </div>

      </div>
    </div>`;
}

function colOtros() {
  return `
    <div class="product-card reveal-on-scroll bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 space-y-8" style="transition-delay:200ms">

      <div class="bg-primary rounded-2xl p-6 text-cream">
        <h3 class="font-display font-bold text-2xl mb-2">Rol de Canela</h3>
        <p class="font-body text-cream/80 text-sm mb-4 leading-relaxed">Masa madre con canela y glaseado de queso crema con vainilla.</p>
        <div class="flex items-center justify-between flex-wrap gap-3">
          <div>
            <span class="font-body text-cream/70 text-xs uppercase tracking-wide">1 pieza</span>
            <p class="font-accent font-bold text-3xl">$60</p>
          </div>
          <button data-add-to-cart="rol-canela" onclick="Cart.addItem('rol-canela')"
            class="flex items-center gap-2 bg-cream text-primary px-5 py-2.5 rounded-full font-body font-bold text-sm hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
            ${ICON_PLUS_MD} Agregar al carrito
          </button>
        </div>
      </div>

      <div>
        <h3 class="font-display font-bold text-xl text-primary mb-4">Otros Productos</h3>
        <ul class="space-y-1 text-sm font-body text-bark mb-5">
          <li class="flex items-center gap-2 py-2 border-b border-wheat/40">
            <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>Crema de Cacahuate
          </li>
          <li class="flex items-center gap-2 py-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>Salsa Macha
          </li>
        </ul>
        <p class="font-body font-bold text-bark text-sm mb-3">Hechos de Masa Madre:</p>
        <ul class="space-y-1 text-sm font-body text-bark">
          <li class="flex items-center gap-2 py-2 border-b border-wheat/40">
            <span class="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0"></span>Galletas
          </li>
          <li class="flex items-center gap-2 py-2 border-b border-wheat/40">
            <span class="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0"></span>Pan Hamburguesa
          </li>
          <li class="flex items-center gap-2 py-2 border-b border-wheat/40">
            <span class="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0"></span>Ciabatta
          </li>
          <li class="flex items-center gap-2 py-2 border-b border-wheat/40">
            <span class="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0"></span>Focaccia
          </li>
          <li class="flex items-center gap-2 py-2 border-b border-wheat/40">
            <span class="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0"></span>Baguette
          </li>
          <li class="flex items-center gap-2 py-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0"></span>Pan de Molde
          </li>
        </ul>
        <p class="font-body text-bark/50 text-xs mt-3 italic">* Sobre pedido</p>
      </div>

    </div>`;
}

// ── Render principal ──────────────────────────────────────────────────

function renderProducts() {
  const container = document.getElementById('products-container');
  if (!container) return;

  container.innerHTML = colMasamadre() + colBollos() + colOtros();

  // Registrar nuevos elementos en el observer de animaciones
  container.querySelectorAll('.reveal-on-scroll').forEach(el => Animations.observe(el));
}

document.addEventListener('DOMContentLoaded', renderProducts);
