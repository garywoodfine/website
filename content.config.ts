import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        posts: defineCollection({
            type: 'page',
            source: {
                repository: 'https://github.com/garywoodfine/blogs',
                include: 'posts/**',
                authToken: process.env.GITHUB_CONTENT_TOKEN,
            },
            schema: z.object({
                subtitle: z.string(),
                featureImage: z.object({url: z.string(), alt: z.string()}),
                date: z.date(),
                tags: z.array(z.string()),
                summary: z.string(),
            })
        })
    }
})