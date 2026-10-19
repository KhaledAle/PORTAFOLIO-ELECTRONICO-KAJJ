import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import FinalReflectionPage from './pages/FinalReflectionPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotebookPage from './pages/NotebookPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import WeekPage from './pages/WeekPage.jsx'
import './App.css'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
