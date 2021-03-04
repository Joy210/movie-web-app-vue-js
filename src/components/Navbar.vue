<template>
  <div class="nav-wrapper" id="nav_wrapper">
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="" />
        Entertainment.io</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0 ml-auto">
          <input
            v-model="search"
            class="form-control"
            type="search"
            placeholder="Find movie..."
            aria-label="Search"
          />
          <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button> -->
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  // allow us to listen to any changes inside our data
  watch: {
    search() {
      this.$store.dispatch("search", this.search);
    },
  },
};
</script>

<style lang="scss">
.navbar {
  height: 55px;

  .navbar-brand {
    img {
      height: 30px;
      margin-right: 6px;
    }
  }

  form {
    .form-control {
      border: 0;
      transition: all 0.3s ease-in-out 0s;
    }

    // .form-control:focus {
    //   width: 350px;
    // }
  }
}
</style>
