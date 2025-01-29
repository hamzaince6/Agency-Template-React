import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  review: string;
}

const TestimonialCard = ({ name, position, company, image, rating, review }: TestimonialProps) => {
  return (
    <div className="bg-[#151515] rounded-xl p-6 sm:p-7 md:p-8 hover:bg-[#1a1a1a] transition-colors duration-300 flex flex-col h-full">
      {/* Header */}
      <div className="space-y-5 mb-6">
        {/* Profile and Info */}
        <div className="flex items-start gap-4">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-[#E97F61]/20"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{name}</h3>
            <p className="text-xs sm:text-sm text-gray-400">{position} @ {company}</p>
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1.5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="text-[#E97F61] w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          ))}
        </div>
      </div>

      {/* Review */}
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">{review}</p>

      {/* Footer */}
      <button className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <span className="text-xs sm:text-sm tracking-wider border-b border-transparent group-hover:border-white pb-0.5">READ FULL REVIEW</span>
        <ArrowUpRight size={14} className="sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format",
      rating: 5,
      review: "Working with this team was an absolute pleasure. They took our vision and transformed it into a stunning website that perfectly represents our brand. Their attention to detail and commitment to excellence is unmatched."
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format",
      rating: 5,
      review: "The mobile app they developed for us exceeded all expectations. The user interface is intuitive, the performance is outstanding, and our customers love it. Their team's expertise and professionalism made the entire process smooth."
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "DigitalFlow",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format",
      rating: 5,
      review: "Their digital marketing strategies have significantly improved our online presence. We've seen a substantial increase in engagement and conversions. They truly understand the digital landscape."
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "DigitalFlow",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format",
      rating: 5,
      review: "Their digital marketing strategies have significantly improved our online presence. We've seen a substantial increase in engagement and conversions. They truly understand the digital landscape."
    }
  ];

  return (
    <section className="bg-[#111111] py-20">
      <div className="container mx-auto">
        <div className="bg-[#151515]/50 rounded-3xl p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 md:mt-8">
          {/* Title Box */}
          <div className="bg-[#151515] rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">TESTIMONIALS</h2>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span className="text-xs sm:text-sm tracking-wider">VIEW ALL</span>
              <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;