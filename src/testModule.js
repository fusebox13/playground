import Vue from 'vue'
import Vuex from 'vuex'
import { getPhotos } from './Api';

Vue.use(Vuex);

export const state = {
    COUNT: 0,
    PHOTOS: [],
    GET_PHOTOS_ERROR: ''
}

export const getters = {
    GET_DOUBLED_COUNT: (state) => {
        return state.COUNT * 2;
    }
}

export const mutations = {
    INCREMENT: (state) => {
        state.COUNT++;
    },
    UPDATE_PHOTOS: (state, payload) => {
        state.PHOTOS = payload;
    },
    UPDATE_GET_PHOTOS_ERROR: (state, payload) => {
        state.GET_PHOTOS_ERROR = payload;
    }
}

export const actions = {
    async LOAD_PHOTOS({commit}){
        // --- Fancy but impractical ---
        // return commit('UPDATE_PHOTOS', photos);

        // --- Old school (Easy to test/understand)
        return getPhotos()
            .then((response) => {
                commit('UPDATE_PHOTOS', response)
            })
            .catch((error) => {
                commit('UPDATE_GET_PHOTOS_ERROR', error.name)
            });
        
        // --- New school (Easy to test/understand)
        // return await getPhotos()
        //     .then(response => commit('UPDATE_PHOTOS', response))
        //     .catch(error => commit('UPDATE_GET_PHOTOS_ERROR', error.name));
        
        // --- Experimental (Find a better design) ---
        // return new Promise((resolve, reject) => {
        //   getPhotos()
        //     .then((response)=> {
        //       console.log(response);
        //       commit('UPDATE_PHOTOS', response.data || []);
        //       resolve(response);
        //     })
        //     .catch((error) => {
        //       reject(error);
        //     })    
        // });
        
      }
}


export default new Vuex.Store({ 
    state, getters, mutations, actions 
});