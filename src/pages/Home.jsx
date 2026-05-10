import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';

const Home = () => {
    const { t } = useTranslation();
    const starsRef = useRef(null);

    useEffect(() => {
        const container = starsRef.current;
        if (!container) return;
        container.innerHTML = '';
        for (let i = 0; i < 80; i++) {
            const point = document.createElement('div');
            point.classList.add('point');
            point.style.left = `${Math.random() * 100}%`;
            point.style.top = `${Math.random() * 100}%`;
            point.style.animationDuration = `${Math.random() * 3 + 1}s`;
            point.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(point);
        }
    }, []);

    const categories = [
        {
            key:      'games',
            to:       '/games',
            icon:     '🎮',
            titleKey: 'home.categories.games.title',
            descKey:  'home.categories.games.desc',
        },
        {
            key:      'templates',
            to:       '/templates',
            icon:     '🎨',
            titleKey: 'home.categories.templates.title',
            descKey:  'home.categories.templates.desc',
        },
        {
            key:      'portfolio',
            to:       '/portfolio',
            icon:     '💼',
            titleKey: 'home.categories.portfolio.title',
            descKey:  'home.categories.portfolio.desc',
        },
        {
            key:      'about',
            to:       '/about',
            icon:     '👤',
            titleKey: 'home.categories.about.title',
            descKey:  'home.categories.about.desc',
        },
    ];

    return (
        <section id="home" className="home-section">

            {/* ── Fondo ── */}
            <div className="home-background">
                <div className="gradient-circle"></div>
                <div className="gradient-circle-2"></div>
                <div className="gradient-circle-3"></div>
                <div className="stars-container" ref={starsRef}></div>
            </div>

            {/* ── Hero ── */}
            <div className="home-content">

                {/* Badge de marca */}
                <div className="brand-badge">
                    <span className="brand-badge-dot"></span>
                    {t('home.badge')}
                </div>

                <h1 className="home-title">
                    <span className="home-title-studio">Kemet</span>
                    <span className="home-title-accent">Studio</span>
                </h1>

                <p className="home-tagline">{t('home.tagline')}</p>
                <p className="subtitle">{t('home.subtitle')}</p>

                <div className="cta-buttons">
                    <Link to="/portfolio" className="btn btn-primary">
                        {t('home.buttons.projects')}
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                        {t('home.buttons.contact')}
                    </Link>
                </div>

                {/* Métricas rápidas */}
                <div className="home-metrics">
                    <div className="home-metric">
                        <span className="home-metric-number">4+</span>
                        <span className="home-metric-label">{t('home.metrics.years')}</span>
                    </div>
                    <div className="home-metric-divider"></div>
                    <div className="home-metric">
                        <span className="home-metric-number">5+</span>
                        <span className="home-metric-label">{t('home.metrics.games')}</span>
                    </div>
                    <div className="home-metric-divider"></div>
                    <div className="home-metric">
                        <span className="home-metric-number">5+</span>
                        <span className="home-metric-label">{t('home.metrics.projects')}</span>
                    </div>
                    <div className="home-metric-divider"></div>
                    <div className="home-metric">
                        <span className="home-metric-number">3+</span>
                        <span className="home-metric-label">{t('home.metrics.products')}</span>
                    </div>
                </div>
            </div>

            {/* ── Categorías ── */}
            <div className="home-categories">
                <p className="categories-eyebrow">{t('home.categories.eyebrow')}</p>
                <h2 className="categories-title">{t('home.categories.title')}</h2>
                <div className="categories-grid">
                    {categories.map(({ key, to, icon, titleKey, descKey }, i) => (
                        <Link
                            to={to}
                            key={key}
                            className="category-card"
                            style={{ animationDelay: `${i * 0.12}s` }}
                        >
                            <span className="category-icon">{icon}</span>
                            <h3>{t(titleKey)}</h3>
                            <p>{t(descKey)}</p>
                            <span className="category-arrow">→</span>
                        </Link>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Home;