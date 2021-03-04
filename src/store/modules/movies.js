import movieList from "../../assets/movie-list";

const SET_SEARCH = "SET_SEARCH";
const SET_FILTER = "SET_FILTER";
const state = {
  movies: movieList,
  search: "",
  filter: {
    key: "rating",
    order: "desc",
  },
};

const mutations = {
  [SET_SEARCH](state, search) {
    state.search = search;
  },
  [SET_FILTER](state, filter) {
    state.filter = filter;
  },
};

const actions = {
  search({ commit }, payload) {
    commit(SET_SEARCH, payload);
  },
  filter({ commit }, payload) {
    commit(SET_FILTER, payload);
  },
};

const getters = {
  getMovies: (state) => {
    // pass parameter inside getMovies function "state"
    // get movie list from state
    // console.log(state.movies);

    return state.movies
      .filter(
        (movie) =>
          movie.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1
      )
      .sort(compare(state.filter));
  },
};

const compare = ({ key, order }) => {
  return (a, b) => {
    let result = 0; // result 0 means "a" and "b" are equal

    if (a[key] > b[key]) {
      result = 1;
    }
    if (a[key] < b[key]) {
      result = -1;
    }

    if (order === "asc") return result;

    return (result = -1);
  };
};

export default { state, mutations, actions, getters };
