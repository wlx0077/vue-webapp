import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from "../views/layout/AppLayout"
import DiscoveryLayout from "../views/layout/DiscoveryLayout"
import Recommend from "../views/discovery/Recommend"
import Djprogram from "../views/discovery/Djprogram"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/discovery',
      component: AppLayout,
      children: [
        {
          path: 'discovery',
          redirect: '/discovery/recommend',
          component: DiscoveryLayout,
          children: [
            { path: 'recommend', component: Recommend },
            { path: 'djprogram', component: Djprogram }
          ]
        }
      ]
    }
  ]
})
