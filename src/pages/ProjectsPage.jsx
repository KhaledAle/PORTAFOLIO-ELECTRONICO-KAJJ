import { useEffect, useState } from 'react'
import ExternalLink from '../components/ExternalLink.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { collaborativeProjects, ownRepositories } from '../data/projects.js'

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

export default function ProjectsPage() {
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
      <section className="page-intro">
        <p className="eyebrow">TRABAJO EN EQUIPO · APRENDIZAJE CONTINUO</p>
        <h1>Proyectos en mi repositorio de GitHub.</h1>
        <p>Prácticas colaborativas concluidas y repositorios propios que documentan mi recorrido en desarrollo web.</p>
        <ExternalLink className="button button-outline" href="https://github.com/KhaledAle">Abrir perfil de GitHub <span aria-hidden="true">↗</span></ExternalLink>
      </section>
      <section className="content-section">
        <SectionHeading eyebrow="EVIDENCIAS" title="Proyectos colaborativos concluidos" description="Repositorios de equipo indicados en el portafolio." />
        <div className="project-grid">{collaborativeProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
      </section>
    </div>
  )
}
