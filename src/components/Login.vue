<template>
  <v-container align-content-center>
    <v-layout row align-center fill-height>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-layout row>
          <v-flex xl6 offset-xl3>
            <h2 class="header">Login</h2>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs10 sm8 md4 lg4 xl4 offset-xs1 offset-sm2 offset-md4 offset-lg4 offset-xl4>
            <v-form ref="form">
              <v-text-field
                v-model="login"
                label="Login"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
              ></v-text-field>
              <v-flex xs4 sm4 md4 lg4 xl4 offset-xl4 offset-xs4 offset-sm4 offset-md4 offset-lg4>
                <v-btn color="primary" @click="submit">submit</v-btn>
              </v-flex>
            </v-form>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    submit () {
      const that = this
      this.$auth.login(this.login, this.password)
        .then(response => {
          if (response.data.token) {
            that.$emit('authenticated', true)
            this.$router.push('/')
          }
        })
    }
  }
}
</script>

<style scoped>
.header {
  font-size: 4rem;
  letter-spacing: .3rem;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Roboto', sans-serif;
}
.align-content-center {
  height: 80%;
}
</style>
