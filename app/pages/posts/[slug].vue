<script setup lang="ts">
const route = useRoute()
let cloudinary = 'https://res.cloudinary.com/threenine-co-uk/image/upload/'

const {data: post} = await useAsyncData(`posts-${route.path}`, async () => {
  const result = await queryCollection('posts').path(route.path).first()
  if (!result) {
    throw createError({
      statusCode: 404,
      message: 'Post not found',
      fatal: true
    })
  }
  return result
})

const {data: surround} = await useAsyncData(`${route.path}-surround`, () =>
    queryCollectionItemSurroundings('posts', route.path, {
      fields: ['description']
    }).where("category", "=", post.value?.category)
)
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

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
  <UMain class="mt-20 px-2">
    <UContainer class="relative min-h-screen">
      <UPage v-if="post">
        <div class="flex flex-col gap-3 mt-8">
          <div class="flex text-xs text-muted items-center justify-center gap-2">
            <span v-if="post.date">
              {{ formatDate(post.date) }}
            </span>
          </div>
          <NuxtImg
              :src="post.featureImage.url"
              :alt="post.title"
              class="rounded-lg w-full h-[400px] object-cover object-center"
          />
          <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4 capitalize">
            {{ post.title }}
          </h1>
          <p class="text-muted text-center max-w-2xl mx-auto">
            {{ post.subtitle }}
          </p>
          <div class="flex justify-center gap-2 mt-2 items-center">
            <UUser
                orientation="horizontal"
                color="neutral"
                variant="outline"
                class="justify-center items-center text-center mr-2"
                v-bind="post.author"
                to="/about"
            />
            <ZapButton />
          </div>
        </div>
        <UPageBody>
          <content-renderer v-if="post" :value="post"/>
          <tags :tags="post.tags" />
          <USeparator/>
        <UContentSurround v-if="surround" :surround/>
          <u-separator />

        </UPageBody>
      </UPage>

    </UContainer>
  </UMain>

</template>
<style scoped>
</style>

