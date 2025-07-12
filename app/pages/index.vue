<script setup lang="ts">
const {  global } = useAppConfig()
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('pages').first()
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
      description="Back-end software developer, integrator, engineer & solution architect well versed in delivering applications utilizing cloud architectures.

"
      headline="Back-end Software Engineer"
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
    <UIcon name="proicons:javascript" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="mdi:language-csharp" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="ant-design:python-outlined" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="devicon-plain:rust" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="fa6-brands:node" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="simple-icons:dotnet" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="mdi:vuejs" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="mdi:nuxt" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="devicon-plain:azure" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="mdi:aws" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="pajamas:terraform" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="mdi:github" class="size-16 shrink-0 text-orange-500" />
    <UIcon name="codicon:azure-devops" class="size-16 shrink-0 text-orange-500" />
  </UPageMarquee>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
        :ui="{
        container: '!pt-5 mt-5 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >

      <resume-about :page />
      <resume-experience :page />
    </UPageSection>
  </UPage>


</template>

<style scoped></style>
