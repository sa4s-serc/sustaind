'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
}

interface PublicationModalProps {
    publication: Publication;
    onClose: () => void;
}

function PublicationModal({ publication, onClose }: PublicationModalProps) {
    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 pr-4">{publication.title}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ×
                        </button>
                    </div>

                    <div className="mb-4">
                        <p className="text-gray-600">
                            <span className="font-semibold">Authors:</span> {publication.authors.join(', ')}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Venue:</span> {publication.venue} ({publication.year})
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">DOI:</span> {publication.doi}
                        </p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-green-600 mb-2">Abstract</h3>
                        <p className="text-gray-700 leading-relaxed">{publication.abstract}</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-green-600 mb-2">Keywords</h3>
                        <div className="flex flex-wrap gap-2">
                            {publication.keywords.map((keyword, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={publication.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                            Read Paper
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
                const response = await fetch('/data/publications.json');
                const data = await response.json();
                setPublications(data);
            } catch (error) {
                console.error('Error fetching publications:', error);
            }
        }

        fetchPublications();
    }, []);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                    src={publication.coverImage}
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
