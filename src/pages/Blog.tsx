import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BlogPosts from '../components/blog/BlogPosts';
import Testimonials from '../components/testimonials/Testimonials';
import FAQ from '../components/shared/FAQ';
import Banner from '../components/shared/Banner';

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#111]">
      <Header />
      <BlogPosts />
      <Testimonials />
      <FAQ />
      <Banner />
      <Footer />
    </div>
  );
};

export default Blog;
