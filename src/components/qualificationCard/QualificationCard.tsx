import { Container } from "reactstrap";
import styles from "./style.module.scss"
import qualifications from "../../app/data/qualification"


export default function QualificationCard(){
  return(
    <Container>
      <div className={styles.titleSection}>
        <p className={`${styles.title} text-3xl text-white font-bold`}>Formação e certificados</p>
      </div>
     
      <div className={`${styles.cardSection}  text-white`}>
        {qualifications.map((qualification, index) => (
          <div 
          key={index} 
          className={styles.card}  
          style={{ backgroundImage: `url(${qualification.img})`}}>
            <div>
              <p className={`${styles.cardTitle}`}> {qualification.title}</p>
              <p className={`${styles.cardDescription}`}>{qualification.description}</p>
            </div>
            <div>
              <p className={`${styles.cardConclusion}`}>Conclusão: {qualification.conclusion}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.seeProjectsSection}>
        <a href="/projects" className={styles.seeProjects}> 
        <p>Ver Projetos</p>
        <p className={styles.arrow}> → </p>
        </a>
      </div>

    </Container>
  )
}