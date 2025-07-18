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
</script>

<template>
  <div v-if="post" class="max-w-4xl px-10 my-4 py-6 rounded-lg shadow-md">
    <a :href="post.path" class="text-orange-500 hover:underline">{{post?.title}}</a>
    <div class="mt-2"> <p  class="text-sm">{{post?.summary}}</p></div>
    <div class="flex justify-between items-center mt-4">
      <a class="text-orange-500 hover:underline text-sm" :href="post.path">Read more</a>
      <div>
        <a class="flex items-center" :href="post.path">
          <nuxt-img class="mx-4 w-6 h-6 object-cover rounded-full hidden sm:block" :src="post?.author?.avatar?.src" alt="avatar" />
          <p class="text-orange-500 font-bold text-sm">{{post.author.name}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
