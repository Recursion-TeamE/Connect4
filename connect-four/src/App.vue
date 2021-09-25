<template>
  <div id="app">
    <TopPage />
    <router-view :key="$route.path"/>
  </div>
</template>

<script>

import TopPage from './view/TopPage.vue'

export default {
  name: "app",
  components: {
    TopPage,
  },
};
</script>

n