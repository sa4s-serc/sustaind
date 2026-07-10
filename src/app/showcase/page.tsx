'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

// Native-script names for the language switcher; multilingual access is the point.
const NATIVE_LANGUAGE_NAMES: Record<string, string> = {
    English: 'English',
    Hindi: 'हिन्दी',
    Telugu: 'తెలుగు',
    Malayalam: 'മലയാളം',
    Tamil: 'தமிழ்',
    Kannada: 'ಕನ್ನಡ',
    Bengali: 'বাংলা',
    Marathi: 'मराठी',
};

// Parse markdown-style links in text and render them as clickable links
const renderTextWithLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }

        parts.push(
            <a
                key={match.index}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors duration-200"
            >
                {match[1]}
            </a>
        );

        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
};

const ShowcasePage = () => {
    const [showcaseData, setShowcaseData] = useState<ShowcaseItem[]>([]);
    const [activeId, setActiveId] = useState<number | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShowcaseData = async () => {
            try {
                const response = await fetch('./data/showcase.json');
                const data: ShowcaseItem[] = await response.json();
                // Most recent first
                const sorted = [...data].sort((a, b) => b.id - a.id);
                setShowcaseData(sorted);
                if (sorted.length > 0) setActiveId(sorted[0].id);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching showcase data:', error);
                setLoading(false);
            }
        };

        fetchShowcaseData();
    }, []);

    const activeItem = showcaseData.find(item => item.id === activeId) ?? showcaseData[0];

    const getAvailableLanguages = (item: ShowcaseItem | undefined) => {
        if (!item || item.videos.length === 0) return [];
        return item.videos[0].urls.map(url => url.language);
    };

    const getCurrentVideoUrl = (item: ShowcaseItem | undefined) => {
        if (!item || item.videos.length === 0) return '';
        const video = item.videos[0];
        const selectedVideo = video.urls.find(url => url.language === selectedLanguage);
        return selectedVideo ? selectedVideo.url : video.urls[0]?.url || '';
    };

    const allLanguages = Array.from(
        new Set(showcaseData.flatMap(item => getAvailableLanguages(item)))
    );

    const activeLanguages = getAvailableLanguages(activeItem);
    // Fall back to the first available language when the selected one isn't offered
    const effectiveLanguage = activeLanguages.includes(selectedLanguage)
        ? selectedLanguage
        : activeLanguages[0];
    const currentUrl = getCurrentVideoUrl(activeItem);

    if (loading) {
        return (
            <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-pulse">
                        <div className="h-4 w-40 bg-gray-200 rounded mx-auto mb-6"></div>
                        <div className="h-12 w-3/4 bg-gray-200 rounded mx-auto mb-16"></div>
                        <div className="rounded-3xl bg-gray-900/90 p-6 sm:p-8">
                            <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8">
                                <div className="aspect-video bg-gray-800 rounded-xl"></div>
                                <div className="space-y-4">
                                    <div className="h-4 w-24 bg-gray-800 rounded"></div>
                                    <div className="h-8 w-full bg-gray-800 rounded"></div>
                                    <div className="h-8 w-2/3 bg-gray-800 rounded"></div>
                                </div>
                            </div>
                        </div>
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
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm font-semibold tracking-[0.25em] uppercase text-green-600 mb-4">
                        Research Showcase
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight">
                        Our research,{' '}
                        <span className="text-green-600">in your language.</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Video presentations of SustAInd papers, dubbed for India. Pick a
                        presentation, pick a language, press play.
                    </p>
                    {showcaseData.length > 0 && (
                        <p className="mt-5 text-sm text-gray-500 tracking-wide">
                            {showcaseData.length} presentation{showcaseData.length !== 1 ? 's' : ''}
                            <span className="mx-2 text-gray-300">·</span>
                            {allLanguages.length} language{allLanguages.length !== 1 ? 's' : ''}
                        </p>
                    )}
                </motion.div>

                {/* Screening Room */}
                {activeItem && (
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        aria-label="Video screening room"
                        className="relative rounded-3xl overflow-hidden bg-[#0a120d] shadow-2xl"
                    >
                        {/* Ambient glow behind the player */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-500/15 blur-3xl"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-40 -right-24 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"
                        />

                        <div className="relative grid lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-10 p-5 sm:p-8 lg:p-10">
                            {/* Player */}
                            <div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentUrl}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.35 }}
                                        className="aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10 shadow-[0_0_60px_-15px_rgba(34,197,94,0.35)]"
                                    >
                                        <video
                                            key={currentUrl}
                                            controls
                                            preload="metadata"
                                            className="w-full h-full"
                                        >
                                            <source src={currentUrl} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </motion.div>
                                </AnimatePresence>

                                {activeItem.videos.length > 0 && (
                                    <p className="mt-4 text-sm text-gray-400">
                                        {renderTextWithLinks(activeItem.videos[0].title)}
                                    </p>
                                )}
                            </div>

                            {/* Info + queue rail */}
                            <div className="flex flex-col min-w-0">
                                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-green-400 mb-3">
                                    Now showing
                                </p>
                                <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-6">
                                    {activeItem.title}
                                </h2>

                                {/* Language switcher */}
                                {activeLanguages.length > 0 && (
                                    <div className="mb-8">
                                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-3">
                                            Watch in
                                        </p>
                                        <div className="flex flex-wrap gap-2" role="group" aria-label="Choose language">
                                            {activeLanguages.map((language) => {
                                                const isActive = language === effectiveLanguage;
                                                return (
                                                    <motion.button
                                                        key={language}
                                                        onClick={() => setSelectedLanguage(language)}
                                                        aria-pressed={isActive}
                                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 ${isActive
                                                            ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                                                            : 'text-gray-300 ring-1 ring-white/15 hover:ring-orange-400/60 hover:text-white'
                                                            }`}
                                                        whileHover={{ scale: 1.04 }}
                                                        whileTap={{ scale: 0.96 }}
                                                    >
                                                        <span className="block leading-tight">
                                                            {NATIVE_LANGUAGE_NAMES[language] ?? language}
                                                        </span>
                                                        {NATIVE_LANGUAGE_NAMES[language] &&
                                                            NATIVE_LANGUAGE_NAMES[language] !== language && (
                                                                <span className={`block text-[10px] leading-tight ${isActive ? 'text-orange-100' : 'text-gray-500'}`}>
                                                                    {language}
                                                                </span>
                                                            )}
                                                    </motion.button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Queue */}
                                {showcaseData.length > 1 && (
                                    <div className="mt-auto">
                                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-3">
                                            All presentations
                                        </p>
                                        <ul className="space-y-2">
                                            {showcaseData.map((item, index) => {
                                                const isCurrent = item.id === activeItem.id;
                                                return (
                                                    <motion.li
                                                        key={item.id}
                                                        initial={{ opacity: 0, x: 16 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                                                    >
                                                        <button
                                                            onClick={() => setActiveId(item.id)}
                                                            aria-current={isCurrent ? 'true' : undefined}
                                                            className={`w-full text-left rounded-xl px-4 py-3 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 ${isCurrent
                                                                ? 'bg-white/10 ring-1 ring-green-400/40'
                                                                : 'hover:bg-white/5 ring-1 ring-transparent'
                                                                }`}
                                                        >
                                                            <span className="flex items-start gap-3">
                                                                <span
                                                                    aria-hidden="true"
                                                                    className={`mt-1 shrink-0 w-2 h-2 rounded-full ${isCurrent ? 'bg-green-400' : 'bg-gray-600'}`}
                                                                />
                                                                <span className="min-w-0">
                                                                    <span className={`block text-sm font-medium leading-snug ${isCurrent ? 'text-white' : 'text-gray-300'}`}>
                                                                        {item.title}
                                                                    </span>
                                                                    <span className="block mt-1 text-xs text-gray-500">
                                                                        {getAvailableLanguages(item).length} language{getAvailableLanguages(item).length !== 1 ? 's' : ''}
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </motion.li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.section>
                )}

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
