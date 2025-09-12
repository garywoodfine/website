<script setup lang="ts">

const {data: products} = await useAsyncData(`threenine-products`, async () => {

  const result = await queryCollection('products').select('title', 'description', 'icon', 'productImage', 'path').all()
  if (!result) {
    throw createError({
      statusCode: 404,
      message: 'Post not found',
      fatal: true
    })
  }
  return result
})

const items = computed(() => (products.value || []).map((product) => ({
  title: product.title,
  description: product.description,
  icon: product.icon,
  to: `https://threenine.co.uk/${product.path}`,
  target: '_blank',
  image: product.productImage.url
})))

</script>

<template>
  <div class="mt-5 mb-5">
    <p class="text-xl font-bold mb-4 text-primary">Developed Products</p>
    <UPageGrid>

      <UPageCard
          v-for="(card, index) in items"
          :key="index"
          class="border-1 border-primary"
      >
        <template #default>
         <a :href="card.to" target="_blank" :title="card.title">
          <div class="text-sm text-muted mb-2">
            <UBadge size="xl" color="primary" class="mb-2" >
              <template #default>
                <Icon :name="card.icon" class="text-white mr-2" /> <span class="text-white">{{card.title}}</span>
              </template>
            </UBadge>
            <p class="mt-2 mb-3">{{ card.description }}</p>
            <div  class="mt-1 flex items-center text-primary ">
            <span class="hover:underline">
            <a :href="card.to" target="_blank">Learn more  <icon name="material-symbols:keyboard-double-arrow-right-rounded"/></a>
            </span>
            </div>
          </div>

         </a>
        </template>
      </UPageCard>
    </UPageGrid>
  </div>
</template>
