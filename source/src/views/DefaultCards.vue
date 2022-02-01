<template>

  <div class="row">
    <Card :key="this.$route.params.id" />
    <pagination-default />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PaginationDefault from "../components/PaginationDefault.vue";
import Card from "../components/Card.vue";
export default {
  components: {
    PaginationDefault,
    Card,
  },
  computed: {
    ...mapGetters(["ifSearchMovies"]),
  },
};
</script>

<style scoped>
.card-footer {
  min-height: 4rem;
}
.row {
  row-gap: 1.5em;
}
</style>