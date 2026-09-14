import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import useThemeStore from "../../store/themStore.js";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const { theme, toggleTheme } = useThemeStore();

  // تطبيق الثيم على html
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const linkClass = (link) =>
    `relative py-1 font-bold transition-colors duration-300
    ${
      activeLink === link
        ? "text-orange-500 after:w-full"
        : "text-gray-700 dark:text-gray-300 after:w-0 hover:text-orange-500 hover:after:w-full"
    }
    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300`;

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center bg-white px-10 py-5 shadow-md transition-colors duration-300 dark:bg-gray-900">
      {/* Logo */}
      <div className="text-3xl font-bold text-gray-900 dark:text-white">
        <a href="#home">
          Ahmad<span className="text-orange-500">Azmy</span>
        </a>
      </div>

      <div className="ml-auto flex items-center gap-8">
        {/* Links */}
        <div className="flex items-center gap-8">
          <a
            href="#home"
            onClick={() => setActiveLink("home")}
            className={linkClass("home")}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setActiveLink("about")}
            className={linkClass("about")}
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setActiveLink("skills")}
            className={linkClass("skills")}
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setActiveLink("projects")}
            className={linkClass("projects")}
          >
            Projects
          </a>

          <a
            href="#experience"
            onClick={() => setActiveLink("experience")}
            className={linkClass("experience")}
          >
            Experience
          </a>

          <a
            href="#education"
            onClick={() => setActiveLink("education")}
            className={linkClass("education")}
          >
            Education
          </a>

          <a
            href="#contact"
            onClick={() => setActiveLink("contact")}
            className={linkClass("contact")}
          >
            Contact
          </a>
        </div>

        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-orange-50 hover:text-orange-500 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-orange-400"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
