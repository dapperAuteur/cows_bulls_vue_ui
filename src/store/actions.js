import Vue from 'vue';
import store from './store';

export const loadData = ({ commit }) => {
  Vue.axios.get('players')
  .then(response => response.data)
  .then(data => {
    if (data) {
      const players = data;
      commit('SET_PLAYERS', players);
    };

  });

  Vue.axios.get('words')
    .then(response => response.data)
      .then(data => {
        if (data) {
          const words = data;
          commit('SET_LIBRARY', words);
        }
  });
}

export const savePlayer = ({ commit }, order) => {
  Vue.axios.post('players', order)
  .then(response => response.data)
  .then(data => {
    if (data) {
      console.log(data);
      const player = data;
      commit('SET_PLAYER', player);
    }
  });
}
