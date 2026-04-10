import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <div className="p-2 flex justify-between bg-white/10 backdrop-blur-md fixed items-center z-50 top-0">
      <div className="flex items-center gap-5">
        <img src="financeLogo.png" className="size-10 shadow-lg rounded-full" alt="" />
        <p className="text-white font-bold text-xl">Decent Expense</p>
      </div>

      <Button
        className="bg-green-500
        hover:bg-green-600
        text-white
        px-4
        py-2
        rounded-lg"
      >
        Log In
      </Button>
    </div>
  );
};

export default Navbar;
