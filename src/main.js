// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'

import router from './router'
import VueRouter from "vue-router"
import page0 from './components/ChangePassword'
import page1 from './components/DepartmentList'
import page3 from './components/EmployeeList'
import page6 from './components/WorkshopList'
import page8 from './components/MachineList'
import page10 from './components/TaskList'
import page11 from './components/ProcessingList'
import page13 from './components/NoticeList'
import page15 from './components/AppModule'
import page17 from './components/NewData'
import page18 from './components/Arc'
import page19 from './components/Rect'
import page20 from './components/timeline'
import mock from './components/Mock'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

Vue.use(VueRouter)
const routes = [
  { path: '/Mock', component:mock} ,
  { path: '/0', component: page0} ,
  { path: '/', component: page1} ,
  { path: '/3', component: page3 } ,
  { path: '/6', component: page6 } ,
  { path: '/8', component: page8}, 
  { path: '/10', component: page10 } , 
  { path: '/11', component: page11 } ,
  { path: '/13', component: page13} ,
  { path: '/15', component:page15 } ,
  {path:'/17',component:page17,
  children:[
          { path: '/17/18', component: page18},
          { path: '/17/19', component: page19},
          { path: '/17/20', component: page20}
                ]}
]

const A = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:A 
})
