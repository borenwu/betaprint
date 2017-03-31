<template>
  <div>
    <router-view></router-view>
    <div id="app"></div>
  </div>
</template>
<style>

</style>
<script>
  import $ from 'jquery'
  var appconfig = require('../static/config/config.json')
  var companyName = appconfig.companyName
  var companyId = appconfig.companyId
  var companyToken = appconfig.companyToken
  var rootUrl = appconfig.rootUrl

  export default{
    data(){
      return {
        msg: 'hello app'
      }
    },
    components: {},
    methods:{
      setInit(){
        console.log('start init')
        var store = this.$store
        var companyInfo = {
          name: companyName,
          id: companyId,
          token: companyToken
        }
        store.commit('SET_COMPANY', companyInfo)
        store.commit('SET_URL', rootUrl)
      }
    },
    created(){
      var vm = this
      vm.setInit()
    }
  }
</script>
