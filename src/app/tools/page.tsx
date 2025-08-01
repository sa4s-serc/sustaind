'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Tool {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    url: string;
    github?: string;
    paper?: string;
    authors: string[];
    image?: string;
}

export default function Tools() {
    const [tools, setTools] = useState<Tool[]>([]);
    const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

    useEffect(() => {
        const fetchTools = async () => {
            try {
                const response = await fetch('/data/tools.json');
                const data = await response.json();
                setTools(data);
            } catch (error) {
                console.error('Error fetching tools:', error);
            }
        };

        fetchTools();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        },
        hover: {
            y: -5,
            transition: {
                duration: 0.3
            }
        }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                        Our Tools
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover the innovative tools and software we&apos;ve developed to advance sustainable AI research and practice.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {tools.map((tool) => (
                        <motion.div
                            key={tool.id}
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer flex flex-col h-full"
                            onClick={() => setSelectedTool(tool)}
                        >
                            {tool.image && (
                                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                                    <img
                                        src={tool.image}
                                        alt={tool.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">{tool.description}</p>
                                    <div className="mb-4">
                                        <span className="text-sm text-gray-500">By: {tool.authors.join(', ')}</span>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Modal for tool details */}
                {selectedTool && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                        onClick={() => setSelectedTool(null)}
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedTool.image && (
                                <div className="h-64 bg-gray-100 overflow-hidden rounded-t-xl">
                                    <img
                                        src={selectedTool.image}
                                        alt={selectedTool.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">{selectedTool.name}</h2>
                                    <button
                                        onClick={() => setSelectedTool(null)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <p className="text-gray-600 mb-6">{selectedTool.longDescription}</p>

                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-green-600 mb-3">Authors</h3>
                                    <p className="text-gray-600">{selectedTool.authors.join(', ')}</p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {selectedTool.url && (
                                        <motion.a
                                            href={selectedTool.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Visit Tool
                                        </motion.a>
                                    )}
                                    {selectedTool.github && (
                                        <motion.a
                                            href={selectedTool.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            GitHub
                                        </motion.a>
                                    )}
                                    {selectedTool.paper && (
                                        <motion.a
                                            href={selectedTool.paper}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-green-600 text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Read Paper
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
