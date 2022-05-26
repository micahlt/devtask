<template>
  <div :class="{ tasklist: true, complete: type == 'complete' }">
    <draggable
      v-model="taskArray"
      tag="transition-group"
      item-key="id"
      :component-data="{ name: 'task' }"
      @change="changeList"
      ghost-class="ghost"
    >
      <template #item="{ element }">
        <div class="task__parent">
          <Task :task="element" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from "zhyswan-vuedraggable";
import { useTasks } from "../stores/tasks";
export default {
  name: "TaskList",
  components: {
    draggable,
  },
  props: {
    tasks: Array,
    type: String,
  },
  data() {
    return {
      taskArray: [],
      taskStore: useTasks(),
    };
  },
  mounted() {
    this.taskArray = this.tasks;
  },
  computed: {
    doneMessage() {
      if (this.type == "complete") {
        return "You haven't finished any tasks yet.";
      } else if (this.type == "incomplete") {
        return "All done for now!";
      } else {
        return "Hmm, no content found.";
      }
    },
  },
  methods: {
    changeList() {
      if (this.type == "complete") {
        this.taskStore.replaceComplete(this.taskArray);
      } else {
        this.taskStore.replaceIncomplete(this.taskArray);
      }
    },
  },
};
</script>

<style scoped>
.tasklist {
  position: relative;
}

.tasklist.complete {
  opacity: 0.5;
}

.tasklist:empty {
  display: grid;
  place-items: center;
}

.tasklist:empty:after {
  content: v-bind("doneMessage");
  opacity: 0.4;
  font-size: 1.2rem;
}

.task__parent {
  width: calc(100% - 2rem);
}

.task__parent:active {
  cursor: grabbing;
}

.task-move, /* apply transition to moving elements */
.task-enter-active,
.task-leave-active {
  transition: all 0.25s ease;
}
.task-enter-from,
.task-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.task-leave-active {
  position: absolute;
}
</style>