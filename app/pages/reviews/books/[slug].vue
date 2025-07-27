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
  <u-page v-if="book">
    <reviews-books-header :image="book?.featureImage.url"
                          :link="book.affiliate"
                          :title="book.title"
                          :subtitle="book.subtitle"
                          :summary="book.summary"
    >

    </reviews-books-header>
  </u-page>
</template>

<style scoped></style>
