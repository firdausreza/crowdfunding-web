<template>
  <div class="font-Commissioner bg-gray-100">
    <Header/>
    <section class="relative -top-32">
      <BookmarkCard />
      <BrandStat />
    </section>
  </div>
</template>

<script>
import Header from "./components/Header";
import BookmarkCard from "./components/BookmarkCard";
import BrandStat from "./components/BrandStat";

export default {
  name: 'App',
  components: {
    Header,
    BookmarkCard,
    BrandStat
  }
}
</script>

<style>

</style>
