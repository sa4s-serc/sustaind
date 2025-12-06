'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import type { Components } from 'react-markdown';
import React from 'react';

// Helper to replace "SustAInd" occurrences (case-insensitive) with styled JSX
const highlightSustAInd = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child, index) => {
        if (typeof child === 'string') {
            // Split on case-insensitive 'SustAInd' and keep separators
            const parts = child.split(/(SustAInd)/gi);
            return parts.map((part, i) => {
                if (/^sustaind$/i.test(part)) {
                    return (
                        <span key={`${index}-${i}`} className="font-semibold">
                            <span className="text-green-600">Sust</span>
                            <span className="text-orange-500">AInd</span>
                        </span>
                    );
                }
                return part;
            });
        }

        if (React.isValidElement(child)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const props = (child as React.ReactElement<any>).props;
            if (props?.children) {
                return React.cloneElement(child, { ...props }, highlightSustAInd(props.children));
            }
        }

        return child;
    });
};

// Custom markdown components with proper styling
const markdownComponents: Components = {
    h1: ({ children }) => (
        <h1 className="text-2xl sm:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
            {highlightSustAInd(children)}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
            {highlightSustAInd(children)}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">
            {highlightSustAInd(children)}
        </h3>
    ),
    h4: ({ children }) => (
        <h4 className="text-base sm:text-lg font-semibold text-gray-800 mt-3 sm:mt-4 mb-2">
            {highlightSustAInd(children)}
        </h4>
    ),
    p: ({ children }) => (
        <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
            {highlightSustAInd(children)}
        </p>
    ),
    ul: ({ children }) => (
        <ul className="list-disc list-outside ml-6 mb-4 sm:mb-5 space-y-2">
            {highlightSustAInd(children)}
        </ul>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal list-outside ml-6 mb-4 sm:mb-5 space-y-2">
            {highlightSustAInd(children)}
        </ol>
    ),
    li: ({ children }) => (
        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {highlightSustAInd(children)}
        </li>
    ),
    a: ({ href, children }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
        >
            {highlightSustAInd(children)}
        </a>
    ),
    strong: ({ children }) => (
        <strong className="font-semibold text-gray-900">{highlightSustAInd(children)}</strong>
    ),
    em: ({ children }) => (
        <em className="italic text-gray-700">{highlightSustAInd(children)}</em>
    ),
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-green-500 pl-4 py-2 my-4 bg-green-50 italic text-gray-700">
            {highlightSustAInd(children)}
        </blockquote>
    ),
    code: ({ className, children }) => {
        const isInline = !className;
        if (isInline) {
            return (
                <code className="bg-gray-100 text-green-700 px-1.5 py-0.5 rounded text-sm font-mono">
                    {highlightSustAInd(children)}
                </code>
            );
        }
        return (
            <code className="block bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4">
                {highlightSustAInd(children)}
            </code>
        );
    },
    pre: ({ children }) => (
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4">
            {highlightSustAInd(children)}
        </pre>
    ),
    hr: () => (
        <hr className="my-6 sm:my-8 border-t border-gray-300" />
    ),
    table: ({ children }) => (
        <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse border border-gray-300">
                {highlightSustAInd(children)}
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
            {highlightSustAInd(children)}
        </th>
    ),
    td: ({ children }) => (
        <td className="px-4 py-2 text-gray-700 border border-gray-300">
            {highlightSustAInd(children)}
        </td>
    ),
    sup: ({ children }) => (
        <sup className="text-green-600 font-medium">{children}</sup>
    ),
};

export default function WaitHowMuchDoesAICostBlog() {
    const blog = {
        title: "Wait, How Much Does That AI Agent Actually Cost?",
        author: "Aneetta Sara Shany & Chandrasekar S",
        date: "2025-12-05",
        readTime: "5 min read",
        content: `**A candid conversation on the launch of Project SustAInd.**

*(Scene: Two Junior Research Fellows, Aneetta and Chandrasekar, taking a break at the Software Engineering Research Center (SERC) Lab, IIIT Hyderabad.)*

*Aneetta:*
Okay, Chandru, serious question. I was scrolling through my phone today, and everyone is obsessed with "Agentic AI". Autonomous agents planning trips, writing code, calling tools... it's everywhere. But is anyone talking about the bill?

*Chandrasekar:*
The cloud bill? Or the electricity bill?

*Aneetta:*
Both! And the carbon bill. Think about it! AI is no longer just a specialized tool for isolated tasks, it has become the foundational fabric running through every industry. And specifically with Agentic AI, we aren't just looking at systems that predict text anymore. We are looking at systems that act. They have the potential to become the active engine behind education, healthcare, governance, you name it.

*Chandrasekar:*
Exactly. And that's the scary part. [According to a study, training a single state-of-the-art AI model can emit as much carbon dioxide as the lifetime emissions of five cars](https://www.technologyreview.com/2019/06/06/239031/training-a-single-ai-model-can-emit-as-much-carbon-as-five-cars-in-their-lifetimes/). But agents are worse. They don't just answer once; they loop, they reason, they retry. [On an average, even a simple generative query consumes nearly 10 times the energy of a standard web search](https://www.goldmansachs.com/insights/articles/AI-poised-to-drive-160-increase-in-power-demand).

*Aneetta:*
And that's exactly why we're here, right? Welcome to [**SustAInd**](https://sa4s-serc.github.io/sustaind/) (Sustainable AI for India).

*Chandrasekar:*
Finally! It feels good to officially talk about it. For those reading this who don't know us, we are a government-backed initiative supported by [ANRF](https://www.anrfonline.in/ANRF/HomePage) and [PM-ECRG](https://www.anrfonline.in/ANRF/ecrg_anrf), led by Dr. Karthik Vaidhyanathan here at the [SA4S Research Group](https://sa4s-serc.github.io/), [SERC lab](https://serc.iiit.ac.in/), [IIIT Hyderabad](https://www.iiit.ac.in/).

*Aneetta:*
The mission is huge. We aren't just trying to shrink the models. We are trying to fix the software ecosystem around it. But Chandru, explain it to the readers: why is this different from just "buying better GPUs"?

*Chandrasekar:*
Hardware solves how fast the system runs, but software decides how efficiently it runs. It's the invisible layer where we usually lose the most energy. We are building a framework based on three pillars, and we need all three to work together:

🌍**Environmental:** *We need to measure the carbon footprint not just when we train the model, but when the software actually runs.*

💰**Economic:** *This is the silent killer. [Did you know nearly 85% of AI projects fail to deliver value?](https://www.forbes.com/councils/forbestechcouncil/2024/11/15/why-85-of-your-ai-models-may-fail/). If it costs too much to run, it dies.*

⚙️**Technical:** *Code rot. Dependency hell. If the system isn't modular and maintainable, it's not sustainable.*

*Aneetta:*
That's the "Software-Centric" approach we keep talking about. It's like building a house. You can have the best bricks (*the AI Model*), but if the construction (*the Software Development*) is bad, the house leaks energy and eventually collapses.

*Chandrasekar:*
Precisely. That's why our deliverables aren't just papers. We are building:

**Energy Profiling Tools:** *So developers can actually see their energy consumption, cost, and technical debt in real-time.*

**Green AI Design Guidelines:** *A playbook for architects and policymakers to ensure every system balances all three pillars.*

**A GreenAI Lab:** *Right here at IIITH to validate our novel approaches through real-world experiments.*

*Aneetta:*
Speaking of novel approaches, we've already started! We presented our first paper, [HarmonE, at ECSA 2025](https://link.springer.com/chapter/10.1007/978-3-032-02138-0_3). It's our first step toward architectural patterns that actually care about energy.

*Chandrasekar:*
It's a team effort, obviously. It's not just us.

*Aneetta:*
Oh, definitely. [It's Dr. Karthik steering the ship, plus Akhila (PhD), Hiya (MS), and the dual-degree wizards Shaunak and Arihant.](https://sa4s-serc.github.io/sustaind/people) It's a mix of software engineers, AI researchers, and system architects.

*Chandrasekar:*
So, what's the ask, Aneetta? We want people to get involved, right?

*Aneetta:*
100%. This isn't just an academic exercise. If you are a developer, we want you to test our profiling tools. If you are an educator, we want to help you teach "Green AI" concepts. If you are a policymaker, we want to provide the data you need to set standards for India.

*Chandrasekar:*
Agentic AI is the future, no doubt. But whether that future is expensive and dirty, or efficient and sustainable... that depends on how we build the software today.

*Aneetta:*
Well put. So, to our readers: Watch this space. We'll be sharing our tools, our failures, and our wins.

*Chandrasekar:*
And if you want to collaborate, challenge our ideas, or just geek out over sustainability metrics, reach out to us.

---

## Join the SustAInd Mission !!

Explore team details, updates, and publications on our official page: 🔗[https://sa4s-serc.github.io/sustaind/](https://sa4s-serc.github.io/sustaind/)

---

*Aneetta:*
So, Chandru… our first blog published?

*Chandrasekar:*
Yep! And hopefully, the first of many. Onward to building a greener AI ecosystem for India. 🌱`,
    };

    // Helper to render dialogue blocks with colored bars
    const renderBlogContent = (content: string) => {
        const lines = content.split('\n');
        const mergedBlocks: { type: 'dialogue' | 'text'; speaker?: string; content: string }[] = [];

        let currentSpeaker: string | null = null;
        let currentBuffer: string[] = [];
        let textBuffer: string[] = [];

        const flushDialogue = () => {
            if (currentSpeaker && currentBuffer.length > 0) {
                mergedBlocks.push({
                    type: 'dialogue',
                    speaker: currentSpeaker,
                    content: currentBuffer.join('\n').trim()
                });
                currentBuffer = [];
            }
        };

        const flushText = () => {
            if (textBuffer.length > 0) {
                mergedBlocks.push({
                    type: 'text',
                    content: textBuffer.join('\n').trim()
                });
                textBuffer = [];
            }
        };

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const speakerMatch = line.match(/^\*(Aneetta|Chandrasekar):\*$/);

            if (speakerMatch) {
                flushText();
                flushDialogue();
                currentSpeaker = speakerMatch[1];
            } else if (line.trim() === '---') {
                flushDialogue();
                currentSpeaker = null;
                textBuffer.push(line);
            } else {
                if (currentSpeaker) {
                    currentBuffer.push(line);
                } else {
                    textBuffer.push(line);
                }
            }
        }

        flushDialogue();
        flushText();

        return mergedBlocks.map((block, idx) => {
            if (block.type === 'dialogue') {
                const color = block.speaker === 'Aneetta' ? 'bg-orange-400' : 'bg-green-500';
                return (
                    <div key={idx} className="flex items-start my-3">
                        <div className={`${color} w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1`} style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={markdownComponents}
                            >
                                {block.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                );
            }
            return (
                <div key={idx} className="my-4">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={markdownComponents}
                    >
                        {block.content}
                    </ReactMarkdown>
                </div>
            );
        });
    };

    return (
        <div className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <Link
                        href="/blogs"
                        className="text-green-600 hover:text-green-700 mb-6 inline-flex items-center gap-1"
                    >
                        ← Back to Blogs
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {blog.title}
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By {blog.author}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>
                            {new Date(blog.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span>{blog.readTime}</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-sm sm:prose-base max-w-none"
                >
                    {renderBlogContent(blog.content)}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-gray-200"
                >
                    <Link
                        href="/blogs"
                        className="text-green-600 hover:text-green-700 inline-flex items-center gap-1"
                    >
                        ← Back to Blogs
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
