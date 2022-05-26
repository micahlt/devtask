<template>
  <div class="input-parent">
    <input
      type="text"
      v-model="query"
      :placeholder="chosenPlaceholder"
      @keyup="handleKeyup"
    />
  </div>
</template>

<script>
import { useMeta } from "../stores/meta";
import { useTasks } from "../stores/tasks";
export default {
  name: "AddTask",
  data() {
    return {
      meta: useMeta(),
      tasks: useTasks(),
      query: "",
      placeholders: [
        "type anything...",
        "create a new task...",
        "jot down an idea...",
        "make a new project...",
        "change the world...",
      ],
    };
  },
  methods: {
    handleKeyup(e) {
      if (e.key == "Enter") {
        this.tasks.create({
          title: this.query,
          id: this.meta.currentId,
        });
        this.meta.incrementId();
        e.target.value = "";
      } else {
        console.log("Not enter");
      }
    },
  },
  computed: {
    chosenPlaceholder() {
      return this.placeholders[
        Math.floor(Math.random() * this.placeholders.length)
      ];
    },
  },
};
</script>

<style scoped>
input {
  width: calc(100% - 2rem);
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid #ffffff33;
  transition: 0.2s;
  color: white;
  font-family: inherit;
  font-size: 1.25rem;
}

input::placeholder {
  font-family: "Saira Semi Condensed", sans-serif;
  font-size: 1.25rem;
}

input:focus {
  outline: none;
  border-bottom: 2px solid white;
}
</style>