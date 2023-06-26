import { makeAutoObservable } from "mobx";

class ListStore {
  list = ["react", "vue"];
  constructor() {
    makeAutoObservable(this);
  }
  addList = () => {
    this.list.push("angular");
  };
}

const listStore = new ListStore();
export { listStore };


