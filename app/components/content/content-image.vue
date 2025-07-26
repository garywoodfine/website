<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="container mx-auto pb-10 mt-5">
    <div v-if="link !== ''" class="max-w-screen-lg flex justify-center mx-auto rounded-2xl">
      <a :href="link" target="_blank">
        <nuxt-img
            :src="image"
            :title="title"
            class="object-cover resize w-full rounded-2xl"
            width="1100"
        />
      </a>
    </div>
    <div v-else-if="link ===''" class="max-w-screen-lg flex justify-center mx-auto rounded-2xl">
      <nuxt-img
          :src="image"
          :title="title"
          class="object-cover resize w-full rounded-2xl"
      />
    </div>
  </div>
</template>

<style scoped>

</style>