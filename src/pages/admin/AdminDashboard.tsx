import React from 'react';
import { 
  Users, 
  Briefcase, 
  FileText, 
  MessageSquare,
  TrendingUp,
  Eye,
  Star,
  Clock,
  ArrowUpRight,
  Bell,
  Calendar,
  BarChart2
} from 'lucide-react';

const GlassCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#151515]/80 backdrop-blur-lg rounded-xl p-6 hover:bg-[#1a1a1a]/80 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const AdminDashboard = () => {
  const stats = [
    { icon: Users, label: 'Total Clients', value: '2,543', trend: '+12.5%', color: 'from-blue-500/20 to-purple-500/20' },
    { icon: Briefcase, label: 'Active Projects', value: '85', trend: '+5.2%', color: 'from-green-500/20 to-emerald-500/20' },
    { icon: FileText, label: 'Job Applications', value: '342', trend: '+8.1%', color: 'from-orange-500/20 to-red-500/20' },
    { icon: MessageSquare, label: 'Contact Requests', value: '156', trend: '-2.3%', color: 'from-pink-500/20 to-rose-500/20' },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Admin!</h1>
          <p className="text-gray-400">Here's what's happening with your projects today.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 bg-[#151515] rounded-lg text-gray-400 hover:text-white transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#E97F61] rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 bg-[#E97F61] text-white px-4 py-2 rounded-lg hover:bg-[#d16a4d] transition-colors">
            <Calendar size={18} />
            <span>Schedule</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <GlassCard key={index} className="relative overflow-hidden group">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`}></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-[#1a1a1a] rounded-lg">
                  <stat.icon className="text-[#E97F61]" size={24} />
                </div>
                <span className={`text-sm ${
                  stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>{stat.trend}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <GlassCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Activity Overview</h2>
            <select className="bg-[#1a1a1a] text-white rounded-lg px-4 py-2 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="h-[300px] flex items-center justify-center">
            <BarChart2 size={200} className="text-gray-600" />
            <span className="text-gray-400 ml-4">Chart Placeholder</span>
          </div>
        </GlassCard>

        {/* Recent Activity */}
        <GlassCard>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Activity</h2>
            <button className="text-[#E97F61] hover:text-[#d16a4d] transition-colors">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[
              { icon: Eye, title: 'New website visit', time: '2 min ago' },
              { icon: Star, title: 'New review received', time: '15 min ago' },
              { icon: Users, title: 'New team member', time: '1 hour ago' },
              { icon: MessageSquare, title: 'New message', time: '3 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                <div className="p-2 bg-[#1a1a1a] rounded-lg">
                  <activity.icon className="text-[#E97F61]" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.title}</p>
                  <span className="text-gray-400 text-xs">{activity.time}</span>
                </div>
                <ArrowUpRight size={18} className="text-gray-400" />
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Recent Projects */}
        <GlassCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Projects</h2>
            <button className="text-[#E97F61] hover:text-[#d16a4d] transition-colors">
              View All Projects
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm">
                  <th className="pb-4">Project Name</th>
                  <th className="pb-4">Client</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Progress</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {[
                  { name: 'E-commerce Platform', client: 'TechCorp', status: 'In Progress', progress: 75 },
                  { name: 'Mobile App', client: 'InnovateLabs', status: 'Completed', progress: 100 },
                  { name: 'Website Redesign', client: 'DigitalFlow', status: 'In Review', progress: 90 },
                ].map((project, index) => (
                  <tr key={index} className="border-t border-[#1a1a1a] group">
                    <td className="py-4 group-hover:text-[#E97F61] transition-colors">{project.name}</td>
                    <td className="py-4">{project.client}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-500'
                          : project.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-500'
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#E97F61] to-[#d16a4d] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Quick Stats */}
        <GlassCard>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Quick Stats</h2>
            <button className="text-[#E97F61] hover:text-[#d16a4d] transition-colors">
              Refresh
            </button>
          </div>
          <div className="space-y-6">
            {[
              { label: 'Active Users', value: '1.2k', trend: '+12%' },
              { label: 'Total Revenue', value: '$45.2k', trend: '+8%' },
              { label: 'Conversion Rate', value: '2.4%', trend: '+3%' },
            ].map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-white font-bold">{stat.value}</p>
                </div>
                <span className="text-green-500 text-sm">{stat.trend}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default AdminDashboard;