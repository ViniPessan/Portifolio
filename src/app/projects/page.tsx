import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Container } from "reactstrap";
import styles from "./styles.module.scss"
import ProjectCard from "@/components/projectCard/ProjectCard";

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
}

export default function Page(){

  const projects: Project[] = [
    {
      id: 1,
      name: "Cadastro de usuários",
      description: "Praticando next, representa um site de um jogo para o usuário se cadastrar.",
      link: "https://github.com/ViniPessan/Cadastro-de-usuarios"
    },
    {
      id: 2,
      name: "Thresh",
      description: "Página para praticar estilização e algumas libs. Inspirado no personagem de League of Legends.",
      link: "https://github.com/ViniPessan/Champion-presentation"
    },
    {
      id: 3,
      name: "Lista de campeões",
      description: "Uma lista onde você consegue adicionar itens com imagens, título e breve descrição.",
      link: "https://github.com/ViniPessan/Champion-pool"
    },
    {
      id: 4,
      name: "To do list",
      description: "Praticando express, projeto bem simples, simulando uma lista de coisas para se fazer.",
      link: "https://github.com/ViniPessan/to-do-list-express"
    },
    {
      id: 5,
      name: "Onebitflix",
      description: "Clone da Netflix (front-end).",
      link: "https://github.com/ViniPessan/onebitflixFrontend"
    },
    {
      id: 6,
      name: "Onebitflix",
      description: "Clone da Netflix (back-end).",
      link: "https://github.com/ViniPessan/onebitflixBackend"
    },
    
  ]


  return(
    <div className={styles.background}>
    <Header/>
    <p className={styles.title}>Projetos</p>
        <div className={styles.container}>
        {projects.map((project, index) =>(
           <ProjectCard
           key={index}
           name={project.name}
           description={project.description}
           link={project.link}
           />
        ))}
      </div>
        <div className={styles.footer}>
           <Footer/>
        </div>
      </div>  
   )
}