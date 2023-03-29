import {lazy} from "react";

import MainLayout from "layout/MainLayout";
import Layout2 from "layout/Layout2";
import Loadable from "components/common/ui-component/Loadable";
import PrivateOutlet from "./PrivateOutlet";
import React from "react";

const Home = Loadable(lazy(() => import("../pages/Home/Home")));
const Login = Loadable(lazy(() => import("pages/Login/Login")));

let MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // ----------- Nested Routed----------
      // {
      //     path: "/nguoi-dung",
      //     element: <Outlet />,
      //     children: [{ path: "/dang-nhap", element: <SignIn /> }],
      // },
      // --------Multi-PrivateOutlet-----------
      // {
      //     element: <PrivateOutlet></PrivateOutlet>,
      //     children: [
      //         { path: "/", element: <Home /> },
      //         { path: "/add", element: <Home /> },
      //     ],
      // },
      // -----------Single- PrivateOutlet-----------
      // {
      //     path: "/trang-chu",
      //     element: (
      //         <PrivateOutlet>
      //             <Home></Home>
      //         </PrivateOutlet>
      //     ),
      // },
    ],
  },
  {
    path: "/",
    element: <Layout2></Layout2>,
    children: [
      {
        path: "/dang-nhap",
        element: <Login></Login>,
      },
    ],
  },
];

export default MainRoutes;
