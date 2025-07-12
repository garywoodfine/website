export default defineAppConfig({
    global: {
        picture: {
            dark: 'https://res.cloudinary.com/threenine-co-uk/image/upload/garywoodfine-threenine_n23phm',
            light: 'https://res.cloudinary.com/threenine-co-uk/image/upload/garywoodfine-threenine_n23phm',
            alt: 'Gary Woodfine'
        },
        meetingLink: 'https://cal.com/',
        email: 'me@garywoodfine.com',
        available: true
    },
    ui: {
        colors: {
            primary: 'orange',
            neutral: 'slate'
        },
        icons: {
            light: 'i-ph-sun',
            dark: 'i-ph-moon'
        },
        image: {
            provider: 'cloudinary',
            cloudinary: {
                baseURL: 'https://res.cloudinary.com/threenine-co-uk/image/upload/'
            }
        },
    }
})