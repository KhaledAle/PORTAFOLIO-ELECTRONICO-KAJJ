import { useEffect, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import portrait from './assets/Fotocarnet.webp'
import week2Pdf from './assets/pdf/semana-02-practica.pdf?url'
import week3GuidePdf from './assets/pdf/semana-03-guia.pdf?url'
import week3GroupPdf from './assets/pdf/semana-03-grupal.pdf?url'
import week4Pdf from './assets/pdf/semana-04-practica.pdf?url'
import week5Pdf from './assets/pdf/semana-05-practica.pdf?url'
import week6Pdf from './assets/pdf/semana-06-practica.pdf?url'
import './App.css'

const collaborativeProjects = [
  {
    name: 'SEMANA3_DAW_PRACTICA2_AGUILAR',
    description: 'Práctica colaborativa de Desarrollo de Aplicaciones Web.',
    url: 'https://github.com/saulPariona/SEMANA3_DAW_PRACTICA2_AGUILAR',
  },
  {
    name: 'Pr-cticaCalificada02',
    description: 'Proyecto colaborativo correspondiente a la práctica calificada de la semana 2.',
    url: 'https://github.com/AGIDNSNF/Pr-cticaCalificada02',
  },
  {
    name: 'SEMANA_2-MDAW',
    description: 'Evidencia colaborativa de los contenidos de desarrollo web de la semana 2.',
    url: 'https://github.com/saulPariona/SEMANA_2-MDAW',
  },
  {
    name: 'SEMANA_3_DAW_SUAZNABAR',
    description: 'Práctica grupal de la semana 3.',
    url: 'https://github.com/saulPariona/SEMANA_3_DAW_SUAZNABAR',
  },
]

const ownRepositories = [
  {
    name: 'PRACTICA-SEMANA04-AGUILAR',
    url: 'https://github.com/KhaledAle/PRACTICA-SEMANA04-AGUILAR',
  },
  {
    name: 'SEMANA6-DAW-07-10-2026',
    url: 'https://github.com/KhaledAle/SEMANA6-DAW-07-10-2026',
  },
  {
    name: 'PORTAFOLIO-ELECTRONICO-KAJJ',
    url: 'https://github.com/KhaledAle/PORTAFOLIO-ELECTRONICO-KAJJ',
  },
  {
    name: 'SEMANA5-DAW-10-10-2026',
    url: 'https://github.com/KhaledAle/SEMANA5-DAW-10-10-2026',
  },
  {
    name: 'Mi-Proyecto-DAW-Semana06',
    url: 'https://github.com/KhaledAle/Mi-Proyecto-DAW-Semana06',
  },
  {
    name: 'RM-SEMANA3',
    url: 'https://github.com/KhaledAle/RM-SEMANA3',
  },
  {
    name: 'SEMANA2-DAW',
    url: 'https://github.com/KhaledAle/SEMANA2-DAW',
  },
]

const bibliography = {
  B1: ['Curso de HTML 5 y CSS — lista de reproducción', 'https://www.youtube.com/playlist?list=PLnesPkAqqVDp4kKy0B6KOj7tSr88jGoXH'],
  B2: ['MDN — Generalidades del protocolo HTTP', 'https://developer.mozilla.org/es/docs/Web/HTTP/Guides/Overview'],
  B3: ['MDN — DNS', 'https://developer.mozilla.org/en-US/docs/Glossary/DNS'],
  B4: ['VS Code — Interfaz de usuario', 'https://code.visualstudio.com/docs/editing/getting-started/userinterface'],
  B5: ['VS Code — Consejos y trucos', 'https://code.visualstudio.com/docs/editing/getting-started/tips-and-tricks'],
  B6: ['MDN — Primeros pasos con HTML', 'https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax'],
  B7: ['MDN — Introducción al DOM', 'https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction'],
  B8: ['MDN — Fundamentos de estilo con CSS', 'https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics'],
  B9: ['MDN — Flexbox', 'https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Flexbox'],
  B10: ['MDN — CSS Grid', 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout'],
  B11: ['MDN — Media queries', 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries'],
  B12: ['Google Search Central — Guía SEO', 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es'],
  B13: ['Bootstrap — Grid system', 'https://getbootstrap.com/docs/5.3/layout/grid/'],
  B14: ['Bootstrap — Components', 'https://getbootstrap.com/docs/5.3/components/'],
  B15: ['Tailwind CSS — Utility classes', 'https://tailwindcss.com/docs/styling-with-utility-classes'],
  B16: ['Tailwind CSS — Responsive design', 'https://tailwindcss.com/docs/responsive-design'],
  B17: ['MDN — Guía de JavaScript', 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide'],
  B18: ['MDN — Funciones', 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions'],
  B19: ['TypeScript — Handbook', 'https://www.typescriptlang.org/docs/handbook/intro.html'],
  B20: ['MDN — Introducción al DOM', 'https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction'],
  B21: ['MDN — Canvas tutorial', 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial'],
  B22: ['React — Quick Start', 'https://react.dev/learn'],
  B23: ['React — JSX', 'https://react.dev/learn/writing-markup-with-jsx'],
  B24: ['React — Passing Props', 'https://react.dev/learn/passing-props-to-a-component'],
  B25: ['React — Responding to Events', 'https://react.dev/learn/responding-to-events'],
  B26: ['React — Conditional Rendering', 'https://react.dev/learn/conditional-rendering'],
  B27: ['React — Rendering Lists', 'https://react.dev/learn/rendering-lists'],
  B28: ['Vite — Getting Started', 'https://vite.dev/guide/'],
  B29: ['React Router — Declarative Routing', 'https://reactrouter.com/start/declarative/installation'],
  B30: ['MDN — Fetch API', 'https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch'],
  B31: ['MDN — Promesas', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises'],
  B32: ['GitHub Docs — REST API de repositorios', 'https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user'],
  B33: ['Axios — Documentación', 'https://axios-http.com/docs/intro'],
}

const weeks = [
  {
    number: 1,
    title: 'Fundamentos de la web y herramientas de desarrollo',
    short: 'Cómo se comunican el navegador y el servidor, y cómo preparar el entorno de trabajo.',
    summary: 'La web entrega recursos mediante solicitudes y respuestas. DNS resuelve el dominio, TCP/IP permite la comunicación y HTTP/HTTPS define el intercambio de recursos como HTML, CSS, JavaScript e imágenes. El frontend construye la experiencia visible; el backend resuelve lógica y datos del servidor.',
    concepts: ['Cliente y servidor', 'DNS, TCP/IP y HTTP/HTTPS', 'Frontend, backend y fullstack', 'VS Code, extensiones y terminal'],
    steps: ['Identificar protocolo, dominio y ruta en una URL.', 'Describir cómo DNS ayuda a ubicar el servidor.', 'Distinguir el transporte de red de HTTP.', 'Reconocer los recursos que interpreta el navegador.', 'Organizar una carpeta de trabajo y explorar el terminal y las extensiones de VS Code.'],
    lab: 'Laboratorio 01A — Interfaz, extensiones y atajos de VS Code',
    labSummary: 'Reconocer el entorno de trabajo, ubicar sus herramientas y documentar los atajos y extensiones realmente utilizados.',
    reflection: 'Comprendí mejor cómo se conectan el navegador, los servidores y los protocolos que hacen posible una página web. Para diferenciar sitio, página y aplicación, relacioné cada concepto con ejemplos. Conocer VS Code también me ayuda a trabajar con más orden; puedo mejorar practicando los atajos y organizando mis archivos desde el comienzo.',
    questions: ['¿Qué diferencia hay entre una página web, un sitio y una aplicación web?', '¿Qué papel cumplen DNS y HTTP cuando abro una URL?', '¿Qué herramientas de VS Code me ayudan a organizar y revisar el proyecto?'],
    sources: ['B1', 'B2', 'B3', 'B4', 'B5'],
  },
  {
    number: 2,
    title: 'HTML, XML y diseño con CSS',
    short: 'Estructura semántica, estilos, distribución y adaptación a distintos tamaños.',
    summary: 'HTML define la estructura y el significado del contenido; XML organiza datos con una sintaxis estricta. El navegador representa el documento como un DOM y aplica CSS para su presentación. Flexbox distribuye elementos en una dimensión, Grid organiza filas y columnas, y un diseño responsivo se adapta al espacio disponible.',
    concepts: ['HTML semántico y XML', 'DOM y estilos CSS', 'Flexbox y CSS Grid', 'Unidades relativas y media queries', 'Accesibilidad y SEO básico'],
    steps: ['Crear la estructura semántica antes de dar estilo.', 'Separar presentación y contenido con CSS.', 'Empezar por una disposición sencilla para móvil.', 'Elegir Flexbox para una dimensión y Grid para dos.', 'Probar varios anchos y corregir desbordes y legibilidad.'],
    lab: 'Laboratorio 02A — Flexbox, diseño fluido y responsivo',
    labSummary: 'Aplicar HTML y CSS para organizar una interfaz y adaptarla a más de un tamaño de pantalla.',
    repositories: [
      { name: 'Pr-cticaCalificada02', url: 'https://github.com/AGIDNSNF/Pr-cticaCalificada02' },
      { name: 'SEMANA_2-MDAW', url: 'https://github.com/saulPariona/SEMANA_2-MDAW' },
      { name: 'SEMANA2-DAW', url: 'https://github.com/KhaledAle/SEMANA2-DAW' },
    ],
    pdfs: [{ title: 'Práctica Semana 02', url: week2Pdf }],
    reflection: 'Aprendí que HTML y CSS cumplen funciones distintas: uno organiza el contenido y el otro controla su presentación. Me costó decidir qué herramienta de distribución usar y evitar que el diseño se desacomodara al cambiar el ancho. Probar pocos elementos y ajustar una regla a la vez me ayuda; debo practicar más las unidades relativas, Flexbox y Grid.',
    questions: ['¿Qué responsabilidades tienen HTML, CSS y el DOM?', '¿Cuándo elegiría Flexbox en lugar de CSS Grid?', '¿Qué cambios ayudan a que una interfaz se adapte a pantallas pequeñas?'],
    sources: ['B1', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12'],
  },
  {
    number: 3,
    title: 'Desarrollo frontend con Bootstrap y Tailwind CSS',
    short: 'Frameworks CSS, patrones de interfaz y fundamentos de diseño responsivo.',
    summary: 'Bootstrap ofrece componentes y una cuadrícula basada en clases; Tailwind CSS permite combinar utilidades pequeñas directamente en el marcado. Ambos aceleran el trabajo, pero no sustituyen los fundamentos de CSS, Flexbox, Grid y accesibilidad. La elección depende de los requisitos y de cómo se mantendrá la interfaz.',
    concepts: ['Bootstrap y su sistema de cuadrícula', 'Tailwind y las clases de utilidad', 'Contenedores, filas y columnas', 'Flexbox: dirección, ajuste y crecimiento', 'Contraste, foco y uso por teclado'],
    steps: ['Dividir la página en secciones y componentes.', 'Elegir un enfoque de estilos acorde con la práctica.', 'Construir primero la estructura y luego la distribución.', 'Mantener consistencia en botones, tarjetas y formularios.', 'Probar la interfaz en pantallas estrechas y con teclado.'],
    lab: 'Práctica Calificada 03 — Desarrollo de un sitio web con CSS',
    labSummary: 'Documentar la estructura, las técnicas CSS utilizadas y el resultado real de la práctica.',
    repositories: [
      { name: 'SEMANA3_DAW_PRACTICA2_AGUILAR', url: 'https://github.com/saulPariona/SEMANA3_DAW_PRACTICA2_AGUILAR' },
      { name: 'SEMANA_3_DAW_SUAZNABAR', url: 'https://github.com/saulPariona/SEMANA_3_DAW_SUAZNABAR' },
      { name: 'RM-SEMANA3', url: 'https://github.com/KhaledAle/RM-SEMANA3' },
    ],
    pdfs: [
      { title: 'Guía Práctica — Semana 03', url: week3GuidePdf },
      { title: 'Práctica Grupal Semana 3', url: week3GroupPdf },
    ],
    reflection: 'Esta semana vi que los sistemas de estilos permiten construir una interfaz con más rapidez, pero no reemplazan la comprensión de CSS. Para distinguir Bootstrap y Tailwind, primero identifico la regla visual que necesito y después cómo expresarla. Puedo mejorar manteniendo un criterio consistente y evitando estilos que no aportan.',
    questions: ['¿En qué se diferencian el enfoque de Bootstrap y el de Tailwind CSS?', '¿Qué fundamentos de CSS siguen siendo necesarios al usar un framework?', '¿Cómo comprobaría que una interfaz conserva legibilidad y accesibilidad en móvil?'],
    sources: ['B1', 'B13', 'B14', 'B15', 'B16'],
  },
  {
    number: 4,
    title: 'JavaScript, TypeScript, DOM y Canvas',
    short: 'Lógica, funciones, eventos y manipulación de elementos en el navegador.',
    summary: 'JavaScript agrega comportamiento a las páginas mediante variables, tipos, operadores, condicionales, bucles y funciones. TypeScript añade tipos para detectar ciertos errores durante el desarrollo. El DOM permite consultar y actualizar elementos y responder a eventos; Canvas 2D ofrece una superficie para dibujar gráficos y animaciones.',
    concepts: ['const y let, tipos y operadores', 'Condicionales, bucles y funciones', 'Ámbito léxico y closures', 'TypeScript y sistema de tipos', 'DOM, eventos y Canvas 2D'],
    steps: ['Separar datos y funciones por responsabilidad.', 'Localizar elementos y comprobar que existan.', 'Asociar eventos con addEventListener cuando corresponda.', 'Actualizar contenido o clases sin duplicar estructura.', 'Probar el comportamiento y revisar la consola.'],
    lab: 'Laboratorio 04 — Animación con JavaScript',
    labSummary: 'Explicar qué elemento se anima, qué datos cambian y qué funciones o eventos controlan el comportamiento.',
    repositories: [{ name: 'PRACTICA-SEMANA04-AGUILAR', url: 'https://github.com/KhaledAle/PRACTICA-SEMANA04-AGUILAR' }],
    pdfs: [{ title: 'Práctica Calificada Semana 4', url: week4Pdf }],
    reflection: 'Comprendí que JavaScript no solo sirve para cambiar textos, sino también para controlar eventos y modificar elementos. Las funciones y la relación entre JavaScript y el DOM requieren práctica. Ejecutar cambios pequeños y revisar la consola me ayuda a encontrar errores; debo resolver más ejercicios y explicar qué hace cada función.',
    questions: ['¿Cuándo utilizaría const y cuándo let?', '¿Cómo se relacionan un evento y su función controladora en el DOM?', '¿Qué aporta TypeScript al desarrollo con JavaScript?'],
    sources: ['B17', 'B18', 'B19', 'B20', 'B21'],
  },
  {
    number: 5,
    title: 'Componentes React, JSX, props y children',
    short: 'Interfaces construidas con piezas reutilizables y datos que fluyen entre ellas.',
    summary: 'React representa interfaces mediante componentes reutilizables escritos como funciones que devuelven JSX. Las props llevan datos del componente padre al hijo, y children recibe contenido anidado. Vite facilita el desarrollo y la compilación; una estructura clara separa componentes, páginas, estilos, datos y recursos.',
    concepts: ['Componentes y JSX', 'Props y children', 'Renderizado del lado del cliente (CSR)', 'Vite y npm', 'Reutilización y separación de responsabilidades'],
    steps: ['Detectar partes repetidas o con una responsabilidad clara.', 'Crear componentes con nombres descriptivos.', 'Definir y pasar las props necesarias.', 'Usar children para contenido anidado flexible.', 'Probar el componente con datos diferentes.'],
    lab: 'Laboratorio 05A — Envío de props y children',
    labSummary: 'Mostrar cómo un componente padre entrega props y contenido a un componente hijo.',
    repositories: [{ name: 'SEMANA5-DAW-10-10-2026', url: 'https://github.com/KhaledAle/SEMANA5-DAW-10-10-2026' }],
    pdfs: [{ title: 'Práctica Semana 5', url: week5Pdf }],
    reflection: 'Con React empecé a ver la interfaz como un conjunto de piezas reutilizables. JSX, props y children pueden confundirme cuando intento pasar datos y contenido a la vez. Crear un componente pequeño y probarlo con valores distintos me ayuda; debo practicar la organización y evitar componentes con demasiadas responsabilidades.',
    questions: ['¿Qué problema resuelve un componente reutilizable?', '¿Qué diferencia hay entre props y children?', '¿Cómo comprobaría que un componente funciona con distintos datos?'],
    sources: ['B22', 'B23', 'B24', 'B28', 'B29'],
  },
  {
    number: 6,
    title: 'Eventos, listas, formularios y API',
    short: 'Interacción con React, estados de interfaz y consulta de datos públicos.',
    summary: 'En React, eventos actualizan el estado y permiten responder a acciones. El renderizado condicional muestra contenido según una condición; map() construye listas con keys estables. Los formularios controlados sincronizan sus valores con el estado. Fetch permite solicitar una API y la interfaz debe representar carga, datos, ausencia de resultados y errores.',
    concepts: ['Eventos, controladores y estado', 'Renderizado condicional e iterativo', 'Listas y keys estables', 'Formularios controlados', 'Fetch, JSON, promesas y estados de solicitud'],
    steps: ['Consultar la documentación del endpoint.', 'Solicitar los datos y comprobar la respuesta HTTP.', 'Validar la estructura JSON antes de representarla.', 'Actualizar el estado de React y renderizar la lista.', 'Mostrar claramente carga, error, lista vacía o datos.', 'Mantener los proyectos colaborativos aunque falle la API.'],
    lab: 'Laboratorio 06A — Eventos y renderizado con datos de una API',
    labSummary: 'Relacionar un evento con la consulta, recorrer su respuesta y representar todos los estados de la interfaz.',
    repositories: [
      { name: 'SEMANA6-DAW-07-10-2026', url: 'https://github.com/KhaledAle/SEMANA6-DAW-07-10-2026' },
      { name: 'Mi-Proyecto-DAW-Semana06', url: 'https://github.com/KhaledAle/Mi-Proyecto-DAW-Semana06' },
    ],
    pdfs: [{ title: 'Práctica Semana 6', url: week6Pdf }],
    reflection: 'Esta semana relacioné la interacción de React con información que llega desde un servicio externo. Una solicitud puede tardar o fallar, por eso separo la carga, el procesamiento y la representación. Revisar la respuesta paso a paso ayuda; debo validar los datos y mantener una alternativa visible cuando la API no responda.',
    questions: ['¿Qué estados debería mostrar una interfaz mientras consulta una API?', '¿Por qué las listas de React necesitan una key estable?', '¿Cómo conservaría el contenido principal si una API externa no responde?'],
    sources: ['B22', 'B25', 'B26', 'B27', 'B29', 'B30', 'B31', 'B32', 'B33'],
  },
]

function ExternalLink({ href, children, className = '', ...props }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Khaled Janampa, inicio">
        <span className="brand-mark">KJ</span>
        <span>Khaled Janampa<span className="brand-subtitle">Portafolio académico</span></span>
      </Link>
      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <Link to="/#sobre-mi">Sobre mí</Link>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/cuaderno">Cuaderno</NavLink>
        <NavLink to="/reflexion-final">Reflexión final</NavLink>
      </nav>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Portafolio · Huancayo, Perú</p>
          <h1>Khaled Janampa <span>— Desarrollo de Aplicaciones Web</span></h1>
          <p className="hero-intro">Soy estudiante de la Universidad Nacional del Centro del Perú y este es mi portafolio académico de Desarrollo de Aplicaciones Web: un espacio para documentar mi proceso, mostrar mis proyectos y convertir cada práctica en evidencia de aprendizaje.</p>
          <div className="hero-actions">
            <Link className="button button-gold" to="/proyectos">Explorar proyectos <span aria-hidden="true">↗</span></Link>
            <Link className="button button-outline" to="/cuaderno">Ver cuaderno</Link>
          </div>
          <p className="hero-caption">Una bitácora de código, ideas y evolución.</p>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-orbit" />
          <img className="portrait" src={portrait} alt="Retrato de Khaled Alejandro Janampa Jaime" />
          <div className="portrait-label"><span className="status-dot" /> Disponible para aprender y colaborar</div>
        </div>
      </section>

      <section className="quick-facts" aria-label="Perfil académico">
        <div><span className="fact-label">Formación</span><strong>Ingeniería de Sistemas · IX ciclo</strong></div>
        <div><span className="fact-label">Universidad</span><strong>Universidad Nacional del Centro del Perú</strong></div>
        <div><span className="fact-label">Enfoque</span><strong>Frontend · Desarrollo web</strong></div>
      </section>

      <section id="sobre-mi" className="content-section about-section">
        <SectionHeading eyebrow="Perfil" title="Sobre mí" description="Una mirada a lo que me mueve y hacia dónde quiero crecer." />
        <div className="about-grid">
          <article className="panel about-main">
            <span className="panel-index">01 / PRESENTACIÓN</span>
            <h3>Diseñar con propósito, construir con curiosidad.</h3>
            <p>Soy Khaled Alejandro Janampa Jaime, estudiante de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú. Me interesa transformar problemas reales en experiencias digitales claras, accesibles y útiles.</p>
          </article>
          <article className="panel">
            <span className="panel-index">02 / MOTIVACIÓN</span>
            <h3>Lo que me mueve</h3>
            <p>Explorar cómo funcionan las interfaces, organizar la información y encontrar soluciones sencillas mediante la programación.</p>
          </article>
          <article className="panel">
            <span className="panel-index">03 / PRÓXIMO PASO</span>
            <h3>Hacia dónde voy</h3>
            <p>Quiero fortalecer mis bases de frontend y backend para participar en proyectos colaborativos con criterio técnico y creativo.</p>
          </article>
        </div>
      </section>

      <section className="content-section split-section">
        <div>
          <SectionHeading eyebrow="Trayectoria" title="Estudios y experiencia" />
          <div className="timeline">
            <article className="timeline-item"><span className="timeline-marker" /><div><p className="eyebrow">FORMACIÓN ACTUAL</p><h3>Ingeniería de Sistemas</h3><p>Universidad Nacional del Centro del Perú · IX ciclo</p></div></article>
            <article className="timeline-item"><span className="timeline-marker muted-marker" /><div><p className="eyebrow">EXPERIENCIA</p><h3>Información próximamente</h3><p>Este espacio queda reservado para registrar experiencias reales.</p></div></article>
          </div>
        </div>
        <aside className="panel skills-panel">
          <span className="panel-index">HERRAMIENTAS Y TECNOLOGÍAS</span>
          <h3>En aprendizaje constante</h3>
          <div className="tag-list">{['PHP', 'HTML', 'CSS', 'JavaScript', 'Python'].map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
          <div className="contact-list">
            <a href="mailto:khaledalejandrojj25@gmail.com">khaledalejandrojj25@gmail.com</a>
            <a href="tel:+51937287778">+51 937 287 778</a>
            <span>Huancayo, Perú</span>
          </div>
        </aside>
      </section>
    </>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card panel">
      <div className="card-topline"><span className="project-symbol" aria-hidden="true">↗</span><span className="project-status">Concluido</span></div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ExternalLink className="text-link" href={project.url}>Ver repositorio <span aria-hidden="true">↗</span></ExternalLink>
    </article>
  )
}

function ProjectsPage() {
  const [repositories, setRepositories] = useState([])
  const [requestState, setRequestState] = useState('loading')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadRepositories() {
      try {
        const response = await fetch('https://api.github.com/users/KhaledAle/repos?sort=updated&per_page=12', { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`GitHub respondió con el estado ${response.status}.`)
        }
        const data = await response.json()
        if (!Array.isArray(data)) {
          throw new Error('La respuesta de GitHub no tiene el formato de una lista.')
        }
        setRepositories(data.filter((repository) => !repository.fork))
        setRequestState('success')
      } catch (error) {
        if (error.name === 'AbortError') return
        setErrorMessage(error.message || 'No se pudieron cargar los repositorios públicos.')
        setRequestState('error')
      }
    }

    loadRepositories()
    return () => controller.abort()
  }, [])

  return (
    <div className="page-content">
      <section className="page-intro">
        <p className="eyebrow">TRABAJO EN EQUIPO · APRENDIZAJE CONTINUO</p>
        <h1>Proyectos con intención.</h1>
        <p>Prácticas colaborativas concluidas y repositorios propios que documentan mi recorrido en desarrollo web.</p>
        <ExternalLink className="button button-outline" href="https://github.com/KhaledAle">Abrir perfil de GitHub <span aria-hidden="true">↗</span></ExternalLink>
      </section>
      <section className="content-section">
        <SectionHeading eyebrow="EVIDENCIAS" title="Proyectos colaborativos concluidos" description="Repositorios de equipo indicados en el portafolio." />
        <div className="project-grid">{collaborativeProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
      </section>
      <section className="content-section">
        <SectionHeading eyebrow="GITHUB · KHALEDALE" title="Repositorios propios" description="Listado público consultado desde GitHub. Los proyectos colaborativos de arriba permanecen disponibles aunque el servicio no responda." />
        {requestState === 'loading' && <p className="notice" role="status">Consultando repositorios públicos de GitHub…</p>}
        {requestState === 'error' && <p className="notice notice-error" role="alert">No fue posible cargar los repositorios: {errorMessage} Puedes consultar el perfil de GitHub o abrir cualquiera de los proyectos colaborativos anteriores.</p>}
        {requestState === 'success' && repositories.length === 0 && <p className="notice" role="status">El perfil no tiene repositorios públicos propios para mostrar por ahora. Los proyectos colaborativos siguen disponibles arriba.</p>}
        {requestState === 'success' && repositories.length > 0 && (
          <div className="repo-grid">{repositories.map((repository) => (
            <article className="repo-card panel" key={repository.id}>
              <span className="repo-language">{repository.language || 'Repositorio'}</span>
              <h3>{repository.name}</h3>
              <p>{repository.description || 'Repositorio público de KhaledAle.'}</p>
              <ExternalLink className="text-link" href={repository.html_url}>Explorar <span aria-hidden="true">↗</span></ExternalLink>
            </article>
          ))}</div>
        )}
        {requestState === 'error' && ownRepositories.length > 0 && <details className="fallback-repos"><summary>Ver enlaces directos a mis repositorios destacados</summary><div className="repo-list">{ownRepositories.map((repository) => <ExternalLink key={repository.name} href={repository.url}>{repository.name} ↗</ExternalLink>)}</div></details>}
      </section>
    </div>
  )
}

function WeekCard({ week }) {
  return (
    <Link className="week-card panel" to={`/cuaderno/semana-${week.number}`}>
      <div className="week-card-top"><span className="week-number">0{week.number}</span><span className={week.pdfs ? 'evidence-badge' : 'evidence-badge evidence-pending'}>{week.pdfs ? 'PDF disponible' : 'Evidencia pendiente'}</span></div>
      <h3>{week.title}</h3>
      <p>{week.short}</p>
      <span className="text-link">Abrir ficha <span aria-hidden="true">↗</span></span>
    </Link>
  )
}

function NotebookPage() {
  return (
    <div className="page-content">
      <section className="page-intro">
        <p className="eyebrow">BITÁCORA · SEMANAS 01—06</p>
        <h1>Cuaderno de aprendizaje.</h1>
        <p>Teoría, procedimientos, laboratorios y reflexiones para repasar el recorrido del curso semana a semana.</p>
      </section>
      <section className="content-section">
        <div className="week-grid">{weeks.map((week) => <WeekCard key={week.number} week={week} />)}</div>
      </section>
    </div>
  )
}

function WeekPage() {
  const { weekSlug } = useParams()
  const weekNumber = /^semana-(\d+)$/.exec(weekSlug || '')?.[1]
  const week = weeks.find((item) => item.number === Number(weekNumber))

  if (!week) {
    return <NotFoundPage />
  }

  return (
    <div className="page-content week-page">
      <Link className="back-link" to="/cuaderno">← Volver al cuaderno</Link>
      <section className="week-heading">
        <p className="eyebrow">SEMANA {String(week.number).padStart(2, '0')} · FICHA DE REPASO</p>
        <h1>{week.title}</h1>
        <p>{week.short}</p>
      </section>
      <div className="week-detail-grid">
        <article className="panel detail-card detail-summary"><span className="panel-index">01 / RESUMEN DEL TEMA</span><p>{week.summary}</p></article>
        <article className="panel detail-card"><span className="panel-index">02 / CONCEPTOS CLAVE</span><ul className="detail-list">{week.concepts.map((concept) => <li key={concept}>{concept}</li>)}</ul></article>
        <article className="panel detail-card"><span className="panel-index">03 / PROCEDIMIENTO</span><ol className="detail-list ordered-list">{week.steps.map((step) => <li key={step}>{step}</li>)}</ol></article>
        <article className="panel detail-card reflection-card"><span className="panel-index">04 / REFLEXIÓN SEMANAL · BORRADOR EDITABLE</span><p>{week.reflection}</p></article>
        <article className="panel detail-card sources-card"><span className="panel-index">05 / FUENTES CONSULTADAS</span><div className="source-links">{week.sources.map((code) => <ExternalLink key={code} href={bibliography[code][1]} aria-label={`${code}: ${bibliography[code][0]}`}>{code}</ExternalLink>)}</div><p>Bibliografía completa y recursos relacionados en el archivo README.md del proyecto.</p></article>
        <article className="panel detail-card questions-card"><span className="panel-index">06 / PREGUNTAS DE AUTOEVALUACIÓN</span><ol className="detail-list ordered-list">{week.questions.map((question) => <li key={question}>{question}</li>)}</ol></article>
      </div>
      <section className="lab-section">
        <div className="lab-heading"><p className="eyebrow">EVIDENCIAS DE APRENDIZAJE</p><h2>{week.lab}</h2><p>{week.labSummary}</p></div>
        <div className="lab-grid">
          <article className="panel lab-info">
            <span className="panel-index">REPOSITORIOS Y DOCUMENTOS</span>
            {week.repositories?.length ? <div className="evidence-links">{week.repositories.map((repository) => <ExternalLink key={repository.name} href={repository.url}>{repository.name} <span aria-hidden="true">↗</span></ExternalLink>)}</div> : <p className="pending-note">Repositorio de esta práctica: pendiente de agregar.</p>}
            {week.pdfs?.length ? week.pdfs.map((pdf) => <p className="pdf-open-link" key={pdf.url}><a href={pdf.url} target="_blank" rel="noreferrer">{pdf.title} · Abrir o descargar ↗</a></p>) : <p className="pending-note">PDF de esta semana: pendiente de agregar.</p>}
          </article>
          <div className="pdf-viewers">
            {week.pdfs?.length ? week.pdfs.map((pdf) => (
              <section className="pdf-viewer panel" key={pdf.url}>
                <div className="pdf-title"><span className="panel-index">VISUALIZADOR · SEMANA {String(week.number).padStart(2, '0')}</span><h3>{pdf.title}</h3></div>
                <iframe title={`${pdf.title}, semana ${week.number}`} src={pdf.url} loading="lazy" />
              </section>
            )) : <div className="pdf-viewer pdf-placeholder panel"><span className="panel-index">VISUALIZADOR · SEMANA 01</span><p>El PDF de esta evidencia está pendiente de agregar.</p></div>}
          </div>
        </div>
      </section>
    </div>
  )
}

function FinalReflectionPage() {
  return (
    <div className="page-content">
      <section className="page-intro reflection-intro">
        <p className="eyebrow">CIERRE DEL CURSO</p>
        <h1>Reflexión final.</h1>
        <p>Este espacio queda reservado para una síntesis personal al completar la revisión de las seis semanas.</p>
      </section>
      <section className="panel reserved-panel">
        <span className="reserved-mark" aria-hidden="true">✳</span>
        <h2>Una mirada al camino recorrido</h2>
        <p>Cuando esté lista, la reflexión reunirá qué aprendí, qué estrategias me ayudaron, cuál fue mi mayor reto y qué objetivos quiero seguir desarrollando.</p>
        <Link className="text-link" to="/cuaderno">Revisar el cuaderno de aprendizaje <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="page-content not-found">
      <p className="eyebrow">404 · RUTA NO DISPONIBLE</p>
      <h1>No encontramos esta página.</h1>
      <Link className="button button-gold" to="/">Volver al inicio</Link>
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand" to="/"><span className="brand-mark">KJ</span><span>Khaled Janampa<span className="brand-subtitle">Desarrollo de Aplicaciones Web</span></span></Link>
      <span>Hecho con curiosidad en Huancayo, Perú · 2026</span>
      <ExternalLink href="https://github.com/KhaledAle">GitHub ↗</ExternalLink>
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <div className="app-shell">
        <SiteHeader />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/cuaderno" element={<NotebookPage />} />
            <Route path="/cuaderno/:weekSlug" element={<WeekPage />} />
            <Route path="/reflexion-final" element={<FinalReflectionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
