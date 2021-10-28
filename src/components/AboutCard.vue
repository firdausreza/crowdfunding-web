<template>
  <section class="max-w-sm sm:max-w-xl xl:max-w-5xl bg-white mt-8 py-12 flex flex-col justify-center items-center mx-auto rounded-lg border-gray-200 border">
    <div id="wrapper" class="flex flex-col w-10/12">
      <h1 class="text-xl font-bold">
        About this project
      </h1>
      <p class="mt-8 text-gray-400">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
        your pisture and make you more comfortable while at work, helping you stay focused on the task
        at hand.
        <br>
        <br>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
        to allow notepads, pens, and USB sticks to be stored under the stand.
      </p>
    </div>
    <ProductCard />
  </section>
</template>

<script>
import ProductCard from "./ProductCard";

export default {
  name: "AboutCard",
  components: {
    ProductCard
  }
}
</script>

<style scoped>

</style>