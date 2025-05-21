<script setup lang="ts">


const route = useRoute()
let cloudinary = 'https://res.cloudinary.com/threenine-co-uk/image/upload/'
const {data: post} = await useAsyncData(route.path, () => {
  return queryCollection('posts')
      .first()
})
useHead({
      link: [
        {
          rel: 'canonical',
          href: 'https://garywoodfine.com' + route.path
        }
      ]
    },
)
useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.summary,
  ogImage: () => `${cloudinary + post.value?.featureImage.url}`,
  twitterCard: 'summary_large_image',
  twitterDescription: () => post.value?.summary,
  twitterImage: () => `${cloudinary + post.value?.featureImage.url}`,
  twitterTitle: () => post.value?.title,
})
</script>

<template>
  <div>
    <UPageHero
        :title="post?.title"
        :description="post?.description"
        :headline="post?.subtitle"
        orientation="horizontal"
    >
      <img
          :src="cloudinary + '/' + post?.featureImage.url"
          alt="App screenshot"
          class="rounded-lg shadow-2xl ring ring-default"
      />
    </UPageHero>

    <u-page>

      <template #left>
        <p></p><p></p>
      </template>
      <template #default>
        <u-page-body >
          <content-renderer :value="post"/>
          <USeparator />

        </u-page-body>
      </template>
      <template #right>
        <p>Cutnet</p><p></p>
      </template>
    </u-page>



      </div>

</template>

<style scoped>


</style>
