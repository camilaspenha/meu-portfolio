import styles from './Hero.module.css'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import SocialContainer from '../Social/SocialContainer'
import { dadosNew } from '../../constants/dados'


const Hero = () => {

 const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ['Web Designer', 'Desenvolvedora Web Front-End'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }, [])
  
  return (
     <section id="hero" className={`${styles.hero} section`}>
        
        <div className={styles["background-elements"]}>
          <div className={`${styles["bg-circle"]} ${styles["circle-1"]}`}></div>
          <div className={`${styles["bg-circle"]} ${styles["circle-2"]}`}></div>
        </div>

        <div className={styles["hero-content"]}>
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-12">
                <div className={`${styles["hero-text"]} text-center`}>
                  <h1>{dadosNew.nome}</h1>
                  <p className={styles.lead}>
                    <span ref={el}></span>
                    </p>
                  <p className={`${styles.description} mx-auto mb-4`}>
                    Construo interfaces para web interativas, responsivas e centradas no usuário, com uso das principais tecnologias de desenho/prototipação em UI/UX e desenvolvimento web.
                  </p>
                </div>
              </div>

              <SocialContainer />                  
              
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
