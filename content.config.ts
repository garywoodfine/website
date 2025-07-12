import { defineCollection, defineContentConfig, z } from '@nuxt/content'
const createBaseSchema = () => z.object({
    title: z.string(),
    description: z.string()
})

const createButtonSchema = () => z.object({
    label: z.string(),
    icon: z.string().optional(),
    to: z.string().optional(),
    color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
    size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
    variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
    target: z.enum(['_blank', '_self']).optional()
})


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
        }),
        pages: defineCollection({
            type: 'page',
            source: 'index.yml',
            schema: z.object({
                hero: z.object({
                    links: z.array(createButtonSchema()),
                }),
                about: createBaseSchema(),
                experience: createBaseSchema().extend({
                    items: z.array(z.object({
                        date: z.date(),
                        position: z.string(),
                        company: z.object({
                            name: z.string(),
                            url: z.string(),
                            logo: z.string().editor({ input: 'icon' }),
                            color: z.string()
                        })
                    }))
                }),

            })
        }),
    },

})