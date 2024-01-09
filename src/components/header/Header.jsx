import Link from "next/link";
import styles from "./style.module.scss"
import { Container } from "reactstrap";

export default function Header(){
  
 return(
  <div className={styles.navBar}>
    <div>
     <Link className={styles.options} href="/">Início</Link>
      <Link className={styles.options} href="/projects">Projetos</Link>
      <Link className={styles.options} href="/contact">Contato</Link>
    </div>
</div>
 )
  
}