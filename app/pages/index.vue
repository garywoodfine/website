<script setup lang="ts">
const {  global } = useAppConfig()

</script>

<template>
  <UPageHero
      title="Gary Woodfine"
      description="Random thoughts and musings on the world of Economics, Politics and Technology"
      headline="The other Gary's economics"
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
            class="size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
            :light="global.picture?.light!"
            :dark="global.picture?.dark!"
            :alt="global.picture?.alt!"
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
