import Link from 'next/link';

const registerUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfN3eCaJjMG2VpqrBILbyEfsndeVf_YNGPIeaxR3cgcLytHzw/viewform';

const facts = [
    { label: 'Date', value: 'Friday, 4 December 2026' },
    { label: 'Time', value: '9:00 AM to 4:30 PM' },
    { label: 'Venue', value: 'Software Engineering Research Center, IIIT Hyderabad' },
    { label: 'Register by', value: 'Monday, 30 November 2026' },
];

const learn = [
    'Explain, in plain terms, what an agentic AI system is.',
    'Describe sustainability as more than "green". It spans environmental, economic, technical, social and individual dimensions.',
    'See why agentic systems raise new sustainability concerns.',
    'Recognize that architecture decisions shape sustainability.',
    "Get a feel for SustAInd's research and apply one idea in a small group exercise.",
];

const hands = [
    'Measuring energy consumption',
    'Optimizing agent designs',
    'Assessing technical debt',
    'Exploring runtime adaptations',
];

const schedule = [
    { time: '9:00 to 9:30 AM', title: 'Registration of participants', note: 'Attendance is marked.' },
    { time: '9:30 to 10:30 AM', title: 'Introduction by Prof. Karthik', note: 'An introduction to SustAInd and a talk on Agentic AI. Attendance is marked.' },
    {
        time: '10:30 AM to 12:30 PM',
        title: 'Hands-on tutorials by students of the SustAInd team',
        note: 'Sustainability in Agentic AI at design time and run time, and self-adaptation. Tea and coffee break in between. Attendance is marked.',
    },
    { time: '12:30 to 1:30 PM', title: 'Lunch', note: '' },
    {
        time: '1:30 to 4:15 PM',
        title: 'Hackathon and presentations by students of the SustAInd team',
        note: '10 groups of 3 students, pre-assigned by the SustAInd team. Each group gets one problem statement. Tea and coffee break in between.',
    },
    { time: '4:15 to 4:30 PM', title: 'Conclusion', note: 'Attendance is marked.' },
];

const details = [
    { title: 'Who it is for', body: 'Engineering students. The workshop is aimed at undergraduate, postgraduate and PhD students interested in Agentic AI and sustainability.' },
    { title: 'Cost', body: 'Registration is free.' },
    { title: 'Selection', body: 'Seats are limited to 30 so the workshop stays interactive. Registrations will be shortlisted, and selected participants will be notified separately by email.' },
    { title: 'Certificate', body: 'All attendees receive a participation certificate. Attendance is mandatory at the introduction, the tutorials and the conclusion.' },
    { title: 'What to bring', body: 'Your own laptop.' },
    { title: 'Accommodation', body: 'Accommodation support is not available because of logistical constraints.' },
];

const CtaButton = ({ className = '' }: { className?: string }) => (
    <a
        href={registerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 ${className}`}
    >
        Register your interest
    </a>
);

export default function WorkshopPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-green-800 to-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 lg:pr-[26rem]">
                    <p className="text-sm font-semibold uppercase tracking-wide text-orange-300">
                        One-day hands-on workshop
                    </p>
                    <h1 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight">
                        Engineering Sustainable Agentic AI Systems
                    </h1>
                    <p className="mt-5 text-lg sm:text-xl text-green-50 max-w-2xl">
                        Can we engineer Agentic AI systems that are not just intelligent, but also sustainable?
                    </p>
                    <p className="mt-5 max-w-2xl text-green-50">
                        SustAInd (Sustainable AI for India), an ANRF-funded project, is organising this in-person workshop at the
                        Software Engineering Research Center (SERC), IIIT Hyderabad.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4 lg:hidden">
                        <CtaButton />
                        <span className="text-sm text-green-50">Free. 30 seats. Register by 30 November.</span>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-[1fr_22rem] lg:gap-12">
                    {/* Main column */}
                    <div className="py-12 space-y-14 min-w-0">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900">What you will learn</h2>
                            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                                {learn.map((item) => (
                                    <li key={item} className="flex gap-3 rounded-lg border border-gray-200 p-4 text-gray-700">
                                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900">About the workshop</h2>
                            <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    The day starts with an introduction to SustAInd and a talk on Agentic AI. It is followed by hands-on
                                    tutorials on sustainability in Agentic AI at design time and run time, self-adaptation, and a team
                                    hackathon.
                                </p>
                                <p>
                                    We begin with the basics of AI agents, then introduce sustainability from environmental, technical and
                                    economic perspectives. The hands-on sessions cover the following topics.
                                </p>
                            </div>
                            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-gray-700">
                                {hands.map((h) => (
                                    <li key={h} className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                A fun team-based activity at the end lets everyone put it all into practice.
                            </p>
                        </section>

                        <section id="schedule">
                            <h2 className="text-2xl font-bold text-gray-900">Schedule</h2>
                            <ol className="mt-6 border-l-2 border-green-200 space-y-6 ml-2">
                                {schedule.map((s) => (
                                    <li key={s.time} className="relative pl-6">
                                        <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-green-600 bg-white" />
                                        <p className="text-sm font-semibold text-orange-600">{s.time}</p>
                                        <p className="font-semibold text-gray-900">{s.title}</p>
                                        {s.note && <p className="text-sm text-gray-600 mt-0.5">{s.note}</p>}
                                    </li>
                                ))}
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900">Good to know</h2>
                            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                                {details.map((d) => (
                                    <div key={d.title} className="rounded-lg bg-gray-50 p-4">
                                        <dt className="font-semibold text-gray-900">{d.title}</dt>
                                        <dd className="mt-1 text-sm text-gray-700">{d.body}</dd>
                                    </div>
                                ))}
                            </dl>
                        </section>

                        <section className="rounded-xl bg-green-50 p-6 sm:p-8 text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Interested?</h2>
                            <p className="mt-2 text-gray-700">Registration closes on Monday, 30 November 2026.</p>
                            <CtaButton className="mt-5" />
                        </section>

                        <section className="border-t border-gray-200 pt-8 text-sm text-gray-600">
                            <p className="font-semibold text-gray-900">Organised by</p>
                            <p className="mt-2">Anusandhan National Research Foundation (ANRF)</p>
                            <p>Software Engineering Research Center (SERC)</p>
                            <p>International Institute of Information Technology Hyderabad (IIITH)</p>
                            <p className="mt-4">
                                Learn more about <Link href="/about" className="text-green-700 underline">SustAInd</Link>.
                            </p>
                        </section>
                    </div>

                    {/* Sticky summary card */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 -mt-44 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                            <p className="text-2xl font-bold text-green-700">Free</p>
                            <p className="text-sm text-gray-600">30 seats. Registrations are shortlisted.</p>
                            <CtaButton className="mt-4 w-full" />
                            <dl className="mt-6 space-y-4 text-sm">
                                {facts.map((f) => (
                                    <div key={f.label}>
                                        <dt className="font-semibold text-gray-900">{f.label}</dt>
                                        <dd className="text-gray-700">{f.value}</dd>
                                    </div>
                                ))}
                            </dl>
                            <ul className="mt-6 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-700">
                                <li>Certificate of participation</li>
                                <li>Bring your own laptop</li>
                                <li>In person only</li>
                            </ul>
                        </div>
                    </aside>
                </div>

                {/* Facts for small screens */}
                <section className="lg:hidden -mt-4 mb-10 rounded-xl border border-gray-200 p-5">
                    <dl className="grid gap-4 sm:grid-cols-2 text-sm">
                        {facts.map((f) => (
                            <div key={f.label}>
                                <dt className="font-semibold text-gray-900">{f.label}</dt>
                                <dd className="text-gray-700">{f.value}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </div>
        </div>
    );
}
