import Vue from 'vue'
import VueRouter from 'vue-router'
import SettingPage from '@/views/SettingPage.vue'
import TopPage from '@/views/TopPage.vue'
import PlayerMode from "@/views/PlayerMode.vue"
import GamePage from "@/views/GamePage.vue"

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
		path: '/setting/playerMode/game',
		name: 'gamePage',
		component: GamePage,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

// router.beforeEach((to, from, next) => {
// 	if (to.name === 'gamePage' && from.name === 'playerMode' && !this.$store.state.isFullyEnterd) next({ name: 'playerMode' });
// 	else next();
// })

export default router
