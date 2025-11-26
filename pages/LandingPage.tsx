
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Property, Agent, BlogPost } from '../types';
import { getFeaturedProperties, getFeaturedAgents, getBlogPosts, getProperties } from '../services/mockApi';
import PropertyCard from '../components/PropertyCard';
import AgentCard from '../components/AgentCard';
import BlogPostCard from '../components/BlogPostCard';
import Button from '../components/Button';
import PropertyCardSkeleton from '../components/PropertyCardSkeleton';
import AgentCardSkeleton from '../components/AgentCardSkeleton';
import BlogPostCardSkeleton from '../components/BlogPostCardSkeleton';
import Skeleton from '../components/Skeleton';
import ImageLoader from '../components/ImageLoader';

const SectionDivider: React.FC = () => (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: '70px' }}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="relative block w-full" style={{ height: '70px' }}>
            <path d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,170.7C672,139,768,85,864,80C960,75,1056,117,1152,133.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="fill-current text-brand-sand"></path>
        </svg>
    </div>
);

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
    if (images.length === 0) return null;

    // Duplicate images for a seamless loop
    const duplicatedImages = [...images, ...images];
    const animationDuration = images.length * 2.5; // 2.5s per image, e.g. 20 images = 50s

    return (
        <div className="w-full overflow-hidden group">
            <div 
                className="flex animate-scroll group-hover:[animation-play-state:paused]"
                style={{ animationDuration: `${animationDuration}s` }}
            >
                {duplicatedImages.map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
                        <div className="aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                            <ImageLoader
                                containerClassName="w-full h-full"
                                src={src}
                                alt={`Property view ${index + 1}`}
                                lazy={false}
                                sizes="(max-width: 639px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, 20vw"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const LandingPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [props, agnts, posts, allPropsResponse] = await Promise.all([
          getFeaturedProperties(),
          getFeaturedAgents(),
          getBlogPosts(),
          getProperties({ status: 'available' }, 20)
        ]);
        setProperties(props);
        setAgents(agnts);
        setBlogPosts(posts.slice(0, 2));
        setCarouselImages(allPropsResponse.data.map(p => p.main_image));
      } catch (error) {
        console.error("Failed to fetch landing page data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  const renderSkeletons = () => (
    <div className="space-y-20">
      {/* Featured Properties Skeleton */}
      <section className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
            <Skeleton className="h-9 w-72" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => <PropertyCardSkeleton key={i} index={i} />)}
        </div>
      </section>

      {/* Meet Our Agents Skeleton */}
      <section className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
            <Skeleton className="h-9 w-72" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => <AgentCardSkeleton key={i} index={i} />)}
        </div>
      </section>

      {/* From Our Blog Skeleton */}
      <section className="container mx-auto px-4">
         <div className="flex justify-center mb-10">
            <Skeleton className="h-9 w-72" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Array.from({ length: 2 }).map((_, i) => <BlogPostCardSkeleton key={i} index={i} />)}
        </div>
      </section>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[65vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center animate-kenburns" style={{ backgroundImage: "url('https://cdn.openart.ai/uploads/image_wSMg3dbE_1759698317835_raw.jpg')" }}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63-17c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM16 99c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm64-17c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`}}>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>Find Your Nyumbani</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>Discover the finest properties and home inspiration across Kenya. Your new home awaits.</p>
          <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
            <Button as="link" to="/properties" variant="primary-light" size="lg">
              Explore Properties
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-12 md:pt-16">
        {loading ? renderSkeletons() : (
          <div className="space-y-12">
            {/* Featured Properties */}
            <section className="container mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 opacity-0 animate-fadeInUp">Featured Properties</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((prop, i) => (
                  <PropertyCard 
                    key={prop.id} 
                    property={prop} 
                    index={i} 
                    lazy={false} 
                    fetchPriority="high" 
                  />
                ))}
              </div>
              <div className="text-center mt-10 opacity-0 animate-fadeInUp" style={{ animationDelay: `${properties.length * 100}ms` }}>
                <Link to="/properties" className="text-brand-green font-semibold hover:underline">View All Properties &rarr;</Link>
              </div>
            </section>
            
            <div className="relative py-20 mt-12">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-fixed" 
                    style={{ backgroundImage: "url('https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/52c8cf7b-d497-43ef-a7f5-7922ba623ea7/segments/4:4:1/Lucid_Origin_Exterior_Image_Illustrate_a_modern_apartment_comp_3.jpg')" }}>
                </div>
                <div className="absolute inset-0 bg-brand-sand/30 backdrop-blur-sm"></div>
                <SectionDivider />
                <section className="container mx-auto px-4 relative">
                  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 opacity-0 animate-fadeInUp">Meet Our Top Agents</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agents.map((agent, i) => (
                      <AgentCard 
                        key={agent.id} 
                        agent={agent} 
                        index={i} 
                        lazy={false} 
                        fetchPriority="high"
                      />
                    ))}
                  </div>
                   <div className="text-center mt-10 opacity-0 animate-fadeInUp" style={{ animationDelay: `${agents.length * 100}ms` }}>
                    <Link to="/agents" className="text-brand-green font-semibold hover:underline">See All Agents &rarr;</Link>
                  </div>
                </section>
            </div>

            {/* New Image Carousel Section */}
            <section className="bg-brand-sand py-10">
                <div className="container mx-auto px-4">
                     <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 opacity-0 animate-fadeInUp">A Glimpse of Our Spaces</h2>
                     <p className="text-center text-lg text-gray-600 mb-6 max-w-2xl mx-auto opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>Scroll through a visual journey of the beautiful homes we feature.</p>
                </div>
                <ImageCarousel images={carouselImages} />
            </section>

            <div className="relative py-20">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-fixed" 
                    style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/soq33t3b3knvR2V2tYJ26M-1024-80.jpg.webp')" }}>
                </div>
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
                <SectionDivider />
                <section className="container mx-auto px-4 relative">
                  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 opacity-0 animate-fadeInUp">Inspiration & Advice</h2>
                   <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {blogPosts.map((post, i) => (
                      <BlogPostCard 
                        key={post.id} 
                        post={post} 
                        index={i} 
                        lazy={false} 
                        fetchPriority="high" 
                      />
                    ))}
                  </div>
                   <div className="text-center mt-10 opacity-0 animate-fadeInUp" style={{ animationDelay: `${blogPosts.length * 100}ms` }}>
                    <Link to="/blog" className="text-brand-green font-semibold hover:underline">Read More Articles &rarr;</Link>
                  </div>
                </section>
            </div>

            {/* CTA Section - Visible only on Home */}
            <div className="relative py-24 text-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-fixed" 
                    style={{ backgroundImage: "url('https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/b9463e88-3fbc-4192-87c5-1d717adfced5/segments/4:4:1/Lucid_Origin_Living_Room_Image_Create_a_welcoming_living_room__3.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
                <div className="relative container mx-auto px-4 opacity-0 animate-fadeInUp">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">Ready to find your dream home?</h2>
                  <p className="text-gray-600 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
                    Join thousands of happy homeowners who found their perfect property with Nyumbani Spaces.
                  </p>
                  <Button as="link" to="/properties" variant="primary" size="lg">
                    Start Your Search
                  </Button>
                </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
