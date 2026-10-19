import { Link } from 'react-router-dom'
import ExternalLink from './ExternalLink.jsx'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand" to="/"><span className="brand-mark">KJ</span><span>Khaled Janampa<span className="brand-subtitle">Desarrollo de Aplicaciones Web</span></span></Link>
      <span>Janampa Jaime Khaled Alejandro - Huancayo, Perú - 2026</span>
      <ExternalLink href="https://github.com/KhaledAle">GitHub ↗</ExternalLink>
    </footer>
  )
}
