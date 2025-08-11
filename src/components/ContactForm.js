import { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Check if all fields have a value
  const isFormValid = formData.name.trim() !== '' &&
                      formData.email.trim() !== '' &&
                      formData.message.trim() !== '';

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          name="name"
          placeholder="Your name"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100 focus:bg-white"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <input 
          type="email" 
          name="email"
          placeholder="Your email address"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100 focus:bg-white"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <textarea 
          name="message"
          placeholder="Your message here..."
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100 focus:bg-white"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      
      <button 
        type="submit"
        className={`py-2 px-4 rounded-md w-full transition duration-300 ${
          isFormValid
            ? 'bg-[#714cc9] text-white hover:bg-[#5f34a8]'
            : 'bg-gray-400 text-gray-600 cursor-not-allowed'
        }`}
        disabled={!isFormValid}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;