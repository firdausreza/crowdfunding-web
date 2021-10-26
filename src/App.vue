<template>
  <div class="font-Commissioner bg-gray-100">
    <Header/>
    <BookmarkCard />
  </div>
</template>

<script>
import Header from "./components/Header";
import BookmarkCard from "./components/BookmarkCard";

export default {
  name: 'App',
  components: {
    Header,
    BookmarkCard
  }
}
</script>

<style>

</style>
