import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Logo from '../assets/LogoKemet.jpg';
import { useTranslation } from 'react-i18next';
import { KOFI_URL } from '../data/support';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-info">
                        <Link to="/" className="logo-link">
                            <img src={Logo} alt="Kemet Studio" className="logo-image-footer" />
                        </Link>
                        <p>{t('Footer.slogan')}</p>
                    </div>

                    <div className="footer-links">
                        <Link to="/">{t('Footer.links.start')}</Link>
                        <Link to="/games">{t('Footer.links.games')}</Link>
                        <Link to="/workshop">{t('Footer.links.workshop')}</Link>
                        <Link to="/templates">{t('Footer.links.templates')}</Link>
                        <Link to="/portfolio">{t('Footer.links.portfolio')}</Link>
                        <Link to="/about">{t('Footer.links.about')}</Link>
                        <Link to="/contact">{t('Footer.links.contact')}</Link>
                    </div>

                    <div className="footer-social">
                        <p>{t('Footer.follow')}</p>
                        <div className="social-links">
                            <a href="https://github.com/Elizondo613" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/javi_elizondo_613/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://steamcommunity.com/profiles/76561198410903687/" target="_blank" rel="noopener noreferrer" aria-label="Steam">
                                <i className="fab fa-steam"></i>
                            </a>
                            <a href="https://discord.gg/vEHUF2ZkUn" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                                <i className="fab fa-discord"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jose-javier-elizondo-mendoza-063783331" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCGaMiA00t_fUEQvE-D8cozA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                            {KOFI_URL && (
                                <a href={KOFI_URL} target="_blank" rel="noopener noreferrer" title="Ko-fi" aria-label="Ko-fi">
                                    <i className="fas fa-mug-hot"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024-2026 Elizondo. {t('Footer.copy')}</p>
                </div>
            </footer>

            <a
                href="https://wa.me/+50258119510?text=Hola%20Javi!%20Vi%20tu%20página%20y%20me%20interesa%20tu%20trabajo."
                className="whatsapp-button"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp"></i>
            </a>

            <button
                className={`scroll-top-button ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Volver arriba"
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </>
    );
};

export default Footer;