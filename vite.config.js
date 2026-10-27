import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ─────────────────────────────────────────────────────────────
//  URL pública del sitio. Cuando conectes kemetstudios.com,
//  cambia SOLO esta línea: se actualizan metadatos, sitemap y robots.
// ─────────────────────────────────────────────────────────────
const SITE_URL = 'https://kemet-studio.netlify.app'

// Rutas que se publican en el sitemap
const ROUTES = ['/', '/games', '/workshop', '/templates', '/portfolio', '/about', '/contact']

const seoFiles = () => ({
  name: 'kemet-seo-files',
  transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', SITE_URL),
  generateBundle() {
    const today = new Date().toISOString().slice(0, 10)
    const urls = ROUTES.map((r) => `  <url>
    <loc>${SITE_URL}${r === '/' ? '/' : r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')

    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    })
    this.emitFile({
      type: 'asset',
      fileName: 'robots.txt',
      source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoFiles()],
  define: {
    'import.meta.env.VITE_SITE_URL': JSON.stringify(SITE_URL),
  },
})
