<template>
  <div class="game">
    <div class="gameWonFalse"
      v-if="!gameStatus.won">
      <h1>{{ msg }}</h1>
      <!-- <app-game-status></app-game-status> -->
      <h1>Cows && Bulls</h1>
      <h2>show me during the game</h2>
      <b-field>
        <b-input
        placeholder="Make A Guess"
        type="text"
        v-model="word"
        >
        </b-input>
      </b-field>
      <h3
        class="warning"
        v-if="word.length !== 4"
        >
        Word Must Have 4 Letters Only!
      </h3>
      <button
        @click="compareWords"
        :disabled="word.length !== 4">
        Compare Word
      </button>
      <!-- <app-letters></app-letters> -->
    </div>
    <div class="gameWonTrue"
      v-if="gameStatus.won"
      >
      <!-- <app-game-status></app-game-status> -->
      <h1>Cows && Bulls</h1>
      <button
        @click="playAgain"
        >
        Play Again?
      </button>
    </div>

  </div>
</template>

<script>
  import store from './../store/store';
  // import GameStatus from './GameStatus';
  // import Letters from './Letters';

  export default {
    name: 'game',
    data () {
      return {
        msg: 'Make A Guess!',
        player: 'Earl',
        winningWord: 'wins',
        word: 'wisp',
      }
    },
    components: {
      // appGameStatus: GameStatus,
      // appLetters: Letters
    },
    computed: {
      gameStatus() {
      //   return {
      //   attempts: 0,
      //   bulls: 0,
      //   cows: 0,
      //   guess: "",
      //   guesses: [],
      //   message: "What's The Word!?",//needs to be added to API
      //   multiplayer: false,
      //   score: 0,
      //   winningWord: "",
      //   won: false,
      //   player: {},
      //   winner: {}
      // }
        return this.$store.state.words.gameStatus;
      }
    },
    methods: {
      compareWords() {
        const order = {
          guess: this.word.toLowerCase(),
          player: this.player
        };
        console.log(order);
        this.$store.dispatch('compareWords', order);
        // if(this.word == this.winningWord) {
        //   console.log("You Win!");
        //   console.log("The word is " + this.winningWord + ".");
        // } else {
        //   console.log(this.word + " is NOT the word.");
        // }
      },
      playAgain(){
        console.log("PLAY AGAIN");
        const data = {
          bulls: this.$store.state.words.bulls,
          cows: this.$store.state.words.cows,
          gameStatus: this.$store.state.words.gameStatus,
          guess: this.$store.state.words.guess,
          guesses: this.$store.state.words.guesses,
          library: this.$store.state.words.library,
          winningWord: this.$store.state.words.winningWord,
          wordToConsiderForLibrary: this.$store.state.words.wordToConsiderForLibrary
        };
        console.log(data);
        this.$http.put('data.json', data);
        this.$store.dispatch('randomWord');

      },
      submitWord(){
        const order = {
          guess: this.word.toLowerCase(),
          player: this.player
        };
        console.log(order);
        console.log(this.word.toLowerCase() + " is my guess!");
        this.$store.state.guess = this.word;
        // call mutation to put guess into guesses array
        console.log("Guess is: " + this.$store.state.guess);
        console.log("Guesses list is: " + this.$store.state.guesses);
        compareWords(winningWord, wordSubmitted);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.warning {
  color: red;
}
</style>
