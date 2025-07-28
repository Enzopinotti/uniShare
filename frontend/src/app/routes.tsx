import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import LoginForm from "../features/auth/login/LoginForm";
import SignUpForm from "../features/auth/signup/SignUpForm";
import Layout from "../layouts/Layout";
import Dashboard from "../pages/Dashboard";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "sign-up", element: <SignUpForm /> },
      { path: "login", element: <LoginForm /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
];
