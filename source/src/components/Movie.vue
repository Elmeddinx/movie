<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-5 col-xl-4">
      <div class="card bg-transparent border-0">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${getMovie.poster_path}`"
          alt=""
        />
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-7 col-xl-8">
      <div class="card bg-transparent border-0">
        <h1 class="card-title text-white">{{ getMovie.title }}</h1>
        <p class="card-text text-white mt-4">
          Description: {{ getMovie.overview }}
        </p>
        <span class="text-white my-4"
          >Release Date: {{ getMovie.release_date }}</span
        >
        <span class="text-white mb-5">Rate: {{ getMovie.vote_average }}</span>
        <div class="buttons d-flex">
          <router-link tag="button" class="btn btn-danger" to="/"
            >Back To Home</router-link
          >
          <button class="btn btn-danger">
            <i class="bi bi-heart-fill"></i>
          </button>
          <button class="btn btn-danger">
            <i class="bi bi-share-fill"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getMovie"]),
  },
  mounted() {
    this.$store.dispatch("getMovie", this.$route.params.id);
  },
};
</script>

<style scoped>
.buttons {
  column-gap: 1rem;
}
</style>