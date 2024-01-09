
import styles from "./styles.module.scss"
import { Container } from "reactstrap";

export default function aboutCard(){
  return (
    <>
    <Container>
    <div className={styles.cardDescription}>
      <p className={styles.description}>
        Meu nome é Vinicius e eu sou um dev full-stack de Pacaembu, São Paulo. 
        Meu primeiro contato com a programação foi em 2019, onde iniciei a faculdade de análise e desenvolvimento 
        de sistemas e depois de formado continuei estudando e praticando com cursos onlines.
      <br/>
       Tenho maior conhecimento e preferência em 
      front-end, porém também tenho conhecimento sólido em back-end. Atualmente estou buscando por oportunidades
       no mercado de trabalho.
        </p>
    </div>
    </Container>
    </>
  )
}