<template>
  <div class="parent">
    <main>
      <AddTask />
      <div class="lists">
        <div class="divider divider--todo" v-if="incomplete.length > 0"></div>
        <TaskList :tasks="incomplete" type="incomplete" />
        <div
          class="divider divider--completed"
          v-if="complete.length > 0"
        ></div>
        <TaskList
          :tasks="complete"
          type="complete"
          v-if="complete.length > 0"
        />
      </div>
    </main>
    <div class="bg"></div>
  </div>
</template>

<script>
import { useTasks } from "../stores/tasks";
export default {
  name: "Home",
  data() {
    return {
      imageOpts: [
        "dynamic-wang-uMo1PTIGIR8-unsplash.jpg",
        "austin-schmid-0asZ7HcEHSQ-unsplash.jpg",
        "pavel-ogar-3z9_Uqlk_kg-unsplash.jpg",
        "rick-rothenberg-SGIJEBVsEHs-unsplash.jpg",
        "milad-fakurian-XN_r2bNOsO4-unsplash.jpg",
      ],
      incomplete: useTasks().incomplete,
      complete: useTasks().completed,
    };
  },
  computed: {
    background() {
      return `url('/backgrounds/${
        this.imageOpts[Math.floor(Math.random() * this.imageOpts.length)]
      }')`;
    },
  },
};
</script>

<style scoped>
div.parent {
  position: relative;
  height: 100%;
}

main {
  z-index: 1;
  position: absolute;
  width: calc(100% - 7rem);
  height: calc(100% - 4rem);
  padding: 2rem 3.5rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9) 8rem,
    rgba(0, 0, 0, 0.6) 30%
  );
  overflow-y: auto;
}

.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: v-bind("background");
  background-position: bottom center;
  background-size: cover;
}

.lists {
  margin-top: 1rem;
  height: calc(100% - 6rem);
}

.divider {
  width: 100%;
  display: flex;
  opacity: 0.3;
  margin-top: 1rem;
}

.divider:before {
  margin-left: 1rem;
  margin-bottom: 0.25rem;
}

.divider--completed:before {
  content: "Completed items";
}

.divider--todo:before {
  content: "To-do";
}
</style>