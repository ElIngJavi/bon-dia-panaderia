# 🍞 BON DIA PANADERÍA — Sitio Web Artesanal

> Pan de masa madre artesanal elaborado con harina orgánica, sin conservadores y con fermentación lenta en **Tijuana, Baja California.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

🌐 **Demo en vivo:** [dazzling-cannoli-1e2d81.netlify.app](https://dazzling-cannoli-1e2d81.netlify.app)

---

## 🏪 El Negocio

**Bon Dia Panadería** es una microempresa dedicada a la fabricación de pan de masa madre de alta calidad. Aunque estamos iniciando, nuestros productos han tenido una alta aceptación que nos impulsa a seguir trabajando con más esfuerzo, honestidad y dedicación.

| 📍 Ubicación principal | ⏰ Horario | 📱 Contacto |
|---|---|---|
| Kiosko K-4, C.C. Playas, Tijuana | Lun–Vie 10am–7pm · Sáb 10am–5pm | WhatsApp 664 502 2113 |

- 📌 Punto de venta adicional: **Panadería y Pastelería Denisse** — De Las Nubes 631, Jardines del Sol, Playas de Tijuana
- 📦 Entregas a domicilio vía Uber Moto (hasta 5 kg, costo por cuenta del cliente)
- 📸 Instagram: [@bondia.panaderia](https://www.instagram.com/bondia.panaderia)
- 👍 Facebook: [Bon Dia Panadería](https://web.facebook.com/bondia.panaderia/)

---

## ⚙️ Detalles Técnicos

"HTML5 semántico, CSS modular (6 archivos), JavaScript vanilla (6 archivos), Tailwind CSS vía CDN con tema personalizado."

- 🎨 **Tailwind CSS** configurado en `js/tailwind.config.js` con paleta de colores y tipografías propias
- 🗺️ **Leaflet.js** para mapa interactivo con dos marcadores y carga diferida via `IntersectionObserver`
- 🛒 **Carrito de compras** en vanilla JS con estado local sincronizado entre `products.js` y `cart.js`
- 🎬 **Video artesanal** en el hero con `<video>` autoplay/muted/loop sin dependencias externas
- 🖋️ **Google Fonts**: Playfair Display, Cormorant Garamond y Lato
- 🚀 **Sin frameworks ni bundlers** — corre directamente en el navegador

---

## 🏗️ Arquitectura

El contenido dinámico se inyecta mediante módulos JS independientes. `js/footer.js` construye el footer desde un objeto `FOOTER_DATA` central. `js/products.js` genera las tarjetas del catálogo y `js/cart.js` mantiene el carrito con precios sincronizados. `js/map.js` usa `fitBounds()` para ajustar automáticamente la vista a ambas ubicaciones en el mapa.

```
files/
├── 📄 index.html
├── 🎨 css/
│   ├── base.css          # Variables, reset, tipografía
│   ├── nav.css
│   ├── hero.css
│   ├── sections.css
│   ├── animations.css
│   ├── cart.css
│   └── map.css
├── ⚙️ js/
│   ├── tailwind.config.js
│   ├── products.js       # Catálogo y tarjetas
│   ├── cart.js           # Carrito de compras
│   ├── footer.js         # Footer desde FOOTER_DATA
│   ├── map.js            # Mapa Leaflet dos marcadores
│   ├── nav.js
│   └── animations.js
└── 🖼️ img/
    ├── pan.jpeg
    ├── pan2.mp4
    ├── pan3.png
    ├── pan4.png
    └── pan5.jpeg
```

---

## 📋 Secciones del Sitio

| Sección | Descripción |
|---|---|
| 🎬 **Hero** | Video artesanal con llamada a la acción y badge de horarios |
| 🛒 **Productos** | Catálogo con precios y carrito de compras |
| ✨ **Características** | Diferenciadores del pan de masa madre |
| 💚 **Beneficios** | Propiedades nutricionales y digestivas |
| 📍 **Ubicaciones** | Mapa interactivo + cards de tienda, punto de venta y entregas |
| 👋 **Nosotros** | Historia, valores y galería de fotos |

---

*🥖 Bon Dia Panadería · Tijuana, México · Hecho con amor y masa madre*
