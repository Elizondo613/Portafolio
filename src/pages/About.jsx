import { useEffect, useRef } from 'react';
import '../styles/About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
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

    const skillCategories = [
        {
            category: 'Frontend',
            icon: '🎨',
            skills: ['React', 'Vite', 'TypeScript', 'Next.js', 'Tailwind CSS', 'ShadCN/UI', 'HTML', 'CSS']
        },
        {
            category: 'Backend',
            icon: '⚙️',
            skills: ['Django REST Framework', 'Node.js', 'Express', 'PHP', 'Python', 'PostgreSQL', 'MongoDB', 'Firebase']
        },
        {
            category: t('About.skills.gamedev'),
            icon: '🎮',
            skills: ['JavaScript Canvas', 'Phaser', 'Firebase', 'Pixel Art 2D', 'React + TypeScript']
        },
        {
            category: t('About.skills.cybersec'),
            icon: '🔐',
            skills: ['Auditoría de vulnerabilidades', 'Hacking Ético', 'BeEF', 'SET', 'Cisco Networking', 'Kali Linux']
        },
        {
            category: 'Tools',
            icon: '🛠️',
            skills: ['Git / GitHub', 'Docker', 'Netlify', 'Linux', 'Metodologías Ágiles']
        },
    ];

    const experience = [
        {
            role: t('About.experience.erp.role'),
            company: 'Asociación CDRO / URL',
            period: '2025 – Presente',
            desc: t('About.experience.erp.desc'),
            tags: ['Django REST', 'PostgreSQL', 'React', 'Docker'],
        },
        {
            role: t('About.experience.buffalo.role'),
            company: 'Buffalo Licores / Licores Don Roca',
            period: '2023 – 2024',
            desc: t('About.experience.buffalo.desc'),
            tags: ['Node.js', 'PHP', 'MongoDB'],
        },
        {
            role: t('About.experience.casaleyendas.role'),
            company: 'Lluvia de Ideas',
            period: '2024 – 2025',
            desc: t('About.experience.casaleyendas.desc'),
            tags: ['React', 'Firebase', 'MongoDB', 'Node.js'],
        },
    ];

    const education = [
        {
            title: 'Certified in Cybersecurity (CC)',
            institution: 'ISC2',
            period: t('About.education.isc2.period'),
            icon: '🔐',
        },
        {
            title: t('About.education.cisco.title'),
            institution: 'Cisco Networking Academy',
            period: '2024',
            icon: '🌐',
        },
        {
            title: t('About.education.platzi.title'),
            institution: 'Platzi',
            period: '2022 – Presente',
            icon: '💻',
        },
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-stars" ref={starsRef}></div>

            <div className="container">
                <h2 className="section-title">{t('About.about')}</h2>

                {/* ── Bio + Stats ── */}
                <div className="about-bio">
                    <div className="about-bio-text">
                        <p>{t('About.description')}</p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card">
                            <span className="stat-number">4+</span>
                            <span className="stat-label">{t('About.stats.years')}</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">{t('About.stats.projects')}</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">{t('About.stats.games')}</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">{t('About.stats.products')}</span>
                        </div>
                    </div>
                </div>

                {/* ── Skills ── */}
                <div className="about-block">
                    <h3 className="about-block-title">{t('About.technology')}</h3>
                    <div className="skill-categories">
                        {skillCategories.map(({ category, icon, skills }) => (
                            <div key={category} className="skill-category-card">
                                <div className="skill-category-header">
                                    <span className="skill-category-icon">{icon}</span>
                                    <h4>{category}</h4>
                                </div>
                                <div className="skill-tags">
                                    {skills.map(skill => (
                                        <span key={skill} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Experiencia ── */}
                <div className="about-block">
                    <h3 className="about-block-title">{t('About.experience.title')}</h3>
                    <div className="timeline">
                        {experience.map((item, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h4 className="timeline-role">{item.role}</h4>
                                        <span className="timeline-period">{item.period}</span>
                                    </div>
                                    <span className="timeline-company">{item.company}</span>
                                    <p className="timeline-desc">{item.desc}</p>
                                    <div className="timeline-tags">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="skill-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Educación ── */}
                <div className="about-block">
                    <h3 className="about-block-title">{t('About.education.title')}</h3>
                    <div className="education-grid">
                        {education.map((item, i) => (
                            <div key={i} className="education-card">
                                <span className="education-icon">{item.icon}</span>
                                <div className="education-info">
                                    <h4>{item.title}</h4>
                                    <span className="education-institution">{item.institution}</span>
                                    <span className="education-period">{item.period}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;