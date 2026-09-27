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

function BlogFigure({ src, alt, caption }: { src: string; alt: string; caption: React.ReactNode }) {
    const basePath = process.env.NODE_ENV === 'production' ? '/sustaind' : '';

    return (
        <figure className="my-6 sm:my-8">
            <img
                src={`${basePath}${src}`}
                alt={alt}
                className="w-full h-auto rounded-lg shadow-md"
            />
            <figcaption className="text-xs sm:text-sm text-gray-500 italic mt-3 text-center">
                {caption}
            </figcaption>
        </figure>
    );
}

export default function SoftwareMetabolismBlog() {
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
                        Software Metabolism
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4">
                        <span>By Arihant Tripathy</span>
                        <span className="hidden sm:inline">•</span>
                        <span>October 5, 2026</span>
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
                        If you ask a team whether the current version of their service uses more energy than
                        the version from two years ago, they usually can&apos;t tell you. This is odd when you
                        think about it. They can tell you its latency to the millisecond. They can tell you
                        what it costs to run each month. But the energy it spends to do its job is something
                        nobody measures.
                    </Paragraph>

                    <Paragraph>
                        It&apos;s not that software people don&apos;t care about energy. There&apos;s a fair
                        amount of research on it. People have compared how much energy different programming
                        languages use [1], and which Java collection classes are cheapest [2]. But nearly all
                        of it measures small pieces of code, once, under a benchmark. That tells you which
                        sorting routine to pick. It doesn&apos;t tell you whether the system you&apos;re
                        running is getting better or worse.
                    </Paragraph>

                    <Paragraph>
                        What an operator actually pays for is the energy the whole system spends to deliver
                        whatever it delivers, over the months and years it&apos;s deployed. I think that
                        quantity needs a name, and the best one I&apos;ve found comes from biology. Call it{' '}
                        <strong>software metabolism</strong>.
                    </Paragraph>

                    <Paragraph>
                        A system&apos;s <strong>metabolic rate</strong> is the energy it uses per unit of time
                        while it&apos;s deployed and ready to serve. That&apos;s just a power, in watts. The
                        more useful number is what you get when you divide the work the system does by the
                        energy it spends doing it. Call that <strong>metabolic efficiency</strong>. For a web
                        service the work might be requests served. For a batch system it might be jobs
                        finished. Whatever it is, efficiency lets you compare two systems that do the same job,
                        however differently they&apos;re built.
                    </Paragraph>

                    <Paragraph>
                        Biologists split metabolism into two parts, and the split works for software too.
                        There&apos;s the <strong>basal</strong> rate, which is what you spend just being alive.
                        And there&apos;s the <strong>active</strong> rate, which is what you spend doing things.
                        For software, the basal part is everything a system does to stay a system. It holds
                        memory. It keeps connections open. It sends heartbeats so the rest of the cluster knows
                        it hasn&apos;t died. None of that is work anyone asked for, but it all uses energy.
                    </Paragraph>

                    <Paragraph>
                        People who know hardware will recognize this as the old split between static and
                        dynamic power, just applied to a whole deployment instead of a chip. It&apos;s also why
                        idle servers are so expensive. Barroso and Hölzle pointed out years ago that a server
                        doing almost nothing still draws a large fraction of its peak power [3].
                    </Paragraph>

                    <BlogFigure
                        src="/data/images/blog/blog007-software-metabolism.png"
                        alt="Five-panel diagram. 1: the software system as a whole, covering service/API, database, workers, caches, third-party dependencies and infrastructure. 2: basal energy (idle/ready) plus active energy (work done) gives the metabolic rate, energy consumed per unit time. 3: function-normalized quantities, metabolic rate as energy per unit time and metabolic efficiency as function delivered per unit energy, with requests served, jobs completed and outputs produced as example functions. 4: a longitudinal view across releases v1, v2, v3 that tracks rate and efficiency to detect metabolic bloat. 5: a scaling analysis plotting metabolic rate against system size, asking whether rate grows with size to a power alpha that is sub-linear, linear or super-linear."
                        caption={
                            <>
                                Figure 1: Software metabolism as a whole-system idea. Basal and active energy
                                add up to a metabolic rate, which is divided by the work the system delivers and
                                then tracked across releases and across system sizes.
                            </>
                        }
                    />

                    <Paragraph>
                        Figure 1 shows how the pieces fit. You draw a boundary around the whole system, runtime
                        and infrastructure included. You measure the rate and divide by what the system
                        delivers. Then you can look at the result in two ways: over time, and across systems of
                        different sizes.
                    </Paragraph>

                    <Paragraph>
                        The first is where things get practical. Software tends to grow. Lehman noticed this
                        decades ago [4], and anyone who has worked on a codebase for more than a year has
                        noticed it too. Each release adds a dependency or a framework or some background
                        process that seemed like a good idea at the time. None of these is expensive on its
                        own. But they add up, and nobody is watching the total.
                    </Paragraph>

                    <Paragraph>
                        So I&apos;d guess most long-lived systems suffer from what you could call{' '}
                        <strong>metabolic bloat</strong>. The rate climbs across releases faster than the
                        useful work does, and efficiency gets worse. The reason nobody notices is that nobody
                        records the number. If you did, bloat would become an ordinary regression. We already
                        fail builds when latency jumps. There&apos;s no reason we couldn&apos;t fail them when
                        energy per request jumps.
                    </Paragraph>

                    <Paragraph>
                        The second way of looking at it is more speculative, and to me more interesting.
                    </Paragraph>

                    <Paragraph>
                        In biology there&apos;s a rule called <strong>Kleiber&apos;s law</strong>. An
                        animal&apos;s metabolic rate grows with its body mass raised to roughly the
                        three-quarters power. That means an elephant uses much more energy than a mouse in
                        total, but much less per kilogram. Big animals get economies of scale. West, Brown and
                        Enquist later showed this falls out of the way branching networks move resources
                        through a body [5].
                    </Paragraph>

                    <Paragraph>
                        Does software have anything like this? As far as I know, nobody has looked. If you
                        wanted to find out, the experiment isn&apos;t hard to describe. Pick some measure of
                        size, like lines of code or memory. Measure the metabolic rate of a lot of systems, or
                        of one system across its history. Then see whether energy grows slower or faster than
                        size.
                    </Paragraph>

                    <Paragraph>
                        Either answer would tell you something. If bigger systems turn out to be more efficient
                        per unit of size, the way elephants are, that&apos;s a nice fact about software. If
                        they turn out to be less efficient, that&apos;s a much more useful fact, because it
                        means growth itself is a sustainability problem, and keeping systems small is one of
                        the most direct ways to cut energy.
                    </Paragraph>

                    <Paragraph>
                        Once you start thinking of software this way, other ideas from biology start to look
                        useful too. The ratio of basal to active energy, which you could call a system&apos;s{' '}
                        <strong>metabolic profile</strong>, varies a lot. A busy model-serving endpoint spends
                        almost all its energy on work. A rarely used internal service on hungry hardware spends
                        almost all of it waiting [3]. Few teams know which kind they have, and it matters,
                        because the two need opposite fixes. You make the first cheaper by making the work
                        cheaper. You make the second cheaper by making it need less to stay awake.
                    </Paragraph>

                    <Paragraph>
                        Animals have a trick for that second case, which is to hibernate. When there&apos;s
                        nothing to do, they drop their basal rate. The software equivalents are things like
                        scale-to-zero and serverless. There&apos;s also a milder version where the system
                        doesn&apos;t sleep but does less. Our group has worked on self-adaptive ML systems that
                        switch models at runtime to hold a quality target while using less energy [6], [7].
                    </Paragraph>

                    <Paragraph>
                        There&apos;s an even broader version of this choice. Warm-blooded animals spend energy
                        keeping their temperature constant no matter what. Cold-blooded ones let their
                        temperature follow the environment. Most always-on services are warm-blooded. Their
                        caches and runtimes stay hot whether or not anyone shows up. Event-driven systems are
                        cold-blooded. Their energy rises and falls with load. Neither is simply better. Staying
                        warm buys you low, predictable latency. Going cold saves energy, but you pay for it
                        each time you have to warm back up. Which is right depends on your load, and having a
                        number for metabolism gives you a way to decide.
                    </Paragraph>

                    <Paragraph>
                        I should say what metabolism isn&apos;t. It isn&apos;t carbon. The same kilowatt-hour
                        can be clean or dirty depending on when and where you draw it, and there&apos;s good
                        work on moving jobs to greener hours and regions [8], as well as on where that stops
                        helping [9]. That work changes when you spend energy. Metabolism is about spending less
                        of it. The two fit together.
                    </Paragraph>

                    <Paragraph>
                        I should also say where the biology stops working, because borrowed ideas can mislead
                        you if you&apos;re not careful. Software has no fixed body, so &quot;size&quot; could
                        mean several things, and they won&apos;t all give the same answer. Software doesn&apos;t
                        dissipate energy either; hardware does. Assigning a rate to one service running on
                        shared machines is hard, and I suspect it&apos;s the hardest part of the whole problem.
                        If you try the experiment above, that&apos;s where you&apos;ll spend most of your time.
                    </Paragraph>

                    <Paragraph>
                        The most interesting mismatch is moral. For an animal, basal metabolism is just the
                        price of being alive. For software, a lot of it is waste. A better design could deliver
                        the same thing for less. That&apos;s where the analogy breaks, and it&apos;s also where
                        the opportunity is.
                    </Paragraph>

                    <Paragraph>
                        If you run a service, you could start small. Measure what it draws when nobody&apos;s
                        using it, then what it draws under normal load. That ratio alone will tell you which
                        kind of fix to look for. Do it again after the next few releases and you&apos;ll know
                        whether you have bloat. Do it across enough systems and you might find out whether
                        software has its own Kleiber&apos;s law.
                    </Paragraph>

                    <Paragraph>
                        In the meantime, you might want to check on that cron job nobody remembers writing.
                        It&apos;s been awake this whole time.
                    </Paragraph>

                    <hr className="my-8 border-t border-gray-300" />

                    <SectionTitle>References</SectionTitle>

                    <ol className="list-decimal list-outside ml-5 space-y-3 mb-6 text-sm text-gray-600 leading-relaxed">
                        <li>
                            R. Pereira, M. Couto, F. Ribeiro, R. Rua, J. Cunha, J. P. Fernandes, and J. Saraiva,
                            &quot;Energy efficiency across programming languages: How do energy, time, and memory
                            relate?,&quot; in <em>Proc. SLE</em>, 2017, pp. 256–267.
                        </li>
                        <li>
                            S. Hasan, Z. King, M. Hafiz, M. Sayagh, B. Adams, and A. Hindle, &quot;Energy
                            profiles of Java collections classes,&quot; in <em>Proc. ICSE</em>, 2016, pp.
                            225–236.
                        </li>
                        <li>
                            L. A. Barroso and U. Hölzle, &quot;The case for energy-proportional
                            computing,&quot; <em>Computer</em>, vol. 40, no. 12, pp. 33–37, 2007.
                        </li>
                        <li>
                            M. M. Lehman, &quot;Laws of software evolution revisited,&quot; in{' '}
                            <em>Proc. EWSPT</em>, 1996.
                        </li>
                        <li>
                            G. B. West, J. H. Brown, and B. J. Enquist, &quot;A general model for the origin of
                            allometric scaling laws in biology,&quot; <em>Science</em>, vol. 276, no. 5309, pp.
                            122–126, 1997.
                        </li>
                        <li>
                            S. Kulkarni, A. Marda, and K. Vaidhyanathan, &quot;Towards self-adaptive machine
                            learning-enabled systems through QoS-aware model switching,&quot; in{' '}
                            <em>Proc. ASE (NIER Track)</em>, 2023.
                        </li>
                        <li>
                            M. Tedla, S. Kulkarni, and K. Vaidhyanathan, &quot;EcoMLS: A self-adaptation
                            approach for architecting green ML-enabled systems,&quot; in{' '}
                            <em>Proc. ICSA-C</em>, 2024.
                        </li>
                        <li>
                            P. Wiesner, I. Behnke, D. Scheinert, K. Gontarska, and L. Thamsen, &quot;Let&apos;s
                            wait awhile: How temporal workload shifting can reduce carbon emissions in the
                            cloud,&quot; in <em>Proc. Middleware</em>, 2021.
                        </li>
                        <li>
                            T. Sukprasert, A. Souza, N. Bashir, D. Irwin, and P. Shenoy, &quot;On the
                            limitations of carbon-aware temporal and spatial workload shifting in the
                            cloud,&quot; in <em>Proc. EuroSys</em>, 2024, pp. 924–941.
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
