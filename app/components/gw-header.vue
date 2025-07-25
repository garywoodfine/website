<script setup lang="ts">
import type {NavigationMenuItem} from "#ui/components/NavigationMenu.vue";
const route = useRoute()

const headerNavigation:  NavigationMenuItem[] = [{
  label: 'Posts',
  to: '/posts',

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
</template>

<style scoped></style>
