import React, { useState } from 'react';
import { Review } from '../types';
import { addReview } from '../services/mockApi';
import StarRating from './StarRating';
import Button from './Button';

interface ReviewFormProps {
  propertyId: string;
  onSubmit: (newReview: Review) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ propertyId, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const inputClasses = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-green-light focus:border-brand-green-light sm:text-sm";
  const labelClasses = "block text-sm font-medium text-gray-700";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (rating === 0) {
      setError('Please select a star rating.');
      return;
    }
    if (!author.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!comment.trim()) {
      setError('Please leave a comment.');
      return;
    }
    
    setSubmitting(true);
    try {
      const newReview = await addReview({ propertyId, author, rating, comment });
      onSubmit(newReview);
      
      // Reset form
      setRating(0);
      setComment('');
      setAuthor('');

    } catch (err) {
      setError('There was an error submitting your review. Please try again.');
    } finally {
        setSubmitting(false);
    }
  };

  return (
    <div className="mt-8 border-t pt-6">
      <h3 className="text-2xl font-bold mb-4">Leave a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={labelClasses}>Your Rating</label>
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <div>
          <label htmlFor="author" className={labelClasses}>Your Name</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={inputClasses}
            placeholder="e.g. Jane Doe"
            disabled={submitting}
          />
        </div>
        <div>
          <label htmlFor="comment" className={labelClasses}>Your Comment</label>
          <textarea
            id="comment"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={inputClasses}
            placeholder="Share your experience with this property..."
            disabled={submitting}
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div>
          <Button type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit Review'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
