'use client';

import { motion } from 'framer-motion';

interface Blog {
    id: number;
    title: string;
    description: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
}

interface BlogModalProps {
    blog: Blog;
    isOpen: boolean;
    onClose: () => void;
}

export function BlogModal({ blog, isOpen, onClose }: BlogModalProps) {
    if (!isOpen) return null;

    const formatContent = (content: string) => {
        // Simple markdown-like formatting
        return content
            .split('\n\n')
            .map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                    return (
                        <h2 key={index} className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                            {paragraph.replace('## ', '')}
                        </h2>
                    );
                }
                if (paragraph.startsWith('### ')) {
                    return (
                        <h3 key={index} className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">
                            {paragraph.replace('### ', '')}
                        </h3>
                    );
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                        <p key={index} className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">
                            {paragraph.replace(/\*\*/g, '')}
                        </p>
                    );
                }
                if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                    return (
                        <ul key={index} className="list-disc list-inside mb-3 sm:mb-4 space-y-1 sm:space-y-2">
                            {items.map((item, i) => (
                                <li key={i} className="text-gray-700 text-sm sm:text-base">
                                    {item.replace('- ', '')}
                                </li>
                            ))}
                        </ul>
                    );
                }
                return (
                    <p key={index} className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                        {paragraph}
                    </p>
                );
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-lg sm:rounded-lg max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start">
                    <div className="flex-1 mb-4 sm:mb-0">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 pr-2">{blog.title}</h1>
                        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
                            <span>By {blog.author}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{new Date(blog.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-xl sm:text-2xl font-bold self-end sm:self-start"
                    >
                        ×
                    </button>
                </div>

                <div className="p-4 sm:p-6 overflow-y-auto max-h-[75vh] sm:max-h-[70vh]">
                    <div className="prose prose-sm sm:prose-lg max-w-none">
                        {formatContent(blog.content)}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

interface BlogCardProps {
    blog: Blog;
    onClick: () => void;
}

export function BlogCard({ blog, onClick }: BlogCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            onClick={onClick}
        >
            <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span>{blog.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(blog.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                    {blog.title}
                </h2>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    {blog.description}
                </p>

                <div className="flex items-center text-orange-600 font-medium hover:text-orange-700">
                    Read more
                    <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>
        </motion.article>
    );
}
