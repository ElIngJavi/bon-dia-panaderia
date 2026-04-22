const CLIENTS = [
  {
    name: 'Salvaje Café',
    type: 'Cafetería',
    logo: '/img/negocio1.jpeg',
    quote: 'El pan de masa madre de Bon Dia elevó nuestro menú. Nuestros clientes siempre lo piden.',
  },
  {
    name: 'Cafecito Coffee & Deli',
    type: 'Cafetería',
    logo: '/img/negocio2.jpeg',
    quote: 'Calidad constante, entrega puntual. Lo mejor que le pudimos hacer a nuestras tostadas.',
  },
  {
    name: 'Birria Mosh',
    type: 'Restaurante',
    logo: '/img/negocio3.jpeg',
    quote: 'Nuestros sándwiches con hogaza de masa madre son el hit del mercado. ¡No pueden faltar!',
  },
]

export default function SocialProof() {
  return (
    <section id="clientes" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent italic text-primary text-lg mb-2">Nos eligen los mejores</p>
          <h2 className="font-display font-bold text-5xl text-bark">Nuestros Clientes</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4"/>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CLIENTS.map((c, i) => (
            <div key={i} className="bg-cream border border-wheat/40 rounded-2xl p-7 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center mb-5">
                <div className="w-28 h-28 mb-3 rounded-full overflow-hidden">
                  <img src={c.logo} alt={c.name} className="w-full h-full object-cover"/>
                </div>
                <p className="font-display font-bold text-bark text-lg leading-tight text-center">{c.name}</p>
                <span className="inline-block mt-1 bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full font-body">{c.type}</span>
              </div>
              <blockquote className="font-accent italic text-bark/70 text-base leading-relaxed">"{c.quote}"</blockquote>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, j) => <span key={j} className="text-primary text-lg">★</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto text-center">
          {[{ n: '100%', label: 'Orgánico' },{ n: '0', label: 'Conservadores' },{ n: '3+', label: 'Negocios aliados' }].map((s, i) => (
            <div key={i}>
              <div className="font-display font-black text-4xl text-primary">{s.n}</div>
              <div className="font-body text-bark/60 text-xs mt-1 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
