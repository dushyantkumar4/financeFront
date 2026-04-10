import {Outlet} from "react-router-dom";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar/>
        <div className="flex flex-col flex-1">
            <Navbar/>
            <main className="flex-1 overflow-y-auto p-4">
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default AppLayout