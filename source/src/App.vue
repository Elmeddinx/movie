<template>
  <div class="container-fluid bg-dark px-0">
    <header-vue></header-vue>
    <div class="container py-5">
      <Cards/>
    </div>
  </div>
</template>
<script>
import HeaderVue from "./views/Header.vue"
import Cards from "./views/Cards.vue"
export default {
  components : {
    HeaderVue,
    Cards
  }
}
</script>
<style>

html {
  scroll-behavior: smooth;
}


</style>
