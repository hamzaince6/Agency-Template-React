import React from 'react';
import { ArrowUpRight, Star, MapPin } from 'lucide-react';

interface WorkCardProps {
  title: string;
  category: string;
  timeTaken: string;
  description: string;
  image: string;
  technologies: string[];
  teamMembers: Array<{
    image: string;
    name: string;
  }>;
}

const WorkCard = ({ 
  title, 
  category, 
  timeTaken, 
  description, 
  image,
  technologies,
  teamMembers 
}: WorkCardProps) => {
  return (
    <div className="bg-[#151515] rounded-xl p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Content */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="bg-[#1a1a1a] p-2 rounded-lg">
              {title === "ZENITH FITNESS APP" ? (
                <Star className="text-[#E97F61]" size={18} />
              ) : (
                <MapPin className="text-[#E97F61]" size={18} />
              )}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
          </div>

          <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
            <div>
              <span className="text-gray-500 text-xs md:text-sm">Category • </span>
              <span className="text-gray-300 text-xs md:text-sm">{category}</span>
            </div>
            <div>
              <span className="text-gray-500 text-xs md:text-sm">Time Taken • </span>
              <span className="text-gray-300 text-xs md:text-sm">{timeTaken}</span>
            </div>
          </div>

          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Center Image */}
        <div className="lg:col-span-4 order-first lg:order-none mb-6 lg:mb-0">
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-4">
          <div className="mb-6 md:mb-8">
            <h4 className="text-white text-xs md:text-sm mb-3 md:mb-4">TECHNOLOGIES USED</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-[#1a1a1a] text-gray-400 text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-lg hover:bg-[#E97F61]/10 hover:text-[#E97F61] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6 md:mb-8">
            <h4 className="text-white text-xs md:text-sm mb-3 md:mb-4">TEAM MEMBERS</h4>
            <div className="flex -space-x-2 md:-space-x-3">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-[#151515] hover:z-10 transition-all"
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 rounded text-[10px] md:text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-[#E97F61] text-white text-sm py-2.5 md:py-3 rounded-lg hover:bg-[#d16a4d] transition-colors">
            BOOK A CALL
          </button>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const works = [
    {
      title: "ZENITH FITNESS APP",
      category: "Mobile App Development",
      timeTaken: "6 months",
      description: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
      image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
      teamMembers: [
        {
          name: "John Smith",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format"
        },
        {
          name: "Sarah Johnson",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format"
        },
        {
          name: "Michael Chen",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format"
        },
        {
          name: "Emily Davis",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format"
        },
        {
          name: "David Wilson",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format"
        }
      ]
    },
    {
      title: "A-AURA ECOMMERCE",
      category: "Web Design & Development",
      timeTaken: "3 months",
      description: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
      technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
      teamMembers: [
        {
          name: "Alex Turner",
          image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&auto=format"
        },
        {
          name: "Lisa Wang",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&auto=format"
        },
        {
          name: "James Wilson",
          image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&auto=format"
        },
        {
          name: "Emma Thompson",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&auto=format"
        },
        {
          name: "Daniel Lee",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format"
        }
      ]
    }
  ];

  return (
    <div className="bg-[#111] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="bg-[#151515] rounded-xl md:rounded-3xl p-6 md:p-8 mb-4 md:mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">OUR WORKS</h2>
          <button className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <span className="text-xs md:text-sm tracking-wider border-b border-transparent group-hover:border-white pb-0.5">ALL WORKS</span>
            <ArrowUpRight size={14} className="md:w-4 md:h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
        
        <div className="space-y-4 md:space-y-6">
          {works.map((work, index) => (
            <WorkCard
              key={index}
              {...work}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;