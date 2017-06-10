import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'
import Detail from '@/components/detail'
import Collection from '@/components/collection'
import Themenewsbox from '@/components/themeNewsbox'
import CommentBar from '@/components/commentBar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path:'/detail/:id?',
      name:'detail',
      component:Detail
    },
    {
      path:'/collection/:id?',
      name:'collection',
      component:Collection
    },
    {
      path:'/themeNewsbox/:id?',
      name:'themeNewsbox',
      component:Themenewsbox
    },
    {
      path:'/commentBar/:id?',
      name:'commentBar',
      component:CommentBar
    },
  ]
})
