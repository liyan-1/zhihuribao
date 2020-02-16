import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import User from '../views/User.vue'
import Detalis from '../views/Detalis.vue'
import Comment from '../views/Comment.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
	{
	  path: '/user',
	  name: 'User',
	  component: User
	},
	{
	  path: '/detalis',
	  name: 'Detalis',
	  component: Detalis
	},
	{
	  path: '/comment',
	  name: 'Comment',
	  component: Comment
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
