import { Container } from "reactstrap";
import styles from "./style.module.scss"

export default function ResumeCard(){
  return(
    <Container>
      <div className="text-white flex flex-col justify-center ">
       <h2 className={`${styles.apresentation} text-lg font-bold tracking-widest`}>OLÁ, MEU NOME É VINICIUS</h2>
       <h1 className={`${styles.title} text-7xl font-semibold`}>Eu desenvolvo websites.</h1>
       <p className={`${styles.text} pt-10 text-gray-300 leading-relaxed`}>
          Sou desenvolvedor full-stack apaixonado por JavaScript,
           residente em Pacaembu - São Paulo.
          Atualmente, busco oportunidades no mercado de trabalho.
       </p>
      </div>
    </Container>
  )
}