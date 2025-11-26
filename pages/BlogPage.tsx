
import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { getBlogPosts } from '../services/mockApi';
import BlogPostCard from '../components/BlogPostCard';
import BlogPostCardSkeleton from '../components/BlogPostCardSkeleton';
import BackButton from '../components/BackButton';

const BlogPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const blogPosts = await getBlogPosts();
                setPosts(blogPosts);
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <div className="relative bg-gray-800 text-white py-20 rounded-b-lg overflow-hidden opacity-0 animate-fadeInUp">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/4eb0d010-cfbc-4c60-a478-809dfcf9a250/segments/3:4:1/Lucid_Origin_Create_a_moody_image_of_a_dark_wooden_shelf_fille_2.jpg')" }}></div>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Inspiration & Advice</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">From interior design trends to home buying guides, our blog is your go-to resource for all things real estate in Kenya.</p>
                </div>
            </div>
            
            <div className="relative py-10 md:py-16">
                 <div 
                    className="absolute inset-0 bg-cover bg-center bg-fixed" 
                    style={{ backgroundImage: "url('https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/8d3903cc-b1ea-493c-b54e-120d8d1b505e/segments/4:4:1/Lucid_Origin_Create_an_interior_view_of_a_luxurious_master_bed_3.jpg')" }}>
                </div>
                <div className="absolute inset-0 bg-brand-sand/30 backdrop-blur-sm"></div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <BackButton className="mb-8" />

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <BlogPostCardSkeleton key={i} index={i} />
                            ))}
                        </div>
                    ) : posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, i) => (
                                <BlogPostCard 
                                    key={post.id} 
                                    post={post} 
                                    index={i}
                                    lazy={i >= 3}
                                    fetchPriority={i < 3 ? 'high' : 'auto'}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-lg shadow-md">
                            <p className="text-gray-600 text-lg">No blog posts found at this time.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
