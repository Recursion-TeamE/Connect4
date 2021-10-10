import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRobot, faUser, faAngleDown, faHourglassHalf, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router.js";

import { Player } from "@/model/index";
import { ballColor } from "@/config";

library.add(faRobot, faUser, faAngleDown, faHourglassHalf, faRedoAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const app = new Vue({
	store,
	router,
	methods: {
		setPlayers: function (players) {
			this.$store.dispatch("setPlayers", { players: players });
		},
	},
	render: (h) => h(App),
}).$mount("#app");

///設定
const p1 = new Player("p1", ballColor.red);
const p2 = new Player("p2", ballColor.yellow);
const p3 = new Player("p3", ballColor.blue);

const players = [p1, p2, p3];

app.setPlayers(players);
// app.setBoard(5);