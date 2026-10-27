import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/NotFound.css';

const NotFound = () => {
    const { t } = useTranslation();
    return (
        <section className="notfound-section">
            <div className="container notfound-content">
                <h1 className="notfound-code">{t('NotFound.title')}</h1>
                <p>{t('NotFound.text')}</p>
                <Link to="/" className="btn btn-primary">{t('NotFound.button')}</Link>
            </div>
        </section>
    );
};

export default NotFound;
