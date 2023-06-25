//引入组件
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import InnerChild1 from "./InnerChild1";
import InnerChild2 from "./InnerChild2";
import NotFound from "./NotFound";
import {HashRouter, BrowserRouter, Link, Route, Routes } from "react-router-dom";

// 进行路由配置

function App() {
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* searchParams的方式 */}
        {/* <Route path="/about" element={<About />} /> */}

        {/* params的方式 占位符 */}
        <Route path="/about/:id" element={<About />} >
          {/* 定义二级路由嵌套 */}
          {/* <Route path="child1" element={<InnerChild1 />} /> */}
          
          {/* 默认渲染的二级路由 添加index属性，把他自己的路径path去掉 */}
          <Route index element={<InnerChild1 />} />
          <Route path="child2" element={<InnerChild2 />} />

        </Route>

        <Route path="/login" element={<Login />} />

        {/* 当所有的路径都不匹配时，显示 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
