
import React, { useState, useEffect, useCallback } from 'react';
import { Agent } from '../types';
import { getAgents } from '../services/mockApi';
import AgentCard from '../components/AgentCard';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import AgentCardSkeleton from '../components/AgentCardSkeleton';

const AgentsPage: React.FC = () => {
    const [agents, setAgents] = useState<Agent[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchAgents = useCallback(async (isInitialLoad: boolean) => {
        setLoading(true);
        try {
            const { data, hasMore: newHasMore } = await getAgents(page);
            setAgents(prev => isInitialLoad ? data : [...prev, ...data]);
            setHasMore(newHasMore);
        } catch (error) {
            console.error("Failed to fetch agents:", error);
        } finally {
            setLoading(false);
        }
    }, [page]);
    
    useEffect(() => {
        fetchAgents(page === 1);
    }, [page, fetchAgents]);

    const handleLoadMore = () => {
      if (!loading && hasMore) {
          setPage(prev => prev + 1);
      }
    }
    
    const isInitialLoading = loading && agents.length === 0;

    return (
        <div>
            <div className="relative bg-gray-800 text-white py-20 rounded-b-lg overflow-hidden opacity-0 animate-fadeInUp">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F6aa853c6-b54b-4750-a444-772981778f39.png')" }}></div>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Professional Agents</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">Connect with our experienced and friendly agents who are ready to help you find your dream property in Kenya.</p>
                </div>
            </div>
            <div className="relative py-10 md:py-16">
                 <div 
                    className="absolute inset-0 bg-cover bg-center bg-fixed" 
                    style={{ backgroundImage: "url('https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/b2870fda-411f-4bdf-9d1c-041cab335eea/segments/1:4:1/Flux_Dev_Professional_graphic_design_3D_render_Create_a_pictur_0.jpg')" }}>
                </div>
                <div className="absolute inset-0 bg-brand-sand/30 backdrop-blur-sm"></div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <BackButton className="mb-8" />
                    
                    {isInitialLoading && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <AgentCardSkeleton key={i} index={i} />
                            ))}
                        </div>
                    )}

                    {!isInitialLoading && agents.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {agents.map((agent, i) => (
                                <AgentCard 
                                    key={agent.id} 
                                    agent={agent} 
                                    index={i} 
                                    lazy={i >= 4}
                                    fetchPriority={i < 4 ? 'high' : 'auto'}
                                />
                            ))}
                        </div>
                    )}
                    
                    {!isInitialLoading && !loading && agents.length === 0 && (
                        <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-lg shadow-md">
                            <p className="text-gray-600 text-lg">Could not find any agents at this time.</p>
                        </div>
                    )}

                    {/* Loading and Load More */}
                    <div className="text-center mt-12">
                        {loading && !isInitialLoading && <Spinner />}
                        {!loading && hasMore && agents.length > 0 && (
                        <Button 
                            onClick={handleLoadMore}
                            disabled={loading}
                            size="lg"
                        >
                            Load More
                        </Button>
                        )}
                        {!loading && !hasMore && agents.length > 0 && (
                            <p className="text-gray-700 font-semibold bg-white/70 backdrop-blur-sm py-2 px-4 rounded-full inline-block">You've met all our excellent agents.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentsPage;
