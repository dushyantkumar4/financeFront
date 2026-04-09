import React from "react";
import "./App.css";
import { Button } from "@/components/ui/button";

const App: React.FC = () => {
  return (
    <div className="bg-black w-full h-screen">
      App
      <Button
        variant="outline"
        className="border-green-500 rounded-md border-2 hover:bg-green-600 bg-gray-700 text-white"
      >
        Click
      </Button>
    </div>
  );
};

export default App;
