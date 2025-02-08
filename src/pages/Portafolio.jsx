import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Portafolio.css';
import img1 from '../assets/Pyro.png'

const Portafolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  
  const projects = [
    {
      title: 'Pyrobpo',
      description: 'Landing page para Pyro Communications',
      images: [
        img1,
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600'
      ],
      tags: ['PHP', 'HTML', 'Tailwind CSS']
    },
    {
      title: 'Casa de leyendas',
      description: 'Juego interactivo multijugador para el juego de mesa Casa de Leyendas',
      images: [
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600'
      ],
      tags: ['React', 'HTML', 'Tailwind CSS', 'Firebase']
    },
    {
      title: 'Lotería',
      description: 'Juego de tombola Lotería Las Leyendas',
      images: [
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600'
      ],
      tags: ['React', 'HTML', 'Tailwind CSS']
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => 
        prev === projects.length - 1 ? 0 : prev + 1
      );
      setCurrentImage(0);
    }, 5000);

    return () => clearInterval(timer);
  }, [projects.length]);

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
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        <p className='text-port'>Acá encontrarás mis proyectos realizados, de hecho ¡esta misma página es uno de ellos!</p>
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
                      className={`image-indicator ${idx === currentImage ? 'active' : ''}`}
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
          <div className="carousel-indicators">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-indicator ${idx === currentProject ? 'active' : ''}`}
                onClick={() => {
                  setCurrentProject(idx);
                  setCurrentImage(0);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio;