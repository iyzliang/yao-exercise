import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home/index.vue')
    },
    {
      path: '/exercise',
      component: () => import('./views/Exercise/index.vue'),
      children: [
        {
          path: 'djmenu',
          name: 'djmenu',
          component: () => import('./views/Exercise/01/index.vue')
        }
      ]
    }
  ]
})
