import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRobot, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router/index.js'

library.add(faRobot, faUser)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const app = new Vue({
	store,
	router,
	methods: {
		setBoard: function (boardLength) {
			this.$store.dispatch("setBoard", { boardLength: boardLength })
		}
	},
	render: h => h(App),
}).$mount('#app')

app.setBoard(5)