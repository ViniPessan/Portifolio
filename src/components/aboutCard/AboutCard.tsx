import { Container } from 'reactstrap'
import styles from './style.module.scss'
import Header from '@/components/header/Header'

export default function AboutCard(){
  return(
    <Container>
      <main className={styles.background}>
        <div className={`${styles.titleSection} flex justify-center`}>
          <p className={`${styles.title} text-white text-8xl font-bold`}>Bem vindo(a).</p>
        </div>
        <div className={`${styles.aboutSection}`}>
          <img src="/me.png" alt="me" className={`${styles.meImg}`}/>
          <div className={styles.textSection}>
            
          <p className={`${styles.aboutText} text-white`}>
              Sou Vinicius Pessan, um desenvolvedor full-stack apaixonado por JavaScript, 
              tenho {new Date().getFullYear() - 2000} anos,
              residente em Pacaembu, São Paulo. 
          </p>
              
          <p className={`${styles.aboutText} text-white`}> 
          Comecei a estudar programação em 2019 e, desde então, 
          concluí a faculdade de análise e desenvolvimento de sistemas, 
          além de cursos e bootcamps online.
           Meu foco principal é front-end, mas tenho também conhecimento em back-end.
          </p>
              
          <p className={`${styles.aboutText} text-white`}> 
          Meu objetivo é criar sites e aplicativos incríveis que resolvam
           problemas reais e fiquem ótimos em qualquer dispositivo.
          </p>

          </div>
        </div>

        <div className={`${styles.moreInfoSection} text-white`}>
          <div className={`${styles.moreInfo} `}>
              <p className={`${styles.moreInfoTitle} text-4xl font-semibold`}>Tecnologias</p>
              <p className={`${styles.moreInfoText} text-xl`}>Essas são algumas das tecnologias que gosto de usar:</p>

                <p className={`${styles.moreInfoText} text-xl`}>
                  <span className={styles.colorText}>Front-end</span>: 
                JavaScript, TypeScript, React, Next.js, Sass, Bootstrap e Tailwind.
                </p>

                <p className={`${styles.moreInfoText} text-xl`}>
                  <span className={styles.colorText}>Back-end</span>: 
                Node.js, Express.js, Prisma, MongoDB e PostgreSQL.         
                </p>
          </div>

          <div className={`${styles.moreInfo} `}>
              <p className={`${styles.moreInfoTitle} text-4xl font-semibold `}>Carreira</p>
              <p className={`${styles.moreInfoText} `}>
              Atualmente, trabalho como <span className={styles.colorText}>freelancer</span> em alguns sites, enquanto busco novas 
              <span className={styles.colorText}> oportunidades</span> no <span className={styles.colorText}> mercado de trabalho</span>.

              </p>
          </div>

          <div className={`${styles.moreInfo} `}>
              <p className={`${styles.moreInfoTitle} text-4xl font-semibold `}>Offline</p>
              <p className={`${styles.moreInfoText} `}>
              Quando não estou programando ou falando sobre códigos nas comunidades de desenvolvimento, 
              gosto de passar meu tempo livre <span className={styles.colorText}>jogando videogames </span> 
               e <span className={styles.colorText}> praticando atividades físicas</span>.
              </p>
          </div>

        </div>
      </main>
    </Container>
  )
}