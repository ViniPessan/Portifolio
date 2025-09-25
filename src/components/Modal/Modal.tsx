import React, { useEffect } from "react";
import { Modal, ModalBody } from "reactstrap";
import styles from './style.module.scss'
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

interface FullScreenModalProps {
  isOpen: boolean; 
  toggleModal: () => void; 
  path: string;
}

const FullScreenModal: React.FC<FullScreenModalProps> = ({ isOpen, toggleModal, path }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (

    
    <Modal isOpen={isOpen} toggle={toggleModal} fullscreen aria-hidden={!isOpen} data-aos="fade-in">
      <ModalBody className={` bg-gray-950 text-white h-screen`}>
        <div className="flex justify-end">
          <button onClick={toggleModal} className={`${styles.closeModal} focus:outline-none`}>
            <svg
              className={styles.closeModalImg}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center">
          <img src="/profile.png" alt="profile" className={styles.modalImg} />
          <p className={`${styles.modalName} pb-3 pt-3`}>Vinicius Pessan</p>
          <a href="/" className={`${path === "/" ? styles.modalActiveBtn : styles.modalBtn} py-1`} onClick={toggleModal}>
            Home
          </a>
          <a
            href="/projects"
            className={`${path === "/projects" ? styles.modalActiveBtn : styles.modalBtn} py-1`}
            onClick={toggleModal}
          >
            Projects
          </a>
          <a href="/about" className={`${path === "/about" ? styles.modalActiveBtn : styles.modalBtn} py-1`} onClick={toggleModal}>
            About
          </a>
        </nav>
      </ModalBody>
    </Modal>
  );
};

export default FullScreenModal;
