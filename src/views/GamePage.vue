<template>
  <div>
    <BallSetters />
    <Board />
    <div v-for="(player, index) in players" :key="player.index">
      {{ index }}
      {{ player.name }}
    </div>
    <div>
      {{ players.length }}
    </div>
    <h1>{{ currentPlayer.name }}</h1>
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
