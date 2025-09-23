"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "reactstrap";
import Modal from "../Modal/Modal";
import styles from "./style.module.scss";

export default function Header() {
  const path = usePathname();
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  // useEffect para garantir que a classe overflow-hidden seja limpa corretamente
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [modalOpen]);

  return (
    <Container>
      <div className={`${styles.header} py-10 px-20 flex justify-between items-center`}>
        <Link href="/">
          <div className={`${styles.profileCard} flex justify-center items-center`}>
            <img src="/profile.png" alt="profile" className={`${styles.imgProfile} w-12 h-12 rounded-full`} />
            <p className={`${styles.name}`}>Vinicius Pessan</p>
            <img src="/verificado.png" alt="verificado" className={`${styles.imgVerify} w-6 h-6`} />
          </div>
        </Link>

        <div className={`${styles.buttonCard} justify-center items-center hidden md:flex`}>
          <Link href="/" className={`${path === "/" ? styles.activeBtn : styles.btn} px-1 mx-4`}>Início</Link>
          <Link href="/projects" className={`${path === "/projects" ? styles.activeBtn : styles.btn} px-1 mx-4`}>Projetos</Link>
          <Link href="/about" className={`${path === "/about" ? styles.activeBtn : styles.btn} px-1 mx-4`}>Sobre</Link>
        </div>

        {/* Ícone de menu para telas pequenas */}
        <div className={`${styles.menuSection} md:hidden px-10`}>
          <button onClick={toggleModal} className="focus:outline-none">
            <svg className={`${styles.menuImg} w-8 h-8 text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Usar o novo modal */}
        <Modal isOpen={modalOpen} toggleModal={toggleModal} path={path} />
      </div>
    </Container>
  );
}
