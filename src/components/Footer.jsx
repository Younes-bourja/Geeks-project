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

        {/* Column 3: Google Map */}
        <div>
          <h2 className="text-xl font-bold">Find Us</h2>
          <div className="mt-4">
            <iframe 
              className="w-full h-40 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95592531542214!3d-37.81720974202142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f32d3b5f%3A0x3c7b1e4532b1c6!2sMelbourne!5e0!3m2!1sen!2sau!4v1613966395217!5m2!1sen!2sau" 
              allowFullScreen 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} MyBlog. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
