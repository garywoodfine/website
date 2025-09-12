<script setup lang="ts">
import SkillsMarquee from "~/components/skills-marquee.vue";
import FeaturedProducts from "~/components/featured-products.vue";

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
  <UPage v-if="page">
  <UPageHero
      :title= "page?.title"
      :description="page?.description"
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
          filter: 'blur(20px)',
          color: 'primary'
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
        <nuxt-img
            class="size-64 rounded-full ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
            :src="global.picture?.light"
            :alt="global.picture?.alt"
        />
      </Motion>
    </template>
    <template #links>
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
          delay: 0.5
        }"
      >
        <div
            v-if="page?.hero.links"
            class="flex items-center gap-2"
        >
          <UButton v-bind="page?.hero.links[0]" :color="page?.hero.links[0].color || 'primary'"  >

          </UButton>
          <UButton
              :color="global.available ? 'success' : 'error'"
              variant="ghost"
              class="gap-2"
              :to="global.available ? global.meetingLink : ''"
              :label="global.available ? 'Available for new projects' : 'Not available at the moment'"
          >
            <template #leading>
              <span class="relative flex size-2">
                <span
                    class="absolute inline-flex size-full rounded-full opacity-75"
                    :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
                />
                <span
                    class="relative inline-flex size-2 scale-90 rounded-full"
                    :class="global.available ? 'bg-success' : 'bg-error'"
                />
              </span>
            </template>
          </UButton>
        </div>
      </Motion>


    </template>
  </UPageHero>



    <UPageSection
        :ui="{
        container: '!pt-5 mt-5 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >

      <resume-about :page />
      <resume-experience :page />
    </UPageSection>
    <featured-products />
    <skills-marquee />
  </UPage>


</template>

<style scoped></style>
