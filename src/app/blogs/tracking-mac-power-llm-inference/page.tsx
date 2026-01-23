'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function TrackingMacPowerBlog() {
    const basePath = process.env.NODE_ENV === 'production' ? '/sustaind' : '';

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                        Watts the Cost? Tracking My Mac&apos;s Power Draw During LLM Inference
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By Aneetta Sara Shany</span>
                        <span className="hidden sm:inline">•</span>
                        <span>January 23, 2026</span>
                        <span className="hidden sm:inline">•</span>
                        <span>8 min read</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-sm sm:prose-base max-w-none"
                >
                    {/* Main Content - HERO IMAGE

                    {/* Main Content - HERO IMAGE */}
                    <img
                        src={`${basePath}/data/images/blog/blog002-carbon-tracker-dashboard.png`}
                        alt="Carbon Tracker Dashboard"
                        className="w-full h-auto rounded-lg shadow-md my-6 sm:my-8"
                    />

                    <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                        The Prologue: Better Late Than Never
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Let&apos;s be real for a second. I finished the technical work for this blog back in November. I had the code running, the graphs plotting, and a plan to hit &quot;publish&quot; on <em className="italic text-gray-700">January 5th</em>.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        And today is <em className="italic text-gray-700">January 23rd</em>. Life happened. Priorities shifted. For a moment, I thought,
                        <br />
                        <span className="ml-8 block"><em className="italic text-gray-700">Is it too late to share this? Does it still matter?</em></span>
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Then I remembered the phrase that has stuck with me as I found my footing in this new place:
                        <br />
                        <strong className="font-semibold text-gray-900">&quot; 🪴Bloom where you are planted.  &quot;</strong>
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        It doesn&apos;t matter if the timeline wasn&apos;t perfect; what matters is the growth. So, here I am, dusting off my terminal logs to share a story about how I stopped looking at AI as just <em className="italic text-gray-700">code</em>, and started seeing the <em className="italic text-gray-700">energy</em> behind it.
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                        The Zero State: Code vs. Energy
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Sometimes, you are planted in soil you don&apos;t understand yet. Back in <em className="italic text-gray-700">November</em>, my professor planted me in the world of <em className="italic text-gray-700">Sustainable AI</em> with a single, seemingly simple task:
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        &quot; <em className="italic text-gray-700">Install Ollama on your Mac. Run a model. And tell me exactly how much energy it consumes.</em> &quot;
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        I stared at my screen. I knew how to code. I knew how to use AI. I knew how to build the models. But the hardware? That was a black box.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Until this task, I wrote code as if it cost the planet nothing.
                        <br />
                        <span className="ml-8 block"><em className="italic text-gray-700">You type a query, the code runs, and the answer appears</em>.</span>
                        <br />
                        Clean, silent, and infinite. But measuring the invisible electricity actually flowing through my Apple silicon? That was a layer of the stack I had never debugged before.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        We talk a lot about <em className="italic text-gray-700">Green AI</em> and <em className="italic text-gray-700">Sustainability</em>, but for many of us, it&apos;s just a buzzword until you actually see the numbers. My goal wasn&apos;t just to run an LLM. I wasn&apos;t just running code; I was trying to audit it.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        I wanted to see the cost of a &quot;<em className="italic text-gray-700">Hello World</em>&quot; in Joules and Watts. I wanted to know if my Mac was just thinking, or if it was sweating.
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                        The Struggle (and the Silence)
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        I started where everyone starts: Google.
                        <br />
                        I skimmed documentation, tried simple commands, and tested standard monitoring tools. Nothing gave me the granularity I needed. I was writing scripts that crashed and reading logs that made no sense.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        I was running <a href="https://ollama.com/library/llama3.2:1b" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors">Llama 3.2</a> on my <a href="https://support.apple.com/en-in/111883" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors">MacBook Air</a>. The fan wasn&apos;t even spinning (<em className="italic text-gray-700">Apple Silicon is dangerously efficient</em>), so I assumed the cost was negligible. But I needed numbers, not assumptions.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base ml-8">
                        <em className="italic text-gray-700">I was planted, but I definitely wasn&apos;t blooming. I was just... debugging.</em>
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                        The <em className="italic text-gray-700">Eureka</em> Moment ! sudo powermetrics
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        <em className="italic text-gray-700">Powermetrics</em>: This command-line tool doesn&apos;t just look at software; it peeks directly under the hood of the hardware. It pulls raw data on power usage, temperature, and frequency straight from the chip.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        I ran it. The terminal flooded with data. And then, I saw it.
                        <br />
                        I filtered the raw logs to cut through the noise and isolate the only metric that truly mattered: <strong className="font-semibold text-gray-900">Total Power Draw (CPU + GPU)</strong>.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        The tracker gave me the idle power draw: ~15mW.
                    </p>

                    <img
                        src={`${basePath}/data/images/blog/blog002-pytorch-profiler-results.png`}
                        alt="Idle Power Draw"
                        className="w-full h-auto rounded-lg shadow-md my-6 sm:my-8"
                    />

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Then, I asked Llama a question: &quot;<em className="italic text-gray-700">What is software sustainability in 3 lines?</em>&quot;
                        <br />
                        BOOM. The numbers shot up instantly… ~7000mW.
                    </p>

                    <img
                        src={`${basePath}/data/images/blog/blog002-energy-consumption-metrics.png`}
                        alt="Active Power Draw"
                        className="w-full h-auto rounded-lg shadow-md my-6 sm:my-8"
                    />

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        <em className="italic text-gray-700">It wasn&apos;t about the code anymore. It was real. It was power. It was</em> <strong className="font-semibold text-gray-900">energy.</strong>
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        I could see the cost of my curiosity. That was my <em className="italic text-gray-700">Hello World</em> moment for energy tracking.
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                        What I Learned (The Interesting Stuff )
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Through the struggle, I gathered some facts that genuinely surprised me:
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        The &quot;<em className="italic text-gray-700">Spike</em>&quot; is Instant: AI doesn&apos;t &quot;<em className="italic text-gray-700">warm up.</em>&quot; It goes from 0 to 100 in milliseconds. The Energy demand is immediate and intense.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        <em className="italic text-gray-700">Idle</em> vs. <em className="italic text-gray-700">Active</em>. Background tasks barely register on the power meter. LLM inference? That&apos;s when you see what your Mac can really pull.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        <em className="italic text-gray-700">Generation is the real cost</em>. Processing your prompt is fast and cheap, it&apos;s the token-by-token response generation that hammers your CPU and drains your battery.
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                        The Reality Check
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Here is a slightly terrifying fact I learned from my logs:
                        <br />
                        <strong className="font-semibold text-gray-900">Every single query has a carbon footprint.</strong>
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        We often think of &quot;Green AI&quot; as a massive data center problem. But measuring it locally made me realize that even for one user, the cost is noticeable. Now, imagine millions of users doing this every second.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        It turns out, &quot;Sustainable AI&quot; isn&apos;t just about where the electricity comes from; It&apos;s about how efficiently we use it.
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                        Don&apos;t Reinvent the Wheel (Here&apos;s the Code)
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        That command was just the &apos;Hello World&apos;, a quick manual check. But I realized I couldn&apos;t just sit there typing commands forever if I wanted valid results. I needed a proper, automated setup. I didn&apos;t want to just guess the energy; I wanted to scientifically measure it. So, I built a <strong className="font-semibold text-gray-900">system</strong>.⚙️
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        In the GitHub repo, you won&apos;t just find a basic script. You&apos;ll find a full setup (<strong className="font-semibold text-gray-900">ollama-energy-tracker</strong>) that includes:
                    </p>

                    <ul className="list-disc list-outside ml-6 mb-4 sm:mb-5 space-y-2">
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">The Architecture:</strong> <em className="italic text-gray-700">My Master-Worker setup separated the &quot;tracker&quot; from the &quot;LLM&quot; so measuring the energy doesn&apos;t accidentally slow down the model.</em>
                        </li>
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">The Power Engine:</strong> <em className="italic text-gray-700">My script talks directly to your Mac&apos;s hardware to get the real numbers, no guessing games or rough estimates.</em>
                        </li>
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">The Smart Fixes:</strong> <em className="italic text-gray-700">It fills in the gaps. If a query is too fast for the hardware sensors to catch, the tool kicks in a backup estimate to ensure your data remains accurate.</em>
                        </li>
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">The Visuals:</strong> <em className="italic text-gray-700">A simple dashboard where you can actually see your energy usage and trends in real-time.</em>
                        </li>
                    </ul>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Curious about the actual numbers? I&apos;ve packed the README with my full research findings. Go take a look at <a href="https://github.com/aneettasara/ollama-energy-tracker" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"><strong className="font-semibold text-gray-900">my GitHub repo</strong>🔗</a>. It&apos;s not perfect. It&apos;s just a snapshot of me figuring things out. It includes the scripts to run the model, track the energy, and visualize the spikes.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        It&apos;s open-source. It&apos;s documented. It&apos;s ready for you to fork.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Come break things, run the dashboard, and let me know if your Mac sweats as much as mine did. You can connect with <a href="https://www.linkedin.com/in/aneetta-sara/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"><strong className="font-semibold text-gray-900">me on LinkedIn</strong>🔗</a>.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        You don&apos;t need a supercomputer to start tracking carbon. If you&apos;re feeling stuck in a new stack or a new field, just remember:
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base ml-8">
                        <em className="italic text-gray-700">it&apos;s okay to bloom a little late. Just make sure you keep growing.</em>
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Here at <strong className="font-semibold text-gray-900">Project <a href="https://sa4s-serc.github.io/sustaind/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors">
                            <span className="font-semibold">
                                <span className="text-green-600">Sust</span>
                                <span className="text-orange-500">AInd</span>
                            </span>
                        </a></strong>, we aren&apos;t just tracking energy anymore; we are going to try to reduce it. If you are a student, a dev, or just curious, come check us out.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        <strong className="font-semibold text-gray-900">Onwards and Upwards 🌱</strong>
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />
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
