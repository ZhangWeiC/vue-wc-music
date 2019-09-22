import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'views/recommend/recommend'
import Rank from 'views/rank/rank'
import Search from 'views/search/search'
import Singer from 'views/singer/singer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }, {
      path: '/singer',
      component: Singer
    }
  ]
})
