import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layout.vue'
import Recommend from '../components/recommend.vue'
import RankingList from '../components/rankingList.vue'
import Search from '../components/search.vue'
import TopList from '../components/inList.vue'
import SearchPage from '../components/searchPage.vue'
import SearchResult from '../components/searchResult.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      component:Layout,
      path:'/',
      children:[
        {
          component:Recommend,
          path:'/recommend',
          name:'recommend'
        },
        {
          component:Recommend,
          path:'/',
          name:'recommend'
        },
        {
          component:RankingList,
          path:'/rankingList',
          name:'RankingList'
        },
        {
          component:Search,
          path:'/search',
          name:'Search',
          children:[
            {
              component:SearchResult,
              path:'/searchResult',
              name:'SearchResult'
            },
            {
              component:SearchPage,
              path:'/search',
              name:'searchPage'
            }
          ]
        },
      ]
    },
    {
      component:TopList,
      path:'/topList',
      name:'topList'
    }
    
  ]
})
