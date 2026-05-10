import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

const Contact = () => {
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

    const WHATSAPP_NUMBER = '50258119510';
    const WHATSAPP_MESSAGE = encodeURIComponent(t('Contact.whatsappMessage'));
    const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

    const contactInfo = [
        {
            icon: '💬',
            label: 'WhatsApp',
            value: '+502 5811-9510',
            href: WHATSAPP_URL,
        },
        {
            icon: '🌐',
            label: 'GitHub',
            value: 'github.com/Elizondo613',
            href: 'https://github.com/Elizondo613',
        },
        {
            icon: '🛒',
            label: 'Tienda',
            value: 'payhip.com/CodeXela',
            href: 'https://payhip.com/CodeXela',
        },
    ];

    const socials = [
        { href: 'https://github.com/Elizondo613',                        icon: 'fab fa-github',    label: 'GitHub' },
        { href: 'https://www.instagram.com/javi_elizondo_613/',          icon: 'fab fa-instagram', label: 'Instagram' },
        { href: 'https://www.linkedin.com/in/jose-javier-elizondo-mendoza-063783331',     icon: 'fab fa-linkedin',  label: 'LinkedIn' },
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-stars" ref={starsRef}></div>

            <div className="container">
                <h2 className="section-title">{t('Contact.contact')}</h2>

                <div className="contact-layout">

                    {/* ── Columna izquierda: info ── */}
                    <div className="contact-info">
                        <h3 className="contact-info-title">{t('Contact.letsConnect')}</h3>
                        <p className="contact-info-desc">{t('Contact.infoDesc')}</p>

                        <div className="contact-info-items">
                            {contactInfo.map(({ icon, label, value, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-info-item"
                                >
                                    <span className="contact-info-icon">{icon}</span>
                                    <div>
                                        <span className="contact-info-label">{label}</span>
                                        <span className="contact-info-value">{value}</span>
                                    </div>
                                    <span className="contact-info-arrow">→</span>
                                </a>
                            ))}
                        </div>

                        <div className="contact-socials">
                            {socials.map(({ href, icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                >
                                    <i className={icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Columna derecha: CTA WhatsApp ── */}
                    <div className="contact-cta">
                        <div className="contact-cta-card">
                            <div className="contact-cta-icon">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <h3 className="contact-cta-title">{t('Contact.cta.title')}</h3>
                            <p className="contact-cta-desc">{t('Contact.cta.desc')}</p>

                            <div className="contact-cta-chips">
                                <span>{t('Contact.cta.chip1')}</span>
                                <span>{t('Contact.cta.chip2')}</span>
                                <span>{t('Contact.cta.chip3')}</span>
                            </div>

                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-whatsapp-btn"
                            >
                                <i className="fab fa-whatsapp"></i>
                                {t('Contact.cta.button')}
                            </a>

                            <p className="contact-cta-note">{t('Contact.cta.note')}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;