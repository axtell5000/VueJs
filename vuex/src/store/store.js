import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {    
    value: 0
  },
  // getters - like computed function for the store. Centralizes functions that uses the state from the store
  getters: getters,
  // mutations just like this can only work with synchronous code, if needed to work with async code one needs to work with actions
  mutations: mutations,
  actions,
  modules: {
    counter: counter
  }
});