<template>
  <div class="font-Commissioner bg-gray-100">
    <Header/>
    <section class="relative -top-32">
      <BookmarkCard />
      <BrandStat />
      <AboutCard />
    </section>
  </div>
</template>

<script>
import Header from "./components/Header";
import BookmarkCard from "./components/BookmarkCard";
import BrandStat from "./components/BrandStat";
import AboutCard from "./components/AboutCard";

export default {
  name: 'App',
  components: {
    Header,
    BookmarkCard,
    BrandStat,
    AboutCard
  }
}
</script>

<style>

</style>
