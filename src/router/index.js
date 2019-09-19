import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import HelloWorld from '../components/HelloWorld.vue'
Vue.use(Router)

let router = new Router({
  routes: [

    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/signup',
      component: SignUp
    }
  ], mode:'history'
})



export default router