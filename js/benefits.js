/**
 * benefits.js — Sección Beneficios del Pan
 * Bon Dia Panadería
 *
 * Para editar los beneficios: modifica BENEFITS_DATA.
 */

const BENEFITS_DATA = [
  {
    num:   '1',
    title: 'Mejor Digestión',
    desc:  'La fermentación prolongada degrada parte del gluten y los carbohidratos complejos, facilitando la digestión. Puede reducir molestias en personas sensibles al gluten (aunque no es apto para celíacos).',
    delay: 0,
  },
  {
    num:   '2',
    title: 'Índice Glucémico Más Bajo',
    desc:  'El pan de masa madre libera energía de manera más lenta, ayudando a mantener niveles estables de azúcar en la sangre.',
    delay: 100,
  },
  {
    num:   '3',
    title: 'Mayor Biodisponibilidad de Nutrientes',
    desc:  'La fermentación disminuye el ácido fítico presente en los cereales, permitiendo que el cuerpo absorba mejor minerales como hierro, zinc y magnesio.',
    delay: 150,
  },
  {
    num:   '4',
    title: 'Aporte de Prebióticos',
    desc:  'Aunque los probióticos mueren al hornearse, la fermentación genera compuestos prebióticos que benefician la microbiota intestinal.',
    delay: 200,
  },
];

function benefitCard({ num, title, desc, delay }) {
  const delayAttr = delay ? ` style="transition-delay:${delay}ms"` : '';
  return `
    <div class="benefit-card reveal-on-scroll flex gap-6 items-start group"${delayAttr}>
      <div class="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
        <span class="font-display font-bold text-primary text-xl group-hover:text-cream transition-colors duration-300">${num}</span>
      </div>
      <div>
        <h3 class="font-display font-bold text-xl text-wheat mb-2">${title}</h3>
        <p class="font-body text-cream/70 text-sm leading-relaxed">${desc}</p>
      </div>
    </div>`;
}

function renderBenefits() {
  const container = document.getElementById('benefits-container');
  if (!container) return;

  container.innerHTML = BENEFITS_DATA.map(benefitCard).join('');
  container.querySelectorAll('.reveal-on-scroll').forEach(el => Animations.observe(el));
}

document.addEventListener('DOMContentLoaded', renderBenefits);
