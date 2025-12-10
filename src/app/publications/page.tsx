'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AudioPlayer from '@/components/AudioPlayer';

interface Publication {
    id: string;
    title: string;
    authors: string[];
    abstract: string;
    venue: string;
    year: number;
    doi: string;
    url: string;
    coverImage: string;
    keywords: string[];
    audio?: string;
}

interface PublicationModalProps {
    publication: Publication;
    onClose: () => void;
}

function PublicationModal({ publication, onClose }: PublicationModalProps) {
    return (
        <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-white rounded-t-3xl sm:rounded-2xl max-w-4xl w-full sm:my-auto max-h-[100vh] sm:max-h-[90vh] overflow-y-auto relative shadow-2xl"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Drag Handle for Mobile */}
                <div className="sticky top-0 bg-white pt-3 pb-2 sm:hidden flex justify-center z-10 rounded-t-3xl">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
                </div>

                <div className="px-5 sm:px-8 pt-4 sm:pt-8 pb-6 sm:pb-8">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-5 sm:top-8 sm:right-8 text-gray-400 hover:text-gray-700 transition-colors duration-200 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Title */}
                    <h2 className="text-xl sm:text-3xl font-semibold text-gray-900 pr-12 mb-6 sm:mb-8 leading-tight">
                        {publication.title}
                    </h2>

                    {/* Meta Information */}
                    <div className="mb-6 sm:mb-8 space-y-3 border-l-2 border-green-500 pl-4">
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide block mb-1">Authors</span>
                            {publication.authors.join(', ')}
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base">
                            <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide block mb-1">Published</span>
                            {publication.venue} · {publication.year}
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base break-all">
                            <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide block mb-1">DOI</span>
                            {publication.doi}
                        </p>
                    </div>

                    {/* Abstract */}
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wide mb-3">Abstract</h3>
                        <p className="text-gray-800 leading-relaxed text-sm sm:text-base">{publication.abstract}</p>
                    </div>

                    {/* Keywords */}
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wide mb-3">Keywords</h3>
                        <div className="flex flex-wrap gap-2">
                            {publication.keywords.map((keyword, index) => (
                                <span
                                    key={index}
                                    className="bg-green-50 text-green-700 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-green-200"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Audio Player */}
                    {publication.audio && (
                        <div className="mb-6 sm:mb-8">
                            <h3 className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wide mb-3">AI Overview</h3>
                            <AudioPlayer
                                src={`.${publication.audio}`}
                                title={`${publication.title.substring(0, 50)}${publication.title.length > 50 ? '...' : ''}`}
                            />
                        </div>
                    )}

                    {/* Action Button */}
                    <div className="pt-2">
                        <a
                            href={publication.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full sm:w-auto sm:inline-block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3.5 rounded-xl transition-all duration-200 text-sm sm:text-base text-center font-medium shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40"
                        >
                            Read Full Paper
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Publications() {
    const [publications, setPublications] = useState<Publication[]>([]);
    const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);

    useEffect(() => {
        async function fetchPublications() {
            try {
                const response = await fetch('./data/publications.json');
                const data = await response.json();
                setPublications(data);
            } catch (error) {
                console.error('Error fetching publications:', error);
            }
        }

        fetchPublications();
    }, []);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white pb-32 sm:pb-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                        Publications
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our research contributions to sustainable AI and green computing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
                    {publications.map((publication, index) => (
                        <motion.div
                            key={publication.id}
                            className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedPublication(publication)}
                        >
                            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600">
                                <Image
                                    src={`.${publication.coverImage}`}
                                    alt={`Cover of ${publication.title}`}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {publication.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {publications.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No publications available at the moment.</p>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {selectedPublication && (
                    <PublicationModal
                        publication={selectedPublication}
                        onClose={() => setSelectedPublication(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
