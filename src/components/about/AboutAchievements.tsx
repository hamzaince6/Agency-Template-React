import React from 'react';

interface Achievement {
  date: string;
  title: string;
  description: string;
}

const AboutAchievements = () => {
  const achievements: Achievement[] = [
    {
      date: "September 2023",
      title: "GLOBAL RECOGNITION FOR INNOVATION",
      description: "In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape."
    },
    {
      date: "March 2019",
      title: "INDUSTRY LEADERSHIP ACKNOWLEDGED",
      description: "Recognized as an industry leader in 2019, our agency received prestigious awards, affirming our commitment to excellence and client satisfaction."
    },
    {
      date: "August 2015",
      title: "EXPANSION INTO INTERNATIONAL MARKETS",
      description: "Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale."
    },
    {
      date: "January 2010",
      title: "PIONEERING THE DIGITAL FRONTIER",
      description: "In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation."
    }
  ];

  return (
    <div className="w-full py-16">
      <div className="container mx-auto">
        {/* Title Box */}
        <div className="bg-[#151515] rounded-xl p-6 mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            OUR ACHIEVEMENTS
          </h2>
        </div>

        {/* Achievements Grid Container */}
        <div className="bg-[#151515] rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-xl p-6 hover:bg-[#202020] transition-colors group">
                <div className="space-y-4">
                  {/* Date */}
                  <span className="text-gray-400 text-sm">{achievement.date}</span>
                  
                  {/* Title */}
                  <h3 className="text-white text-xl font-semibold group-hover:text-[#E97F61] transition-colors">
                    {achievement.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
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

export default AboutAchievements;
