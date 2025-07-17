<script setup lang="ts">
const props = defineProps({
  repo: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  }
})
let repoDetails = await fetchRepoDetails(props.account, props.repo)

async function fetchRepoDetails(account: string, repo: string) {
  const url = `https://api.github.com/repos/${account}/${repo}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error fetching repository details:', error);
    return null;
  }
}

</script>

<template>
  <div class="max-w-full rounded overflow-hidden shadow-lg bg-orange-100 dark:bg-orange-50 text-center">
    <a :href="repoDetails.html_url" target="_blank">
    <div class="px-6 py-4">
      <Icon name="icon-park:github" class="h-20 w-20 mb-3 " />
      <p class="font-bold text-3xl mb-2 text-orange-500">{{repoDetails.name}}</p>
      <p class="text-gray-700 text-xl">
        {{ repoDetails.description }}
      </p>
      <a :href="repoDetails.html_url" target="_blank" class="hover:underline text-gray-700" rel="noopener noreferrer"><Icon name="line-md:github-loop" /> {{ repoDetails.full_name }}</a>
    </div>
    <div class="px-6 py-4">
      <span  v-for="item in repoDetails.topics" :key="item" class="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2">{{item}}</span>
    </div>
    </a>
  </div>
</template>