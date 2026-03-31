/**
 * nav.js — Comportamiento de la navegación
 * Maneja: estado de scroll, menú móvil, highlight de link activo
 * Bon Dia Panadería
 */

const Nav = (() => {

  // ---- Elementos ----
  const navbar      = document.getElementById('navbar');
  const menuToggle  = document.getElementById('menu-toggle');
  const mobileMenu  = document.getElementById('mobile-menu');
  const navLinks    = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  let isMenuOpen = false;

  // ---- Clase scrolled en el navbar ----
  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }

  // ---- Toggle del menú móvil ----
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    menuToggle.classList.toggle('is-open', isMenuOpen);
    mobileMenu.classList.toggle('hidden', !isMenuOpen);

    requestAnimationFrame(() => {
      mobileMenu.classList.toggle('is-visible', isMenuOpen);
    });

    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }

  // ---- Cerrar menú al hacer click en un link ----
  function closeMobileMenu() {
    if (!isMenuOpen) return;
    isMenuOpen = false;
    menuToggle.classList.remove('is-open');
    mobileMenu.classList.remove('is-visible');
    setTimeout(() => mobileMenu.classList.add('hidden'), 400);
    document.body.style.overflow = '';
  }

  // ---- Highlight del link activo según posición ----
  function highlightActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
      const top    = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  // ---- Cerrar menú al click fuera ----
  function handleOutsideClick(e) {
    if (isMenuOpen && !navbar.contains(e.target)) closeMobileMenu();
  }

  // ---- Init ----
  function init() {
    // Scroll throttled
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          highlightActiveLink();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    menuToggle?.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
    document.addEventListener('click', handleOutsideClick);

    // Ejecutar al cargar
    handleScroll();
    highlightActiveLink();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', Nav.init);
