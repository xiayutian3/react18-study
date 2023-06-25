//1导入useNavigate
import { useNavigate } from'react-router-dom'

export default function Login () {
  //2.执行useNavigate得到一个跳转函数
  const navigate = useNavigate()
  // 跳转到关于页面
  function toAbout () {
    // 3.调用跳转函数传入目标路径
    // replace:true 开启替换模式
    // searchparams 传参方式  /about?id=1001
    // navigate('/about?id=1001',{replace:true})

    // params的传参方式  /about/1002
    navigate('/about/1002',{replace:true})
  }
  return (
    <div>
      Login
      <button onClick={toAbout}>跳转到关于页面</button>
    </div>
  )
}
