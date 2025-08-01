'use client';

import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo - Left */}
                    <motion.div
                        className="text-2xl font-bold font-inter"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-green-600">Sust</span>
                        <span className="text-orange-500">AInd</span>
                    </motion.div>

                    {/* Address - Right */}
                    <motion.div
                        className="text-right text-sm text-gray-600 space-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="font-medium font-inter">Software Engineering Research Center</div>
                        <div>5th floor, Himalaya D-Block</div>
                        <div>IIIT Hyderabad</div>
                        <div>Telangana, India</div>
                        <motion.a
                            href="mailto:karthik.vaidyanathan@iiit.ac.in"
                            className="text-orange-500 hover:text-orange-600 transition-colors duration-200 block mt-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            karthik.vaidyanathan@iiit.ac.in
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
