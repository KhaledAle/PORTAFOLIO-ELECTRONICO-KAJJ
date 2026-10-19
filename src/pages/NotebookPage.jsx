import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import { weeks } from '../data/weeks.js'

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

export default function NotebookPage() {
  return (
    <div className="page-content">
      <section className="page-intro">
        <p className="eyebrow">BITÁCORA · SEMANAS 01—07</p>
        <h1>Cuaderno de aprendizaje.</h1>
        <p>Teoría, procedimientos, laboratorios y reflexiones para repasar el recorrido del curso semana a semana.</p>
      </section>
      <section className="content-section">
        <SectionHeading title="Semanas" />
        <div className="week-grid">{weeks.map((week) => <WeekCard key={week.number} week={week} />)}</div>
      </section>
    </div>
  )
}
