import { useTranslation } from 'react-i18next';
import { KOFI_URL } from '../data/support';
import '../styles/SupportBanner.css';

// Banner de apoyo con Ko-fi. No se renderiza si no hay usuario configurado.
const SupportBanner = () => {
    const { t } = useTranslation();
    if (!KOFI_URL) return null;

    return (
        <div className="support-banner">
            <span className="support-banner-icon" aria-hidden="true">☕</span>
            <div className="support-banner-text">
                <h3>{t('Support.title')}</h3>
                <p>{t('Support.desc')}</p>
            </div>
            <a
                href={KOFI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary support-banner-btn"
            >
                {t('Support.button')}
            </a>
        </div>
    );
};

export default SupportBanner;
