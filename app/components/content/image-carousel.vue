<script setup lang="ts">
const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true
  },

})

console.log(props.images)
</script>

<template>
  <UCarousel
      v-slot="{ item: image }"
      arrows
      dots
      :ui="{ item: 'basis-1/2' }"
      :items="images"
      :prev="{ color: 'primary', variant: 'solid' }"
      :next="{ color: 'primary', variant: 'solid' }"

  >
    <NuxtImg :src="image" width="900" height="900" class="rounded-lg" />
  </UCarousel>
</template>

<style scoped></style>
