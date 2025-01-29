import React from 'react';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';

const AdminServices = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Services Management</h1>
        <button className="flex items-center gap-2 bg-[#E97F61] text-white px-4 py-2 rounded-lg hover:bg-[#d16a4d] transition-colors">
          <Plus size={20} />
          <span>Add Service</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search services..."
            className="w-full bg-[#151515] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E97F61]"
          />
        </div>
        <select className="bg-[#151515] text-white rounded-lg px-4 py-2">
          <option>All Categories</option>
          <option>Web Development</option>
          <option>Mobile Development</option>
          <option>UI/UX Design</option>
        </select>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Web Development',
            description: 'Custom web development solutions for businesses.',
            price: '$1,500',
            category: 'Development',
            status: 'Active'
          },
          {
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications.',
            price: '$2,500',
            category: 'Development',
            status: 'Active'
          },
          {
            title: 'UI/UX Design',
            description: 'User-centered design solutions for digital products.',
            price: '$800',
            category: 'Design',
            status: 'Active'
          },
          // Add more services as needed
        ].map((service, index) => (
          <div key={index} className="bg-[#151515] rounded-xl p-6 hover:bg-[#1a1a1a] transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-[#1a1a1a] rounded-lg text-gray-400 hover:text-white transition-colors">
                  <Pencil size={16} />
                </button>
                <button className="p-2 bg-[#1a1a1a] rounded-lg text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">{service.description}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Price:</span>
                <span className="text-white font-medium">{service.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Category:</span>
                <span className="text-white">{service.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Status:</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                  {service.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;