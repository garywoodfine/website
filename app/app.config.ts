export default defineAppConfig({
    global: {
        picture: {
            dark: 'garywoodfine-threenine_n23phm',
            light: 'garywoodfine-threenine_n23phm',
            alt: 'Gary Woodfine'
        },
        meetingLink: 'https://cal.com/',
        email: 'gary.woodfine@threenine.co.uk',
        available: true
    },
    ui: {
        colors: {
            primary: 'orange',
            neutral: 'neutral'
        },
        icons: {
            light: 'i-ph-sun',
            dark: 'i-ph-moon'
        },

    },
    image: {
        provider: 'cloudinary',
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/threenine-co-uk/image/upload/'
        }
    },
})