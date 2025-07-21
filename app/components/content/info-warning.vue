<script lang="ts" setup>
</script>
<template>
  <div class="bg-yellow-50 rounded-md shadow-lg text-orange-500 px-4 py-3" role="alert">
    <p class="font-bold"><Icon name="carbon:warning-alt" class="h-8 w-8 mr-3"/></p>
    <div class="text-md pl-2 pr-2 mt-2 whitespace-pre-line"><slot name="message" /></div>
  </div>
</template>
<style scoped></style>