import Vue from 'vue'
import VueRouter from 'vue-router'
import SettingPage from '../views/SettingPage.vue'
import TopPage from '../views/TopPage.vue'
import PlayerMode from "../views/PlayerMode.vue";
import Board from "../components/Board.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'toppage',
		component: TopPage,
	},
	{
		path: '/setting',
		name: 'setting',
		component: SettingPage,
	},
	{
		path: '/setting/playerMode',
		name: 'playerMode',
		component: PlayerMode,
	},
	{
		path: '/setting/playerMode/board',
		name: 'board',
		component: Board,
	},
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
