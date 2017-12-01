<template>
  <div class="signUp">
    <h1>{{ msg }}</h1>
    <h2>Sign Up Today</h2>
    <section>
        <b-field label="firstName">
            <b-input value="Kevin"
              v-model="player.firstName">
            </b-input>
        </b-field>

        <b-field label="lastName">
            <b-input value="Garvey"
              v-model="player.lastName">
            </b-input>
        </b-field>

        <b-field label="Email"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                value="john@"
                maxlength="30"
                v-model="player.email">
            </b-input>
        </b-field>

        <b-field label="Username"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"
              v-model="player.username">
            </b-input>
        </b-field>

        <b-field label="Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input value="123" type="password" maxlength="30"
              v-model="player.password">
            </b-input>
        </b-field>

        <b-field label="ConfirmPassword"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input value="123" type="password" maxlength="30"
              v-model="player.confirmPassword">
            </b-input>
        </b-field>
        <button
          @click="createPlayer">
          Sign Up
        </button>
    </section>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'signUp',
    data () {
      return {
        msg: 'Welcome to Cows && Bulls',
        player: {
          firstName: 'firstName',
          lastName: 'lastName',
          email: 'required',
          username: 'required',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      ...mapActions({
          // randomWord: 'randomWord',
          // fetchData: 'loadData'
      }),
      createPlayer(){
        console.log(this.player);
        const order = {
          firstName: this.player.firstName,
          lastName: this.player.lastName,
          email: this.player.email,
          username: this.player.username,
          password: this.player.password,
          // confirmPassword: 'must match password'
        };
        console.log(order);
        this.$store.dispatch('savePlayer', order);
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
