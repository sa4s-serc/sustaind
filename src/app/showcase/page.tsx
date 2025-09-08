'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface VideoUrl {
    language: string;
    url: string;
}

interface Video {
    title: string;
    urls: VideoUrl[];
}

interface ShowcaseItem {
    id: number;
    title: string;
    videos: Video[];
}

const ShowcasePage = () => {
    const [showcaseData, setShowcaseData] = useState<ShowcaseItem[]>([]);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShowcaseData = async () => {
            try {
                const response = await fetch('./data/showcase.json');
                const data = await response.json();
                setShowcaseData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching showcase data:', error);
                setLoading(false);
            }
        };

        fetchShowcaseData();
    }, []);

    const getCurrentVideoUrl = (videos: Video[]) => {
        const video = videos[0]; // Taking the first video for now
        const selectedVideo = video.urls.find(url => url.language === selectedLanguage);
        return selectedVideo ? selectedVideo.url : video.urls[0]?.url || '';
    };

    const getAvailableLanguages = (videos: Video[]) => {
        if (videos.length === 0) return [];
        return videos[0].urls.map(url => url.language);
    };

    if (loading) {
        return (
            <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                        Research Showcase
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our latest research presentations and demonstrations
                    </p>
                </motion.div>

                {/* Showcase Items */}
                {showcaseData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="mb-16"
                    >
                        {/* Item Title */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {item.title}
                            </h2>

                            {/* Language Selector */}
                            {item.videos.length > 0 && (
                                <div className="flex justify-center mb-6">
                                    <div className="bg-white rounded-lg p-1 shadow-md border border-gray-200">
                                        <div className="flex space-x-1">
                                            {getAvailableLanguages(item.videos).map((language) => (
                                                <motion.button
                                                    key={language}
                                                    onClick={() => setSelectedLanguage(language)}
                                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${selectedLanguage === language
                                                        ? 'bg-orange-500 text-white shadow-md'
                                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                                        }`}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    {language}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Video Player */}
                        {item.videos.length > 0 && (
                            <motion.div
                                className="max-w-4xl mx-auto"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                                    <div className="aspect-video bg-black">
                                        <video
                                            key={getCurrentVideoUrl(item.videos)} // Force re-render when URL changes
                                            controls
                                            className="w-full h-full"
                                        >
                                            <source
                                                src={getCurrentVideoUrl(item.videos)}
                                                type="video/mp4"
                                            />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>

                                    {/* Video Info */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    {item.videos[0].title}
                                                </h3>
                                            </div>
                                            <motion.div
                                                className="flex items-center space-x-2 text-sm text-gray-500"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                            >
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                ))}

                {showcaseData.length === 0 && !loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="text-gray-500 text-lg">
                            No showcase items available at the moment.
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ShowcasePage;
