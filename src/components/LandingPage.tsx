'use client';

import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const basePath = process.env.NODE_ENV === 'production' ? '/sustaind' : '';
    const images = useMemo(() => [
        { src: `${basePath}/data/images/group_pic_1.jpg`, duration: 10000 },
        { src: `${basePath}/data/images/group_pic_2.jpg`, duration: 10000 }
    ], [basePath]);

    useEffect(() => {
        // Preload images
        const preloadImages = async () => {
            const promises = images.map((img) => {
                return new Promise((resolve, reject) => {
                    const image = new window.Image();
                    image.src = img.src;
                    image.onload = resolve;
                    image.onerror = reject;
                });
            });

            try {
                await Promise.all(promises);
                setImagesLoaded(true);
            } catch (error) {
                console.error('Error preloading images:', error);
                setImagesLoaded(true); // Show anyway
            }
        };

        preloadImages();
    }, [images]);

    useEffect(() => {
        if (!imagesLoaded) return;

        const timer = setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, images[currentImage].duration);

        return () => clearTimeout(timer);
    }, [currentImage, images, imagesLoaded]);

    return (
        <LazyMotion features={domAnimation}>
            <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background slideshow */}
                {images.map((image, index) => (
                    <div
                        key={image.src}
                        className="absolute inset-0"
                        style={{
                            opacity: currentImage === index ? 1 : 0,
                            transition: 'opacity 3s ease-out',
                            zIndex: 0
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={`Hero background ${index + 1}`}
                            fill
                            priority={index === 0}
                            quality={85}
                            sizes="100vw"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </div>
                ))}

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50 z-10" />

                <div className="max-w-4xl mx-auto text-center relative z-20 -mt-28">
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <m.h2
                            className="text-lg sm:text-xl text-white mb-4 font-medium drop-shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Welcome to the home of
                        </m.h2>

                        <m.h1
                            className="text-5xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight drop-shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <span className="text-green-400">Sust</span>
                            <span className="text-orange-400">AInd</span>
                            <span className="text-white">: Sustainable AI for India</span>
                        </m.h1>

                        <m.p
                            className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Developing environmentally and economically sustainable AI systems for India&apos;s future.
                            Join us in creating AI that serves both innovation and sustainability.
                        </m.p>

                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link href="/about">
                                <m.button
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Learn More
                                </m.button>
                            </Link>
                            <a href="https://discord.gg/Pnv3uF3PZy" target="_blank" rel="noopener noreferrer">
                                <m.button
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Join Our Community
                                </m.button>
                            </a>
                        </m.div>
                    </m.div>
                </div>
            </section>
        </LazyMotion>
    );
};

const CollaborationSection = () => {
    return (
        <LazyMotion features={domAnimation}>
            <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <m.div
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
                        <m.a
                            href="mailto:karthik.vaidyanathan@iiit.ac.in"
                            whileHover={{
                                scale: 1.02,
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 shadow-md"
                        >
                            Get in Touch
                        </m.a>
                    </m.div>
                </div>
            </section>
        </LazyMotion>
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