import React from "react";

function Header() {
  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="LiveupX Logo" className="w-[150px] h-[50px]" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex mr-[150px] items-center space-x-10 font-bigshoulders font-medium text-lg text-gray-100 ">
          <a href="#home" className="hover:text-red-400 tracking-widest transition">Home</a>
          <a href="#about" className="hover:text-red-400 tracking-widest transition">Services</a>
          <a href="#services" className="hover:text-red-400 tracking-widest transition">Portfolio</a>
          <a href="#careers" className="hover:text-red-400 tracking-widest transition">Case Studies</a>
          <a href="#careers" className="hover:text-red-400 tracking-widest transition">About</a>
          <a href="#contact" className="hover:text-red-400 tracking-widest transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
