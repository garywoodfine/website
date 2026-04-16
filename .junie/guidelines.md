# Project Guidelines for AGENTS

This document provides essential information and rules for AI agents working on this project.

## Tech Stack
- **Framework:** [Nuxt 4](https://nuxt.com/) (using Nuxt 3 compatible features)
- **Content Management:** [Nuxt Content v3](https://content.nuxt.com/)
- **UI Library:** [Nuxt UI v3 (@nuxt/ui)](https://ui.nuxt.com/)
- **Package Manager:** `pnpm`
- **Deployment:** Netlify
- **Analytics:** Fathom (via `@threenine/nuxt-fathom`)
- **Other Modules:** `@vueuse/nuxt`, `motion-v`, `@threenine/nuxt-zap`, `@threenine/nuxstr-comments`

## Project Structure
- `app/`: Contains the Nuxt application code (pages, components, assets).
- `content/`: Local content files (if any). Note that many collections pull from external repositories.
- `server/`: Server-side logic and API routes.
- `public/`: Static assets.
- `.junie/`: Agent-specific configurations and guidelines.

## Development Workflow
- **Installation:** Use `pnpm install`.
- **Development Server:** Run `netlify dev` to start the development server (provides Netlify environment features).
- **Build:** Use `pnpm build` to create a production build.

## Coding Standards
- **Language:** TypeScript for all logic.
- **Components:** 
    - Use Vue 3 Composition API with `<script setup lang="ts">`.
    - Prefer Nuxt UI components where possible.
    - Follow existing naming conventions (kebab-case for component files).
- **Styling:** Tailwind CSS (via Nuxt UI). Custom styles should be kept to a minimum and placed in `app/assets/css/main.css` or scoped `<style>` blocks.
- **Icons:** Use the `<icon />` component with Iconify identifiers (e.g., `bx:bxs-quote-alt-left`).

## Content Management (Nuxt Content v3)
- Content is organized into collections defined in `content.config.ts`.
- **Collections:**
    - `posts`: Sourced from `https://github.com/garywoodfine/blogs` (branch defined by env).
    - `books`: Sourced from `https://github.com/garywoodfine/blogs` (reviews/books).
    - `products`: Sourced from `https://github.com/threenine/content`.
- **Schemas:** Always refer to `content.config.ts` for the Zod schemas of each collection before creating or modifying content.

## Best Practices
- **SSR:** The application is SSR-enabled. Ensure components are compatible with server-side rendering.
- **SEO:** Use `@nuxtjs/seo` features. Site metadata is configured in `nuxt.config.ts`.
- **Images:** Use `@nuxt/image` for optimized images. Cloudinary is used as the provider.

## Common Tasks
- **Adding a Page:** Create a `.vue` file in `app/pages/`.
- **Adding a Component:** Create a `.vue` file in `app/components/`.
- **Modifying Content Schemas:** Update `content.config.ts`.
