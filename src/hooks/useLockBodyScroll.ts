'use client';

import { useEffect } from 'react';

/**
 * Locks the page's scroll (background scroll) while `locked` is true,
 * e.g. while a modal/dialog is open. Restores the previous overflow
 * behavior on unlock/unmount.
 */
export function useLockBodyScroll(locked: boolean) {
    useEffect(() => {
        if (!locked) return;

        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = 'hidden';
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPaddingRight;
        };
    }, [locked]);
}
