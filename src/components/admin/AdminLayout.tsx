import React, { useState } from 'react';
import { Outlet, NavLink, useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  FileText, 
  Briefcase, 
  Phone, 
  Newspaper,
  Menu,
  X,
  LogOut,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    {
      section: 'Main',
      items: [
        { path: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/projects', icon: Briefcase, label: 'Projects' },
      ]
    },
    {
      section: 'Content',
      items: [
        { path: '/admin/services', icon: Settings, label: 'Services' },
        { path: '/admin/about', icon: Users, label: 'About' },
        { path: '/admin/blogs', icon: Newspaper, label: 'Blogs' },
      ]
    },
    {
      section: 'Management',
      items: [
        { path: '/admin/careers', icon: FileText, label: 'Careers' },
        { path: '/admin/contact', icon: Phone, label: 'Contact' },
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#111] flex">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-[#151515] transition-all duration-300 fixed h-full z-50 border-r border-gray-800`}
      >
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#E97F61] to-[#ff9f7f] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <h1 className={`text-white font-bold transition-opacity duration-300 ${!isSidebarOpen ? 'opacity-0 w-0' : 'opacity-100'}`}>
              NexGen
            </h1>
          </div>
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-lg bg-[#1a1a1a] text-white hover:bg-[#222] hover:text-[#E97F61] transition-all duration-200"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="mt-8 px-3">
          {menuItems.map((section, index) => (
            <div key={section.section} className={`mb-6 ${index !== 0 ? 'pt-6 border-t border-gray-800' : ''}`}>
              <h2 className={`text-xs font-semibold text-gray-500 mb-4 px-3 transition-opacity duration-300 ${!isSidebarOpen ? 'opacity-0' : 'opacity-100'}`}>
                {section.section}
              </h2>
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    group flex items-center gap-3 px-3 py-2 rounded-lg mb-1
                    ${isActive 
                      ? 'bg-gradient-to-r from-[#E97F61] to-[#ff9f7f] text-white' 
                      : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'
                    }
                    transition-all duration-200
                  `}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className={`transition-transform duration-200 ${isActive(item.path) ? 'transform scale-110' : 'group-hover:scale-110'}`} />
                    <span className={`transition-all duration-300 ${!isSidebarOpen ? 'opacity-0 w-0' : 'opacity-100'}`}>
                      {item.label}
                    </span>
                  </div>
                  {isActive(item.path) && isSidebarOpen && (
                    <ChevronRight size={16} className="ml-auto" />
                  )}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 space-y-2">
          <Link
            to="/"
            className={`
              flex items-center gap-3 px-3 py-2 rounded-lg w-full
              text-gray-400 hover:text-white hover:bg-[#1a1a1a]
              transition-all duration-200 group
              ${!isSidebarOpen ? 'justify-center' : ''}
            `}
          >
            <ExternalLink size={20} className="transition-transform duration-200 group-hover:scale-110" />
            <span className={`transition-all duration-300 ${!isSidebarOpen ? 'opacity-0 w-0' : 'opacity-100'}`}>
              Siteye Dön
            </span>
          </Link>
          
          <button 
            className={`
              flex items-center gap-3 px-3 py-2 rounded-lg w-full
              text-gray-400 hover:text-white hover:bg-[#1a1a1a]
              transition-all duration-200 group
              ${!isSidebarOpen ? 'justify-center' : ''}
            `}
          >
            <LogOut size={20} className="transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12" />
            <span className={`transition-all duration-300 ${!isSidebarOpen ? 'opacity-0 w-0' : 'opacity-100'}`}>
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 p-8`}>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;