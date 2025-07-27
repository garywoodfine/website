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
  subtitle: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  summary:{
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col md:flex-row rounded-lg mb-4 md:mb-2">
    <div class="flex-1 p-4 text-center">
      <nuxt-img
          :src="image"
          :alt="title"
          :title="title"

          class="rounded-lg w-full md:w-auto"
      />
    </div>
    <div class="flex-1 p-4 text-center md:text-left">
      <h3 class="capitalize text-2xl md:text-4xl">{{ title }}</h3>
      <span class=" text-xl md:text-2xl">{{subtitle}}</span>
      <div class="justify-center mt-2">
        <div class="p-2 md:p-5 text-left text-base md:text-lg">
          {{summary}}
        </div>
      </div>
      <div class="flex justify-center">
        <a
            :href="link"
            target="_blank"
            class="bg-orange-500 hover:bg-orange-400 text-gray-100 font-bold text-md md:text-xl py-3 md:py-6 px-4 md:px-6 rounded inline-flex items-center"
        >
          <span class="text-white">Buy Now</span>
        </a>

      </div>

    </div>
  </div>
</template>

<style scoped></style>
