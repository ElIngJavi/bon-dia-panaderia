export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-cream relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent italic text-primary text-lg mb-2">Nuestra historia</p>
          <h2 className="font-display font-bold text-5xl text-bark">Acerca de Nosotros</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4"/>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text — left */}
          <div className="space-y-6">
            <p className="font-accent text-2xl italic text-primary leading-relaxed">"Pan de calidad y sabor"</p>
            <p className="font-body text-bark/80 text-lg leading-relaxed">
              Somos una microempresa dedicada a la fabricación de pan de masa madre de alta calidad y delicioso sabor.
            </p>
            <p className="font-body text-bark/70 leading-relaxed">
              Aunque estamos iniciando este año, nuestros productos han tenido una alta aceptación y esto nos impulsa a seguir trabajando con más esfuerzo y dedicación, siempre buscando la forma de mejorar nuestros propios estándares de calidad.
            </p>
            <p className="font-body text-bark/70 leading-relaxed">
              Hacemos las cosas con honestidad y transparencia, usando ingredientes naturales y procesos tranquilos, como se hacía antes. Nos gusta crear sin perder la tradición, cuidar cada masa con cariño y compartir ese saborcito casero con la comunidad que nos rodea.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-wheat/40">
              {[{ n: '100%', label: 'Orgánico' },{ n: '0', label: 'Conservadores' },{ n: '❤', label: 'Artesanal' }].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-black text-4xl text-primary">{s.n}</div>
                  <div className="font-body text-bark/60 text-xs mt-1 tracking-wide uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Images grid — right */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: '/img/pan.jpeg',  alt: 'Pan de masa madre Bon Dia' },
              { src: '/img/pan3.png',  alt: 'Pan artesanal Bon Dia' },
              { src: '/img/pan4.png',  alt: 'Panadería Bon Dia' },
              { src: '/img/pan5.jpeg', alt: 'Hogaza artesanal Bon Dia' },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl aspect-square overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
