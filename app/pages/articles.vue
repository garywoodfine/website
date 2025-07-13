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
        <UBlogPosts orientation="vertical">
          <Motion
              v-for="(post, index) in posts"
              :key="index"
              :initial="{ opacity: 0, transform: 'translateY(10px)' }"
              :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
              :transition="{ delay: 0.2 * index }"
              :in-view-options="{ once: true }"
          >
            <UBlogPost
                variant="naked"
                orientation="horizontal"
                :to="post.path"
                v-bind="post"
                :image="`https://res.cloudinary.com/threenine-co-uk/image/upload/${post.featureImage.url}`"
                :ui="{
              root: 'md:grid md:grid-cols-2 group overflow-visible transition-all duration-300',
              image:
                'group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default',
              header:
                index % 2 === 0
                  ? 'sm:-rotate-1 overflow-visible'
                  : 'sm:rotate-1 overflow-visible'
            }"
            />
          </Motion>
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </u-page>
</template>

<style scoped></style>
