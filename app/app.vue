<template>
  <div>
    <NuxtRouteAnnouncer />
    <u-app>
      <UHeader>
        <template #title>
          <Logo class="h-6 w-auto" />
        </template>

        <UNavigationMenu :items="headerNavigation" />

        <template #right>
          <UColorModeButton />

          <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
            <UButton
                color="neutral"
                variant="ghost"
                to="https://github.com/garywoodfine"
                target="_blank"
                icon="i-simple-icons-github"
                aria-label="GitHub"
            />
          </UTooltip>
        </template>

        <template #body>
          <UNavigationMenu :items="headerNavigation" orientation="vertical" class="-mx-2.5" />
        </template>
      </UHeader>
      <UMain>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UMain>

      <UFooter>
        <template #left>
          <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }} Gary Woodfine</p>
        </template>

        <UNavigationMenu :items="headerNavigation" variant="link" />

        <template #right>

          <UButton
              icon="i-simple-icons-github"
              color="neutral"
              variant="ghost"
              to="https://github.com/garywoodfine"
              target="_blank"
              aria-label="GitHub"
          />
        </template>
      </UFooter>
    </u-app>
  </div>
</template>
<script setup lang="ts">
import type {NavigationMenuItem} from "#ui/components/NavigationMenu.vue";
const route = useRoute()
const headerNavigation:  NavigationMenuItem[] = [{
  label: 'Articles',
  to: '/articles',
  active: route.path.startsWith('/articles')
}, ]



</script>
