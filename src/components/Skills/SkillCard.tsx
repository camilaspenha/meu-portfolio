import {dadosNew } from '../../constants/dados'
import styles from './Skill.module.css'

let colNumber

if(dadosNew.resumeNew.skills.length < 12){
  colNumber = 12 / dadosNew.resumeNew.skills.length
} else {
   colNumber = 4
}


const SkillCard = () => {
  return (
    <>
    {dadosNew.resumeNew.skills.map(({name,items}, key) => (
      
      <div key={key} className={`col-lg-${colNumber}`}>
        <div  className={styles["skills-category"]}>
          <h3>{name}</h3>
          <div className={styles["skills-animation"]}>
            {items.map( ({name, details, percent},key) => (
                <div key={key} className={styles["skill-item"]}>     
                <div className="d-flex justify-content-between align-items-center">
                  <h4>{name}</h4>
                  <span className={styles["skill-percentage"]}>{`${percent}%`}</span>
                </div>
                 <div className="progress">
                    <div
                      className={`${styles.minhaProgressBar} progress-bar progress-bar-animated`}
                      role="progressbar"
                      style={{ width: `${percent}%` }}
                      aria-valuenow={percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                    </div>
                  </div>
                    <div className={styles["skill-tooltip"]}>
                      {details}
                    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

export default SkillCard
