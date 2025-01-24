import { Container } from 'reactstrap';
import styles from './style.module.scss'

export default function Footer() {
  
  return (
    
    <Container className='text-white'>
      <div className={styles.line}/>
      <div className={styles.footerSection}>

        <div className={`${styles.footerCopyTextSection} flex flex-col items-center justify-center`}> 
        <p className={styles.footerCopyText}>&copy; 2021-2024 </p>
        <a href="/" className={styles.footerText}> Vini Pessan</a>
        </div>

      
        <div className={`${styles.linkedinSection} flex flex-col items-center justify-center`}> 
          <img src="/linkedin.png" className={styles.footerImg} alt="404" />
          <a href="https://www.linkedin.com/in/vinipessan/" className={styles.footerText}>Linkedin</a>
        </div>


        <div className={`${styles.githubSection} flex flex-col items-center justify-center`}> 
          <img src="/github.png" className={styles.footerImg} alt="404" />
          <a href="https://github.com/ViniPessan" className={styles.footerText}>GitHub</a>
        </div>

        
        <div className={`${styles.instagramSection} flex flex-col items-center justify-center`}> 
          <img src="/instagram.png" className={styles.footerImg} alt="404" />
          <a href="https://www.instagram.com/vini_pessan/" className={styles.footerText}>Instagram</a>
        </div>

        <div className={styles.emailAndPhoneSection}>
          <div className={`flex flex-col justify-center`}>
            <div className='flex items-center'>
             <img src="/gmail.png" className={styles.footerImg3} alt="404" />
             <p className='px-2'>vini.pessan1@gmail.com</p>
            </div>
            <div className='flex pt-1 items-center'> 
            <img src="/whatsapp.png" className={styles.footerImg2} alt="404" />
            <p className='px-2'>+55 (18) 9 99743-1629</p>
          </div>
        </div>
        </div>
       
        
      </div>
    </Container>
  );
}
