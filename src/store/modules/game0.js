// import library from '../../data/library';

const state = {
  attempts: 0,
  bulls: 0,
  cows: 0,
  // game_id: X,
  games_played: 0,
  games_won: 0,
  guess: {},
  guesses: [],
  high_scores: [],
  library: [],
  player: {},
  players: [],
  score: 0,
  winning_word: {},
  won: false,
  // word: {},
  word_to_consider_for_library: []
};

const mutations = {
  'ADD_BULL' (state, { game }) {
    state.bulls++;
  },
  'ADD_COW' (state, { cows, bulls }) {
    state.cows++;
  },
  'COMPARE_GUESS_TO_WORD' (state, { guess, player }) {
    state.attempts++;
    const winning_word = state.winning_word;
    const currentGuess =
    state.library.find(element => element.word == guess);
    if (currentGuess) {
      if (winning_word == currentGuess) {
        state.guesses.push(currentGuess);
        state.score += 500;
        state.bulls = 4;
        state.cows = 0;
        state.won = true;
        state.games_won++;
        state.games_played++;
        state.message = "You Win! '" + currentGuess.word + "' is the word.";
      } else {
        state.guesses.push(currentGuess);
        state.message = "You didn't win yet. '" + currentGuess.word + "' is NOT the word.";
        const arr_current_guess = currentGuess.word.split("");
        const arr_winning_word = winning_word.word.split("");
        state.cows = 0;
        state.bulls = 0;
        var arr_dummy_guess = [];
        for(var i = 0; i < arr_current_guess.length; i++){
          for(var j = 0; j < arr_winning_word.length; j++){
            if(arr_current_guess[i] == arr_winning_word[j]){
              if(i == j){
                console.log(arr_current_guess[i]);
                state.bulls++;
                state.score += 100;
                state.won= false;
                arr_current_guess[i] = 0;
                arr_winning_word[j] = 0;
                console.log(arr_current_guess);
                console.log("bulls: " + state.bulls);
                console.log("cows: " + state.cows);
              } else {
                console.log(arr_current_guess);
                arr_dummy_guess.push(arr_current_guess[i]);
                // console.log("arr_dummy_guess");
                console.log(arr_dummy_guess);
                state.cows++;
                state.score += 50;
                state.won = false;
                arr_current_guess[i] = 0;
                arr_winning_word[j] = 0;
              }
            };
          }
        }
        state.score += 0;
        state.won = false;
        state.guesses = state.guesses;
        state.guess = currentGuess;
        state.winning_word = winning_word;
        state.cows = state.cows;
        state.bulls = state.bulls;
      }
    } else {
      state.cows = 0;
      state.bulls = 0;
      state.score -= 200;
      state.won = false;
      state.message = "'" + guess + "' is NOT in the library. " + "We will consider adding your guess of '" + guess + "' to the library.";
      state.word_to_consider_for_library.push({
        // game: state.game_id,
        guess: guess,
        player: player
      });
    }
    console.log(state);
    return state;
  },
  'SET_GUESS' (state, { guess, player }) {
    const record = state.guesses.find(element => element == guess);
    if (record) {
      // console.log("'" + guess + "' already made. Make another guess.");
    } else {
      // console.log("The player guess is: '" + guess + "'");
      state.guess = guess;
      state.guesses.push({
        guess: guess,
        player: player
      });
      // console.log(state.guesses);
    }
  },
  'SET_LIBRARY' (state, library) {
    state.library = library;
  },
  'CREATE_PLAYER'(state, {firstName, lastName, email, username, password}) {
    console.log(state);
    state.player = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password
    };
    console.log(state);
    // this.$store.actions('savePlayer', order);
  },
  'SET_PLAYER' (state, player) {
    console.log(state);
    // if (player == undefined) {
    //   state.player = {
    //     id: 1,
    //     email: "aweful@awews.com",
    //     firstName: "",
    //     middleName: "",
    //     lastName: "",
    //     gamesPlayed: 0
    //   }
    // } else {
    //   state.player = player;
    // }
  },
  'SET_PLAYERS' (state, players) {
    if (players == undefined) {
      console.log("we need players");
    } else {
      state.players = players
    }
  },
  'RND_WORD' (state) {
    // choose random word that the player needs to guess.
    console.log(state.winning_word);
    console.log(state.library);
    state.winning_word = state.library[Math.floor(Math.random() * state.library.length)];
    console.log(state.winning_word);
  }
};

const actions = {
  addBull: ({ commit }) => {
    commit('ADD_BULL');
  },
  addCow: ({ commit }) => {
    commit('ADD_COW');
  },
  compareWords: ({ commit }, order) => {
    commit('COMPARE_GUESS_TO_WORD', order);
  },
  initWords: ({ commit }) => {
    // get words from library to compare against player guesses and choose for winning word
    // if player guess isn't in the library send alert to player that it isn't a recognized word and that it will be considered as a new word for the library, then check to see if it is a word before adding to library
    console.log("initWords state.library");
    commit('SET_LIBRARY', library);
    console.log(state.library);
  },
  randomWord: ({ commit }) => {
    commit('RND_WORD');
  },
  createPlayer: ({ commit }, order) => {
    console.log(order);
    commit('CREATE_PLAYER', order);
  },
  setPlayer: ({ commit }, order) => {
    commit('SET_PLAYER', order);
  },
  setPlayers: ({ commit }) => {
    commit('SET_PLAYERS');
  },
  setScore: ({ commit }) => {
    commit('');
  }
};

const getters = {
  bulls: state => {
    return state.bulls;
  },
  cows: state => {
    return state.cows;
  },
  guess: state => {
    return state.guess;
  },
  guesses: state => {
    return state.guesses;
  },
  library: state => {
    return state.library;
  },
  player: state => {
    return state.player;
  },
  players: state => {
    return state.players;
  },
  winning_word: state => {
    return state.winning_word;
  },
  word_to_consider_for_library: state => {
    return state.word_to_consider_for_library;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
