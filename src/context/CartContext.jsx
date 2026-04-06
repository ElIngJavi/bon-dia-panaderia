import { createContext, useContext, useState, useCallback } from 'react'

const CartCtx = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id)
      if (existing) return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { product, qty: 1 }]
    })
    setIsOpen(true)
  }, [])

  const changeQty = useCallback((productId, delta) => {
    setItems(prev => {
      const updated = prev.map(i => i.product.id === productId ? { ...i, qty: i.qty + delta } : i)
      return updated.filter(i => i.qty > 0)
    })
  }, [])

  const removeItem = useCallback((productId) => {
    setItems(prev => prev.filter(i => i.product.id !== productId))
  }, [])

  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0)
  const count = items.reduce((s, i) => s + i.qty, 0)

  return (
    <CartCtx.Provider value={{ items, addItem, changeQty, removeItem, total, count, isOpen, setIsOpen }}>
      {children}
    </CartCtx.Provider>
  )
}

export const useCart = () => useContext(CartCtx)
