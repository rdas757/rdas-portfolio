
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-navy-100 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} Rahul Das. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
