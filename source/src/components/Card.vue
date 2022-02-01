<template>
  <div
    class="col-6 col-md-4 col-lg-3"
    v-for="(data, key) in getMovies"
    :key="key"
  >
    <div class="card border-0 rounded">
      <router-link :to="{ name: 'Movie', params: { id: data.id } }">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`"
          alt=""
          class="card-img-top"
        />
      </router-link>
      <div class="card-footer bg-transparent">
        <h6>{{ data.title }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getMovies"]),
  },
  mounted() {
    this.$store.dispatch("getMovies", this.$route.params.id);
  },
};
</script>