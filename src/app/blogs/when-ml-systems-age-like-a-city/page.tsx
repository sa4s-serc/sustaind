'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function MLSystemsAgeLikeCityBlog() {
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
                        When ML Systems Age Like a City: A Simple Way to Think About Technical Sustainability in the Agentic Era
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By Chandrasekar S</span>
                        <span className="hidden sm:inline">•</span>
                        <span>February 24, 2026</span>
                        <span className="hidden sm:inline">•</span>
                        <span>8 min read</span>
                    </div>
                </motion.div>

                <div className="my-8 sm:my-10">
                    <Image
                        src={`${basePath}/data/images/blog/city.png`}
                        alt="ML Systems aging like a city"
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-xl shadow-lg"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-sm sm:prose-base max-w-none"
                >
                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Imagine a fast-growing city. At first, everything works well. Roads are smooth, traffic lights are synced, electricity is stable, and public transport runs on time. As more people move in, the city grows quickly. New roads are added, flyovers are built, shortcuts are introduced. To meet deadlines, some constructions are rushed. Temporary fixes slowly become permanent. For a while, things still work.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Then one day, traffic jams become normal. A small signal failure blocks half the city. Maintenance costs shoot up. No one remembers why a particular flyover exists, but removing it feels risky. The city hasn&apos;t collapsed, but it&apos;s fragile. This is how many software systems age. And when ML components enter the picture like models, pipelines, training data, experiments, the complexity doesn&apos;t just grow, it multiplies.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Now imagine the same city, but with a construction crew that works ten times faster. More roads, more flyovers, more connections - built overnight. Sounds great, right? It is, until you realize the crew doesn&apos;t stop to ask whether each road is necessary, whether it connects well to existing infrastructure, or whether the foundation beneath it was solid to begin with. Building faster doesn&apos;t mean building better. Without anyone watching the bigger picture, the city just becomes fragile faster. That&apos;s the world many development teams are operating in today.
                    </p>

                    <hr className="my-10 border-t border-gray-100" />

                    <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                        So What Is Technical Sustainability?
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Technical sustainability is the practice of ensuring that a software system can continue to be developed, maintained, and operated effectively over its entire lifespan. Not just through its launch sprint.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Going back to the city: a sustainable city isn&apos;t one where no shortcuts were ever taken. It&apos;s one where the city planners knew which roads were temporary, had a plan to upgrade them, and didn&apos;t keep building new neighbourhoods on top of unpaved foundations. The shortcuts were conscious, documented, and time bound.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        The same applies to software. A sustainable system is one where a new team member can understand and contribute without months of archaeology. A bug can be isolated and fixed without triggering three other failures. A feature can be added without rewriting everything adjacent to it. The system can grow or change direction without collapsing under its own weight. In short, it&apos;s a system that will still be workable five years from now, not just five weeks after launch.
                    </p>

                    <hr className="my-10 border-t border-gray-100" />

                    <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                        Why Should Developers Actually Care?
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Let&apos;s be honest here: no one gets promoted for paying off technical debt. No one throws a party when you refactor a messy data pipeline. The incentive structure in most organizations rewards shipping, not sustaining. But the incentive structure doesn&apos;t show you the cost of not sustaining.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        When technical debt compounds unchecked, you start seeing symptoms every developer recognizes. Features that should take a day take two weeks because of unexpected dependencies. Bugs return after being fixed. New engineers spend months just orienting themselves. Deployment windows require three people, a runbook, and a prayer. The city is still running, but every commute is slower and more unpredictable than it was before. And at some point, a single water pipe bursting doesn&apos;t just affect one street. It cascades.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Technical sustainability matters because ignoring it doesn&apos;t make the problem disappear. It just pushes it forward, and every time it comes back, it&apos;s bigger, more expensive, and harder to fix than it would have been before.
                    </p>

                    <hr className="my-10 border-t border-gray-100" />

                    <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                        What Are We Actually Trying to Solve?
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        The core problem is this: software systems are built under constraints. Time pressure, incomplete requirements, shifting priorities, imperfect knowledge. Every decision made under those constraints leaves a residue. Some residue is harmless. Some of it quietly accumulates into structural fragility.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Think of the city again. Not every shortcut is a problem. A temporary diversion during construction is fine, as long as someone knows it&apos;s temporary, knows where it is, and plans to fix the road beneath it. The problem isn&apos;t the diversion. The problem is when the diversion becomes the road, and ten years later, no one knows why it curves the way it does or what&apos;s buried underneath.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        What we&apos;re trying to solve is not the existence of debt, because that&apos;s inevitable. We&apos;re trying to solve the failure to acknowledge, track, and address it. The goal is to move from &quot;we cut a corner somewhere in 2021 and we&apos;re not sure where&quot; to &quot;we made a deliberate tradeoff in Q3, we documented it, and we&apos;ve scheduled time to address it before it becomes a risk.&quot;
                    </p>

                    <hr className="my-10 border-t border-gray-100" />

                    <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                        The Agentic Era Changes the Speed, Not the Problem
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        If your team is already using AI coding assistants to write or generate code, you already know how fast things can move. Features get scaffolded in minutes. Boilerplate disappears. What used to take a day can take an hour. But here&apos;s the thing: speed is not the same as sustainability.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        When a developer writes code manually, there&apos;s a natural pause built in. They read what they wrote. They think about whether it fits. Sometimes they catch themselves and ask &quot;wait, should this even work this way?&quot; That moment of hesitation, annoying as it feels, is also where a lot of judgment happens.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        When an AI agent generates a hundred lines of code in seconds and the tests pass, that pause disappears. The code works today. But does it belong here? Does it duplicate something three modules away? Does it make an assumption that will quietly stop being true six months from now? These questions don&apos;t show up in a test suite. They show up later, when someone is trying to understand a system that grew faster than anyone could follow.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        Going back to the city: if one worker builds one road a day, a poorly planned road network grows slowly and you notice the problems as they come. But if an entire crew builds ten roads a day with no one watching the overall plan, you end up with a labyrinth before anyone realizes what happened. Agentic tools are the crew. Sustainability is the plan. You need both. And in ML systems, that plan has to account for challenges that go well beyond the code itself.
                    </p>

                    <hr className="my-10 border-t border-gray-100" />

                    <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                        Technical Debt in ML Systems: A Special Kind of Fragility
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        If traditional software debt is a city with aging infrastructure, ML system debt is a city where the ground itself keeps shifting. ML systems carry all the usual software challenges, plus a set of problems unique to their nature.
                    </p>

                    <ul className="list-none space-y-6 mt-6">
                        <li className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            <strong className="block text-gray-900 text-lg mb-2">Data Dependency Debt</strong>
                            is one of the most insidious. An ML model doesn&apos;t just depend on code. It depends on the shape, distribution, and meaning of the data it was trained on. When that data changes upstream (and it always eventually does), the model degrades silently. No error is thrown. No alarm sounds. Think of it as the city&apos;s water supply slowly changing composition. The pipes still carry water, but what comes out of the tap is no longer quite right, and no one notices until people start getting sick.
                        </li>

                        <li className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            <strong className="block text-gray-900 text-lg mb-2">Pipeline Glue Debt</strong>
                            is the growing mess of pipelines which consists of preprocessing scripts, transformation steps, and feature engineering code that connects raw data to a trained model. Over time, these pipelines become layered with undocumented assumptions, one-off fixes, and environment-specific configurations that no one fully understands. It&apos;s like the city&apos;s electrical grid, with wires added over decades by different contractors, some of them live, some of them not, and nobody has a current map.
                        </li>

                        <li className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            <strong className="block text-gray-900 text-lg mb-2">Configuration Debt</strong>
                            emerges from the explosion of hyperparameters, feature flags, model versions, and environment configs that accumulate in ML systems. When these live in spreadsheets, scattered files, or institutional memory rather than versioned systems, the system becomes impossible to reproduce or audit. &quot;Which version of the model is running in production right now?&quot; becomes a genuinely difficult question. The city equivalent of not knowing which building permit is actually valid.
                        </li>

                        <li className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            <strong className="block text-gray-900 text-lg mb-2">Monitoring and Feedback Debt</strong>
                            occurs when teams invest heavily in building and deploying a model but neglect the infrastructure to observe its behaviour over time. Without monitoring for data drift and prediction drift, you don&apos;t know the road is cracking. You find out when it gives way, and by then, the damage is already done.
                        </li>

                        <li className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            <strong className="block text-gray-900 text-lg mb-2">Experimentation Debt</strong>
                            is the graveyard of abandoned experiments left in the codebase. Dead feature branches, half-integrated model approaches, commented-out logic that someone thought they might need again. It adds weight and confusion without adding value. In city terms, it&apos;s the half-built flyovers from projects that were cancelled mid-construction, still standing, still consuming space, going nowhere.
                        </li>
                    </ul>

                    <hr className="my-10 border-t border-gray-100" />

                    <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                        No One Builds a Perfect City. That&apos;s Not the Point.
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        There is no production codebase without technical debt. Any senior engineer who claims otherwise is either working on a greenfield toy project or not being honest with you. And no city was ever built without rushed decisions, temporary fixes, or infrastructure that outlasted its original purpose. That&apos;s not failure. That&apos;s how things get built under real-world constraints.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        The developer who says &quot;this is a quick fix, we&apos;ll clean it up next sprint&quot; and actually does so is practicing sustainability. The team that documents the tradeoffs made during a crunch period and schedules time to revisit them is practicing sustainability. The engineer who leaves a clear comment explaining why something is done a certain way, not just what it does, is leaving a gift for the next person on the team.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        The debt itself is not the enemy. Forgetting about the debt, normalizing it, and letting it compound without ever settling accounts is what turns a growing city into a gridlocked one. Paying debt on time is not optional maintenance. It is the difference between a city that adapts and one that eventually stops working during peak hour.
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold text-green-600 mt-6 sm:mt-8 mb-3 sm:mb-4">
                        What&apos;s Coming Next
                    </h2>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        In the upcoming parts of this series, we&apos;ll get practical. How to spot debt before it becomes a crisis, how to make the case for sustainability investment to stakeholders who think in quarterly goals, and what concrete practices teams can adopt to keep their systems from quietly aging into fragility.
                    </p>

                    <p className="text-gray-700 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                        The city is always growing. The question is whether you&apos;re maintaining the infrastructure as you go, or waiting until the roads start closing themselves.
                    </p>
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
