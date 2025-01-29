import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-[#151515] rounded-3xl p-8 h-full flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col flex-1 space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-white mb-2">FIRST NAME</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E97F61]"
              placeholder="Enter First Name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-white mb-2">LAST NAME</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E97F61]"
              placeholder="Enter Last Name"
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-white mb-2">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E97F61]"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-white mb-2">PHONE NUMBER</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <img src="/india-flag.png" alt="India Flag" className="w-6 h-4" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] text-white rounded-xl pl-14 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E97F61]"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-white mb-2">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-[#1a1a1a] text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E97F61] resize-none"
            placeholder="Enter your Message"
          />
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleCheckboxChange}
            className="w-4 h-4 rounded border-gray-300 text-[#E97F61] focus:ring-[#E97F61]"
          />
          <label htmlFor="agreeToTerms" className="text-gray-400 text-sm">
            I agree with Terms of Use and Privacy Policy
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#E97F61] text-white px-6 py-3 rounded-lg hover:bg-[#d66d51] transition-colors"
        >
          <span>SEND YOUR MESSAGE</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
