import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "@/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    CLICK: "Click",
    COUNT: 0
  },
  getters: {
    CLICK_ME: (state, getters) => {
        return state.CLICK + ' me!';
    },
  },
  mutations: mutations,
//  actions: {
//    INCREMENT_ACTION ({commit}) {
//        commit('INCREMENT_MUTATION');
//    }
//  },
  actions: {
      INCREMENT_ACTION (context) {
          context.commit('INCREMENT_MUTATION');
      }
    }
});
