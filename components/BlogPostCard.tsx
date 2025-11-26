
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import ImageLoader from './ImageLoader';

interface BlogPostCardProps {
  post: BlogPost;
  index?: number;
  lazy?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index, lazy, fetchPriority }) => {
  return (
    <Link 
      to={`/blog/${post.id}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1.5 transition-all duration-300 group flex flex-col opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${(index || 0) * 100}ms` }}
    >
      {/* Image container with overlay */}
      <div className="relative h-56 overflow-hidden">
        <ImageLoader 
          containerClassName="w-full h-full"
          imageClassName="transition-transform duration-300 group-hover:scale-105" 
          src={post.imageUrl} 
          lqip={post.lqip}
          alt={post.title} 
          lazy={lazy}
          fetchPriority={fetchPriority}
          sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white leading-tight transition-colors duration-300 group-hover:text-brand-green-light">{post.title}</h3>
        </div>
      </div>
      
      {/* Content container */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
        <div className="text-sm text-gray-500 mt-auto flex justify-between items-center">
          <div>
            <span>By {post.author}</span> &bull; <span>{post.date}</span>
          </div>
          <span className="font-semibold text-brand-green flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default memo(BlogPostCard);