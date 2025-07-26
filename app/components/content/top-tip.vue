<script lang="ts" setup></script>
<template>
  <div class="bg-blue-100 rounded-md shadow-lg text-blue-700 px-4 py-3 mb-5 mt-3" role="alert">
    <span class="font-bold flex items-center"><Icon name="ic:sharp-tips-and-updates" class="h-8 w-8 mr-3" />Top Tip</span>
    <div class="text-md pl-2 pr-2 mt-2 whitespace-pre-line"><slot name="message" /></div>
  </div>
</template>
<style scoped></style>
