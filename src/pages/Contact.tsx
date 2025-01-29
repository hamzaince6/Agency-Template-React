import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import Testimonials from '../components/testimonials/Testimonials';
import FAQ from '../components/shared/FAQ';
import Banner from '../components/shared/Banner';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-[#111]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            <div className="lg:pr-4 h-full">
              <div className="h-full">
                <ContactInfo />
              </div>
            </div>
            <div className="lg:pl-4 h-full">
              <div className="h-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <FAQ />
        <Banner />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
