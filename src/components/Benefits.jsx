const BENEFITS = [
  {
    num: '1',
    title: 'Mejor Digestión',
    desc: 'La fermentación prolongada degrada parte del gluten y los carbohidratos complejos, facilitando la digestión. Puede reducir molestias en personas sensibles al gluten (aunque no es apto para celíacos).',
  },
  {
    num: '2',
    title: 'Índice Glucémico Más Bajo',
    desc: 'El pan de masa madre libera energía de manera más lenta, ayudando a mantener niveles estables de azúcar en la sangre.',
  },
  {
    num: '3',
    title: 'Mayor Biodisponibilidad de Nutrientes',
    desc: 'La fermentación disminuye el ácido fítico presente en los cereales, permitiendo que el cuerpo absorba mejor minerales como hierro, zinc y magnesio.',
  },
  {
    num: '4',
    title: 'Aporte de Prebióticos',
    desc: 'Aunque los probióticos mueren al hornearse, la fermentación genera compuestos prebióticos que benefician la microbiota intestinal.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-bark text-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="font-accent italic text-wheat text-lg mb-2">¿Por qué elegirnos?</p>
          <h2 className="font-display font-bold text-5xl text-cream">Beneficios del Pan</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4"/>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {BENEFITS.map((b, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <span className="font-display font-bold text-primary text-xl group-hover:text-cream transition-colors duration-300">{b.num}</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-wheat mb-2">{b.title}</h3>
                <p className="font-body text-cream/70 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
