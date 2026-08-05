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
            className="w-full max-w-md h-auto mx-auto rounded-lg shadow-md my-6 sm:my-8"
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

const methods: { question: string; method: string; practice: string }[] = [
    {
        question: 'Does Technique A work better than Technique B?',
        method: 'Controlled Experiment',
        practice: 'Testing two approaches in a controlled environment to prove cause and effect.',
    },
    {
        question: 'How does this actually play out inside a real engineering team?',
        method: 'Case Study',
        practice: 'In-depth observation of a real company, project, or workflow in its natural state.',
    },
    {
        question: 'What do developers actually believe, do, or experience at scale?',
        method: 'Survey',
        practice: 'Gathering broad data from hundreds or thousands of practitioners across the industry.',
    },
    {
        question: 'What hidden patterns exist in the code, and artefacts we already create?',
        method: 'Repository Mining',
        practice: 'Analyzing historical data from GitHub, GitLab, or issue trackers.',
    },
    {
        question: 'What does the entire existing body of research say about this topic?',
        method: 'Systematic Literature Review',
        practice: 'Aggregating and synthesizing findings from dozens of prior studies.',
    },
    {
        question: "What happens under conditions we can't safely test in real life?",
        method: 'Simulation',
        practice: 'Modeling software architectures and environments computationally.',
    },
    {
        question: 'Can we help a real team improve while actively studying the process?',
        method: 'Action Research',
        practice: 'Partnering directly with a team to introduce a change and observe the results together.',
    },
];

export default function CodeMeetsEvidenceBlog() {
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
                        Code meets Evidence: What is Empirical SE?
                    </h1>

                    <p className="text-base sm:text-lg text-gray-600 italic mb-4">
                        Walking the road to EMSE: how I learned one step (and lesson) at a time, and still
                        learning along the way.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By Aneetta Sara Shany</span>
                        <span className="hidden sm:inline">•</span>
                        <span>5 August 2026</span>
                        <span className="hidden sm:inline">•</span>
                        <span>6 min read</span>
                    </div>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-sm sm:prose-base max-w-none"
                >
                    <BlogImage
                        src="/data/images/blog/blog005-what-is-emse.png"
                        alt="Illustration of a research team gathered around a table asking 'What is EMSE?'"
                    />

                    <blockquote className="my-6 rounded-lg border-l-4 border-l-green-600 bg-gray-50 px-6 py-5 italic text-gray-800">
                        <span className="block">"Microservices scale better than monoliths."</span>
                        <span className="block">"Code review catches more defects than testing alone."</span>
                        <span className="block">"Quantising the model cuts its energy use in half."</span>
                    </blockquote>

                    <Paragraph>
                        Each of these is a claim about the world. Some are true. Some are true only in
                        particular contexts. Some are folklore repeated until it started to sound like fact.{' '}
                        <strong>Empirical Software Engineering (EMSE)</strong> is the part of our field that
                        asks one awkward question about every such sentence: <em>HOW DO YOU KNOW?</em>
                    </Paragraph>

                    <SectionTitle>WHAT it is?</SectionTitle>

                    <Paragraph>
                        Empirical Software Engineering studies how software, developers, and organizations
                        work in the real world. Instead of relying on intuition or authority, it bases its
                        conclusions on systematically gathered evidence. This leads to two surprising
                        takeaways for newcomers:
                    </Paragraph>

                    <ul className="list-disc list-outside ml-5 space-y-3 mb-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                        <li>
                            <em>Code doesn't write itself.</em> Software engineering involves human decisions,
                            team dynamics, and tight deadlines. To get the full picture, empirical research
                            studies both the technical systems (experiments, measurement) and the people
                            building them (interviews, surveys).
                        </li>
                        <li>
                            <em>Building something is not evaluating it.</em> A new tool is one contribution.
                            Showing that it works, for whom, and under which conditions is a separate
                            contribution with its own design, its own methods, and its own ways of going
                            wrong.
                        </li>
                    </ul>

                    <SectionTitle>WHY did the community form?</SectionTitle>

                    <Paragraph>
                        It all started in the <em>1970s</em> when pioneering teams like NASA's Software
                        Engineering Lab realized you couldn't just guess what made software good. Instead, you
                        had to measure real teams in the wild using structured frameworks like the
                        Goal-Question-Metric approach. By the <em>1990s</em>, the field faced a serious
                        wake-up call: studies revealed that nearly half of all software engineering papers
                        were making bold technical claims without presenting a single piece of experimental
                        proof. To fix this "<em>credibility gap</em>," researchers built dedicated journals,
                        research networks, and standardized guidelines to bring rigor to the discipline.
                        Fast-forward to <em>today</em>, and the community has borrowed lessons from
                        evidence-based medicine, shifting away from one-off studies toward systematic reviews
                        and shared quality standards so we can base software practices on solid, repeatable
                        data instead of pure hype.
                    </Paragraph>

                    <SectionTitle>HOW is it done?</SectionTitle>

                    <Paragraph>
                        There is no single "<em>empirical method</em>." You don't pick a method based on
                        personal taste. You pick it based on the specific question you're trying to answer.
                    </Paragraph>

                    <div className="my-6 overflow-x-auto">
                        <table className="w-full min-w-[36rem] border-collapse text-sm">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                                        If your question is...
                                    </th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                                        The right method
                                    </th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                                        What it looks like in practice
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {methods.map((row) => (
                                    <tr key={row.method} className="align-top">
                                        <td className="border border-gray-300 px-4 py-3 italic text-gray-700">
                                            {row.question}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-gray-700 whitespace-nowrap">
                                            {row.method}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                                            {row.practice}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <Paragraph>
                        <em>The Gold Standard Rule:</em> Control and realism are a trade-off. A controlled
                        experiment gives you a clean answer in an artificial environment. A case study gives
                        you a realistic answer in a messy, real-world environment. You can rarely have both at
                        the same time!
                    </Paragraph>

                    <SectionTitle>
                        A Worked Example: Does INT8 Model Quantization Actually Save Energy?
                    </SectionTitle>

                    <Paragraph>
                        Imagine your team decides to quantize a Machine Learning model down to INT8 to cut
                        energy costs. Before you run off to write a quick benchmark, let's see how Empirical
                        Software Engineering turns a vague guess into a rock-solid finding.
                    </Paragraph>

                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-2">
                        Step 1: The GQM Framework (Goal → Question → Metric)
                    </h3>

                    <Paragraph>
                        Instead of just running a quick script and grabbing a random graph, you structure your
                        test top-down:
                    </Paragraph>

                    <ul className="list-disc list-outside ml-5 space-y-3 mb-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                        <li>
                            <em>Goal</em>: Evaluate INT8 quantization on an edge device to see if the energy
                            savings justify any drop in accuracy.
                        </li>
                        <li>
                            <em>Questions</em>: How much energy do we save per 1,000 inferences? What accuracy
                            do we lose in return?
                        </li>
                        <li>
                            <em>Metrics</em>: Joules per 1,000 inferences (using a real hardware meter), Top-1
                            accuracy, and p95 latency.
                        </li>
                    </ul>

                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-2">
                        Step 2: The Setup
                    </h3>

                    <Paragraph>
                        To keep the test fair, keep the hardware, workload, and environment identical. Run
                        both model variants in a random mixed order across 30 runs, discard the initial
                        warm-up data, and keep background tasks off.
                    </Paragraph>

                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-2">
                        Step 3: The 4 Rules That Separate "Data" from "Noise"
                    </h3>

                    <Paragraph>
                        This is where true empirical engineering happens. Before you publish your findings,
                        ask yourself these four critical questions:
                    </Paragraph>

                    <ul className="list-disc list-outside ml-5 space-y-3 mb-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                        <li>
                            <strong>Construct Validity</strong> (Are you measuring what you think you're
                            measuring?):{' '}
                            <em>
                                Software estimation models let us analyze complex systems, but physical
                                hardware meters provide the ultimate ground truth. A strong study ensures that
                                any software-based power estimation is rooted in, and validated by, real
                                hardware measurements.
                            </em>
                        </li>
                        <li>
                            <strong>Internal Validity</strong> (Did outside factors taint the result?):{' '}
                            <em>
                                If your quantized tests ran on a hot afternoon, you might be measuring thermal
                                throttling or air conditioning, rather than your code! That's why alternating
                                and randomizing runs is mandatory.
                            </em>
                        </li>
                        <li>
                            <strong>External Validity</strong> (Will this work for anyone else?):{' '}
                            <em>
                                Be honest about scope. You measured one model on one device. Testing a second
                                model family turns an isolated anecdote into real evidence.
                            </em>
                        </li>
                        <li>
                            <strong>Conclusion Validity</strong> (Is the difference actually real?):{' '}
                            <em>
                                A 2% energy saving with 5% variance isn't a victory. It's just noise. Always
                                measure spread and effect size, not just averages.
                            </em>
                        </li>
                    </ul>

                    <Paragraph>
                        <em>The Big Mindset Shift</em>: In empirical work, your hypotheses are locked in
                        before you run the test. If INT8 shows "no significant difference," that is still a
                        successful result. Proving something didn't work saves future teams from wasting time,
                        which is just as valuable as a massive performance win.
                    </Paragraph>

                    <SectionTitle>Six things to keep in mind</SectionTitle>

                    <ol className="list-decimal list-outside ml-5 space-y-3 mb-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                        <li>
                            <strong>Goal first, Metric last:</strong>{' '}
                            <em>
                                It's always tempting to measure whatever is easy to grab. Don't fall into that
                                trap. Define the problem first, formulate your questions second, and then pick
                                your metrics.
                            </em>
                        </li>
                        <li>
                            <strong>Context is Everything:</strong>{' '}
                            <em>
                                There are almost no universal laws in software. "It depends" is a completely
                                valid answer, as long as you can explicitly state what it depends on.
                            </em>
                        </li>
                        <li>
                            <strong>Validity is a Design Step, not an Afterthought:</strong>{' '}
                            <em>
                                Thinking about risks and limitations before you run the experiment lets you
                                prevent them. Naming a major flaw in your conclusion section just means you
                                forgot to design it away!
                            </em>
                        </li>
                        <li>
                            <strong>Developers Are Humans, Not Compilers:</strong>{' '}
                            <em>
                                When your research involves people, human factors matter. How you recruit
                                participants, request consent, protect anonymity, and incentivize them
                                directly shapes the data you collect.
                            </em>
                        </li>
                        <li>
                            <strong>Statistical Significance is not Practical Significance:</strong>{' '}
                            <em>
                                A 0.5% optimization might be statistically real, but if it doesn't change a
                                developer's daily workflow or business outcome, it doesn't really matter.
                                Always look for practical impact.
                            </em>
                        </li>
                        <li>
                            <strong>Make It Reproducible:</strong>{' '}
                            <em>
                                Share your scripts, protocol, and raw dataset. In modern research and
                                engineering, an experiment that can't be reproduced by someone else is just a
                                story you told.
                            </em>
                        </li>
                    </ol>

                    <hr className="my-8 border-t border-gray-300" />

                    <SectionTitle>References &amp; Resources</SectionTitle>

                    <ol className="list-decimal list-outside ml-5 space-y-3 mb-6 text-sm text-gray-600 leading-relaxed">
                        <li>
                            V. R. Basili, G. Caldiera, and H. D. Rombach. "<strong>The Goal Question Metric
                            Approach</strong>." <em>Encyclopedia of Software Engineering</em>, Wiley, 1994.{' '}
                            <ExternalLink href="https://www.ecs.csun.edu/~rlingard/COMP587/gqm.pdf">
                                PDF
                            </ExternalLink>
                        </li>
                        <li>
                            W. F. Tichy, P. Lukowicz, L. Prechelt, and E. A. Heinz. "
                            <strong>Experimental Evaluation in Computer Science: A Quantitative Study</strong>
                            ." <em>Journal of Systems and Software</em>, 1995.{' '}
                            <ExternalLink href="https://doi.org/10.1016/0164-1212(94)00111-Y">
                                doi:10.1016/0164-1212(94)00111-Y
                            </ExternalLink>
                        </li>
                        <li>
                            C. Wohlin, P. Runeson, M. Höst, M. C. Ohlsson, B. Regnell, and A. Wesslén.{' '}
                            <strong>Experimentation in Software Engineering</strong>. Springer, 2024 edition
                            (1st ed. Kluwer 2000; 2nd ed. Springer 2012).{' '}
                            <ExternalLink href="https://doi.org/10.1007/978-3-662-69306-3">
                                doi:10.1007/978-3-662-69306-3
                            </ExternalLink>
                        </li>
                        <li>
                            P. Runeson and M. Höst. "
                            <strong>
                                Guidelines for Conducting and Reporting Case Study Research in Software
                                Engineering
                            </strong>
                            ." <em>Empirical Software Engineering</em>, 2009.{' '}
                            <ExternalLink href="https://doi.org/10.1007/s10664-008-9102-8">
                                doi:10.1007/s10664-008-9102-8
                            </ExternalLink>
                        </li>
                        <li>
                            B. A. Kitchenham, T. Dybå, and M. Jørgensen. "
                            <strong>Evidence-Based Software Engineering</strong>."{' '}
                            <em>Proc. 26th International Conference on Software Engineering (ICSE '04)</em>,
                            2004.{' '}
                            <ExternalLink href="https://doi.org/10.1109/ICSE.2004.1317449">
                                doi:10.1109/ICSE.2004.1317449
                            </ExternalLink>
                        </li>
                        <li>
                            D. Mendez, P. Avgeriou, M. Kalinowski, and N. Bin Ali (eds.).{' '}
                            <strong>Handbook on Teaching Empirical Software Engineering</strong>. Springer,
                            2024.{' '}
                            <ExternalLink href="https://doi.org/10.1007/978-3-031-71769-7">
                                doi:10.1007/978-3-031-71769-7
                            </ExternalLink>{' '}
                            · editorial introduction preprint:{' '}
                            <ExternalLink href="https://arxiv.org/abs/2501.07195">arXiv:2501.07195</ExternalLink>{' '}
                            · open companion materials:{' '}
                            <ExternalLink href="https://www.emse.education/">emse.education</ExternalLink>
                        </li>
                        <li>
                            Esposito, Robredo, Sridharan, Travassos, Peñaloza &amp; Lenarduzzi.{' '}
                            <strong>
                                A Critical Reflection on the State of Data Analysis in Empirical Software
                                Engineering
                            </strong>
                            . Published in ACM <em>TOSEM</em>, 2025.{' '}
                            <ExternalLink href="https://arxiv.org/abs/2501.12728">
                                arXiv:2501.12728
                            </ExternalLink>
                        </li>
                        <li>
                            K.-J. Stol and B. Fitzgerald. "
                            <strong>The ABC of Software Engineering Research</strong>."{' '}
                            <em>ACM Transactions on Software Engineering and Methodology</em>, 2018.{' '}
                            <ExternalLink href="https://dl.acm.org/doi/abs/10.1145/3241743">
                                ACM Digital Library
                            </ExternalLink>
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
