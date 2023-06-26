// 组合子模块
// 封装统一导出的供业务使用的方法

import React from "react";
import { counterStore } from "./counter";
import { listStore } from "./list";

class RootStore {
  constructor() {
    //rootStore实例化的时候，会有 counterStore，listStore属性
    this.counterStore = counterStore;
    this.listStore = listStore;
  }
}

// 实例化操作
const rootStore = new RootStore();
// 使用react context（跨组件通信）机制 完成统一方法的封装
// Provider value={传递的数据}
// 查找机制：useContext 优先从Provider value找，如果找不到，就会找
// createContext方法传递过来的默认参数
const context = React.createContext(rootStore);

// 这个方法作用：通过useContext拿到rootStore实例对象，然后返回
// 只用业务组件中，调用useStore() -> rootStore
const useStore = () => React.useContext(context);

export { useStore };
