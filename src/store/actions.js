import Vue from 'vue';
import store from './store';

export const loadData = ({ commit }) => {
  Vue.axios.get('players')
  .then(response => response.data)
  .then(data => {
    if (data) {
      const players = data;
      console.log(store.state);
      commit('SET_PLAYERS', players);
      console.log(store.state);
    };

  });

  Vue.axios.get('words')
    .then(response => response.data)
      .then(data => {
        if (data) {
          const words = data;
          // console.log(store.state);
          commit('SET_LIBRARY', words);
          // console.log(store.state);
        }
  });

  // Vue.axios.get('game-statuses')
  //   .then(response => response.data)
  //     .then(data => {
  //       if (data) {
  //         const gameStatus = data;
  //         console.log(store.state);
  //         commit('SET_GAME_STATUS', gameStatus);
  //         console.log(store.state);
  //       }
  // });
}

export const savePlayer = ({ commit }) => {
  console.log(commit);

  Vue.axios.post('players')
  .then(response => response.data)
  .then(data => {
    if (data) {
      console.log(data);
      const player = data;
      // console.log(player);
      // console.log(store.state);
      commit('SET_PLAYER', player);
      // console.log(store.state);
    }
  });
}
