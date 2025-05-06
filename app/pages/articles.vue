<script setup lang="ts">
const route = useRoute()

const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection('posts')
      .select('path', 'title', 'description', 'subtitle', 'featureImage', 'date')
     .all()
})

</script>

<template>
  <u-page>
     <UPageBody>
      <UContainer>
        <UBlogPosts>
          <UBlogPost
              v-for="(post, index) in posts"
              :key="index"
              v-bind="post"
              :to="post.path"
              :image="`https://res.cloudinary.com/threenine-co-uk/image/upload/${post.featureImage.url}`"

          />

        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </u-page>
</template>

<style scoped></style>
