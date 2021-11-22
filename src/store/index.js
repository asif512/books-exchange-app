import Vue from "vue";
import Vuex from "vuex";
import { projectAuth } from "@/firebase/config.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  mutations: {
    SET_ACTIVE_USER(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    setActiveUser({ commit }) {
      console.log(projectAuth?.currentUser);
      commit("SET_ACTIVE_USER", projectAuth?.currentUser);
    },
  },
  getters: {
    activeUser: (state) => state.currentUser,
  },
  modules: {},
});
