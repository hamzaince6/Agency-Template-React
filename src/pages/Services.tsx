import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ServiceTitle from '../components/services/ServiceTitle';
import ServiceGrid from '../components/services/ServiceGrid';
import SuccessStories from '../components/home/SuccessStories';
import Testimonials from '../components/testimonials/Testimonials';
import FAQ from '../components/shared/FAQ';
import Banner from '../components/shared/Banner';
import ServicesHero from '../components/services/ServicesHero';

const Services = () => {
  return (
    <div className="min-h-screen bg-[#111]">
      <Header />
      
      <main>
        <div className="container mx-auto">
        <ServicesHero />
          <div className="bg-[#151515]/50 rounded-3xl p-8">
            <ServiceTitle />
            <ServiceGrid />
          </div>
          <SuccessStories />
          <Testimonials />
          <FAQ />
          <Banner />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;