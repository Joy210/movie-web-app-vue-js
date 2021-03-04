<template>
  <div class="filters">
    <ul
      v-for="(filter, index) in filters"
      :key="index"
      @click="applyFilter(filter)"
    >
      <li>{{ filter.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        {
          name: "Rating highest",
          key: "rating",
          order: "desc",
        },
        {
          name: "Rating lowest",
          key: "rating",
          order: "asc",
        },
        {
          name: "Year newest",
          key: "year",
          order: "desc",
        },
        {
          name: "Year oldest",
          key: "year",
          order: "asc",
        },
      ],
    };
  },
  methods: {
    applyFilter(filter) {
      this.$store.dispatch("filter", filter);
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  ul {
    margin-top: 10px;

    li {
      width: 100%;
      font-weight: 300;
      // line-height: 30px;
    }
  }
}
</style>
