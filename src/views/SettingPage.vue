<template>
  <div
    class="vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <div class="svg-container">
      <SettingSVG class="svg-text" />
    </div>
    <div class="d-flex justify-content-center align-items-center h-50">
      <div class="btn-container">
        <router-link to="/setting/playerMode">
          <button class="btn btn-primary">
            <font-awesome-icon icon="user" />
            vs
            <font-awesome-icon icon="user" />
          </button>
        </router-link>
        <button class="dark disabled btn btn-primary">
          <p class="tbd-fonts">TBD</p>
          <font-awesome-icon icon="user" />
          vs
          <font-awesome-icon icon="robot" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SettingSVG from "@/components/svg/SettingSVG.vue";

export default {
  components: {
    SettingSVG,
  },
};
</script>

<style scoped>
.tbd-fonts{
  font-size: 15px;
  margin: 0;
  position: absolute;
  top: 10px;
  right: 20px;
}

.dark{
  background-color: rgb(172, 170, 170);
  border-color: rgb(180, 180, 180);
}

.btn {
  font-size: 2rem;
  padding: 1.5rem;
  margin: 1rem;
  width: 13rem;
  border-radius: 0.8rem;
  filter: drop-shadow(6px 6px 5px #1b4583);
  position: relative;
}

.svg-container {
  position: relative;
  width: 100%;
}

@media screen and (max-width: 414px) {
  .svg-container {
    padding-top: 25%;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20%;
  }
}
</style>