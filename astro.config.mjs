import { defineConfig } from 'astro/config'
import sanity from '@sanity/astro'
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ADICIONE ESTA LINHA AQUI:
  site: 'https://augusto-narloch-imoveis.vercel.app/', 
  
  integrations: [
    sanity({
      projectId: 'ke2kojbm',
      dataset: 'production',
      apiVersion: '2026-04-19',
      useCdn: true
    }), 
    sitemap()
  ]
})