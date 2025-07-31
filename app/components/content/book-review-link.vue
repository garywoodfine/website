<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
const {data: post} = await useAsyncData(`books-${props.title}`, async () => {
  const result = await queryCollection('books').where("title", "=", props.title).first()
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
  <div class="container mx-auto pb-2 pt-1 mt-3 flex justify-center">
    <div v-if="post" class="max-w-4xl px-10 my-4 py-6 rounded-lg shadow-md dark:shadow-orange-50">
      <!-- Date and badge at the top -->
      <div class="flex justify-between items-center mb-3">
        <span class="font-light text-orange-300">Book Review</span>
        <u-badge color="primary" :label="post.genre" size="sm"></u-badge>
      </div>
      <!-- Image and content below -->
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Book Cover Image on the left -->
        <div class="md:w-1/7">
          <nuxt-img
              v-if="post.image"
              :src="post.image"
              :alt="`Cover image for ${post.title}`"
              class="w-full h-auto rounded shadow-sm"
          />
        </div>
        <!-- Content on the right -->
        <div class="md:w-3/4">
          <a :href="post.path" class="text-orange-500 hover:underline">{{ post.title }}</a>
          <div class="mt-2"><p class="text-sm">{{ post.summary }}</p></div>
          <div class="flex justify-between items-center mt-4">

            <div>
              <a class="flex items-center" :href="post.path">
                <p class="text-orange-500 font-bold text-sm">{{ post.bookAuthor }}</p>
              </a>
            </div>
            <a class="text-orange-500 hover:underline text-sm" :href="post.path">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<style scoped></style>
