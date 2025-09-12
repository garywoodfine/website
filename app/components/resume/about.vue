<script setup lang="ts">


import type {IndexCollectionItem} from "@nuxt/content";

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
      v-if="page"
      :title="page.about.title"
      :description="page.about.description"
      :ui="{
      container: '!p-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <template #description>
      <div>
        <p class="italic">{{page.about.description}}</p>
      </div>
      <div v-if="page" class="mt-1">
       <span class="flex items-center hover:underline text-primary">
         <nuxt-link :to="page.about.link.to" target="_self" class="">{{ page.about.link.label}}</nuxt-link>
         <icon name="material-symbols:keyboard-double-arrow-right-rounded"/></span>
      </div>

    </template>

  </UPageSection>
</template>

<style scoped>

</style>
