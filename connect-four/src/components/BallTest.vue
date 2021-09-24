<template>
  <svg viewBox="0 0 200 200" width="100" height="100">
    <defs>
      <!-- defs 要素でグラデーションを定義 -->
      <linearGradient id="gradient01" x1="0%" y1="0%" x2="0%" y2="100%">
        <!-- 線形グラデーションの定義 -->
        <stop offset="0%" :stop-color="color2" />
        <stop offset="100%" :stop-color="color3" />
      </linearGradient>
      <linearGradient id="gradient02" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" :stop-color="color5" />
        <stop offset="50%" :stop-color="color4" />
        <stop offset="100%" :stop-color="color4" />
      </linearGradient>
      <linearGradient id="gradient03" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" :stop-color="color3" />
        <stop offset="50%" :stop-color="color1" />
        <stop offset="100%" :stop-color="color1" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="100" :fill="color1" />
    <circle fill="url(#gradient01)" cx="100" cy="100" r="95" />
    <circle cx="100" cy="100" r="86" :fill="color1" />
    <circle fill="url(#gradient02)" cx="100" cy="100" r="80" />
    <circle fill="url(#gradient03)" cx="100" cy="100" r="75" />
    <circle cx="100" cy="100" r="100" fill="blue" fill-opacity="0.4" />
  </svg>
</template>

<script>
export default {
  name: "ballTest",
  data() {
    return {
      color1: "#000000",
      color2: "#555555",
      color3: "#dddddd",
      color4: "#505050",
      color5: "#ffffff",
      //   color1: "#ddaa00",
      //   color2: "#ffb700",
      //   color3: "#ffef90",
      //   color4: "#edba00",
      //   color5: "#ffffff",
    };
  },
  computed: {},
  methods: {},
};
</script>