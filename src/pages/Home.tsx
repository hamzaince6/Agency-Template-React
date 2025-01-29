import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Reasons from '../components/shared/Reasons';
import Services from '../components/services/Services';
import Works from '../components/projects/Works';
import Testimonials from '../components/testimonials/Testimonials';
import FAQ from '../components/shared/FAQ';
import Banner from '../components/shared/Banner';
import Footer from '../components/layout/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-[#111]">
      <div className="container mx-auto">
        <Header />
        <div className="bg-[#151515] rounded-3xl p-6">
          <Hero />
          <Stats />
        </div>
        <Reasons />
        <Services />
        <Works />
        <Testimonials />
        <FAQ />
        <Banner />
        <Footer />
      </div>
    </div>
  );
}

export default Home;