// ─────────────────────────────────────────────────────────────
//  Contenido del Workshop (Steam)
//  Para agregar un item: copia un objeto, pon el link de Steam
//  (sharedfiles/filedetails/?id=...) y la imagen en src/assets/workshop/
// ─────────────────────────────────────────────────────────────

import brote from '../assets/workshop/brote-global.webp';
import nexus from '../assets/workshop/nexus-labs.webp';
import mando from '../assets/workshop/mando-conjunto.webp';
import grimorio from '../assets/workshop/grimorio-escriba.webp';
import reloj from '../assets/workshop/reloj-arcano.webp';

export const STEAM_PROFILE = 'https://steamcommunity.com/profiles/76561198410903687';

// Wallpaper Engine (appid 431960)
export const WORKSHOP_WALLPAPERS_URL = `${STEAM_PROFILE}/myworkshopfiles/?appid=431960`;
// Counter-Strike 2 (appid 730)
export const WORKSHOP_CS2_URL = `${STEAM_PROFILE}/myworkshopfiles/?appid=730`;

// Suscripciones totales acumuladas (actualízalo cuando quieras)
export const TOTAL_SUBSCRIBERS = '80+';

// Ejemplo de item:
// {
//     id: 'mi-wallpaper',
//     title: 'Nombre del wallpaper',
//     preview: miImagen,            // import desde src/assets/workshop/
//     link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=...',
//     tags: ['Animado', '4K'],
// }
// Todos enlazan a la página principal de tus wallpapers en el Workshop.
// Si luego quieres que uno abra su propia página, cambia su `link`.
export const wallpapers = [
    { id: 'mando-conjunto',   key: 'mando',    preview: mando,    link: WORKSHOP_WALLPAPERS_URL, tags: ['Sci-Fi', 'HUD', 'Animado'] },
    { id: 'reloj-arcano',     key: 'reloj',    preview: reloj,    link: WORKSHOP_WALLPAPERS_URL, tags: ['Fantasía', 'Reloj', 'Audio'] },
    { id: 'grimorio-escriba', key: 'grimorio', preview: grimorio, link: WORKSHOP_WALLPAPERS_URL, tags: ['Fantasía', 'Medieval', 'Animado'] },
    { id: 'brote-global',     key: 'brote',    preview: brote,    link: WORKSHOP_WALLPAPERS_URL, tags: ['Sci-Fi', 'Mapa', 'Reloj'] },
    { id: 'nexus-labs',       key: 'nexus',    preview: nexus,    link: WORKSHOP_WALLPAPERS_URL, tags: ['Sci-Fi', 'Laboratorio', 'Animado'] },
].map(w => ({
    ...w,
    titleKey: `Workshop.items.${w.key}.title`,
    descKey: `Workshop.items.${w.key}.desc`,
}));

// status: 'published' | 'wip'
export const mods = [
    {
        id: 'cs2-navidad',
        titleKey: 'Workshop.items.cs2Christmas.title',
        descKey: 'Workshop.items.cs2Christmas.desc',
        preview: null,
        link: null,
        tags: ['Counter-Strike 2', 'Source 2', 'Hammer'],
        status: 'wip',
    },
];
