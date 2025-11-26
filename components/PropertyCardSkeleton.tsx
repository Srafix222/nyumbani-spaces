
import React, { memo } from 'react';
import Skeleton from './Skeleton';

const PropertyCardSkeleton: React.FC<{ index?: number }> = ({ index }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${(index || 0) * 100}ms` }}
    >
      <Skeleton className="w-full h-56 !rounded-b-none" />
      <div className="p-4 space-y-4 flex flex-col flex-grow">
        <Skeleton className="h-6 rounded w-3/4" />
        <Skeleton className="h-8 rounded w-1/2" />
        <Skeleton className="h-5 rounded w-full" />
        <div className="flex items-center space-x-6 pt-3 border-t mt-3">
          <Skeleton className="h-5 rounded w-1/4" />
          <Skeleton className="h-5 rounded w-1/4" />
        </div>
        <div className="mt-auto pt-4 space-y-2">
          <Skeleton className="h-10 rounded w-full" />
          <Skeleton className="h-12 rounded w-full" />
        </div>
      </div>
    </div>
  );
};

export default memo(PropertyCardSkeleton);
