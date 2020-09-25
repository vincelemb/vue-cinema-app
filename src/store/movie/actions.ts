import { ActionTree } from 'vuex';
// import axios from 'axios';
import { MovieState } from './types';
import { RootState } from '../types';


export const actions: ActionTree<MovieState, RootState> = {
    // fetchData({ commit }): any {
    //     axios({
    //         url: 'https://....'
    //     }).then((response) => {
    //         const payload: User = response && response.data;
    //         commit('profileLoaded', payload);
    //     }, (error) => {
    //         console.log(error);
    //         commit('profileError');
    //     });
    // }
};