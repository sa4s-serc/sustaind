'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-7 sm:mt-9 mb-3 sm:mb-4">
            {children}
        </h2>
    );
}

function Paragraph({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
            {children}
        </p>
    );
}

function Code({ children }: { children: React.ReactNode }) {
    return (
        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.85em] text-green-700">
            {children}
        </code>
    );
}

function BlogImage({ src, alt }: { src: string; alt: string }) {
    const basePath = process.env.NODE_ENV === 'production' ? '/sustaind' : '';

    return (
        <img
            src={`${basePath}${src}`}
            alt={alt}
            className="w-full h-auto rounded-lg shadow-md my-6 sm:my-8"
        />
    );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
        >
            {children}
        </a>
    );
}

export default function EnergyCostBeforeYouRunBlog() {
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
                        Can Your Code Tell You How Much Energy It Will Burn Before You Even Run It?
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By Shailender Goyal</span>
                        <span className="hidden sm:inline">•</span>
                        <span>EASE 2026</span>
                        <span className="hidden sm:inline">•</span>
                        <span>7 min read</span>
                    </div>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-sm sm:prose-base max-w-none"
                >
                    <blockquote className="my-6 rounded-lg border-l-4 border-l-green-600 bg-gray-50 px-6 py-5 italic text-gray-800">
                        "When you can measure what you are speaking about, and express it in numbers, you know something about it." - Lord Kelvin, 1883
                    </blockquote>

                    <Paragraph>
                        Try weighing a single grain of rice on your kitchen scale. It will say zero, every time. Not because the grain weighs nothing but because the scale is not built to notice something that small.
                    </Paragraph>

                    <Paragraph>
                        That is roughly the problem we hit while trying to measure how much energy a <em>tiny</em> piece of code, like a single <Code>for</Code> loop or one <Code>if</Code> statement, actually consumes.
                    </Paragraph>

                    <SectionTitle>The problem: our instruments are too slow for our code</SectionTitle>

                    <Paragraph>
                        The standard way to measure software energy today is to run the whole program and read a chip-level counter called RAPL (Intel's Running Average Power Limit). It is a solid tool, but it only updates about once every millisecond. Most individual code blocks finish executing in a few <em>microseconds</em>, which is a thousand times faster than RAPL can even register. Point it at one of these tiny blocks and you will often get back a zero, or wildly different numbers each time. The result: developers only find out about energy problems <em>after</em> the whole program has run, when it is expensive to fix. It is a bit like only being shown your total grocery bill at checkout, with no idea which item drove up the cost.
                    </Paragraph>

                    <Paragraph>
                        We wanted developers to see the energy cost of a loop the moment they write it, the way a spell-checker flags a typo the moment you type it, not after you have mailed the letter. That effort became two things: <strong>PowerLens</strong>, a way to reliably measure these tiny blocks, and <strong>EnCoDe</strong>, a system that learns from those measurements to <em>predict</em> a block's energy cost from the code alone, without running it at all.
                    </Paragraph>

                    <BlogImage
                        src="/data/images/blog/blog004-rapl-measurement-noise.jpeg"
                        alt="Coefficient of variation and zero-reading counts rising sharply as execution time drops below RAPL's ~1ms resolution"
                    />

                    <SectionTitle>PowerLens: turning up the volume on a whisper</SectionTitle>

                    <Paragraph>
                        If a signal is too quiet to hear, you repeat it until it is loud enough. PowerLens wraps a code block in a tight loop, runs it a thousand times, reads the total energy for the whole burst, and divides by a thousand.
                    </Paragraph>

                    <Paragraph>
                        Three things could wreck this trick, so PowerLens guards against each:
                    </Paragraph>

                    <ul className="list-disc list-outside ml-5 space-y-3 mb-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                        <li>
                            <strong>Background noise.</strong> A stray process or a CPU speed change mid-measurement throws numbers off. PowerLens locks the machine down first: fixed CPU frequency scaling governor, no Turbo Boost, one dedicated core.
                        </li>
                        <li>
                            <strong>Bad timing.</strong> If the burst starts mid-way through RAPL's own internal "tick," the reading gets contaminated by unrelated energy. PowerLens waits and starts exactly in sync with RAPL's clock.
                        </li>
                        <li>
                            <strong>Leftover overhead.</strong> The burst may finish with some leftover time before the measurement window ends. PowerLens calibrates this "padding" ahead of time and subtracts it out.
                        </li>
                    </ul>

                    <Paragraph>
                        Do all three, ten times over, discard the outliers, and you get a trustworthy reading even for code that runs in millionths of a second. To sanity-check this, we summed up PowerLens's block-by-block readings for dozens of programs and compared the total against a plain whole-program RAPL measurement of the same code. They matched closely, across every kind of construct we tested.
                    </Paragraph>

                    <BlogImage
                        src="/data/images/blog/blog004-powerlens-architecture.jpeg"
                        alt="PowerLens architecture: execution amplification, synchronisation, and calibrated subtraction, run through environment stabilisation, measurement execution, and IQR-based outlier removal to yield final block energy"
                    />

                    <SectionTitle>From measuring to predicting</SectionTitle>

                    <Paragraph>
                        Measuring still requires <em>running</em> the code. Developers need to know the cost while they are still writing it. So we used PowerLens to build a ground-truth dataset: over 18,000 real Python programs, broken into 8,000+ measurable blocks, each paired with its real energy cost and a "fingerprint" of 33 structural features like nesting depth, operator density, whether it has loops or conditionals, and so on.
                    </Paragraph>

                    <Paragraph>
                        It is the same idea as a doctor estimating someone's health from vitals rather than running every test, except here the "vitals" are code features, and the "diagnosis" is energy in joules. We trained deliberately simple, efficient models (gradient boosting, random forests) rather than heavy deep learning, since it would be a little ironic for an energy-saving tool to itself burn a lot of energy. Once trained, the model can look at a brand-new block it has never seen and estimate its energy cost purely from structure, hence no execution, no hardware, no waiting.
                    </Paragraph>

                    <Paragraph>
                        We expected one or two features, "number of loops" or "complexity," to dominate. That is not what we found. No single feature explains energy on its own; it is a <em>combination</em> of operator density, nesting, branching, and how it is all put together, and most of these relationships are curved rather than straight lines. A loop's cost depends on what is inside it, not just the fact that it is a loop. We also caught a trap: some features (like how many functions are defined) look highly predictive on the surface, but mostly act as a "type label" for the block rather than actually driving energy up or down. They describe a block without explaining its cost.
                    </Paragraph>

                    <SectionTitle>Does it actually work?</SectionTitle>

                    <Paragraph>
                        Our regression models explain about 75% of the variation in energy across unseen code (R² = 0.75), and a simplified Low/Medium/High classifier gets it right about 81% of the time. That is not a replacement for precise measurement when precision matters, but for flagging a likely energy hotspot the moment you write it, like a linter flags a code smell, it is genuinely useful.
                    </Paragraph>

                    <SectionTitle>From the lab into your editor: WattWise</SectionTitle>

                    <Paragraph>
                        To make this usable day-to-day rather than just a research result, we built <strong>WattWise</strong>, a VS Code extension that brings EnCoDe's predictions directly into the editor. As you write Python, WattWise highlights the blocks likely to be energy-hungry, right next to your code, with no separate profiling run, no hardware counters, and no context-switching out of your workflow. It is the closest thing we have right now to a live energy linter.
                    </Paragraph>

                    <Paragraph>
                        Most developers have no easy way to reason about the energy cost of their code today. You either need lab hardware, or you wait until deployment and profile the whole program after the fact, without knowing which part is actually responsible. EnCoDe flips that around: block-level, lint-like feedback at design time, from source code alone.
                    </Paragraph>

                    <SectionTitle>What's next</SectionTitle>

                    <Paragraph>
                        EnCoDe is currently built and validated on Python. The natural next step is extending it to other languages and testing whether the same ideas hold across different programming styles. We are also excited about applying the same block-level thinking to understanding the energy footprint of large AI models themselves, a question that is only getting more urgent.
                    </Paragraph>

                    <Paragraph>
                        If you want the details, the paper and code are linked below.
                    </Paragraph>

                    <hr className="my-8 border-t border-gray-300" />

                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        <strong>Paper:</strong> EnCoDe: Energy Estimation of Source Code At Design-Time, EASE 2026.{' '}
                        <ExternalLink href="https://arxiv.org/abs/2605.00504">Arxiv</ExternalLink>
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        <strong>Code &amp; artifacts:</strong>{' '}
                        <ExternalLink href="https://doi.org/10.5281/zenodo.18366913">Code</ExternalLink>
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed italic">
                        This work was carried out by the SA4S Research Group in the Software Engineering Research Center, IIIT Hyderabad, and presented at EASE 2026 in Glasgow.
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
