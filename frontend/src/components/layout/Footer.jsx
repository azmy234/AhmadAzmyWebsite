const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-6 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-gray-900 transition hover:text-orange-500 dark:text-white"
        >
          Ahmad<span className="text-orange-500">Azmy</span>
        </a>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2026 Ahmed Azmy. All rights reserved.
        </p>

        {/* Back to Top */}
        <a
          href="#home"
          className="text-sm font-medium text-gray-600 transition hover:text-orange-500 dark:text-gray-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
