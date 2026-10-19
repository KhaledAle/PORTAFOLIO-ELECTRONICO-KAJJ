import { Link, useParams } from 'react-router-dom'
import ExternalLink from '../components/ExternalLink.jsx'
import { bibliography, weeks } from '../data/weeks.js'
import NotFoundPage from './NotFoundPage.jsx'

export default function WeekPage() {
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
        <article className="panel detail-card reflection-card"><span className="panel-index">04 / REFLEXIÓN SEMANAL</span><p>{week.reflection}</p></article>
        <article className="panel detail-card sources-card"><span className="panel-index">05 / FUENTES CONSULTADAS</span><div className="source-links">{week.sources.map((code) => <ExternalLink key={code} href={bibliography[code][1]} aria-label={`${code}: ${bibliography[code][0]}`}>{code}</ExternalLink>)}</div><p>Bibliografía completa y recursos relacionados en el archivo README.md del proyecto.</p></article>
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
            )) : <div className="pdf-viewer pdf-placeholder panel"><span className="panel-index">VISUALIZADOR · SEMANA {String(week.number).padStart(2, '0')}</span><p>El PDF de esta evidencia está pendiente de agregar.</p></div>}
          </div>
        </div>
      </section>
    </div>
  )
}
