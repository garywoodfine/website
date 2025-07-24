<script setup lang="ts">
const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true
  },
  size:{
    type: String,
    required: false,
    default: '250'
  },
  basis: {
    type: String,
    required: false,
    default: 'basis-1/2'
  }

})
</script>
<template>
  <UCarousel
      v-slot="{ item: image }"
      arrows
      dots
      :ui="{ item: basis }"
      :items="images"
      :prev="{ color: 'primary', variant: 'solid' }"
      :next="{ color: 'primary', variant: 'solid' }"
  >
    <NuxtImg :src="image" :width="size" :height="size" class="rounded-lg" />
  </UCarousel>
</template>
<style scoped></style>
