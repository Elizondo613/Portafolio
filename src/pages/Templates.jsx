import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Templates.css';
import image1 from '../assets/PreviewImageAura.png';
import image2 from '../assets/PreviewImageCyber.png';
import image3 from '../assets/PreviewImageLumina.png';
import image4 from '../assets/PreviewImageNext.png';
import image5 from '../assets/PreviewImageVortex.png';

const Templates = () => {
    const [activeTab, setActiveTab] = useState('templates');
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

    // Aquí irás agregando tus templates reales
    const templates = [
        {
            id: 1,
            title: 'AURA — Bio-Link Premium HTML Template',
            description: t('Templates.items.example.desc'),
            preview: image1,
            tags: ['HTML', 'CSS', 'JavaScript'],
            price: '$15.00',
            link: 'https://payhip.com/CodeXela',
        },
        {
            id: 2,
            title: 'CyberSafe - Dark Cybersecurity & VPN HTML Template',
            description: t('Templates.items.example2.desc2'),
            preview: image2,
            tags: ['HTML', 'CSS', 'JavaScript'],
            price: '$19.00',
            link: 'https://payhip.com/CodeXela',
        },
        {
            id: 3,
            title: 'Lumina AI — SaaS & AI Product HTML Template',
            description: t('Templates.items.example3.desc3'),
            preview: image3,
            tags: ['HTML', 'CSS', 'JavaScript'],
            price: '$24.00',
            link: 'https://payhip.com/CodeXela',
        },
                {
            id: 4,
            title: 'NexVault — Crypto & Fintech Wallet HTML Template',
            description: t('Templates.items.example4.desc4'),
            preview: image4,
            tags: ['HTML', 'CSS', 'JavaScript'],
            price: '$29.00',
            link: 'https://payhip.com/CodeXela',
        },
                {
            id: 5,
            title: 'Vortex – E-Sports & Gaming Team HTML Template',
            description: t('Templates.items.example5.desc5'),
            preview: image5,
            tags: ['HTML', 'CSS', 'JavaScript'],
            price: '$19.00',
            link: 'https://payhip.com/CodeXela',
        },
    ];

    // Aquí irás agregando tus scripts reales
    const scripts = [
        {
            id: 1,
            title: 'Script Ejemplo',
            description: t('Templates.items.scriptExample.desc'),
            preview: null,
            tags: ['JavaScript'],
            price: '$4.99',
            link: 'https://payhip.com/CodeXela',
        },
    ];

    const items = activeTab === 'templates' ? templates : scripts;

    return (
        <section className="templates-section">
            <div className="templates-stars" ref={starsRef}></div>

            <div className="container">
                <h2 className="section-title">{t('Templates.title')}</h2>
                <p className="templates-subtitle">{t('Templates.subtitle')}</p>

                {/* Tabs */}
                <div className="templates-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'templates' ? 'active' : ''}`}
                        onClick={() => setActiveTab('templates')}
                    >
                        🎨 {t('Templates.tabs.templates')}
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'scripts' ? 'active' : ''}`}
                        onClick={() => setActiveTab('scripts')}
                    >
                        ⚡ {t('Templates.tabs.scripts')}
                    </button>
                </div>

                {/* Grid de cards */}
                <div className="templates-grid">
                    {items.map((item, i) => (
                        <div
                            key={item.id}
                            className="template-card"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {/* Preview imagen */}
                            <div className="template-preview">
                                {item.preview
                                    ? <img src={item.preview} alt={item.title} />
                                    : <div className="template-preview-placeholder">
                                        {activeTab === 'templates' ? '🎨' : '⚡'}
                                      </div>
                                }
                            </div>

                            {/* Info */}
                            <div className="template-info">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className="template-tags">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="template-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="template-footer">
                                    <span className="template-price">{item.price}</span>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary template-buy-btn"
                                    >
                                        {t('Templates.buy')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Templates;