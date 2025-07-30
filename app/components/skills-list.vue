<script setup lang="ts">
import type { Skill } from '~/types/skill'

defineProps({
  category: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array as () => Skill[],
    default: () => [
      { name: 'C#', icon:'mdi:slack', level: 'Advanced' },
      { name: 'C#', icon:'mdi:slack', level: 'Advanced' },
      { name: 'C#', icon:'mdi:slack', level: 'Advanced' },
    ]
  }
});
</script>
<template>
  <div>
    <div>
      <h3 class="text-2xl font-bold mb-3">{{category}}</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="(skill, index) in technologies" :key="index" class="p-4 border border-orange-100 rounded-lg shadow-sm">
        <span class="font-medium text-xl flex items-center gap-2"><icon :name="skill.icon" class="text-orange-500 mr-1"  size="45" />{{skill.name}}</span>
        <p  class="text-sm text-gray-600 mt-3">{{ skill.level }}</p>
      </div>
      </div>
    </div>
  </div>
</template>


