'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <motion.div
                className="max-w-6xl mx-auto"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                {/* Hero Section */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4 font-inter">
                        About Us
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Pioneering sustainable AI systems for a greener future in India
                    </p>
                </motion.div>

                {/* Vision Section */}
                <motion.div variants={fadeInUp} className="mb-16">
                    <h2 className="text-3xl font-bold text-green-600 mb-8 font-inter">
                        Our Vision
                    </h2>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                            <p className="text-lg text-[#212121] leading-relaxed mb-6 font-['IBM_Plex_Sans']">
                                The project, <span className="font-semibold text-green-600">SustAInd</span> aims to address the need for environmentally and economically sustainable AI systems in India. As AI adoption rises across sectors, the energy demands of AI-enabled systems significantly impact sustainability goals.
                            </p>

                            <div className="bg-[#16a34a]/5 p-6 rounded-lg mb-6 border-l-4 border-[#16a34a]">
                                <p className="text-lg text-[#212121] leading-relaxed font-['IBM_Plex_Sans']">
                                    <span className="font-semibold text-[#ea580c]">Did you know?</span> AI operations consume approximately <span className="font-semibold">2% of the world's electricity</span>, and training a single model can emit carbon equivalent to <span className="font-semibold">five cars over their lifetimes</span>.
                                </p>
                            </div>
                        </div>

                        <motion.div
                            className="lg:col-span-1"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg bg-[#16a34a]/10 border border-[#16a34a]/20">
                                <Image
                                    src="https://images.pexels.com/photos/1230157/pexels-photo-1230157.jpeg"
                                    alt="Sustainable AI"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-lg"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Challenge Section */}
                <motion.div variants={fadeInUp} className="mb-16">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <motion.div
                            className="lg:col-span-1"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg bg-[#ea580c]/10 border border-[#ea580c]/20">
                                <Image
                                    src="https://images.pexels.com/photos/2118560/pexels-photo-2118560.jpeg"
                                    alt="Energy Challenge"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-lg"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    priority
                                />
                            </div>
                        </motion.div>

                        <div className="lg:col-span-2">
                            <p className="text-lg text-[#212121] leading-relaxed mb-6 font-['IBM_Plex_Sans']">
                                Additionally, over <span className="font-semibold text-[#ea580c]">50% of ML systems fail to reach production</span> due to cost and maintainability issues. This represents not just a technological challenge, but an environmental and economic imperative for sustainable development.
                            </p>

                            <p className="text-lg text-[#212121] leading-relaxed font-['IBM_Plex_Sans']">
                                The growing adoption of AI across various sectors in India necessitates a comprehensive approach to ensure these systems contribute positively to our sustainability goals rather than hindering them.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Solution Section */}
                <motion.div variants={fadeInUp} className="mb-16">
                    <h2 className="text-3xl font-bold text-green-600 mb-8 font-inter">
                        Our Solution
                    </h2>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                            <p className="text-lg text-[#212121] leading-relaxed mb-8 font-['IBM_Plex_Sans']">
                                To address these challenges, this project aims to develop a <span className="font-semibold text-green-600">software-centric framework</span> that enables organisations, policymakers, and developers to design, develop and deploy AI-enabled systems that are sustainable from environmental, economic and technical perspectives.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                <motion.div
                                    className="text-center p-6 rounded-lg bg-green-50 border border-green-200"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="text-3xl mb-3">🌍</div>
                                    <h3 className="font-semibold text-green-600 mb-2">Environmental</h3>
                                    <p className="text-sm text-[#212121]">Reducing carbon footprint and energy consumption</p>
                                </motion.div>

                                <motion.div
                                    className="text-center p-6 rounded-lg bg-[#ea580c]/5 border border-[#ea580c]/20"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="text-3xl mb-3">💰</div>
                                    <h3 className="font-semibold text-[#ea580c] mb-2">Economic</h3>
                                    <p className="text-sm text-[#212121]">Cost-effective and maintainable solutions</p>
                                </motion.div>

                                <motion.div
                                    className="text-center p-6 rounded-lg bg-[#212121]/5 border border-[#212121]/20"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="text-3xl mb-3">⚙️</div>
                                    <h3 className="font-semibold text-[#212121] mb-2">Technical</h3>
                                    <p className="text-sm text-[#212121]">Robust and scalable architecture</p>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            className="lg:col-span-1"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg bg-[#16a34a]/10 border border-[#16a34a]/20">
                                <Image
                                    src="https://images.pexels.com/photos/6069/grass-lawn-green-wooden-6069.jpg"
                                    alt="Framework Solution"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-lg"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Impact Section */}
                <motion.div variants={fadeInUp} className="text-center">
                    <h2 className="text-3xl font-bold text-green-600 mb-8 font-inter">
                        Making a Difference
                    </h2>

                    <div className="bg-green-50 p-8 rounded-xl border border-green-200">
                        <p className="text-xl text-[#212121] leading-relaxed font-['IBM_Plex_Sans'] max-w-4xl mx-auto">
                            By bridging the gap between AI innovation and sustainability, SustAInd is committed to ensuring that India's AI revolution contributes to a <span className="font-semibold text-green-600">greener</span>, more <span className="font-semibold text-[#ea580c]">economically viable</span> future for all.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
