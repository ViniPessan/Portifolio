import { Container } from 'reactstrap'
import styles from './styles.module.scss'
import Link from 'next/link'

export default function ContatcCard(){
  return(
    <Container className={styles.container}>
      <div className={styles.card}>
        <p className={styles.cardDescription}>Formas de contato:</p>
        <div className={styles.contactForm}>
        <img src="/email.png" alt="email" className={styles.img}/>
          <p className={styles.contactName}>vinicius_pessan@hotmail.com</p>
      </div>
      <div className={styles.contactForm}>
        <img src="/whatsapp.png" alt="email" className={styles.img}/>
          <p className={styles.contactName}>+55 (18) 9 9743-1629</p>
      </div>
      <div className={styles.contactForm}>
        <img src="/instagram.png" alt="email" className={styles.img}/>
          <Link href="https://www.instagram.com/vini_pessan" className={styles.contactNameLink}>instagram.com/vini_pessan</Link>
      </div>
      <div className={styles.contactForm}>
        <img src="/GitHub.png" alt="email" className={styles.img}/>
          <Link href="https://github.com/ViniPessan" className={styles.contactNameLink}>github.com/ViniPessan</Link>  
      </div>
      </div>
    </Container>
  )
}