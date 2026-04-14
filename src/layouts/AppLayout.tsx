import {Outlet} from "react-router-dom";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar/>
        <div className="flex flex-col">
            <Navbar/>
            <main className="flex-1 overflow-y-auto">
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default AppLayout