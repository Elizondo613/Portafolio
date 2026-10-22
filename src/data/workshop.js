// ─────────────────────────────────────────────────────────────
//  Contenido del Workshop (Steam)
//  Para agregar un item: copia un objeto, pon el link de Steam
//  (sharedfiles/filedetails/?id=...) y la imagen en src/assets/workshop/
// ─────────────────────────────────────────────────────────────

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
export const wallpapers = [];

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
