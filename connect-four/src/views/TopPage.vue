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
    <div class="title">
      <TitleSvg width="800" id="connect4" />
    </div>
    <router-link to="/setting"><button class="btn btn-primary">Game Start</button></router-link>
    
  </div>
</template>

<script>
import TitleSvg from "@/assets/images/title2.min.svg";

export default {
  components: {
    TitleSvg,
  },
  name: "TopPage",
};
</script>

<style scoped>
#connect4 {
  filter: drop-shadow(4px 4px 4px #363636);
}

.btn{
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 10px;
}

.bg-image {
  background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(0, 0, 0, 0)),
    url(../assets/images/title-image.png);
  background-repeat: repeat-x;
  background-position: bottom;
}
</style>