<template>
  <div class="letters">
    <h1>{{ msg }}</h1>
    <h2>This component will contain the letters of the alphabet.</h2>

    <ul>
      <li>A</li>
      <li>B</li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'letters',
    data () {
      return {
        msg: 'Welcome to Cows && Bulls'
      }
    },
    methods: {
      ...mapActions({
          // randomWord: 'randomWord',
          // fetchData: 'loadData'
      }),
      startGame(){
        // change to a function to put letters on the screen to create a word
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
