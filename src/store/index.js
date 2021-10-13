import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutation";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		players: [],
		board: [],
		boardSize: 0,

		currentPlayerIndex: 0,
		currentPlayer: {},
		lastBallPosition: {},

		isFullyEnterd: false,
		isDropping: false,

		totalSeconds: 0,
		minutes: "00",
		seconds: "00",
		isRunning: false,
		interval: null,

		winnerExist: undefined,
		isDraw: undefined, // 引き分けかどうか
	},
	mutations: mutations,
	actions: actions,
	getters: getters,
});
