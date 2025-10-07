import styles from './Social.module.css'
import {dadosNew} from './../../constants/dados'
import { SiFigma } from "react-icons/si";


const SocialContainer = () => {

  const socialHero = ["Behance", "GitHub", "Linkedin", "Whatsapp"]
  const dados = dadosNew.contacts.filter( (link) => socialHero.includes(link.name ))
  return (
    <>
      <div className={`${styles["social-links"]} justify-content-center`}>
        
       
        {dados.map( ({name,icon,url}, i) => (
          <a key={i} href={url} target='_blank' title={name} rel="noopener noreferrer" >
              <i className={icon}></i>
        </a>
        ))}
         <a href="https://www.figma.com/design/I4dK1vHpGBo6Mv4x8WZiBu/Portfolio?node-id=2108-1287&t=sgKZsbqbVIjD4kx7-1" target='_blank' title="Link para Figma - Abre nova página" rel="noopener noreferrer" >
             <SiFigma />
        </a>
      </div>
    </>
  )
   
      
    //  <div className={`${styles["social-links"]} justify-content-center`}>
    //   {Object.entries(socialLinks).map( ([key,{url, label,icon}]) => <a key={key} href={url} target='_blank' title={label} rel="noopener noreferrer" ><i className={icon}></i></a>)}
    // </div>
}

export default SocialContainer
