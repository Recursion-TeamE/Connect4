export default {
    setBoard(context, payload) {
        context.commit("setBoard", payload)
    },
    setBall(context, payload) {
        context.commit("setBall", payload)
    },
    setPlayers(context, payload){
        context.commit("setPlayers", payload)
    }
}