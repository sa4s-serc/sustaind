'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2
                        className="text-lg sm:text-xl text-gray-600 mb-4 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Welcome to the home of
                    </motion.h2>

                    <motion.h1
                        className="text-5xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="text-green-600">Sust</span>
                        <span className="text-orange-500">AInd</span>
                        <span className="text-gray-900">: Sustainable AI for India</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Developing environmentally and economically sustainable AI systems for India&apos;s future.
                        Join us in creating AI that serves both innovation and sustainability.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/about">
                            <motion.button
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Learn More
                            </motion.button>
                        </Link>
                        <a href="https://discord.gg/Pnv3uF3PZy" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Join Our Community
                            </motion.button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const CollaborationSection = () => {
    return (
        <section className="pb-8 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Collaborate with us
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Interested in sustainable AI? Reach out to join our mission.
                    </p>
                    <motion.a
                        href="mailto:karthik.vaidyanathan@iiit.ac.in"
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 4px 12px -3px rgba(0, 0, 0, 0.08)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 shadow-md"
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

const LandingPage = () => {
    return (
        <div className="relative">
            <HeroSection />
            <CollaborationSection />
        </div>
    );
};

export default LandingPage;