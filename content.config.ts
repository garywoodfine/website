import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        posts: defineCollection({
            type: 'page',

            source: {
                repository: 'https://github.com/garywoodfine/blogs',
                include: 'content/**',
                authToken: process.env.GITHUB_CONTENT_TOKEN,
            },
        })
    }
})