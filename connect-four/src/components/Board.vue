<template>
  <div class="container">
    <p>Board Component ---></p>
    <div class="board">
      <BoardFrame/>
    </div>
  </div>
</template>

<script> 

import BoardFrame from './BoardFrame.vue'

export default {
  components: {
    BoardFrame,
  },
  props: {
  },
  data(){
    return{

    }
  },
  computed: {
  },
  methods: {

  }
}
</script>