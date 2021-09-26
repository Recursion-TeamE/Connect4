<template>
  <div d-flex>
    <div>
      <svg viewBox="0 0 100 50">
        <text class="background" x="-35" y="50%" font-size="1.8em">Player Mode</text>
        <text
          fill="url(#gradient04)"
          class="foreground"
          x="-35"
          y="50%"
          font-size="1.8em"
        >
          Player Mode
        </text>
        <defs>
          <linearGradient id="gradient04" x1="0%" y1="0%" x2="0%" y2="100%">
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
  width: 200px;
  height: auto;
  overflow: visible;
}

.background {
  stroke: #ffffff;
  stroke-width: 4;
  stroke-linejoin: round;
  filter: drop-shadow(3px 3px 3px #1b4583);
}

.foreground {
  stroke: #3a90c2;
  stroke-width: 1;
  stroke-linejoin: round;
}
</style>