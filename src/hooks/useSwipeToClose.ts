'use client';

import { useDragControls, type PanInfo } from 'framer-motion';
import type { PointerEvent as ReactPointerEvent } from 'react';

const CLOSE_OFFSET_THRESHOLD = 120;
const CLOSE_VELOCITY_THRESHOLD = 500;

/**
 * Provides drag-to-close behavior for bottom-sheet style modals on mobile.
 * Dragging is only initiated from an explicit handle (via `startDrag`), so it
 * never interferes with scrolling the modal's own content.
 */
export function useSwipeToClose(onClose: () => void) {
    const dragControls = useDragControls();

    const startDrag = (event: ReactPointerEvent) => {
        dragControls.start(event);
    };

    const handleDragEnd = (
        _event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        if (info.offset.y > CLOSE_OFFSET_THRESHOLD || info.velocity.y > CLOSE_VELOCITY_THRESHOLD) {
            onClose();
        }
    };

    const dragProps = {
        drag: 'y' as const,
        dragControls,
        dragListener: false,
        dragConstraints: { top: 0 },
        dragElastic: { top: 0, bottom: 0.5 },
        dragSnapToOrigin: true,
        onDragEnd: handleDragEnd,
    };

    return { startDrag, dragProps };
}
