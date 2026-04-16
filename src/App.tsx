import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/route";
import { Toaster } from "@/components/ui/sonner"

const App = () => {
  return (
    <div className="bg-gray-900">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
