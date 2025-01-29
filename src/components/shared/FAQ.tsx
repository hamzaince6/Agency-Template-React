import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="bg-[#151515] rounded-xl p-6 md:p-8 lg:p-10 cursor-pointer" onClick={onToggle}>
      <div className="flex items-start md:items-center justify-between gap-4">
        <h3 className="text-white text-sm md:text-base font-medium pr-4">{question}</h3>
        <button className="text-gray-400 shrink-0">
          {isOpen ? <Minus size={18} className="md:w-5 md:h-5" /> : <Plus size={18} className="md:w-5 md:h-5" />}
        </button>
      </div>
      {isOpen && (
        <p className="text-gray-400 text-xs md:text-sm mt-3 md:mt-4 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does it take to complete a web development project?",
      answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },
    {
      question: "Can you handle large-scale mobile app development projects?",
      answer: "Yes, we have extensive experience in developing complex mobile applications for various industries. Our team is equipped to handle projects of any scale."
    },
    {
      question: "Can you integrate third-party APIs into our mobile app?",
      answer: "Absolutely! We have expertise in integrating various third-party APIs and services into mobile applications to enhance functionality and user experience."
    },
    {
      question: "How do you ensure cross-platform compatibility for mobile apps?",
      answer: "We use modern frameworks and best practices to ensure our mobile apps work seamlessly across different platforms and devices."
    },
    {
      question: "What is your approach to user experience (UX) design?",
      answer: "We follow a user-centered design approach, conducting thorough research and testing to create intuitive and engaging user experiences."
    }
  ];

  return (
    <div className="bg-[#111] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="bg-[#151515] rounded-xl md:rounded-3xl p-6 md:p-8 mb-4 md:mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">FREQUENTLY ASKED QUESTIONS</h2>
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <span className="text-xs md:text-sm tracking-wider">VIEW ALL</span>
            <ArrowUpRight size={14} className="md:w-4 md:h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* FAQ List */}
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>

          {/* Question Form */}
          <div className="bg-[#151515] rounded-xl p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-6 md:mb-8">ASK YOUR QUESTION</h3>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-white text-xs md:text-sm mb-2">NAME</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-[#1a1a1a] border-none rounded-lg p-3 md:p-4 text-sm md:text-base text-white placeholder-gray-500 focus:ring-2 focus:ring-[#E97F61]"
                />
              </div>
              <div>
                <label className="block text-white text-xs md:text-sm mb-2">EMAIL</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#1a1a1a] border-none rounded-lg p-3 md:p-4 text-sm md:text-base text-white placeholder-gray-500 focus:ring-2 focus:ring-[#E97F61]"
                />
              </div>
              <div>
                <label className="block text-white text-xs md:text-sm mb-2">YOUR QUESTION</label>
                <textarea
                  placeholder="Enter Your Question Here ....."
                  rows={6}
                  className="w-full bg-[#1a1a1a] border-none rounded-lg p-3 md:p-4 text-sm md:text-base text-white placeholder-gray-500 focus:ring-2 focus:ring-[#E97F61] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E97F61] text-white text-sm md:text-base py-3 md:py-4 rounded-lg hover:bg-[#d16a4d] transition-colors font-medium"
              >
                SEND YOUR MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;