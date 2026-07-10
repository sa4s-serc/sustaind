'use client';

import { useState } from 'react';

interface CopyButtonProps {
    /** The text copied to the clipboard when the button is pressed. */
    text: string;
    /** Label shown before the copy succeeds. */
    label?: string;
    /** Label shown briefly after a successful copy. */
    copiedLabel?: string;
    className?: string;
}

export default function CopyButton({
    text,
    label = 'Copy',
    copiedLabel = 'Copied!',
    className = '',
}: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(text);
            } else {
                // Fallback for environments without the async Clipboard API.
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy text:', error);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? copiedLabel : label}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200 ${copied
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'bg-white text-gray-700 border-gray-200 hover:border-green-300 hover:text-green-700'
                } ${className}`}
        >
            {/* Grid-stacked icons/labels: every state occupies the same cell so
                the button's size is reserved up front and never changes when
                the content swaps after copying - no transform, no resize. */}
            <span className="relative inline-grid w-4 h-4 shrink-0">
                <svg className="invisible col-start-1 row-start-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied ? (
                    <svg className="col-start-1 row-start-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                ) : (
                    <svg className="col-start-1 row-start-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                )}
            </span>
            <span className="relative inline-grid text-left">
                <span className="invisible col-start-1 row-start-1 whitespace-nowrap">{label}</span>
                <span className="invisible col-start-1 row-start-1 whitespace-nowrap">{copiedLabel}</span>
                <span className="col-start-1 row-start-1 whitespace-nowrap">{copied ? copiedLabel : label}</span>
            </span>
        </button>
    );
}
