import { ReactElement, Suspense } from "react";
import { Navigate } from "react-router";

import MioPageLoading from "../components/loading/page-loading";
import MioMBIndex from "../pages/mobile";
import MioWebIndex from "../pages/web";

const lazyLoad = (children:ReactElement) => {
  return <Suspense fallback={<MioPageLoading type={false}/>}>{children}</Suspense>
}

// 配置路由
export const routes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to={'/web'} />
      },
      {
        path: '*',
        element: <Navigate to={'/web'} />
      },
      {
        path: '/web',
        element: lazyLoad(<MioWebIndex />)
      }
    ]    
  },
  {
    path: '/mobile',
    element: lazyLoad(<MioMBIndex />)
  }
]