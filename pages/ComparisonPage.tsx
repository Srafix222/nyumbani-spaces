import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useComparison } from '../contexts/ComparisonContext';
import { getPropertiesByIds } from '../services/mockApi';
import { Property } from '../types';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

// Fix: Define the features to be compared
const featuresToCompare = [
    { key: 'price', label: 'Price' },
    { key: 'location', label: 'Location' },
    { key: 'county', label: 'County' },
    { key: 'bedrooms', label: 'Bedrooms' },
    { key: 'bathrooms', label: 'Bathrooms' },
    { key: 'type', label: 'Type' },
    { key: 'status', label: 'Status' },
];

const ComparisonPage: React.FC = () => {
  const { comparisonIds, removeFromCompare } = useComparison();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchComparisonData = async () => {
      setLoading(true);
      if (comparisonIds.length > 0) {
        const propsData = await getPropertiesByIds(comparisonIds);
        const orderedProps = comparisonIds.map(id => propsData.find(p => p.id === id)).filter(Boolean) as Property[];
        setProperties(orderedProps);
      } else {
        setProperties([]);
      }
      setLoading(false);
    };
    fetchComparisonData();
  }, [comparisonIds]);

  const comparisonStats = useMemo(() => {
    if (properties.length < 2) return null;

    const prices = properties.map(p => p.price);
    const bedrooms = properties.map(p => p.bedrooms);
    const bathrooms = properties.map(p => p.bathrooms);

    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
      maxBedrooms: Math.max(...bedrooms),
      minBedrooms: Math.min(...bedrooms),
      maxBathrooms: Math.max(...bathrooms),
      minBathrooms: Math.min(...bathrooms),
    };
  }, [properties]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh]">
        <Spinner />
        <p className="mt-4 text-gray-600">Loading properties to compare...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative bg-gray-800 text-white py-20 rounded-b-lg overflow-hidden opacity-0 animate-fadeInUp">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F5c7e0c4f-c735-420a-b31c-32f4185121b8.png')" }}></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold">Compare Properties</h1>
          </div>
      </div>
      <div className="relative py-10 md:py-16">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed" 
            style={{ backgroundImage: "url('https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F9b34a6a6-a36c-486a-8b3a-590f05634587.png')" }}>
        </div>
        <div className="absolute inset-0 bg-brand-sand/30 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <BackButton className="mb-8" fallbackUrl="/properties" />
            
            {properties.length < 2 ? (
                 <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-lg shadow-md opacity-0 animate-fadeInUp">
                      <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <h2 className="mt-2 text-xl font-medium text-gray-900">Nothing to Compare</h2>
                      <p className="mt-1 text-gray-500">Please select at least two properties to start comparing.</p>
                      <div className="mt-6">
                          <Button as="link" to="/properties" variant="primary">
                              Browse Properties
                          </Button>
                      </div>
                  </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                {properties.map((prop, index) => {
                  return (
                    <div 
                      key={prop.id} 
                      className="bg-white rounded-lg shadow-xl flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 border border-gray-200/50"
                      style={{ animation: `fadeInUp 0.5s ${index * 100}ms ease-out forwards`, opacity: 0 }}
                    >
                      <div className="relative">
                        <Link to={`/properties/${prop.id}`}>
                          <img loading="lazy" src={prop.main_image} alt={prop.title} className="w-full h-56 object-cover" />
                        </Link>
                        <button 
                          onClick={() => removeFromCompare(prop.id)} 
                          title="Remove from comparison" 
                          className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full text-white hover:bg-red-600 transition-all duration-200 transform hover:scale-110"
                        >
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="p-5 flex flex-col flex-grow">
                        <Link to={`/properties/${prop.id}`} className="hover:text-brand-green transition-colors">
                          <h3 className="text-xl font-bold truncate mb-4">{prop.title}</h3>
                        </Link>
                        
                        <div className="space-y-2 mb-6">
                            {featuresToCompare.map(feature => {
                                let content: React.ReactNode;
                                let valueClassName = "font-semibold text-gray-800";
                                let rowClassName = "flex justify-between items-center p-3 rounded-md transition-colors duration-300";

                                if (comparisonStats && properties.length > 1) {
                                    switch (feature.key) {
                                        case 'price': if (prop.price === comparisonStats.minPrice && comparisonStats.minPrice !== comparisonStats.maxPrice) { rowClassName += ' bg-green-100/60'; valueClassName += ' text-green-800'; } break;
                                        case 'bedrooms': if (prop.bedrooms === comparisonStats.maxBedrooms && comparisonStats.minBedrooms !== comparisonStats.maxBedrooms) { rowClassName += ' bg-green-100/60'; valueClassName += ' text-green-800'; } break;
                                        case 'bathrooms': if (prop.bathrooms === comparisonStats.maxBathrooms && comparisonStats.minBathrooms !== comparisonStats.maxBathrooms) { rowClassName += ' bg-green-100/60'; valueClassName += ' text-green-800'; } break;
                                    }
                                }

                                switch (feature.key) {
                                    case 'price': content = new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }).format(prop.price); break;
                                    default: content = prop[feature.key as keyof Property] || 'N/A';
                                }
                                
                                return (
                                    <div key={feature.key} className={rowClassName}>
                                        <span className="text-gray-600">{feature.label}</span>
                                        <span className={valueClassName}>{content}</span>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-auto">
                            <Button as="link" to={`/properties/${prop.id}`} size="md" className="w-full">
                                View Details
                            </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;