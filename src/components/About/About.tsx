import styles from './About.module.css'
import {dadosNew} from '../../constants/dados'

const About = () => {

  const resumeContacts = ["E-mail", "Whatsapp"]
  const contacts = dadosNew.contacts.filter( (link) => resumeContacts.includes(link.name) )

  const btnContato = contacts.find( link => link.name === "Whatsapp")

  return (
    <>
    <section id="about" className={`${styles.about} section`}>

      <div className="container">

        <div className="row">
          <div className="col-lg-5">
            <div className={styles["profile-card"]}>
              <div className={styles["profile-header"]}>
                <div className={styles["profile-image"]}>
                  <img src="img/profile.jpg" alt="Imagem de Perfil" className="img-fluid" />
                </div>
                {/* <div className={styles["profile-badge"]}>
                  <i className="bi bi-check-circle-fill"></i>
                </div> */}
              </div>

              <div className={styles["profile-content"]}>
                <h3>{dadosNew.nome}</h3>
                <p className={styles.profession}>{dadosNew.resumeNew.profissao}</p>

                <div className={styles["contact-links"]}>
                {contacts.map( ({url,icon,value},i) => (
                  <a key={i} href={url} target='_blank' className={styles["contact-item"]}>
                    <i className={icon}></i>
                    {value}
                  </a>
                ))}

                <div className={styles["contact-item"]}>
                    <i className="bi bi-geo-alt"></i>
                    {dadosNew.local}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className={styles["about-content"]}>
              <div className={styles['section-header']}>
                <span className={styles["badge-text"]}>Sobre mim</span>
                <h2>Foco em transformar ideias em experiências visuais incríveis</h2>
              </div>

              <div className={styles.description}>
                <p>Trabalho há 5 anos com construção de páginas web com uso das principais tecnologias do desenvolvimento front-end como HTML5, CSS3, Bootstrat, Javascript, PHP, Wordpress, versionamento de código com Git, GitHub com foco no desenvolvimento mobile-first.</p>

                <p>Como Web Designer, atuo principalmente no design e prototipagem de interfaces com uso de Figma, Adobe XD, Illustrator e Photoshop.</p>

                <p>Possuo forte habilidade em trabalhar de forma colaborativa em equipes ágeis, boa comunicação, resolução de problemas, organização e sempre busco aprender novas tecnologias.</p>
              </div>

              <div className={styles["details-grid"]}>
                <div className={styles["detail-row"]}>
                  <div className={styles["detail-item"]}>
                    <span className={styles["detail-label"]}>Especialização</span>
                    <span className={styles["detail-value"]}>{dadosNew.resumeNew.especializacao}</span>
                  </div>
                </div>
              </div>

              <div className={styles["cta-section"]}>
                <a href={dadosNew.resumeNew.file} className="custom-button btn btn-primary" target='_blank'>
                  <i className="bi bi-download"></i>
                  Baixar Currículo
                </a>
                <a href={btnContato?.url} className="custom-button btn btn-outline" target='_blank'>
                  <i className="bi bi-chat-dots"></i>
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    </>
  )
}

export default About
