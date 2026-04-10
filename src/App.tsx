import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/route";

const App = () => {
  return (
    <div className="bg-black">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
