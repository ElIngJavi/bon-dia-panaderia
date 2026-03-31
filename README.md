# BON DIA PANADERÍA — Website Project Summary

**Bon Dia Panadería** es una microempresa de Tijuana, BC, México, dedicada a la elaboración artesanal de pan de masa madre con harina orgánica, sin conservadores y con fermentación lenta. Este repositorio contiene el sitio web promocional y de ventas de la panadería, construido con HTML5, CSS modular y JavaScript vanilla.

## Descripción del Negocio

Bon Dia Panadería opera desde el **Kiosko K-4 del Centro Comercial Playas** (entrada a Soriana, Tijuana). Sus productos también están disponibles en el punto de venta **Panadería y Pastelería Denisse** (De Las Nubes 631, Jardines del Sol). El catálogo incluye hogazas artesanales, bollos, panes dulces y productos de temporada, todos elaborados sin conservadores con ingredientes orgánicos.

- Horario: Lun–Vie 10:00 am–7:00 pm · Sáb 10:00 am–5:00 pm · Dom Cerrado
- Contacto: WhatsApp 664 502 2113
- Instagram: [@bondia.panaderia](https://www.instagram.com/bondia.panaderia)
- Facebook: [Bon Dia Panadería](https://web.facebook.com/bondia.panaderia/)

## Detalles Técnicos

"HTML5 semántico, CSS modular (6 archivos), JavaScript vanilla (6 archivos), Tailwind CSS vía CDN con configuración de tema personalizada."

- **Sin frameworks ni bundlers** — todo corre directamente en el navegador sin proceso de compilación
- **Tailwind CSS** configurado mediante `js/tailwind.config.js` con paleta de colores y tipografías propias del negocio
- **Leaflet.js** para el mapa interactivo con dos marcadores (tienda principal y punto de venta Denisse), cargado de forma diferida con `IntersectionObserver`
- **Carrito de compras** implementado en vanilla JS con estado local, sincronizado entre `products.js` y `cart.js`
- **Video de Instagram** en el hero con `<video>` tag (autoplay, muted, loop) en lugar de embed externo
- **Google Fonts**: Playfair Display, Cormorant Garamond y Lato
- **Deployed en Netlify** via drag & drop (proyecto: `dazzling-cannoli-1e2d81.netlify.app`)

## Arquitectura

El contenido dinámico se inyecta mediante módulos JavaScript independientes. `js/footer.js` construye y renderiza el footer completo desde un objeto de datos central (`FOOTER_DATA`), lo que permite actualizar teléfono, horarios y redes sociales en un solo lugar. `js/products.js` genera las tarjetas del catálogo con sus precios, y `js/cart.js` mantiene el estado del carrito con los mismos precios sincronizados. `js/map.js` inicializa el mapa Leaflet con `fitBounds()` para ajustar automáticamente la vista a ambas ubicaciones.

Los estilos están divididos en `base.css` (variables globales, reset, tipografía), `nav.css`, `hero.css`, `sections.css`, `animations.css`, `cart.css` y `map.css`, lo que permite modificar secciones sin afectar el resto del diseño.

## Estructura del Proyecto

```
files/
├── index.html
├── css/
│   ├── base.css          # Variables, reset, tipografía
│   ├── nav.css
│   ├── hero.css
│   ├── sections.css
│   ├── animations.css
│   ├── cart.css
│   └── map.css
├── js/
│   ├── tailwind.config.js
│   ├── products.js       # Catálogo y renderizado de tarjetas
│   ├── cart.js           # Lógica del carrito de compras
│   ├── footer.js         # Inyección de footer desde FOOTER_DATA
│   ├── map.js            # Mapa Leaflet con dos marcadores
│   ├── nav.js
│   └── animations.js
└── img/
    ├── pan.jpeg          # Hero y galería
    ├── pan2.mp4          # Video hero
    ├── pan3.png
    ├── pan4.png
    └── pan5.jpeg
```

## Secciones del Sitio

- **Hero** — Video artesanal con llamada a la acción y badge de horarios
- **Productos** — Catálogo con precios y carrito de compras
- **Características** — Diferenciadores del pan de masa madre
- **Beneficios** — Propiedades nutricionales y digestivas
- **Ubicaciones** — Mapa interactivo + cards de tienda, punto de venta y entregas
- **Acerca de Nosotros** — Historia, valores y galería de fotos

---

*Bon Dia Panadería · Tijuana, México*
