<template>
  <div class="movie-list-wrapper">
    <div class="card-columns">
      <Movie v-for="(movie, index) in movies" :key="index" :movie="movie" />
    </div>
  </div>
</template>

<script>
import Movie from "./Movie.vue";

export default {
  components: { Movie },
  // data() {
  //   return { movies: [] };
  // },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
  },
};

// console.log(movies);
</script>

<style lang="scss">
.movie-list-wrapper {
  padding: 20px;
  width: calc(100% - 250px);
  float: right;
  margin-top: 55px;
}

@media (min-width: 576px) {
  .card-columns {
    column-count: 4 !important;
  }
}
</style>
