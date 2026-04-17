import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useMyContext } from "@/hooks/useMyContext";
import { SidebarTrigger } from "./ui/sidebar";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarBadge } from "@/components/ui/avatar";

type NavbarProps = {
  showSidebarTrigger?: boolean;
};

const Navbar = ({ showSidebarTrigger = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme, user } = useMyContext();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(!theme);
  };
  const navLinks = [{ name: "About", href: "#" }];

  return (
    <nav className={` sticky top-0 z-50 bg-white/10 backdrop-blur-md  rounded-lg shadow-sm`}>
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {showSidebarTrigger && <SidebarTrigger className="text-green-500" />}
          <div
            className="flex items-center gap-3"
            onClick={() => navigate("/")}
          >
            <img
              src="financeLogo.png"
              className="size-10 rounded-full shadow-lg"
              alt="logo"
            />
            <p className={`${theme?"text-green-600":"text-white"} font-bold text-lg md:text-xl`}>
              Decent Expense
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-green-400 hover:text-green-500 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-green-500">
            {theme ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {user ? (
            <Avatar>
              <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
              <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
          ) : (
            <Button onClick={() => navigate("/auth")}>Sign In</Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-gray-800  backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mt-1  text-green-400 hover:text-green-500 transition"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center justify-between text-green-400 hover:text-green-500 transition">
            <span className="">Theme</span>
            <button onClick={toggleTheme}>
              {theme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div>
            <Button onClick={() => navigate("/auth")}>Sign In</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
