import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import App from './App.jsx';
import './styles/global.css';

import translationES from './locales/es.json';
import translationEN from './locales/en.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                translation: translationES
            },
            en: {
                translation: translationEN
            }
        },
        lng: 'es', // idioma por defecto
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
