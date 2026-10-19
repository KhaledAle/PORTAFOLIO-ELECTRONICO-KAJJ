# Portafolio electrónico — Khaled Alejandro Janampa Jaime

Portafolio académico de **Desarrollo de Aplicaciones Web**, creado con React y Vite. Reúne la presentación personal, estudios, proyectos colaborativos, enlaces a repositorios públicos de GitHub y un cuaderno de aprendizaje organizado en siete semanas.

## Contenido del proyecto

- **Inicio:** presentación personal, formación, tecnologías, contacto y experiencia (reservada para registrar información real).
- **Proyectos:** cinco repositorios colaborativos concluidos y consulta complementaria de los repositorios públicos de `KhaledAle` mediante la API de GitHub. Los proyectos colaborativos y sus enlaces directos permanecen visibles aunque la API no esté disponible.
- **Cuaderno:** índice y ficha individual de cada semana con resumen, conceptos clave, procedimiento, evidencia, reflexión semanal y fuentes.
- **Evidencias PDF:** documentos incluidos en `src/assets/pdf/`; se muestran en un visor integrado y se pueden abrir en otra pestaña.
- **Reflexión final:** sección reservada para completar una vez revisado el aprendizaje de todo el curso.
- **Diseño adaptable y accesible:** temática nocturna azul y dorada, navegación por teclado, enlace para saltar al contenido, foco visible, contraste legible y ajustes para pantallas pequeñas.

## Tecnologías

- React 19
- Vite
- React Router
- JavaScript (ES modules)
- CSS
- Fetch API para consultar repositorios públicos

## Requisitos y ejecución

Se requiere una versión reciente de Node.js y npm.

```bash
npm install
npm run dev
```

El servidor local muestra la dirección para abrir el portafolio. Para comprobar la versión de producción:

```bash
npm run build
npm run preview
```

También se encuentran disponibles `npm run lint` para revisar el código y `npm run dev -- --host 0.0.0.0` para habilitar el servidor de desarrollo en la red local.

## Despliegue en GitHub Pages

El proyecto incluye un flujo de GitHub Actions que construye y publica el sitio al enviar cambios a `main`. En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como origen del despliegue. La URL del sitio de proyecto será `https://khaledale.github.io/PORTAFOLIO-ELECTRONICO-KAJJ/`.

La configuración de Vite y la base de React Router deben coincidir con el nombre exacto del repositorio. La compilación genera un `404.html` con la aplicación para que las rutas internas también funcionen al abrirlas directamente o recargarlas. Para probar la compilación localmente, ejecuta `npm run build`.

## Navegación

| Ruta | Contenido |
| --- | --- |
| `/` | Portada, perfil, estudios y experiencia |
| `/proyectos` | Proyectos colaborativos y repositorios públicos |
| `/cuaderno` | Índice de las siete semanas |
| `/cuaderno/semana-1` a `/cuaderno/semana-7` | Ficha, evidencias y PDF de cada semana |
| `/reflexion-final` | Sección reservada |

El proyecto utiliza `BrowserRouter` con las rutas indicadas. El `404.html` generado durante la compilación entrega la aplicación de React en rutas internas de GitHub Pages.

## Organización principal

```text
.
├── public/
├── src/
│   ├── assets/
│   │   ├── Fotocarnet.webp
│   │   └── pdf/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
└── README.md
```

## Proyectos colaborativos

- [SEMANA3_DAW_PRACTICA2_AGUILAR](https://github.com/saulPariona/SEMANA3_DAW_PRACTICA2_AGUILAR)
- [Pr-cticaCalificada02](https://github.com/AGIDNSNF/Pr-cticaCalificada02)
- [SEMANA_2-MDAW](https://github.com/saulPariona/SEMANA_2-MDAW)
- [SEMANA_3_DAW_SUAZNABAR](https://github.com/saulPariona/SEMANA_3_DAW_SUAZNABAR)
- [PROYECTO-PARCIAL-](https://github.com/saulPariona/PROYECTO_PARCIAL-)

Perfil público: [github.com/KhaledAle](https://github.com/KhaledAle). La consulta de repositorios no requiere token; no se incluyen credenciales privadas en el frontend.

## Bibliografía de las fichas

### Material audiovisual

- **[B1]** [Curso de HTML 5 y CSS — lista de reproducción](https://www.youtube.com/playlist?list=PLnesPkAqqVDp4kKy0B6KOj7tSr88jGoXH)

### Fundamentos web y herramientas — Semana 1

- **[B2]** [MDN — Generalidades del protocolo HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Guides/Overview)
- **[B3]** [MDN — DNS](https://developer.mozilla.org/en-US/docs/Glossary/DNS)
- **[B4]** [VS Code — Interfaz de usuario](https://code.visualstudio.com/docs/editing/getting-started/userinterface)
- **[B5]** [VS Code — Consejos y trucos](https://code.visualstudio.com/docs/editing/getting-started/tips-and-tricks)

### HTML, DOM, CSS y responsividad — Semana 2

- **[B6]** [MDN — Primeros pasos con HTML](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
- **[B7]** [MDN — Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
- **[B8]** [MDN — Fundamentos de estilo con CSS](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics)
- **[B9]** [MDN — Flexbox](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- **[B10]** [MDN — CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- **[B11]** [MDN — Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- **[B12]** [Google Search Central — Guía SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es)

### Bootstrap y Tailwind CSS — Semana 3

- **[B13]** [Bootstrap — Grid system](https://getbootstrap.com/docs/5.3/layout/grid/)
- **[B14]** [Bootstrap — Components](https://getbootstrap.com/docs/5.3/components/)
- **[B15]** [Tailwind CSS — Utility classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- **[B16]** [Tailwind CSS — Responsive design](https://tailwindcss.com/docs/responsive-design)

### JavaScript, TypeScript, DOM y Canvas — Semana 4

- **[B17]** [MDN — Guía de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- **[B18]** [MDN — Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
- **[B19]** [TypeScript — Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- **[B20]** [MDN — Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
- **[B21]** [MDN — Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

### React, JSX y Vite — Semanas 5 y 6

- **[B22]** [React — Quick Start](https://react.dev/learn)
- **[B23]** [React — JSX](https://react.dev/learn/writing-markup-with-jsx)
- **[B24]** [React — Passing Props](https://react.dev/learn/passing-props-to-a-component)
- **[B25]** [React — Responding to Events](https://react.dev/learn/responding-to-events)
- **[B26]** [React — Conditional Rendering](https://react.dev/learn/conditional-rendering)
- **[B27]** [React — Rendering Lists](https://react.dev/learn/rendering-lists)
- **[B28]** [Vite — Getting Started](https://vite.dev/guide/)
- **[B29]** [React Router — Declarative Routing](https://reactrouter.com/start/declarative/installation)
- **[B30]** [MDN — Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- **[B31]** [MDN — Promesas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- **[B32]** [GitHub Docs — REST API de repositorios](https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user)
- **[B33]** [Axios — Documentación](https://axios-http.com/docs/intro)
- **[B34]** [React — Built-in React Hooks](https://react.dev/reference/react/hooks)
- **[B35]** [React — useState](https://react.dev/reference/react/useState)
- **[B36]** [React — useEffect](https://react.dev/reference/react/useEffect)
- **[B37]** [React — useContext](https://react.dev/reference/react/useContext)
- **[B38]** [React — Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- **[B39]** [React — Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)

## Evidencias y contenido

Las fichas resumen los temas del curso y enlazan las fuentes por sus códigos bibliográficos. Los enlaces de repositorios y los PDF se incluyen cuando están disponibles; los datos faltantes se indican como pendientes en lugar de crear evidencias. Las reflexiones semanales son borradores editables y deben ajustarse según la experiencia y los resultados reales.
