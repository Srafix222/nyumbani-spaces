
import React, { memo } from 'react';
import Skeleton from './Skeleton';

const AgentCardSkeleton: React.FC<{ index?: number }> = ({ index }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${(index || 0) * 100}ms` }}
    >
      <div className="p-6 flex flex-col items-center flex-grow text-center">
        <Skeleton className="w-32 h-32 mb-4 !rounded-full" />
        <Skeleton className="h-6 rounded w-3/4 mb-2" />
        <Skeleton className="h-4 rounded w-1/2 mb-4" />
        <div className="w-full mt-4 pt-4 border-t space-y-3 text-left">
          <Skeleton className="h-5 rounded w-full" />
          <Skeleton className="h-5 rounded w-full" />
        </div>
        <div className="mt-auto w-full pt-6">
          <Skeleton className="h-12 rounded w-full" />
        </div>
      </div>
    </div>
  );
};

export default memo(AgentCardSkeleton);
