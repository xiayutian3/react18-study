// 编写第一个mobx store小案例
import { makeAutoObservable } from "mobx";

class CounterStore {
  // 1.定义数据
  count = 0;
  // 定义原始数据
  list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  constructor() {
    // 2.把数据弄成响应式
    makeAutoObservable(this);
  }

  // 定义计算属性
  get filterList() {
    return this.list.filter((item) => item > 2);
  }
  // 修改list方法
  addList = () => {
    this.list.push(52, 32);
  };

  // 3.定义action函数（修改数据）
  addCount = () => {
    this.count++;
  };
}

// 4.实例化 然后导出给react使用
const counterStore = new CounterStore();
export { counterStore };


