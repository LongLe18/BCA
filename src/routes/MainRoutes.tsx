import {lazy} from "react";

import MainLayout from "layout/MainLayout";
import Layout2 from "layout/Layout2";
import Loadable from "components/common/ui-component/Loadable";
import PrivateOutlet from "./PrivateOutlet";
import React from "react";
import {Outlet} from "react-router-dom";

const Home = Loadable(lazy(() => import("../pages/Home/Home")));
const Login = Loadable(lazy(() => import("pages/Login/Login")));
const Introduce = Loadable(lazy(() => import("pages/Introduce/Introduce")));
const Department = Loadable(lazy(() => import ('pages/Department/Department')));

const RecruitmentMain = Loadable(
  lazy(() => import("pages/recruitment/recruitment-main/recruitment-main"))
);
let MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recruitment",
        element: <RecruitmentMain />,
      },
      {
        path: "/introduce",
        element: <Introduce /> 
      },
      {
        path: '/department',
        element: <Department />
      },
      // ----------- Nested Routed----------
      // {
      //   path: "/recruitment",
      //   element: <Outlet />,
      //   children: [{path: "", element: <RecruitmentMain />}],
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
