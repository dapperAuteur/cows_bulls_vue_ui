<template>
  <div class="col-xs-12 col-sm-6">
    <h1>Players</h1>
    <div id="enterPlayerName">
      <h2>Search Players</h2>
      <b-field>
        <b-input
          placeholder="Search..."
          type="search"
          icon="search"
          v-model="query"
        >
        </b-input>
      </b-field>
    </div>
    <button v-if="!playerIdSort"
      class="btn btn-info"
      @click="idSort">
      Sort Players By Id
    </button>
    <button
      v-else
      class="btn btn-success"
      @click="companyIdSort">
      Sort Players By Office Id
    </button>
    <ul class="list-group">
      <app-player
        v-for="player in filteredPlayers"
        :key="player.id"
        :player="player">
      </app-player>
    </ul>
  </div>
</template>

<script>
  import Player from './Player.vue';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        playerIdSort: false,
        query: ''
      }
    },
    components: {
      appPlayer: Player
    },
    computed: {
      filteredPlayers() {
        console.log(this.$store.getters.players);
        return this.$store.getters.players.filter((element) => {
          return element.lastName.toLowerCase().match(this.query.toLowerCase()) || element.firstName.toLowerCase().match(this.query.toLowerCase());
        });
      }
    },
    methods: {
      ...mapActions({
        sortPlayerById: 'sortPlayerById',
        sortPlayerByIdReverse: 'sortPlayerByIdReverse',
        sortPlayerByFirstName: 'sortPlayerByFirstName',
        sortPlayerByFirstNameReverse: 'sortPlayerByFirstNameReverse',
        sortPlayerByLastName: 'sortPlayerByLastName',
        sortPlayerByLastNameReverse: 'sortPlayerByLastNameReverse',
      }),
      idSort(){
        this.sortPlayerById();
        this.playerIdSort = !this.playerIdSort;
      }
    }
  }
</script>

<style>
  .list-group{
    display: flex;
    flex-wrap: wrap;
  }
</style>
