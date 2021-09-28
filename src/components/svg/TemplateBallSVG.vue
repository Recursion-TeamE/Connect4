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
        <linearGradient :id="circle2.id" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" :stop-color="circle2.startColor" />
          <stop offset="100%" :stop-color="circle2.endColor" />
        </linearGradient>
        <linearGradient :id="circle4.id" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" :stop-color="circle4.startColor" />
          <stop offset="50%" :stop-color="circle4.middleColor" />
          <stop offset="100%" :stop-color="circle4.endColor" />
        </linearGradient>
        <linearGradient :id="circle5.id" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" :stop-color="circle5.startColor" />
          <stop offset="70%" :stop-color="circle5.middleColor" />
          <stop offset="100%" :stop-color="circle5.endColor" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="100" v-bind:fill="circle1.color" />
      <circle :fill="`url(#${circle2.id}`" cx="100" cy="100" r="95" />
      <circle cx="100" cy="100" r="86" v-bind:fill="circle3.color" />
      <circle :fill="`url(#${circle4.id}`" cx="100" cy="100" r="80" />
      <circle :fill="`url(#${circle5.id}`" cx="100" cy="100" r="75" />
    </svg>
  </div>
</template>


<script>
export default {
  props: {
    circle1: {
      color: {
        type: String,
        required: true,
      },
    },
    circle2: {
      id: {
        type: String,
        required: true,
      },
      startColor: {
        type: String,
        required: true,
      },
      endColor: {
        type: String,
        required: true,
      },
    },
    circle3: {
      color: {
        type: String,
        required: true,
      },
    },
    circle4: {
      id: {
        type: String,
        required: true,
      },
      startColor: {
        type: String,
        equired: true,
      },
      middleColor: {
        type: String,
        required: true,
      },
      endColor: {
        type: String,
        required: true,
      },
    },
    circle5: {
      id: {
        type: String,
        required: true,
      },
      startColor: {
        type: String,
        required: true,
      },
      middleColor: {
        type: String,
        required: true,
      },
      endColor: {
        type: String,
        required: true,
      },
    },
  },
  methods: {},
};
</script>