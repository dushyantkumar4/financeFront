import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const AuthLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <div className="w-full">
        <Outlet /> {/* Login or Signup render here */}
      </div>
    </div>
  );
};

export default AuthLayout;
