import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Templates.css';
import '../styles/Workshop.css';
import {
    wallpapers,
    mods,
    TOTAL_SUBSCRIBERS,
    WORKSHOP_WALLPAPERS_URL,
    WORKSHOP_CS2_URL,
} from '../data/workshop';

const Workshop = () => {
    const [activeTab, setActiveTab] = useState('wallpapers');
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

    const isWallpapers = activeTab === 'wallpapers';
    const items = isWallpapers ? wallpapers : mods;
    const profileUrl = isWallpapers ? WORKSHOP_WALLPAPERS_URL : WORKSHOP_CS2_URL;
    const placeholderIcon = isWallpapers ? '🖼️' : '🗺️';

    return (
        <section className="templates-section workshop-section">
            <div className="templates-stars" ref={starsRef}></div>

            <div className="container">
                <h2 className="section-title">{t('Workshop.title')}</h2>
                <p className="templates-subtitle">{t('Workshop.subtitle')}</p>

                {/* Métrica de comunidad */}
                <div className="workshop-stat">
                    <span className="workshop-stat-number">{TOTAL_SUBSCRIBERS}</span>
                    <span className="workshop-stat-label">{t('Workshop.subscribers')}</span>
                </div>

                {/* Tabs */}
                <div className="templates-tabs">
                    <button
                        className={`tab-btn ${isWallpapers ? 'active' : ''}`}
                        onClick={() => setActiveTab('wallpapers')}
                    >
                        🖼️ {t('Workshop.tabs.wallpapers')}
                    </button>
                    <button
                        className={`tab-btn ${!isWallpapers ? 'active' : ''}`}
                        onClick={() => setActiveTab('mods')}
                    >
                        🗺️ {t('Workshop.tabs.mods')}
                    </button>
                </div>

                <div className="templates-grid">
                    {items.map((item, i) => {
                        const title = item.titleKey ? t(item.titleKey) : item.title;
                        const desc = item.descKey ? t(item.descKey) : item.description;
                        const isWip = item.status === 'wip';
                        return (
                            <div
                                key={item.id}
                                className="template-card"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="template-preview workshop-preview">
                                    {item.preview
                                        ? <img src={item.preview} alt={title} loading="lazy" />
                                        : <div className="template-preview-placeholder">{placeholderIcon}</div>
                                    }
                                    {isWip && (
                                        <span className="workshop-badge">{t('Workshop.wip')}</span>
                                    )}
                                </div>

                                <div className="template-info">
                                    <h3>{title}</h3>
                                    {desc && <p>{desc}</p>}
                                    <div className="template-tags">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="template-tag">{tag}</span>
                                        ))}
                                    </div>
                                    {item.link && (
                                        <div className="template-footer">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary template-buy-btn"
                                            >
                                                <i className="fab fa-steam"></i> {t('Workshop.subscribe')}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    {/* Card final: ver todo en Steam */}
                    <a
                        href={profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="template-card workshop-cta-card"
                        style={{ animationDelay: `${items.length * 0.1}s` }}
                    >
                        <i className="fab fa-steam workshop-cta-icon"></i>
                        <h3>{t('Workshop.viewAll')}</h3>
                        <p>{t(isWallpapers ? 'Workshop.viewAllWallpapers' : 'Workshop.viewAllMods')}</p>
                        <span className="workshop-cta-arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Workshop;
