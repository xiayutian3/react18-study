// 1.导入counterStore
import { counterStore } from "./store/counter";
// 2.导入中间件连接mobx react 完成响应式变化
import { observer } from "mobx-react-lite";

// 使用统一封装好的store 模块
import { useStore } from "./store";


function App() {
  // 获取rootStore
  const rootStore = useStore()

  return (
    <div className="App">
      {/* 把store中的count渲染一下 */}
      {counterStore.count}
      {/* 计算属性 */}
      {counterStore.filterList.join("-")}
      {/* 点击时间触发action函数修改count值 */}
      <button onClick={counterStore.addCount}>增加</button>
      <button onClick={counterStore.addList}>修改数组</button>

    
      <div>
        <h1>使用统一封装好的store 模块数据 </h1>
        {rootStore.counterStore.count}
        <button onClick={rootStore.counterStore.addCount}>增加</button>
      </div>

    </div>
  );
}

// 3.包裹App
export default observer(App);
