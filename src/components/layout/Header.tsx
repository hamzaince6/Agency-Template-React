import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getNavLinkClasses = (path: string) => {
    return `${isActive(path) ? 'text-white' : 'text-gray-600 hover:text-white'} uppercase text-lg md:text-xs font-medium transition-colors duration-300`;
  };

  const getNavContainerClasses = (path: string) => {
    return `${isActive(path) ? 'bg-[#222]' : 'bg-[#1a1a1a] hover:bg-[#222]'} rounded-xl px-5 py-3 transition-all duration-300 w-4/5 md:w-auto`;
  };

  return (
    <header className="bg-[#111] py-4 relative z-50">
      <div className="container mx-auto">
        <div className="bg-[#151515] rounded-xl p-4">
          <div className="flex items-center">
            {/* Logo */}
            <div className="bg-[#1a1a1a] rounded-xl px-6 py-3 hover:bg-[#222] transition-all duration-300">
              <a href="/" className="text-white text-2xl font-medium">
                NexGen
              </a>
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="ml-auto md:hidden relative w-8 h-6 focus:outline-none group z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`absolute left-0 top-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`} />
              <span className={`absolute left-0 top-[11px] w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 bottom-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 bottom-2.5' : ''}`} />
            </button>

            {/* Navigation and Contact Button */}
            <div className={`${isMenuOpen ? 'fixed inset-0 bg-[#111] flex' : 'hidden'} md:relative md:flex md:bg-transparent pt-20 md:pt-0 flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-3 ml-auto`}>
              {/* Navigation */}
              <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-3 w-full md:w-auto">
                <div className={getNavContainerClasses('/')}>
                  <a href="/" className={getNavLinkClasses('/')}>
                    HOME
                  </a>
                </div>
                <div className={getNavContainerClasses('/services')}>
                  <a href="/services" className={getNavLinkClasses('/services')}>
                    SERVICES
                  </a>
                </div>
                <div className={getNavContainerClasses('/projects')}>
                  <a href="/projects" className={getNavLinkClasses('/projects')}>
                    PROJECTS
                  </a>
                </div>
                <div className={getNavContainerClasses('/about')}>
                  <a href="/about" className={getNavLinkClasses('/about')}>
                    ABOUT
                  </a>
                </div>
                <div className={getNavContainerClasses('/careers')}>
                  <a href="/careers" className={getNavLinkClasses('/careers')}>
                    CAREERS
                  </a>
                </div>
                <div className={getNavContainerClasses('/blogs')}>
                  <a href="/blogs" className={getNavLinkClasses('/blogs')}>
                    BLOGS
                  </a>
                </div>
                <div className={getNavContainerClasses('/admin')}>
                  <a href="/admin" className={getNavLinkClasses('/admin')}>
                    ADMIN
                  </a>
                </div>
              </nav>

              {/* Contact Button */}
              <div className="bg-[#E97F61] rounded-xl px-6 py-3 hover:bg-[#e8714e] transition-all duration-300 w-4/5 md:w-auto mt-4 md:mt-0">
                <a 
                  href="/contact"
                  className="text-black text-lg md:text-xs font-medium uppercase hover:text-white transition-colors block text-center"
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;