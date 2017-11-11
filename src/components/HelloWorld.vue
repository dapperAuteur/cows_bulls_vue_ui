<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link
      :to="{ path: '/game' }"
      class="btn btn-primary"
      @click.native="startGame">
      Start Game
    </router-link>
    <ul>
      <li><a href="http://www.dictionary.com/" target="_blank">English Dictionary</a></li>
      <li><a href="http://www.spanishdict.com/" target="_blank">Spanish Dictionary</a></li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Cows && Bulls'
      }
    },
    methods: {
      ...mapActions({
          randomWord: 'randomWord',
          // fetchData: 'loadData'
      }),
      startGame(){
        // console.log("The Game Has Started!");
        // console.log(1);
        // this.randomWord();
        // console.log(this.$store.getters.winning_word);
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
