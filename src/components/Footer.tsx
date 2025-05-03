
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 text-gray-400 py-8 border-t border-dark-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          &copy; {currentYear} <span className="text-neon-cyan">Rahul Das</span>. All rights reserved.
        </p>
        <p className="text-xs">
          Built with modern technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
