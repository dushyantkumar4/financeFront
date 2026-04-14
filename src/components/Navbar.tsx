import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="px-2 py-1 flex justify-between bg-white/10 backdrop-blur-md fixed items-center z-50 top-0 rounded-lg w-full">
      <div className="flex items-center gap-5">
        <img
          src="financeLogo.png"
          className="size-10 shadow-lg rounded-full"
          alt=""
        />
        <p className="text-white font-bold text-xl">Decent Expense</p>
      </div>

      <div className="flex items-center gap-5">
        <Button>Sign in</Button>
      </div>
    </div>
  );
};

export default Navbar;
