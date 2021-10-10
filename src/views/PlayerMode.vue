<template>
  <div
    class="
      vh-100
      text-center
      d-flex
      flex-column
      justify-content-start
      align-items-center
    "
  >
    <div>
      <div class="svg-container mb-4">
        <PlayerModeSVG class="svg-text" />
      </div>
      <form
        class="d-flex flex-column align-items-center"
      >
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
          </ul>
        </p>
        <div class="col-10 col-sm-8 mt-5">
          <label for="boardSize" class="form-label">Board Size</label>
          <input
            @change="setBoard($event)"
            type="number"
            min="5"
            max="8"
            value="5"
            class="form-control text-center"
            id="boardSize"
          />
        </div>
        <div class="col-10 col-sm-8 mt-3">
			<label  for="numberOfPlayers" class="form-check-label p-1">Number of Players</label
            >
            <select class="form-select p-1 col-12 text-center" id="numberOfPlayers" @change="initializeUser($event)" v-model="numberOfPlayers"
            >
				<option v-for="(option, index) in options" :key="index">{{ option.text }}</option>
            </select>
          <!-- <div class="form-check form-check-inline">
            <input
              @click="getNumberOfPlayers($event)" @change="initializeUser($event)"
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="2"
              checked
            />
            <label class="form-check-label" for="inlineRadio1">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              @click="getNumberOfPlayers($event)" @change="initializeUser($event)"
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="3"
            />
            <label class="form-check-label" for="inlineRadio2">3</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              @click="getNumberOfPlayers($event)" @change="initializeUser($event)"
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="4"
            />
            <label class="form-check-label" for="inlineRadio3">4</label>
          </div> -->
        </div>
        <div class="my-3">
          <h2>Player Setting</h2>
        </div>
        <div
          v-for="(player, index) in players"
          :key="player.index" 
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
          <div class="col-6" @change="changeColorItems(index, player.color)">
            <label class="form-check-label" for="playersColer"
              >Player's Color</label
            >
            <select
              class="form-select p-1"
              v-model="player.color"
              aria-label="Default select example"
              id="playersColer"
            >
              <option value="red" :disabled="isRedSelected">Red</option>
              <option value="blue" :disabled="isBlueSelected">Blue</option>
              <option value="yellow" :disabled="isYellowSelected">
                Yellow
              </option>
              <option value="green" :disabled="isGreenSelected">Green</option>
              <option value="pink" :disabled="isPinkSelected">Pink</option>
              <option value="cyan" :disabled="isCyanSelected">Cyan</option>
            </select>
          </div>
        </div>
        <div>
          <router-link to="/setting/playerMode/game">
            <button type="submit" class="btn btn-primary mt-3">
              Game Start
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Player } from "@/model/index.js";
import PlayerModeSVG from "@/components/svg/PlayerModeSVG.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      boardSize: 5,
      numberOfPlayers: 2,
      options: [
        { value: 2, text: "2" },
        { value: 3, text: "3" },
        { value: 4, text: "4" },
      ],
      players: [new Player("Player1", "red"), new Player("Player2", "blue")],
      colorSelection: ["red", "blue", "yellow", "green", "pink", "cyan"],
      selectedColors: ["red", "blue", "???", "???"],
      isRedSelected: true,
      isBlueSelected: true,
      isYellowSelected: false,
      isGreenSelected: false,
      isPinkSelected: false,
      isCyanSelected: false,
      errors: [],
    };
  },
  components: {
    PlayerModeSVG,
  },
  computed: mapState(["isFullyEnterd", ""]),
  methods: {
    initializeUser: function (e) {
      this.numberOfPlayers = e.target.value;
      this.players = [];
      console.log(e.target.value);
      for (let i = 0; i < this.numberOfPlayers; i++) {
        this.players.push(new Player(`Player${i + 1}`, this.colorSelection[i]));
      }

      switch (this.numberOfPlayers) {
        case "2":
          this.selectedColors = ["red", "blue", "???", "???"];
          this.isRedSelected = true;
          this.isBlueSelected = true;
          this.isYellowSelected = false;
          this.isGreenSelected = false;
          this.isPinkSelected = false;
          this.isCyanSelected = false;
          break;
        case "3":
          this.selectedColors = ["red", "blue", "yellow", "???"];
          this.isRedSelected = true;
          this.isBlueSelected = true;
          this.isYellowSelected = true;
          this.isGreenSelected = false;
          this.isPinkSelected = false;
          this.isCyanSelected = false;
          break;
        case "4":
          this.selectedColors = ["red", "blue", "yellow", "green"];
          this.isRedSelected = true;
          this.isBlueSelected = true;
          this.isYellowSelected = true;
          this.isGreenSelected = true;
          this.isPinkSelected = false;
          this.isCyanSelected = false;
          break;
      }
    },
    setBoard: function (e) {
      this.boardSize = e.target.value;
      this.$store.dispatch("setBoard", this.boardSize);
    },
    getNumberOfPlayers: function (e) {
      this.numberOfPlayers = e.target.value;
      this.players = [];

      for (let i = 0; i < this.numberOfPlayers; i++) {
        this.players.push(new Player());
      }
    },
    test() {
      console.log(this.players);
    },
    setTimer() {},
    changeColorItems: function (index, color) {
      switch (this.selectedColors[index]) {
        case "red":
          this.isRedSelected = !this.isRedSelected;
          break;
        case "blue":
          this.isBlueSelected = !this.isBlueSelected;
          break;
        case "yellow":
          this.isYellowSelected = !this.isYellowSelected;
          break;
        case "green":
          this.isGreenSelected = !this.isGreenSelected;
          break;
        case "pink":
          this.isPinkSelected = !this.isPinkSelected;
          break;
        case "cyan":
          this.isCyanSelected = !this.isCyanSelected;
          break;
        case "???":
          break;
      }

      switch (color) {
        case "red":
          this.isRedSelected = true;
          this.selectedColors[index] = "red";
          this.player.color = "red";
          break;
        case "blue":
          this.isBlueSelected = true;
          this.selectedColors[index] = "blue";
          this.player.color = "blue";
          break;
        case "yellow":
          this.isYellowSelected = true;
          this.selectedColors[index] = "yellow";
          this.player.color = "yellow";
          break;
        case "green":
          this.isGreenSelected = true;
          this.selectedColors[index] = "green";
          this.player.color = "green";
          break;
        case "pink":
          this.isPinkSelected = true;
          this.selectedColors[index] = "pink";
          this.player.color = "pink";
          break;
        case "cyan":
          this.isCyanSelected = true;
          this.selectedColors[index] = "cyan";
          this.player.color = "cyan";
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
  margin-top: 6rem;
  position: relative;
  width: 100%;
}

.form-select {
  font-size: 1.2rem;
}

@media screen and (max-width: 375px) {
  .svg-container {
    margin-top: 4rem;
  }

  .form-check-label {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 320px) {
  .svg-container {
    margin-top: 3rem;
  }

  .form-check-label {
    font-size: 0.8rem;
  }
}
</style>