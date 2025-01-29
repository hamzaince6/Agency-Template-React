import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeServices = () => {
  const services = [
    'WEB DEVELOPMENT',
    'MOBILE APPS',
    'UI/UX DESIGN',
    'DIGITAL MARKETING',
    'CLOUD SOLUTIONS',
    'AI INTEGRATION',
    'CYBER SECURITY',
    'DATA ANALYTICS'
  ];

  return (
    <div className="bg-[#151515] rounded-xl p-2">
      <div className="bg-[#151515] rounded-lg p-3">
        <Marquee
          gradient={false}
          speed={50}
          className="overflow-hidden"
        >
          <div className="flex items-center gap-12">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                {services.map((service, serviceIndex) => (
                  <React.Fragment key={serviceIndex}>
                    <div className="w-2 h-2 rounded-full bg-[#E97F61]" />
                    <span className="text-white text-xl font-semibold whitespace-nowrap">{service}</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeServices;