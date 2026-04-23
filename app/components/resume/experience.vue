<script setup lang="ts">
const { data: posts } = await useAsyncData('latest-posts', () => {
  return queryCollection('posts')
      .order('date', 'DESC')
      .limit(3)
      .all()
})

const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short'
  })
}
</script>

<template>
  <UPageSection
      title="Latest Posts"
      :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
            v-for="(post, index) in posts"
            :key="post.path"
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ delay: 0.4 + 0.2 * index }"
            :in-view-options="{ once: true }"
            class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm">
            {{ formatDate(post.date) }}
          </p>
          <USeparator />
          <ULink
              class="flex items-center gap-1 group"
              :to="post.path"
          >
            <span class="text-sm truncate max-w-37.5 sm:max-w-50 md:max-w-none group-hover:text-primary transition-colors">
              {{ post.title }}
            </span>
            <div
                class="inline-flex items-center gap-1 text-primary"
            >
              <span class="font-medium text-xs">{{ post.category }}</span>
              <UIcon name="i-ph-arrow-up-right" class="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </ULink>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
