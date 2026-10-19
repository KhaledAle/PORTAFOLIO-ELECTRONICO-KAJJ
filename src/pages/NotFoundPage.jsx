import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="page-content not-found">
      <p className="eyebrow">404 · RUTA NO DISPONIBLE</p>
      <h1>No encontramos esta página.</h1>
      <Link className="button button-gold" to="/">Volver al inicio</Link>
    </div>
  )
}
