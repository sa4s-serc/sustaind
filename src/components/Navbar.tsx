'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/about', label: 'About' },
        { href: '/people', label: 'People' },
        { href: '/showcase', label: 'Showcase' },
        { href: '/publications', label: 'Publications' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/tools', label: 'Tools' },
    ];

    return (
        <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <motion.div
                            className="text-3xl font-bold"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="text-green-600">Sust</span>
                            <span className="text-orange-500">AInd</span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.href}
                                    className="relative"
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div whileHover="hover" className="relative">
                                        <Link
                                            href={link.href}
                                            className="text-gray-900 hover:text-orange-500 px-3 py-2 text-lg font-medium transition-colors duration-200 relative block"
                                        >
                                            {link.label}
                                        </Link>
                                        <motion.div
                                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500"
                                            initial={{ scaleX: 0 }}
                                            variants={{
                                                hover: { scaleX: 1 }
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            style={{ transformOrigin: "left" }}
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-900 hover:text-orange-500 focus:outline-none focus:text-orange-500"
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative"
                                >
                                    <motion.div whileHover="hover" className="relative">
                                        <Link
                                            href={link.href}
                                            className="text-gray-900 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors duration-200 relative"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                        <motion.div
                                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500"
                                            initial={{ scaleX: 0 }}
                                            variants={{
                                                hover: { scaleX: 1 }
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            style={{ transformOrigin: "left" }}
                                        />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;