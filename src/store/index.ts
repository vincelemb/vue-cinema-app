import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: Number
  },
  getters: {
    results: state => state.results
  },
  mutations: {
    SAVE_ID_MOVIE: (state, result) => {
      state.results = result;
    }
  },
  // actions: {
  //   setMovie({state}, data){
  //     commit('ADD_MOVIE', data)
  //   }
  // },
  modules: {}
});
