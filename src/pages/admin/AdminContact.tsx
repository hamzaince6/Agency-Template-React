import React from 'react';
import { Search, Mail, Phone, MapPin, Filter } from 'lucide-react';

const AdminContact = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Contact Management</h1>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#151515] rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#1a1a1a] rounded-lg">
              <Mail className="text-[#E97F61]" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Messages</p>
              <h3 className="text-2xl font-bold text-white">156</h3>
            </div>
          </div>
        </div>

        <div className="bg-[#151515] rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#1a1a1a] rounded-lg">
              <Phone className="text-[#E97F61]" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Call Requests</p>
              <h3 className="text-2xl font-bold text-white">28</h3>
            </div>
          </div>
        </div>

        <div className="bg-[#151515] rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#1a1a1a] rounded-lg">
              <MapPin className="text-[#E97F61]" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Office Locations</p>
              <h3 className="text-2xl font-bold text-white">3</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full bg-[#151515] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E97F61]"
          />
        </div>
        <select className="bg-[#151515] text-white rounded-lg px-4 py-2">
          <option>All Status</option>
          <option>New</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
        <button className="flex items-center gap-2 bg-[#151515] text-white px-4 py-2 rounded-lg">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {[
          {
            name: 'John Smith',
            email: 'john@example.com',
            subject: 'Project Inquiry',
            message: 'I would like to discuss a potential web development project for my company...',
            date: '2024-02-15',
            status: 'New'
          },
          {
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            subject: 'Mobile App Development',
            message: 'We are looking for a team to develop our mobile application...',
            date: '2024-02-14',
            status: 'In Progress'
          },
          {
            name: 'Michael Chen',
            email: 'michael@example.com',
            subject: 'Design Consultation',
            message: 'I would like to schedule a consultation for our website redesign project...',
            date: '2024-02-13',
            status: 'Resolved'
          },
        ].map((message, index) => (
          <div key={index} className="bg-[#151515] rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white">{message.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    message.status === 'New' 
                      ? 'bg-blue-500/20 text-blue-500'
                      : message.status === 'In Progress'
                      ? 'bg-yellow-500/20 text-yellow-500'
                      : 'bg-green-500/20 text-green-500'
                  }`}>
                    {message.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{message.email}</p>
                <p className="text-white font-medium mb-2">{message.subject}</p>
                <p className="text-gray-400 text-sm">{message.message}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-gray-400 text-sm">
                  {new Date(message.date).toLocaleDateString()}
                </span>
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

export default AdminContact;