import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/LogoKemet.jpg';
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cierra el menú al cambiar de ruta
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const links = [
        { to: '/',          label: t('Navbar.links.start') },
        { to: '/games',     label: t('Navbar.links.games') },
        { to: '/templates', label: t('Navbar.links.templates') },
        { to: '/portfolio', label: t('Navbar.links.portfolio') },
        { to: '/about',     label: t('Navbar.links.about') },
        { to: '/contact',   label: t('Navbar.links.contact') },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="logo-link">
                    <img src={Logo} alt="Logo portafolio" className="logo-image" />
                </Link>

                {/* Hamburguesa (mobile) */}
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>

                <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                className={location.pathname === to ? 'active' : ''}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="language-switcher">
                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;