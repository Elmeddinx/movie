<template>
  <div class="container-fluid px-0">
    <div class="container">
      <div class="card bg-transparent border-0">
        <span class="text-danger">Now Streaming</span>
        <h1 class="text-white mb-4">Come on search for a new movie</h1>
        <form action="" class="d-flex" v-on:input.prevent="getSearchMovie">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search Movie"
              v-model="searchMovie"
            />
          </div>
          <button class="btn btn-danger" @click.prevent="getSearchMovie">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchMovie: "",
    };
  },
  
  methods: {
    getSearchMovie() {
      if (this.searchMovie.length !== 0) {
        this.$router.push("/search/");
      } else {
        this.$router.push("/");
      }

      this.$store.dispatch("getSearchMovie", {
        val: this.searchMovie,
        id: this.$route.params.id,
      });
      console.log(this.$route.params.id);
    },
  },
};
</script>



<style scoped>
.container-fluid {
  background-image: url("../assets/3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}
.container {
  min-height: 50vh;
  display: flex;
  align-items: center;
}
form {
  column-gap: 1rem;
}
</style>