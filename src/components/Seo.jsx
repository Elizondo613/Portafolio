import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SITE_URL = import.meta.env.VITE_SITE_URL;

// Clave de traducción (Seo.pages.<key>) por ruta
const PAGE_KEYS = {
    '/': 'home',
    '/games': 'games',
    '/workshop': 'workshop',
    '/templates': 'templates',
    '/portfolio': 'portfolio',
    '/about': 'about',
    '/contact': 'contact',
};

// Crea o actualiza un <meta> o <link> del <head>
const setTag = (selector, create, attr, value) => {
    let el = document.head.querySelector(selector);
    if (!el) {
        el = create();
        document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
};
const setMeta = (key, value, attr = 'name') =>
    setTag(`meta[${attr}="${key}"]`, () => {
        const m = document.createElement('meta');
        m.setAttribute(attr, key);
        return m;
    }, 'content', value);

// Título, descripción, canonical, Open Graph e idioma por página
const Seo = () => {
    const { pathname } = useLocation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const known = pathname in PAGE_KEYS;
        const key = known ? PAGE_KEYS[pathname] : 'notFound';
        const lang = i18n.language?.startsWith('en') ? 'en' : 'es';
        const brand = 'Kemet Studio';
        const title = key !== 'home'
            ? `${t(`Seo.pages.${key}.title`)} | ${brand}`
            : t('Seo.pages.home.title');
        const description = t(`Seo.pages.${key}.description`);
        const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

        document.documentElement.lang = lang;
        document.title = title;
        setMeta('description', description);
        setMeta('robots', known ? 'index, follow' : 'noindex, follow');
        setTag('link[rel="canonical"]', () => {
            const l = document.createElement('link');
            l.rel = 'canonical';
            return l;
        }, 'href', url);

        setMeta('og:title', title, 'property');
        setMeta('og:description', description, 'property');
        setMeta('og:url', url, 'property');
        setMeta('og:locale', lang === 'en' ? 'en_US' : 'es_GT', 'property');
        setMeta('twitter:title', title);
        setMeta('twitter:description', description);
    }, [pathname, t, i18n.language]);

    return null;
};

export default Seo;
