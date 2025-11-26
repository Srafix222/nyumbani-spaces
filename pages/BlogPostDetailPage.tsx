import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogPost } from '../types';
import { getBlogPostById } from '../services/mockApi';
import ImageLoader from '../components/ImageLoader';
import BackButton from '../components/BackButton';
import Skeleton from '../components/Skeleton';

const BlogPostDetailSkeleton: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <Skeleton className="h-6 w-20 mb-8" />
                    <Skeleton className="h-12 w-full mb-4" />
                    <Skeleton className="h-12 w-5/6 mb-4" />
                    <Skeleton className="h-5 w-1/3 mb-6" />
                    <Skeleton className="w-full h-64 sm:h-80 lg:h-96 rounded-lg mb-8" />
                    <div className="space-y-3">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-3/4" />
                        <div className="pt-4" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-5/6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const BlogPostDetailPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPost = async () => {
      if (!postId) {
        setError("No post ID provided.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const postData = await getBlogPostById(postId);
        
        if (postData) {
          setPost(postData);
        } else {
          setError("Sorry, the blog post you are looking for could not be found.");
        }
      } catch (err) {
        setError("An unexpected error occurred while loading the post. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const renderContentWithFormatting = (content: string) => {
    const renderParagraphWithBold = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return content.split('\n\n').map((block, index) => {
        const trimmedBlock = block.trim();

        // Check for a heading (entire block is bold and has no newlines)
        if (trimmedBlock.startsWith('**') && trimmedBlock.endsWith('**') && !trimmedBlock.slice(2, -2).includes('\n')) {
            const headingText = trimmedBlock.slice(2, -2);
            return (
                <h2 key={index} className="text-2xl font-bold font-sans !text-brand-dark mt-10 mb-4">
                    {headingText}
                </h2>
            );
        }

        // It's a paragraph
        return (
            <p key={index} className="mb-4 whitespace-pre-line text-lg">
                {renderParagraphWithBold(block)}
            </p>
        );
    });
};


  if (loading) {
    return <BlogPostDetailSkeleton />;
  }

  if (error) {
    return <div className="text-center py-20 text-red-600 bg-red-50 text-xl font-medium container mx-auto rounded-lg shadow-sm my-12">{error}</div>;
  }

  if (!post) {
    return <div className="text-center py-20">Post details could not be loaded.</div>;
  }

  return (
    <div className="relative">
      <div 
        className="fixed inset-0 bg-cover bg-center -z-10" 
        style={{ backgroundImage: `url(${post.imageUrl})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-brand-sand/30 backdrop-blur-sm"></div>
      </div>
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="max-w-4xl mx-auto opacity-0 animate-fadeInUp">
            <BackButton className="mb-8" fallbackUrl="/blog" />
            <div className="bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
                <h1 className="text-4xl lg:text-5xl font-bold font-sans text-brand-dark mb-4 leading-tight">{post.title}</h1>
                
                <div className="flex items-center text-gray-500 mb-6 font-sans">
                  <p>By {post.author}</p>
                  <span className="mx-2">&bull;</span>
                  <p>{post.date}</p>
                </div>

                <ImageLoader
                  containerClassName="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden mb-8"
                  src={post.imageUrl}
                  alt={post.title}
                  lazy={false}
                  fetchPriority="high"
                  sizes="(max-width: 896px) 90vw, 896px"
                />

                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-serif">
                   {renderContentWithFormatting(post.content)}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetailPage;