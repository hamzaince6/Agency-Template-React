import React from 'react';
import { Plus, Search, Filter, Eye, MessageSquare, ThumbsUp } from 'lucide-react';

const AdminBlogs = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Blog Management</h1>
        <button className="flex items-center gap-2 bg-[#E97F61] text-white px-4 py-2 rounded-lg hover:bg-[#d16a4d] transition-colors">
          <Plus size={20} />
          <span>Create Post</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full bg-[#151515] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E97F61]"
          />
        </div>
        <select className="bg-[#151515] text-white rounded-lg px-4 py-2">
          <option>All Categories</option>
          <option>Design</option>
          <option>Development</option>
          <option>Business</option>
        </select>
        <button className="flex items-center gap-2 bg-[#151515] text-white px-4 py-2 rounded-lg">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'The Future of Web Development',
            category: 'Development',
            author: 'John Smith',
            date: '2024-02-15',
            status: 'Published',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
            views: 1234,
            comments: 23,
            likes: 89
          },
          {
            title: 'UI Design Trends 2024',
            category: 'Design',
            author: 'Sarah Johnson',
            date: '2024-02-14',
            status: 'Draft',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000',
            views: 856,
            comments: 15,
            likes: 67
          },
          {
            title: 'Digital Marketing Strategies',
            category: 'Business',
            author: 'Michael Chen',
            date: '2024-02-13',
            status: 'Published',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
            views: 2345,
            comments: 45,
            likes: 156
          },
        ].map((post, index) => (
          <div key={index} className="bg-[#151515] rounded-xl overflow-hidden">
            <div className="relative h-48">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs ${
                post.status === 'Published' 
                  ? 'bg-green-500/20 text-green-500'
                  : 'bg-yellow-500/20 text-yellow-500'
              }`}>
                {post.status}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-[#1a1a1a] rounded-full text-xs text-gray-400">
                  {post.category}
                </span>
                <span className="text-gray-400 text-xs">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4">By {post.author}</p>
              
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare size={16} />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp size={16} />
                    <span>{post.likes}</span>
                  </div>
                </div>
                <button className="text-[#E97F61] hover:text-[#d16a4d] transition-colors">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogs;