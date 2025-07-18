import { dadosNew } from '../../constants/dados'
import SectionTitle from '../Title/SectionTitle'
import styles from './Contact.module.css'

const Contact = () => {

  const contacts = ["Whatsapp", "E-mail", "Linkedin"]
  const dados = dadosNew.contacts.filter( link => contacts.includes(link.name))
  return (
   <>
    <section id="contact" className={`${styles.contact} section`}>

      <SectionTitle text="Contato"/>

      <div className="container">

        <div className="row g-4 g-lg-5">
          <div className="col-lg-12">
            <div className={`${styles["info-box"]} d-flex flex-wrap`}>


            {dados.map( ({icon, label, url, value}, i) => (
              <div key={i} className={`${styles["info-item"]} mx-0 mx-md-4`}>
                <a href={url} className='d-flex' target='_blank'>
                  <div className={`${styles["icon-box"]} ms-0 me-3 mx-md-3`}>
                    <i className={icon}></i>
                  </div>
                <div className={styles.content}>
                  <h4>{label}</h4>
                  <p>{value}</p>
                </div>
                </a>
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

export default Contact
