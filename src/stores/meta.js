import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useMeta = defineStore("meta", {
  state: () => {
    return { currentId: localStorage.getItem("currentId") || 0 };
  },
  actions: {
    incrementId() {
      this.currentId++;
      localStorage.setItem("currentId", this.currentId);
    },
  },
});
