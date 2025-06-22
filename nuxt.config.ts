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
  modules: ['@nuxt/ui-pro', '@nuxt/content'],
  ui: {
    icons: {
      light: 'i-ph-sun',
      dark: 'i-ph-moon'
    }
  },
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/threenine-co-uk/image/upload/'
    }
  },
})
