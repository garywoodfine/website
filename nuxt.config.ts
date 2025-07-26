// https://nuxt.com/docs/api/configuration/nuxt-config
import { bundledLanguages } from 'shiki'
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    content: {

        build: {
            markdown: {
                highlight: {
                     theme: {
                        default: 'github-light',
                        dark: 'monokai',
                        sepia: 'monokai'
                    },
                    langs: [
                        'xml',
                        'csharp',
                        'typescript',
                        'javascript',
                        'yaml',
                        'shell',
                        'rust',
                        'go'
                    ]
                }
            }
        },
        experimental: {nativeSqlite: true},

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
        '@threenine/nuxt-fathom',
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