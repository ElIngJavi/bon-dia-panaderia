import { useState } from 'react'
import { useCart } from '../context/CartContext'

const CATALOG = {
  masamadre: {
    id: 'masamadre',
    title: 'Pan de Masa Madre',
    icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>,
    bg: 'bg-cream',
    items: [
      { id: 'hogaza-normal',     name: 'Hogaza Normal',             price: 140, category: 'Pan de Masa Madre' },
      { id: 'hogaza-integral',   name: 'Hogaza Integral',           price: 150, category: 'Pan de Masa Madre' },
      { id: 'hogaza-hierbas',    name: 'Hogaza de Hierbas',         price: 160, category: 'Pan de Masa Madre', note: 'Tomillo, romero y orégano fresco' },
      { id: 'hogaza-arandanos',  name: 'Hogaza Arándanos con Nuez', price: 180, category: 'Pan de Masa Madre', note: 'Nuez de castilla tostada y arándanos' },
      { id: 'hogaza-semillas',   name: 'Hogaza Semillas',           price: 160, category: 'Pan de Masa Madre', note: 'Linaza, girasol, chía y ajonjolí' },
      { id: 'hogaza-olivas',     name: 'Hogaza Olivas',             price: 160, category: 'Pan de Masa Madre', note: 'Olivas kalamata y romero' },
      { id: 'hogaza-tomate',     name: 'Hogaza Tomate con Albahaca',price: 180, category: 'Pan de Masa Madre', note: 'Tomate deshidratado y albahaca fresca' },
      { id: 'hogaza-jalapeno',   name: 'Hogaza Jalapeño con Cheddar',price:180, category: 'Pan de Masa Madre', note: 'Jalapeño fresco y cheddar' },
      { id: 'pan-ajo-parmesano', name: 'Pan Ajo Parmesano',         price: 180, category: 'Pan de Masa Madre', note: 'Ajo confitado y parmesano rallado' },
    ],
  },
  bollos: {
    id: 'bollos',
    title: 'Bollos',
    icon: <circle cx="12" cy="12" r="10"/>,
    bg: 'bg-primary/5',
    items: [
      { id: 'bollos-queso-12', name: 'Bollos con Queso — 12 pz', price: 200, category: 'Bollos' },
      { id: 'bollos-queso-24', name: 'Bollos con Queso — 24 pz', price: 380, category: 'Bollos' },
      { id: 'bollos-nat-1',    name: 'Bollo Natural — 1 pz',     price:  10, category: 'Bollos' },
      { id: 'bollos-nat-12',   name: 'Bollos Naturales — 12 pz', price: 115, category: 'Bollos' },
      { id: 'bollos-nat-24',   name: 'Bollos Naturales — 24 pz', price: 225, category: 'Bollos' },
      { id: 'bollos-ajo-12',   name: 'Bollos de Ajo — 12 pz',   price: 160, category: 'Bollos' },
      { id: 'bollos-ajo-24',   name: 'Bollos de Ajo — 24 pz',   price: 300, category: 'Bollos' },
    ],
  },
  otros: {
    id: 'otros',
    title: 'Otros',
    icon: null,
    bg: 'bg-cream',
    items: [
      { id: 'rol-canela', name: 'Rol de Canela', price: 60, category: 'Roles y Otros', note: 'Glaseado de queso crema con vainilla' },
    ],
  },
}

function AddBtn({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handle = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <button onClick={handle}
      className={`add-btn flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full border transition-all duration-200 flex-shrink-0 ${added ? 'bg-green-600 border-green-600 text-white' : 'border-primary text-primary hover:bg-primary hover:text-cream'}`}>
      {added ? (
        <>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
          Agregado
        </>
      ) : (
        <>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Agregar
        </>
      )}
    </button>
  )
}

function ProductRow({ product, isLast }) {
  return (
    <li className={`flex justify-between items-center gap-2 py-3 ${isLast ? '' : 'border-b border-wheat/40'}`}>
      <div className="flex-1 min-w-0">
        <p className="font-body font-bold text-bark text-sm">{product.name}</p>
        {product.note && <p className="font-body text-bark/50 text-xs mt-0.5">{product.note}</p>}
      </div>
      <span className="font-accent font-bold text-primary text-base whitespace-nowrap">${product.price}</span>
      <AddBtn product={product}/>
    </li>
  )
}

export default function Products() {
  const { setIsOpen, count } = useCart()
  const { masamadre, bollos, otros } = CATALOG

  return (
    <section id="productos" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"/>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-accent italic text-primary text-lg mb-2">Nuestro menú</p>
          <h2 className="font-display font-bold text-5xl text-bark">Lista de Productos</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4"/>
          <p className="font-body text-bark/50 text-sm mt-3">Haz clic en <strong>Agregar</strong> para armar tu pedido y enviarlo por WhatsApp</p>
          <p className="font-body text-bark/40 text-xs mt-1">Sujeto a disponibilidad.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Pan de Masa Madre */}
          <div className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-primary">Pan de Masa Madre</h3>
            </div>
            <ul className="space-y-1">
              {masamadre.items.map((p, i) => (
                <ProductRow key={p.id} product={p} isLast={i === masamadre.items.length - 1}/>
              ))}
            </ul>
          </div>

          {/* Bollos */}
          <div className="bg-primary/5 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary">Bollos con Queso</h3>
                </div>
                <div className="space-y-1">
                  {bollos.items.slice(0,2).map((p,i) => (
                    <div key={p.id} className={`flex items-center gap-2 py-2.5 ${i===1?'':'border-b border-wheat/40'}`}>
                      <span className="font-body text-sm text-bark flex-1">{p.name.replace('Bollos con Queso — ','')}</span>
                      <span className="font-accent font-bold text-primary">${p.price}</span>
                      <AddBtn product={p}/>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-primary mb-4">Bollos Naturales</h3>
                <div className="space-y-1">
                  {bollos.items.slice(2,5).map((p,i) => (
                    <div key={p.id} className={`flex items-center gap-2 py-2.5 ${i===2?'':'border-b border-wheat/40'}`}>
                      <span className="font-body text-sm text-bark flex-1">{p.name.replace(/Bollos? Naturales? — |Bollo Natural — /,'')}</span>
                      <span className="font-accent font-bold text-primary">${p.price}</span>
                      <AddBtn product={p}/>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-primary mb-4">Bollos de Ajo</h3>
                <div className="space-y-1">
                  {bollos.items.slice(5).map((p,i) => (
                    <div key={p.id} className={`flex items-center gap-2 py-2.5 ${i===1?'':'border-b border-wheat/40'}`}>
                      <span className="font-body text-sm text-bark flex-1">{p.name.replace('Bollos de Ajo — ','')}</span>
                      <span className="font-accent font-bold text-primary">${p.price}</span>
                      <AddBtn product={p}/>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Otros */}
          <div className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 space-y-8">
            {/* Rol de canela destacado */}
            <div className="bg-primary rounded-2xl p-6 text-cream">
              <h3 className="font-display font-bold text-2xl mb-2">Rol de Canela</h3>
              <p className="font-body text-cream/80 text-sm mb-4 leading-relaxed">Masa madre con canela y glaseado de queso crema con vainilla.</p>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <span className="font-body text-cream/70 text-xs uppercase tracking-wide">1 pieza</span>
                  <p className="font-accent font-bold text-3xl">$60</p>
                </div>
                <AddBtn product={otros.items[0]}/>
              </div>
            </div>

            {/* Otros productos */}
            <div>
              <h3 className="font-display font-bold text-xl text-primary mb-4">Otros Productos</h3>
              <ul className="space-y-1 text-sm font-body text-bark mb-5">
                <li className="flex items-center gap-2 py-2 border-b border-wheat/40"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"/>Crema de Cacahuate</li>
                <li className="flex items-center gap-2 py-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"/>Salsa Macha</li>
              </ul>
              <p className="font-body font-bold text-bark text-sm mb-3">Hechos de Masa Madre:</p>
              <ul className="space-y-1 text-sm font-body text-bark">
                {['Galletas','Pan Hamburguesa','Ciabatta','Focaccia','Baguette','Pan de Molde'].map(name => (
                  <li key={name} className="flex items-center gap-2 py-2 border-b border-wheat/40 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0"/>{name}
                  </li>
                ))}
              </ul>
              <p className="font-body text-bark/50 text-xs mt-3 italic">* Sobre pedido</p>
            </div>
          </div>

        </div>

        <div className="text-center mt-14">
          <button onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-3 bg-primary text-cream px-10 py-4 rounded-full font-body font-bold text-sm tracking-widest uppercase hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            Ver mi pedido {count > 0 && `(${count})`}
          </button>
        </div>
      </div>
    </section>
  )
}
