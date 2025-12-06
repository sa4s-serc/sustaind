"use client";

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Description - Left */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="text-3xl font-bold font-inter text-black">
              <span className="text-green-600">Sust</span>
              <span className="text-orange-500">AInd</span>
            </div>
            <p className="text-gray-600 text-sm text-center md:text-left max-w-xs leading-relaxed">
              Developing environmentally and economically sustainable AI systems
              for India&apos;s future.
            </p>
          </div>

          {/* Project Support - Center */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-sm font-semibold text-gray-800 font-inter">
              This project is under the support of
            </h3>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <a href="https://www.anrfonline.in/ANRF/HomePage" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://psa.gov.in/CMS/web/sites/default/files/2025-11/anrf.jpg"
                  alt="Anusandhan National Research Foundation (ANRF) Logo"
                  width={200}
                  height={96}
                  className="h-24 w-auto hover:opacity-80 transition-opacity duration-200"
                />
              </a>
            </div>
          </div>

          {/* Contact Info - Right */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <h3 className="text-sm font-semibold text-gray-800 font-inter">
              Contact
            </h3>
            <div className="text-center md:text-right text-sm text-gray-600 space-y-1 leading-relaxed">
              <div className="font-medium text-gray-800">
                Software Engineering Research Center
              </div>
              <div>5th floor, Himalaya D-Block</div>
              <div>IIIT Hyderabad, Telangana, India</div>
            </div>
            <a
              href="mailto:karthik.vaidyanathan@iiit.ac.in"
              className="text-orange-500 hover:text-orange-600 transition-colors duration-200 text-sm font-medium border-b border-transparent hover:border-orange-500"
            >
              karthik.vaidyanathan@iiit.ac.in
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-300 bg-white">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs text-gray-500">
              © 2025 SustAInd. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Sustainable AI for India&apos;s Future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
