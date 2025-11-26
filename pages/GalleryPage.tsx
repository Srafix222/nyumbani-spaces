import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Property, Agent } from '../types';
import { getProperties, getAllAgents, getAvailableCounties } from '../services/mockApi';
import PropertyCard from '../components/PropertyCard';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import PropertyCardSkeleton from '../components/PropertyCardSkeleton';
import FilterSidebar from '../components/FilterSidebar';

const INITIAL_FILTERS = {
  county: 'all',
  type: 'all',
  maxPrice: 150000000,
  page: 1,
  sortBy: 'date-desc',
  agentId: null,
  search: '',
  status: 'all',
};

const GalleryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const agentIdFromUrl = searchParams.get('agentId');
  const searchTermFromUrl = searchParams.get('search') || '';

  const [properties, setProperties] = useState<Property[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [counties, setCounties] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    ...INITIAL_FILTERS,
    agentId: agentIdFromUrl,
    search: searchTermFromUrl,
  });
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const types = useMemo(() => ['Apartment', 'Bungalow', 'Maisonette', 'Villa'], []);

  const fetchProperties = useCallback(async (newFilters, reset = false) => {
    setLoading(true);
    try {
      const { data, hasMore: newHasMore } = await getProperties(newFilters, 9); // Use 9 for a 3-col layout
      setProperties(prev => reset ? data : [...prev, ...data]);
      setHasMore(newHasMore);
    } catch (error) {
      console.error("Failed to fetch properties:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const [allAgents, availableCounties] = await Promise.all([
          getAllAgents(),
          getAvailableCounties(),
        ]);
        setAgents(allAgents);
        setCounties(availableCounties);
      } catch (error) {
        console.error("Failed to fetch filter data:", error);
      }
    };
    fetchFilterData();
  }, []);

  useEffect(() => {
    const newFilters = { ...INITIAL_FILTERS, agentId: agentIdFromUrl, search: searchTermFromUrl };
    setFilters(newFilters);
    fetchProperties(newFilters, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agentIdFromUrl, searchTermFromUrl, fetchProperties]);
  

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let newBaseFilters: any = { ...filters };
    if (name === 'agentId' && value !== 'all') {
      newBaseFilters = { ...INITIAL_FILTERS, agentId: value, search: '' };
    } else {
        newBaseFilters = { 
            ...filters, 
            [name]: name === 'maxPrice' ? Number(value) : (value === 'all' ? null : value) 
        };
        if (name !== 'search' && name !== 'sortBy') {
            newBaseFilters.agentId = null;
        }
    }
    
    const newFilters = { ...newBaseFilters, page: 1 };
    
    setFilters(newFilters);
    fetchProperties(newFilters, true);
  };
  
  const handleClearFilters = () => {
    const clearedFilters = { ...INITIAL_FILTERS, agentId: null, search: '' };
    setFilters(clearedFilters);
    fetchProperties(clearedFilters, true);
  };
  
  const handleLoadMore = () => {
      if (!loading && hasMore) {
          const newFilters = { ...filters, page: filters.page + 1 };
          setFilters(newFilters);
          fetchProperties(newFilters, false);
      }
  }

  const renderPageSubheading = () => {
    if (filters.search && !agentIdFromUrl) {
      return <>Showing results for <span className="font-bold text-brand-green">"{filters.search}"</span>.</>;
    }
    if (filters.agentId) {
      const agentName = agents.find(a => a.id === filters.agentId)?.name;
      return <>Showing properties for <span className="font-bold text-brand-green">{agentName || 'a specific agent'}</span>.</>;
    }
    return "Browse our curated list of properties. Use the filters to find the home that's right for you.";
  };

  const isInitialLoading = loading && properties.length === 0;

  return (
    <div>
        <div className="relative bg-gray-800 text-white py-20 rounded-b-lg overflow-hidden opacity-0 animate-fadeInUp">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/5237b869-7e50-4739-a8b4-62cd7b664e8c/segments/3:4:1/Lucid_Origin_Create_an_image_illustrating_the_concept_of_purch_2.jpg')" }}></div>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Properties</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                {renderPageSubheading()}
                </p>
            </div>
        </div>
        
        <div className="relative py-10 md:py-16">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed" 
                style={{ backgroundImage: "url('https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F01740b29-12f7-43a9-a9a3-5c82a2083b06.png')" }}>
            </div>
            <div className="absolute inset-0 bg-brand-sand/30 backdrop-blur-sm"></div>
        
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
              <BackButton className="mb-8" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Filter Sidebar */}
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={handleClearFilters}
                    agents={agents}
                    counties={counties}
                    types={types}
                  />

                  {/* Property Grid */}
                  <main className="lg:col-span-4">
                      {isInitialLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <PropertyCardSkeleton key={i} index={i} />
                          ))}
                        </div>
                      ) : properties.length > 0 ? (
                        <>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {properties.map((prop, i) => (
                              <PropertyCard 
                                key={`${prop.id}-${i}`} 
                                property={prop} 
                                index={i} 
                                lazy={i >= 3} 
                                fetchPriority={i < 3 ? 'high' : 'auto'}
                              />
                            ))}
                          </div>
                          {/* Loading and Load More */}
                          <div className="text-center mt-12">
                            {loading && !isInitialLoading && <Spinner />}
                            {!loading && hasMore && (
                              <Button 
                                onClick={handleLoadMore}
                                disabled={loading}
                                size="lg"
                              >
                                Load More
                              </Button>
                            )}
                            {!loading && !hasMore && (
                                <p className="text-gray-700 font-semibold bg-white/70 backdrop-blur-sm py-2 px-4 rounded-full inline-block">You've reached the end of the list.</p>
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-md text-center">
                          <p className="text-gray-600 text-lg">No properties match the current filters.</p>
                        </div>
                      )}
                  </main>
              </div>
            </div>
        </div>
    </div>
  );
};

export default GalleryPage;