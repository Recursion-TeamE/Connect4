export default {
	initializeGame(context) {
		context.commit("initializeGame");
	},
	initEvaluationStatus(context) {
		context.commit("initEvaluationStatus");
	},
	setBoard(context, payload) {
		context.commit("setBoard", payload);
	},
	setBall(context, payload) {
		context.commit("setBall", payload);
	},
	setPlayers(context, payload) {
		context.commit("setPlayers", payload);
	},
	checkUnsubmittedItems(context, payload) {
		context.commit("checkUnsubmittedItems", payload);
	},
	setBoardSize(context, payload) {
		context.commit('setBoardSize', payload);
	},
	toggleTimer(context) {
		context.commit('toggleTimer');
	},
	openWinnerWindow(context) {
		context.commit('openWinnerWindow');
	},
	closeWinnerWindow(context) {
		context.commit('closeWinnerWindow');
	},
	openDrawWindow(context) {
		context.commit('openDrawWindow');
	},
	closeDrawWindow(context) {
		context.commit('closeDrawWindow');
	},
};
