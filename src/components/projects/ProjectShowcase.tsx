import React, { useState } from 'react';
import { ArrowUpRight, Star, Globe } from 'lucide-react';

interface Project {
  id: number;
  icon: React.ReactNode;
  title: string;
  category: string;
  timeTaken: string;
  description: string;
  image: string;
  technologies: string[];
  teamMembers: string[];
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-[#151515] rounded-xl p-6">
    <div className="grid grid-cols-12 gap-6">
      {/* Left Content */}
      <div className="col-span-4">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#E97F61]">
              {project.icon}
            </div>
            <h3 className="text-white text-xl font-semibold">{project.title}</h3>
            <button className="ml-auto">
              <ArrowUpRight className="w-5 h-5 text-[#E97F61]" />
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Category •</span>
              <span>{project.category}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Time Taken •</span>
              <span>{project.timeTaken}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            {project.description}
          </p>
        </div>
      </div>

      {/* Center Image */}
      <div className="col-span-4">
        <div className="rounded-xl overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="col-span-4">
        <div className="space-y-6">
          <div>
            <h4 className="text-white text-sm font-medium mb-3">TECHNOLOGIES USED</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-[#1a1a1a] text-gray-400 text-xs px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-3">TEAM MEMBERS</h4>
            <div className="flex -space-x-2">
              {project.teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#151515]"
                >
                  <img src={member} alt="Team Member" className="w-full h-full rounded-full" />
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-[#E97F61] text-white text-sm font-medium py-3 rounded-xl hover:bg-[#d17057] transition-colors">
            BOOK A CALL
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState('WEB DEVELOPMENT');

  const projects: Project[] = [
    {
      id: 1,
      icon: <Star className="w-5 h-5" />,
      title: "ZENITH FITNESS APP",
      category: "Mobile App Development",
      timeTaken: "6 months",
      description: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
      image: "https://cdn.dribbble.com/userupload/10699086/file/original-a4e4c1461f1f8628fb63cc1fad477d1a.png?resize=1024x768",
      technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
      teamMembers: [
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/3.jpg",
        "https://randomuser.me/api/portraits/women/4.jpg"
      ]
    },
    {
      id: 2,
      icon: <Globe className="w-5 h-5" />,
      title: "A-AURA ECOMMERCE",
      category: "Web Design & Development",
      timeTaken: "3 months",
      description: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
      image: "https://cdn.dribbble.com/userupload/10699087/file/original-cd6ae3facd00f7420331c56744ffd669.png?resize=1024x768",
      technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
      teamMembers: [
        "https://randomuser.me/api/portraits/women/5.jpg",
        "https://randomuser.me/api/portraits/men/6.jpg",
        "https://randomuser.me/api/portraits/women/7.jpg",
        "https://randomuser.me/api/portraits/men/8.jpg"
      ]
    },
    {
      id: 3,
      icon: <Star className="w-5 h-5" />,
      title: "DIGITAL MARKETING HUB",
      category: "Marketing Platform",
      timeTaken: "4 months",
      description: "A comprehensive digital marketing platform that integrates social media management, analytics, and campaign automation.",
      image: "https://cdn.dribbble.com/userupload/10699088/file/original-cd6ae3facd00f7420331c56744ffd669.png?resize=1024x768",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "GraphQL"],
      teamMembers: [
        "https://randomuser.me/api/portraits/men/9.jpg",
        "https://randomuser.me/api/portraits/women/10.jpg",
        "https://randomuser.me/api/portraits/men/11.jpg",
        "https://randomuser.me/api/portraits/women/12.jpg"
      ]
    }
  ];

  const tabs = ["WEB DESIGN", "WEB DEVELOPMENT", "MARKETING"];

  const filteredProjects = projects.filter(project => {
    if (activeTab === "WEB DEVELOPMENT") return project.category.includes("Development");
    if (activeTab === "WEB DESIGN") return project.category.includes("Design");
    return project.category.includes("Marketing");
  });

  return (
    <div className="w-full py-12">
      <div className="container mx-auto">
        <div className="bg-[#151515]/50 rounded-3xl p-4 sm:p-6 md:p-8">
          {/* Title Box */}
          <div className="bg-[#151515] rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              PROJECTS SHOWCASE
            </h2>
            
            {/* Tabs */}
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-[#E97F61] text-white'
                      : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
