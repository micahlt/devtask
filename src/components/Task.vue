<template>
  <div class="task" @mouseleave="finishComplete">
    <div class="task__content">
      <h3 class="task__title">{{ task.title }}</h3>
    </div>
    <div
      class="task__options"
      @mouseenter="handleEnter"
      @mouseleave="handleLeave"
      ref="opts"
    >
      <a
        href="#"
        class="material-symbols-outlined task__opt task__opt--secondary"
        role="button"
        @click.prevent
        title="Move to archive"
        >archive</a
      >
      <a
        href="#"
        class="material-symbols-outlined task__opt task__opt--secondary"
        role="button"
        @click.prevent="deleteTask"
        title="Delete task"
        >delete</a
      >
      <div class="transition-container">
        <transition name="icon">
          <a
            href="#"
            class="material-symbols-outlined task__opt icon-will-switch"
            role="button"
            @click.prevent
            title="Complete task"
            v-if="!completed"
            @click="markAsComplete"
            >check_box_outline_blank</a
          >
          <a
            href="#"
            class="material-symbols-outlined task__opt icon-will-switch"
            role="button"
            @click.prevent
            title="Uncomplete task"
            @click="markAsIncomplete"
            v-else
            >select_check_box</a
          >
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { useTasks } from "../stores/tasks";
export default {
  name: "Task",
  props: {
    task: Object,
  },
  data() {
    return {
      completed: false,
      completionHasChanged: false,
      isMouseInside: false,
      tasks: useTasks(),
    };
  },
  mounted() {
    this.completed = this.task.complete;
  },
  methods: {
    handleEnter() {
      this.$refs.opts.classList.add("visible");
    },
    handleLeave() {
      this.$refs.opts.classList.remove("visible");
    },
    deleteTask() {
      this.tasks.delete(this.task.id);
    },
    markAsComplete() {
      this.completed = true;
      this.completionHasChanged = true;
    },
    markAsIncomplete() {
      this.completed = false;
      this.completionHasChanged = true;
    },
    finishComplete() {
      try {
        if (this.completionHasChanged) {
          if (this.completed) {
            setTimeout(() => {
              this.tasks.complete(this.task.id);
            }, 100);
          } else {
            this.tasks.uncomplete(this.task.id);
          }
        }
      } catch (err) {
        console.log("oof");
      }
    },
  },
};
</script>

<style scoped>
.task {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  border-radius: 2px;
  width: 100%;
}

.task:hover {
  background: rgba(255, 255, 255, 0.3);
}

.task__content {
  flex-grow: 1;
}

.task__title {
  font-weight: normal;
}

.task__options {
  display: flex;
  align-items: center;
}

.task__opt {
  text-decoration: none;
  display: block;
  color: inherit;
  opacity: 0.3;
  transition: 0.15s;
  margin-left: 0.2rem;
}

.task__opt--secondary {
  opacity: 0;
  cursor: pointer;
  user-select: none;
  display: block;
}

.task__opt:hover {
  opacity: 1 !important;
}

.visible .task__opt--secondary {
  opacity: 0.3;
}

.transition-container {
  width: 24px;
  height: 24px;
}
</style>