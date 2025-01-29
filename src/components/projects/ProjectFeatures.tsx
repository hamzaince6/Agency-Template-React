import React from 'react';
import { BookOpen, Star, Smile, Clock } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-[#151515] rounded-xl p-6 lg:p-8">
    <div className="space-y-4">
      <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#E97F61]">
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const ProjectFeatures = () => {
  const features = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "STRATEGIC PLANNING",
      description: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives."
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "CUSTOMIZED SOLUTIONS",
      description: "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions."
    },
    {
      icon: <Smile className="w-5 h-5" />,
      title: "USER-CENTRIC APPROACH",
      description: "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "TIMELY DELIVERY",
      description: "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality."
    }
  ];

  return (
    <div className="w-full py-12">
      <div className="container mx-auto">
        <div className="bg-[#151515]/50 rounded-3xl p-4 sm:p-6 md:p-8">
          {/* Title Box */}
          <div className="bg-[#151515] rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              KEY FEATURES OF OUR PROJECTS
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFeatures;
