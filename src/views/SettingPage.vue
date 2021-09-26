<template>
  <div class="vh-100 d-flex flex-column justify-content-center align-items-center h-75">
    <div class="title text-center">
      <h1 class="pt-5">CHOOSE GAME MODE</h1>
    </div>
    <div class="d-flex justify-content-between align-items-center h-50">
      <div class="row">
        <router-link to="/setting/playerMode">
          <button class="btn btn-primary mx-5">
            <font-awesome-icon icon="user" />
            vs
            <font-awesome-icon icon="user" />
          </button>
        </router-link>
        <button class="btn btn-primary mx-5">
          <font-awesome-icon icon="user" />
          vs
          <font-awesome-icon icon="robot" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  font-size: 2rem;
  padding: 26px;
  border-radius: 12px;
  filter: drop-shadow(6px 6px 5px #1b4583);
}
</style>