import Vue from 'vue';


// interface movieType { 
//     movieInfo:Object,
//     title: string,
//   }

export const state = Vue.observable({ // this is the magic
    movieInfo: {
        id: [0],
        title: [''],
        description: 'red'
    }
});

// export const getters: any = {
//     title: () => { return state.title },
    // description: () => state.description
// }

/**
 * Mutation change state
 * @param {string} val - set title value to change state  
 * @param {string} val - set description value to change state 
 */
export const mutations: any = {
    setTitle: (val: string) => state.movieInfo.title.push(val),
    setId: (id: number) => state.movieInfo.id.push(id),
    setDescription: (val: string) => state.movieInfo.description = val
}

/**
 * Actions calls mutation 
 * @param {string} val - commit title value to change state  
 * @param {string} val - commit description value value to change state 
 */
export const actions: any = {
    title(val: string) {
        return mutations.setTitle(val);
    },
    id(id: number) {
        return mutations.setId(id);
    },
    description(val: string) {
        return mutations.setDescription(val);
    }
}