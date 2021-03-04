<template>
  <div class="card mb-4">
    <!-- <img :src="movie.poster" class="card-img-top" alt="..." /> -->
    <div class="card-body">
      <h5 class="card-title mb-0">{{ movie.name }}</h5>
      <small>{{ movie.genre }} ({{ movie.year }})</small>
      <small
        class="py-1 px-2 rounded ml-2"
        :style="{ 'background-color': getRatingColor() }"
      >
        {{ movie.rating }}
      </small>
      <p class="card-text mt-2">
        {{ movie.storyline.substr(0, 80) + "..." }}
      </p>

      <p class="card-text">
        <small class="text-muted"> </small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getRatingColor() {
      // console.log(this.movie);
      if (this.movie.rating > 7) return "#337F62";
      if (this.movie.rating > 4) return "#FFCA28";
      return "#FF7043";
    },
  },
};
</script>

<style></style>
