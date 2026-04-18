import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LandingPage from "@/pages/LandingPage";
import Dashboard from "@/pages/dashboard/Dashboard";
import Signup from "@/pages/Signup";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Protected from "@/components/Protect";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <AuthLayout />,
        children: [
          { index: true, element: <LandingPage /> },
          { path: "/register", element: <Signup /> },
          { path: "/login", element: <Login /> },
        ],
      },
      {
        element: <AppLayout />,
        children: [
          {
            path: "dashboard",
            element: (
              <Protected>
                <Dashboard />
              </Protected>
            ),
          },
          { path: "me", element: <div className="p-4">Profile Page</div> },
          { path: "about", element: <About /> },
        ],
      },
    ],
  },
]);
