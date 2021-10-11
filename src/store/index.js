import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutation";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentPlayerIndex: 0,
		currentPlayer: {},
		players: [],
		board: [],
		boardSize: 5,
		lastBallPosition: {},
		isFullyEnterd: false,
		isDropping: false,
	},
	mutations: mutations,
	actions: actions,
	getters: getters,
});
