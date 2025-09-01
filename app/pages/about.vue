<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}
const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
  <UPageHero
         :title="page.title"
         :description="page.description"
         orientation="horizontal"
         :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }">
    <nuxt-img
        class="size-64 rounded-full ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
        :src="global.picture?.light"
        :alt="global.picture?.alt"
    />
  </UPageHero>
    <UPageSection
        :ui="{
        container: '!pt-0'
      }"
    >
      <div class="flex flex-col gap-4 text-justify text-lg p-1 italic" >
        <MDC
            :value="page.introduction"

        />

      </div>
      <skills-list v-for="skill in page.skills"
                   :category="skill.category"
                   :technologies="skill.technologies"
      ></skills-list>
    </UPageSection>
  </UPage>
</template>

<style scoped></style>
