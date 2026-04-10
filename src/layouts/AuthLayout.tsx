import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Navbar/>
      <div className="w-full max-w-md">
        <Outlet /> {/* Login or Signup render here */}
      </div>
    </div>
  );
};

export default AuthLayout;
