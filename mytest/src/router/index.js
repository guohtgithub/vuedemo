import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Main from '@/views/main'
import Table from '@/views/nav1/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '',
      component: Login,
      hidden:true
    },
    {
      path:'/home',
      component:Home,
      name:'导航一',
      iconCls:'el-icon-message',
      children:[
        {path:'/main',component:Main,name:'主页',hidden:true},
        {path:'/table',component:Table,name:'Table'},
      ]
    }
  ]
})
