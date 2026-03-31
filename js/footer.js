/**
 * footer.js — Inyección del contenido del footer
 * Bon Dia Panadería
 *
 * Para editar datos del footer: modifica FOOTER_DATA.
 */

const FOOTER_DATA = {
  phone:    '526645022113',
  display:  '664 502 2113',
  facebook:  'https://web.facebook.com/bondia.panaderia/',
  instagram: 'https://www.instagram.com/bondia.panaderia',
  address:  'Kiosko K-4, Centro Comercial Playas',
  city:     'Por la entrada a Soriana, Tijuana.',
  hours:    'Lun–Vie 10:00 am–7:00 pm · Sáb 10:00 am–5:00 pm',
  days:     'Domingo: Cerrado',
  year:     new Date().getFullYear(),
};

const WA_ICON_FOOTER = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const FB_ICON_FOOTER = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>`;

const IG_ICON_FOOTER = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;

function injectFooter() {
  const footer = document.getElementById('footer-root');
  if (!footer) return;

  const { phone, display, facebook, instagram, address, city, hours, days, year } = FOOTER_DATA;

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8 mb-10">

        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-full border-2 border-wheat/40 flex items-center justify-center flex-shrink-0">
              <span class="font-display text-wheat font-bold text-xs leading-tight text-center">Bon<br>dia</span>
            </div>
            <div>
              <p class="font-display font-bold text-xl text-cream">Bon Dia</p>
              <p class="font-body text-cream/40 text-xs tracking-widest uppercase">Panadería</p>
            </div>
          </div>
          <p class="font-body text-cream/60 text-sm leading-relaxed">Pan de masa madre artesanal elaborado con harina orgánica y amor.</p>
        </div>

        <div>
          <h4 class="font-display font-bold text-lg text-wheat mb-4">Horarios</h4>
          <p class="font-body text-cream/60 text-sm">${days}</p>
          <p class="font-body text-cream/90 font-bold text-lg">${hours}</p>
          <p class="font-body text-cream/60 text-sm mt-3">${address}</p>
          <p class="font-body text-cream/60 text-sm">${city}</p>
        </div>

        <div>
          <h4 class="font-display font-bold text-lg text-wheat mb-4">Contacto</h4>
          <div class="flex flex-col gap-3">
            <a href="https://wa.me/${phone}" target="_blank" rel="noopener"
               class="flex items-center gap-3 group text-cream/70 hover:text-cream transition-colors">
              <div class="w-9 h-9 rounded-full bg-white/10 group-hover:bg-green-500 flex items-center justify-center transition-all duration-200 flex-shrink-0">
                ${WA_ICON_FOOTER}
              </div>
              <span class="font-body text-sm">${display}</span>
            </a>
            <a href="${facebook}" target="_blank" rel="noopener"
               class="flex items-center gap-3 group text-cream/70 hover:text-cream transition-colors">
              <div class="w-9 h-9 rounded-full bg-white/10 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-200 flex-shrink-0">
                ${FB_ICON_FOOTER}
              </div>
              <span class="font-body text-sm">Bon Dia Panadería</span>
            </a>
            <a href="${instagram}" target="_blank" rel="noopener"
               class="flex items-center gap-3 group text-cream/70 hover:text-cream transition-colors">
              <div class="ig-btn w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-200 flex-shrink-0">
                ${IG_ICON_FOOTER}
              </div>
              <span class="font-body text-sm">@bondia.panaderia</span>
            </a>
          </div>
        </div>

      </div>
      <div class="border-t border-cream/10 pt-6 text-center">
        <p class="font-body text-cream/30 text-xs tracking-wide">© ${year} Bon Dia Panadería · Tijuana, México</p>
      </div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', injectFooter);
