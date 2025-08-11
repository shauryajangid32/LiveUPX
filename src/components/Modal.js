import { useEffect } from 'react';
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-4xl w-full mx-4 relative flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left side with enhanced content */}
        <div 
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/modalbg.avif')" }}
        >
          <div className="h-full flex flex-col justify-center p-8 bg-black bg-opacity-40 text-white">
            <h2 className="text-4xl font-bold mb-6 font-aeion">TRANSFORM YOUR DIGITAL PRESENCE</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="bg-purple-600 p-2 rounded-full mt-1">
                  <IoMdClose className="text-white rotate-45" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">Enterprise-Grade Solutions</h3>
                  <p className="text-gray-300">Scalable architecture designed for growth</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-purple-600 p-2 rounded-full mt-1">
                  <IoMdClose className="text-white rotate-45" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">17+ Countries Served</h3>
                  <p className="text-gray-300">Global expertise with local understanding</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-purple-600 p-2 rounded-full mt-1">
                  <IoMdClose className="text-white rotate-45" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">96% Client Retention</h3>
                  <p className="text-gray-300">Proven track record of success</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-purple-300">
              <p className="text-lg">"We combine technical excellence with strategic insight to deliver solutions that drive business growth."</p>
            </div>
          </div>
        </div>
        
        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close modal"
          >
            <IoMdClose />
          </button>
          
          <div className="mt-2 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 font-aeion">Get a Free Consultation</h2>
            <p className="text-gray-500 mt-2">Complete this form and our team will contact you within 24 hours</p>
          </div>
          
          {children}
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              By submitting this form, you agree to our <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;