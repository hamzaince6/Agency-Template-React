import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectsHero = () => {
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
                        EMPOWERING YOUR
                        <br />
                        DIGITAL VISION
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
                      At NextGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box - 4 columns */}
            <div className="lg:col-span-4">
              <div className="bg-[#151515] rounded-xl p-6 lg:p-8 h-full">
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden relative">
                  <img 
                    src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Digital Vision"
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

export default ProjectsHero;
