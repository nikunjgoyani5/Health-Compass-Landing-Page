import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-spring-wood py-6 sm:py-10 px-4 sm:px-6 lg:px-16">
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

        {/* Page Title */}
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center text-teal-700 mb-6 sm:mb-10 font-mackinac">
          Privacy Policy
        </h1>

        {/* Content Section with Border */}
        <div className="border border-gray-300 rounded-xl p-5 sm:p-8 lg:p-10">

          {/* Section */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Information We Collect
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter mb-3 leading-relaxed">
              We collect information to provide better services to all our users. The types of information we collect include:
            </p>
            <ul className="list-disc list-inside pl-4 text-sm sm:text-base text-gray-800 font-inter space-y-2">
              <li><strong>Personal Information:</strong> Information you provide directly, such as name, email, and health-related data.</li>
              <li><strong>Usage Information:</strong> Data about how you use our service — pages viewed and actions taken.</li>
              <li><strong>Device Information:</strong> Info about your device: model, OS, and identifiers.</li>
            </ul>
          </section>

          {/* Section */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              How We Use Information
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter leading-relaxed">
              We use the collected information to maintain, improve, and personalize our services, protect users, and deliver relevant content.
            </p>
          </section>

          {/* Section */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Information Sharing
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter mb-3 leading-relaxed">
              We do not share your personal information except:
            </p>
            <ul className="list-disc list-inside pl-4 text-sm sm:text-base text-gray-800 font-inter space-y-2">
              <li>With your explicit consent.</li>
              <li>With trusted affiliates for processing — under strict confidentiality agreements.</li>
              <li>To comply with legal obligations, laws, or enforceable government requests.</li>
            </ul>
          </section>

          {/* Section */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Security
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter leading-relaxed">
              We work hard to protect Health Compass and its users from unauthorized access, alteration, or destruction of data.
            </p>
          </section>

          {/* Section */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Changes to the Privacy Policy
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter leading-relaxed">
              We may update this Privacy Policy occasionally. We will notify you of significant changes and always include the last updated date.
            </p>
          </section>

          {/* Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-3 font-mackinac">
              Contact Information
            </h2>
            <p className="text-sm sm:text-base text-gray-800 font-inter leading-relaxed">
              If you have questions about this Privacy Policy, contact us at: <span className="font-medium">[Your Contact Email Here]</span>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
