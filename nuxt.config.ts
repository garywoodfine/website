// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    ssr: true,

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
                        'go',
                        'python',
                        'terraform',
                        'json'
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
        '@nuxt/ui',
        '@threenine/nuxstr-comments',
        '@nuxtjs/seo',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        '@nuxt/content',
        'motion-v/nuxt',
        '@threenine/nuxt-fathom',
        '@nuxt/image',
        '@threenine/nuxt-zap',
    ],
    ogImage: { enabled: false },
    fathom: {
        siteId: process.env.fathom_analytics_id
    },
    nuxtZap: {
        zapAddress: process.env.lightning_address,
    },
    nuxstrComments: {
        relays: ['wss://a.nos.lol'],
    },
    image: {
        provider: 'cloudinary',
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/threenine-co-uk/image/upload/'
        }
    },

})
