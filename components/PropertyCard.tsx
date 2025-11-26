import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Property } from '../types';
import { useFavorites } from '../contexts/FavoritesContext';
import { useComparison } from '../contexts/ComparisonContext';
import Button from './Button';
import ImageLoader from './ImageLoader';
import StarRating from './StarRating';

interface PropertyCardProps {
  property: Property;
  index?: number;
  lazy?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}

const HeartIcon: React.FC<{ isFavorited: boolean }> = ({ isFavorited }) => (
  <svg 
    className={`w-6 h-6 ${isFavorited ? 'text-red-500' : 'text-white'}`} 
    fill={isFavorited ? 'currentColor' : 'none'} 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" 
    />
  </svg>
);

const CompareIcon: React.FC<{ isCompared: boolean, className?: string }> = ({ isCompared, className }) => (
    <svg className={`w-5 h-5 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        {isCompared ? (
             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        )}
    </svg>
);


const PropertyCard: React.FC<PropertyCardProps> = ({ property, index, lazy = true, fetchPriority = 'auto' }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isCompared, addToCompare, removeFromCompare, canAddToCompare } = useComparison();
  
  const isFav = isFavorite(property.id);
  const isComp = isCompared(property.id);

  const formattedPrice = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
  }).format(property.price);
  
  const handleCardClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (e.type === 'keydown' && (e as React.KeyboardEvent).key !== 'Enter' && (e as React.KeyboardEvent).key !== ' ') {
      return;
    }
    navigate(`/properties/${property.id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    e.preventDefault();
    toggleFavorite(property.id);
  };
  
  const handleCompareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isComp) {
      removeFromCompare(property.id);
    } else if (canAddToCompare) {
      addToCompare(property.id);
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group flex flex-col opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${(index || 0) * 100}ms` }}
      onClick={handleCardClick}
      onKeyDown={handleCardClick}
      tabIndex={0}
      role="link"
      aria-label={`View details for ${property.title}`}
    >
      <div className="relative">
        <ImageLoader
          containerClassName="w-full h-56"
          src={property.main_image}
          lqip={property.lqip}
          alt={property.title}
          lazy={lazy}
          fetchPriority={fetchPriority}
          sizes="(max-width: 767px) 90vw, (max-width: 1279px) 45vw, 30vw"
        />
        <div
          className="absolute top-0 right-0 m-3 bg-black/50 p-2 rounded-full cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
          onClick={handleFavoriteClick}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleFavoriteClick(e as any); }}
          tabIndex={0}
          role="button"
          aria-pressed={isFav}
          aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          <HeartIcon isFavorited={isFav} />
        </div>
        {property.status === 'sold' && (
          <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
            SOLD
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-green transition-colors duration-300 min-h-[3.5rem]">{property.title}</h3>
        <p className="text-2xl font-bold text-brand-green mb-2">{formattedPrice}</p>
        <p className="text-gray-600 mb-4 truncate">{property.location}</p>

        {property.reviewCount && property.reviewCount > 0 ? (
          <div className="flex items-center gap-2 mb-4">
              <StarRating rating={property.averageRating || 0} readOnly />
              <span className="text-sm text-gray-500">({property.reviewCount})</span>
          </div>
        ) : (
          <div className="h-6 mb-4"></div>
        )}
        
        <div className="flex items-center space-x-6 text-gray-700 border-t pt-3 mt-auto">
          <span><strong className="font-semibold">{property.bedrooms}</strong> beds</span>
          <span><strong className="font-semibold">{property.bathrooms}</strong> baths</span>
        </div>
      </div>
      
      <div className="p-4 pt-0">
          <Button
            onClick={handleCompareClick}
            disabled={!canAddToCompare && !isComp}
            variant="secondary"
            className="w-full flex items-center justify-center gap-2"
            title={!canAddToCompare && !isComp ? "You can only compare up to 3 properties." : ""}
          >
            <CompareIcon isCompared={isComp} className={isComp ? 'text-amber-500' : 'text-gray-500'}/>
            <span>{isComp ? 'Remove Compare' : 'Add to Compare'}</span>
          </Button>
      </div>
    </div>
  );
};

export default memo(PropertyCard);
