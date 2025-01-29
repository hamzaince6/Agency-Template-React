import React from 'react';
import { Palette, Smartphone, LayoutGrid, Briefcase, ArrowUpRight } from 'lucide-react';

interface Position {
  icon: React.ReactNode;
  title: string;
  salary: string;
  experience: string;
  deadline: string;
  skills: string;
}

const JobCard = ({ position }: { position: Position }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 group">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#E97F61]/10 flex items-center justify-center">
              {position.icon}
            </div>
            <h3 className="text-white text-xl font-semibold group-hover:text-[#E97F61] transition-colors">
              {position.title}
            </h3>
          </div>
          <button className="flex items-center gap-2 bg-[#151515] rounded-full px-4 py-2 text-gray-400 hover:text-white transition-colors">
            <span className="text-xs tracking-wider">VIEW DETAILS</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Details */}
        <div className="flex flex-wrap gap-4">
          <div className="bg-[#151515] rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Salary •</span>
              <span className="text-white text-sm">{position.salary}</span>
            </div>
          </div>
          <div className="bg-[#151515] rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Experience •</span>
              <span className="text-white text-sm">{position.experience}</span>
            </div>
          </div>
          <div className="bg-[#151515] rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Deadline •</span>
              <span className="text-white text-sm">{position.deadline}</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <h4 className="text-white text-sm font-medium">SKILLS</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {position.skills}
          </p>
        </div>

        {/* Apply Button */}
        <button className="w-full bg-[#E97F61] text-white rounded-full py-3 text-sm font-medium hover:bg-[#E97F61]/90 transition-colors">
          APPLY NOW
        </button>
      </div>
    </div>
  );
};

const CareerPositions = () => {
  const positions: Position[] = [
    {
      icon: <Palette className="w-5 h-5 text-[#E97F61]" />,
      title: "WEB DESIGNER",
      salary: "$45,000 - $60,000 per year",
      experience: "1+ year",
      deadline: "30/09/2025",
      skills: "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[#E97F61]" />,
      title: "MOBILE APP DEVELOPER",
      salary: "$55,000 - $75,000 per year",
      experience: "2+ years",
      deadline: "15/10/2025",
      skills: "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging."
    },
    {
      icon: <LayoutGrid className="w-5 h-5 text-[#E97F61]" />,
      title: "DIGITAL MARKETING SPECIALIST",
      salary: "$50,000 - $65,000 per year",
      experience: "3+ years",
      deadline: "20/11/2025",
      skills: "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#E97F61]" />,
      title: "PROJECT MANAGER",
      salary: "$60,000 - $80,000 per year",
      experience: "5+ years",
      deadline: "05/12/2025",
      skills: "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies."
    }
  ];

  return (
    <div className="w-full py-16">
      <div className="container mx-auto">
        <div className="bg-[#151515]/50 rounded-3xl p-8">
          {/* Title Box */}
          <div className="bg-[#151515] rounded-xl p-6 mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              JOIN OUR TEAM AT NEXGEN
            </h2>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <JobCard key={index} position={position} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPositions;
