import { useState } from 'react'

const FAQS = [
  { q: '¿Qué es el pan de masa madre?', a: 'Es pan fermentado con un cultivo natural de bacterias y levaduras silvestres, sin levadura comercial. El proceso es más lento pero produce un pan con mejor sabor, corteza crujiente y miga aireada.' },
  { q: '¿Tiene conservadores o aditivos?', a: 'No. Nuestro pan solo contiene harina orgánica, agua, sal y masa madre viva. Sin conservadores, sin mejorantes, sin nada artificial.' },
  { q: '¿Cómo puedo hacer un pedido?', a: 'Por WhatsApp al 664 502 2113. También puedes visitarnos directamente en el Kiosko K-4 del Centro Comercial Playas de Tijuana.' },
  { q: '¿Hacen entregas a domicilio?', a: 'Sí. Realizamos entregas vía Uber Moto para pedidos de hasta 5 kg. El costo de envío es por cuenta del cliente. Contáctanos por WhatsApp para coordinar.' },
  { q: '¿Cuánto tiempo dura el pan?', a: 'Refrigerado hasta 3 semanas. Congelado hasta 5 semanas. La acidez natural del pan de masa madre actúa como conservante natural.' },
  { q: '¿Está disponible todos los días?', a: 'Estamos de Lunes a Viernes de 10:00 am a 7:00 pm y los Sábados de 10:00 am a 5:00 pm. Los domingos estamos cerrados.' },
  { q: '¿Tienen opciones para personas con intolerancia al gluten?', a: 'Nuestro pan contiene gluten. Sin embargo, la larga fermentación descompone gran parte del gluten, lo que facilita su digestión en personas con sensibilidad leve. No es apto para celíacos.' },
  { q: '¿Manejan precios de mayoreo?', a: 'Sí, tenemos precios especiales para cafeterías, restaurantes y negocios de alimentos. Contáctanos por WhatsApp o visita la sección de Mayoreo en esta página.' },
]

function Item({ faq, isOpen, toggle }) {
  return (
    <div className="border border-wheat/50 rounded-xl overflow-hidden">
      <button onClick={toggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-cream transition-colors duration-200">
        <span className="font-display font-bold text-bark text-base pr-4">{faq.q}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45 bg-primary' : ''}`}>
          <svg className={`w-4 h-4 ${isOpen ? 'text-cream' : 'text-primary'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        <p className="px-6 py-4 font-body text-bark/70 leading-relaxed text-sm border-t border-wheat/30 bg-cream">
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="faq" className="py-24 bg-cream px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent italic text-primary text-lg mb-2">Resolvemos tus dudas</p>
          <h2 className="font-display font-bold text-5xl text-bark">Preguntas Frecuentes</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4"/>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <Item key={i} faq={faq} isOpen={openIdx === i} toggle={() => setOpenIdx(openIdx === i ? null : i)}/>
          ))}
        </div>
      </div>
    </section>
  )
}
