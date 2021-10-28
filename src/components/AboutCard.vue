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
    <ProductCard v-for="product in products" :product="product" :key="product.id" />
  </section>
</template>

<script>
import ProductCard from "./ProductCard";

export default {
  name: "AboutCard",
  components: {
    ProductCard
  },
  data () {
    return {
      products: []
    }
  },
  mounted() {
    this.products = [
      {
        id: Math.floor(Math.random() * 10000),
        productName: 'Bamboo Stand',
        desc: 'You get an ergonomic stand made of natural bamboo. You;ve helped us launch our promotional campaign, and you\'ll be added to a special Backer member list.',
        pledge: 25,
        stock: 101,
        isAvailable: true
      },
      {
        id: Math.floor(Math.random() * 10000),
        productName: 'Black Edition Stand',
        desc: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
        pledge: 75,
        stock: 64,
        isAvailable: true
      },
      {
        id: Math.floor(Math.random() * 10000),
        productName: 'Mahogany Special Edition',
        desc: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
        pledge: 200,
        stock: 0,
        isAvailable: false
      },
    ]
  }
}
</script>

<style scoped>

</style>