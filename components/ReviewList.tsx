import React from 'react';
import { Review } from '../types';
import StarRating from './StarRating';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4">What Others Are Saying</h3>
      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet. Be the first to share your thoughts!</p>
      ) : (
        <div className="space-y-6">
          {reviews.map(review => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center mb-2">
                <StarRating rating={review.rating} readOnly />
                <p className="ml-4 font-semibold text-gray-800">{review.author}</p>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(review.date).toLocaleDateString('en-KE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewList;
