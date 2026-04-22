import { useState } from 'react'
import BondiaMap from './BondiaMap'

export default function Ubicaciones() {
  const [tab, setTab] = useState('tiendas')

  return (
    <section id="ubicaciones" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="font-accent italic text-primary text-lg mb-2">Encuéntranos</p>
          <h2 className="font-display font-bold text-5xl text-bark">Ubicaciones</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4"/>
        </div>

        <div className="bg-cream rounded-3xl overflow-hidden shadow-sm border border-wheat/30 flex flex-col lg:flex-row">

          {/* Left panel */}
          <div className="lg:w-2/5 flex flex-col p-6 gap-4">

            {/* Tabs */}
            <div className="flex border-b border-wheat/50">
              {[
                { key: 'tiendas',   label: 'Tiendas',   count: '02' },
                { key: 'entregas',  label: 'Entregas',  count: '02' },
              ].map(t => (
                <button key={t.key} onClick={() => setTab(t.key)}
                  className={`flex items-center gap-1.5 px-4 py-3 font-display font-bold text-base transition-colors duration-200 border-b-2 -mb-px
                    ${tab === t.key
                      ? 'text-bark border-primary'
                      : 'text-bark/40 border-transparent hover:text-bark/70'}`}>
                  {t.label}
                  <span className="font-body text-xs font-normal opacity-60">{t.count}</span>
                </button>
              ))}
            </div>

            {/* Tab: Tiendas */}
            {tab === 'tiendas' && (
              <div className="flex flex-col gap-4">

                {/* Tienda 1 */}
                <div className="bg-white rounded-2xl p-5 space-y-3 border border-wheat/30">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-body font-bold text-cream text-xs">1</span>
                    </div>
                    <div>
                      <p className="font-body text-primary text-xs font-bold uppercase tracking-widest">Tienda Principal</p>
                      <h3 className="font-display font-bold text-bark text-base leading-tight">C.C. Playas · Kiosko K-4</h3>
                      <p className="font-body text-bark/50 text-xs mt-1">Dentro del Centro Comercial Playas, por la entrada a Soriana.</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    {[['Lun – Vie', '10:00 am – 7:00 pm'], ['Sábado', '10:00 am – 5:00 pm']].map(([d, h]) => (
                      <div key={d} className="flex justify-between">
                        <span className="font-body text-bark/60">{d}</span>
                        <span className="font-body font-semibold text-bark">{h}</span>
                      </div>
                    ))}
                    <div className="flex justify-between">
                      <span className="font-body text-bark/60">Domingo</span>
                      <span className="font-body text-bark/40 italic">Cerrado</span>
                    </div>
                  </div>
                  <a href="https://maps.google.com/?q=32.52413,-117.10052" target="_blank" rel="noopener"
                    className="block text-center w-full bg-primary hover:bg-primary-dark text-cream py-2.5 rounded-full font-body font-bold text-sm transition-colors duration-300">
                    Cómo llegar
                  </a>
                </div>

                {/* Tienda 2 */}
                <div className="bg-white rounded-2xl p-5 space-y-2 border border-wheat/30">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7B4FB5] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-body font-bold text-white text-xs">2</span>
                    </div>
                    <div>
                      <p className="font-body text-[#7B4FB5] text-xs font-bold uppercase tracking-widest">Disponible también en</p>
                      <h3 className="font-display font-bold text-bark text-base leading-tight">Panadería Denisse</h3>
                      <p className="font-body text-bark/50 text-xs mt-1">De Las Nubes 631, Jardines del Sol, Playas de Tijuana.</p>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Tab: Entregas */}
            {tab === 'entregas' && (
              <div className="flex flex-col gap-4">
                <p className="font-body text-bark/60 text-sm">Además de las tiendas, puedes conseguir nuestro pan por estas vías:</p>

                <div className="bg-white rounded-2xl p-4 border border-wheat/30 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                      <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-body font-bold text-bark text-sm">El Soler</p>
                    <p className="font-body text-bark/50 text-xs mt-0.5">Mar – Sáb · Veterinaria Soler</p>
                    <p className="font-body text-primary text-xs font-semibold mt-0.5">9:00 am – 6:00 pm</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-wheat/30 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-body font-bold text-bark text-sm">Uber Moto · a domicilio</p>
                    <p className="font-body text-bark/50 text-xs mt-0.5">Hasta 5 kg · costo por cuenta del cliente</p>
                    <p className="font-body text-bark/40 text-xs italic mt-0.5">A solicitud</p>
                  </div>
                </div>

                <a href="https://wa.me/526645022113" target="_blank" rel="noopener"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1da850] text-white py-3 rounded-full font-body font-bold text-sm transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar por WhatsApp
                </a>
              </div>
            )}

          </div>

          {/* Map */}
          <div className="lg:w-3/5">
            <BondiaMap />
          </div>

        </div>
      </div>
    </section>
  )
}
