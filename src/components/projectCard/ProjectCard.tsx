import React from "react";
import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link }) => {
  return (
    <Container className={styles.container}>
      <Link href={link} className={styles.card}>
          <img src="/githubb.png" alt="" className={styles.img} />
          <p className={styles.cardTitle}>{name}</p>
          <p className={styles.cardDescription}>{description}</p>
      </Link>
    </Container>
  );
};

export default ProjectCard
