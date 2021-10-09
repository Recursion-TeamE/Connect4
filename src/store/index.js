import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutation";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentPlayerIndex: 0,
		currentPlayer: {},
		players: [],
		board: [],
		lastBallPosition: {},
		isFullyEnterd: false,
	},
	mutations: mutations,
	actions: actions,
});
