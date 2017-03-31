<template>
  <div class="container container-table">
    <div class="row vertical-10p">
      <div class="container">
        <img src="/static/img/logo.png" class="center-block logo">
        <div class="text-center col-md-4 col-sm-offset-4">
          <!-- errors -->
          <div v-if=response class="text-red"><p>response</p></div>

          <!-- login form -->
          <form class="ui form loginForm">

            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
              <input class="form-control" name="username" placeholder="Username" type="text" v-model="username">
            </div>

            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock"></i></span>
              <input class="form-control" name="password" placeholder="Password" type="password" v-model="password">
            </div>

          </form>
          <button class="btn btn-primary btn-lg " @click="handleLogin">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  import $ from 'jquery'
//  var appconfig = require('../../static/config/config.json')
//  var companyName = appconfig.companyName
//  var companyId = appconfig.companyId
//  var companyToken = appconfig.companyToken
//  var rootUrl = appconfig.rootUrl

  export default{
    name: 'Login',
    data: function (router) {
      return {
        section: 'Login',
        loading: '',
        username: '',
        password: '',
        response: ''
      }
    },
    methods: {
      handleLogin(){
        console.log('login start')
        var vm = this
        var store = this.$store
        var user = {
            username:'abc',
            password:'123'
        }
        store.commit('SET_USER', user)
        this.$router.push('/order')
        console.log('login finish')
      }
    },

  }
</script>

<style>
  html, body, .container-table {
    height: 100%;
    background-color: #282B30 !important;
  }

  .container-table {
    display: table;
    color: white;
  }

  .vertical-center-row {
    display: table-cell;
    vertical-align: middle;
  }

  .vertical-20p {
    padding-top: 20%;
  }

  .vertical-10p {
    padding-top: 10%;
  }

  .logo {
    width: 15em;
    padding: 3em;
  }

  .loginForm .input-group {
    padding-bottom: 1em;
    height: 4em;
  }

  .input-group input {
    height: 4em;
  }
</style>
