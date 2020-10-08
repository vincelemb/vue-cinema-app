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
    favoriteMovie(context, {payload}){
      context.commit('setFavoriteMovie', payload)
    }
    // movieInfos({commit}, payload){
    //   commit('setMovieInfos', payload);
    // }
    
  },

  mutations: {
    /**
     * Check first if movie title already exist, and push into object only if it doesn't exist on array
     * @param {object} state - State you want to input movie to (for movieArray)
     * @param {àbject} param1 - Movie parameters for "movieInfos" state 
     */
    SET_FAVORITE_MOVIE: function(state, {title, description, id, imgName}){
      const found = state.moviesArray.some(index => index.title === title);
      if (!found) state.moviesArray.push({title, description, id, imgName})
    },

    /**
     * Check if movie title already exist in state object index, and delete it
     * @param {object} state - State you want to delete movie to
     * @param {string} title - String refere to movie title you want to delete
     */
    DELETE_FAVORITE_MOVIE: function(state, title){
      const index = state.moviesArray.findIndex(movie => movie.title === title);
      state.moviesArray.splice(index, 1);
    },

    // setMovieInfos( state, {title, description, id, imgName}){
    //   console.log(title, description, id, imgName)
      
    //   state.movieInfos.description = description;
    //   state.movieInfos.title = title;
    //   state.movieInfos.id = id;
    //   state.movieInfos.imgName = imgName;
    // },
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
}