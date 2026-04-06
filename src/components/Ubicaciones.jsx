import BondiaMap from './BondiaMap'

export default function Ubicaciones() {
  return (
    <section id="ubicaciones" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent italic text-primary text-lg mb-2">Encuéntranos</p>
          <h2 className="font-display font-bold text-5xl text-bark">Ubicaciones</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4"/>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Cards column */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Tienda principal */}
            <div className="bg-cream rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-body text-primary text-xs font-bold uppercase tracking-widest">Tienda principal</p>
                  <h3 className="font-display font-bold text-lg text-bark leading-tight">C.C. Playas · Kiosko K-4</h3>
                </div>
              </div>
              <p className="font-body text-bark/60 text-sm leading-relaxed">Dentro del Centro Comercial Playas, por la entrada a Soriana.</p>
              <div className="border-t border-wheat/50 pt-4 space-y-2">
                <p className="font-body text-xs font-bold uppercase tracking-widest text-bark/40 mb-2">Horarios</p>
                {[['Lunes – Viernes', '10:00 am – 7:00 pm'],['Sabado', '10:00 am – 5:00 pm']].map(([d,h]) => (
                  <div key={d} className="flex justify-between items-center text-sm">
                    <span className="font-body text-bark/60">{d}</span>
                    <span className="font-body font-bold text-bark">{h}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-sm">
                  <span className="font-body text-bark/60">Domingo</span>
                  <span className="font-body text-bark/40 italic">Cerrado</span>
                </div>
              </div>
              <a href="https://maps.google.com/?q=32.52413,-117.10052" target="_blank" rel="noopener"
                 className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary hover:bg-primary hover:text-cream px-4 py-2.5 rounded-full font-body text-sm font-bold transition-all duration-300">
                Ver en mapa
              </a>
            </div>

            {/* Panadería Denisse */}
            <div className="bg-cream rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div>
                  <p className="font-body text-primary text-xs font-bold uppercase tracking-widest">Disponible también en</p>
                  <h3 className="font-display font-bold text-lg text-bark leading-tight">Panadería Denisse</h3>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-bark/60">
                <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="font-body leading-relaxed">De Las Nubes 631, Jardines del Sol, Playas de Tijuana.</span>
              </div>
              <a href="https://maps.google.com/?q=32.51811499967478,-117.11661508587873" target="_blank" rel="noopener"
                 className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary hover:bg-primary hover:text-cream px-4 py-2.5 rounded-full font-body text-sm font-bold transition-all duration-300">
                Ver en mapa
              </a>
            </div>

            {/* Entregas */}
            <div className="bg-bark text-cream rounded-3xl p-6 space-y-4">
              <p className="font-body text-wheat text-xs font-bold uppercase tracking-widest">Entregas</p>
              <div className="flex items-start gap-3 pb-4 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <p className="font-body font-bold text-cream text-sm">El Soler</p>
                  <p className="font-body text-cream/60 text-xs leading-relaxed mt-0.5">Mar – Sáb en Veterinaria Soler · 9:00 am – 6:00 pm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                </div>
                <div>
                  <p className="font-body font-bold text-cream text-sm">Uber Moto a domicilio</p>
                  <p className="font-body text-cream/60 text-xs leading-relaxed mt-0.5">Hasta 5 kg · costo de envío por cuenta del cliente</p>
                </div>
              </div>
              <a href="https://wa.me/526645022113" target="_blank" rel="noopener"
                 className="inline-flex items-center gap-2 bg-primary text-cream px-5 py-2.5 rounded-full font-body text-xs font-bold tracking-wide hover:bg-primary-dark transition-colors w-full justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar entrega por WhatsApp
              </a>
            </div>

          </div>

          {/* Map — Leaflet */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-wheat/30">
              <BondiaMap />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
