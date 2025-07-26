<script setup lang="ts">
defineProps({
  tags: {
    type: Array as () => string[],
    required: true
  },
  size: {
    type: String,
    required: false,
    default: 'md'
  }


})
</script>

<template>
    <u-badge v-for="(tag, index) in tags" :key="index" color="primary" :size="size" class="text-xs text-white mr-3" :label="tag"/>
</template>

<style scoped></style>
