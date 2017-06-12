import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/Layout'
import Main from '@/views/backend/Main'
import Theme from '@/views/backend/Theme'
import Section from '@/views/backend/Section'
import Detail from '@/views/backend/Detail'
import Comment from '@/views/backend/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
      	{
     			path: '/',
     			name:'Main',
      		component: Main      		
      	},
      	{
      		path: '/detail/:id?',
      		name:'Detail',
      		component:Detail
      	},
        {
          path: '/section/:id?',
          name:'Section',
          component:Section
        },
        {
          path: '/theme/:id?',
          name:'Theme',
          component:Theme
        },
        {
          path:'/comment/:id?',
          name:'Comment',
          component:Comment
        }        
      ]
    }
  ]
})
