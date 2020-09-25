import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { MovieState } from './types';
import { RootState } from '../types';

// const namespaced: boolean = true;

export const movie: Module<MovieState, RootState> = {
    getters,
    actions,
    mutations
};