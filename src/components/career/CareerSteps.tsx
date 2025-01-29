import React from 'react';
import { ArrowDown } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const StepCard = ({ step }: { step: Step }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 group">
      <div className="space-y-4">
        {/* Step Number */}
        <span className="text-gray-400 text-sm">Step {step.number}</span>
        
        {/* Title */}
        <h3 className="text-white text-xl font-semibold group-hover:text-[#E97F61] transition-colors">
          {step.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed min-h-[80px]">
          {step.description}
        </p>

        {/* Know More Button */}
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowDown className="w-4 h-4" />
          <span className="text-xs tracking-wider">KNOW MORE</span>
        </button>
      </div>
    </div>
  );
};

const CareerSteps = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "EXPLORE JOB LISTINGS",
      description: "Visit our website's \"Careers\" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations."
    },
    {
      number: "02",
      title: "REVIEW JOB DESCRIPTION",
      description: "Click on the desired job title to view the detailed job description. Take your time to read through the responsibilities, requirements, and qualifications to ensure you have a clear understanding of the role."
    },
    {
      number: "03",
      title: "PREPARE YOUR APPLICATION",
      description: "Before applying, ensure you have the following ready: Resume, Cover Letter, Portfolio (if applicable), and any additional documents specified in the job posting."
    },
    {
      number: "04",
      title: "COMPLETE THE APPLICATION",
      description: "Click the \"Apply Now\" button on the job listing page to access our online application form. Fill in your personal information, contact details, and the position you are applying for."
    },
    {
      number: "05",
      title: "UPLOAD YOUR DOCUMENTS",
      description: "Attach your resume, cover letter, and portfolio (if applicable) in their respective fields on the application form."
    },
    {
      number: "06",
      title: "SUBMIT YOUR APPLICATION",
      description: "Double-check all the information you provided to ensure accuracy and completeness. Once you are satisfied with your application, click the \"Submit\" button to send it to our HR team."
    },
    {
      number: "07",
      title: "APPLICATION REVIEW",
      description: "After the application deadline, our HR team will carefully review all applications. Shortlisted candidates will be contacted for further evaluation, which may include interviews and assessments."
    },
    {
      number: "08",
      title: "INTERVIEW PROCESS",
      description: "If you are selected for an interview, we will reach out to schedule a suitable date and time. Interviews may be conducted in-person or virtually, depending on the position and your location."
    }
  ];

  return (
    <div className="w-full py-16">
      <div className="container mx-auto">
        <div className="bg-[#151515]/50 rounded-3xl p-8">
          {/* Title Box */}
          <div className="bg-[#151515] rounded-xl p-6 mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              HOW TO APPLY
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSteps;
