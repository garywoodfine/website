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
  <div class="container mx-auto pb-10">
    <div v-if="link !== ''" class="max-w-screen-lg flex justify-center mx-auto">
      <a :href="link" target="_blank">
        <nuxt-img
            :src="image"
            :title="title"
            class="image-style"
        />
      </a>
    </div>
    <div v-else-if="link ===''" class="max-w-screen-lg flex justify-center mx-auto">
      <nuxt-img
          :src="image"
          :title="title"
          class="image-style"
      />
    </div>
  </div>
</template>

<style scoped>
.image-style {
  @apply object-cover resize w-full
}
</style>