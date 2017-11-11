<template>
  <div class="game">
      <h1>{{ msg }}</h1>
      <app-game-status></app-game-status>
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
</template>

<script>
  import store from './../store/store';
  import GameStatus from './GameStatus';
  // import Letters from './Letters';

  export default {
    name: 'game',
    data () {
      return {
        msg: 'Make A Guess!',
        player: 'Earl',
        winning_word: 'wins',
        word: 'wisp',
      }
    },
    components: {
      appGameStatus: GameStatus,
      // appLetters: Letters
    },
    computed: {
      gameStatus() {
        return this.$store.state.game;
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
        compareWords(winning_word, wordSubmitted);
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
