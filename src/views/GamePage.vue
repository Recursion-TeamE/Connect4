<template>
  <div class="row align-items-center justify-content-around h-100">
    <div class="col-4 display-players">
      <div class="players-turn">
        <h2>Player's turn: {{ currentPlayer.name }}</h2>
      </div>
      <div v-for="(player, index) in players" :key="player.index">
        Player  {{ index+1 }}: {{ player.name }} 
      </div>
    </div>  
    <div class="col-4 d-flex flex-column justify-content-center align-items-center">
      <p>Click buttons to play</p>
      <BallSetters />
      <Board class="bg-color" />  
    </div>
    <div class="col-4 display-function-buttons">
      <button class="btn btn-primary">
        <font-awesome-icon icon="redo-alt"/>
      </button>
      <button class="btn btn-primary">
        <font-awesome-icon icon="hourglass-half"/>
      </button>
      
    </div>
  </div>
</template>

<script>
import Board from "@/components/Board.vue";
import BallSetters from "@/components/BallSetters.vue";
import { mapState } from "vuex";

export default {
  components: {
    Board,
    BallSetters,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["currentPlayer", "players"]),
  },
  methods: {},
};
</script>
