import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutation'

import { Player } from "../model/index"

Vue.use(Vuex)


const p1 = new Player("p1", "red")
const p2 = new Player("p1", "yellow")
const p3 = new Player("p1", "blue")

export default new Vuex.Store({
  state: {
    // turn: 
    players: [p1, p2, p3],
    board: []
  },
  mutations: mutations,
  actions: actions,

})

