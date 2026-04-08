# 🍞 BON DIA PANADERÍA — Sitio Web Artesanal v2

> Pan de masa madre artesanal elaborado con harina orgánica, sin conservadores y con fermentación lenta en **Tijuana, Baja California.**

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

🌐 **Demo en vivo:** [dazzling-cannoli-1e2d81.netlify.app](https://dazzling-cannoli-1e2d81.netlify.app)
💻 **Repositorio:** [ElIngJavi/bon-dia-panaderia](https://github.com/ElIngJavi/bon-dia-panaderia)

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

React 19 + Vite 8, Tailwind CSS instalado como dependencia con tema personalizado, react-leaflet para el mapa y React Context API para el estado del carrito.

- ⚛️ **React 19** con componentes funcionales y hooks (`useState`, `useCallback`, `useContext`)
- ⚡ **Vite 8** como bundler con HMR en desarrollo y build optimizado para producción
- 🎨 **Tailwind CSS** configurado en `tailwind.config.js` con paleta de colores y tipografías propias
- 🛒 **CartContext** — estado global del carrito con React Context API (`addItem`, `changeQty`, `removeItem`)
- 🗺️ **react-leaflet** para mapa interactivo con dos marcadores (Kiosko y Punto de venta)
- 💬 **Botón flotante de WhatsApp** fijo en pantalla para contacto directo
- 🖋️ **Google Fonts**: Playfair Display, Cormorant Garamond y Lato
- 🚀 **Netlify** con `netlify.toml` configurado para SPA (redirects a `index.html`)

---

## 🏗️ Arquitectura

El estado del carrito vive en `CartContext` y se comparte entre `Navbar`, `Products` y `CartPanel` sin prop drilling. Cada sección es un componente independiente con sus propios datos definidos como constantes internas. `BondiaMap` usa `react-leaflet` con dos marcadores y `fitBounds()` para ajustar la vista automáticamente.

```
bon-dia-v2/
├── 📄 index.html
├── ⚙️ vite.config.js
├── 🎨 tailwind.config.js
└── src/
    ├── main.jsx              # Entry point, monta CartProvider
    ├── App.jsx               # Árbol de componentes
    ├── index.css             # Estilos globales y fuentes
    ├── context/
    │   └── CartContext.jsx   # Estado global del carrito
    └── components/
        ├── Navbar.jsx        # Navegación + contador carrito
        ├── CartPanel.jsx     # Panel lateral del carrito
        ├── Hero.jsx          # Video artesanal + llamada a la acción
        ├── Products.jsx      # Catálogo por categorías + botón agregar
        ├── Features.jsx      # Diferenciadores del pan de masa madre
        ├── Benefits.jsx      # Propiedades nutricionales y digestivas
        ├── FAQ.jsx           # Preguntas frecuentes con acordeón animado
        ├── Mayoreo.jsx       # Sección B2B para cafeterías y restaurantes
        ├── SocialProof.jsx   # Testimonios de clientes empresariales
        ├── Ubicaciones.jsx   # Mapa + cards de tienda, punto de venta y entregas
        ├── BondiaMap.jsx     # Mapa react-leaflet con dos marcadores
        ├── Nosotros.jsx      # Historia, valores y galería de fotos
        ├── Footer.jsx        # Footer con links, redes y contacto
        └── WhatsAppButton.jsx # Botón flotante fijo de WhatsApp
```

---

## 📋 Secciones del Sitio

| Sección | Descripción |
|---|---|
| 🎬 **Hero** | Video artesanal con llamada a la acción y badge de horarios |
| 🛒 **Productos** | Catálogo por categorías con carrito deslizable (React Context) |
| ✨ **Características** | Diferenciadores del pan de masa madre |
| 💚 **Beneficios** | Propiedades nutricionales y digestivas |
| ❓ **FAQ** | Preguntas frecuentes con acordeón animado |
| 🏢 **Mayoreo** | Propuesta B2B para cafeterías, restaurantes y food trucks |
| ⭐ **Clientes** | Testimonios de negocios que usan Bon Dia como proveedor |
| 📍 **Ubicaciones** | Mapa interactivo + cards de tienda, punto de venta y entregas |
| 👋 **Nosotros** | Historia, valores y galería de fotos |

---

*🥖 Bon Dia Panadería · Tijuana, México · Hecho con amor y masa madre*
