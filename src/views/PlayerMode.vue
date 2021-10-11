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

        <!-- 
        Board Size
         -->
        <div class="col-10 col-sm-8 mt-5">
          <label for="boardSize" class="form-label">Board Size</label>
          <select
            class="form-select p-1 col-12 text-center"
            id="boardSize"
            v-model="boardSize"
          >
            <option v-for="(option, index) in boardSizeOptions" :key="index">
              {{ option }}
            </option>
          </select>
        </div>


        <!-- 
        Number of Player
         -->
        <div class="col-10 col-sm-8 mt-3">
          <label for="numberOfPlayers" class="form-check-label p-1">Number of Players</label>
          <select
            class="form-select p-1 col-12 text-center"
            id="numberOfPlayers"
            @change="initializeUser($event)"
            v-model="numberOfPlayers"
          >
            <option v-for="(option, index) in numberOfPlayersOptions" :key="index">
              {{ option }}
            </option>
          </select>
        </div>

        <!-- 
        Player Setting
         -->
        <div class="my-3">
          <h2>Player Setting</h2>
        </div>


        <div
          v-for="(player, index) in players"
          :key="index"
          class="d-flex justify-content-around col-12 col-sm-8 mb-3"
        >
          <div class="col-6">
            <label class="form-check-label" for="playersName">Player's Name</label>
            <input
              v-model="player.name"
              type="text"
              class="form-control text-center"
              id="playersName"
            />
          </div>

          <div class="col-6">
            <label class="form-check-label" for="playersColer">Player's Color</label>
            <select
              class="form-select p-1"
              v-model="player.color"
              aria-label="Default select example"
              id="playersColer"
            >
              <option
                v-for="(colorOption, index) in colorOptions"
                :key="index"
                :value="colorOption.color"
                :disabled="colorOption.disabled"
                @change="selectColor($event)"
              >
                {{ colorOption.color }}
              </option>
            </select>
          </div>
        </div>


        <!-- 
          Game start
        -->
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
import PlayerModeSVG from "@/components/svg/PlayerModeSVG.vue";
import { getArrayOfNumber, getArrayOfPlayers} from "@/utils"
import { Player } from "@/model/index.js";
import { Config } from "@/config.js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      boardSize: Config.board.size.min,
      boardSizeOptions: getArrayOfNumber(Config.board.size.min, Config.board.size.max),

      numberOfPlayers: Config.players.number.min,
      numberOfPlayersOptions: getArrayOfNumber(Config.players.number.min, Config.players.number.max),

      players: getArrayOfPlayers(Config.players.number.min),
      colorOptions: Object.keys(Config.ballColor).map(color => {
        return {
          color: color,
          disabled: false,
        };
      }),
    };
  },
  components: {
    PlayerModeSVG,
  },
  computed: {
    ...mapState(["isFullyEnterd", ""]),
  },
  methods: {
    gameStart: function () {
      this.$store.dispatch("setBoardSize", { boardSize: this.boardSize });
      this.$store.dispatch("setBoard");
      this.$store.dispatch("setPlayers", { players: this.players });
    },
    initializeUser: function (e) {
      this.numberOfPlayers = e.target.value;

      while(this.numberOfPlayers > this.players.length || this.numberOfPlayers < this.players.length){
        if(this.numberOfPlayers > this.players.length){
          this.players.push(new Player())
        }
        else if(this.numberOfPlayers < this.players.length){
          this.players.pop()
        }
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