<script setup lang="ts">
const route = useRoute()
const {data: book} = await useAsyncData(`post-${route.path}`, async () => {
  const result = await queryCollection('books').path(route.path).first()
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
  <UPage v-if="book && book.image">
    <ReviewsBooksHeader :image="book.image"
                          :link="book.affiliate"
                          :title="book.title"
                          :subtitle="book.subtitle"
                          :summary="book.summary"
                          :author="book.bookAuthor"
    >

    </ReviewsBooksHeader>
    <USeparator/>
    <UPageBody>
      <p class="text-muted text-4xl">Review</p>
      <content-renderer v-if="book" :value="book"/>
      <tags :tags="book.tags" />
      <USeparator/>

    </UPageBody>
  </UPage>
</template>

<style scoped></style>
