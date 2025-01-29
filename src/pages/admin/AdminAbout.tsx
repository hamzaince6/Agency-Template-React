import React from 'react';
import { Users, Award, Star, Plus, Pencil, Trash2 } from 'lucide-react';

const AdminAbout = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">About Management</h1>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#151515] rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-[#1a1a1a] rounded-lg">
              <Users className="text-[#E97F61]" size={24} />
            </div>
            <div>
              <h3 className="text-white font-medium">Team Members</h3>
              <p className="text-2xl font-bold text-[#E97F61]">24</p>
            </div>
          </div>
          <button className="w-full bg-[#1a1a1a] text-white py-2 rounded-lg hover:bg-[#222] transition-colors">
            Manage Team
          </button>
        </div>

        <div className="bg-[#151515] rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-[#1a1a1a] rounded-lg">
              <Award className="text-[#E97F61]" size={24} />
            </div>
            <div>
              <h3 className="text-white font-medium">Achievements</h3>
              <p className="text-2xl font-bold text-[#E97F61]">12</p>
            </div>
          </div>
          <button className="w-full bg-[#1a1a1a] text-white py-2 rounded-lg hover:bg-[#222] transition-colors">
            View Achievements
          </button>
        </div>

        <div className="bg-[#151515] rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-[#1a1a1a] rounded-lg">
              <Star className="text-[#E97F61]" size={24} />
            </div>
            <div>
              <h3 className="text-white font-medium">Awards</h3>
              <p className="text-2xl font-bold text-[#E97F61]">8</p>
            </div>
          </div>
          <button className="w-full bg-[#1a1a1a] text-white py-2 rounded-lg hover:bg-[#222] transition-colors">
            View Awards
          </button>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="bg-[#151515] rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Team Members</h2>
          <button className="flex items-center gap-2 bg-[#E97F61] text-white px-4 py-2 rounded-lg hover:bg-[#d16a4d] transition-colors">
            <Plus size={20} />
            <span>Add Member</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'John Smith',
              position: 'CEO & Founder',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format',
            },
            {
              name: 'Sarah Johnson',
              position: 'Lead Designer',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format',
            },
            {
              name: 'Michael Chen',
              position: 'Senior Developer',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format',
            },
          ].map((member, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-white font-medium">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.position}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-[#151515] rounded-lg text-gray-400 hover:text-white transition-colors">
                    <Pencil size={16} />
                  </button>
                  <button className="p-2 bg-[#151515] rounded-lg text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company History */}
      <div className="bg-[#151515] rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Company History</h2>
          <button className="flex items-center gap-2 text-[#E97F61] hover:text-[#d16a4d] transition-colors">
            <Pencil size={20} />
            <span>Edit</span>
          </button>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            Founded in 2010, NexGen has grown from a small web development agency to a full-service digital solutions provider. Our journey has been marked by continuous innovation and a commitment to excellence in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminAbout;