'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Cite from '@/components/Cite';

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

export default function WhenSystemsEvolveBeyondUnderstandingBlog() {
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
                        When Systems Evolve Beyond Understanding
                    </h1>

                    <p className="text-base sm:text-lg text-gray-600 italic mb-4">
                        The second post in our technical-sustainability series: understanding what a system
                        does is not the same as understanding why it was built that way, and why that gap
                        keeps widening.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By Chandrasekar S</span>
                        <span className="hidden sm:inline">•</span>
                        <span>September 9, 2026</span>
                        <span className="hidden sm:inline">•</span>
                        <span>8 min read</span>
                    </div>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-sm sm:prose-base max-w-none"
                >
                    <Paragraph>
                        A developer joins a team. The task is simple: update how a recommendation service
                        handles user preferences.
                    </Paragraph>

                    <Paragraph>They open the codebase. They find this:</Paragraph>

                    <BlogImage
                        src="/data/images/blog/blog006-what-the-developer-found.png"
                        alt="Architecture diagram titled 'What the developer found': a chain of user request, API gateway, recommendation service, feature pipeline, model and response, with an external embedding API branching in and a note reading 'Nobody knows why this is here'."
                    />

                    <Paragraph>&quot;Why does this service call an external embedding API?&quot;</Paragraph>

                    <Paragraph>Nobody knows. The person who added it left a year ago.</Paragraph>

                    <Paragraph>
                        &quot;Is the cache still needed? The model changed twice since it was added.&quot;
                    </Paragraph>

                    <Paragraph>&quot;Probably not, but let&apos;s not risk it.&quot;</Paragraph>

                    <Paragraph>
                        The fix takes thirty minutes. Figuring out what would break takes{' '}
                        <strong>two days</strong>.
                    </Paragraph>

                    <Paragraph>
                        Now, you might ask: why not just use an LLM to understand the code? Point Claude or
                        Copilot at the repository, ask it to explain the architecture, and move on.
                    </Paragraph>

                    <Paragraph>
                        Here is the thing. The developer <em>could</em> understand what the code does. Any
                        capable engineer, with or without AI assistance, can trace through a service and figure
                        out its behavior. What they could not figure out is{' '}
                        <strong>why it was built this way</strong>. Why was this particular API chosen over
                        alternatives? Was the cache a deliberate performance decision or a quick fix that
                        became permanent? Is the feature pipeline still serving its original purpose, or is it
                        an artifact of a model that no longer exists?
                    </Paragraph>

                    <Paragraph>
                        That reasoning is not in the code. It is not in the comments. It walked out the door
                        with the people who made those decisions. Researchers call this{' '}
                        <strong>architectural knowledge evaporation</strong>, and it is one of the most
                        persistent problems in software engineering. No matter how good our tools for{' '}
                        <em>reading</em> code become, the <em>reasoning</em> behind the code remains a
                        fundamentally human artifact that disappears when people leave.
                    </Paragraph>

                    <SectionTitle>Every change made sense. The result doesn&apos;t.</SectionTitle>

                    <Paragraph>
                        None of those components appeared by accident. The cache was added because Model v2 was
                        slow. The feature pipeline was built because the original model needed handcrafted
                        features. The external API solved a real problem eighteen months ago.
                    </Paragraph>

                    <Paragraph>Every change was reasonable. Every change worked.</Paragraph>

                    <Paragraph>
                        But a system shaped by three hundred reasonable changes over two years is not a system
                        anyone designed. It <em>emerged</em>. And the reasoning behind each piece left with the
                        person who added it.
                    </Paragraph>

                    <Paragraph>
                        Studies consistently show that practitioners recognize this problem but lack systematic
                        ways to address it. In surveys, the most commonly reported tool for understanding the
                        relationship between architecture and code is simply{' '}
                        <strong>personal knowledge and experience</strong>, not dedicated tooling or formal
                        methods <Cite n={3} />. When someone who holds that knowledge leaves the team, the understanding
                        goes with them. And the most frequently cited barrier to maintaining this
                        understanding? Cost and effort: teams know it matters but cannot justify the time under
                        delivery pressure <Cite n={3} />.
                    </Paragraph>

                    <Paragraph>
                        You have seen this outside software. A house renovated over fifteen years: someone adds
                        a room, another closes a doorway, someone converts the garage, another reroutes the
                        plumbing. Every renovation made sense. Every contractor did competent work.
                    </Paragraph>

                    <Paragraph>Ask anyone to draw the current floor plan from memory.</Paragraph>

                    <Paragraph>
                        <strong>Nobody can.</strong>
                    </Paragraph>

                    <SectionTitle>
                        What Happens When No One Remembers Why the System Was Built This Way
                    </SectionTitle>

                    <Paragraph>
                        If you ask someone to draw the system&apos;s architecture on a whiteboard, they will
                        draw something clean. Boxes. Arrows. Services. Databases. It will look perfectly
                        reasonable.
                    </Paragraph>

                    <Paragraph>
                        But that diagram is a snapshot. It tells you <em>what exists</em>. It tells you nothing
                        about <em>why</em>.
                    </Paragraph>

                    <Paragraph>
                        And the snapshot is often wrong. Research has found that a majority of inconsistencies
                        between architecture descriptions and actual code trace back to documentation that
                        simply was not kept up to date <Cite n={1} />. The code evolved. The documentation did not. This
                        gap between the intended design and the implemented system is what researchers call{' '}
                        <strong>architectural drift</strong>, a gradual divergence driven not by bad decisions
                        but by the accumulation of reasonable ones made without a shared record of their
                        reasoning <Cite n={1} />.
                    </Paragraph>

                    <Paragraph>Consider how a real system evolves:</Paragraph>

                    <BlogImage
                        src="/data/images/blog/blog006-architecture-evolved.png"
                        alt="Timeline titled 'How the architecture actually evolved' running from 2023 to 2025: a simple model gains a cache and pipeline, then a new model and vector DB, with a feature store and embedding service added along the way and marked 'Still running? Still needed?'."
                    />

                    <Paragraph>
                        Look only at 2025. You cannot tell whether the feature store is still needed. You
                        cannot tell why both a cache and a vector DB exist. You cannot tell whether the
                        embedding service replaced something or was added on top of it.
                    </Paragraph>

                    <Paragraph>
                        To understand today&apos;s architecture, you need to understand yesterday&apos;s
                        architecture. The snapshot tells you the structure. The history tells you the intent.
                        And without the intent, the structure can mislead you.
                    </Paragraph>

                    <SectionTitle>ML systems have the same problem, with more dimensions</SectionTitle>

                    <Paragraph>
                        Everything above applies to all software. ML systems take the same problem and multiply
                        it.
                    </Paragraph>

                    <Paragraph>
                        Traditional software evolves primarily through code and architecture. Hard to track,
                        but at least the changes live in one place. Read the commits, follow the pull requests,
                        trace the story.
                    </Paragraph>

                    <Paragraph>
                        ML systems evolve through code, architecture, data, models, pipelines, configuration,
                        and external services. These change independently. Often invisibly.
                    </Paragraph>

                    <BlogImage
                        src="/data/images/blog/blog006-dimensions-of-change.png"
                        alt="Comparison titled 'Traditional software vs ML systems: dimensions of change'. Traditional software changes through code and architecture, all visible in git. ML-enabled systems also change through data, models, pipelines, config and external AI services, many of which are invisible in git: a model retrains, behavior shifts, the codebase looks identical, and a git diff shows nothing."
                    />

                    <Paragraph>
                        <strong>A model retrains.</strong> The weights shift. Behavior changes. The codebase
                        looks identical. A <em>git diff</em> shows nothing.
                    </Paragraph>

                    <Paragraph>
                        <strong>An upstream data source quietly changes format.</strong> The pipeline still
                        runs. The model still serves predictions. But the system is now operating on
                        assumptions that stopped being true weeks ago.
                    </Paragraph>

                    <Paragraph>
                        <strong>You swap a traditional model for an LLM.</strong> Suddenly you need a vector
                        database, a retrieval layer, prompt management, an external API. The architecture
                        transforms overnight, not because someone redesigned it, but because the model changed
                        and everything else had to follow.
                    </Paragraph>

                    <Paragraph>
                        And with external AI services, parts of your system&apos;s behavior are defined by
                        models you do not control, trained on data you have never seen, updated on schedules
                        you did not set. Your code does not change. Your architecture diagram does not change.
                        But your system does.
                    </Paragraph>

                    <Paragraph>
                        And there is a more fundamental difference. In traditional software, if you lose all
                        documentation, you can still read the code. The logic is written in human-readable
                        instructions. You can trace it, reason about it, reconstruct at least some of the
                        intent from the behavior. With ML models, you cannot. A model&apos;s behavior is
                        encoded in millions of learned parameters. You can observe what it does, but you cannot
                        read <em>why</em> it does it. The system becomes a black box not just organizationally,
                        because the people who built it left, but structurally, because the model&apos;s
                        reasoning is not human-readable by design. That is a qualitatively different kind of
                        opacity, and it means the intent problem in ML systems runs deeper than in traditional
                        software.
                    </Paragraph>

                    <SectionTitle>So What Can We Do About This?</SectionTitle>

                    <Paragraph>
                        This is not a solved problem. But researchers are exploring directions that reframe how
                        we think about it.
                    </Paragraph>

                    <Paragraph>
                        <strong>
                            What if architecture descriptions evolved with the code, not separately from it?
                        </strong>{' '}
                        Instead of architecture living in a slide deck or wiki that nobody updates, the idea is
                        to keep it in a version-controlled, machine-readable format alongside the source code,
                        so that when the implementation drifts from the intended design, the mismatch becomes
                        visible, like a failing test <Cite n={1} />. It does not solve the intent problem entirely, but it
                        makes drift detectable rather than silent.
                    </Paragraph>

                    <Paragraph>
                        <strong>
                            What if we could automatically connect documentation to the code it describes?
                        </strong>{' '}
                        Today, the link between &quot;this paragraph in the design document&quot; and &quot;these
                        files in the repository&quot; exists mostly in people&apos;s heads. Researchers have
                        shown that by using architecture models as a bridge, it is possible to recover these
                        connections with promising accuracy <Cite n={2} />. The goal is not to replace human
                        understanding, but to make it easier to ask: &quot;which parts of the code relate to
                        this design decision?&quot;
                    </Paragraph>

                    <Paragraph>
                        <strong>
                            What if the reasoning behind decisions could be captured from artifacts teams
                            already produce?
                        </strong>{' '}
                        Some teams already practice this through{' '}
                        <strong>Architecture Decision Records (ADRs)</strong>: short documents that capture the
                        context, the options considered, and the reasoning behind a decision at the time it is
                        made. ADRs are one of the most practical tools available for fighting knowledge
                        evaporation. But they require discipline to maintain, and they only capture decisions
                        that teams explicitly recognize as architectural. Many decisions that reshape the
                        system are made informally and never recorded. This is why researchers are also
                        exploring ways to extract architectural reasoning from artifacts that get produced
                        regardless, such as pull requests, issue trackers, code reviews, and team conversations
                        <Cite n={3} /><Cite n={4} />. Someone added that external API from the opening of this blog for a reason.
                        That reason probably exists in a ticket or a thread from eighteen months ago. The
                        challenge is finding it and connecting it to the component it explains.
                    </Paragraph>

                    <Paragraph>
                        These directions share a common insight: maintaining a system is not just about keeping
                        the code working. It is about preserving the connection between{' '}
                        <strong>what was built</strong> and <strong>why it was built that way</strong>.
                    </Paragraph>

                    <SectionTitle>Why this matters more over time?</SectionTitle>

                    <Paragraph>
                        As systems become assemblies of components, models, and external services that change
                        at different speeds, the gap between &quot;what exists&quot; and &quot;why it
                        exists&quot; will only grow.
                    </Paragraph>

                    <Paragraph>We have become very good at asking &quot;is it working?&quot;</Paragraph>

                    <Paragraph>
                        <strong>
                            Perhaps the more important question is: do we still understand why it is built this
                            way?
                        </strong>
                    </Paragraph>

                    <Paragraph>
                        That question does not become less relevant as tools improve. The faster a system can
                        change, the faster the reasoning behind its structure can be lost. And no amount of
                        code comprehension, whether human or AI-assisted, can recover reasoning that was never
                        recorded.
                    </Paragraph>

                    <Paragraph>
                        <em>
                            This is the second blog in a series on technical sustainability in ML-enabled
                            systems. The{' '}
                        </em>
                        <Link
                            href="/blogs/when-ml-systems-age-like-a-city"
                            className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors italic"
                        >
                            first blog
                        </Link>
                        <em>
                            {' '}
                            explored how technical debt accumulates and why sustainability matters. This post
                            looked at what happens as the system evolves: the gap between understanding what a
                            system does and understanding why it was built that way. Future posts in this
                            series will continue exploring the challenges of maintaining and evolving software
                            systems in practice.
                        </em>
                    </Paragraph>

                    <hr className="my-8 border-t border-gray-300" />

                    <SectionTitle>References</SectionTitle>

                    <ol className="list-decimal list-outside ml-5 space-y-3 mb-6 text-sm text-gray-600 leading-relaxed">
                        <li id="ref-1" className="scroll-mt-24">
                            Bucaioni et al., &quot;<strong>Architecture as Code</strong>,&quot; IEEE ICSA
                            2025.
                        </li>
                        <li id="ref-2" className="scroll-mt-24">
                            Keim et al., &quot;
                            <strong>
                                Recovering Trace Links Between Software Documentation and Code
                            </strong>
                            ,&quot; IEEE/ACM ICSE 2024.
                        </li>
                        <li id="ref-3" className="scroll-mt-24">
                            Tian et al., &quot;
                            <strong>
                                Relationships between Software Architecture and Source Code in Practice: An
                                Exploratory Survey and Interview
                            </strong>
                            ,&quot; <em>Information and Software Technology</em>, 2022.
                        </li>
                        <li id="ref-4" className="scroll-mt-24">
                            Hyun and Hurtado, &quot;
                            <strong>
                                Traceability of Architectural Design Decisions and Software Artifacts: A
                                Systematic Mapping Study
                            </strong>
                            ,&quot; <em>Foundations of Computing and Decision Sciences</em>, 2023.
                        </li>
                    </ol>
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
