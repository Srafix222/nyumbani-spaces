import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Property, Agent, Review } from '../types';
import { getPropertyById, getAgentById, getReviewsByPropertyId, addReview } from '../services/mockApi';
import { useFavorites } from '../contexts/FavoritesContext';
import { useComparison } from '../contexts/ComparisonContext';
import Button from '../components/Button';
import ImageLoader from '../components/ImageLoader';
import BackButton from '../components/BackButton';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';
import StarRating from '../components/StarRating';
import Skeleton from '../components/Skeleton';


const HeartIcon: React.FC<{ isFavorited: boolean, className?: string }> = ({ isFavorited, className = 'w-8 h-8' }) => (
  <svg 
    className={`${className} ${isFavorited ? 'text-red-500' : 'text-gray-400'}`} 
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

const GridIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
);

const DirectionIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PhotoGrid: React.FC<{ images: string[], title: string }> = ({ images, title }) => {
    const displayedImages = images.slice(0, 5);
    const hasMoreImages = images.length > 5;

    const handleShowAllClick = () => {
        // In a real app, this would open a modal/lightbox
        console.log("Showing all photos...");
    };

    if (displayedImages.length === 0) {
        return <Skeleton className="w-full h-80 sm:h-96 md:h-[550px] rounded-lg" />;
    }
    
    // Fallback for properties with only one image
    if(displayedImages.length === 1) {
        return (
            <div className="h-[300px] sm:h-[400px] md:h-[550px] rounded-lg overflow-hidden group cursor-pointer" onClick={handleShowAllClick}>
                 <ImageLoader 
                    containerClassName="w-full h-full"
                    imageClassName="rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-110"
                    src={displayedImages[0]}
                    alt={title}
                    lazy={false} fetchPriority="high"
                    sizes="100vw"
                />
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[300px] sm:h-[400px] md:h-[550px] rounded-lg overflow-hidden">
            {/* Main Image */}
            <div className="col-span-4 row-span-2 md:col-span-2 cursor-pointer group relative overflow-hidden" onClick={handleShowAllClick}>
                <ImageLoader 
                    containerClassName="w-full h-full"
                    imageClassName="transition-transform duration-700 ease-in-out group-hover:scale-110"
                    src={displayedImages[0]}
                    alt={`${title} - view 1`}
                    lazy={false}
                    fetchPriority="high"
                    sizes="(max-width: 767px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Secondary Images */}
            {displayedImages.slice(1).map((img, index) => (
                <div key={index} className="hidden md:block cursor-pointer group relative overflow-hidden" onClick={handleShowAllClick}>
                     <ImageLoader 
                        containerClassName="w-full h-full"
                        imageClassName="transition-transform duration-700 ease-in-out group-hover:scale-110"
                        src={img}
                        alt={`${title} - view ${index + 2}`}
                        lazy={false}
                        fetchPriority="high"
                        sizes="25vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     {/* Show all button on the last image slot */}
                    {index === 3 && hasMoreImages && (
                        <button onClick={handleShowAllClick} className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/50 text-white font-semibold transition-colors duration-300 hover:bg-black/60">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm py-2 px-4 rounded-lg">
                                <GridIcon className="w-5 h-5" />
                                <span>Show all photos</span>
                            </div>
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

const PropertyDetailSkeleton: React.FC = () => {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <Skeleton className="h-6 w-20 mb-8" />
        <Skeleton className="w-full h-80 sm:h-96 md:h-[550px] rounded-lg mb-8" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Skeleton className="h-10 w-3/4 mb-2" />
              <div className="flex items-center gap-4 mb-4">
                <Skeleton className="h-6 w-1/2" />
              </div>
              <Skeleton className="h-10 w-1/3 mb-6" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-y py-4 mb-6">
                <div className="space-y-2"><Skeleton className="h-6 mx-auto w-1/2" /><Skeleton className="h-4 mx-auto w-3/4" /></div>
                <div className="space-y-2"><Skeleton className="h-6 mx-auto w-1/2" /><Skeleton className="h-4 mx-auto w-3/4" /></div>
                <div className="space-y-2"><Skeleton className="h-6 mx-auto w-1/2" /><Skeleton className="h-4 mx-auto w-3/4" /></div>
                <div className="space-y-2"><Skeleton className="h-6 mx-auto w-1/2" /><Skeleton className="h-4 mx-auto w-3/4" /></div>
              </div>
              <Skeleton className="h-8 w-1/3 mb-3" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
                <Skeleton className="h-8 w-1/3 mb-3" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
            </div>

          </div>
          {/* Agent Card Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <Skeleton className="h-8 w-3/4 mb-4 mx-auto" />
              <div className="flex items-center space-x-4 mb-4">
                <Skeleton className="w-20 h-20 rounded-full flex-shrink-0" />
                <div className="w-full space-y-2">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
              <div className="space-y-3">
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

const PropertyDetailPage: React.FC = () => {
  const { propertyId } = useParams<{ propertyId: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [agent, setAgent] = useState<Agent | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [agentError, setAgentError] = useState<string | null>(null);
  
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isCompared, addToCompare, removeFromCompare, canAddToCompare } = useComparison();
  
  const reviewCount = reviews.length;
  const averageRating = useMemo(() => {
    if (reviewCount === 0) return 0;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return total / reviewCount;
  }, [reviews, reviewCount]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDetails = async () => {
      if (!propertyId) {
        setError("No property ID provided.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        setAgentError(null);
        
        const propData = await getPropertyById(propertyId);
        
        if (propData) {
          setProperty(propData);
          
          const [agentData, reviewsData] = await Promise.all([
            getAgentById(propData.agent_id),
            getReviewsByPropertyId(propertyId),
          ]);
          
          setReviews(reviewsData);

          if (agentData) {
            setAgent(agentData);
          } else {
            console.warn(`Agent with ID ${propData.agent_id} not found.`);
            setAgentError("Agent details could not be found for this property.");
          }

        } else {
          setError("Sorry, the property you are looking for could not be found.");
        }
      } catch (err) {
        setError("An unexpected error occurred while loading the property. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [propertyId]);
  
  const handleReviewSubmitted = (newReview: Review) => {
    setReviews(prevReviews => {
        const updatedReviews = [newReview, ...prevReviews];
        // Also update the property object state to reflect new review count/rating
        if(property) {
            const newCount = updatedReviews.length;
            const newTotalRating = updatedReviews.reduce((acc, r) => acc + r.rating, 0);
            const newAverage = newTotalRating / newCount;
            setProperty({
                ...property,
                reviewCount: newCount,
                averageRating: newAverage,
            })
        }
        return updatedReviews;
    });
  }

  if (loading) {
    return <PropertyDetailSkeleton />;
  }

  if (error) {
    return <div className="text-center py-20 text-red-600 bg-red-50 text-xl font-medium container mx-auto rounded-lg shadow-sm">{error}</div>;
  }

  if (!property) {
    return <div className="text-center py-20">Property details could not be loaded.</div>;
  }
  
  const isFav = isFavorite(property.id);
  const isComp = isCompared(property.id);


  const handleCompareClick = () => {
    if (isComp) {
      removeFromCompare(property.id);
    } else if (canAddToCompare) {
      addToCompare(property.id);
    }
  };
  
  const formattedPrice = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="relative">
        <div 
          className="fixed inset-0 bg-cover bg-center -z-10" 
          style={{ backgroundImage: `url(${property.main_image})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-brand-sand/30 backdrop-blur-sm"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <BackButton className="mb-8" fallbackUrl="/properties" />
            {/* Image Gallery */}
             <div className="mb-8 opacity-0 animate-fadeInUp">
                <PhotoGrid images={property.images} title={property.title} />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                        <div className="flex justify-between items-start">
                        <div className="flex-grow">
                            <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-2">{property.title}</h1>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                                <p className="text-lg text-gray-600">{property.location}</p>
                            </div>
                            {property.reviewCount && property.reviewCount > 0 ? (
                                <div className="flex items-center gap-2 mb-4">
                                    <StarRating rating={property.averageRating || 0} readOnly />
                                    <span className="text-gray-600 font-semibold">{(property.averageRating || 0).toFixed(1)} Stars</span>
                                    <span className="text-gray-500">({property.reviewCount} review{property.reviewCount > 1 ? 's' : ''})</span>
                                </div>
                            ) : (
                                <div className="h-6 mb-4"></div> // Placeholder for consistent height
                            )}
                        </div>
                        <button 
                            onClick={() => toggleFavorite(property.id)}
                            className="p-2 rounded-full transition-transform duration-200 ease-in-out hover:scale-110 -mt-1"
                            aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
                        >
                            <HeartIcon isFavorited={isFav} />
                        </button>
                        </div>
                        
                        <p className="text-3xl sm:text-4xl font-bold text-brand-green mb-6">{formattedPrice}</p>
                        
                        <div className="flex items-center space-x-4 mb-6">
                            <Button
                                onClick={handleCompareClick}
                                disabled={!canAddToCompare && !isComp}
                                variant="secondary"
                                size="sm"
                                className={`${
                                    isComp 
                                    ? '!bg-amber-500 !text-white hover:!bg-amber-600' 
                                    : '!bg-brand-dark !text-white hover:!bg-gray-900'
                                }`}
                                title={!canAddToCompare && !isComp ? "You can only compare up to 3 properties." : ""}
                            >
                                <span>{isComp ? 'Remove from Compare' : 'Add to Compare'}</span>
                            </Button>
                            <Button
                                as="a"
                                href={`https://www.google.com/maps/dir/?api=1&destination=${property.lat},${property.lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="secondary"
                                size="sm"
                                className="!bg-blue-600 !text-white hover:!bg-blue-700"
                            >
                                <DirectionIcon className="w-5 h-5 mr-2" />
                                <span>Get Directions</span>
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-y border-gray-900/10 py-4 mb-6">
                            <div>
                                <p className="font-bold text-xl">{property.bedrooms}</p>
                                <p className="text-gray-500">Bedrooms</p>
                            </div>
                            <div>
                                <p className="font-bold text-xl">{property.bathrooms}</p>
                                <p className="text-gray-500">Bathrooms</p>
                            </div>
                            <div>
                                <p className="font-bold text-xl">{property.type}</p>
                                <p className="text-gray-500">Type</p>
                            </div>
                            <div>
                                <p className={`font-bold text-xl capitalize ${property.status === 'available' ? 'text-green-600' : 'text-gray-600'}`}>{property.status}</p>
                                <p className="text-gray-500">Status</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-3">About this property</h2>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{property.description}</p>
                        
                    </div>

                    {/* Reviews Section */}
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                        <ReviewList reviews={reviews} />
                        <ReviewForm propertyId={property.id} onSubmit={handleReviewSubmitted} />
                    </div>

                </div>

                {/* Agent Card Sidebar */}
                <div className="lg:col-span-1 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-200/50 sticky top-24">
                    <h2 className="text-2xl font-bold mb-4 text-center">Contact Agent</h2>
                    {agent && (
                    <>
                        <div className="flex items-center space-x-4 mb-4">
                        <ImageLoader 
                            containerClassName="w-20 h-20 rounded-full"
                            imageClassName="rounded-full"
                            src={agent.photo}
                            lqip={agent.lqip}
                            alt={agent.name}
                            sizes="80px"
                        />
                        <div>
                            <h3 className="font-bold text-lg">{agent.name}</h3>
                            <p className="text-gray-500">{agent.organization}</p>
                        </div>
                        </div>
                        <div className="space-y-3">
                        <a href={`tel:${agent.phone}`} className="flex items-center w-full text-left bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
                            <span>{agent.phone}</span>
                        </a>
                        <a href={`mailto:${agent.email}`} className="flex items-center w-full text-left bg-gray-100 p-3 rounded-lg hover:bg-gray-200">
                            <span className="truncate">{agent.email}</span>
                        </a>
                        <Button size="md" className="w-full">
                            Send Inquiry
                        </Button>
                        </div>
                    </>
                    )}
                    {agentError && (
                    <div className="text-center p-4 bg-yellow-50 text-yellow-800 rounded-lg">
                        <p>{agentError}</p>
                    </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PropertyDetailPage;