import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectFeatures from '../components/projects/ProjectFeatures';
import ProjectShowcase from '../components/projects/ProjectShowcase';
import Testimonials from '../components/testimonials/Testimonials';
import FAQ from '../components/shared/FAQ';
import Banner from '../components/shared/Banner';

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#111]">
      <Header />
      <main>
        <ProjectsHero />
        <ProjectFeatures />
        <ProjectShowcase />
        <Testimonials />
        <FAQ />
        <Banner />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
