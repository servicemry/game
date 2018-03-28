// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'

Vue.config.productionTip = false

// 路由全局守卫，在没登录的情况下，不让进入任何页面
router.beforeEach((to,from,next)=>{
  if(store.getters.currentUser==null){
    if(to.path=='/'){
      next()
    } else{
      next('/')
    }
  }else{
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
