import React from 'react';
import Marquee from 'react-fast-marquee';
import { ArrowUpRight } from 'lucide-react';

const Banner = () => {
  return (
    <section className="bg-[#111111] py-20">
      <div className="container mx-auto">
        {/* Banner */}
        <div className="bg-[#E97F61] rounded-xl md:rounded-3xl p-6 md:p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            <div className="w-full md:max-w-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4">
                READY TO TRANSFORM YOUR DIGITAL PRESENCE?
              </h2>
              <p className="text-black/80 text-sm md:text-base lg:text-lg">
                Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.
              </p>
            </div>
            <button className="w-full md:w-auto bg-black text-white md:px-6 py-3 rounded-full flex items-center justify-center md:justify-start gap-2 hover:bg-black/80 transition-colors text-sm md:text-base">
              GET IN TOUCH
              <ArrowUpRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Marquee */}
        <div className="bg-[#151515] rounded-xl md:rounded-3xl p-4 md:p-6 mt-4 md:mt-6 lg:mt-8">
          <Marquee
            gradient={false}
            speed={50}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-8 md:gap-12">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4">
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#E97F61]" />
                  <span className="text-white text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#E97F61]" />
                  <span className="text-white text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#E97F61]" />
                  <span className="text-white text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#E97F61]" />
                  <span className="text-white text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#E97F61]" />
                  <span className="text-white text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap">FOLLOW US ON SOCIAL MEDIA</span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Banner;