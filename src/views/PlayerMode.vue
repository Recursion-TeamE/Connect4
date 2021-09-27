<template>
  <div
    class="
      vh-100
      text-center
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <div class="svg-container">
      <PlayerModeSVG class="svg-text" />
    </div>
    <div>
      <form class="d-flex flex-column align-items-center">
        <div class="col-8 mt-5">
          <label for="boardSize" class="form-label">Board Size</label>
          <input
            type="number"
            min="4"
            class="form-control text-center"
            id="boardSize"
          />
        </div>
        <div class="col-8 mt-3">
          <label class="form-label">Number of Players</label>
          <input
            @change="changeNumberOfPlayers($event)"
            type="number"
            min="1"
            max="4"
            class="form-control text-center"
          />
        </div>
        <div class="my-3">
          <h2>Player Setting</h2>
        </div>
        <div
          v-for="(player, index) in players"
          v-bind:key="player.index"
          class="d-flex justify-content-around col-10 mb-3"
        >
          <div class="col-6">
            <label class="form-check-label" for="playersName"
              >Name</label
            >
            <input
              v-model="player.name"
              type="text"
              class="form-control text-center"
              id="playersName"
            />
          </div>
          <div class="col-6" @change="initializeColors(index, player.color)">
            <label class="form-check-label" for="playersColer"
              >Color: {{ player.color }}</label
            >
            <select
              class="form-select"
              v-model="player.color"
              aria-label="Default select example"
              id="playersColer"
            >
              <option value="???" selected>Your Color</option>
              <option value="Red" v-if="isRedUnselected">Red</option>
              <option value="Blue" v-if="isBlueUnselected">Blue</option>
              <option value="Yellow" v-if="isYellowUnselected">Yellow</option>
              <option value="Green" v-if="isGreenUnselected">Green</option>
            </select>
          </div>
        </div>
      </form>
    </div>
    <div>
      <button class="btn btn-primary mt-3" @click="test()">
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
        case "Red":
          this.isRedUnselected = true;
          break;
        case "Blue":
          this.isBlueUnselected = true;
          break;
        case "Yellow":
          this.isYellowUnselected = true;
          break;
        case "Green":
          this.isGreenUnselected = true;
          break;
      }

      switch (color) {
        case "Red":
          this.isRedUnselected = false;
          this.selectedColors[index] = "Red";
          this.player.color = "???";
          break;
        case "Blue":
          this.isBlueUnselected = false;
          this.selectedColors[index] = "Blue";
          this.player.color = "???";
          break;
        case "Yellow":
          this.isYellowUnselected = false;
          this.selectedColors[index] = "Yellow";
          this.player.color = "???";
          break;
        case "Green":
          this.isGreenUnselected = false;
          this.selectedColors[index] = "Green";
          this.player.color = "???";
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
  filter: drop-shadow(2px 2px 2px #29a2ff);
}

.btn {
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.8rem;
  filter: drop-shadow(6px 6px 5px #1b4583);
}

.svg-container {
  position: relative;
  width: 100%;
}
</style>