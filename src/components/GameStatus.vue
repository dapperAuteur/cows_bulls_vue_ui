<template>
  <div class="gameStatus">
    <h1>{{ gameStatus.message }}</h1>
    <h1>Cows: {{ gameStatus.cows }}</h1> <h1>Bulls: {{ gameStatus.bulls }}</h1>
    <h1>Attempts This Game: {{ gameStatus.attempts }}</h1>
    <div class="gameWonFalse"
      v-if="!gameStatus.won">
      <button
        @click="resetGame"
        >
        Reset Game?
      </button>
      <h3></h3>
    </div>
    <div class="gameWonTrue"
      v-if="gameStatus.won"
      >
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
  import { mapActions } from 'vuex';
  import { state, mutations, getters, } from './../store/modules/game';
  export default {
    name: 'gameStatus',
    data () {
      return {
        msg: 'game status message',
        bull: {
          count: 0
        },
        cow: {
          count: 0
        },
      }
    },
    computed: {
      gameStatus() {
        console.log(this.$store.state.game);
        return this.$store.state.game;
      }
    },
    methods: {
      ...mapActions({
        randomWord: 'randomWord',
      }),
      playAgain(){
        console.log("PLAY AGAIN");
        const data = {
          bulls: this.$store.state.game.bulls,
          cows: this.$store.state.game.cows,
          guesses: this.$store.state.game.guesses,
          library: this.$store.state.game.library,
          winning_word: this.$store.state.game.winning_word,
          word_to_consider_for_library: this.$store.state.game.word_to_consider_for_library
        };
        console.log(data);
        this.$http.put('games', data);
        this.$store.dispatch('randomWord');

      },
      resetGame(){
        this.randomWord();
      }
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
</style>
