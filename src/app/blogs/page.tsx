'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BlogCard, BlogModal } from '@/components/BlogComponents';

interface Blog {
    id: number;
    title: string;
    description: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
}

export default function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('./data/blogs.json');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const handleBlogClick = (blog: Blog) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBlog(null);
    };

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
                            <BlogCard blog={blog} onClick={() => handleBlogClick(blog)} />
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
                        <h3 className="text-xl font-medium text-gray-500 mb-2">No blog posts yet</h3>
                        <p className="text-gray-400">Check back soon for updates from our research team.</p>
                    </motion.div>
                )}

            </div>

            {selectedBlog && (
                <BlogModal
                    blog={selectedBlog}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}
