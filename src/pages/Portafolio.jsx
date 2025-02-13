import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Portafolio.css';
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
import { useTranslation } from 'react-i18next';

const Portafolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useTranslation();

  const generateStars = () => {
    const starsContainer = document.querySelector('.stars-port-container');
    if (!starsContainer) return;

    const numberOfStars = 50;
    for (let i = 0; i < numberOfStars; i++) {
      const point = document.createElement('div');
      point.classList.add('point');
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 2 + 1;
      point.style.left = `${x}%`;
      point.style.top = `${y}%`;
      point.style.animationDuration = `${duration}s`;
      starsContainer.appendChild(point);
    }
  };

  useEffect(() => {
    generateStars();
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
  ];

  const nextProject = () => {
    setCurrentProject((prev) => prev === projects.length - 1 ? 0 : prev + 1);
    setCurrentImage(0);
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => prev === 0 ? projects.length - 1 : prev - 1);
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
              <div className="project-image-wrapper">
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
                        className={`image-indicator ${idx === currentImage ? 'active' : ''}`}
                        onClick={() => setCurrentImage(idx)}
                      />
                    ))}
                  </div>
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
            <div className="padd"></div>
            <div className="carousel-indicators">
              <button className="nav-arrow left" onClick={prevProject}>
                <ChevronLeft />
              </button>
              {(() => {
                let start = Math.max(0, currentProject - 1);
                let end = Math.min(projects.length, start + 3);
                if (end === projects.length) {
                  start = Math.max(0, end - 3);
                }
                
                return Array.from({ length: end - start }, (_, i) => {
                  const idx = start + i;
                  return (
                    <button
                      key={idx}
                      className={`carousel-indicator ${idx === currentProject ? 'active' : ''}`}
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
              <button className="nav-arrow right" onClick={nextProject}>
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