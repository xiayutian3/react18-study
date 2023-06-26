// 导入路由
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 导入页面组件
// import Login from "./pages/Login";
import Login from "@/pages/Login";
import Layout from "./pages/Layout";
// 路由鉴权-高阶组件
import { AuthRoute } from "@/components/AuthRoute";

// 配置路由规则
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 需要鉴权的路由 */}
          <Route
            path="/"
            element={
              <AuthRoute>
                <Layout />
              </AuthRoute>
            }
          />
          {/* 不需要鉴权的路由 */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
