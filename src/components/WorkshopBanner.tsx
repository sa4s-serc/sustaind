import Link from 'next/link';

const WorkshopBanner = () => (
    <Link
        href="/workshop"
        className="group block bg-gradient-to-r from-green-700 to-green-600 text-white"
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-4 text-center sm:text-left">
            <span className="inline-flex items-center justify-center self-center rounded-full bg-orange-500 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide">
                Workshop
            </span>
            <span className="text-sm sm:text-base">
                <strong className="font-semibold">Engineering Sustainable Agentic AI Systems.</strong>{' '}
                Free one-day hands-on workshop at IIIT Hyderabad on 4 December 2026. 30 seats. Register by 30 November.
            </span>
            <span className="text-sm sm:text-base font-semibold whitespace-nowrap underline-offset-4 group-hover:underline">
                Learn more &rarr;
            </span>
        </div>
    </Link>
);

export default WorkshopBanner;
