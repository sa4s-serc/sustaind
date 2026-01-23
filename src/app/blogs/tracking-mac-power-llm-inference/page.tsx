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
                        I was running <a href="https://ollama.com/library/llama3.2:1b" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"><strong className="font-semibold text-gray-900">Llama 3.2</strong></a> on my <a href="https://support.apple.com/en-in/111883" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors">MacBook Air</a>. The fan wasn&apos;t even spinning (<em className="italic text-gray-700">Apple Silicon is dangerously efficient</em>), so I assumed the cost was negligible. But I needed numbers, not assumptions.
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
                        This is where I found my first real bloom: measuring energy.
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                        The Test (and the Baseline)
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        To see how much <em className="italic text-gray-700">more</em> the LLM actually cost, I needed a reference point.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        So I measured three things:
                    </p>

                    <ul className="list-disc list-outside ml-6 mb-4 sm:mb-5 space-y-2">
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">Idle Power</strong>: My Mac doing nothing.
                        </li>
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">Baseline Power</strong>: Running the Llama model without inference (just keeping it in memory).
                        </li>
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">Inference Power</strong>: Making the model actually respond to 10 test queries.
                        </li>
                    </ul>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        The graphs don&apos;t lie. Idle power is silent. Baseline power is steady, like a pilot light. But <em className="italic text-gray-700">inference power</em>? That&apos;s the spike where the cost lives.
                    </p>

                    <img
                        src={`${basePath}/data/images/blog/blog002-pytorch-profiler-results.png`}
                        alt="PyTorch Profiler Results"
                        className="w-full h-auto rounded-lg shadow-md my-6 sm:my-8"
                    />

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Running the model <em className="italic text-gray-700">once</em> didn&apos;t consume much. But running it <em className="italic text-gray-700">ten times</em>? That&apos;s when I actually saw the shape of the usage curve. Not a smooth line. Not a slow burn. It was jagged, spiky, and very real. Each spike, was a query. And each query, was a cost.
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                        The Math Behind the Measurement
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        The calculation was straightforward:
                    </p>

                    <ul className="list-disc list-outside ml-6 mb-4 sm:mb-5 space-y-2">
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">CPU + GPU Power Draw</strong> (in Watts) = Total energy being consumed per second.
                        </li>
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">Duration</strong> (in seconds) = How long the query runs.
                        </li>
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">Energy</strong> (in Joules) = Power × Time.
                        </li>
                    </ul>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        But here&apos;s the catch: Most of us never see this in our work. We optimize <em className="italic text-gray-700">latency</em> (speed), but forget about <em className="italic text-gray-700">energy</em> (the planet). I started to understand that <strong className="font-semibold text-gray-900">speed ≠ efficiency</strong>. Sometimes the fastest model is also the hungriest. And in a world where LLMs are running millions of queries daily, those extra watts add up fast.
                    </p>

                    <img
                        src={`${basePath}/data/images/blog/blog002-energy-consumption-metrics.png`}
                        alt="Energy Consumption Metrics"
                        className="w-full h-auto rounded-lg shadow-md my-6 sm:my-8"
                    />

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        I wasn&apos;t just profiling an LLM anymore; I was learning how to measure the invisible cost of <em className="italic text-gray-700">thinking</em>.
                    </p>

                    <hr className="my-6 sm:my-8 border-t border-gray-300" />

                    <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
                        The Tools &amp; Process Behind the Dashboard
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        If you&apos;re curious about the engineering behind this, here&apos;s the setup:
                    </p>

                    <ul className="list-disc list-outside ml-6 mb-4 sm:mb-5 space-y-2">
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">Hardware</strong>: MacBook Air (Apple Silicon)
                        </li>
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">Model</strong>: Llama 3.2 (1B parameters)
                        </li>
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">Energy Monitoring</strong>: <code className="bg-gray-100 text-green-700 px-1.5 py-0.5 rounded text-sm font-mono">sudo powermetrics</code>
                        </li>
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">Dashboard</strong>: Python-based visualization using Flask
                        </li>
                        <li className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            <strong className="font-semibold text-gray-900">Frontend</strong>: HTML/CSS/JavaScript with Chart.js
                        </li>
                    </ul>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        The code is already on GitHub. It&apos;s open-source. It&apos;s documented. It&apos;s ready for you to fork.
                        <br />
                        Come break things, run the dashboard, and let me know if your Mac sweats as much as mine did. You can connect with <a href="https://www.linkedin.com/in/aneetta-sara/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 underline decoration-orange-400 hover:decoration-orange-600 transition-colors"><strong className="font-semibold text-gray-900">me on LinkedIn</strong></a>.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        You don&apos;t need a supercomputer to start tracking carbon. If you&apos;re feeling stuck in a new stack or a new field, just remember:
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base ml-8">
                        <em className="italic text-gray-700">Every single query has a carbon footprint. it&apos;s okay to bloom a little late.</em>
                        <br />
                        <em className="italic text-gray-700">Just make sure you keep growing.</em>
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
