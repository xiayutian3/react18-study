import { useSearchParams,useParams,Outlet} from 'react-router-dom'


export default function About() {
  // searchParams的参数获取方式   /about?id=1001
  // const [searchParams, setSearchParams] = useSearchParams()
  // // searchParams是一个对象 对象里有一个get方法
  // // 用来获取对应的参数
  // // 把参数的名称作为get方法的实参传过来
  // const id = searchParams.get('id')


  // useParamsde 的参数获取方式  /about/1002
  const params = useParams()
  let id = params.id


  return (
    <div>
      About 得到的参数id为： {id}
      {/* 二级路由出口 */}
      <Outlet></Outlet>
    </div>
  )
}