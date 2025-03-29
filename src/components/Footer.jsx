const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: About & Contact */}
        <div>
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="mt-2 text-gray-400">
            Welcome to MyBlog, your go-to source for insightful articles.
          </p>
          <div className="mt-4">
            <p className="text-gray-300">📍 123 Blog Street, New York, USA</p>
            <p className="text-gray-300">📧 contact@myblog.com</p>
            <p className="text-gray-300">📞 +1 (555) 123-4567</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/blogs" className="hover:text-blue-400">Blogs</a></li>
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

   
      </div>
    </footer>
  );
};

export default Footer;
