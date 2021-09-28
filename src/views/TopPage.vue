<template>
  <div
    class="
      vh-100
      d-flex
      flex-column
      justify-content-start
      align-items-center
      bg-image
    "
  >
    <div class="title svg-container">
      <TitleSvg class="connect4" />
    </div>
    <div class="container">
      <router-link to="/setting">
        <button class="btn btn-primary">Game Setting</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import TitleSvg from "@/assets/images/title.min.svg";

export default {
  components: {
    TitleSvg,
  },
  name: "TopPage",
};
</script>

<style scoped>
.btn {
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 10px;
  filter: drop-shadow(6px 6px 5px #1b4583);
}

.bg-image {
  background-image: linear-gradient(
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 0) 90%
    ),
    url(../assets/images/title-image.png);
  background-repeat: repeat-x;
  background-position: bottom;
}

.svg-container {
  position: relative;
  width: 70%;
  padding-top: 25%;
}

.connect4 {
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  filter: drop-shadow(4px 4px 4px #1b4583);
}

@media screen and (max-width: 414px) {
  .svg-container {
    height: 50%;
    width: 100%;
    padding-top: 50%;
  }
}
</style>