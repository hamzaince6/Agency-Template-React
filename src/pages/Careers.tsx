import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CareerPositions from '../components/career/CareerPositions';
import CareerSteps from '../components/career/CareerSteps';
import Testimonials from '../components/testimonials/Testimonials';
import FAQ from '../components/shared/FAQ';
import Banner from '../components/shared/Banner';

const Careers = () => {
  return (
    <div className="min-h-screen bg-[#111]">
      <Header />
      <CareerPositions />
      <CareerSteps />
      <Testimonials />
      <FAQ />
      <Banner />
      <Footer />
    </div>
  );
};

export default Careers;
