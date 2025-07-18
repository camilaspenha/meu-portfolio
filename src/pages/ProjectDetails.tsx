import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchProjects } from "../api/fetchProjects"
import type { Project } from "../types"
import Footer from "../components/Footer/Footer"
import { SITE_URL } from "../constants/dados"

export default function ProjectDetails() {
  const { id } = useParams()
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    fetchProjects().then(data => {
      const found = data.find(p => p.id === id)
      setProject(found || null)
    })
  }, [id])

  if (!project) return <div className="container py-4">Carregando...</div>

  return (
    <>
        <div className="page-title bg-light">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">{project.title}</h1>
            <nav className="breadcrumbs">
              <ol>
                <li><a href={SITE_URL}><strong>Home</strong></a></li>
              </ol>
            </nav>
          </div>
        </div>

      <section id="portfolio-details" className="portfolio-details section">

        <div className="container">

          <div className="row gy-4">
             <div className="col-lg-8">
              <img src={SITE_URL + project.image} alt={project.title} className="img-fluid rounded mb-4" />
             </div>
             <div className="col-lg-4">

              <div className="portfolio-info">
                <h3>Sobre o Projeto</h3>
                <ul>
                  <li>
                    <strong>Nome:</strong> {project.title}
                  </li>
                  <li>
                    <strong>Categoria:</strong> {project.category}</li>                  
                </ul>

                <div className="portfolio-description">
                  <h5>Detalhes</h5>
                  <p>{project.description}</p>
                </div>                           

                <div className="mt-3">
                  <a href={project.link} className="custom-button btn btn-primary mt-2 me-2" target="_blank">Ver Projeto</a>

                  {project.repository && project.repository !== "" ? <a href={project.repository} className="custom-button btn btn-outline mt-2" target="_blank"><i className="bi bi-github"></i>Repositório</a> : ""}
                </div>

              </div>

               <div className="features mt-4">
                <ul>
                  {project.techs.map( (f,i) => (
                    <li key={i} className="tag">{f}</li>
                  ) )}
                </ul>
              </div>

             </div>
          </div>

        </div>

      </section>

      <Footer />
    </>
    
  )
}
