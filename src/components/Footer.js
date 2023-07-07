import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex justify-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aboli. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
