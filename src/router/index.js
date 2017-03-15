import Vue from 'vue'
// import Router from 'vue-router'
import Hello from '@/components/Hello'
import OrderView from '@/components/order/OrderView'
import TaskView from '@/components/work/TaskView'
import HomeView from '@/components/home/HomeView'
import SaleView from '@/components/finance/SaleView'
import WarehouseView from '@/components/warehouse/WarehouseView'
import DemoTest from '@/components/demotest/DemoTest'
import Login from '@/components/Login'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/order',
      name: 'OrderView',
      component: OrderView
    },
    {
      path: '/task',
      name: 'TaskView',
      component: TaskView
    },
    {
      path: '/warehouse',
      name: 'WarehouseView',
      component: WarehouseView
    },
    {
      path: '/sale',
      name: 'SaleView',
      component: SaleView
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/demotest',
      name: 'demotest',
      component: DemoTest
    },
  ]
})
