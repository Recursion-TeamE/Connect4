<template>
  <div class="d-flex justify-content-center align-items-center">
    <div>
      <svg
        viewBox="0 0 200 50"
        width="200"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          class="background"
          x="50%"
          y="50%"
          font-size="2.5em"
          text-anchor="middle"
          dominant-baseline="central"
        >
          {{ winner }}
        </text>
        <text
          fill="url(#gradient100)"
          class="foreground"
          x="50%"
          y="50%"
          font-size="2.5em"
          text-anchor="middle"
          dominant-baseline="central"
        >
          {{ winner }}
        </text>
        <defs>
          <linearGradient id="gradient100" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0095ff" />
            <stop offset="100%" stop-color="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 300 50"
        width="300"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          class="background"
          x="50%"
          y="50%"
          font-size="2em"
          text-anchor="middle"
          dominant-baseline="central"
        >
          is the
        </text>
        <text
          fill="url(#gradient100)"
          class="foreground"
          x="50%"
          y="50%"
          font-size="2em"
          text-anchor="middle"
          dominant-baseline="central"
        >
          is the
        </text>
        <defs>
          <linearGradient id="gradient100" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0095ff" />
            <stop offset="100%" stop-color="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 300 50"
        width="300"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          class="background"
          x="50%"
          y="50%"
          font-size="2.5em"
          text-anchor="middle"
          dominant-baseline="central"
        >
          Winner !!
        </text>
        <text
          fill="url(#gradient100)"
          class="foreground"
          x="50%"
          y="50%"
          font-size="2.5em"
          text-anchor="middle"
          dominant-baseline="central"
        >
          Winner !!
        </text>
        <defs>
          <linearGradient id="gradient100" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0095ff" />
            <stop offset="100%" stop-color="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winner: "Player1",
    };
  },
};
</script>

<style scoped>
svg {
  display: inline-block;
  margin: 0.4rem;
}

.background {
  stroke: #ffffff;
  stroke-width: 0.6rem;
  stroke-linejoin: round;
}

.foreground {
  stroke: #3a6ac2;
  stroke-width: 0.1rem;
  stroke-linejoin: round;
}
</style>