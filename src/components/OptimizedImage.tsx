'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    className?: string;
    fill?: boolean;
    sizes?: string;
    quality?: number;
}

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    priority = false,
    className = '',
    fill = false,
    sizes,
    quality = 85,
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative ${className} ${isLoading ? 'animate-pulse bg-gray-200' : ''}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                fill={fill}
                priority={priority}
                sizes={sizes}
                quality={quality}
                loading={priority ? 'eager' : 'lazy'}
                onLoad={() => setIsLoading(false)}
                className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
            />
        </div>
    );
}
