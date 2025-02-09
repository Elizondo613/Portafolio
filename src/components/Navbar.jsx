import { useState, useEffect } from "react";
import '../styles/Navbar.css';
import Logo from '../assets/LogoVhalakar.jpg';
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useTranslation();
  
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
            <li><a href="#home">{t('Navbar.links.start')}</a></li>
            <li><a href="#about">{t('Navbar.links.about')}</a></li>
            <li><a href="#portfolio">{t('Navbar.links.portfolio')}</a></li>
            <li><a href="#contact">{t('Navbar.links.contact')}</a></li>
          </ul>
          <div className="language-switcher">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;