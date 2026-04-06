const NAV_LINKS = [
  { href: '#productos',       label: 'Productos' },
  { href: '#caracteristicas', label: 'Características' },
  { href: '#beneficios',      label: 'Beneficios' },
  { href: '#faq',             label: 'Preguntas frecuentes' },
  { href: '#mayoreo',         label: 'Mayoreo' },
  { href: '#ubicaciones',     label: 'Ubicaciones' },
  { href: '#nosotros',        label: 'Nosotros' },
]

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"

export default function Footer() {
  return (
    <footer className="bg-bark text-cream py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/img/nuevo_logo2.png"
                alt="Bon Dia Panadería"
                className="h-12 w-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="font-body text-cream/60 text-sm leading-relaxed">Pan de masa madre artesanal elaborado con harina orgánica y amor.</p>
          </div>

          {/* Hours + address */}
          <div>
            <h4 className="font-display font-bold text-lg text-wheat mb-4">Horarios</h4>
            <p className="font-body text-cream/60 text-sm">Domingo: Cerrado</p>
            <p className="font-body text-cream/90 font-bold text-lg">Lun–Vie 10am–7pm · Sáb 10am–5pm</p>
            <p className="font-body text-cream/60 text-sm mt-3">Kiosko K-4, Centro Comercial Playas</p>
            <p className="font-body text-cream/60 text-sm">Por la entrada a Soriana, Tijuana.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg text-wheat mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/526645022113" target="_blank" rel="noopener"
                 className="flex items-center gap-3 group text-cream/70 hover:text-cream transition-colors">
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-green-500 flex items-center justify-center transition-all duration-200 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WA_PATH}/></svg>
                </div>
                <span className="font-body text-sm">664 502 2113</span>
              </a>
              <a href="https://web.facebook.com/bondia.panaderia/" target="_blank" rel="noopener"
                 className="flex items-center gap-3 group text-cream/70 hover:text-cream transition-colors">
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-200 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </div>
                <span className="font-body text-sm">Bon Dia Panadería</span>
              </a>
              <a href="https://www.instagram.com/bondia.panaderia" target="_blank" rel="noopener"
                 className="flex items-center gap-3 group text-cream/70 hover:text-cream transition-colors">
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-pink-600 flex items-center justify-center transition-all duration-200 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="font-body text-sm">@bondia.panaderia</span>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-cream/10 pt-6 text-center">
          <p className="font-body text-cream/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Bon Dia Panadería · Tijuana, México
          </p>
        </div>
      </div>
    </footer>
  )
}
