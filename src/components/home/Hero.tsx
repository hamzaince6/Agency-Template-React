import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import MarqueeServices from './MarqueeServices';

const Hero = () => {
  return (
    <div className="pt-6 pb-4 sm:pt-8 sm:pb-6 md:pt-12 md:pb-8 lg:pt-16 lg:pb-12">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="col-span-1 lg:col-span-8 bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col min-h-[400px] sm:min-h-[500px] lg:h-[600px]">
            <div className="flex-1 space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Title and Button */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                <h1 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-bold leading-[1.2] tracking-wide text-white">
                  DIGITAL SOLUTIONS
                  <br className="hidden sm:block" />
                  THAT DRIVE SUCCESS
                </h1>
                <button className="flex items-center gap-2 bg-transparent group self-start">
                  <span className="text-[#E97F61] font-medium text-sm sm:text-base whitespace-nowrap">START A PROJECT</span>
                  <div className="bg-[#E97F61] rounded-full p-1.5 sm:p-2 group-hover:translate-x-1 transition-transform">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
                At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.
              </p>
            </div>

            {/* Marquee */}
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <MarqueeServices />
            </div>
          </div>

          {/* Right Content - Only visible on desktop */}
          <div className="hidden lg:flex col-span-4 bg-[#151515] rounded-2xl flex-col h-[600px]">
            <div className="flex-1 flex flex-col">
              {/* Image Container */}
              <div className="flex-1 pb-0">
                <div className="relative h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                    alt="Digital Solutions" 
                    className="w-full h-full object-cover rounded-t-xl transition-transform duration-500"
                  />
                  <div className="absolute top-8 right-8 bg-[#E97F61] rounded-full p-3 shadow-lg">
                    <ArrowUpRight className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
              
              {/* Project Info - Aligned with Marquee */}
              <div className="bg-[#1a1a1a] rounded-b-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium mb-1">ESTATEIN REAL ESTATE</h3>
                    <p className="text-gray-600 text-sm">Web Development</p>
                  </div>
                  <button className="bg-[#222] p-2 rounded-xl hover:bg-[#2a2a2a] transition-all hover:scale-110 duration-300">
                    <ArrowUpRight className="w-5 h-5 text-[#E97F61]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;