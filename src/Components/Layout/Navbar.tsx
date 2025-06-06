import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCustomTheme } from "../../providers/ThemeProvider";
import { useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useCustomTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-background/80">
      <div className="container mx-auto flex h-[80px] max-w-[1024px] items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold text-black dark:text-white">
            Space Design
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            className="h-9 w-9 rounded-full bg-gray-100 p-0 transition-colors hover:bg-gray-200 dark:bg-default-100 dark:hover:bg-default-200"
            onClick={toggleTheme}
          >
            <Icon
              icon={theme === "dark" ? "solar:sun-linear" : "solar:moon-linear"}
              className="text-gray-600 dark:text-default-500"
              width={20}
            />
          </Button>

          {/* Mobile Menu Button */}
          <Button
            className="h-9 w-9 rounded-full bg-gray-100 p-0 md:hidden dark:bg-default-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon
              icon={isMenuOpen ? "heroicons:x-mark" : "heroicons:bars-3"}
              className="text-gray-600 dark:text-default-500"
              width={20}
            />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-[80px] border-b border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-background md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
