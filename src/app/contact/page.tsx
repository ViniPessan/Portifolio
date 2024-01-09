import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import styles from "./styles.module.scss"
import ContatcCard from "@/components/contactCard/ContactCard";

export default function Page(){
  return(
    <div className={styles.background}>
        <Header/>
        <div className={styles.card}>
          <ContatcCard/>
        </div>
        <div className={styles.footer}>
           <Footer/>
        </div>
      </div>

  )
}