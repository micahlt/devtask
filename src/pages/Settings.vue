<template>
  <main>
    <h1>Settings</h1>
    <a href="#" target="_blank">Authenticate with GitHub</a>
  </main>
</template>

<script>
export default {
  name: "Settings",
};
</script>

<style scoped>
main {
  width: calc(100% - 7rem);
  height: calc(100% - 4rem);
  padding: 2rem 3.5rem;
  overflow-y: auto;
  background: radial-gradient(at top left, #000000, #1e3232);
}

a {
  color: black;
  background: white;
  padding: 0.7em 1em;
  text-decoration: none;
  border-radius: 2px;
  display: block;
  width: max-content;
}
</style>