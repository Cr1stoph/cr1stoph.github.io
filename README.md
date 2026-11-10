# Portafolio y CV — Cristopher Roa Medel

Sitio personal de portafolio y currículum construido con **React 19**, **Vite** y **Tailwind CSS 4**. Incluye modo claro/oscuro, navegación con sección activa, menú móvil y una versión imprimible del CV.

## Características

- **Modo claro y oscuro** con las siguientes reglas:
  - Si es la primera visita, se usa la preferencia del sistema (`prefers-color-scheme`).
  - Al usar el botón del header, la elección se guarda en `localStorage` y se mantiene.
  - Un script mínimo en `index.html` aplica el tema antes del primer render para evitar el destello de colores.
- **Navegación responsive** con menú móvil y resaltado de la sección visible.
- **Secciones**: inicio, sobre mí, experiencia, proyectos, tecnologías y contacto.
- **CV imprimible**: el botón «Descargar CV» abre el diálogo de impresión y fuerza el tema claro para exportar a PDF.
- **Accesibilidad**: enlaces de salto, etiquetas ARIA, foco visible, `aria-current` y respeto por `prefers-reduced-motion`.
- **SEO**: metadatos, Open Graph y datos estructurados `Person` (JSON-LD).

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # compilar para producción
npm run preview  # previsualizar la compilación
npm run lint     # revisar el código con ESLint
```

## Estructura

```
src/
├── components/
│   └── icons.jsx          # iconos SVG reutilizables
├── core/
│   ├── Header.jsx         # navegación, menú móvil y botón de tema
│   ├── Main.jsx           # secciones del portafolio
│   └── Footer.jsx         # enlaces sociales y créditos
├── data/
│   └── portfolio.js       # contenido editable del CV y portafolio
├── hooks/
│   ├── useActiveSection.js
│   └── useTheme.js
├── App.jsx
├── index.css              # Tailwind + estilos base, animaciones e impresión
└── main.jsx
```

El contenido (bio, experiencia, proyectos, tecnologías y contacto) está centralizado en `src/data/portfolio.js`, así que puedes actualizarlo sin tocar los componentes.

## Despliegue

El proyecto está pensado para publicarse en GitHub Pages como sitio de usuario (`https://cr1stoph.github.io`). Genera la build con `npm run build` y publica el contenido de `dist/`.
