import { useState, useEffect } from "react";
import '../styles/Navbar.css';
import Logo from '../assets/LogoVhalakar.jpg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="logo-link">
            <img src={Logo} alt="Logo portafolio" className="logo-image" />
          </a>
          <ul className="nav-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar;