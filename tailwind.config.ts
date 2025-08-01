import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-ibm-plex-sans)', 'sans-serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            colors: {
                green: {
                    600: '#16a34a',
                    700: '#15803d',
                },
                orange: {
                    500: '#f97316',
                    600: '#ea580c',
                },
                gray: {
                    100: '#f3f4f6',
                    600: '#4b5563',
                    900: '#111827',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
