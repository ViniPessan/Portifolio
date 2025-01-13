import Header from "@/components/header/Header";
import Image from "next/image";
import styles from "./style.module.scss"
import ResumeCard from "@/components/resumeCard/ResumeCard";
import { Container } from "reactstrap";
import QualificationCard from "@/components/qualificationCard/QualificationCard";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <Container>
    <main className={styles.section}>
       <ResumeCard/>
       <QualificationCard/>
    </main>
    </Container>  
  );
}
