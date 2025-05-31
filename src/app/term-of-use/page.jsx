import React from 'react';

const TermOfUse = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-6 sm:py-10 px-4 sm:px-6 lg:px-16 pt-[100px] sm:pt-[120px]">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-1 sm:mb-6">
          <a href="/" className="text-teal-700 hover:underline flex items-center text-sm sm:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </a>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-teal-700 mb-10 font-mackinac">
          Terms of Use
        </h1>

        {/* Content Box with Border */}
        <div className="border border-gray-300 rounded-xl p-5 sm:p-8 lg:p-10">

          {/* Section */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Acceptance of Terms
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter leading-relaxed">
              By accessing or using the Health Compass website and services ("Service"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use our Service.
            </p>
          </section>

          {/* Section */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Use of the Service
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter mb-3 leading-relaxed">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
            </p>
            <ul className="list-disc list-inside pl-4 text-sm sm:text-base text-gray-800 font-inter space-y-2">
              <li>In any way that violates any applicable national, federal, state, local, or international law or regulation.</li>
              <li>To engage in conduct that restricts or inhibits anyone’s use or enjoyment of the Service, or which may harm Health Compass or expose them to liability.</li>
              <li>To transmit any unsolicited or unauthorized advertising or promotional material, including junk mail, spam, or similar solicitations.</li>
            </ul>
          </section>

          {/* Section */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Intellectual Property
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter leading-relaxed">
              All content, features, and functionality on the Service are owned by Health Compass or its licensors and are protected by intellectual property laws.
            </p>
          </section>

          {/* Section */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Disclaimer of Warranties
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter leading-relaxed">
              The Service is provided “AS IS” without warranties of any kind. We make no warranties regarding the accuracy, reliability, or availability of the Service.
            </p>
          </section>

          {/* Section */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Limitation on Liability
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter leading-relaxed">
              Health Compass shall not be liable for any damages arising out of your use of the Service, including but not limited to indirect, incidental, or consequential damages.
            </p>
          </section>

          {/* Section */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Changes to the Terms of Use
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter leading-relaxed">
              We may update these Terms at any time. Changes are effective immediately upon posting and apply to all access and use thereafter.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Contact Information
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter leading-relaxed">
              For questions about these Terms of Use, contact us at: <span className="font-medium">[Your Contact Email Here]</span>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermOfUse;
