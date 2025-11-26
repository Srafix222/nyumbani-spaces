import React from 'react';

const Skeleton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative overflow-hidden bg-gray-200 rounded ${className}`}>
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gray-100/50 to-transparent animate-shimmer"
        style={{ backgroundSize: '200% 100%' }}
      ></div>
    </div>
  );
};

export default Skeleton;
