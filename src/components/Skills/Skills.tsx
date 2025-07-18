import SectionTitle from '../Title/SectionTitle'
import SkillCard from './SkillCard'
import styles from './Skill.module.css'


const Skills = () => {
  return (
   <>
   <section id="skills" className={`${styles.skills} section`}>

      <SectionTitle text="Skills Técnicas" />

      <div className="container">

        <div className="row">
           <SkillCard />
        </div>
      </div>

    </section>
    </>
  )
}

export default Skills
