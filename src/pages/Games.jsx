import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../styles/Games.css';

import img1 from '../assets/Memory.jpg';
import img2 from '../assets/Memory2.jpg';
import img3 from '../assets/Memory3.jpg';
import img4 from '../assets/Space.jpg';
import img5 from '../assets/Space2.jpg';
import img6 from '../assets/Space3.jpg';
import img7 from '../assets/Penguin.jpg';
import img8 from '../assets/Penguin2.jpg';
import img9 from '../assets/Penguin3.jpg';
import img10 from '../assets/Farm.jpg';
import img11 from '../assets/Farm2.jpg';
import img12 from '../assets/Farm3.jpg';
import img13 from '../assets/Farm4.jpg';

const GamesShowcase = () => {
  const [currentGame, setCurrentGame] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useTranslation();

  const generateStars = () => {
    const starsContainer = document.querySelector('.stars-games-container');
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

  const games = [
    {
      title: 'Memoria',
      description: t('Games.descriptions.description1'),
      images: [img1, img2, img3],
      link: 'https://elizondo613.github.io/Juego-Memoria/',
      tags: ['HTML5', 'CSS Canvas', 'JavaScript'],
    },
    {
        title: 'Space Invasors',
        description: t('Games.descriptions.description2'),
        images: [img4, img5, img6],
        link: 'https://elizondo613.github.io/Juego-Space-Invation/',
        tags: ['HTML5', 'CSS Canvas', 'JavaScript'],
    },
    {
        title: 'Pixel Penguin',
        description: t('Games.descriptions.description3'),
        images: [img7, img8, img9],
        link: 'https://elizondo613.github.io/Pixel-Penguin/',
        tags: ['HTML5', 'CSS Canvas', 'JavaScript'],
    },
    {
        title: 'Pixel Farmer',
        description: t('Games.descriptions.description4'),
        images: [img10, img11, img12, img13],
        link: 'https://elizondo613.github.io/Pixel-Farmer/',
        tags: ['HTML5', 'CSS Canvas', 'JavaScript'],
    },
  ];

  const nextGame = () => {
    setCurrentGame((prev) => (prev + 1) % games.length);
    setCurrentImage(0); // Reset image index when changing games
  };

  const prevGame = () => {
    setCurrentGame((prev) => (prev - 1 + games.length) % games.length);
    setCurrentImage(0); // Reset image index when changing games
  };

  const nextImage = () => {
    setCurrentImage((prev) => 
      prev === games[currentGame].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) => 
      prev === 0 ? games[currentGame].images.length - 1 : prev - 1
    );
  };

  return (
    <section id="games" className="games-section">
      <div className="stars-games-container"></div>

      <div className="games-container">
        <h2 className="section-title">{t('Games.games')}</h2>
        <p className="games-text">{t('Games.text')}</p>

        <div className="games-showcase">
          <div className="game-card">
            <div className="game-frame">
              <div className="game-image-carousel">
                <img 
                  src={games[currentGame].images[currentImage]} 
                  alt={`${games[currentGame].title} - ${currentImage + 1}`} 
                  className="game-image" 
                />
                
                <div className="image-controls">
                  <button onClick={prevImage} className="image-nav-button">
                    <ChevronLeft />
                  </button>
                  <button onClick={nextImage} className="image-nav-button">
                    <ChevronRight />
                  </button>
                </div>

                <div className="image-indicators">
                  {games[currentGame].images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`image-dot ${idx === currentImage ? 'active' : ''}`}
                      onClick={() => setCurrentImage(idx)}
                      aria-label={`Image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="game-info">
              <h3>{games[currentGame].title}</h3>
              <p>{games[currentGame].description}</p>
              <div className="game-tags">
                {games[currentGame].tags.map((tag, i) => (
                  <span key={i} className="game-tag">{tag}</span>
                ))}
              </div>
                <a href={games[currentGame].link} target="_blank" rel="noopener noreferrer" className="play-button">
                    {t('Games.play')}
                </a>
            </div>
          </div>

          <div className="games-navigation">
            <button className="carousel-nav-button prev" onClick={prevGame}>
              <ChevronLeft />
            </button>
            <div className="games-indicators">
              {games.map((_, index) => (
                <button
                  key={index}
                  className={`game-indicator ${index === currentGame ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentGame(index);
                    setCurrentImage(0);
                  }}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button className="carousel-nav-button next" onClick={nextGame}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesShowcase;