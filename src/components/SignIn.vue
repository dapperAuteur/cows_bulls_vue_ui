<template>
  <div class="signIn">
    <h1>{{ msg }}</h1>
    <h2>Sign In</h2>
    <section>
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
        <button
          @click="signIn">
          Sign In
        </button>
    </section>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'signIn',
    data () {
      return {
        msg: 'Welcome to Cows && Bulls',
        player: {
          email: 'required',
          username: 'required',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions({
          // randomWord: 'randomWord',
          // fetchData: 'loadData'
      }),
      signIn(){
        console.log(this.player);
        const order = {
          email: this.player.email,
          username: this.player.username,
          password: this.player.password,
          // confirmPassword: 'must match password'
        };
        console.log(order);
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
