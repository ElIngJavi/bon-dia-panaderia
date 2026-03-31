/**
 * features.js — Sección Características del Producto
 * Bon Dia Panadería
 *
 * Para editar características: modifica FEATURES_DATA y CARE_DATA.
 */

const FEATURES_DATA = [
  {
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
    title: 'Harina Orgánica',
    desc:  'Elaborado exclusivamente con harina orgánica de alta calidad.',
    delay: 0,
  },
  {
    icon: `<path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>`,
    title: 'Sin Conservadores',
    desc:  '100% natural, sin aditivos ni conservadores artificiales.',
    delay: 60,
  },
  {
    icon: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
    title: '~1 kg por Hogaza',
    desc:  'Cada hogaza pesa aproximadamente un kilogramo, con 17–18 rebanadas.',
    delay: 120,
  },
  {
    icon: `<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>`,
    title: 'Pan en Barra',
    desc:  'Rebanadas de 13 cm ancho × 10 cm alto. (Medidas pueden variar.)',
    delay: 180,
  },
  {
    icon: `<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>`,
    title: 'Hogaza',
    desc:  'Rebanadas de 22 cm ancho × 7.5 cm alto. (Medidas pueden variar.)',
    delay: 240,
  },
  {
    icon: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
    title: 'Hecho con Amor',
    desc:  'Artesanal, fermentación lenta, proceso cuidado en cada paso.',
    delay: 300,
    accent: true,
  },
];

function featureCard({ icon, title, desc, delay, accent }) {
  const bg      = accent ? 'bg-primary' : 'bg-white';
  const iconBg  = accent ? 'bg-white/20' : 'bg-primary/10';
  const iconClr = accent ? 'text-cream'  : 'text-primary';
  const titleClr= accent ? 'text-cream'  : 'text-bark';
  const descClr = accent ? 'text-cream/80' : 'text-bark/60';
  const delayAttr = delay ? ` style="transition-delay:${delay}ms"` : '';

  return `
    <div class="feature-card reveal-on-scroll ${bg} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"${delayAttr}>
      <div class="w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4">
        <svg class="w-6 h-6 ${iconClr}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icon}</svg>
      </div>
      <h3 class="font-display font-bold text-lg ${titleClr} mb-2">${title}</h3>
      <p class="font-body ${descClr} text-sm leading-relaxed">${desc}</p>
    </div>`;
}

function careSection() {
  return `
    <div class="care-section reveal-on-scroll bg-white rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center mt-12">
      <div>
        <h3 class="font-display font-bold text-3xl text-bark mb-4">Cuidado del Pan</h3>
        <p class="font-body text-bark/70 mb-6 leading-relaxed">Mantén tu pan en refrigeración dentro de un contenedor o bolsa cerrada para preservar su frescura.</p>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-cream rounded-xl p-4 text-center">
            <div class="font-display font-bold text-3xl text-primary">3</div>
            <div class="font-body text-bark/60 text-sm mt-1">semanas en refrigerador</div>
          </div>
          <div class="bg-cream rounded-xl p-4 text-center">
            <div class="font-display font-bold text-3xl text-primary">5</div>
            <div class="font-body text-bark/60 text-sm mt-1">semanas en congelador</div>
          </div>
        </div>
      </div>
      <div class="bg-amber-50 rounded-2xl p-6 border-l-4 border-primary">
        <p class="font-body font-bold text-bark mb-2">¿Qué pasa si no lo refrigero?</p>
        <p class="font-body text-bark/70 text-sm leading-relaxed">Al ser un producto fermentado y sin conservadores, con el calor puede desarrollar moho. ¡Siempre guárdalo refrigerado!</p>
      </div>
    </div>`;
}

function renderFeatures() {
  const container = document.getElementById('features-container');
  if (!container) return;

  const grid = document.createElement('div');
  grid.className = 'grid md:grid-cols-2 lg:grid-cols-3 gap-6';
  grid.innerHTML = FEATURES_DATA.map(featureCard).join('');
  container.appendChild(grid);

  container.insertAdjacentHTML('beforeend', careSection());

  container.querySelectorAll('.reveal-on-scroll').forEach(el => Animations.observe(el));
}

document.addEventListener('DOMContentLoaded', renderFeatures);
