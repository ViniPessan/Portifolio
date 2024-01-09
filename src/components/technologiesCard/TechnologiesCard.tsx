import { Container } from "reactstrap"
import styles from "./style.module.scss"


export default function TechnologiesCard(){
  return (
    <Container>
      <div className={styles.card}>
        <p className={styles.cardDescription}>
          Essas são algumas das tecnologias que gosto de usar:
        </p>
        <div className={styles.cardImg}>
        <img className={styles.img} src="./tech.png" alt="Technologies" />
        </div>
      </div>
    </Container>
  )
}