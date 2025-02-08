import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Account from "../pages/Account";
import LoginRegister from "../pages/LoginRegister";
import Collections from "../pages/Collections";
import ProductDetails from "../pages/ProductDetails";

import AuthConext from "../context/AuthProvider";

const RouterApp = () => {
  const { loggedIn, user } = useContext(AuthConext);

  const publicRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/collections/:slug",
      element: <Collections />,
    },
    {
      path: "/products/:slug",
      element: <ProductDetails />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  const navigateRoutes = [
    {
      path: "/account/login",
      element: loggedIn ? <Navigate to="/account" replace /> : <LoginRegister login={true} />,
    },
    {
      path: "/account/register",
      element: loggedIn ? <Navigate to="/account" replace /> : <LoginRegister register={true} />,
    },
    {
      path: "/account",
      element: loggedIn ? (
        user.role === "admin" ? (
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

  const routes = [
    ...publicRoutes,
    ...navigateRoutes,
    ...(user.role === "admin" ? adminRoutes : []),
  ];

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
