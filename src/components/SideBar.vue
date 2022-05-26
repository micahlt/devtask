<script>
export default {
  name: "SideBar",
  methods: {
    go(to) {
      this.$router.push(to);
    },
  },
};
</script>

<template>
  <nav>
    <h1>dvtsk.</h1>
    <ul class="sidebar__options">
      <li @click="go('tasks')">
        <span class="material-symbols-outlined">task_alt</span>
        Tasks
      </li>
      <li @click="go('repos')">
        <span class="material-symbols-outlined">snippet_folder</span>
        Repositories
      </li>
      <li @click="go('archive')">
        <span class="material-symbols-outlined">archive</span> Archive
      </li>
      <li @click="go('trash')">
        <span class="material-symbols-outlined">delete</span> Trash
      </li>
      <li class="sidebar__option--divider"></li>
      <li class="sidebar__option--settings" @click="go('settings')">
        <span class="material-symbols-outlined">settings</span>
        Settings
      </li>
    </ul>
  </nav>
</template>

<style scoped>
h1 {
  font-family: "Saira Extra Condensed", sans-serif;
  font-size: 3rem;
  margin-top: 1rem;
  user-select: none;
}

nav {
  width: 17rem;
  text-align: center;
  overflow-x: hidden;
}

.material-symbols-outlined {
  font-size: 1.2em;
  line-height: 1em;
  display: inline-block;
  transform: translateY(3px);
  margin-right: 0.3em;
}

.sidebar__options {
  text-align: left;
  width: 100%;
  margin: 0;
  margin-top: 1.5rem;
  list-style-type: none;
}

li {
  line-height: 2em;
  width: 100%;
  cursor: pointer;
  padding-left: 1.5rem;
  transition: padding 0.2s;
  user-select: none;
}

li:hover {
  background: rgba(255, 255, 255, 0.2);
  padding-left: 2rem;
}

.sidebar__option--settings {
  margin-top: 1rem;
}

.sidebar__option--divider {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 75%;
  margin: auto;
  margin-top: 1rem;
  cursor: initial;
}

.sidebar__option--divider:hover {
  background: transparent;
}
</style>
