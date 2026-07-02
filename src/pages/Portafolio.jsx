import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../styles/Portafolio.css';
import PropTypes from 'prop-types';

import img1 from '../assets/Pyro.png';
import img2 from '../assets/Pyro2.jpg';
import img3 from '../assets/Pyro3.jpg';
import img4 from '../assets/CasaL.jpg';
import img5 from '../assets/CasaL2.jpg';
import img6 from '../assets/CasaL3.jpg';
import img7 from '../assets/CasaL4.jpg';
import img8 from '../assets/CasaL5.jpg';
import img9 from '../assets/Loteria.jpg';
import img10 from '../assets/Loteria2.jpg';
import img11 from '../assets/Loteria3.jpg';
import img12 from '../assets/Buffalo.jpg';
import img13 from '../assets/Buffalo2.jpg';
import img14 from '../assets/Buffalo3.jpg';
import img15 from '../assets/Buffalo4.jpg';
import img16 from '../assets/ScreenCinema.png';
import img17 from '../assets/ScreenCinema2.png';
import img18 from '../assets/ScreenCinema3.png';
import img19 from '../assets/ScreenCinema4.png';
import img20 from '../assets/Compilador.png';
import img21 from '../assets/Compilador2.png';
import img22 from '../assets/Compilador3.png';
import img23 from '../assets/Compilador4.png';

const ProjectRow = ({ project, index }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const isReversed = index % 2 !== 0;

    const nextImage = () =>
        setCurrentImage(prev => (prev + 1) % project.images.length);
    const prevImage = () =>
        setCurrentImage(prev => (prev - 1 + project.images.length) % project.images.length);

    return (
        <div className={`project-row ${isReversed ? 'project-row--reversed' : ''}`}>

            {/* Lado imágenes */}
            <div className="project-row-media">
                <div className="project-row-carousel">
                    <img
                        src={project.images[currentImage]}
                        alt={`${project.title} - ${currentImage + 1}`}
                        className="project-row-img"
                    />

                    {project.images.length > 1 && (
                        <>
                            <div className="project-row-controls">
                                <button onClick={prevImage} className="project-row-nav">
                                    <ChevronLeft />
                                </button>
                                <button onClick={nextImage} className="project-row-nav">
                                    <ChevronRight />
                                </button>
                            </div>
                            <div className="project-row-dots">
                                {project.images.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`project-row-dot ${i === currentImage ? 'active' : ''}`}
                                        onClick={() => setCurrentImage(i)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Lado info */}
            <div className="project-row-info">
                <span className="project-row-number">0{index + 1}</span>
                <h3 className="project-row-title">{project.title}</h3>
                <p className="project-row-desc">{project.description}</p>
                <div className="project-row-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="project-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

ProjectRow.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

const Portafolio = () => {
    const { t } = useTranslation();
    const starsRef = useRef(null);

    useEffect(() => {
        const container = starsRef.current;
        if (!container) return;
        container.innerHTML = '';
        for (let i = 0; i < 50; i++) {
            const point = document.createElement('div');
            point.classList.add('point');
            point.style.left = `${Math.random() * 100}%`;
            point.style.top = `${Math.random() * 100}%`;
            point.style.animationDuration = `${Math.random() * 2 + 1}s`;
            container.appendChild(point);
        }
    }, []);

    const projects = [
        {
            title: 'Buffalo Licores',
            description: t('Portafolio.descriptions.description4'),
            images: [img12, img13, img14, img15],
            tags: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Node.js', 'Express'],
        },
        {
            title: 'Casa de leyendas',
            description: t('Portafolio.descriptions.description2'),
            images: [img4, img5, img6, img7, img8],
            tags: ['React', 'HTML', 'Tailwind CSS', 'Firebase', 'MongoDB', 'Node.js', 'Express'],
        },
        {
            title: 'Lotería',
            description: t('Portafolio.descriptions.description3'),
            images: [img9, img10, img11],
            tags: ['React', 'HTML', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express'],
        },
        {
            title: 'Pyrobpo',
            description: t('Portafolio.descriptions.description1'),
            images: [img1, img2, img3],
            tags: ['PHP', 'HTML', 'Tailwind CSS'],
        },
        {
            title: 'CinemaGT',
            description: t('Portafolio.descriptions.description5'),
            images: [img16, img17, img18, img19],
            tags: ['React', 'Vite', 'CSS3', 'Firebase'],
        },
        {
            title: 'Compilador',
            description: t('Portafolio.descriptions.description6'),
            images: [img20, img21, img22, img23],
            tags: ['Python', 'C++', 'Qt'],
        }
    ];

    return (
        <section className="portfolio-section">
            <div className="stars-port-container" ref={starsRef}></div>

            <div className="portfolio-container">
                <h2 className="section-title">{t('Portafolio.project')}</h2>
                <p className="portfolio-subtitle">{t('Portafolio.text')}</p>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <ProjectRow key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portafolio;