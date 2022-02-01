<template>
  <div class="row">
    <SearchCard :key="this.$route.params.id" />
    <pagination-search />
  </div>
</template>


<script>
import PaginationSearch from "../components/PaginationSearch.vue";
import SearchCard from "../components/SearchCard.vue";
export default {
  components: {
    PaginationSearch,
    SearchCard,
  },
};
</script>
