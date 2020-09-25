import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { movie } from './movie/index'
// import Vuex from "vuex";
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
      version: '1.0.0' // a simple property
  },
  modules: {
      movie
  }
};
export default new Vuex.Store<RootState>(store);



// import Component from 'vue-class-component'
// import {
//   State,
//   Getter,
//   Action,
//   Mutation,
//   namespace
// } from 'vuex-class'


// const someModule = namespace('path/to/module')

// @Component
// export default class movieStore extends Vue {

//   @State('title') stateTitle?: string[];
//   @Getter('title') getterTitle?: string[];
//   @Mutation('TITLE_NAME') mutationTitle!: any

//   created () {
//     this.stateTitle
//     this.getterTitle
//   }
// }






// export default new Vuex.Store({
//   state: {
//     title: String,
//     description: String,
//     genre: String
//   },
//   getters: {
//     title: state => state.title,
//     description: state => state.description,
//     genre: state => state.genre
//   },
//   mutations: {
//     MOVIE_TITLE: (state, title) => {
//       state.title = title;
//     },
//     MOVIE_DESCRIPTION: (state, description) => {
//       state.description = description;
//     },
//     MOVIE_GENRE: (state, genre) => {
//       state.genre = genre;
//     }
//   },
//   modules: {}
// });


// const testModule = namespace('film')

  // @testModule.Action('nomAction') private readonly nomAction!: any;
  // @testModule.Getter('nomAction') private readonly nomGetter!: any;