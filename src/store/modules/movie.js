
// import store from "@/store/store";
/**
 * When namespaced is set to true, contents of the module is automatically namedspaced based on name.
 * Vuex allows adding modules to store dynamically after store is created, we set it to true.
 * store is the Vuex store to which we need to insert our module.
 */
// @Module({
//   namespaced: true,
//   name: "movie",
//   store,
// })

export const Movie = {
  state: {
    movieInfos : {
      title:'',
      description:'',
      id:0,
      imgName:'',
    },
    moviesArray:[],
  },

  actions: {
    // movieInfos({commit}, payload){
    //   commit('setMovieInfos', payload);
    // }

    favoriteMovie(context, {payload}){
      context.commit('setFavoriteMovie', payload)
    }

  },

  mutations: {
    setMovieInfos( state, {title, description, id, imgName}){
      console.log(title, description, id, imgName)
      
      state.movieInfos.description = description;
      state.movieInfos.title = title;
      state.movieInfos.id = id;
      state.movieInfos.imgName = imgName;
    },
    
    setFavoriteMovie(state, {title, description, id, imgName}){
      const found = state.moviesArray.some(index => index.title === title);
      // console.log(found)
      if (!found) state.moviesArray.push({title, description, id, imgName})
      // state.moviesArray.push({title, description, id, imgName})
      
    }
  },

  getters: {

    getFavoritesMovie( state ){
      return state.moviesArray;
    },

    getMovieTitle( state ){
      return state.movieInfos.title;
    },

    getMovieDesc( state ){
      return state.movieInfos.description;
    },

    getMovieId( state ){
      return state.movieInfos.id;
    },
    getMovieImg( state ){
      return state.movieInfos.imgName;
    },
  }

  // public movie = ''
  // // public movie: string[] = []

  // @Mutation
  // private ADD_MOVIE(movie: string) {
  //   this.movie = movie
  //   // this.movie.push(movie);
  // }

  // @Action
  // public AddMovie(movie: string) {
  //   return this.ADD_MOVIE(movie)
  // }

}