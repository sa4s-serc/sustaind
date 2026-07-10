'use client';

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Thin progress bar fixed just under the sticky navbar, filling as the reader
 * scrolls through the page. Purely decorative feedback for a "routine" action
 * (scrolling) that otherwise gets no acknowledgement.
 */
export default function ReadingProgressBar() {
    const { scrollYProgress } = useScroll();
    const shouldReduceMotion = useReducedMotion();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: shouldReduceMotion ? 1000 : 300,
        damping: shouldReduceMotion ? 100 : 40,
        restDelta: 0.001,
    });

    return (
        <div className="sticky top-16 z-40 h-1 w-full bg-transparent" aria-hidden="true">
            <motion.div
                className="h-full origin-left bg-gradient-to-r from-green-500 to-orange-500"
                style={{ scaleX }}
            />
        </div>
    );
}
