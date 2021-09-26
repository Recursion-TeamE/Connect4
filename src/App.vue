<template>
  <div id="app">
    <Header />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import Header from "@/views/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
/* Google fonts */
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
#app {
  font-family: "Varela Round", sans-serif;
}
</style>
