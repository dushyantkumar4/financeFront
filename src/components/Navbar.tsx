import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useMyContext } from "@/hooks/useMyContext";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useMyContext();

  const sidebar = useSidebar();

  const toggleTheme = () => {
    setTheme(!theme);
  };
  const navLinks = [{ name: "About", href: "#" }];

  return (
    <nav className="fixed top-0 z-50 bg-white/10 backdrop-blur-md  rounded-lg">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {sidebar && <SidebarTrigger className="text-green-500" />}

          <img
            src="financeLogo.png"
            className="size-10 rounded-full shadow-lg"
            alt="logo"
          />
          <p className="text-white font-bold text-lg md:text-xl">
            Decent Expense
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-gray-300 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-white">
            {theme ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Button>Sign In</Button>
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
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-black/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center justify-between">
            <span className="text-white">Theme</span>
            <button onClick={toggleTheme}>
              {theme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div>
            <Button>Sign In</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
