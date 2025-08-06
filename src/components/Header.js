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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 right-0 z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="LiveupX Logo" className=" md:h-[50px] h-[30px]" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex mr-[150px] items-center space-x-10 font-bigshoulders font-medium text-lg text-gray-100">
            <a href="#home" className="hover:text-red-400 tracking-widest transition">Home</a>
            <a href="#services" className="hover:text-red-400 tracking-widest transition">Services</a>
            <a href="#portfolio" className="hover:text-red-400 tracking-widest transition">Portfolio</a>
            <a href="#case-studies" className="hover:text-red-400 tracking-widest transition">Case Studies</a>
            <a href="#about" className="hover:text-red-400 tracking-widest transition">About</a>
            <a href="#contact" className="hover:text-red-400 tracking-widest transition">Contact</a>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleSidebar} className="text-gray-100 focus:outline-none">
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Component */}
      <div
        className={`fixed top-16 left-0 w-64 h-full bg-gray-900 bg-opacity-95 transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start pt-8 px-6 space-y-6 text-lg text-gray-100 font-bigshoulders font-medium">
          <a href="#home" onClick={toggleSidebar} className="hover:text-red-400 tracking-widest transition">Home</a>
          <a href="#services" onClick={toggleSidebar} className="hover:text-red-400 tracking-widest transition">Services</a>
          <a href="#portfolio" onClick={toggleSidebar} className="hover:text-red-400 tracking-widest transition">Portfolio</a>
          <a href="#case-studies" onClick={toggleSidebar} className="hover:text-red-400 tracking-widest transition">Case Studies</a>
          <a href="#about" onClick={toggleSidebar} className="hover:text-red-400 tracking-widest transition">About</a>
          <a href="#contact" onClick={toggleSidebar} className="hover:text-red-400 tracking-widest transition">Contact</a>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Header;