// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  content: {
    experimental: { nativeSqlite: true },
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/ui-pro', '@nuxt/content', 'motion-v/nuxt', 'nuxt-fathom', '@nuxt/image'],
  fathom: {
    siteId: process.env.fathom_analytics_id
  },
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/threenine-co-uk/image/upload/'
    }
  },
})