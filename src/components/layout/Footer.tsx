import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Dribbble, Bean as Behance } from 'lucide-react';

// Desktop SocialBox component
const SocialBox = ({ 
  icon: Icon, 
  title, 
  description,
  href 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  href: string;
}) => (
  <div className="bg-[#151515] rounded-xl p-8 flex flex-col h-full group cursor-pointer hover:bg-[#1a1a1a] transition-all duration-300">
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
        <Icon className="text-[#E97F61]" size={20} />
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={20} />
      </a>
    </div>
    <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

// Mobil SocialBox component
const MobileSocialBox = ({ 
  icon: Icon, 
  href 
}: { 
  icon: React.ElementType;
  href: string;
}) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-[#151515] rounded-xl p-4 flex items-center justify-center hover:bg-[#1a1a1a] transition-all duration-300"
  >
    <Icon className="text-[#E97F61]" size={20} />
  </a>
);

// Mobil Footer Component
const MobileFooter = () => {
  return (
    <div className="md:hidden space-y-6">
      {/* Sosyal medya ikonları */}
      <div className="grid grid-cols-4 gap-2">
        <MobileSocialBox icon={Instagram} href="https://instagram.com" />
        <MobileSocialBox icon={Twitter} href="https://twitter.com" />
        <MobileSocialBox icon={Dribbble} href="https://dribbble.com" />
        <MobileSocialBox icon={Behance} href="https://behance.net" />
      </div>

      {/* Menü Bölümleri - İlk Sıra */}
      <div className="grid grid-cols-2 gap-4">
        {/* Home */}
        <div className="bg-[#151515] rounded-xl p-6">
          <h4 className="text-white text-base font-medium mb-4">Home</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Why Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Testimonials</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">FAQ's</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="bg-[#151515] rounded-xl p-6">
          <h4 className="text-white text-base font-medium mb-4">Services</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Web Development</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">App Development</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Web Design</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Digital Marketing</a></li>
          </ul>
        </div>
      </div>

      {/* Menü Bölümleri - İkinci Sıra */}
      <div className="grid grid-cols-2 gap-4">
        {/* Projects */}
        <div className="bg-[#151515] rounded-xl p-6">
          <h4 className="text-white text-base font-medium mb-4">Projects</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Klothink</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Zenith</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Novus</a></li>
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Apex</a></li>
          </ul>
        </div>

        {/* Blogs */}
        <div className="bg-[#151515] rounded-xl p-6">
          <h4 className="text-white text-base font-medium mb-4">Blogs</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Business</a></li>
            <li className="flex items-center gap-1">
              <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Design</a>
              <span className="bg-[#1a1a1a] text-[#E97F61] text-[10px] px-2 py-0.5 rounded">Soon</span>
            </li>
            <li className="flex items-center gap-1">
              <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Development</a>
              <span className="bg-[#1a1a1a] text-[#E97F61] text-[10px] px-2 py-0.5 rounded">Soon</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#151515] rounded-xl p-6">
        <span className="text-gray-600 text-xs uppercase tracking-wider">Newsletter</span>
        <h3 className="text-white text-xl font-medium mt-2 mb-4">SUBSCRIBE TO OUR NEWSLETTER</h3>
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent text-white text-sm outline-none border-b border-gray-800 pb-2 focus:border-[#E97F61] transition-colors"
          />
          <button className="p-2">
            <ArrowUpRight className="text-[#E97F61]" size={20} />
          </button>
        </div>
      </div>

      {/* Copyright ve Links */}
      <div className="bg-[#151515] rounded-xl p-6">
        <div className="space-y-4">
          <p className="text-gray-600 text-sm text-center"> 2024 NextGen. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Ana Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#111] py-8 md:py-20">
      <div className="container mx-auto">
        {/* Mobil Footer */}
        <MobileFooter />

        {/* Desktop Footer */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sol taraf - Sosyal medya kutuları 2x2 */}
          <div className="lg:col-span-4 h-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
              <SocialBox
                icon={Instagram}
                title="INSTAGRAM"
                description="Share visually appealing snippets of our latest web projects."
                href="https://instagram.com"
              />
              <SocialBox
                icon={Twitter}
                title="TWITTER"
                description="Tweet about interesting coding challenges you've overcome."
                href="https://twitter.com"
              />
              <SocialBox
                icon={Dribbble}
                title="DRIBBBLE"
                description="Showcase design elements of our web projects."
                href="https://dribbble.com"
              />
              <SocialBox
                icon={Behance}
                title="BEHANCE"
                description="Create detailed presentations for our projects."
                href="https://behance.net"
              />
            </div>
          </div>

          {/* Sağ taraf - Footer menüleri ve Newsletter */}
          <div className="lg:col-span-8">
            {/* Menü kutusu */}
            <div className="bg-[#151515] rounded-xl p-8 mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-8">
                <div>
                  <h4 className="text-white text-lg font-medium mb-4">Home</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Why Us</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">About Us</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Testimonials</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">FAQ's</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-4">Services</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Web Development</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">App Development</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Web Design</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Digital Marketing</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-4">Projects</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Klothink</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Zenith</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Novus</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Apex</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-4">Blogs</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Business</a></li>
                    <li className="flex items-center gap-1">
                      <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Design</a>
                      <span className="bg-[#1a1a1a] text-[#E97F61] text-[10px] px-2 py-0.5 rounded">Soon</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Development</a>
                      <span className="bg-[#1a1a1a] text-[#E97F61] text-[10px] px-2 py-0.5 rounded">Soon</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#151515] rounded-xl p-8 mb-8">
              <span className="text-gray-600 text-xs uppercase tracking-wider">Newsletter</span>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                <h3 className="text-white text-2xl font-medium">SUBSCRIBE TO OUR NEWSLETTER</h3>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent text-white text-sm outline-none border-b border-gray-800 pb-2 focus:border-[#E97F61] transition-colors min-w-[200px]"
                  />
                  <button className="p-2">
                    <ArrowUpRight className="text-[#E97F61] hover:text-white transition-colors" size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="bg-[#151515] rounded-xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 text-sm mb-4 md:mb-0"> 2024 NextGen. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Terms & Conditions</a>
                  <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;