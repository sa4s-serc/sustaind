'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Practice {
    id: string;
    category: CategoryId;
    advice: string;
    detail: string;
    paper: string;
    basis: 'measured' | 'design';
}

interface Publication {
    id: string;
    title: string;
    shortTitle?: string;
    venue: string;
    year: number;
}

type CategoryId = 'measurement' | 'code' | 'agents' | 'models' | 'mlops' | 'adaptation';

const categories: { id: CategoryId; label: string; blurb: string; icon: string }[] = [
    {
        id: 'measurement',
        label: 'Measuring Energy',
        blurb: 'Getting numbers you can trust before you optimise anything.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
        id: 'code',
        label: 'Efficient Code',
        blurb: 'Where to look for energy hotspots in your source code.',
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    },
    {
        id: 'agents',
        label: 'AI Agents',
        blurb: 'Building and choosing agentic systems that do not burn energy in circles.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    },
    {
        id: 'models',
        label: 'Choosing Models',
        blurb: 'Weighing accuracy against energy when picking a model.',
        icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
    },
    {
        id: 'mlops',
        label: 'MLOps & Retraining',
        blurb: 'Keeping production models accurate without wasteful retraining.',
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    },
    {
        id: 'adaptation',
        label: 'Self-Adaptive Systems',
        blurb: 'Designing systems that monitor themselves and adjust at runtime.',
        icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    },
];

type Filter<T extends string> = T | 'all';

function CategoryIcon({ path, className }: { path: string; className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={path} />
        </svg>
    );
}

function venueTag(publication: Publication) {
    const acronym = publication.venue.match(/\(([A-Z]{2,})/)?.[1];
    return acronym ? `${acronym} ${publication.year}` : `${publication.year}`;
}

function PracticeCard({ practice, number, publication }: { practice: Practice; number: number; publication?: Publication }) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-green-300 hover:shadow-md transition-[border-color,box-shadow] duration-200 flex gap-4"
        >
            <span className="font-inter text-sm font-semibold text-orange-500 tabular-nums pt-0.5 shrink-0 w-6">
                {String(number).padStart(2, '0')}
            </span>
            <div className="flex-1 min-w-0">
                <p className="font-inter text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                    {practice.advice}
                </p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{practice.detail}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                    {publication && (
                        <Link
                            href={`/publications#${publication.id}`}
                            title={publication.title}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-700 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-1 hover:bg-orange-100 hover:border-orange-300 transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="sr-only">Source: </span>
                            {publication.shortTitle ?? publication.title}
                            <span className="text-orange-400" aria-hidden="true">·</span>
                            <span className="font-normal">{venueTag(publication)}</span>
                        </Link>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                        <span
                            className={`w-1.5 h-1.5 rounded-full ${practice.basis === 'measured' ? 'bg-green-500' : 'bg-gray-400'}`}
                            aria-hidden="true"
                        />
                        {practice.basis === 'measured' ? 'Measured result' : 'Design guidance'}
                    </span>
                </div>
            </div>
        </motion.article>
    );
}

function FilterPill({
    active,
    onClick,
    children,
    count,
}: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
    count?: number;
}) {
    const ref = useRef<HTMLButtonElement>(null);

    // On narrow screens the pill row scrolls sideways; keep the active pill visible.
    useEffect(() => {
        if (active) ref.current?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }, [active]);

    return (
        <motion.button
            ref={ref}
            type="button"
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
            aria-pressed={active}
            className={`shrink-0 inline-flex items-center gap-2 rounded-full border font-medium px-4 py-2 text-sm transition-colors duration-200 ${active
                    ? 'bg-green-600 border-green-600 text-white shadow-sm'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-700'
                }`}
        >
            {children}
            {count !== undefined && (
                <span
                    className={`tabular-nums text-xs rounded-full px-1.5 min-w-[1.25rem] text-center ${active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                        }`}
                >
                    {count}
                </span>
            )}
        </motion.button>
    );
}

export default function Practices() {
    const [practices, setPractices] = useState<Practice[]>([]);
    const [publications, setPublications] = useState<Record<string, Publication>>({});
    const [category, setCategory] = useState<Filter<CategoryId>>('all');

    useEffect(() => {
        async function fetchData() {
            try {
                const [practicesRes, publicationsRes] = await Promise.all([
                    fetch('./data/practices.json'),
                    fetch('./data/publications.json'),
                ]);
                const practicesData: Practice[] = await practicesRes.json();
                const publicationsData: Publication[] = await publicationsRes.json();
                setPractices(practicesData);
                setPublications(Object.fromEntries(publicationsData.map((p) => [p.id, p])));
            } catch (error) {
                console.error('Error fetching practices:', error);
            }
        }

        fetchData();

        // Restore a shared filter, e.g. /practices?category=agents
        const params = new URLSearchParams(window.location.search);
        const initialCategory = params.get('category');
        if (categories.some((c) => c.id === initialCategory)) setCategory(initialCategory as CategoryId);
    }, []);

    // Keep the URL in sync so a filtered view can be shared.
    useEffect(() => {
        const params = new URLSearchParams();
        if (category !== 'all') params.set('category', category);
        const query = params.toString();
        window.history.replaceState(null, '', `${window.location.pathname}${query ? `?${query}` : ''}`);
    }, [category]);

    // Numbering follows the order in practices.json so each practice keeps the same number under any filter.
    const numbers = useMemo(() => new Map(practices.map((p, i) => [p.id, i + 1])), [practices]);

    const paperCount = new Set(practices.map((p) => p.paper)).size;

    const visible = practices.filter((p) => category === 'all' || p.category === category);
    const sections = categories
        .filter((c) => category === 'all' || c.id === category)
        .map((c) => ({ ...c, items: visible.filter((p) => p.category === c.id) }))
        .filter((s) => s.items.length > 0);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">Best Practices</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Short, practical advice for developers building greener software and AI systems,
                        each drawn from the evidence in our published research.
                    </p>
                    {practices.length > 0 && (
                        <p className="mt-4 text-sm text-gray-500">
                            <span className="font-semibold text-gray-700">{practices.length}</span> practices from{' '}
                            <span className="font-semibold text-gray-700">{paperCount}</span> papers
                        </p>
                    )}
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="sticky top-16 z-30 -mx-4 sm:mx-0 px-4 sm:px-0 py-3 bg-white/95 backdrop-blur-sm border-b border-gray-100 mb-10"
                >
                    <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible modal-scroll" role="group" aria-label="Filter by category">
                        <FilterPill active={category === 'all'} onClick={() => setCategory('all')} count={practices.length}>
                            All
                        </FilterPill>
                        {categories.map((c) => {
                            const count = practices.filter((p) => p.category === c.id).length;
                            return (
                                <FilterPill
                                    key={c.id}
                                    active={category === c.id}
                                    onClick={() => setCategory(category === c.id ? 'all' : c.id)}
                                    count={count}
                                >
                                    <CategoryIcon path={c.icon} className="w-4 h-4" />
                                    {c.label}
                                </FilterPill>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Practices, grouped by category */}
                <div className="space-y-14">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {sections.map((section) => (
                            <motion.section
                                key={section.id}
                                layout
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                aria-labelledby={`section-${section.id}`}
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-100 text-green-600 flex items-center justify-center shrink-0">
                                        <CategoryIcon path={section.icon} className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 id={`section-${section.id}`} className="font-inter text-2xl font-bold text-green-700">
                                            {section.label}
                                        </h2>
                                        <p className="text-gray-600 text-sm sm:text-base">{section.blurb}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                                    <AnimatePresence mode="popLayout" initial={false}>
                                        {section.items.map((practice) => (
                                            <PracticeCard
                                                key={practice.id}
                                                practice={practice}
                                                number={numbers.get(practice.id) ?? 0}
                                                publication={publications[practice.paper]}
                                            />
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </motion.section>
                        ))}
                    </AnimatePresence>
                </div>


                {/* Closing note */}
                {practices.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between"
                    >
                        <div className="max-w-2xl">
                            <h2 className="font-inter text-xl font-bold text-green-700 mb-2">Want the full evidence?</h2>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                Each practice links to the paper it comes from. Results were measured under specific
                                setups, so treat the numbers as a guide and measure on your own workload.
                            </p>
                        </div>
                        <Link
                            href="/publications"
                            className="shrink-0 inline-flex justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Browse publications
                        </Link>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
