<template>
  <div class="text-center d-flex flex-column">
    <PlayerModeSVG class="pt-5" />
    <form class="d-flex flex-column align-items-center">
      <div class="col-8 mb-3">
        <label for="boardSize" class="form-label">Board Size</label>
        <input
          type="number"
          min="4"
          class="form-control text-center"
          id="boardSize"
        />
      </div>
      <div class="col-8 mb-3">
        <label class="form-label">Number of Players</label>
        <input
          @change="changeNumberOfPlayers($event)"
          type="number"
          min="1"
          max="4"
          class="form-control text-center"
        />
      </div>
      <h2>Player Setting</h2>
      <div
        v-for="(player, index) in players"
        v-bind:key="player.index"
        class="d-flex justify-content-around col-8 mb-3"
      >
        <div class="col-4">
          <label class="form-check-label" for="playersName"
            >Player's Name</label
          >
          <input
            v-model="player.name"
            type="text"
            class="form-control text-center"
            id="playersName"
          />
        </div>
        <div @change="initializeColors(index, player.color)">
          <label class="form-check-label" for="playersColer"
            >Player's Color: {{ player.color }}</label
          >
          <select
            class="form-select"
            v-model="player.color"
            aria-label="Default select example"
            id="playersColer"
          >
            <option value="?" selected>Select Your Color</option>
            <option value="red" v-if="isRedUnselected">Red</option>
            <option value="blue" v-if="isBlueUnselected">Blue</option>
            <option value="yellow" v-if="isYellowUnselected">Yellow</option>
            <option value="green" v-if="isGreenUnselected">Green</option>
          </select>
        </div>
      </div>
    </form>
    <div>
      <button class="col-3 mt-5 btn btn-primary" @click="test()">
        Game Start
      </button>
    </div>
  </div>
</template>

<script>
import { Player } from "@/model/index.js";
import PlayerModeSVG from "@/components/PlayerModeSVG.vue";

export default {
  data() {
    return {
      numberOfPlayers: 4,
      players: [new Player(), new Player()],
      //   isSelected: false,
      selectedColors: ["", "", "", ""],
      isRedUnselected: true,
      isBlueUnselected: true,
      isYellowUnselected: true,
      isGreenUnselected: true,
    };
  },
  components: {
    PlayerModeSVG,
  },
  computed: {},
  methods: {
    changeNumberOfPlayers: function (e) {
      this.numberOfPlayers = e.target.value;

      if (this.numberOfPlayers >= this.players.length) {
        this.players.push(new Player());
      } else {
        this.players.pop();
      }
    },
    test() {
      console.log(this.players);
    },
    // hideOption() {
    //   this.isSelected = true;
    // },
    initializeColors: function (index, color) {
      switch (this.selectedColors[index]) {
        case "red":
          this.isRedUnselected = true;
          break;
        case "blue":
          this.isBlueUnselected = true;
          break;
        case "yellow":
          this.isYellowUnselected = true;
          break;
        case "green":
          this.isGreenUnselected = true;
          break;
      }

      switch (color) {
        case "red":
          this.isRedUnselected = false;
          this.selectedColors[index] = "red";
          this.player.color = "?";
          break;
        case "blue":
          this.isBlueUnselected = false;
          this.selectedColors[index] = "blue";
          this.player.color = "?";
          break;
        case "yellow":
          this.isYellowUnselected = false;
          this.selectedColors[index] = "yellow";
          this.player.color = "?";
          break;
        case "green":
          this.isGreenUnselected = false;
          this.selectedColors[index] = "green";
          this.player.color = "?";
          break;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: rgb(0, 72, 139);
  stroke-linejoin: round;
  filter: drop-shadow(4px 4px 4px #0090ff);
}

.btn {
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 10px;
  filter: drop-shadow(6px 6px 5px #1b4583);
}
</style>