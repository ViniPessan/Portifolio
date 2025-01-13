import { Container } from 'reactstrap'
import styles from './style.module.scss'
import Header from '@/components/header/Header'
import AboutCard from '@/components/aboutCard/AboutCard'

export default function About(){
  return(
    <Container>
      <AboutCard/>
    </Container>
  )
}