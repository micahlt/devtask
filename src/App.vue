<script>
export default {
  name: "App",
};
</script>

<template>
  <SideBar />
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
  font-family: "Saira Semi Condensed", sans-serif;
}

body {
  height: 100vh;
  width: 100%;
  background: black;
}

.transition-container {
  position: relative;
}

.icon-enter-active,
.icon-leave-active {
  transition: all 0.7s ease-out;
}

.icon-enter-from {
  opacity: 0;
  transform: rotate(360deg) scale(0.7);
}

.icon-leave-to {
  opacity: 0;
  transform: rotate(-90deg) scale(0.7);
}

.icon-will-switch {
  position: absolute;
}
</style>
