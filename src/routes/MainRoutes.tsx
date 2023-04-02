import {lazy} from "react";

import MainLayout from "layout/MainLayout";
import Layout2 from "layout/Layout2";
import Loadable from "components/common/ui-component/Loadable";
import PrivateOutlet from "./PrivateOutlet";
import React from "react";
import {Outlet} from "react-router-dom";

const Home = Loadable(lazy(() => import("../pages/Home/Home")));
const Login = Loadable(lazy(() => import("pages/Login/Login")));
const NewsMain = Loadable(lazy(() => import("pages/News/news-main/news-main")));
const NewsDetail = Loadable(
  lazy(() => import("pages/News/news-detail/news-detail"))
);
const BiddingMain = Loadable(
  lazy(() => import("pages/Bidding/bidding-main/bidding-main"))
);
const BiddingDetail = Loadable(
  lazy(() => import("pages/Bidding/bidding-detail/bidding-detail"))
);
const Introduce = Loadable(lazy(() => import("pages/Introduce/Introduce")));
const Department = Loadable(lazy(() => import("pages/Department/Department")));

const RecruitmentMain = Loadable(
  lazy(() => import("pages/recruitment/recruitment-main/recruitment-main"))
);
const RecruitmentDetail = Loadable(
  lazy(() => import("pages/recruitment/recruitment-detail/recruitment-detail"))
);
const Document = Loadable(lazy(() => import("pages/Document/document")));
const Contact = Loadable(lazy(() => import("pages/Contact/contact")));
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
        path: "/document",
        element: <Document />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/introduce",
        element: <Introduce />,
      },
      {
        path: "/department",
        element: <Department />,
      },
      // ----------- Nested Routed----------
      {
        path: "/recruitment",
        element: <Outlet />,
        children: [
          {path: "", element: <RecruitmentMain />},
          {path: "/recruitment/detail/:id", element: <RecruitmentDetail />},
        ],
      },
      {
        path: "/news",
        element: <Outlet />,
        children: [
          {path: "", element: <NewsMain />},
          {path: "/news/detail/:id", element: <NewsDetail />},
        ],
      },
      {
        path: "/bidding",
        element: <Outlet />,
        children: [
          {path: "", element: <BiddingMain />},
          {path: "/bidding/detail/:id", element: <BiddingDetail />},
        ],
      },
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
