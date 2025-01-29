import React, { useState } from 'react';
import { ArrowUpRight, Store, Heart } from 'lucide-react';

interface StoryProps {
  id: number;
  icon: React.ReactNode;
  name: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  results: string;
}

type TabType = 'CHALLENGE' | 'SOLUTION' | 'RESULTS';

const SuccessStories = () => {
  const [activeTabStates, setActiveTabStates] = useState<{ [key: number]: TabType }>({
    1: 'SOLUTION',
    2: 'SOLUTION'
  });
  
  const stories: StoryProps[] = [
    {
      id: 1,
      icon: <Store className="text-[#E97F61] w-5 h-5 sm:w-6 sm:h-6" />,
      name: 'KLOTHINK',
      industry: 'E-commerce',
      service: 'Design & Development',
      challenge: 'The client needed a modern e-commerce platform that would provide an exceptional shopping experience while maintaining high performance and security standards.',
      solution: 'Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout. Additionally, we integrated an efficient checkout process and optimized the site for search engines.',
      results: 'After launch, the client saw a 150% increase in online sales and a 40% reduction in cart abandonment rate. The mobile-responsive design led to a 200% increase in mobile conversions.'
    },
    {
      id: 2,
      icon: <Heart className="text-[#E97F61] w-5 h-5 sm:w-6 sm:h-6" />,
      name: 'FITNESS TRACKER APP',
      industry: 'Health & Fitness',
      service: 'Mobile App Development',
      challenge: 'The client wanted to create a comprehensive fitness tracking application that would stand out in a competitive market.',
      solution: 'Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media platforms. Real-time data synchronization enabled users to access their data on multiple devices.',
      results: 'The app achieved over 100,000 downloads in the first month, with a 4.8/5 rating on app stores. User engagement metrics showed 80% of users actively using the app daily.'
    }
  ];

  const getTabContent = (story: StoryProps) => {
    const activeTab = activeTabStates[story.id];
    switch (activeTab) {
      case 'CHALLENGE':
        return story.challenge;
      case 'SOLUTION':
        return story.solution;
      case 'RESULTS':
        return story.results;
      default:
        return story.solution;
    }
  };

  const handleTabChange = (storyId: number, tab: TabType) => {
    setActiveTabStates(prev => ({
      ...prev,
      [storyId]: tab
    }));
  };

  return (
    <div className="bg-[#151515]/50 rounded-3xl p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8">
      {/* Başlık Kutusu */}
      <div className="bg-[#151515] rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">SUCCESS STORIES</h2>
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <span className="text-xs sm:text-sm tracking-wider">VIEW ALL</span>
          <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Stories */}
      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {stories.map((story) => (
          <div key={story.id} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Sol Taraf - Bilgiler */}
            <div className="bg-[#151515] rounded-xl p-4 sm:p-6 md:p-8 hover:bg-[#1a1a1a] transition-colors duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className="bg-black/50 p-2 sm:p-3 md:p-4 rounded-xl shadow-lg">
                  {story.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{story.name}</h3>
              </div>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400 bg-black/50 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-2">
                  <span>Industry •</span>
                  <span className="text-white">{story.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Service Utilized •</span>
                  <span className="text-white">{story.service}</span>
                </div>
              </div>

              <button className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-6">
                <span className="text-xs sm:text-sm tracking-wider border-b border-transparent group-hover:border-white pb-0.5 transition-all">VISIT WEBSITE</span>
                <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Sağ Taraf - Tabs */}
            <div className="bg-[#151515] rounded-xl hover:bg-[#1a1a1a] transition-colors duration-300">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {['CHALLENGE', 'SOLUTION', 'RESULTS'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(story.id, tab as TabType)}
                      className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                        activeTabStates[story.id] === tab 
                          ? 'bg-[#E97F61] text-black shadow-lg shadow-[#E97F61]/20 scale-105' 
                          : 'bg-black/50 text-gray-400 hover:text-white hover:bg-black/70'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="bg-black/50 rounded-xl p-4 sm:p-6 md:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">{activeTabStates[story.id]}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {getTabContent(story)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
