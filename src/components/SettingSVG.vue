<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div>
      <svg
        viewBox="0 0 240 50"
        width="240"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          class="background"
          x="50%"
          y="50%"
          font-size="3rem"
          text-anchor="middle"
          dominant-baseline="central"
        >
          CHOOSE
        </text>
        <text
          fill="url(#gradient100)"
          class="foreground"
          x="50%"
          y="50%"
          font-size="3rem"
          text-anchor="middle"
          dominant-baseline="central"
        >
          CHOOSE
        </text>
        <defs>
          <linearGradient id="gradient100" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0095ff" />
            <stop offset="100%" stop-color="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div>
      <svg
        viewBox="0 0 440 50"
        width="440"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          class="background"
          x="50%"
          y="50%"
          font-size="3rem"
          text-anchor="middle"
          dominant-baseline="central"
        >
          GAME MODE
        </text>
        <text
          fill="url(#gradient100)"
          class="foreground"
          x="50%"
          y="50%"
          font-size="3rem"
          text-anchor="middle"
          dominant-baseline="central"
        >
          GAME MODE
        </text>
        <defs>
          <linearGradient id="gradient100" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0030ff" />
            <stop offset="100%" stop-color="#90e0ff" />
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