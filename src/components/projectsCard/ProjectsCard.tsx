import { Container } from "reactstrap";
import styles from "./style.module.scss"
import projects from "../../app/data/projects"


export default function ProjectsCard(){
  return(
    <Container>
      <div className='flex flex-col justify-center items-center'>
        <p className={`${styles.title} text-white text-8xl font-bold`}>Projetos</p>
        <p className={`${styles.subTitle} text-white text-2xl font-semibold`}>Explorando o Mundo da Tecnologia e Desenvolvimento</p>
          <div className={styles.tech}>
          <i className={`${styles.svg} devicon-html5-plain colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-css3-plain colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-sass-original colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-bootstrap-plain colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-tailwindcss-plain colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-javascript-plain colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-typescript-plain colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-react-original colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-nextjs-plain colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-nodejs-plain colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-express-original colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-sequelize-plain colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-mongodb-plain colored text-3xl`}></i>
          <i className={`${styles.svg} devicon-postgresql-plain colored text-3xl`}></i>
        </div>
        
      
      <div className={`${styles.cardSection}  text-white`}>
        {projects.map((project, index) => (
          
          <div 
          key={index} 
          className={styles.card}  
          style={{ backgroundImage: `url(${project.img})`}}>
            <div>
              <p className={`${styles.cardTitle}`}> {project.title}</p>
              <p className={`${styles.cardDescription}`}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.seeGit}>
      <p className={styles.gitText}>
        Veja esses e muitos outros projetos em meu 
          <a href="https://github.com/ViniPessan" className={`${styles.gitLink}`}>GitHub</a>!
      </p>
      </div>
      </div>
    </Container>
  )
}