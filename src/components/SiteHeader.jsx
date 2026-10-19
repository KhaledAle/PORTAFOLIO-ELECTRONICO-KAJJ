import { Link, NavLink } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Khaled Janampa, inicio">
        <span className="brand-mark">KJ</span>
        <span>Khaled Janampa<span className="brand-subtitle">Portafolio académico</span></span>
      </Link>
      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/cuaderno">Cuaderno</NavLink>
        <NavLink to="/reflexion-final">Reflexión final</NavLink>
      </nav>
    </header>
  )
}
