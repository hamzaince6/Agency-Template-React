import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutTeam from '../components/about/AboutTeam';
import AboutAchievements from '../components/about/AboutAchievements';
import AboutAwards from '../components/about/AboutAwards';
import Testimonials from '../components/testimonials/Testimonials';
import FAQ from '../components/shared/FAQ';
import Banner from '../components/shared/Banner';

const About = () => {
  return (
    <div className="min-h-screen bg-[#111]">
      <Header />
      <AboutHero />
      <AboutTeam />
      <AboutAchievements />
      <AboutAwards />
      <Testimonials />
      <FAQ />
      <Banner />
      <Footer />
    </div>
  );
};

export default About;
