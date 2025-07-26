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
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }} garywoodfine.com</p>
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
</template>

<style scoped></style>
