// import React from "react";

// function Header() {
//   return (
//     <header className="bg-transparent absolute top-0 left-0 right-0 z-50 py-4 px-6">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src="/logo.png" alt="LiveupX Logo" className="w-[150px] h-[50px]" />
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex mr-[150px] items-center space-x-10 font-bigshoulders font-medium text-lg text-gray-100 ">
//           <a href="#home" className="hover:text-red-400 tracking-widest transition">Home</a>
//           <a href="#about" className="hover:text-red-400 tracking-widest transition">Services</a>
//           <a href="#services" className="hover:text-red-400 tracking-widest transition">Portfolio</a>
//           <a href="#careers" className="hover:text-red-400 tracking-widest transition">Case Studies</a>
//           <a href="#careers" className="hover:text-red-400 tracking-widest transition">About</a>
//           <a href="#contact" className="hover:text-red-400 tracking-widest transition">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;



import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 right-0 z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="LiveupX Logo" className="md:h-[50px] h-[40px]" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex xl:mr-[150px] items-center space-x-10 font-bigshoulders font-medium xl:text-lg md:text-sm text-gray-100">
            <a href="#home" className="hover:text-red-400 hover:underline tracking-widest transition">Home</a>
            <a href="#services" className="hover:text-red-400 hover:underline tracking-widest transition">Services</a>
            <a href="#portfolio" className="hover:text-red-400 hover:underline tracking-widest transition">Portfolio</a>
            <a href="#case-studies" className="hover:text-red-400 hover:underline tracking-widest transition">Case Studies</a>
            <a href="#about" className="hover:text-red-400 tracking-widest hover:underline transition">About</a>
            <a href="#contact" className="hover:text-red-400 tracking-widest hover:underline transition">Contact</a>
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
        className={`md:hidden fixed top-[64px] left-0 w-full backdrop-blur-md bg-white/10
 z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-start py-6 px-6 space-y-6 text-lg text-gray-100 font-bigshoulders font-medium">
          <a href="#home" onClick={toggleMenu} className="hover:text-red-400 tracking-widest transition">Home</a>
          <a href="#services" onClick={toggleMenu} className="hover:text-red-400 tracking-widest transition">Services</a>
          <a href="#portfolio" onClick={toggleMenu} className="hover:text-red-400 tracking-widest transition">Portfolio</a>
          <a href="#case-studies" onClick={toggleMenu} className="hover:text-red-400 tracking-widest transition">Case Studies</a>
          <a href="#about" onClick={toggleMenu} className="hover:text-red-400 tracking-widest transition">About</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-red-400 tracking-widest transition">Contact</a>
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
