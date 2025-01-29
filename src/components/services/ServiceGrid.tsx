import React from 'react';
import { ArrowUpRight, Palette, Smartphone, Code2, LayoutGrid } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  projects: string[];
}

const ServiceCard = ({ icon, title, description, price }: ServiceCardProps) => {
  return (
    <div className="bg-[#151515] rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:bg-[#1a1a1a]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="bg-[#1a1a1a] p-2 sm:p-3 rounded-lg">
            {icon}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1a1a1a] px-3 sm:px-4 py-2 rounded-lg text-gray-400 hover:text-white transition-colors">
          <span className="text-xs sm:text-sm tracking-wider">BOOK A CALL</span>
          <ArrowUpRight size={14} sm:size={16} />
        </button>
      </div>
      
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 h-[48px] sm:h-[60px]">
        {description}
      </p>
      
      <div className="text-white text-lg sm:text-xl font-semibold">
        STARTS FROM {price}
      </div>
    </div>
  );
};

const ProjectCard = ({ image }: { image: string }) => (
  <div className="group relative">
    <img 
      src={image}
      alt="Project"
      className="w-full h-[200px] object-cover rounded-lg"
    />
    <button className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-xs font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      OPEN PROJECT
      <ArrowUpRight size={12} />
    </button>
  </div>
);

const ServiceGrid = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <Palette className="text-[#E97F61] w-5 h-5 sm:w-6 sm:h-6" />,
      title: "WEB DESIGN",
      description: "We create stunning and functional websites that capture your brand's essence and engage your audience effectively.",
      price: "$999",
      projects: [
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
      ]
    },
    {
      icon: <Code2 className="text-[#E97F61] w-5 h-5 sm:w-6 sm:h-6" />,
      title: "DEVELOPMENT",
      description: "Our development team builds robust and scalable web applications using the latest technologies and best practices.",
      price: "$1999",
      projects: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
      ]
    },
    {
      icon: <Smartphone className="text-[#E97F61] w-5 h-5 sm:w-6 sm:h-6" />,
      title: "MOBILE APPS",
      description: "We develop intuitive mobile applications that provide seamless user experiences across all platforms.",
      price: "$2999",
      projects: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
      ]
    },
    {
      icon: <LayoutGrid className="text-[#E97F61] w-5 h-5 sm:w-6 sm:h-6" />,
      title: "UI/UX DESIGN",
      description: "Our design team creates beautiful and user-friendly interfaces that enhance user engagement and satisfaction.",
      price: "$799",
      projects: [
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {services.map((service, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Service Card */}
          <ServiceCard {...service} />

          {/* Projects Card */}
          <div className="bg-[#151515] rounded-xl p-8 h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">{service.title} PROJECTS</h3>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <span className="text-sm tracking-wider">VIEW ALL</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.projects.map((image, idx) => (
                <ProjectCard key={idx} image={image} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
