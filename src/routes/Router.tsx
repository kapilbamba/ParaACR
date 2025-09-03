import { lazy } from "react";
import { Navigate } from "react-router-dom";
import AppRouter from "./views/AppRouter";
import Loadable, {
  MyLoadable,
} from "src/layouts/full/shared/loadable/Loadable";
import AgencyUserRegistration from "src/views/apps/agency/registration";

const FullLayout = MyLoadable(lazy(() => import("../layouts/full/FullLayout")));
const BlankLayout = Loadable(
  lazy(() => import("../layouts/blank/BlankLayout"))
);

const Login = Loadable(lazy(() => import("../views/authentication/Login")));
const ForgotPassword = Loadable(
  lazy(() => import("../views/authentication/ForgotPassword"))
);
const Error = Loadable(lazy(() => import("../views/authentication/Error")));
const AuthInfo = Loadable(
  lazy(() => import("../views/authentication/AuthInfo"))
);
const LoginFailed = Loadable(
  lazy(() => import("../views/authentication/LoginFailed"))
);
const ComingSoonPage = Loadable(
  lazy(() => import("../components/common/components/ComingSoon"))
);

const FirstPage = () => {
  return <AgencyUserRegistration />;
};

const AllRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { index: true, element: <Navigate to={"/dashboard"} /> },
      { path: "/dashboard", exact: true, element: <FirstPage /> },
      { path: "*", element: <Navigate to="/auth/404" /> },
      { path: "/coming-soon", element: <ComingSoonPage /> },
      AppRouter,
    ],
  },

  {
    path: "/",
    element: <BlankLayout />,
    children: [
      { path: "/auth/404", element: <Error /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/forgot-password", element: <ForgotPassword /> },
      { path: "/auth/login-failed", element: <LoginFailed /> },
      { path: "/auth/info", element: <AuthInfo /> },
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default AllRoutes;
