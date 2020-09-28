import { VuexModule, Module, getModule, Mutation, Action } from "vuex-module-decorators";
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

export default class Movie extends VuexModule {
  public movie = ''
  // public movie: string[] = []

  @Mutation
  private ADD_MOVIE(movie: string) {
    this.movie = movie
    // this.movie.push(movie);
  }

  @Action
  public AddMovie(movie: string) {
    return this.ADD_MOVIE(movie)
  }

}