import { Container } from 'reactstrap'
import styles from './style.module.scss'
import ProjectsCard from '@/components/projectsCard/ProjectsCard'

export default function Projects(){
  return(
    <Container>
       <div className={styles.section}>
       <ProjectsCard/>
      </div>
    </Container>
  )
}