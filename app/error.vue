<script setup lang="ts">
const links = ref([
  {
    label: 'Home',
    to: '/',
    icon: 'i-simple-line-icons-home'
  },
  {
    label: 'Articles',
    to: '/articles',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <u-app>
    <gw-header />

    <UPageHero
        title="I'm really sorry."
        description="The content you were looking for has either been deleted or moved. I have recently re-imagined my blog,
and as a result a number of articles may have been completely outdated or just lapsed into irrelevance. "
        headline="Oops!"
        orientation="horizontal"
        :links="links"
    >
      <img
          src="~/assets/images/error-page.svg"
          alt="App screenshot"
          class="rounded-lg shadow-2xl ring ring-default"
      />
    </UPageHero>


    <gw-footer />
  </u-app>

</template>

<style scoped>

</style>