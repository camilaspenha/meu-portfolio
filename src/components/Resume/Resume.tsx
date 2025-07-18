import SectionTitle from '../Title/SectionTitle'
import { dadosNew } from '../../constants/dados'
import styles from './Resume.module.css'

const Resume = () => {

  const resumeContacts = ["E-mail", "Whatsapp", "Linkedin"]
  const contacts = dadosNew.contacts.filter( (link) => resumeContacts.includes(link.name) )
  return (
    <>
    <section id="resume" className={`${styles.resume} section`}>

      <SectionTitle text="Currículo"/>

      <div className="container">

        <div className="row gy-4">
          <div className="col-lg-4">
            <div className={styles["resume-side"]} >

              <h3>Resumo</h3>
              <p>{dadosNew.resumeNew.resumoProfissional}</p>

              <h3 className="mt-4">Dados para Contato</h3>
              <ul className={`${styles["contact-info"]} ${styles["list-unstyled"]}`}>

                {contacts.map( ({icon,url,value}, i) => (
                   <li key={i}>
                    <a href={url} target='_blank'>
                      <i className={icon}></i>
                        {value}
                    </a>
                  </li>
                ))}
              </ul>

              <div className={`${styles["skills-animation"]} mt-4`}>
                <h3>Expertise</h3>
                {dadosNew.resumeNew.expertise?.map( (key, i, val) => (
                  <div className={styles["skill-item"]} key={key}>
                    <div className="d-flex justify-content-between">
                      <span>{val[i]}</span>
                    </div>
                  </div>
                ) )}
              </div>

              <div className={`${styles["skills-animation"]} mt-4`}>
                <h3>Idiomas</h3>
                <div className={styles["skill-item"]}>
                  <div className="d-flex justify-content-between">
                    <span>Inglês - Intermediário</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-8 ps-4 ps-lg-5">
            <div className={styles["resume-section"]}>
              <h3>
                Experiência Profissional
              </h3>

              {dadosNew.resumeNew.experience?.map((d,key) => (
                <div key={key} className={styles["resume-item"]}>
                  <h4>{d.cargo}</h4>
                  <h5>{d.data}</h5>
                  <p className={styles.company}>
                    {d.empresa}
                  </p>
                  <ul>
                    {d.funcoes.map( (key, val, i) => (
                      <li key={key}>{i[val]}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className={styles["resume-section"]} >
              <h3>Formação</h3>

                {dadosNew.resumeNew.formacao?.map( (d, key) => (
                  <div key={key} className={styles["resume-item"]}>
                    <h4>{d.nome}</h4>
                    <h5>{d.ano}</h5>
                    <p className={styles.company}>
                      {d.instituicao}
                      </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Resume
