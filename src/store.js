import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "@/mutations";
import { getPhotos } from "@/Api";
import _ from 'lodash';

Vue.use(Vuex);
const SUB_MODULE_A = {
  namespaced: true,
  state: {
    NAMESPACE: 'APP/MODULE_A/SUB_MODULE_A',
    DAD_JOKE: 'What do you call a fake noodle?',
    DAD_PUNCHLINE: 'An Impasta.',
    WALDO : '/img/waldoC.jpg',
    LABEL: 'Lil\' A'
  },
  getters: {},
  mutations: {},
  actions: {}
}
const MODULE_A = {
  namespaced: true,
  state: {
    NAMESPACE: 'APP/MODULE_A',
    DAD_JOKE: 'How many apples grow on a tree?',
    DAD_PUNCHLINE: 'All of them.',
    WALDO : '/img/waldoA.jpg',
    LABEL: 'A'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    SUB_MODULE_A: SUB_MODULE_A
  }
} 


const MODULE_B = {
  namespaced: true,
  state: {
    NAMESPACE: 'APP/MODULE_B',
    DAD_JOKE: 'Why couldn\'t the bicycle stand up by itself?',
    DAD_PUNCHLINE: 'It was two tired.',
    WALDO : '/img/waldoB.png',
    LABEL: 'B'
  },
  getters: {},
  mutations: {},
  actions: {}
} 

const STORE = {
  namespaced: true,
  state: {
    NAMESPACE: 'APP',
    DAD_JOKE: 'I just watched a program about beavers.',
    DAD_PUNCHLINE: 'It was the best dam program I\'ve ever seen.',
    WALDO : '/img/waldo.png',
    LABEL: 'APP'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    MODULE_A: MODULE_A,
    MODULE_B: MODULE_B
  }
}  


const ASYNC_DEMO = {
  namespaced: true,
  state: {
    NAMESPACE: 'ASYNC_DEMO',
    PHOTOS: []
  },
  getters: {
    GET_PHOTO_BY_ID: (state) => (id) => {
      if(state.PHOTOS.length) {
        return state.PHOTOS.find(photo => photo.id === id).thumbnailUrl;
      }
      return '';
    },
    GET_RANDOM_PHOTO: (state) => {
      if(state.PHOTOS.length) {
        return _.sample(state.PHOTOS).thumbnailUrl;
      }
      return '';
    }
  },
  mutations: {
    UPDATE_PHOTOS: (state, photos) => {
      state.PHOTOS = photos;
    },
    SHUFFLE_PHOTOS: (state) => {
      state.PHOTOS = _.shuffle(state.PHOTOS);
    }
  },
  actions: {
    GET_PHOTOS({commit}){
      return new Promise((resolve, reject) => {
        getPhotos()
          .then((response)=> {
            commit('UPDATE_PHOTOS', response.data || []);
            resolve(response);
          })
          .catch(() => {
            reject('It broke.');
          })    
      });
    }
  },
  modules: {
  }
}

export default new Vuex.Store({
  state: {
    NAMESPACE: 'GLOBAL',
    BULLET_POINTS_VISIBLE: true,
    ACTIVE_TAB: '',
    INPUT: '',
  },
  getters: { },
  mutations: {
    UPDATE_BULLET_POINTS: (state, payload) => {
      localStorage.setItem('bulletPointsVisible', payload);
      state.BULLET_POINTS_VISIBLE = payload; 
    },
    UPDATE_ACTIVE_TAB: (state, payload) => {
      localStorage.setItem('activeTab', payload);
      state.ACTIVE_TAB = payload; 
    },
    UPDATE_INPUT: (state, input) => {
      state.INPUT = input;
    },
  },
  actions: {
    LOAD_BULLET_POINTS_SERIALIZED_STATE({commit}) {
      const visible = localStorage.getItem('bulletPointsVisible') === 'true' ? true : false;
      commit('UPDATE_BULLET_POINTS', visible);
    },
    LOAD_ACTIVE_TAB_SERIALIZED_STATE({commit}) {
      const activeTab = localStorage.getItem('activeTab');
      if (!activeTab) {
        commit('UPDATE_ACTIVE_TAB', 'Modules');
      } else {
        commit('UPDATE_ACTIVE_TAB', activeTab);
      }
      
    },
    TOGGLE_BULLET_POINTS({commit, state}){
      commit('UPDATE_BULLET_POINTS', !state.BULLET_POINTS_VISIBLE);
    }
  },
  modules: {
    APP: STORE,
    ASYNC_DEMO: ASYNC_DEMO
  }
});



