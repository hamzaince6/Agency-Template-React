import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Stats = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      <div className="bg-[#1a1a1a] p-4 lg:p-6 rounded-lg text-center">
        <h3 className="text-3xl lg:text-4xl font-bold text-[#E97F61]">200+</h3>
        <p className="text-xs lg:text-sm text-gray-600 mt-2 tracking-wider">CLIENTS</p>
      </div>
      <div className="bg-[#1a1a1a] p-4 lg:p-6 rounded-lg text-center">
        <h3 className="text-3xl lg:text-4xl font-bold text-[#E97F61]">280+</h3>
        <p className="text-xs lg:text-sm text-gray-600 mt-2 tracking-wider">PROJECTS</p>
      </div>
      <div className="bg-[#1a1a1a] p-4 lg:p-6 rounded-lg text-center">
        <h3 className="text-3xl lg:text-4xl font-bold text-[#E97F61]">100%</h3>
        <p className="text-xs lg:text-sm text-gray-600 mt-2 tracking-wider">HAPPY CLIENTS</p>
      </div>
      <div className="bg-[#1a1a1a] p-4 lg:p-6 rounded-lg text-center">
        <h3 className="text-3xl lg:text-4xl font-bold text-[#E97F61]">420K</h3>
        <p className="text-xs lg:text-sm text-gray-600 mt-2 tracking-wider">FOLLOWER</p>
      </div>
      <div className="col-span-2 sm:col-span-1 bg-[#1a1a1a] p-4 lg:p-6 rounded-lg text-center">
        <h3 className="text-3xl lg:text-4xl font-bold text-[#E97F61]">10+</h3>
        <p className="text-xs lg:text-sm text-gray-600 mt-2 tracking-wider">Years Of Experience</p>
      </div>
      <div className="col-span-2 sm:col-span-1 bg-[#1a1a1a] p-4 lg:p-6 rounded-lg flex items-center justify-center">
        <button className="flex items-center gap-2 text-[#E97F61] hover:text-[#d16a4d] tracking-wider text-sm lg:text-base">
          KNOW MORE
          <ArrowUpRight size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default Stats;