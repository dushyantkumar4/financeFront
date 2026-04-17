import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/route";
import { Toaster } from "@/components/ui/sonner"
import { useMyContext } from "./hooks/useMyContext";

const App = () => {
  const {theme} = useMyContext()
  return (
    <div className={theme?"text-white":"bg-gray-900"}>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
