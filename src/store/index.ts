import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: String
  },
  getters: {
    title: state => state.title
  },
  mutations: {
    TITLE_NAME: (state, title) => {
      state.title = title;
    }
  },
  modules: {}
});
