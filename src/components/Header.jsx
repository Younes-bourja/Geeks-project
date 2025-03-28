import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800">
          MyBlog 🚀
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-500 font-medium">Home</a>
          <a href="/blogs" className="text-gray-700 hover:text-blue-500 font-medium">Blogs</a>
          <a href="/about" className="text-gray-700 hover:text-blue-500 font-medium">About Us</a>
        </nav>

        {/* Subscribe Button */}
        <a href="/subscribe" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Subscribe
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <a href="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Home</a>
          <a href="/blogs" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Blogs</a>
          <a href="/about" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">About Us</a>
          <a href="/subscribe" className="block py-2 px-4 bg-blue-600 text-white hover:bg-blue-700">Subscribe</a>
        </div>
      )}
    </header>
  );
};


export default Header;
