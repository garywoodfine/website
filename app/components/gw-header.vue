<script setup lang="ts">
import type {NavigationMenuItem} from "#ui/components/NavigationMenu.vue";
const route = useRoute()

const headerNavigation:  NavigationMenuItem[] = [{
  label: 'Posts',
  to: '/posts',
},
  {
    label:'Reviews',
    children: [
      {
        label: 'Books',
        to: '/reviews/books',
      },
    ]
  },
  {
    label: 'About',
    to: '/about',
  },

]

const active = ref()

defineShortcuts({
  1: () => {
    active.value = '0'
  },
  2: () => {
    active.value = '1'
  },
  3: () => {
    active.value = '2'
  }
})
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="headerNavigation"  :ui="{
      viewport: 'sm:w-(--reka-navigation-menu-viewport-width) z-[9999]',
      content: 'sm:w-auto z-50 z-[9999]',
      childList: 'sm:w-96 z-100 z-[9999]',
      childLinkDescription: 'text-balance line-clamp-2'
    }" />

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
      <UNavigationMenu :items="headerNavigation"  class="w-full justify-center" orientation="vertical" />
    </template>
  </UHeader>
</template>

<style scoped></style>
