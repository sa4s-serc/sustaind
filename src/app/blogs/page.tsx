'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogPreview {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
    readTime: string;
    slug: string;
}

const blogs: BlogPreview[] = [
    {
        id: 2,
        title: "Wait, How Much Does That AI Agent Actually Cost?",
        description: "A candid conversation on the launch of Project SustAInd between two Junior Research Fellows, Aneetta and Chandrasekar, at the Software Engineering Research Center (SERC) Lab, IIIT Hyderabad.",
        author: "Aneetta Sara Shany & Chandrasekar S",
        date: "2025-12-05",
        readTime: "5 min read",
        slug: "wait-how-much-does-ai-cost",
    },
    {
        id: 1,
        title: "Enhancing Sustainability of Modern Software Systems through Self-adaptive Architectures",
        description: "Dr. Karthik Vaidhyanathan explains the concept of software sustainability and how his group's research on self-adaptation is contributing towards greener and sustainable software.",
        author: "Dr. Karthik Vaidhyanathan",
        date: "2025-01-17",
        readTime: "10 min read",
        slug: "enhancing-sustainability",
    },
];

function BlogCard({ blog }: { blog: BlogPreview }) {
    return (
        <Link href={`/blogs/${blog.slug}`}>
            <motion.div
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 cursor-pointer transition-all hover:shadow-lg"
            >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                    {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 space-y-1 sm:space-y-0 sm:space-x-4">
                    <span>{blog.author}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{blog.readTime}</span>
                </div>
            </motion.div>
        </Link>
    );
}

export default function Blogs() {

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
                        Our Blog
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Insights, research findings, and thoughts from the SustAInd team on sustainable AI,
                        green software architecture, and the future of responsible technology.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid gap-8 md:gap-10"
                >
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <BlogCard blog={blog} />
                        </motion.div>
                    ))}
                </motion.div>

                {blogs.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="text-gray-400 mb-4">
                            <svg
                                className="w-20 h-20 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                />
                            </svg>
                        </div>
                        <p className="text-gray-400 text-lg">No blogs yet</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
