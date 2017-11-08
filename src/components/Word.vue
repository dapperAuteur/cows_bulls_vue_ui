<template>
  <div>
    <div class="panel panel-success sm-1 md-3 lg-4">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">
            <span>
              id: {{ word.id }} word: {{ word.word }}
            </span>
          </h3>
        </div>
        <div class="panel-body">
          <h3>Word Details:</h3>
          <h4>Scoring: {{ word.s_points }}/{{ word.f_points }}</h4>
          <!-- <h4>Scoring Average: {{ (word.s_points + word.f_points) }}</h4> -->
          <p>
            Definition: ...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['word'],
    data(){
      return {
      }
    },
    computed: {
      wordDetails() {
      //   this.word = this.$store.state.word;
      //   return this.$store.state.word;
      }
    }
  }
</script>
