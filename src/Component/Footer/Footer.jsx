import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white text-[16px] py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} TechnoCom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
