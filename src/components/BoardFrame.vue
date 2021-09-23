<template>
  <div class="container">
    <div class="frame">
      <p>BoardFrame Component</p>
      <BoardBall/>
    </div>
    <div class="frame">
      <p>BoardFrame Component</p>
      <BoardBall/>
    </div>
    <div class="frame">
      <p>BoardFrame Component</p>
      <BoardBall/>
    </div>
    <div class="frame">
      <p>BoardFrame Component</p>
      <BoardBall/>
    </div>
  </div>
</template>

<script>

import BoardBall from './BoardBall.vue'

export default{
  components: {
    BoardBall,
  },
  props: {
  },
  computed: {

  },
  methods: {
  }
}
</script>