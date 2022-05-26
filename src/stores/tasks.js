import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useTasks = defineStore("tasks", {
  state: () => {
    return {
      incomplete: JSON.parse(localStorage.getItem("incomplete")) || [],
      completed: JSON.parse(localStorage.getItem("complete")) || [],
      archive: JSON.parse(localStorage.getItem("archive")) || [],
    };
  },
  actions: {
    create(taskObject) {
      this.incomplete.unshift(taskObject);
      window.localStorage.setItem("tasks", JSON.stringify(this.incomplete));
      this.updateStorage();
    },
    delete(taskId) {
      let index;
      index = this.incomplete.findIndex((t) => {
        return t.id == taskId;
      });
      if (index != -1) {
        this.incomplete.splice(index, 1);
      }
      index = this.completed.findIndex((t) => {
        return t.id == taskId;
      });
      if (index != -1) {
        this.completed.splice(index, 1);
      }
      this.updateStorage();
    },
    complete(taskId) {
      const index = this.incomplete.findIndex((t) => {
        return t.id == taskId;
      });
      this.incomplete[index].complete = true;
      this.completed.unshift(this.incomplete[index]);
      this.incomplete.splice(index, 1);
      this.updateStorage();
    },
    uncomplete(taskId) {
      const index = this.completed.findIndex((t) => {
        return t.id == taskId;
      });
      this.completed[index].complete = false;
      this.incomplete.unshift(this.completed[index]);
      this.completed.splice(index, 1);
      this.updateStorage();
    },
    updateStorage() {
      window.localStorage.setItem(
        "incomplete",
        JSON.stringify(this.incomplete)
      );
      window.localStorage.setItem("complete", JSON.stringify(this.completed));
      window.localStorage.setItem("archive", JSON.stringify(this.archive));
    },
    replaceComplete(array) {
      this.completed = array;
      this.updateStorage();
    },
    replaceIncomplete(array) {
      this.incomplete = array;
      this.updateStorage();
    },
  },
});
