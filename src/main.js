// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'jquery/dist/jquery.min'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '../static/js/app.min'

import '../static/js/plugins/datetimepicker/bootstrap-datetimepicker.min.css'
import '../static/js/plugins/datetimepicker/bootstrap-datetimepicker.min'
import '../static/js/plugins/datetimepicker/bootstrap-datetimepicker.zh-CN'

import '../static/js/plugins/datatables/jquery.dataTables'
// import '../static/js/plugins/datatables/jquery.dataTables.min.css'
import '../static/js/plugins/datatables/dataTables.bootstrap'
import '../static/js/plugins/datatables/dataTables.bootstrap.css'

import '../static/js/plugins/editable/mindmup-editabletable'

import VueEditable from '../static/js/plugins/vue-editable/vue-editable'

Vue.use(VueEditable)


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
