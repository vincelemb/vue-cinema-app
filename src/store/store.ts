import Vue from 'vue';
import Vuex from 'vuex';
import ToDoModel from './models/movieModel';

//WIP : Passage dans un seul store : https://medium.com/@RupaniChirag/vuex-with-typescript-b83a62aa48a8
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieInfo: String
    // todos: Array<ToDoModel>()
  },

  mutations: {
    MOVIE_INFO: (state, todoModel: ToDoModel) => {
    //   state.movieInfo.push(todoModel);
      state.movieInfo = 'todoModel'
    }
    // addToDo(state, todoModel: ToDoModel) {
    //   state.todos.push(todoModel);
    // }
  },
  actions: {
    MOVIE_INFO(context, todoModel: ToDoModel) {
      context.commit('MOVIE_INFO', todoModel);
    }
  }
});