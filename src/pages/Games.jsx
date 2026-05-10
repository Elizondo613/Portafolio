import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../styles/Games.css';
import PropTypes from 'prop-types';

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
import img14 from '../assets/Space_runner.png';
import img15 from '../assets/Space_runner2.png';
import img16 from '../assets/Space_runner3.png';
import img17 from '../assets/Space_runner4.png';

const GameRow = ({ game, index }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const isReversed = index % 2 !== 0;

    const nextImage = () =>
        setCurrentImage(prev => (prev + 1) % game.images.length);
    const prevImage = () =>
        setCurrentImage(prev => (prev - 1 + game.images.length) % game.images.length);

    return (
        <div className={`game-row ${isReversed ? 'game-row--reversed' : ''}`}>

            {/* Lado imágenes */}
            <div className="game-row-media">
                <div className="game-row-carousel">
                    <img
                        src={game.images[currentImage]}
                        alt={`${game.title} - ${currentImage + 1}`}
                        className="game-row-img"
                    />

                    {game.images.length > 1 && (
                        <>
                            <div className="game-row-controls">
                                <button onClick={prevImage} className="game-row-nav">
                                    <ChevronLeft />
                                </button>
                                <button onClick={nextImage} className="game-row-nav">
                                    <ChevronRight />
                                </button>
                            </div>
                            <div className="game-row-dots">
                                {game.images.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`game-row-dot ${i === currentImage ? 'active' : ''}`}
                                        onClick={() => setCurrentImage(i)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Botón jugar debajo de la imagen */}
                <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="game-play-btn"
                >
                    ▶ {game.playLabel}
                </a>
            </div>

            {/* Lado info */}
            <div className="game-row-info">
                <span className="game-row-number">0{index + 1}</span>
                <h3 className="game-row-title">{game.title}</h3>
                <p className="game-row-desc">{game.description}</p>
                <div className="game-row-tags">
                    {game.tags.map(tag => (
                        <span key={tag} className="game-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

GameRow.propTypes = {
    game: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        link: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        playLabel: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

const GamesShowcase = () => {
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

    const games = [
        {
            title: 'Memoria',
            description: t('Games.descriptions.description1'),
            images: [img1, img2, img3],
            link: 'https://elizondo613.github.io/Juego-Memoria/',
            tags: ['HTML5', 'CSS Canvas', 'JavaScript'],
            playLabel: t('Games.play'),
        },
        {
            title: 'Space Invasors',
            description: t('Games.descriptions.description2'),
            images: [img4, img5, img6],
            link: 'https://elizondo613.github.io/Juego-Space-Invation/',
            tags: ['HTML5', 'CSS Canvas', 'JavaScript'],
            playLabel: t('Games.play'),
        },
        {
            title: 'Pixel Penguin',
            description: t('Games.descriptions.description3'),
            images: [img7, img8, img9],
            link: 'https://elizondo613.github.io/Pixel-Penguin/',
            tags: ['HTML5', 'CSS Canvas', 'JavaScript'],
            playLabel: t('Games.play'),
        },
        {
            title: 'Pixel Farmer',
            description: t('Games.descriptions.description4'),
            images: [img10, img11, img12, img13],
            link: 'https://elizondo613.github.io/Pixel-Farmer/',
            tags: ['HTML5', 'CSS Canvas', 'JavaScript'],
            playLabel: t('Games.play'),
        },
        {
            title: 'Space Runner',
            description: t('Games.descriptions.description5'),
            images: [img14, img15, img16, img17],
            link: 'https://elizondo613.github.io/Space_Race/',
            tags: ['HTML5', 'CSS', 'JavaScript'],
            playLabel: t('Games.play'),
        },
    ];

    return (
        <section className="games-section">
            <div className="stars-games-container" ref={starsRef}></div>

            <div className="games-container">
                <h2 className="section-title">{t('Games.games')}</h2>
                <p className="games-text">{t('Games.text')}</p>

                <div className="games-list">
                    {games.map((game, index) => (
                        <GameRow key={game.title} game={game} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GamesShowcase;