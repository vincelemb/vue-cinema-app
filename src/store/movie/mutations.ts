import { MutationTree } from 'vuex';
import { MovieState } from './types';

export const mutations: MutationTree<MovieState> = {
    MOVIE_INFO(state, payload) {
        state.title = payload;
    }
};