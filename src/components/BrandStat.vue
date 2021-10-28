<template>
  <section class="max-w-sm sm:max-w-xl xl:max-w-5xl bg-white px-8 sm:px-12 py-16 flex flex-col justify-center items-center mx-auto rounded-lg mt-8 border-gray-200 border">
    <div id="stat-wrapper" class="w-10/12 flex flex-col sm:flex-row justify-between items-center">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold">
          $89,914
        </h1>
        <p class="text-gray-400 mt-4 sm:mt-0">
          of $100,000 backed
        </p>
      </div>

      <hr class="bg-gray-400 h-0.5 w-20 sm:h-20 sm:w-0.5 mt-4 sm:mt-0">

      <div class="flex flex-col justify-center items-center mt-4 sm:mt-0">
        <h1 class="text-3xl font-bold">
          5007
        </h1>
        <p class="text-gray-400 mt-4 sm:mt-0">
          total backers
        </p>
      </div>

      <hr class="bg-gray-400 h-0.5 w-20 sm:h-20 sm:w-0.5 mt-4 sm:mt-0">

      <div class="flex flex-col justify-center items-center mt-4 sm:mt-0">
        <h1 class="text-3xl font-bold">
          56
        </h1>
        <p class="text-gray-400 mt-4 sm:mt-0">
          days left
        </p>
      </div>
    </div>
    <div id="progress-bar" class="mt-8 w-full sm:w-10/12 h-4 bg-gray-300 rounded-full">
      <div class="rounded-full h-4 bg-moderate-cyan text-xs leading-none py-1 text-center text-white" style="width: 75%"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BrandStat"
}
</script>

<style scoped>

</style>