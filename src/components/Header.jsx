import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          Geeks Blogs
        </a>

        {/* Desktop Menu */}
        <nav className="hidden space-x-6 md:flex">
          <a href="/" className="font-medium text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a
            href="/article"
            onClick={(e) => navigate(e, "/article")}
            className="font-medium text-gray-700 hover:text-blue-500"
          >
            Blogs
          </a>
          <a
            href="/about"
            className="font-medium text-gray-700 hover:text-blue-500"
          >
            About Us
          </a>
        </nav>

        {/* Subscribe Button */}
        <a
          href="/login"
          className="hidden rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 md:block"
        >
          LogIn
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white shadow-md md:hidden">
          <a
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Home
          </a>
          <a
            href="/blogs"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Blogs
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            About Us
          </a>
          <a
            href="/login"
            className="block bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Subscribe
          </a>
        </div>
      )}
    </header>
  );
};


export default Header;
