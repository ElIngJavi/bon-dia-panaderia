import { CartProvider } from './context/CartContext'
import CartPanel    from './components/CartPanel'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Products     from './components/Products'
import Features     from './components/Features'
import Benefits     from './components/Benefits'
import FAQ          from './components/FAQ'
import Mayoreo      from './components/Mayoreo'
import SocialProof  from './components/SocialProof'
import Ubicaciones  from './components/Ubicaciones'
import Nosotros     from './components/Nosotros'
import Footer       from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <CartPanel />
      <main>
        <Hero />
        <Products />
        <Features />
        <Benefits />
        <FAQ />
        <Mayoreo />
        <SocialProof />
        <Ubicaciones />
        <Nosotros />
      </main>
      <Footer />
      <WhatsAppButton />
    </CartProvider>
  )
}
