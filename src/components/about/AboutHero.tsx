import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

const AboutHero = () => {
  const stats = [
    { label: 'CLIENTS', value: '200+' },
    { label: 'PROJECTS', value: '280+' },
    { label: 'HAPPY CLIENTS', value: '100%' },
    { label: 'FOLLOWER', value: '420K' }
  ];

  return (
    <div className="w-full py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Content - 8 columns */}
          <div className="lg:col-span-8">
            <div className="bg-[#151515] rounded-xl p-8 lg:p-10 h-full">
              <div className="flex flex-col h-full">
                <div>
                  <div className="flex flex-col gap-10">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                      ELEVATING BRANDS
                      <br />
                      IN THE DIGITAL AGE
                    </h1>
                    <div className="flex items-center">
                      <button className="inline-flex items-center gap-2 bg-[#E97F61] rounded-full pl-6 pr-4 py-3">
                        <span className="text-sm font-medium text-white">START A PROJECT</span>
                        <div className="bg-black/20 rounded-full p-1">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 4 columns */}
          <div className="lg:col-span-4">
            <div className="bg-[#151515] rounded-xl p-8 lg:p-10 h-full">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-[#111] rounded-lg p-4">
                    <div className="flex flex-col gap-1 items-center text-center">
                      <span className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</span>
                      <span className="text-[#E97F61] text-2xl font-bold">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <button className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <span className="text-sm uppercase tracking-wider">KNOW MORE</span>
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
