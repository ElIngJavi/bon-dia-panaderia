/**
 * animations.js — Animaciones de scroll reveal
 * Usa IntersectionObserver para disparar .is-visible en .reveal-on-scroll
 * Bon Dia Panadería
 */

const Animations = (() => {

  const OBSERVER_OPTIONS = {
    root:       null,
    rootMargin: '0px 0px -80px 0px',
    threshold:  0.1,
  };

  let observer = null;
  let reducedMotion = false;

  function onIntersect(entries, obs) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }

  // Observar un elemento individual (útil para elementos renderizados dinámicamente)
  function observe(el) {
    if (reducedMotion) {
      el.classList.add('is-visible');
    } else if (observer) {
      observer.observe(el);
    }
  }

  function init() {
    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
      return;
    }

    observer = new IntersectionObserver(onIntersect, OBSERVER_OPTIONS);
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
  }

  return { init, observe };
})();

document.addEventListener('DOMContentLoaded', Animations.init);
