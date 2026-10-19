import { Link } from 'react-router-dom'
import portrait from '../assets/Fotocarnet.webp'
import SectionHeading from '../components/SectionHeading.jsx'

export default function HomePage() {
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
