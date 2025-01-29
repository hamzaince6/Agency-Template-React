import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import MarqueeServices from '../home/MarqueeServices';

const ServicesHero = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto">
        {/* Outer Container Box */}
        <div className="bg-[#151515]/50 rounded-2xl p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Box - 8 columns */}
            <div className="lg:col-span-8">
              <div className="bg-[#151515] rounded-xl p-6 lg:p-8 h-full">
                <div className="flex flex-col justify-between h-full">
                  <div className="space-y-6">
                    <div className="flex flex-col gap-6">
                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                        OUR COMPREHENSIVE
                        <br />
                        DIGITAL SOLUTIONS
                      </h1>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 bg-[#E97F61] rounded-full pl-6 pr-4 py-3 text-white">
                          <span className="text-sm font-medium">START A PROJECT</span>
                          <div className="bg-black/20 rounded-full p-1">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm max-w-2xl">
                      At NextGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation
                    </p>
                  </div>

                  {/* Marquee at bottom */}
                  <div className="mt-8">
                    <MarqueeServices />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box - 4 columns */}
            <div className="lg:col-span-4">
              <div className="bg-[#151515] rounded-xl p-6 lg:p-8 h-full">
                <div className="aspect-[3/4] w-full rounded-lg overflow-hidden relative">
                  <img 
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/artificial-intelligence-brain-5349862-4498507.png" 
                    alt="Digital Solutions"
                    className="w-full h-full object-contain p-4"
                  />
                  {/* Overlay Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-4">
                    <button className="bg-white/10 backdrop-blur-sm rounded-full py-2 text-white text-sm flex items-center gap-2">
                      VIEW BLOG
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button className="bg-[#E97F61] rounded-full py-2 text-white text-sm flex items-center gap-2">
                      WEB DEVELOPMENT
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
