import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ReasonCard = ({ 
  title, 
  description, 
}: { 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-6 lg:p-8 flex flex-col h-full">
      <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 tracking-wide text-white">{title}</h3>
      <p className="text-gray-500 text-xs lg:text-sm mb-6 lg:mb-8 leading-relaxed">{description}</p>
      <div className="mt-auto">
        <button className="flex items-center gap-2 text-[#E97F61] hover:text-[#d16a4d] text-xs lg:text-sm tracking-wider group">
          Learn More
          <ArrowUpRight 
            size={18} 
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </div>
  );
};

const Reasons = () => {
  const reasons = [
    {
      title: 'EXPERTISE IN CUTTING-EDGE TECHNOLOGIES',
      description: 'NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.',
    },
    {
      title: 'PROVEN TRACK RECORD OF SUCCESS',
      description: 'NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.',
    },
    {
      title: 'CLIENT-CENTRIC APPROACH',
      description: 'At NexGen, we prioritize understanding our clients\' unique requirements, fostering transparent communication throughout the development process.',
    },
    {
      title: 'DEDICATED TEAM OF PROFESSIONALS',
      description: 'Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.',
    },
  ];

  return (
    <div className="mt-20 lg:mt-32 mb-12 lg:mb-20 space-y-6">
      {/* Title container */}
      <div className="bg-[#151515] rounded-3xl">
        <div className="bg-[#1a1a1a] rounded-3xl p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-wide text-white">
            REASONS TO CHOOSE NEXGEN FOR YOUR DIGITAL JOURNEY
          </h2>
        </div>
      </div>
      
      {/* Cards container */}
      <div className="bg-[#151515] rounded-3xl p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reasons;