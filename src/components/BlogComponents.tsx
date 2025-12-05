'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

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

// Custom markdown components with proper styling
const markdownComponents: Components = {
    h1: ({ children }) => (
        <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
            {children}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">
            {children}
        </h3>
    ),
    h4: ({ children }) => (
        <h4 className="text-base sm:text-lg font-semibold text-gray-800 mt-3 sm:mt-4 mb-2">
            {children}
        </h4>
    ),
    p: ({ children }) => (
        <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
            {children}
        </p>
    ),
    ul: ({ children }) => (
        <ul className="list-disc list-outside ml-6 mb-4 sm:mb-5 space-y-2">
            {children}
        </ul>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal list-outside ml-6 mb-4 sm:mb-5 space-y-2">
            {children}
        </ol>
    ),
    li: ({ children }) => (
        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {children}
        </li>
    ),
    a: ({ href, children }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
        >
            {children}
        </a>
    ),
    strong: ({ children }) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
        <em className="italic text-gray-700">{children}</em>
    ),
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-green-500 pl-4 py-2 my-4 bg-green-50 italic text-gray-700">
            {children}
        </blockquote>
    ),
    code: ({ className, children }) => {
        const isInline = !className;
        if (isInline) {
            return (
                <code className="bg-gray-100 text-green-700 px-1.5 py-0.5 rounded text-sm font-mono">
                    {children}
                </code>
            );
        }
        return (
            <code className="block bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4">
                {children}
            </code>
        );
    },
    pre: ({ children }) => (
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4">
            {children}
        </pre>
    ),
    hr: () => (
        <hr className="my-6 sm:my-8 border-t border-gray-300" />
    ),
    table: ({ children }) => (
        <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse border border-gray-300">
                {children}
            </table>
        </div>
    ),
    thead: ({ children }) => (
        <thead className="bg-green-50">{children}</thead>
    ),
    tbody: ({ children }) => (
        <tbody>{children}</tbody>
    ),
    tr: ({ children }) => (
        <tr className="border-b border-gray-300">{children}</tr>
    ),
    th: ({ children }) => (
        <th className="px-4 py-2 text-left font-semibold text-gray-800 border border-gray-300">
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className="px-4 py-2 text-gray-700 border border-gray-300">
            {children}
        </td>
    ),
    sup: ({ children }) => (
        <sup className="text-green-600 font-medium">{children}</sup>
    ),
};

export function BlogModal({ blog, isOpen, onClose }: BlogModalProps) {
    if (!isOpen) return null;

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
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={markdownComponents}
                        >
                            {blog.content}
                        </ReactMarkdown>
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
