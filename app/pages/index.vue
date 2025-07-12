<script setup lang="ts">
const {  global } = useAppConfig()
const { data: page } = await useAsyncData('index', () => {
  return queryCollection("index").first()
})

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPageHero
      title="Gary Woodfine"
      description="Backend software developer, integrator, engineer & solution architect well versed in delivering applications utilizing cloud architectures.

"
      headline="Backend Software Engineer"
      :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-lg mx-auto',
      links: 'mt-4 flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <Motion
          :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
          :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
          :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        <UColorModeAvatar
            class="size-48 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
            :light="global.picture?.light"
            :dark="global.picture?.dark!"
            :alt="global.picture?.alt"
        />
      </Motion>
    </template>

  </UPageHero>
  <UPageMarquee>
    <UIcon name="codicon-terminal-linux" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="uil-bitcoin" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="i-simple-icons-litecoin" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="material-symbols-currency-pound" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="bi-currency-dollar" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="streamline-decent-work-and-economic-growth" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="game-icons-anarchy" class="size-16 shrink-0 text-orange-500" />
  </UPageMarquee>
</template>

<style scoped></style>
