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
    <div>
      <div class="svg-container mb-4">
        <PlayerModeSVG class="svg-text" />
      </div>
      <form class="d-flex flex-column align-items-center">
        <div class="col-10 col-sm-8 mt-5">
          <label for="boardSize" class="form-label">Board Size</label>
          <input
            type="number"
            min="4"
            class="form-control text-center"
            id="boardSize"
          />
        </div>
        <div class="col-10 col-sm-8 mt-3">
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
          class="d-flex justify-content-around col-12 col-sm-8 mb-3"
        >
          <div class="col-6">
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
          <div class="col-6" @change="initializeColors(index, player.color)">
            <label class="form-check-label" for="playersColer"
              >Player's Color</label
            >
            <select
              class="form-select"
              v-model="player.color"
              aria-label="Default select example"
              id="playersColer"
            >
              <option value="???" selected>Coose Color</option>
              <option value="Red" v-bind:disabled="isRedSelected">Red</option>
              <option value="Blue" v-bind:disabled="isBlueSelected">
                Blue
              </option>
              <option value="Yellow" v-bind:disabled="isYellowSelected">
                Yellow
              </option>
              <option value="Green" v-bind:disabled="isGreenSelected">
                Green
              </option>
            </select>
          </div>
        </div>
        <div>
          <router-link to="/setting/playerMode/game">
            <button class="btn btn-primary mt-3" @click="setTimer()">
              Game Start
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
filter: drop-shadow(4px 4px 4px #ffffff);
<script>
import { Player } from "@/model/index.js";
import PlayerModeSVG from "@/components/svg/PlayerModeSVG.vue";

export default {
  data() {
    return {
      numberOfPlayers: 4,
      players: [new Player(), new Player()],
      selectedColors: ["", "", "", ""],
      isRedSelected: false,
      isBlueSelected: false,
      isYellowSelected: false,
      isGreenSelected: false,
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
    setTimer() {},
    initializeColors: function (index, color) {
      switch (this.selectedColors[index]) {
        case "Red":
          this.isRedSelected = false;
          break;
        case "Blue":
          this.isBlueSelected = false;
          break;
        case "Yellow":
          this.isYellowSelected = false;
          break;
        case "Green":
          this.isGreenSelected = false;
          break;
      }

      switch (color) {
        case "Red":
          this.isRedSelected = true;
          this.selectedColors[index] = "Red";
          this.player.color = "Red";
          break;
        case "Blue":
          this.isBlueSelected = true;
          this.selectedColors[index] = "Blue";
          this.player.color = "Blue";
          break;
        case "Yellow":
          this.isYellowSelected = true;
          this.selectedColors[index] = "Yellow";
          this.player.color = "Yellow";
          break;
        case "Green":
          this.isGreenSelected = true;
          this.selectedColors[index] = "Green";
          this.player.color = "Green";
          break;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: #0056d8;
  filter: drop-shadow(3px 3px 2px #ffffff);
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

@media screen and (max-width: 320px) {
  .svg-container {
    top: 30px;
  }

  .form-check-label {
    font-size: 0.8rem;
  }
}
</style>