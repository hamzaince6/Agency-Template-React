import React from 'react';
import { Trophy } from 'lucide-react';

interface Award {
  date: string;
  title: string;
  description: string;
}

const AboutAwards = () => {
  const awards: Award[] = [
    {
      date: "October 2017",
      title: "DIGITAL EXCELLENCE AWARD",
      description: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
    },
    {
      date: "March 2019",
      title: "TOP MOBILE APP DEVELOPMENT AGENCY",
      description: "Recognized as a top mobile app development agency by industry experts, highlighting our proficiency in delivering seamless and user-centric mobile applications."
    },
    {
      date: "July 2022",
      title: "BEST DIGITAL MARKETING CAMPAIGN",
      description: "Awarded for an exceptional digital marketing campaign with outstanding results, showcasing our data-driven strategies and targeted marketing efforts that achieved remarkable business growth for our clients."
    },
    {
      date: "November 2024",
      title: "INNOVATIVE TECH STARTUP AWARD",
      description: "Recognition of our pioneering efforts as a technology startup, acknowledging our commitment to exploring and implementing cutting-edge technologies to drive innovation in the digital space."
    }
  ];

  return (
    <div className="w-full py-16">
      <div className="container mx-auto">
        <div className="bg-[#151515]/50 rounded-3xl p-8">
          {/* Title Box */}
          <div className="bg-[#151515] rounded-xl p-6 mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              AWARDS & RECOGNITIONS
            </h2>
          </div>

          {/* Awards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-[#1a1a1a] rounded-xl p-6 group">
                  <div className="space-y-4">
                    {/* Date and Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        Date • {award.date}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#E97F61]/10 flex items-center justify-center group-hover:bg-[#E97F61] transition-colors">
                        <Trophy className="w-4 h-4 text-[#E97F61] group-hover:text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-white text-lg font-semibold group-hover:text-[#E97F61] transition-colors min-h-[56px]">
                      {award.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAwards;
