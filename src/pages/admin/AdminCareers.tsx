import React from 'react';
import { Plus, Search, Briefcase, Users, Clock } from 'lucide-react';

const AdminCareers = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Careers Management</h1>
        <button className="flex items-center gap-2 bg-[#E97F61] text-white px-4 py-2 rounded-lg hover:bg-[#d16a4d] transition-colors">
          <Plus size={20} />
          <span>Post New Position</span>
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#151515] rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#1a1a1a] rounded-lg">
              <Briefcase className="text-[#E97F61]" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Open Positions</p>
              <h3 className="text-2xl font-bold text-white">12</h3>
            </div>
          </div>
        </div>

        <div className="bg-[#151515] rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#1a1a1a] rounded-lg">
              <Users className="text-[#E97F61]" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Applications</p>
              <h3 className="text-2xl font-bold text-white">156</h3>
            </div>
          </div>
        </div>

        <div className="bg-[#151515] rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#1a1a1a] rounded-lg">
              <Clock className="text-[#E97F61]" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Interviews Scheduled</p>
              <h3 className="text-2xl font-bold text-white">28</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search positions..."
          className="w-full bg-[#151515] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E97F61]"
        />
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {[
          {
            title: 'Senior Web Developer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            applications: 45,
            status: 'Active'
          },
          {
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'New York',
            type: 'Full-time',
            applications: 32,
            status: 'Active'
          },
          {
            title: 'Marketing Manager',
            department: 'Marketing',
            location: 'London',
            type: 'Full-time',
            applications: 28,
            status: 'Closed'
          },
        ].map((job, index) => (
          <div key={index} className="bg-[#151515] rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#1a1a1a] rounded-full text-gray-400 text-sm">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-[#1a1a1a] rounded-full text-gray-400 text-sm">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-[#1a1a1a] rounded-full text-gray-400 text-sm">
                    {job.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Applications</p>
                  <p className="text-white font-bold">{job.applications}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Status</p>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    job.status === 'Active' 
                      ? 'bg-green-500/20 text-green-500'
                      : 'bg-red-500/20 text-red-500'
                  }`}>
                    {job.status}
                  </span>
                </div>
                <button className="bg-[#1a1a1a] text-white px-4 py-2 rounded-lg hover:bg-[#222] transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCareers;