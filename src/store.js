import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "@/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    COUNT: 0
  },
  getters: {
    DOUBLED_COUNT: (state, getters) => {
        return state.COUNT * 2;
    },
  },
  mutations: {
    INCREMENT_MUTATION: (state) => {
       state.COUNT++;
    },
    DECREMENT_MUTATION: (state, payload) => {
       state.COUNT-= payload;
    }
  },
  actions: {
    INCREMENT_ACTION (context) {
        context.commit('INCREMENT_MUTATION');
    },
    DECREMENT_ACTION (context, payload) {
        context.commit('DECREMENT_MUTATION', payload);
    }
  }
});


//export default new Vuex.Store({
//  state: {
//    CLICK: "Click",
//    COUNT: 0
//  },
//  getters: {
//    CLICK_ME: (state, getters) => {
//        return state.CLICK + ' me!';
//    },
//  },
//  mutations: mutations,
//  actions: {
//    INCREMENT_ACTION ({commit}) {
//        commit('INCREMENT_MUTATION');
//    }
//  },
//});


