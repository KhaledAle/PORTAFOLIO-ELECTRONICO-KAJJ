import { Link } from 'react-router-dom'

export default function FinalReflectionPage() {
  return (
    <div className="page-content">
      <section className="page-intro reflection-intro">
        <p className="eyebrow">CIERRE DEL CURSO</p>
        <h1>Reflexión final.</h1>
        <p>Este espacio queda reservado para una síntesis personal al completar el curso.</p>
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
