<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div>
      <svg
        viewBox="0 0 300 70"
        width="300"
        height="70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          class="background"
          x="50%"
          y="50%"
          font-size="3em"
          text-anchor="middle"
          dominant-baseline="central"
        >
          Player Mode
        </text>
        <text
          fill="url(#gradient100)"
          class="foreground"
          x="50%"
          y="50%"
          font-size="3em"
          text-anchor="middle"
          dominant-baseline="central"
        >
          Player Mode
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
  stroke-width: 0.2rem;
  stroke-linejoin: round;
}
</style>