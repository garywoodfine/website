<script lang="ts" setup>
</script>
<template>
  <div class="w-full mx-auto rounded-lg bg-gray-100 shadow-lg px-5 pt-5 pb-10 text-gray-900" >
    <div class="w-full mb-10">
      <div class="text-4xl text-orange-500 text-left h-6"><icon name="bx:bxs-quote-alt-left"/></div>
      <div class="mt-5 ml-8 text-3xl text-gray-700 px-5 text-left whitespace-pre-line"><slot name="text"/></div>
      <div class="text-4xl text-orange-500 text-right leading-tight h-5 -mt-3"><icon name="bx:bxs-quote-alt-right"/></div>
      <div class="text-xs pl-2 pr-2 mt-2 whitespace-pre-line"><slot name="citation"/></div>
    </div>
  </div>
</template>
<style scoped></style>