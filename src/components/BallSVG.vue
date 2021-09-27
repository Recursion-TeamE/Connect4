<template>
  <div>
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      style="
        fill-rule: evenodd;
        clip-rule: evenodd;
        stroke-linejoin: round;
        stroke-miterlimit: 2;
      "
    >
      <defs>
        <linearGradient id="gradient01" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e1e1e" />
          <stop offset="100%" stop-color="#ffffff" />
        </linearGradient>
        <linearGradient id="gradient02" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="50%" stop-color="#212121" />
          <stop offset="100%" stop-color="#393939" />
        </linearGradient>
        <linearGradient id="gradient03" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#b4b4b4" />
          <stop offset="70%" stop-color="#242424" />
          <stop offset="100%" stop-color="#515151" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="100" fill="#000000" />
      <circle fill="url(#gradient01)" cx="100" cy="100" r="95" />
      <circle cx="100" cy="100" r="86" fill="#000000" />
      <circle fill="url(#gradient02)" cx="100" cy="100" r="80" />
      <circle fill="url(#gradient03)" cx="100" cy="100" r="75" />
      <circle cx="100" cy="100" r="100" :fill="color" fill-opacity="0.4" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
</script>