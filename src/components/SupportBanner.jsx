import { useTranslation } from 'react-i18next';
import { KOFI_URL } from '../data/support';
import PropTypes from 'prop-types';
import '../styles/SupportBanner.css';

// Banner de apoyo con Ko-fi. No se renderiza si no hay usuario configurado.
const SupportBanner = ({ variant = 'default' }) => {
    const { t } = useTranslation();
    if (!KOFI_URL) return null;
    const k = variant === 'games' ? 'Support.games' : 'Support';

    return (
        <div className="support-banner">
            <span className="support-banner-icon" aria-hidden="true">☕</span>
            <div className="support-banner-text">
                <h3>{t(`${k}.title`)}</h3>
                <p>{t(`${k}.desc`)}</p>
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

SupportBanner.propTypes = {
    variant: PropTypes.oneOf(['default', 'games']),
};

export default SupportBanner;
