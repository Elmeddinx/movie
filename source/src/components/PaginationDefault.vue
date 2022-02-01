<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" v-for="key in 10" :key="key">
        <router-link
          class="page-link"
          :to="{ name: 'Home', params: { id: key } }"
          >{{ key }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex !important;
  justify-content: center;
  margin-top: 3rem;
}
</style>