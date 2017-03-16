import Vue from 'vue'
import Hello from '@/components/Hello'
import OrderView from '@/components/order/OrderView'
import TaskView from '@/components/work/TaskView'
import HomeView from '@/components/home/HomeView'
import SaleView from '@/components/finance/SaleView'
import WarehouseView from '@/components/warehouse/WarehouseView'
import DemoTest from '@/components/demotest/DemoTest'
import DashView from '@/components/Dash'
import LoginView from '@/components/Login'


const routes = [
  {
    path: '/',
    component: LoginView
  },
  {
    path: '/erp',
    name: 'DashView',
    component: DashView,
    children:[
      {
        path: '',
        component: HomeView,
        name: 'HomeView',
        // meta: {description: 'Overview of environment'}
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
  },
]

export default routes
