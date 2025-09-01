<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
const {data: post} = await useAsyncData(`post-${props.title}`, async () => {
  const result = await queryCollection('posts').where("title", "=", props.title).first()
  if (!result) {
    throw createError({
      statusCode: 404,
      message: 'Post not found',
      fatal: true
    })
  }
  return result
})
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="container mx-auto pb-2 pt-1 mt-3 flex justify-center">
    <div v-if="post" class="max-w-4xl px-10 my-4 py-6 rounded-lg shadow-md dark:shadow-orange-50 ">
      <div class="flex justify-between items-center mb-3">
        <span class="font-light text-orange-300">{{ formatDate(post.date) }}</span>
        <u-badge color="primary" :label="post.category" size="sm"></u-badge>
      </div>
      <a :href="post.path" class="text-orange-500 hover:underline">{{ post?.title }}</a>
      <div class="mt-2"><p class="text-sm">{{ post?.summary }}</p></div>
      <div class="flex justify-between items-center mt-4">
        <nuxt-link class="text-orange-500 hover:underline text-sm" :to="post.path">Read more</nuxt-link>
        <div>
          <a class="flex items-center" :href="post.path">
             <p class="text-orange-500 font-bold text-sm">{{ post.author.name }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
