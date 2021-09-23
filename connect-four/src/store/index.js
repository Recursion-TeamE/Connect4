import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
class Player {
  constructor(color, svg){
    // this.name
    this.color = color
    this.svg = svg
    // this.isAI = false
  }
}
class Ball {
  constructor(){
    this.svg = ""
  }
}

const p1 = new Player("red")
const p2 = new Player("yellow")

export default new Vuex.Store({
  state: {
    // turn: 
    players: [p1,p2],
    board:[]
  },
  mutations: {
    /**
     * @payload {
     *    boardLength: Integer
     * }
     */
    setBoard(state, payload){
      const array = []
      const l = payload.boardLength

      for(let i = 0 ; i < l ; i++){
        const row = []
        for(let j = 0 ; j < l ; j++){
          row.push(new Ball())
        }
        array.push(row)
      }

      state.board = array
    }
  },
  actions: {
    setBoard(context, payload){
      context.commit("setBoard",payload)
    }

  },
})

