export default {
  serNewGame(context) {
    context.commit("serNewGame");
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
  setWinnerExist(context, payload) {
    context.commit('setWinnerExist', payload);
  },
  setIsDraw(context, payload) {
    context.commit('setIsDraw', payload);
  },
};
