'use client';

import { usePathname } from 'next/navigation';
import ReadingProgressBar from '@/components/ReadingProgressBar';

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isPostPage = pathname !== '/blogs';

    return (
        <>
            {isPostPage && <ReadingProgressBar />}
            {children}
        </>
    );
}
