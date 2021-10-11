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
      <form class="d-flex flex-column align-items-center">
        <div class="col-10 col-sm-8 mt-5">
          <label for="boardSize" class="form-label">Board Size</label>
          <input
            v-model="boardSize"
            type="number"
            min="5"
            max="8"
            value="5"
            class="form-control text-center"
            id="boardSize"
          />
        </div>
        <div class="col-10 col-sm-8 mt-3">
          <label for="numberOfPlayers" class="form-check-label p-1"
            >Number of Players</label
          >
          <select
            class="form-select p-1 col-12 text-center"
            id="numberOfPlayers"
            @change="initializeUser($event)"
            v-model="numberOfPlayers"
          >
            <option v-for="(option, index) in options" :key="index">
              {{ option.text }}
            </option>
          </select>
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
              v-model="playersColor"
              aria-label="Default select example"
              id="playersColer"
            >
              <option
                v-for="(form, index) in forms"
                :key="index"
                :value="form.color"
                :disabled="form.disabled"
                @change="selectColor($event)"
              >
                {{ form.color }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <router-link to="/setting/playerMode/game">
            <button
              type="submit"
              class="btn btn-primary mt-3"
              @click="gameStart"
            >
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
import { Config } from "@/config.js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      Config: Config,
      forms: Object.keys(Config.ballColor).map((color) => {
        return {
          color: color,
          disabled: false,
        };
      }),
      boardSize: 5,
      numberOfPlayers: 2,
      options: [
        { value: 2, text: "2" },
        { value: 3, text: "3" },
        { value: 4, text: "4" },
      ],
      players: [
        new Player("Player1", "red"), 
        new Player("Player2", "blue")
      ],
      colorSelection: ["red", "blue", "yellow", "green", "pink", "cyan"],
      selectedColors: ["red", "blue", "???", "???"],
      isRedSelected: true,
      isBlueSelected: true,
      isYellowSelected: false,
      isGreenSelected: false,
      isPinkSelected: false,
      isCyanSelected: false,
    };
  },
  components: {
    PlayerModeSVG,
    // GamePage,
  },
  computed: {
    ...mapState(["isFullyEnterd", ""]),
    playersColor: {
      get(){
        // return this.value.
      },
      set(val){
        
      }
    }
    }
  },
  methods: {
    gameStart: function () {
      console.log(this.boardSize);
      // this.$store.dispatch("setBoardSize", { boardSize: this.boardSize });
      // this.$store.dispatch("setBoard");

      const colors = Object.keys(Config.ballColor);
      console.log(colors);
      // this.$store.dispatch("setPlayers", { players: this.players });
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
    selectColor: function (e) {
      const color =  e.target.value 
      for(let i = 0 ; i < forms.length; i++){
        const form = forms[i]

        if(form.color == color)
      
      }
      
      this.forms[index].disabled = true;

    }
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