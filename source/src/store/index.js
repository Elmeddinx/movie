import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    Movies: [],
    Movie: [],
    SearchMovies: [],
  },
  getters: {
    getMovies(state) {
      return state.Movies;
    },
    getMovie(state) {
      return state.Movie;
    },
    getSearchMovie(state) {
      return state.SearchMovies;
    }
  },
  mutations: {
    updateMovies(state, movies) {
      state.Movies = movies
    },
    updateMovie(state, movie) {
      state.Movie = movie
    },
    updateSearchMovie(state, sMovie) {
      state.SearchMovies = sMovie
    },
    removeSearchMovies(state) {
      state.SearchMovies = []
    }
  },
  actions: {
    getMovies({ commit }, id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=99448b9515c8fcdfc5b085944fd430a0&language=en-US&page=${id}`
        )
        .then((response) => {
          let movies = response.data.results
          commit("updateMovies", movies);
        });
    },
    getMovie({ commit }, id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=99448b9515c8fcdfc5b085944fd430a0&language=en-US`
        )
        .then((response) => {
          let movie = response.data;
          commit("updateMovie", movie);
        });
    },
    getSearchMovie({ commit }, payload) {
      if (payload.val) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=99448b9515c8fcdfc5b085944fd430a0&language=en-US&query=${payload.val}&page=${payload.id}`)
          .then(response => {
            commit("updateSearchMovie", response.data.results)
            console.log(payload.id)
          })
          .catch(err => console.log(err))
      }
      else {
        commit("removeSearchMovies");
      }
    }
  }
})
