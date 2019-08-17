// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// mock 虚拟数据
import Mock from './mock'
Mock.bootstrap();

import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(ElementUI)


router.beforeEach((to,from,next) => {
  if(to.path =='/login'){
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  console.log(user,1)

  console.log(to.path != '/login',2)
  
  console.log(!user && to.path != '/login',3)

  if(!user && to.path != '/login'){
    next({path:'/login'})
  }else{
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
