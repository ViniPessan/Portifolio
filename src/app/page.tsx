"use client"

import Header from "../components/header/Header";
import styles from "./styles.module.scss";
import AboutCard from "../components/aboutCard/AboutCard";
import { useState } from "react";
import TechnologiesCard from "@/components/technologiesCard/TechnologiesCard";
import Footer from "@/components/footer/Footer";
import { Container } from "reactstrap";



export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const handleButtonClick = (section: string) => {
    if (section === activeSection) {
      setActiveSection("");
    } else {
      setActiveSection(section);
    }
  };
  

  return (
    <div className={styles.background}>
      <Header />
     <div className={styles.logo}>
     <p className={styles.title}>Vinicius Pessan</p>
      <p className={styles.subtitle}>Desenvolvedor Javascript full-stack</p>
     </div>
      <div className={styles.card}>
        <button
          className={`${styles.cardTitle} ${activeSection === "about" && styles.selectCardTitle}`}
          onClick={() => handleButtonClick("about")}>
            Sobre
        </button>
        <button 
        className={`${styles.cardTitle} ${activeSection === "technologies" && styles.selectCardTitle}`}
          onClick={() => handleButtonClick("technologies")}>
            Tecnologias
        </button>
      </div>
      {activeSection === "about" && <AboutCard />}
    {activeSection === "technologies" && <TechnologiesCard />}
    <div className={styles.footer}>
    <Footer/>
  </div>
    </div>
    
  );
}



