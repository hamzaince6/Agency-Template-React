import React from 'react';
import { Plus, Search, Filter, ArrowUpRight } from 'lucide-react';

const AdminProjects = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Projects Management</h1>
        <button className="flex items-center gap-2 bg-[#E97F61] text-white px-4 py-2 rounded-lg hover:bg-[#d16a4d] transition-colors">
          <Plus size={20} />
          <span>Add Project</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full bg-[#151515] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E97F61]"
          />
        </div>
        <button className="flex items-center gap-2 bg-[#151515] text-white px-4 py-2 rounded-lg">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'E-commerce Platform',
            client: 'TechCorp',
            status: 'In Progress',
            progress: 75,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
            team: [
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format',
            ]
          },
          {
            title: 'Mobile App Development',
            client: 'InnovateLabs',
            status: 'Completed',
            progress: 100,
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000',
            team: [
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format',
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format',
            ]
          },
          {
            title: 'Website Redesign',
            client: 'DigitalFlow',
            status: 'In Review',
            progress: 90,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
            team: [
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format',
            ]
          },
        ].map((project, index) => (
          <div key={index} className="bg-[#151515] rounded-xl overflow-hidden group">
            <div className="relative h-48">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg">
                  View Details
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-500'
                    : project.status === 'In Progress'
                    ? 'bg-blue-500/20 text-blue-500'
                    : 'bg-yellow-500/20 text-yellow-500'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Client: {project.client}</p>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                    <div 
                      className="bg-[#E97F61] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.team.map((member, idx) => (
                      <img 
                        key={idx}
                        src={member}
                        alt="Team member"
                        className="w-8 h-8 rounded-full border-2 border-[#151515]"
                      />
                    ))}
                  </div>
                  <button className="text-[#E97F61] hover:text-[#d16a4d] transition-colors">
                    Manage Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjects;