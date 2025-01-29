import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface BlogPost {
  image: string;
  category: string;
  readTime: string;
  author: string;
  title: string;
  description: string;
  publishedDate: string;
  featured?: boolean;
}

interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab = ({ label, active, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
      active
        ? 'bg-[#E97F61] text-white'
        : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
    }`}
  >
    {label}
  </button>
);

const FeaturedBlogCard = ({ post }: { post: BlogPost }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Image Box */}
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden group h-[400px]">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    {/* Content Box */}
    <div className="lg:col-span-2 bg-[#1a1a1a] rounded-xl p-6 group">
      <div className="space-y-4">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="bg-[#151515] rounded-lg px-3 py-1">
            <span className="text-gray-400">Category • </span>
            <span className="text-white">{post.category}</span>
          </div>
          <div className="bg-[#151515] rounded-lg px-3 py-1">
            <span className="text-gray-400">Read Time • </span>
            <span className="text-white">{post.readTime}</span>
          </div>
          <div className="bg-[#151515] rounded-lg px-3 py-1">
            <span className="text-gray-400">Author • </span>
            <span className="text-white">{post.author}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white text-2xl font-semibold group-hover:text-[#E97F61] transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {post.description}
        </p>

        {/* Read More & Date */}
        <div className="flex items-center justify-between pt-4">
          <button className="flex items-center gap-2 text-white hover:text-[#E97F61] transition-colors">
            <span className="text-sm font-medium">READ FULL BLOG</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <span className="text-gray-400 text-sm">
            Published Date: {post.publishedDate}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const RegularBlogCard = ({ post }: { post: BlogPost }) => (
  <div className="bg-[#1a1a1a] rounded-xl overflow-hidden group">
    {/* Image */}
    <div className="relative h-[200px]">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">
      {/* Title */}
      <h3 className="text-white text-xl font-semibold group-hover:text-[#E97F61] transition-colors min-h-[56px]">
        {post.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed min-h-[48px]">
        {post.description}
      </p>

      {/* Read More */}
      <button className="flex items-center gap-2 text-white hover:text-[#E97F61] transition-colors">
        <span className="text-sm font-medium">READ FULL BLOG</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const BlogPosts = () => {
  const [activeTab, setActiveTab] = useState('DESIGN');
  const tabs = ['BUSINESS', 'DESIGN', 'DEVELOPMENT'];

  const featuredPosts = {
    BUSINESS: {
      image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2400',
      category: 'Business',
      readTime: '5 Mins',
      author: 'John Smith',
      title: 'STRATEGIC BUSINESS PLANNING FOR 2024',
      description: 'Discover key strategies and insights for successful business planning in 2024. Learn how to adapt to changing market conditions and drive growth.',
      publishedDate: '15TH JANUARY 2024'
    },
    DESIGN: {
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2400',
      category: 'Design',
      readTime: '6 Mins',
      author: 'Laura Turner',
      title: 'WEB DESIGN TRENDS SHAPING 2024',
      description: 'Stay ahead of the design curve with insights into the latest web design trends. From immersive user experiences to bold color choices, explore the design elements that will dominate the digital landscape in 2024 and beyond.',
      publishedDate: '7TH FEBRUARY 2023'
    },
    DEVELOPMENT: {
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2400',
      category: 'Development',
      readTime: '8 Mins',
      author: 'Mike Chen',
      title: 'MODERN DEVELOPMENT PRACTICES 2024',
      description: 'Explore the latest development methodologies and tools that are reshaping how we build software. From AI-assisted coding to serverless architectures.',
      publishedDate: '20TH JANUARY 2024'
    }
  };

  const currentFeaturedPost = featuredPosts[activeTab as keyof typeof featuredPosts];

  const blogPosts: BlogPost[] = [
    {
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2400',
      category: 'Design',
      readTime: '4 Mins',
      author: 'Michael Chen',
      title: 'OPTIMIZING MOBILE USER EXPERIENCE FOR HIGHER CONVERSIONS',
      description: 'Mobile devices dominate digital interactions, making mobile user experience crucial for conversions. Explore mobile design best practices...',
      publishedDate: '15TH MARCH 2023'
    },
    {
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2400',
      category: 'Design',
      readTime: '5 Mins',
      author: 'Sarah Johnson',
      title: 'MASTERING THE ART OF MINIMALISTIC DESIGN',
      description: 'Simplicity and elegance take center stage in minimalistic design. Learn the principles of minimalism, how to effectively communicate with fewer elements...',
      publishedDate: '22ND APRIL 2023'
    },
    {
      image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=2400',
      category: 'Design',
      readTime: '7 Mins',
      author: 'David Williams',
      title: 'THE PSYCHOLOGY OF VISUAL DESIGN IN BRANDING',
      description: 'Uncover the impact of visual elements in branding and how they influence customer perceptions and emotions. Explore color psychology, typography choices...',
      publishedDate: '3RD MAY 2023'
    }
  ];

  return (
    <div className="w-full py-16">
      <div className="container mx-auto">
        <div className="bg-[#151515]/50 rounded-3xl p-8">
          {/* Header Box */}
          <div className="bg-[#151515] rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                OUR BLOGS
              </h2>

              {/* Tabs */}
              <div className="flex items-center gap-4">
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    label={tab}
                    active={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Featured Blog */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Image Box - Takes 1/3 width */}
            <div className="bg-[#1a1a1a] rounded-xl overflow-hidden group h-[400px]">
              <img
                src={currentFeaturedPost.image}
                alt={currentFeaturedPost.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content Box - Takes 2/3 width */}
            <div className="lg:col-span-2 bg-[#1a1a1a] rounded-xl p-8 group">
              <div className="flex flex-col space-y-8">
                {/* Title */}
                <h3 className="text-white text-3xl font-semibold group-hover:text-[#E97F61] transition-colors">
                  {currentFeaturedPost.title}
                </h3>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="bg-[#151515] rounded-lg px-4 py-2">
                    <span className="text-gray-400">Category • </span>
                    <span className="text-white">{currentFeaturedPost.category}</span>
                  </div>
                  <div className="bg-[#151515] rounded-lg px-4 py-2">
                    <span className="text-gray-400">Read Time • </span>
                    <span className="text-white">{currentFeaturedPost.readTime}</span>
                  </div>
                  <div className="bg-[#151515] rounded-lg px-4 py-2">
                    <span className="text-gray-400">Author • </span>
                    <span className="text-white">{currentFeaturedPost.author}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed">
                  {currentFeaturedPost.description}
                </p>

                {/* Read More & Date */}
                <div className="flex items-center justify-between pt-4">
                  <button className="flex items-center gap-2 text-white bg-[#151515] px-6 py-3 rounded-lg hover:bg-[#E97F61] transition-colors group-hover:bg-[#E97F61]">
                    <span className="text-sm font-medium">READ FULL BLOG</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <span className="text-gray-400 text-sm">
                    Published Date: {currentFeaturedPost.publishedDate}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {blogPosts.map((post, index) => (
              <RegularBlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
