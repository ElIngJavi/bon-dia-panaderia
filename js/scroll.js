/**
 * scroll.js — Smooth scroll, parallax y botón back-to-top
 * Bon Dia Panadería
 */

const ScrollUtils = (() => {

  // ---- Smooth scroll para anclas internas ----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        const navHeight = document.getElementById('navbar')?.offsetHeight ?? 72;
        const targetY   = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      });
    });
  }

  // ---- Parallax en círculos decorativos del hero ----
  function initParallax() {
    const circles = document.querySelectorAll('.hero-deco-circle, .hero-deco-circle-2');
    if (!circles.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          circles.forEach((el, i) => {
            const factor = i === 0 ? 0.15 : -0.10;
            el.style.transform = `translateY(${scrolled * factor}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ---- Botón volver arriba (auto-insertado) ----
  function initBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
    btn.setAttribute('aria-label', 'Volver arriba');
    Object.assign(btn.style, {
      position:       'fixed',
      bottom:         '32px',
      right:          '24px',
      zIndex:         '40',
      width:          '44px',
      height:         '44px',
      borderRadius:   '50%',
      background:     'var(--color-primary)',
      color:          'white',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      opacity:        '0',
      pointerEvents:  'none',
      transition:     'opacity 0.3s ease, transform 0.3s ease',
      boxShadow:      '0 4px 16px rgba(194,84,26,0.35)',
      cursor:         'pointer',
      border:         'none',
    });

    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      const show = window.scrollY > 400;
      btn.style.opacity       = show ? '1' : '0';
      btn.style.pointerEvents = show ? 'auto' : 'none';
    }, { passive: true });

    btn.addEventListener('click',      () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    btn.addEventListener('mouseenter', () => { btn.style.transform = 'translateY(-3px) scale(1.05)'; });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'translateY(0) scale(1)'; });
  }

  // ---- Init ----
  function init() {
    initSmoothScroll();
    initParallax();
    initBackToTop();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', ScrollUtils.init);
