import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Portafolio.css';
import img1 from '../assets/Pyro.png';
import { useTranslation } from 'react-i18next';

const Portafolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useTranslation();

  // Función para generar estrellas dinámicamente
  const generateStars = () => {
    const starsContainer = document.querySelector('.stars-port-container');
    if (!starsContainer) return; // Asegurarse de que el contenedor exista

    const numberOfStars = 50; // Número de estrellas a generar
    for (let i = 0; i < numberOfStars; i++) {
      const point = document.createElement('div');
      point.classList.add('point');

      // Posición aleatoria
      const x = Math.random() * 100; // Posición horizontal (0% a 100%)
      const y = Math.random() * 100; // Posición vertical (0% a 100%)

      // Duración de la animación aleatoria
      const duration = Math.random() * 2 + 1; // Entre 1 y 3 segundos

      // Asignar estilos
      point.style.left = `${x}%`;
      point.style.top = `${y}%`;
      point.style.animationDuration = `${duration}s`;

      // Agregar la estrella al contenedor
      starsContainer.appendChild(point);

      console.log(`Estrella ${i + 1} creada`); // Verifica en la consola
    }
  };

  // Usar useEffect para ejecutar el script después de que el componente se monte
  useEffect(() => {
    generateStars();
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  const projects = [
    {
      title: 'Pyrobpo',
      description: t('Portafolio.descriptions.description1'),
      images: [
        img1,
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
      ],
      tags: ['PHP', 'HTML', 'Tailwind CSS'],
    },
    {
      title: 'Casa de leyendas',
      description: t('Portafolio.descriptions.description2'),
      images: [
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
      ],
      tags: ['React', 'HTML', 'Tailwind CSS', 'Firebase'],
    },
    {
      title: 'Lotería',
      description: t('Portafolio.descriptions.description3'),
      images: [
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
      ],
      tags: ['React', 'HTML', 'Tailwind CSS'],
    },
  ];

  // Funciones para navegar entre proyectos
  const nextProject = () => {
    setCurrentProject((prev) => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
    setCurrentImage(0);
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
    setCurrentImage(0);
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === projects[currentProject].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? projects[currentProject].images.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="stars-port-container"></div>

      <div className="container">
        <h2 className="section-title">{t('Portafolio.project')}</h2>
        <p className="about-text">{t('Portafolio.text')}</p>
        <div className="carousel-container">
          <div className="project-carousel">
            <div className="project-card active">
              <div className="project-image-carousel">
                <img
                  src={projects[currentProject].images[currentImage]}
                  alt={projects[currentProject].title}
                />
                <div className="image-controls">
                  <button onClick={prevImage} className="carousel-button">
                    <ChevronLeft />
                  </button>
                  <button onClick={nextImage} className="carousel-button">
                    <ChevronRight />
                  </button>
                </div>
                <div className="image-indicators">
                  {projects[currentProject].images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`image-indicator ${
                        idx === currentImage ? 'active' : ''
                      }`}
                      onClick={() => setCurrentImage(idx)}
                    />
                  ))}
                </div>
              </div>
              <div className="project-info">
                <h3>{projects[currentProject].title}</h3>
                <p>{projects[currentProject].description}</p>
                <div className="project-tags">
                  {projects[currentProject].tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="carousel-navigation"> 
          <div className='padd'></div>
            <div className="carousel-indicators">
              <button 
                className="nav-arrow left"
                onClick={prevProject}
              >
                <ChevronLeft />
              </button>
              {(() => {
                // Calculamos qué números mostrar basados en la posición actual
                let start = Math.max(0, currentProject - 1);
                let end = Math.min(projects.length, start + 3);
                
                // Ajustamos el inicio si estamos cerca del final
                if (end === projects.length) {
                  start = Math.max(0, end - 3);
                }
                
                return Array.from({ length: end - start }, (_, i) => {
                  const idx = start + i;
                  return (
                    <button
                      key={idx}
                      className={`carousel-indicator ${
                        idx === currentProject ? 'active' : ''
                      }`}
                      onClick={() => {
                        setCurrentProject(idx);
                        setCurrentImage(0);
                      }}
                    >
                      {idx + 1}
                    </button>
                  );
                });
              })()}
              <button 
                className="nav-arrow right"
                onClick={nextProject}
                >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio;