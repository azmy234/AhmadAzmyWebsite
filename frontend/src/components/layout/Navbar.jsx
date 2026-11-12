import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import useThemeStore from "../../store/themStore.js";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const linkClass = (link) =>
    `relative py-1 font-bold transition-colors duration-300
    ${
      activeLink === link
        ? "text-orange-500 after:w-full"
        : "text-gray-700 dark:text-gray-300 after:w-0 hover:text-orange-500 hover:after:w-full"
    }
    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300`;

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md transition-colors duration-300 dark:bg-gray-900">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-10 lg:py-5">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          <a href="#home" onClick={() => handleLinkClick("home")}>
            Ahmad<span className="text-orange-500">Azmy</span>
            <span className="text-gray-500 text-lg dark:text-gray-300">
              .site
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={linkClass(link.id)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-orange-50 hover:text-orange-500 dark:text-gray-200 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-orange-50 hover:text-orange-500 dark:text-gray-200 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={21} /> : <Sun size={21} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-800 transition hover:bg-orange-50 dark:text-white dark:hover:bg-gray-800"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 dark:border-gray-800 dark:bg-gray-900 lg:hidden ${
          isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`border-b border-gray-100 py-3 font-semibold transition-colors duration-200 dark:border-gray-800 ${
                activeLink === link.id
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500 dark:text-gray-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
