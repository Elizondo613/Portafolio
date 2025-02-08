import { useState, useEffect } from "react";
import '../styles/Footer.css';
import Logo from '../assets/LogoVhalakar.jpg'

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.scrollY > 400);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    return (
      <>
        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-info">
            <a href="#home" className="logo-link">
                <img src={Logo} alt="Logo portafolio" className="logo-image-footer" />
            </a>
              <p>Desarrollando experiencias web excepcionales</p>
            </div>
            <div className="footer-links">
              <a href="#home">Inicio</a>
              <a href="#about">Sobre mí</a>
              <a href="#portfolio">Portafolio</a>
              <a href="#contact">Contacto</a>
            </div>
            <div className="footer-social">
              <p>Sígueme en:</p>
              <div className="social-links">
                <a href="https://github.com/Elizondo613" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/javi_elizondo_613/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://steamcommunity.com/profiles/76561198410903687/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-steam"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Elizondo. Todos los derechos reservados.</p>
          </div>
        </footer>
  
        {/* Botón de WhatsApp flotante */}
        <a 
          href="https://wa.me/+50258119510?text=Hola,%20me%20interesa%20tu%20trabajo" 
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
  
        {/* Botón de scroll to top */}
        <button 
          className={`scroll-top-button ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </>
    );
  };

export default Footer;