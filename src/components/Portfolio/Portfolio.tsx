import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import type { Project } from "../../types"
import { fetchProjects } from "../../api/fetchProjects"
import SectionTitle from '../Title/SectionTitle'
import styles from './Portfolio.module.css'

const Portfolio = () => {

   const [projects, setProjects] = useState<Project[]>([])
  
    useEffect(() => {
      fetchProjects().then(setProjects)
    }, [])
  return (
    <>
      <section id="portfolio" className={`${styles.portfolio} section`}>

        <SectionTitle text="Portfólio" />

        <div className={`row ${styles["portfolio-container"]}`}>

          {projects.map(project => (
            <div className={`col-lg-4 col-md-6 p-0`} key={project.id}>

              <Link to={`/projeto/${project.id}`} className="">
                  <div className={styles["portfolio-wrap"]}>
                    <img src={project.image} className="img-fluid" alt={project.title}loading="lazy" />
                    <div className={styles["portfolio-info"]}>
                      <div className="content">
                        <span className={styles.category}>{project.category}</span>
                        <h4>{project.title}</h4>
                        <div className={styles["portfolio-links"]}>
                          <div>
                            <i className="bi bi-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}

        </div>

      </section>
    </>
  )
}

export default Portfolio
