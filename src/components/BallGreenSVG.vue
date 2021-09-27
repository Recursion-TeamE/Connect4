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
        <linearGradient id="gradient10" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#00b100" />
          <stop offset="100%" stop-color="#7efa7e" />
        </linearGradient>
        <linearGradient id="gradient11" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#d3fed3" />
          <stop offset="50%" stop-color="#00cc00" />
          <stop offset="100%" stop-color="#00b400" />
        </linearGradient>
        <linearGradient id="gradient12" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#8cfa8c" />
          <stop offset="70%" stop-color="#00ab00" />
          <stop offset="100%" stop-color="#00db00" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="100" fill="#009200" />
      <circle fill="url(#gradient10)" cx="100" cy="100" r="95" />
      <circle cx="100" cy="100" r="86" fill="#207920" />
      <circle fill="url(#gradient11)" cx="100" cy="100" r="80" />
      <circle fill="url(#gradient12)" cx="100" cy="100" r="75" />
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