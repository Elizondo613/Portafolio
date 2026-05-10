import '../styles/Contact.css';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
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

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.name.trim()) { toast.error(t('Contact.pleaseName')); return false; }
        if (!emailRegex.test(formData.email)) { toast.error(t('Contact.pleaseEmail')); return false; }
        if (!formData.message.trim()) { toast.error(t('Contact.pleaseMessage')); return false; }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            setIsSubmitting(true);
            const recaptchaToken = await window.grecaptcha.execute(
                import.meta.env.VITE_RECAPTCHA_SITE_KEY,
                { action: 'submit' }
            );
            const templateParams = {
                from_name: formData.name,
                reply_to: formData.email,
                message: formData.message,
                'g-recaptcha-response': recaptchaToken
            };
            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            if (response.status === 200) {
                toast.success(t('Contact.success'));
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error(t('Contact.error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: '📧', label: 'Email', value: 'elizondo613dev@gmail.com' },
        { icon: '💬', label: 'WhatsApp', value: '+502 5811-9510' },
        { icon: '🌐', label: 'GitHub', value: 'github.com/Elizondo613' },
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-stars" ref={starsRef}></div>

            <div className="container">
                <h2 className="section-title">{t('Contact.contact')}</h2>

                <div className="contact-layout">
                    {/* Info lateral */}
                    <div className="contact-info">
                        <h3 className="contact-info-title">{t('Contact.letsConnect')}</h3>
                        <p className="contact-info-desc">{t('Contact.infoDesc')}</p>
                        <div className="contact-info-items">
                            {contactInfo.map(({ icon, label, value }) => (
                                <div key={label} className="contact-info-item">
                                    <span className="contact-info-icon">{icon}</span>
                                    <div>
                                        <span className="contact-info-label">{label}</span>
                                        <span className="contact-info-value">{value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact-socials">
                            <a href="https://github.com/Elizondo613" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://www.instagram.com/javi_elizondo_613/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://discord.gg/vEHUF2ZkUn" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
                        </div>
                    </div>

                    {/* Formulario */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t('Contact.name')}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t('Contact.message')}
                                rows="6"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`btn btn-primary ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {t('Contact.send')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;