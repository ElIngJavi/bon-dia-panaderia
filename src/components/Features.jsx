export default function Features() {
  return (
    <section id="caracteristicas" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-accent italic text-primary text-lg mb-2">Calidad garantizada</p>
          <h2 className="font-display font-bold text-5xl text-bark">Características del Producto</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4"/>
        </div>

        {/* Intro */}
        <p className="font-display text-2xl md:text-3xl text-bark text-center leading-snug mb-16 max-w-3xl mx-auto">
          Harina orgánica, <em className="text-primary not-italic font-semibold">cero conservadores</em> y fermentación lenta.<br className="hidden md:block"/> Eso es todo lo que lleva nuestro pan.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-wheat/60 mb-16">
          {[
            { n: '100%', label: 'Orgánico',        sub: 'Harina seleccionada, sin químicos.' },
            { n: '0',    label: 'Conservadores',   sub: 'Natural. Como se hacía antes.' },
            { n: '~1kg', label: '17–18 rebanadas', sub: 'Rinde para toda la semana.' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 py-6">
              <span className="font-display font-black text-5xl md:text-6xl text-primary leading-none">{s.n}</span>
              <span className="font-body font-bold text-bark text-xs tracking-widest uppercase mt-2">{s.label}</span>
              <span className="font-body text-bark/50 text-xs mt-1 hidden md:block">{s.sub}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-wheat/60 mb-12"/>

        {/* Info columns */}
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-body font-bold text-bark/40 text-xs tracking-widest uppercase mb-3">Formato</p>
            <p className="font-display font-semibold text-bark text-lg leading-relaxed">Barra · 13×10 cm<br/>Hogaza · 22×7.5 cm</p>
            <p className="font-body text-bark/50 text-xs mt-2">Medidas aproximadas, pueden variar.</p>
          </div>
          <div>
            <p className="font-body font-bold text-bark/40 text-xs tracking-widest uppercase mb-3">Conservación</p>
            <p className="font-display font-semibold text-bark text-lg leading-relaxed">3 semanas refrigerado<br/>5 semanas congelado</p>
            <p className="font-body text-bark/50 text-xs mt-2">En contenedor o bolsa cerrada.</p>
          </div>
          <div>
            <p className="font-body font-bold text-bark/40 text-xs tracking-widest uppercase mb-3">Importante</p>
            <p className="font-display font-semibold text-bark text-lg leading-relaxed">Siempre refrigerado</p>
            <p className="font-body text-bark/50 text-xs mt-2">Al ser fermentado natural, el calor favorece el moho.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
