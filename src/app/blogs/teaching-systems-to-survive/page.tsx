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

export default function TeachingSystemsToSurviveBlog() {
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
                        Teaching Systems to Survive: Making AI Sustainable through Self Adaptation
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By Shaunak Biswas and Hiya Bhatt</span>
                        <span className="hidden sm:inline">•</span>
                        <span>April 12, 2026</span>
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
                    <blockquote className="my-6 rounded-lg border-l-4 border-l-green-600 bg-gray-50 px-6 py-5 italic text-gray-800">
                        "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change." - Leon C. Megginson
                    </blockquote>

                    <Paragraph>
                        Have you ever thought about how your body regulates its temperature? You do not consciously tell your sweat glands to activate when it gets warm. Your autonomic nervous system handles the process for you.
                    </Paragraph>

                    <Paragraph>
                        Back in 2003, Jeffrey Kephart and David Chess from IBM published a landmark paper called "The Vision of Autonomic Computing." They observed that computing systems were becoming too complex for human administrators to install, configure, tune, and maintain. They warned that this complexity would soon outpace human ability to manage it. Their proposed solution was autonomic computing. They envisioned software systems that manage themselves according to high-level goals, much like the human body regulates itself.
                    </Paragraph>

                    <BlogImage
                        src="/data/images/blog/blog003-autonomic-computing-vision.jpg"
                        alt="Autonomic computing vision"
                    />

                    <Paragraph>
                        This vision popularized the paradigm of self adaptation. In a self-adaptive system, software monitors its own behavior and its surrounding environment. When it detects a problem, it analyzes the situation, plans a response, and executes a fix. We call this the MAPE-K loop (Monitor, Analyze, Plan, Execute, over a shared Knowledge base). IBM outlined four key properties for these systems. They must handle self-configuration, self-optimization, self-healing, and self-protection. This is a practical concept that fundamentally changes how we build software. We no longer write static code that fails when the world changes. We write systems that respond to change.
                    </Paragraph>

                    <Paragraph>
                        Today, we face a new crisis. Machine learning models are everywhere. They consume large amounts of energy and computational resources. Training and running these models costs money, harms the environment, and creates maintenance challenges. We need our systems to be sustainable.
                    </Paragraph>

                    <Paragraph>
                        Sustainability in software involves four distinct dimensions. The environmental dimension focuses on energy use and carbon footprint. The economic dimension looks at operational costs. The technical dimension deals with accuracy and maintainability. Finally, the social dimension covers user trust and societal impact.
                    </Paragraph>

                    <BlogImage
                        src="/data/images/blog/blog003-sustainability-dimensions.png"
                        alt="Four dimensions of sustainability"
                    />

                    <SectionTitle>Design-Time Boundaries with Decision Maps</SectionTitle>

                    <Paragraph>
                        How do we build a system that balances all four dimensions? The authors of{' '}
                        <a
                            href="https://dl.acm.org/doi/10.1145/3510455.3512776"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
                        >
                            Expressing the adaptation intent as a sustainability goal
                        </a>{' '}
                        suggest using Decision Maps. At design time, architects use these maps to lay out system features and link them to the four sustainability dimensions.
                    </Paragraph>

                    <Paragraph>
                        For example, retraining a machine learning model might improve technical sustainability by increasing prediction accuracy. However, that same action hurts environmental sustainability by increasing energy consumption. A Decision Map helps developers set explicit boundaries. It defines exactly how much accuracy the team is willing to trade for energy savings. It makes the adaptation intent clear from the start.
                    </Paragraph>

                    <BlogImage
                        src="/data/images/blog/blog003-decision-map.png"
                        alt="Decision map balancing sustainability goals"
                    />

                    <Paragraph>
                        Decision Maps are useful for planning. However, they cannot stop heavy ML models on a server from drawing too much power at runtime. We need a way to take those design-time boundaries and enforce them while the machine learning system is actually running.
                    </Paragraph>

                    <Paragraph>
                        This is where our architectural approach,{' '}
                        <a
                            href="https://sa4s-serc.github.io/HarmonE/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
                        >
                            HarmonE
                        </a>{' '}
                        steps in.
                    </Paragraph>

                    <Paragraph>
                        HarmonE bridges the gap between design-time sustainability goals and runtime machine learning operations. It takes the boundaries defined in a Decision Map and feeds them directly into a self-adaptive MAPE-K loop.
                    </Paragraph>

                    <BlogImage
                        src="/data/images/blog/blog003-harmone-architecture.png"
                        alt="HarmonE architecture diagram"
                    />

                    <SectionTitle>From Monitoring to Adaptation</SectionTitle>

                    <Paragraph>
                        Consider an artificial intelligence system predicting traffic flow. The Monitor component in HarmonE continuously observes the system in real time. It gathers live data on prediction accuracy, tracks the exact energy being consumed by the hardware, and watches for distribution shifts in the incoming data. All these metrics are passed directly to the Analyzer component. The Analyzer evaluates this live telemetry against the acceptable boundaries you set at design time using your Decision Map. As long as the system operates within those sustainable limits, HarmonE leaves the pipeline alone.
                    </Paragraph>

                    <Paragraph>
                        If a sudden disruption causes the model to lose accuracy, or if the server draws too much power, the Analyzer flags a violation. The Planner component then steps in to select the best adaptation tactic. It might decide to switch the active model to a lighter, more energy-efficient version from its current repository. However, if the incoming data has changed fundamentally, the system might need to adapt to the new trend.
                    </Paragraph>

                    <Paragraph>
                        Before wasting energy on a computationally expensive retraining cycle, the Planner checks a feature called the Versioned Model Repository. This repository saves previously trained models alongside the specific data distributions they learned from. If the new data shift matches a historical pattern, perhaps a recurring seasonal traffic jam, the system simply reuses the archived model. This prevents redundant training and saves a massive amount of energy.
                    </Paragraph>

                    <Paragraph>
                        If no historical match exists, the Planner schedules a full retraining cycle. Finally, the Executor component takes over to enact the plan. The Executor communicates directly with the underlying machine learning pipeline to swap out active models or trigger the training subsystem. Through this complete loop, HarmonE dynamically balances short-term predictive performance with long-term sustainability. It makes these complex trade-offs on the fly without needing a human administrator to intervene.
                    </Paragraph>

                    <SectionTitle>Making It Practical with Harmonica</SectionTitle>

                    <Paragraph>
                        Reading about software architecture is one thing. Testing it is another.
                    </Paragraph>

                    <Paragraph>
                        We wanted to make it easy for anyone to experiment with these concepts. If you want to test how self adaptation can improve sustainability, building a custom monitoring pipeline from scratch is a high barrier to entry. To solve this, we created{' '}
                        <a
                            href="https://sa4s-serc.github.io/HarmonE-tool/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
                        >
                            Harmonica
                        </a>
                        , our self-adaptation exemplar.
                    </Paragraph>

                    <BlogImage
                        src="/data/images/blog/blog003-harmonica-overview.png"
                        alt="Harmonica tool overview"
                    />

                    <Paragraph>
                        An exemplar is a ready-to-use software tool designed for experimentation. We built Harmonica so researchers and developers can download it, install it, and start testing their own sustainability ideas immediately. It wraps around your existing machine learning pipelines without requiring you to rewrite your training or inference code.
                    </Paragraph>

                    <Paragraph>
                        Harmonica comes with a lightweight web interface. You can use the dashboard to set adaptation boundaries, pick preferred tactics, and watch the system adapt. We included built-in case studies for both time-series regression (like traffic prediction) and computer vision (like object detection using YOLO models).
                    </Paragraph>

                    <BlogImage
                        src="/data/images/blog/blog003-harmonica-dashboard.png"
                        alt="Harmonica dashboard"
                    />

                    <Paragraph>
                        You can upload your own datasets, plug in your own models, and define custom policies using basic configuration files. The live dashboard shows you exactly how much energy your models are consuming. It also shows you when the system decides to switch models or retrain. For deeper research, it provides downloadable telemetry and logs for offline analysis.
                    </Paragraph>

                    <Paragraph>
                        We invite you to visit our{' '}
                        <a
                            href="https://github.com/sa4s-serc/HarmonE-tool"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 underline decoration-green-400 hover:decoration-green-600 transition-colors"
                        >
                            open-source repository
                        </a>
                        , pull the code, and try it out. Experiment with different thresholds. See what happens when you prioritize energy savings over raw accuracy in a computer vision task. Test how your own self-adaptation strategies perform when forced to consider economic and environmental costs.
                    </Paragraph>

                    <Paragraph>
                        Our computing systems will only continue to grow in scale. If we want them to remain viable, we need to teach them how to adapt. With approaches like HarmonE, we can build software that is smart, responsive, and truly sustainable.
                    </Paragraph>
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
