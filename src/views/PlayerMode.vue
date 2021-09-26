<template>
  <div class="text-center d-flex flex-column">
    <h1 class="pt-5">Player Mode</h1>
    <form class="d-flex flex-column align-items-center">
      <div class="col-8 mb-3">
        <label for="boardSize" class="form-label">Board Size</label>
        <input type="number" min="4" class="form-control text-center" id="boardSize" />
      </div>
      <div class="col-8 mb-3">
        <label class="form-label">Number of Players</label>
        <input @change="changeNumberOfPlayers($event)" type="number" min="1" max="4" class="form-control text-center" />
      </div>
      <h2>Player Setting</h2>
      <div v-for="player in players" v-bind:key="player.index" class="d-flex justify-content-around col-8 mb-3">
        <div class="col-4">
          <label class="form-check-label" for="playersName">Player's Name</label>
          <input v-model="player.name" type="text" class="form-control text-center" id="playersName" />
        </div>
        <div class="col-4">
          <label class="form-check-label" for="playersColer">Player's Color</label>
          <input v-model="player.color" type="text" class="form-control text-center" id="playersColer" />
        </div>
      </div>
    </form>
    <button  class="btn btn-primary" @click="test()">Game Start</button>
  </div>
</template>

<script>

// import { mapState } from 'vuex'
import { Player } from "@/model/index.js"

export default {
  data(){
    return{
      numberOfPlayers: 2,
      players: [
        new Player(),
        new Player(),
      ]
    }
  },
  methods: {
    changeNumberOfPlayers: function(e){

      this.numberOfPlayers = e.target.value;

      if(this.numberOfPlayers >= this.players.length){
        this.players.push(new Player())
      }
      else{
        this.players.pop()
      }
    },
    test(){
      console.log(this.players)
    }
  },
};
</script>

<style scoped>
.btn {
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 10px;
}
</style>