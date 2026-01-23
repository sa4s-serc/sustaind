'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function WaitHowMuchDoesAICostBlog() {
    const basePath = process.env.NODE_ENV === 'production' ? '/sustaind' : '';

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
                        Wait, How Much Does That AI Agent Actually Cost?
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By Aneetta Sara Shany & Chandrasekar S</span>
                        <span className="hidden sm:inline">•</span>
                        <span>December 5, 2025</span>
                        <span className="hidden sm:inline">•</span>
                        <span>5 min read</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-sm sm:prose-base max-w-none"
                >
                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        <strong className="font-semibold text-gray-900">A candid conversation on the launch of Project <span className="font-semibold"><span className="text-green-600">Sust</span><span className="text-orange-500">AInd</span></span>.</strong>
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base italic">
                        (Scene: Two Junior Research Fellows, Aneetta and Chandrasekar, taking a break at the Software Engineering Research Center (SERC) Lab, IIIT Hyderabad.)
                    </p>

                    <div className="my-6 sm:my-8">
                        <Image
                            src={`${basePath}/data/images/blog/ai-agent-how-cost.png`}
                            alt="AI Agent Conversation"
                            width={800}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-orange-400 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                Okay, Chandru, serious question. I was scrolling through my phone today, and everyone is obsessed with "Agentic AI". Autonomous agents planning trips, writing code, calling tools... it&apos;s everywhere. But is anyone talking about the bill?
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-green-500 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                The cloud bill? Or the electricity bill?
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-orange-400 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                Both! And the carbon bill. Think about it! AI is no longer just a specialized tool for isolated tasks, it has become the foundational fabric running through every industry. And specifically with Agentic AI, we aren&apos;t just looking at systems that predict text anymore. We are looking at systems that act. They have the potential to become the active engine behind education, healthcare, governance, you name it.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-green-500 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                Exactly. And that&apos;s the scary part. <a
                                    href="https://www.technologyreview.com/2019/06/06/239031/training-a-single-ai-model-can-emit-as-much-carbon-as-five-cars-in-their-lifetimes/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
                                >
                                    According to a study, training a single state-of-the-art AI model can emit as much carbon dioxide as the lifetime emissions of five cars
                                </a>. But agents are worse. They don&apos;t just answer once; they loop, they reason, they retry. <a
                                    href="https://www.goldmansachs.com/insights/articles/AI-poised-to-drive-160-increase-in-power-demand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
                                >
                                    On an average, even a simple generative query consumes nearly 10 times the energy of a standard web search
                                </a>.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-orange-400 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                And that&apos;s exactly why we&apos;re here, right? Welcome to <a
                                    href="https://sa4s-serc.github.io/sustaind/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors font-semibold"
                                >
                                    <span className="text-green-600">Sust</span><span className="text-orange-500">AInd</span>
                                </a> (Sustainable AI for India).
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-green-500 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                Finally! It feels good to officially talk about it. For those reading this who don&apos;t know us, we are a government-backed initiative supported by <a
                                    href="https://www.anrfonline.in/ANRF/HomePage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
                                >
                                    ANRF
                                </a> and <a
                                    href="https://www.anrfonline.in/ANRF/ecrg_anrf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
                                >
                                    PM-ECRG
                                </a>, led by Dr. Karthik Vaidhyanathan here at the <a
                                    href="https://sa4s-serc.github.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
                                >
                                    SA4S Research Group
                                </a>, <a
                                    href="https://serc.iiit.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
                                >
                                    SERC lab
                                </a>, <a
                                    href="https://www.iiit.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
                                >
                                    IIIT Hyderabad
                                </a>.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-orange-400 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                The mission is huge. We aren&apos;t just trying to shrink the models. We are trying to fix the software ecosystem around it. But Chandru, explain it to the readers: why is this different from just &quot;buying better GPUs&quot;?
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-green-500 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                Hardware solves how fast the system runs, but software decides how efficiently it runs. It&apos;s the invisible layer where we usually lose the most energy. We are building a framework based on three pillars, and we need all three to work together:
                            </p>
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                🌍<strong className="font-semibold text-gray-900">Environmental:</strong> <em className="italic text-gray-700">We need to measure the carbon footprint not just when we train the model, but when the software actually runs.</em>
                            </p>
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                💰<strong className="font-semibold text-gray-900">Economic:</strong> <em className="italic text-gray-700">This is the silent killer. <a
                                    href="https://www.forbes.com/councils/forbestechcouncil/2024/11/15/why-85-of-your-ai-models-may-fail/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
                                >
                                    Did you know nearly 85% of AI projects fail to deliver value?
                                </a>. If it costs too much to run, it dies.</em>
                            </p>
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                ⚙️<strong className="font-semibold text-gray-900">Technical:</strong> <em className="italic text-gray-700">Code rot. Dependency hell. If the system isn&apos;t modular and maintainable, it&apos;s not sustainable.</em>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-orange-400 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                That&apos;s the &quot;Software-Centric&quot; approach we keep talking about. It&apos;s like building a house. You can have the best bricks (<em className="italic text-gray-700">the AI Model</em>), but if the construction (<em className="italic text-gray-700">the Software Development</em>) is bad, the house leaks energy and eventually collapses.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-green-500 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                Precisely. That&apos;s why our deliverables aren&apos;t just papers. We are building:
                            </p>
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                <strong className="font-semibold text-gray-900">Energy Profiling Tools:</strong> <em className="italic text-gray-700">So developers can actually see their energy consumption, cost, and technical debt in real-time.</em>
                            </p>
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                <strong className="font-semibold text-gray-900">Green AI Design Guidelines:</strong> <em className="italic text-gray-700">A playbook for architects and policymakers to ensure every system balances all three pillars.</em>
                            </p>
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                <strong className="font-semibold text-gray-900">A GreenAI Lab:</strong> <em className="italic text-gray-700">Right here at IIITH to validate our novel approaches through real-world experiments.</em>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-orange-400 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                Speaking of novel approaches, we&apos;ve already started! We presented our first paper, <a
                                    href="https://link.springer.com/chapter/10.1007/978-3-032-02138-0_3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
                                >
                                    HarmonE, at ECSA 2025
                                </a>. It&apos;s our first step toward architectural patterns that actually care about energy.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-green-500 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                It&apos;s a team effort, obviously. It&apos;s not just us.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-orange-400 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                Oh, definitely. <a
                                    href="https://sa4s-serc.github.io/sustaind/people"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
                                >
                                    It&apos;s Dr. Karthik steering the ship, plus Akhila (PhD), Hiya (MS), and the dual-degree wizards Shaunak and Arihant.
                                </a> It&apos;s a mix of software engineers, AI researchers, and system architects.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-green-500 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                So, what&apos;s the ask, Aneetta? We want people to get involved, right?
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-orange-400 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                100%. This isn&apos;t just an academic exercise. If you are a developer, we want you to test our profiling tools. If you are an educator, we want to help you teach &quot;Green AI&quot; concepts. If you are a policymaker, we want to provide the data you need to set standards for India.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-green-500 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                Agentic AI is the future, no doubt. But whether that future is expensive and dirty, or efficient and sustainable... that depends on how we build the software today.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-orange-400 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                Well put. So, to our readers: Watch this space. We&apos;ll be sharing our tools, our failures, and our wins.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-green-500 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                And if you want to collaborate, challenge our ideas, or just geek out over sustainability metrics, reach out to us.
                            </p>
                        </div>
                    </div>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                        Join the <span className="font-semibold"><span className="text-green-600">Sust</span><span className="text-orange-500">AInd</span></span> Mission !!
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Explore team details, updates, and publications on our official page: 🔗<a
                            href="https://sa4s-serc.github.io/sustaind/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"
                        >
                            https://sa4s-serc.github.io/sustaind/
                        </a>
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <div className="flex items-start my-3">
                        <div className="bg-orange-400 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                So, Chandru… our first blog published?
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start my-3">
                        <div className="bg-green-500 w-2 sm:w-3 h-full rounded-l-lg mr-4 mt-1" style={{ minHeight: '2.5rem' }}></div>
                        <div className="flex-1">
                            <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                                Yep! And hopefully, the first of many. Onward to building a greener AI ecosystem for India. 🌱
                            </p>
                        </div>
                    </div>
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
