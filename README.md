# 🚦 Movilidad Segura – Sitio Web

Sitio web educativo de educación vial escolar (Colombia), construido con **React + Vite + Tailwind CSS**.

---

## Tecnologías

| Herramienta | Versión |
|---|---|
| React | 18 |
| React Router | v6 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Font Awesome | 6.5 (CDN) |
| Fuentes | Nunito · Oswald (Google Fonts) |

---

## Estructura del proyecto

```
movilidad-segura/
├── index.html                  ← Punto de entrada HTML (carga Font Awesome y Google Fonts)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
│
├── src/
│   ├── main.jsx                ← Bootstrap de React
│   ├── App.jsx                 ← Rutas con React Router
│   ├── index.css               ← Estilos globales y clases base de Tailwind
│   │
│   ├── components/
│   │   ├── Navbar.jsx          ← Barra de navegación con menú responsive
│   │   ├── Footer.jsx          ← Pie de página
│   │   └── PageHero.jsx        ← Banner de título reutilizable para cada página
│   │
│   ├── hooks/
│   │   └── useInView.js        ← Hook de animaciones al hacer scroll (IntersectionObserver)
│   │
│   └── pages/
│       ├── Home.jsx            ← Página de inicio
│       ├── SobreProyecto.jsx   ← Sobre el Proyecto
│       ├── Cartillas.jsx       ← Cartillas Educativas (descarga de PDFs)
│       ├── Galeria.jsx         ← Galería de fotos con lightbox
│       ├── Actividades.jsx     ← Charlas y Actividades
│       └── Contacto.jsx        ← Contacto / Información del colegio
│
└── assets/
    └── pdf/                    ← PDFs de las cartillas (se sirven en /pdf/)
        ├── cartilla-preescolar.pdf
        ├── cartilla-primero.pdf
        ├── cartilla-segundo-tercero.pdf
        └── cartilla-cuarto-quinto.pdf
```

---

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build para producción
npm run build

# Previsualizar el build
npm run preview
```

---

## Paleta de colores

| Color | Código | Uso |
|---|---|---|
| Azul principal | `#1E73BE` | Encabezado, títulos, menú |
| Azul oscuro | `#0F3F6F` | Hover, sombras, footer |
| Amarillo | `#FFC107` | Avisos, consejos de seguridad |
| Verde | `#28A745` | Botones de descarga, positivo |
| Rojo | `#E53935` | Advertencias, normas importantes |
| Gris claro | `#F5F5F5` | Fondo de la página |

Los colores están configurados en `tailwind.config.js` como `brand-blue`, `brand-dark`, `brand-yellow`, `brand-green` y `brand-red`.

---

## Cómo agregar las cartillas PDF

1. Coloca los archivos en `assets/pdf/`
2. Los nombres deben ser exactamente:
   - `cartilla-preescolar.pdf`
   - `cartilla-primero.pdf`
   - `cartilla-segundo-tercero.pdf`
   - `cartilla-cuarto-quinto.pdf`
3. Vite los sirve automáticamente en `/pdf/` gracias a la configuración `publicDir: 'assets'` en `vite.config.js`

---

## Cómo agregar fotos a la galería

1. Coloca las fotos en `assets/fotos/`
2. Abre `src/pages/Galeria.jsx`
3. Agrega cada foto al array de imágenes con su ruta `/fotos/nombre.jpg`

---

## Cómo actualizar el contacto

Abre `src/pages/Contacto.jsx` y reemplaza los textos de:
- Nombre del colegio
- Dirección
- Teléfono
- Correo electrónico
- Redes sociales
