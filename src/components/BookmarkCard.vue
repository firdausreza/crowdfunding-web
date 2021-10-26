<template>
  <section class="max-w-sm sm:max-w-xl lg:max-w-5xl bg-white p-8 flex flex-col justify-center items-center mx-auto rounded-lg relative -top-32">
    <img src="../assets/images/logo-mastercraft.svg" class="absolute -top-5" alt="mastercraft-logo" width="50">
    <div id="wrapper" class="mt-8 text-center">
      <h1 class="text-3xl font-bold">Mastercraft Bamboo Monitor Riser</h1>
      <p class="text-dark-gray">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
    </div>
    <div id="action" class="flex flex-row justify-between mt-8 w-full lg:w-3/4">
      <button class="px-12 py-6 bg-dark-cyan rounded-full text-white font-bold">
        Back this project
      </button>
      <div class="flex flex-row items-center relative">
        <img src="../assets/images/icon-bookmark.svg" class="bookmark-btn text-white absolute -left-10" alt="bookmark-icon" width="65">
        <p class="bg-gray-200 py-5 px-12 rounded-r-full text-dark-gray font-bold">
          Bookmark
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BookmarkCard",
}
</script>

<style scoped>
  .bookmark-btn.active {
    filter: invert(39%) sepia(35%) saturate(839%) hue-rotate(127deg) brightness(95%) contrast(98%);
  }

  .bookmark-btn {
    filter: invert(40%) sepia(74%) saturate(0%) hue-rotate(173deg) brightness(103%) contrast(97%);
  }
</style>