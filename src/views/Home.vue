<template>
  <div class="home">
    <Navbar />

    <div class="main-wrapper">
      <Sidebar />
      <MovieList />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import MovieList from "../components/MovieList.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: { Navbar, Sidebar, MovieList },
};
</script>

<style lang="scss">
.main-wrapper {
  // display: flex;
}
</style>
