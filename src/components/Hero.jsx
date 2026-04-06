import { useState, useEffect, useCallback } from 'react'

const SLIDES = [
  { src: '/img/pan12.jpeg', alt: 'Pan artesanal Bon Dia' },   // primera
  { src: '/img/pan.jpeg',   alt: 'Hogaza artesanal Bon Dia' },
  { src: '/img/pan9.jpeg',  alt: 'Pan de masa madre' },
  { src: '/img/pan10.jpeg', alt: 'Panadería Bon Dia Tijuana' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(c => (c + 1) % SLIDES.length), [])
  const prev = () => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length)

  useEffect(() => {
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section id="inicio" className="relative">

      {/* SLIDER */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        {SLIDES.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
            <img src={s.src} alt={s.alt} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-bark/75 via-bark/45 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl space-y-6">
              <p className="font-accent italic text-wheat text-xl tracking-wide">Panadería artesanal · Tijuana</p>
              <h1 className="font-display font-black text-6xl lg:text-8xl text-cream leading-none">
                Pan de<br/><span className="text-primary italic">Masa Madre</span>
              </h1>
              <p className="font-body text-cream/70 text-lg leading-relaxed max-w-md">
                Elaborado con harina orgánica, fermentación lenta y sin conservadores. Cada hogaza cuenta una historia de tradición y sabor auténtico.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#productos"
                   className="bg-primary text-cream px-8 py-4 rounded-full font-body font-bold text-sm tracking-widest uppercase hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  Ver productos
                </a>
                <a href="https://wa.me/526645022113" target="_blank" rel="noopener"
                   className="border-2 border-cream text-cream px-8 py-4 rounded-full font-body font-bold text-sm tracking-widest uppercase hover:bg-cream hover:text-bark transition-all duration-300">
                  Pedir ahora
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Harina orgánica', 'Sin conservadores', 'Fermentación lenta'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 font-body text-xs text-cream/70 bg-white/10 border border-cream/20 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"/>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
                <span className="font-body text-sm text-cream/60 tracking-wide">Lun–Vie 10am–7pm &nbsp;·&nbsp; Sáb 10am–5pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/20 backdrop-blur border border-cream/30 text-cream hover:bg-cream/35 transition-all flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/20 backdrop-blur border border-cream/30 text-cream hover:bg-cream/35 transition-all flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-cream' : 'w-2 h-2 bg-cream/50'}`}/>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 ml-16 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-cream/40">
          <span className="font-body text-xs tracking-widest uppercase">Descubrir</span>
          <div className="w-px h-12 bg-gradient-to-b from-cream/40 to-transparent"/>
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div className="bg-bark py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-accent italic text-wheat text-lg mb-2">Míranos en acción</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-cream mb-8">Así hacemos el pan</h2>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <video src="/img/pan2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>

    </section>
  )
}
