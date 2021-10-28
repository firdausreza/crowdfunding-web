<template>
  <section :id="product.id" :class="`w-10/12 p-8 border border-gray-200 flex flex-col justify-center rounded-xl mt-8 ${product.isAvailable ? '' : 'opacity-50'}`">
    <div id="title-wrapper" class="flex flex-col sm:flex-row sm:justify-between">
      <h1 class="text-lg font-bold">{{ product.productName }}</h1>
      <p class="text-moderate-cyan mt-2 sm:mt-0">
        Pledge ${{ product.pledge }} or more
      </p>
    </div>
    <p class="text-gray-400 mt-4">
      {{ product.desc }}
    </p>
    <div id="action-wrapper" class="flex flex-col sm:items-center sm:flex-row sm:justify-between">
      <h2 class="font-bold text-3xl mt-4">{{ product.stock }} <span class="text-base text-gray-400">left</span></h2>
      <button @click="btnClick" class="px-8 py-4 bg-moderate-cyan rounded-full text-white font-bold mt-4" :disabled="!product.isAvailable">
        Select Reward
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
  },
  methods: {
    btnClick() {
      console.log("clicked");
    }
  }
}
</script>

<style scoped>

</style>