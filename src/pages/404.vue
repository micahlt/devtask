<template>
  <main class="main--404">
    <h1>Coming soon</h1>
    <router-link to="/tasks">Back to tasks</router-link>
  </main>
</template>

<script>
export default {
  name: "404",
};
</script>

<style scoped>
.main--404 {
  width: calc(100% - 7rem);
  height: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 3.5rem;
  overflow-y: auto;
}

h1 {
  font-size: 4rem;
}

a {
  color: white;
}
</style>