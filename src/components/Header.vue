<template>
  <nav class="nav is-primary">
    <div class="nav-left">
        <a class="nav-item">
          <router-link to="/"
            class="navbar-brand">
            Cows && Bulls
          </router-link>
        </a>
        <!-- <h1>Player Points: {{ gameStatus.playerPoints }}</h1> -->
        <!-- <h1>Game Won: {{ gameStatus.won }}</h1> -->
    </div>

    <div class="nav-center">
      <ul class="nav navbar-nav">
        <router-link to="/Game"
          class="nav-item"
          activeClass="active"
          tag="li"><a>Game</a>
        </router-link>
        <router-link to="/"
          class="nav-item"
          activeClass="active"
          tag="li"><a>Hello</a>
        </router-link>
        <router-link to="/Letters"
          class="nav-item"
          activeClass="active"
          tag="li"><a>Letters</a>
        </router-link>
        <router-link to="/Library"
          class="nav-item"
          activeClass="active"
          tag="li"><a>Library</a>
        </router-link>
        <router-link to="/Players"
          class="nav-item"
          activeClass="active"
          tag="li"><a>Players</a>
        </router-link>
        <router-link to="/sign-up"
          class="nav-item"
          activeClass="active"
          tag="li"><a>Register</a>
        </router-link>
        <router-link to="/sign-in"
          class="nav-item"
          activeClass="active"
          tag="li"><a>Log In</a>
        </router-link>
        <router-link to="/Word"
          class="nav-item"
          activeClass="active"
          tag="li"><a>Word</a>
        </router-link>
        <button
          class="btn btn-primary"
          @click="chooseWord"
          >
          Get Word
        </button>
      </ul>
    </div>

    <div class="nav-right" style="overflow: visible">
      <button
        class="btn btn-success"
        @click="saveData"
        >
        Save Data
      </button>
      <button
        class="btn btn-success"
        @click="loadData"
        >
        Load Data
      </button>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        authenticated: false,
        // gameStatus: this.$store.state.words.gameStatus,
        isDropdownOpen: false,
        navigation: 'home',
        winning_word: ''
      }
    },
    computed: {
      gameStatus() {
        // return this.$store.state.words.gameStatus;
      }
    },
    methods: {
      ...mapActions({
          randomWord: 'randomWord',
          fetchData: 'loadData',
      }),
      chooseWord() {
        console.log(1);
        this.randomWord();
        console.log(this.$store.getters.winning_word.word);
      },
      isLoggedIn() {
        return this.authenticated = !this.authenticated;
      },
      saveData() {
        const data = {
          bulls: this.$store.getters.bulls,
          cows: this.$store.getters.cows,
          // gameStatus: this.$store.getters.gameStatus,
          guess: this.$store.getters.guess,
          guesses: this.$store.getters.guesses,
          library: this.$store.getters.library,
          winning_word: this.$store.getters.winning_word,
          word_to_consider_for_library: this.$store.getters.word_to_consider_for_library,
          bulls: this.$store.state.words.bulls,
          cows: this.$store.state.words.cows,
          gameStatus: this.$store.state.words.gameStatus,
          guess: this.$store.state.words.guess,
          guesses: this.$store.state.words.guesses,
          library: this.$store.state.words.library,
          player: this.$store.state.words.player,
          winning_word: this.$store.state.words.winning_word,
          word_to_consider_for_library: this.$store.state.words.word_to_consider_for_library
        };
        console.log(data);
        this.$http.put('game-statuses', data.gameStatus);
        this.$http.put('persons', data.player);
        this.$http.put('words', data.library);
      },
      loadData() {
        console.log(this.$store.state.words)
        this.fetchData();
        console.log(this.$store.state.words);
        this.$store.dispatch('setGameStatus');
      }
    }
  }
</script>
