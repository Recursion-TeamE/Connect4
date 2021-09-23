<template>
  <div>
    <BallYellowSVG
      class="ball-root"
      :style="{
        transform: `translate(${x + dx}px, ${y + dy}px)`,
      }"
      @click="fall(260)"
    />
  </div>
</template>

<script>
import BallYellowSVG from "../assets/images/ball-yellow.svg";

export default {
  name: "fallingBall",
  props: {
    x: { type: Number, default: 200 },
    y: { type: Number, default: 165 },
  },
  data() {
    return {
      dx: 0,
      dy: 0,
    };
  },
  components: {
    BallYellowSVG,
  },
  computed: {},
  methods: {
    fall(height) {
      this.dy += height;
    },
  },
};
</script>

<style scoped>
.ball-root {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  transition: transform 0.5s ease-in;
  will-change: transform;
}
</style>