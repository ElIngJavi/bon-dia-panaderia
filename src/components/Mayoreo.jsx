import { useState } from 'react'

const STEPS = [
  { n: '01', title: 'Nos cuentas',    desc: 'Tipo de negocio, qué pan necesitas y cada cuánto.' },
  { n: '02', title: 'Te cotizamos',   desc: 'Precio por volumen y fecha de primera entrega. Menos de 24h.' },
  { n: '03', title: 'Recibes tu pan', desc: 'Horneado el mismo día, entregado al horario que te venga mejor.' },
]

export default function Mayoreo() {
  const [form, setForm] = useState({ nombre: '', tipo: 'Cafetería', piezas: '30', frecuencia: 'Semanal' })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hola, me interesa cotizar pan de mayoreo.\n\nNegocio: ${form.nombre}\nTipo: ${form.tipo}\nPiezas por pedido: ${form.piezas}\nFrecuencia: ${form.frecuencia}`
    )
    window.open(`https://wa.me/526645022113?text=${msg}`, '_blank', 'noopener')
  }

  return (
    <section id="mayoreo" className="py-24 bg-cream px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-accent italic text-primary text-lg mb-2">Para tu negocio</p>
          <h2 className="font-display font-bold text-5xl text-bark">
            Ventas a <em className="font-accent not-italic text-primary">Mayoreo</em>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4"/>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-3 gap-0 mb-14 relative">
          {STEPS.map((s, i) => (
            <div key={i} className="flex flex-col items-start px-6 relative">
              <div className="flex items-center w-full mb-4">
                <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-primary text-lg">{s.n}</span>
                </div>
                {i < 2 && (
                  <div className="flex-1 border-t-2 border-dashed border-primary/40 ml-3"/>
                )}
              </div>
              <p className="font-display font-bold text-bark text-base mb-1">{s.title}</p>
              <p className="font-body text-bark/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-wheat/40 shadow-sm p-8 flex flex-col lg:flex-row gap-8">

          {/* Left */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <p className="font-body font-bold text-primary text-xs tracking-widest uppercase mb-3">Cotización en 24h</p>
            <h3 className="font-display font-bold text-3xl text-bark mb-3">Empieza aquí.</h3>
            <p className="font-body text-bark/60 text-sm leading-relaxed">
              Llena estos datos y te contactamos con una propuesta concreta. Pedido mínimo <strong className="text-bark">10 piezas</strong>.
            </p>
          </div>

          {/* Right – form */}
          <form onSubmit={handleSubmit} className="lg:w-3/5 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-body font-bold text-bark/40 text-xs tracking-widest uppercase">Nombre del negocio</label>
                <input
                  type="text" placeholder="Café Tal..."
                  value={form.nombre} onChange={e => set('nombre', e.target.value)}
                  className="border border-wheat/60 rounded-lg px-3 py-2.5 font-body text-sm text-bark placeholder-bark/30 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-body font-bold text-bark/40 text-xs tracking-widest uppercase">Tipo</label>
                <select value={form.tipo} onChange={e => set('tipo', e.target.value)}
                  className="border border-wheat/60 rounded-lg px-3 py-2.5 font-body text-sm text-bark focus:outline-none focus:border-primary transition-colors bg-white">
                  {['Cafetería','Restaurante','Food truck','Panadería','Hotel','Otro'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-body font-bold text-bark/40 text-xs tracking-widest uppercase">Piezas por pedido</label>
                <select value={form.piezas} onChange={e => set('piezas', e.target.value)}
                  className="border border-wheat/60 rounded-lg px-3 py-2.5 font-body text-sm text-bark focus:outline-none focus:border-primary transition-colors bg-white">
                  {['10','20','30','50','100','Más de 100'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-body font-bold text-bark/40 text-xs tracking-widest uppercase">Frecuencia</label>
                <select value={form.frecuencia} onChange={e => set('frecuencia', e.target.value)}
                  className="border border-wheat/60 rounded-lg px-3 py-2.5 font-body text-sm text-bark focus:outline-none focus:border-primary transition-colors bg-white">
                  {['Diaria','Semanal','Quincenal','Mensual','A solicitud'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <button type="submit"
                className="flex-1 bg-primary hover:bg-primary-dark text-cream py-3 rounded-full font-body font-bold text-sm transition-colors duration-300">
                Enviar cotización →
              </button>
              <a href="https://wa.me/526645022113" target="_blank" rel="noopener"
                className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1da850] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
