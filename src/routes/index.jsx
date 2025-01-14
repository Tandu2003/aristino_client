import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Account from "../pages/Account";
import Auth from "../pages/Auth";

const RouterApp = () => {
  const isLogin = false;
  const isAdmin = false;

  const publicRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  const navigateRoutes = [
    {
      path: "/account/login",
      element: isLogin ? <Navigate to="/account" replace /> : <Auth login={true} />,
    },
    {
      path: "/account/register",
      element: isLogin ? <Navigate to="/account" replace /> : <Auth register={true} />,
    },
    {
      path: "/account",
      element: isLogin ? (
        isAdmin ? (
          <Navigate to="/admin" replace />
        ) : (
          <Account />
        )
      ) : (
        <Navigate to="/account/login" replace />
      ),
    },
  ];

  const adminRoutes = [];

  const routes = [...publicRoutes, ...navigateRoutes, ...(isAdmin ? adminRoutes : [])];

  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </>
  );
};

export default RouterApp;
