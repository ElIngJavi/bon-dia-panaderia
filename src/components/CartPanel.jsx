import { useEffect } from 'react'
import { useCart } from '../context/CartContext'

const WA_NUMBER = '526645022113'

function sendWhatsAppOrder(items, total) {
  if (items.length === 0) return
  const now = new Date()
  const fecha = now.toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const hora = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })

  const byCategory = {}
  items.forEach(({ product, qty }) => {
    if (!byCategory[product.category]) byCategory[product.category] = []
    byCategory[product.category].push({ product, qty })
  })

  let msg = `🍞 *PEDIDO — BON DIA PANADERÍA*\n`
  msg += `📅 ${fecha}\n🕐 ${hora}\n━━━━━━━━━━━━━━━━━━━━━━\n\n`

  Object.entries(byCategory).forEach(([cat, catItems]) => {
    msg += `*📦 ${cat}*\n`
    catItems.forEach(({ product, qty }) => {
      msg += `  • ${product.name} × ${qty}`
      if (product.note) msg += ` _(${product.note})_`
      msg += `  →  *$${product.price * qty}*\n`
    })
    msg += `\n`
  })

  msg += `━━━━━━━━━━━━━━━━━━━━━━\n🧾 *TOTAL: $${total} MXN*\n\n`
  msg += `¡Hola! Me gustaría hacer este pedido 😊 ¿Pueden confirmarme disponibilidad y forma de entrega?`

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
}

export default function CartPanel() {
  const { items, changeQty, removeItem, total, count, isOpen, setIsOpen } = useCart()

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setIsOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [setIsOpen])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-bark/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Carrito de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-wheat/40 bg-white/70 backdrop-blur-sm flex-shrink-0">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-bark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <h2 className="font-display font-bold text-lg text-bark">Tu Pedido</h2>
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="Cerrar carrito"
            className="w-9 h-9 rounded-full bg-bark/5 hover:bg-bark/10 flex items-center justify-center text-bark/50 hover:text-bark transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-bark text-lg">Tu carrito está vacío</p>
                <p className="font-body text-bark/50 text-sm mt-1">Agrega productos desde el menú</p>
              </div>
              <button onClick={() => setIsOpen(false)}
                className="text-primary font-body font-bold text-sm border border-primary/30 px-5 py-2 rounded-full hover:bg-primary/10 transition-colors">
                ← Ver productos
              </button>
            </div>
          ) : (
            <div>
              {items.map(({ product, qty }) => (
                <div key={product.id} className="flex items-center gap-3 py-3 border-b border-wheat/30 last:border-0">
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-bold text-bark text-sm leading-tight">{product.name}</p>
                    {product.note && <p className="font-body text-bark/50 text-xs mt-0.5">{product.note}</p>}
                    <p className="font-accent text-primary font-bold text-sm mt-0.5">${product.price} c/u</p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button onClick={() => changeQty(product.id, -1)}
                      className="w-7 h-7 rounded-full border-2 border-primary/30 text-primary font-bold hover:bg-primary hover:text-cream hover:border-primary transition-all duration-200 flex items-center justify-center text-base leading-none">−</button>
                    <span className="font-body font-bold text-bark text-sm w-5 text-center">{qty}</span>
                    <button onClick={() => changeQty(product.id, 1)}
                      className="w-7 h-7 rounded-full border-2 border-primary/30 text-primary font-bold hover:bg-primary hover:text-cream hover:border-primary transition-all duration-200 flex items-center justify-center text-base leading-none">+</button>
                  </div>
                  <p className="font-accent font-bold text-bark text-sm flex-shrink-0 min-w-[44px] text-right">${product.price * qty}</p>
                  <button onClick={() => removeItem(product.id)}
                    className="text-bark/25 hover:text-red-500 transition-colors flex-shrink-0" aria-label="Eliminar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 border-t border-wheat/40 bg-white/70 backdrop-blur-sm px-6 py-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-body text-bark/60 text-sm tracking-wide uppercase">Total del pedido</span>
            <span className="font-display font-black text-2xl text-primary">${total}</span>
          </div>
          <button
            disabled={count === 0}
            onClick={() => sendWhatsAppOrder(items, total)}
            className={`w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-body font-bold text-sm tracking-wide transition-all duration-300 ${count === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1da850]'}`}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enviar pedido por WhatsApp
          </button>
          <p className="text-center font-body text-bark/40 text-xs leading-relaxed">Se abrirá WhatsApp con tu ticket de pedido 🧾</p>
        </div>
      </aside>
    </>
  )
}
