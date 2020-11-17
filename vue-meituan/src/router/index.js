import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
    }
  ]
})
