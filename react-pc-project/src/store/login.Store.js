// 登录模块
import { makeAutoObservable } from "mobx";
import { http, setToken, getToken } from "@/utils";

class LoginStore {
  // 这里哦！！
  token = getToken() || "";
  constructor() {
    makeAutoObservable(this);
  }
  // 登录
  login = async ({ mobile, code }) => {
    const res = await http.post("http://geek.itheima.net/v1_0/authorizations", {
      mobile,
      code,
    });
    this.token = res.data.token;
    // 还有这里哦！！
    setToken(res.data.token);
  };
}
export default LoginStore;
