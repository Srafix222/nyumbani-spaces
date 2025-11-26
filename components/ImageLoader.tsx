
import React, { useState, useEffect, useRef } from 'react';

// A simple icon for broken images
const BrokenImageIcon: React.FC = () => (
  <svg className="w-1/3 h-1/3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Helper function to generate srcset for responsive images
const generateSrcSet = (baseUrl: string | undefined): string | undefined => {
    if (!baseUrl) {
        return undefined;
    }
    // Define a standard set of widths for our responsive images
    const widths = [400, 800, 1200, 1600];

    const addWidthParam = (url: string, width: number): string => {
        // For krea.ai, which acts as an image proxy, we append '&w='
        if (url.includes('krea.ai/api/img')) {
            return `${url}&w=${width}`;
        }
        // For other CDNs, we assume a standard '?w=' or '&w=' query parameter
        const separator = url.includes('?') ? '&' : '?';
        return `${url}${separator}w=${width}`;
    };

    return widths
        .map(width => `${addWidthParam(baseUrl, width)} ${width}w`)
        .join(', ');
};


interface ImageLoaderProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'fetchPriority' | 'srcSet'> {
  containerClassName?: string;
  imageClassName?: string;
  lqip?: string;
  rootMargin?: string;
  lazy?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
}

type ImageStatus = 'idle' | 'loading' | 'loaded' | 'error';

const ImageLoader: React.FC<ImageLoaderProps> = ({
  containerClassName = '',
  imageClassName = '',
  src,
  alt,
  lqip,
  rootMargin = '50%', // Increased margin for earlier loading
  lazy = true,
  fetchPriority,
  sizes,
  ...props
}) => {
  const [status, setStatus] = useState<ImageStatus>(lazy ? 'idle' : 'loading');
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if image is already loaded (cached)
    if (imgRef.current && imgRef.current.complete) {
        setStatus('loaded');
        return;
    }

    if (!lazy || status !== 'idle' || !containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatus('loading');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin }
    );

    const currentRef = containerRef.current;
    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [lazy, status, rootMargin, src]);

  const handleLoad = () => {
    setStatus('loaded');
  };

  const handleError = () => {
    setStatus('error');
  };

  const showImage = status === 'loaded';
  const showError = status === 'error';
  const showLqip = lqip && status !== 'loaded';

  const containerStyle = showLqip ? {
    backgroundImage: `url(${lqip})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};
    
  // Fix: The `generateSrcSet` function only works with string URLs, not Blobs.
  const srcSet = typeof src === 'string' ? generateSrcSet(src) : undefined;

  return (
    <div 
      ref={containerRef} 
      className={`relative bg-gray-200 overflow-hidden ${containerClassName}`}
      style={containerStyle}
    >
      {showLqip && <div className="absolute inset-0 w-full h-full backdrop-blur-md transition-opacity duration-500" style={{ opacity: showImage ? 0 : 1 }} />}
      
      {showError && (
        <div className="absolute inset-0 w-full h-full bg-gray-200/50 flex items-center justify-center">
          <BrokenImageIcon />
        </div>
      )}
      
      {(status === 'loading' || status === 'loaded' || !lazy) && (
        <img
          {...props}
          ref={imgRef}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={lazy ? 'lazy' : 'eager'}
          decoding="async"
          fetchPriority={fetchPriority}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${showImage ? 'opacity-100' : 'opacity-0'} ${imageClassName}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default ImageLoader;
