import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import LoginForm from "../features/auth/login/LoginForm";
import SignUpForm from "../features/auth/signup/SignUpForm";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUpForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
];
