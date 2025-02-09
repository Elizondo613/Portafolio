import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';

const Home = () => {
    const { t } = useTranslation();

    // Función para generar estrellas dinámicamente
    const generateStars = () => {
        const starsContainer = document.querySelector('.stars-container');
        if (!starsContainer) return; // Asegurarse de que el contenedor exista

        const numberOfStars = 50; // Número de estrellas a generar

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            // Posición aleatoria
            const x = Math.random() * 100; // Posición horizontal (0% a 100%)
            const y = Math.random() * 100; // Posición vertical (0% a 100%)

            // Duración de la animación aleatoria
            const duration = Math.random() * 2 + 1; // Entre 1 y 3 segundos

            // Asignar estilos
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.animationDuration = `${duration}s`;

            // Agregar la estrella al contenedor
            starsContainer.appendChild(star);
        }
    };

    // Usar useEffect para ejecutar el script después de que el componente se monte
    useEffect(() => {
        generateStars();
    }, []); // El array vacío asegura que esto solo se ejecute una vez

    return (
        <section id="home" className="home-section">
            {/* Contenido principal */}
            <div className="home-content">
                <h1 className="title">
                    <span className="greeting">{t('home.greeting')}</span>
                    <span className="name">Javier Elizondo</span>
                </h1>
                <p className="subtitle">{t('home.profession')}</p>
                <div className="cta-buttons">
                    <a href="#portfolio" className="btn btn-primary">{t('home.buttons.projects')}</a>
                    <a href="#contact" className="btn btn-secondary">{t('home.buttons.contact')}</a>
                </div>
            </div>

            {/* Fondo con efectos */}
            <div className="home-background">
                <div className="gradient-circle"></div>
                <div className="gradient-circle-2"></div>
                {/* Contenedor para las estrellas */}
                <div className="stars-container"></div>
            </div>
        </section>
    );
};

export default Home;