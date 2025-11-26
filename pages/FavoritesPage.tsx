
import React, { useState, useEffect } from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import { getPropertiesByIds } from '../services/mockApi';
import { Property } from '../types';
import PropertyCard from '../components/PropertyCard';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import PropertyCardSkeleton from '../components/PropertyCardSkeleton';

const FavoritesPage: React.FC = () => {
  const { favoriteIds } = useFavorites();
  const [favoriteProperties, setFavoriteProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      if (favoriteIds.length > 0) {
        try {
          const properties = await getPropertiesByIds(favoriteIds);
          setFavoriteProperties(properties);
        } catch (error) {
          console.error("Failed to fetch favorite properties:", error);
        }
      } else {
        setFavoriteProperties([]);
      }
      setLoading(false);
    };

    fetchFavorites();
  }, [favoriteIds]);

  return (
    <div>
      <div className="relative bg-gray-800 text-white py-20 rounded-b-lg overflow-hidden opacity-0 animate-fadeInUp">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/b9463e88-3fbc-4192-87c5-1d717adfced5/segments/4:4:1/Lucid_Origin_Living_Room_Image_Create_a_welcoming_living_room__3.jpg')" }}></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Favorite Properties</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">Here are the properties you've saved. You can easily access them here to review details or contact an agent.</p>
          </div>
      </div>
      <div className="relative py-10 md:py-16">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed" 
            style={{ backgroundImage: "url('https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fe6b63d7e-0738-466d-97e3-0b0c6a8581e6.png')" }}>
        </div>
        <div className="absolute inset-0 bg-brand-sand/30 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton className="mb-8" />
          
          {loading && favoriteIds.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: favoriteIds.length }).map((_, i) => (
                <PropertyCardSkeleton key={i} index={i} />
              ))}
            </div>
          ) : !loading && favoriteProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoriteProperties.map((prop, i) => (
                <PropertyCard 
                  key={prop.id} 
                  property={prop} 
                  index={i} 
                  lazy={i >= 3} 
                  fetchPriority={i < 3 ? 'high' : 'auto'}
                />
              ))}
            </div>
          ) : (
            !loading && 
            <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-lg shadow-md opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h2 className="mt-2 text-xl font-medium text-gray-900">No favorites yet</h2>
                <p className="mt-1 text-gray-500">You haven't added any properties to your favorites.</p>
                <div className="mt-6">
                    <Button as="link" to="/properties" variant="primary">
                        Start Exploring
                    </Button>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
