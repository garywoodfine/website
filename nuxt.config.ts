// https://nuxt.com/docs/api/configuration/nuxt-config
import { bundledLanguages } from 'shiki'
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    content: {
        experimental: {nativeSqlite: true},
        highlight: {
            langs: Object.keys(bundledLanguages),
        }
    },
    css: ['~/assets/css/main.css'],
    site: {
        url: 'https://garywoodfine.com',
        name: 'Gary Woodfine',
    },
    modules: [
        '@nuxt/ui-pro',
        '@nuxtjs/seo',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        '@nuxt/content',
        'motion-v/nuxt',
        'nuxt-fathom',
        '@nuxt/image',

    ],
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