import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 right-0 z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="LiveupX Logo" 
              className="md:h-[50px] h-[40px] cursor-pointer"
              onClick={() => scrollToSection('home')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex xl:mr-[150px] items-center space-x-10 font-bigshoulders font-medium xl:text-lg md:text-sm text-gray-100">
            <button onClick={() => scrollToSection('home')} className="hover:text-red-400 hover:underline tracking-widest transition">Home</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-red-400 hover:underline tracking-widest transition">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-red-400 hover:underline tracking-widest transition">Portfolio</button>
            <button onClick={() => scrollToSection('case-studies')} className="hover:text-red-400 hover:underline tracking-widest transition">Case Studies</button>
            <button onClick={() => scrollToSection('about-company')} className="hover:text-red-400 tracking-widest hover:underline transition">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-red-400 tracking-widest hover:underline transition">Contact</button>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-100 focus:outline-none">
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full backdrop-blur-md bg-white/10 z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-start py-6 px-6 space-y-6 text-lg text-gray-100 font-bigshoulders font-medium">
          <button onClick={() => scrollToSection('home')} className="hover:text-red-400 tracking-widest transition">Home</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-red-400 tracking-widest transition">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-red-400 tracking-widest transition">Portfolio</button>
          <button onClick={() => scrollToSection('case-studies')} className="hover:text-red-400 tracking-widest transition">Case Studies</button>
          <button onClick={() => scrollToSection('about-company')} className="hover:text-red-400 tracking-widest transition">About</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-red-400 tracking-widest transition">Contact</button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}

export default Header;