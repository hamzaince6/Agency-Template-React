import React from 'react';
import { ArrowUpRight, Palette, Smartphone, Code2, LayoutGrid } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

interface ProjectCardProps {
  image: string;
}

const ProjectCard = ({ image }: ProjectCardProps) => (
  <div className="group relative">
    <img 
      src={image}
      alt="Project"
      className="w-full h-[160px] md:h-[180px] lg:h-[200px] object-cover rounded-lg"
    />
    <button className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-white text-[10px] md:text-xs font-medium flex items-center gap-1 md:gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      OPEN PROJECT
      <ArrowUpRight size={10} className="md:w-3 md:h-3" />
    </button>
  </div>
);

const ServiceCard = ({ icon, title, description, price }: ServiceCardProps) => {
  return (
    <div className="bg-[#151515] rounded-xl p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-4">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="bg-[#1a1a1a] p-2 md:p-3 rounded-lg">
            {icon}
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#1a1a1a] px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-gray-400 hover:text-white transition-colors w-full md:w-auto">
          <span className="text-xs md:text-sm tracking-wider">BOOK A CALL</span>
          <ArrowUpRight size={14} className="md:w-4 md:h-4" />
        </button>
      </div>
      
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 h-auto md:h-[60px]">
        {description}
      </p>
      
      <div className="text-white text-lg md:text-xl font-semibold">
        STARTS FROM {price}
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Palette className="text-[#E97F61] w-6 h-6" />,
      title: "WEB DESIGN",
      description: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression.",
      price: "$1,500"
    },
    {
      icon: <Smartphone className="text-[#E97F61] w-6 h-6" />,
      title: "MOBILE APP DEVELOPMENT",
      description: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications.",
      price: "$2,500"
    },
    {
      icon: <Code2 className="text-[#E97F61] w-6 h-6" />,
      title: "WEB DEVELOPMENT",
      description: "Our Web Development service is focused on turning your website into a powerful digital asset using the latest technologies.",
      price: "$1,800"
    },
    {
      icon: <LayoutGrid className="text-[#E97F61] w-6 h-6" />,
      title: "DIGITAL MARKETING",
      description: "In the digital age, marketing is critical. Our Digital Marketing service employs data-driven strategies to enhance your brand.",
      price: "$1,200"
    }
  ];

  const projects = {
    webDesign: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
    ],
    mobileApp: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
    ],
    webDev: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
    ],
    marketing: [
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    ]
  };

  return (
    <div className="bg-[#111] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        {/* Outer Box */}
        <div className="bg-[#151515]/50 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8">
          {/* Title Box */}
          <div className="bg-[#151515] rounded-xl p-6 lg:p-8 mb-4 md:mb-6 lg:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">OUR SERVICES</h2>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;