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
  },
  author: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col md:flex-row gap-6 rounded-lg mb-6 p-4">
    <!-- Image container - full width on mobile, proportional on larger screens -->
    <div class="w-full md:w-1/3 lg:w-1/4 flex justify-center">
      <nuxt-img
          :src="image"
          :alt="title"
          :title="title"
          height="400"
          class="rounded-lg shadow-md object-cover max-h-[400px] w-auto"
      />
    </div>

    <!-- Content container - grows to fill available space -->
    <div class="flex flex-col w-full md:w-2/3 lg:w-3/4 space-y-4">
      <div class="text-center md:text-left">
        <h3 class="text-4xl md:text-4xl font-bold">{{ title }}</h3>
        <span class="block text-3xl md:text-2xl text-orange-300 mt-2">{{ subtitle }}</span>
      </div>

      <div class="flex-grow">
        <div class="text-left text-base italic md:text-lg p-2">
          {{ summary }}
        </div>
      </div>

      <div class="flex-grow">
        <div class="text-left text-orange-300 md:text-lg p-2">
          {{ author }}
        </div>
      </div>

      <div class="flex justify-center md:justify-end pt-2">
        <a
            :href="link"
            target="_blank"
            class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded inline-flex items-center transition duration-300 shadow-lg"
        >
          <span>Buy Now</span>
        </a>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
