import Vue from 'vue'
import VueRouter from 'vue-router'
// import MainPage from '@/views/MainPage.vue'
const MainPage = () => import("@/views/MainPage.vue")
// const DEFAULT_TITLE = 'Some Default Title';
// document.title = to.meta.title || DEFAULT_TITLE;
Vue.use(VueRouter)
const routes = [
	{
		path:"/" ,
		redirect:"/main"
	},
	{
		path: "/main",
		component: MainPage
	},
]
const router = new VueRouter({
	routes,
	mode: "history"
})

export default router