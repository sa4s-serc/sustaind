'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Inline citation marker. Shows the matching reference entry (the element with
// id `ref-{n}`, usually an <li> in the post's References list) in a tooltip on
// hover or focus, and links to it on click.

interface CiteProps {
    n: number;
    variant?: 'bracket' | 'sup';
}

const TOOLTIP_WIDTH = 320;
const MARGIN = 12;

export default function Cite({ n, variant = 'bracket' }: CiteProps) {
    const anchorRef = useRef<HTMLAnchorElement>(null);
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');
    const [pos, setPos] = useState<{ left: number; top: number; above: boolean }>({ left: 0, top: 0, above: true });

    const place = useCallback(() => {
        const anchor = anchorRef.current;
        if (!anchor) return;

        const rect = anchor.getBoundingClientRect();
        const width = Math.min(TOOLTIP_WIDTH, window.innerWidth - MARGIN * 2);
        const left = Math.min(
            Math.max(rect.left + rect.width / 2 - width / 2, MARGIN),
            window.innerWidth - width - MARGIN,
        );
        const above = rect.top > 180;

        setPos({ left, top: above ? rect.top - 8 : rect.bottom + 8, above });
    }, []);

    const show = useCallback(() => {
        const ref = document.getElementById(`ref-${n}`);
        if (!ref) return;

        setContent(ref.innerHTML);
        place();
        setOpen(true);
    }, [n, place]);

    const hide = useCallback(() => setOpen(false), []);

    useEffect(() => {
        if (!open) return;
        const onPointerDown = (e: PointerEvent) => {
            if (!anchorRef.current?.contains(e.target as Node)) setOpen(false);
        };
        window.addEventListener('scroll', place, { passive: true });
        window.addEventListener('resize', place);
        document.addEventListener('pointerdown', onPointerDown);
        return () => {
            window.removeEventListener('scroll', place);
            window.removeEventListener('resize', place);
            document.removeEventListener('pointerdown', onPointerDown);
        };
    }, [open, place]);

    // Touch taps fire emulated hover/focus before click, so remember whether the
    // tooltip was already open when the tap began.
    const openAtTapStart = useRef(false);

    const handleClick = (e: React.MouseEvent) => {
        // On touch devices the first tap shows the tooltip; a second tap follows the link.
        if (window.matchMedia('(hover: none)').matches && !openAtTapStart.current) {
            e.preventDefault();
            show();
        }
    };

    const label = variant === 'sup' ? `${n}` : `[${n}]`;
    const className =
        variant === 'sup'
            ? 'text-green-600 font-medium no-underline hover:text-green-700 cursor-help'
            : 'text-green-700 no-underline hover:text-green-800 hover:underline decoration-dotted underline-offset-2 cursor-help';

    const marker = (
        <a
            ref={anchorRef}
            href={`#ref-${n}`}
            aria-label={`Reference ${n}`}
            className={className}
            onMouseEnter={show}
            onMouseLeave={hide}
            onFocus={show}
            onBlur={hide}
            onPointerDown={() => (openAtTapStart.current = open)}
            onClick={handleClick}
        >
            {label}
        </a>
    );

    return (
        <>
            {variant === 'sup' ? <sup>{marker}</sup> : marker}
            {open &&
                createPortal(
                    <span
                        role="tooltip"
                        className="fixed z-50 block rounded-lg border border-gray-200 bg-white px-4 py-3 text-xs sm:text-sm leading-relaxed text-gray-700 shadow-lg pointer-events-none [&_a]:text-green-600 [&_a]:underline"
                        style={{
                            left: pos.left,
                            top: pos.top,
                            width: Math.min(TOOLTIP_WIDTH, window.innerWidth - MARGIN * 2),
                            transform: pos.above ? 'translateY(-100%)' : undefined,
                        }}
                    >
                        <span className="block text-green-600 font-semibold mb-1">Reference {n}</span>
                        <span className="block" dangerouslySetInnerHTML={{ __html: content }} />
                    </span>,
                    document.body,
                )}
        </>
    );
}
