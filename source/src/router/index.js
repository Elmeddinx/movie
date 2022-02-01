import { createRouter, createWebHistory } from 'vue-router';
import Movie from '../components/Movie.vue';
import SearchCards from "../views/SearchCards.vue";
import DefaultCards from "../views/DefaultCards.vue";
const routes = [
  {
    path: '/:id?',
    name: 'Home',
    component: DefaultCards
  },
  {
    path: '/search/:id?',
    name: 'search',
    component: SearchCards
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
