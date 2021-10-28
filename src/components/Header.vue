<template>
  <header class="bg-hero-mobile sm:bg-hero-desktop bg-cover">
    <nav class="max-w-7xl h-500 mx-auto flex flex-col sm:flex-row px-8 sm:justify-between items-start pt-14">
      <div class="flex flex-row w-full sm:w-1/2 justify-between">
        <img src="../assets/images/logo.svg" alt="crowdfund logo">
        <img src="../assets/images/icon-hamburger.svg" alt="hamburger icon" @click="hamburgerToggle" class="sm:hidden">
      </div>
      <div id="wrapper" :class="`sm:text-white sm:block ${isActive ? 'w-full bg-white rounded-lg flex flex-col text-black py-4 mt-2' : 'hidden'}`">
        <a href="#" :class="`${isActive ? 'p-4 bg-moderate-cyan text-white' : 'mx-4'}`">About</a>
        <a href="#" :class="`${isActive ? 'p-4' : 'mx-4'}`">Discover</a>
        <a href="#" :class="`${isActive ? 'p-4' : 'mx-4'}`">Get Started</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    hamburgerToggle() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped>

</style>