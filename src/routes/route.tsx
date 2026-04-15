import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LandingPage from "@/pages/LandingPage";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import About from "@/pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <AuthLayout />,
        children: [
          { index: true, element: <LandingPage /> },
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
      {
        element: <AppLayout />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "me", element: <div className="p-4">Profile Page</div> },
          { path: "about", element: <About /> },
        ],
      },
    ],
  },
]);
