<template>
  <div>
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient04" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#b10000" />
          <stop offset="100%" stop-color="#fa7e7e" />
        </linearGradient>
        <linearGradient id="gradient05" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fed3d3" />
          <stop offset="50%" stop-color="#cc0000" />
          <stop offset="100%" stop-color="#b40000" />
        </linearGradient>
        <linearGradient id="gradient06" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fa8c8c" />
          <stop offset="70%" stop-color="#ab0000" />
          <stop offset="100%" stop-color="#db0000" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="100" fill="#920000" />
      <circle fill="url(#gradient04)" cx="100" cy="100" r="95" />
      <circle cx="100" cy="100" r="86" fill="#792020" />
      <circle fill="url(#gradient05)" cx="100" cy="100" r="80" />
      <circle fill="url(#gradient06)" cx="100" cy="100" r="75" />
    </svg>
  </div>
</template>
