<template>
  <div class="panel panel-success sm-1 md-3 lg-4">
    <div class="panel-heading">
      <h1 class="panel-title">Player: {{ player.firstName }} {{ player.lastName }}</h1>
      <div class="panel-body">
        <p>
          {{ player.email }}
        </p>
        <p>
          {{ player.gamesPlayed }}
        </p>
        <router-link
          :to="{ name: 'Player', params: {
            id: player.id }}"
          class="btn btn-primary"
          @click.native="playerSelected"
          tag="li">
          Player Id: {{ player.id }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import store from './../store/store';
  export default {
    props: ['player'],
    data() {
      return {
        // search: ''
      }
    },
    computed: {

    },
    methods: {
      playerSelected() {
        this.$store.state.player = this.player;
      },
      gamesOfPlayerSelected() {

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
