<template>
  <div class="sidebar">
    <Filters />
    <button class="btn btn-info w-100">Add</button>
  </div>
</template>

<script>
import Filters from "./Filters.vue";

export default {
  components: { Filters },
};
</script>

<style lang="scss">
.sidebar {
  width: 250px;
  height: 100vh;
  // float: left;
  position: fixed;
  top: 55px;
  left: 0;
  background: #1b1e2b;
  padding: 15px;
  box-shadow: 1px 0px 3px rgba($color: #000000, $alpha: 0.1);
}
</style>
