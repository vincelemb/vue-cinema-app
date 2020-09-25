import { GetterTree } from 'vuex';
import { MovieState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<MovieState, RootState> = {
    title(state): string{
        return state.title;
    },
    description(state): string{
        return state.description;
    }
};