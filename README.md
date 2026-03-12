# 🚦 Proyecto Movilidad Segura – Sitio Web

## Estructura de Carpetas

```
movilidad-segura/
│
├── index.html                    ← Página de inicio (HOME)
│
├── pages/                        ← Subpáginas del sitio
│   ├── sobre-proyecto.html       ← Sobre el Proyecto
│   ├── cartillas.html            ← Cartillas Educativas
│   ├── galeria.html              ← Galería de Fotos
│   ├── actividades.html          ← Charlas y Actividades
│   └── contacto.html             ← Contacto / Información
│
├── css/                          ← Estilos
│   ├── styles.css                ← Estilos globales (todos los colores, componentes)
│   └── lightbox.css              ← Estilos del visor de imágenes
│
├── js/                           ← Scripts
│   └── main.js                   ← JavaScript principal
│
└── assets/                       ← Recursos del proyecto
    ├── cartilla-preescolar.pdf   ← Cartilla Preescolar (agregar aquí)
    ├── cartilla-primero.pdf      ← Cartilla Grado 1° (agregar aquí)
    ├── cartilla-segundo-tercero.pdf
    ├── cartilla-cuarto-quinto.pdf
    └── fotos/                    ← Carpeta para las fotos de la galería
        ├── charla-01.jpg
        ├── charla-02.jpg
        ├── estudiantes-01.jpg
        └── ...
```

## ¿Cómo agregar las cartillas PDF?

1. Coloca los archivos PDF en la carpeta `assets/`
2. Asegúrate de que los nombres sean exactamente:
   - `cartilla-preescolar.pdf`
   - `cartilla-primero.pdf`
   - `cartilla-segundo-tercero.pdf`
   - `cartilla-cuarto-quinto.pdf`

## ¿Cómo agregar fotos a la galería?

1. Coloca las fotos en `assets/fotos/`
2. Abre el archivo `pages/galeria.html`
3. En cada `gallery-item`, cambia el valor de `data-src` por la ruta real de tu foto
4. Reemplaza el contenido del `<div class="gallery-placeholder">` por una etiqueta `<img>`

**Ejemplo:**
```html
<!-- Antes (placeholder) -->
<div class="gallery-item" data-src="../assets/fotos/charla-01.jpg">
  <div class="gallery-placeholder">...</div>
</div>

<!-- Después (foto real) -->
<div class="gallery-item" data-src="../assets/fotos/charla-01.jpg">
  <img src="../assets/fotos/charla-01.jpg" alt="Charla de movilidad"/>
</div>
```

## ¿Cómo actualizar la información de contacto?

Abre `pages/contacto.html` y reemplaza los textos marcados:
- `Nombre del Colegio`
- `Dirección del colegio, Ciudad`
- `(+57) 000 000 0000`
- `contacto@colegio.edu.co`
- Etc.

## Paleta de Colores

| Color     | Código  | Uso                              |
|-----------|---------|----------------------------------|
| Azul      | #1E73BE | Encabezado, títulos, menú        |
| Amarillo  | #FFC107 | Avisos, consejos de seguridad    |
| Verde     | #28A745 | Botones de descarga, positivo    |
| Rojo      | #E53935 | Advertencias, normas importantes |
| Gris/Blanco| #F5F5F5| Fondo de la página               |

## Cómo abrir el sitio

Simplemente abre `index.html` en tu navegador. No requiere servidor web.
Para subirlo a internet, sube toda la carpeta `movilidad-segura/` a tu hosting.
