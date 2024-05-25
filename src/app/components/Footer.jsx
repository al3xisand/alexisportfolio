"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <p className="text-gray-300 mb-1">&copy; {currentYear} All rights reserved.</p>
          <p className="text-gray-300">Email: alexisand2001@gmail.com</p>
        </div>
        <nav className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
        
          <a href="#about" className="text-gray-300 hover:text-white mx-3">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white mx-3">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
