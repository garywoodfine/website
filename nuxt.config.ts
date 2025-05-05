// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui-pro'],
  ui: {
    icons: {
      light: 'i-ph-sun',
      dark: 'i-ph-moon'
    }
  }
})
