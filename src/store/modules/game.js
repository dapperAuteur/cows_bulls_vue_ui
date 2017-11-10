// import library from '../../data/library';

const state = {
  bulls: 0,
  cows: 0,
  gameStatus: {},
  guess: {},
  guesses: [],
  library: [],
  player: {},
  players: [],
  winningWord: {},
  word: {},
  wordToConsiderForLibrary: []
};

const mutations = {
  'ADD_BULL' (state, { game }) {
    // console.log(state);
    state.bulls++;
  },
  'ADD_COW' (state, { cows, bulls }) {
    // console.log(state);
    state.cows++;
  },
  'COMPARE_GUESS_TO_WORD' (state, { guess, player }) {
    state.gameStatus.attemptsThisGame++;
    const winningWord = state.winningWord;
    // console.log(winningWord);
    const currentGuess =
    state.library.find(element => element.word == guess);
    if (currentGuess) {
      // console.log("'" + currentGuess.word + "' is in the library.");
      if (winningWord == currentGuess) {
        state.guesses.push(currentGuess);
        state.gameStatus.playerPoints += 500;
        state.bulls = 4;
        state.cows = 0;
        state.gameStatus.won = true;
        state.gameStatus.gamesWon++;
        state.gameStatus.gamesPlayed++;
        state.gameStatus.message = "You Win! '" + currentGuess.word + "' is the word.";
        // // console.log("You Win! " + currentGuess.word + " is the word.");
      } else {
        state.guesses.push(currentGuess);
        // console.log("You didn't win yet. '" + currentGuess.word + "' is NOT the word.");
        state.gameStatus.message = "You didn't win yet. '" + currentGuess.word + "' is NOT the word.";
        const arrCurrentGuess = currentGuess.word.split("");
        const arrWinningWord = winningWord.word.split("");
        // console.log(arrCurrentGuess);
        console.log(arrWinningWord);
        state.cows = 0;
        state.bulls = 0;
        for(var i = 0; i < arrCurrentGuess.length; i++){
          for(var j = 0; j < arrWinningWord.length; j++){
            if(arrCurrentGuess[i] == arrWinningWord[j]){
              if(i == j){
                state.bulls++;
                state.gameStatus.playerPoints += 100;
                state.gameStatus.won= false;
              } else {
                state.cows++;
                state.gameStatus.playerPoints += 50;
                state.gameStatus.won = false;
              }
            };
          }
        }
        state.gameStatus.playerPoints += 0;
        state.gameStatus.won = false;
        state.guesses = state.guesses;
        state.guess = currentGuess;
        state.winningWord = winningWord;
        state.cows = state.cows;
        state.bulls = state.bulls;
        // console.log("cows: " + state.cows);
        // console.log("bulls: " + state.bulls);
      }
    } else {
      // state.wordToConsiderForLibrary.push(guess);
      state.cows = 0;
      state.bulls = 0;
      // console.log("cows: " + state.cows);
      // console.log("bulls: " + state.bulls);
      state.gameStatus.playerPoints -= 200;
      state.gameStatus.won = false;
      // console.log("'" + guess + "' is NOT in the library.");
      // console.log("We will consider adding your guess of '" + guess + "' to the library.");
      state.gameStatus.message = "'" + guess + "' is NOT in the library. " + "We will consider adding your guess of '" + guess + "' to the library.";
      state.wordToConsiderForLibrary.push({
        guess: guess,
        player: player
      });
      // console.log(state.wordToConsiderForLibrary);
    }
    return state;
  },
  'SET_GAME_STATUS' (state, gameStatus) {
    // console.log(gameStatus);
    if (gameStatus == undefined) {
      state.gameStatus = {
        attempts: 0,
        bulls: 0,
        cows: 0,
        guess: "",
        guesses: [],
        message: "What's The Word!?",//needs to be added to API
        multiplayer: false,
        score: 0,
        winningWord: "",
        won: false,
        player: {},
        winner: {}
      }
    } else {
      state.gameStatus = gameStatus;
      // console.log(gameStatus);
    }

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
    state.winningWord = state.library[Math.floor(Math.random() * state.library.length)];
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
  setGameStatus: ({ commit }) => {
    commit('SET_GAME_STATUS');
  },
  createPlayer: ({ commit }, order) => {
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
  gameStatus: state => {
    return state.gameStatus;
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
  winningWord: state => {
    return state.winningWord;
  },
  wordToConsiderForLibrary: state => {
    return state.wordToConsiderForLibrary;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
