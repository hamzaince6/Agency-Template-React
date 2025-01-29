import React from 'react';
import { ArrowUpRight, Facebook, Twitter, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  socials: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 hover:bg-[#202020] transition-colors">
      <div className="space-y-4">
        {/* Name and Position */}
        <div className="text-center">
          <h3 className="text-white text-lg font-medium">{member.name}</h3>
          <p className="text-gray-400 text-sm mt-1">{member.position}</p>
        </div>

        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden rounded-lg bg-[#E97F61]/10">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={member.socials.facebook}
            className="bg-[#151515] hover:bg-[#E97F61] transition-colors duration-300 p-2 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-4 h-4 text-gray-400 hover:text-white" />
          </a>
          <a
            href={member.socials.twitter}
            className="bg-[#151515] hover:bg-[#E97F61] transition-colors duration-300 p-2 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4 text-gray-400 hover:text-white" />
          </a>
          <a
            href={member.socials.linkedin}
            className="bg-[#151515] hover:bg-[#E97F61] transition-colors duration-300 p-2 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4 text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

const AboutTeam = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "JOHN SMITH",
      position: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=375&auto=format",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "SARAH ADAMS",
      position: "Head of Design",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=375&auto=format",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "EMILY JOHNSON",
      position: "Lead Web Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=375&auto=format",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "WILLIAM LEE",
      position: "Lead Backend Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=375&auto=format",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="w-full py-16">
      <div className="container mx-auto">
        <div className="bg-[#151515]/50 rounded-3xl p-8">
          {/* Title Box */}
          <div className="bg-[#151515] rounded-xl p-6 mb-8 flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              MEET THE BRILLIANT MINDS BEHIND NEXGEN
            </h2>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span className="text-sm tracking-wider">ALL MEMBERS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Team Grid */}
          <div className="bg-[#151515] rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
