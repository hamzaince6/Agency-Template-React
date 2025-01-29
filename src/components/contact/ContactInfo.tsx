import React, { useState } from 'react';
import { ArrowUpRight, Phone, MapPin } from 'lucide-react';

interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab = ({ label, active, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg text-base transition-colors ${
      active
        ? 'bg-[#E97F61] text-white'
        : 'bg-transparent text-gray-400 hover:text-white'
    }`}
  >
    {label}
  </button>
);

const ContactInfo = () => {
  const [activeTab, setActiveTab] = useState('EMAILS');
  const tabs = ['PHONE NUMBER', 'EMAILS', 'OFFICE LOCATIONS'];

  const contactInfo = {
    'General Inquiries': {
      email: 'INFO@NEXGEN.COM',
      phone: '+1 (555) 123-4567',
      link: 'mailto:info@nexgen.com'
    },
    'Business Collaborations': {
      email: 'PARTNERSHIPS@NEXGEN.COM',
      phone: '+1 (555) 234-5678',
      link: 'mailto:partnerships@nexgen.com'
    },
    'Job Opportunities': {
      email: 'CAREERS@NEXGEN.COM',
      phone: '+1 (555) 345-6789',
      link: 'mailto:careers@nexgen.com'
    }
  };

  const locations = [
    {
      city: 'New York',
      address: '123 Business Avenue, Manhattan, NY 10001',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25246421558!2d-74.11976323029149!3d40.697403441901946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2str!4v1696842391284!5m2!1sen!2str'
    },
    {
      city: 'London',
      address: '456 Tech Square, Westminster, London SW1A 1AA',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642536509!3d51.52855824164916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2str!4v1696842434747!5m2!1sen!2str'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'PHONE NUMBER':
        return (
          <div className="space-y-8">
            {Object.entries(contactInfo).map(([title, info]) => (
              <div key={title} className="space-y-2">
                <p className="text-gray-400 text-sm">{title}</p>
                <a
                  href={`tel:${info.phone}`}
                  className="flex items-center justify-between bg-[#1a1a1a] rounded-xl p-4 group hover:bg-[#E97F61] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">{info.phone}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            ))}
          </div>
        );

      case 'EMAILS':
        return (
          <div className="space-y-8">
            {Object.entries(contactInfo).map(([title, info]) => (
              <div key={title} className="space-y-2">
                <p className="text-gray-400 text-sm">{title}</p>
                <a
                  href={info.link}
                  className="flex items-center justify-between bg-[#1a1a1a] rounded-xl p-4 group hover:bg-[#E97F61] transition-colors"
                >
                  <span className="text-white font-medium">{info.email}</span>
                  <ArrowUpRight className="w-5 h-5 text-white transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            ))}
          </div>
        );

      case 'OFFICE LOCATIONS':
        return (
          <div className="space-y-8">
            {locations.map((location) => (
              <div key={location.city} className="space-y-4">
                <div className="bg-[#1a1a1a] rounded-xl p-4">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#E97F61] mt-1" />
                    <div>
                      <h3 className="text-white font-medium mb-1">{location.city}</h3>
                      <p className="text-gray-400 text-sm">{location.address}</p>
                    </div>
                  </div>
                  <div className="w-full h-[300px] rounded-lg overflow-hidden">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${location.city} Office Location`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-[#151515] rounded-3xl p-8 h-full flex flex-col">
      {/* Tab Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
};

export default ContactInfo;
