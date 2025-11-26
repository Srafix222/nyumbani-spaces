import React, { useState } from 'react';

const StarIcon: React.FC<{ filled: boolean; className?: string }> = ({ filled, className = '' }) => (
  <svg 
    className={`w-6 h-6 ${filled ? 'text-yellow-400' : 'text-gray-300'} ${className}`} 
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

interface StarRatingProps {
  rating: number;
  setRating?: (rating: number) => void;
  readOnly?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating, readOnly = false }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index: number) => {
    if (readOnly) return;
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverRating(0);
  };

  const handleClick = (index: number) => {
    if (readOnly || !setRating) return;
    setRating(index);
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          type="button"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          className={`focus:outline-none ${!readOnly ? 'cursor-pointer' : 'cursor-default'}`}
          aria-label={`Rate ${index} star${index > 1 ? 's' : ''}`}
          disabled={readOnly}
        >
          <StarIcon filled={(hoverRating || rating) >= index} />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
