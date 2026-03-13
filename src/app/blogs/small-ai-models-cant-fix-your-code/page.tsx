'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mt-10 mb-4">
            {children}
        </h2>
    );
}

function SubTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-8 mb-3">
            {children}
        </h3>
    );
}

export default function SmallModelsBlog() {
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


                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Small AI models can&apos;t always fix your code. Here&apos;s why that&apos;s interesting.
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By Arihant Tripathy</span>
                        <span className="hidden sm:inline">•</span>
                        <span>March 13, 2026</span>
                        <span className="hidden sm:inline">•</span>
                        <span>12 min read</span>
                    </div>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-none"
                >
                    <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg first-letter:text-5xl first-letter:font-bold first-letter:text-green-600 first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                        There&apos;s a version of AI-powered software development that actually makes sense: small models running locally,
                        quietly triaging your GitHub backlog overnight, without a cloud bill and without your proprietary code leaving
                        the building. It&apos;s a reasonable thing to want, and when you describe it to most engineers they immediately see
                        the appeal. The problem is that when we actually tried to build it, using real agentic frameworks and
                        real small models on a real benchmark of bugs, almost nothing worked.
                    </p>

                    <SectionTitle>What we&apos;re even talking about</SectionTitle>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Agentic coding tools are AI systems that don&apos;t just autocomplete. They act autonomously: reading relevant
                        files from a GitHub issue, writing a patch, running tests, and submitting a fix without a human in the loop.
                        SWE-Agent and OpenHands are two of the more established examples, and they&apos;ve shown genuinely impressive
                        results on standard benchmarks.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        But they generally assume a powerful model underneath, GPT-4 class or similar. That works if you can accept
                        the cost and privacy tradeoffs. Many teams can&apos;t. Every token sent externally may include internal code, and
                        at scale those tokens become a real bill.
                    </p>

                    <div className="my-6 rounded-lg border border-gray-200 border-l-4 border-l-green-600 bg-green-50/50 p-5">
                        <p className="font-semibold text-gray-900 mb-3">Quick vocabulary</p>
                        <p className="text-gray-700 mb-2">
                            <strong>LLM:</strong> A large language model, typically cloud-hosted and expensive to run.
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>SLM:</strong> A small language model (often 1-5B params) that can run locally.
                        </p>
                        <p className="text-gray-700">
                            <strong>Agentic framework:</strong> The orchestration layer that lets AI use tools (read files, run commands,
                            write code) across repeated loops.
                        </p>
                    </div>

                    <SectionTitle>How we ran the experiment</SectionTitle>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        We took four real agentic frameworks and swapped their underlying models for small,
                        locally-runnable ones. Then we ran each setup 150 times, measuring energy, runtime, token counts,
                        and memory use. That level of repetition is what separates an anecdote from a credible empirical result.
                    </p>

                    <SubTitle>The four frameworks</SubTitle>
                    <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
                        <table className="w-full text-left text-sm text-gray-900">
                            <thead className="bg-gray-100 text-gray-900">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Framework</th>
                                    <th className="px-4 py-3 font-medium">Character</th>
                                    <th className="px-4 py-3 font-medium">Approach</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-200">
                                    <td className="px-4 py-3 font-semibold">SWE-Agent</td>
                                    <td className="px-4 py-3">Methodical</td>
                                    <td className="px-4 py-3">Reads broadly before touching code</td>
                                </tr>
                                <tr className="border-t border-gray-200 bg-gray-50">
                                    <td className="px-4 py-3 font-semibold">OpenHands</td>
                                    <td className="px-4 py-3">Generalist</td>
                                    <td className="px-4 py-3">Browser + terminal + editor, broader tool usage</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="px-4 py-3 font-semibold">Mini SWE Agent</td>
                                    <td className="px-4 py-3">Stripped down</td>
                                    <td className="px-4 py-3">Tighter loops and fewer prompts</td>
                                </tr>
                                <tr className="border-t border-gray-200 bg-gray-50">
                                    <td className="px-4 py-3 font-semibold">AutoCodeRover</td>
                                    <td className="px-4 py-3">Targeted</td>
                                    <td className="px-4 py-3">Searches for relevant files before editing</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <SubTitle>The two small models</SubTitle>
                    <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
                        <table className="w-full text-left text-sm text-gray-900">
                            <thead className="bg-gray-100 text-gray-900">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Model</th>
                                    <th className="px-4 py-3 font-medium">Size</th>
                                    <th className="px-4 py-3 font-medium">Made by</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-200">
                                    <td className="px-4 py-3 font-semibold">Gemma-3 4B</td>
                                    <td className="px-4 py-3">4 billion parameters</td>
                                    <td className="px-4 py-3">Google</td>
                                </tr>
                                <tr className="border-t border-gray-200 bg-gray-50">
                                    <td className="px-4 py-3 font-semibold">Qwen 1.7B</td>
                                    <td className="px-4 py-3">1.7 billion parameters</td>
                                    <td className="px-4 py-3">Alibaba</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        The benchmark was SWE-bench Verified Mini, a curated set of real GitHub issues from real Python projects.
                        That means the tasks represent bugs that developers actually struggled with.
                    </p>

                    <SectionTitle>What happened: roughly nothing</SectionTitle>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Across most configurations, the resolution rate was effectively zero. Systems ran, consumed energy,
                        generated tokens, iterated through framework loops, and returned almost no correct patches.
                        AutoCodeRover often spent roughly 24-27 minutes per run with little useful output.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                        <div className="rounded-lg border border-gray-200 p-4 text-center bg-white">
                            <p className="text-3xl font-bold text-green-600">~0%</p>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">Task resolution in most setups</p>
                        </div>
                        <div className="rounded-lg border border-gray-200 p-4 text-center bg-white">
                            <p className="text-3xl font-bold text-green-600">24-27</p>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">Minutes per AutoCodeRover run</p>
                        </div>
                        <div className="rounded-lg border border-gray-200 p-4 text-center bg-white">
                            <p className="text-3xl font-bold text-green-600">4 x 2 x 150</p>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">Frameworks x SLMs x runs</p>
                        </div>
                        <div className="rounded-lg border border-gray-200 p-4 text-center bg-white">
                            <p className="text-3xl font-bold text-green-600">Energy != value</p>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">Compute spent without useful patches</p>
                        </div>
                    </div>

                    <blockquote className="my-8 rounded-lg border-l-4 border-l-green-600 bg-gray-50 px-6 py-5 italic text-gray-800">
                        Framework architecture is the primary driver of energy consumption, but this energy is largely wasted due to the
                        SLMs&apos; limited reasoning.
                    </blockquote>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        The framework stayed busy while the model lost the thread. The system kept requesting more steps and burning
                        tokens, but there was no robust mechanism to recognize failure and cut losses early.
                    </p>

                    <SubTitle>Two separate problems, often conflated</SubTitle>
                    <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
                        <table className="w-full text-left text-sm text-gray-900">
                            <thead className="bg-gray-100 text-gray-900">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Problem</th>
                                    <th className="px-4 py-3 font-medium">What is happening</th>
                                    <th className="px-4 py-3 font-medium">Where to fix it</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-200">
                                    <td className="px-4 py-3">
                                        Reasoning failure
                                        <span className="ml-2 inline-block rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">Model</span>
                                    </td>
                                    <td className="px-4 py-3">SLM cannot solve the bug reliably</td>
                                    <td className="px-4 py-3">Model capability and training</td>
                                </tr>
                                <tr className="border-t border-gray-200 bg-gray-50">
                                    <td className="px-4 py-3">
                                        Energy waste
                                        <span className="ml-2 inline-block rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">Framework</span>
                                    </td>
                                    <td className="px-4 py-3">Orchestrator fails to detect flailing and stop early</td>
                                    <td className="px-4 py-3">Framework design and control logic</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Improving the small model alone does not automatically solve orchestration waste. These are related, but separate,
                        engineering problems.
                    </p>

                    <SectionTitle>Why this matters</SectionTitle>
                    <SubTitle>The energy argument cuts both ways</SubTitle>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        SLMs are often cheaper per token, but cost per successful task is what matters. A cheap model that finishes
                        0% of tasks is still expensive in practice.
                    </p>

                    <SubTitle>The privacy case for local AI is real</SubTitle>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        For teams with strict compliance boundaries, local deployment is not just preference, it can be a requirement.
                        That keeps this line of work highly relevant even when current results are weak.
                    </p>

                    <SubTitle>False positives are a serious risk</SubTitle>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Some runs looked successful but produced broken patches. That means every autonomous fix should be treated as
                        untrusted until independently verified by external CI and stronger checks.
                    </p>

                    <SectionTitle>The short version, by role</SectionTitle>
                    <div className="overflow-x-auto mb-8 rounded-lg border border-gray-200">
                        <table className="w-full text-left text-sm text-gray-900">
                            <thead className="bg-gray-100 text-gray-900">
                                <tr>
                                    <th className="px-4 py-3 font-medium">If you are...</th>
                                    <th className="px-4 py-3 font-medium">Takeaway</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-200">
                                    <td className="px-4 py-3">Building local AI coding tools</td>
                                    <td className="px-4 py-3">Do not just downsize an LLM stack. Build SLM-first orchestration.</td>
                                </tr>
                                <tr className="border-t border-gray-200 bg-gray-50">
                                    <td className="px-4 py-3">Evaluating tools for cost</td>
                                    <td className="px-4 py-3">Optimize for successful task completion, not token price.</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="px-4 py-3">Working under strict data policy</td>
                                    <td className="px-4 py-3">Local agentic AI is valid, but framework maturity is not there yet.</td>
                                </tr>
                                <tr className="border-t border-gray-200 bg-gray-50">
                                    <td className="px-4 py-3">Researching this area</td>
                                    <td className="px-4 py-3">SWEnergy provides a strong, reproducible baseline.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="rounded-xl bg-gray-900 text-gray-100 p-6 sm:p-7 my-8">
                        <h2 className="text-lg font-semibold text-green-300 mb-3">TL;DR</h2>
                        <ul className="list-disc list-outside ml-5 space-y-2 text-sm sm:text-base">
                            <li>Existing agentic coding frameworks assume strong cloud models.</li>
                            <li>When swapped with small local models, task resolution is near zero in this study.</li>
                            <li>Model reasoning failure and orchestration waste are distinct problems.</li>
                            <li>False positives make independent verification mandatory.</li>
                            <li>The likely path forward is SLM-native framework design, not just better small models.</li>
                        </ul>
                    </div>

                    <SectionTitle>What our paper is actually doing</SectionTitle>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Benchmark records often get more attention, but practical negative results like this are more useful for
                        engineering decisions. Knowing why local agentic issue resolution currently fails gives teams a concrete roadmap
                        for what needs to change.
                    </p>

                    <p className="text-gray-700 mb-8 leading-relaxed">
                        The private, cheap, unattended version of local agentic AI that many teams want is not ready yet. This work helps
                        define the missing pieces.
                    </p>

                    <hr className="my-8 border-t border-gray-300" />

                    <p className="text-sm text-gray-600 leading-relaxed">
                        <strong>Paper: </strong>
                        <a
                            href="https://arihant25.github.io/research/swenergy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-700 underline hover:text-green-900"
                        >
                            SWEnergy
                        </a>
                        . Accepted at AGENTS workshop at ICSE 2026!
                    </p>
                </motion.article>

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