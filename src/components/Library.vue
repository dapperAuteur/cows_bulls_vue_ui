<template>
  <div class="">
    <h1>Library</h1>
    <div id="enterText">
      <h2>Search Library</h2>
      <b-field>
        <b-input
          placeholder="Search..."
          type="search"
          icon="search"
          v-model="search"
        >
        </b-input>
      </b-field>
    </div>
    <ul class="list-group">
      <app-word
        v-for="word in words"
        :key="word.id"
        :word="word">
      </app-word>
    </ul>
  </div>
</template>

<script>
  import Word from './Word.vue';

  export default {
    data() {
      return {
        search: ''
      }
    },
    components: {
      appWord: Word
    },
    computed: {
      words() {
        // console.log(this.$store.getters.library);
        // var one = this.$store.getters.library[1].word;
        // console.log(one);
        return this.$store.getters.library;
      }
      // filteredWords() {
      //   console.log(this.$store.getters.library);
      //   var one = this.$store.getters.library[1].word;
      //   console.log(one);
      //   return this.$store.getters.library.filter((element) => {
      //     return element.word.toLowerCase().match(this.search.toLowerCase());
      //   });
      // }
    }
  }
</script>

<style>
  .list-group{
    display: flex;
    flex-wrap: wrap;
  }
</style>
