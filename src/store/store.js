import Vue from 'vue';
import Vuex from 'vuex';

import game from './modules/game';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    game
  }
});
