
import React, { memo } from 'react';
import Skeleton from './Skeleton';

const BlogPostCardSkeleton: React.FC<{ index?: number }> = ({ index }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${(index || 0) * 100}ms` }}
    >
      <Skeleton className="w-full h-56 !rounded-b-none" />
      <div className="p-6 flex flex-col flex-grow">
        <Skeleton className="h-6 rounded w-full mb-2" />
        <Skeleton className="h-6 rounded w-3/4 mb-4" />
        <Skeleton className="h-4 rounded w-full mb-2" />
        <Skeleton className="h-4 rounded w-full mb-4" />
        <div className="mt-auto">
          <Skeleton className="h-4 rounded w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default memo(BlogPostCardSkeleton);
