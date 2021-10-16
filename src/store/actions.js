export default {
  setNewGame(context) {
    context.commit("setBoardSize", { number: 0 });
    context.commit("setBoard")
    context.commit("setLastBallPosition", { lastBallPosition: {} });

    context.commit("setPlayers", { players: [] });
    context.commit("setCurrentPlayerIndex", { number: 0 });
    
    context.commit("setTotalSeconds", { number: 0 });
    context.commit("setMinutes", { string: "00" });
    context.commit("setSeconds", { string: "00" });
    context.commit("setInterval", { interval: null });
    
    context.commit("setWinnerExist", { bool: false });
    context.commit("setIsDraw", { bool: false });
    
    context.commit("setIsRunning", { bool: false });
    context.commit("setIsDropping", { bool: false });
    context.commit("setIsFullyEntered", { bool: false });

    context.commit("setWinnerExist", { bool: false})
    context.commit("setIsDraw", { bool: false})
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
