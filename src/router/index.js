import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const NotFoundPage = resolve => System.import('../views/NotFoundPage')
const ChildRouterComponent = {
	template: '<router-view></router-view>'
}

const Hello = resolve => System.import('components/Hello')
const Chat = resolve => System.import('../views/Chat')

const router = new Router({
	mode: 'history',
	scrollBehavior: () => ({
		y: 0
	}),
	routes: [
		{ path: '/', component: Hello }, 
		{ path: '/chat', component: Chat },
		{ path: '*', component: NotFoundPage }, ]
})

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {} else {
		next()
	}
})

export default router