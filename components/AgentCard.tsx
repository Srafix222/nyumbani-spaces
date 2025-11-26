import React, { memo } from 'react';
import { Agent } from '../types';
import Button from './Button';
import ImageLoader from './ImageLoader';

// SVG Icons for better UI
const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

interface AgentCardProps {
  agent: Agent;
  index?: number;
  lazy?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, index, lazy = true, fetchPriority = 'auto' }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group flex flex-col opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${(index || 0) * 100}ms` }}
    >
        <div className="relative p-6 flex flex-col items-center flex-grow text-center">
            {/* Circular Photo Container */}
            <ImageLoader
                containerClassName="w-32 h-32 mb-4 rounded-full shadow-md"
                imageClassName="rounded-full border-4 border-white group-hover:border-brand-green-light transition-colors duration-300"
                src={agent.photo}
                lqip={agent.lqip}
                alt={agent.name}
                lazy={lazy}
                fetchPriority={fetchPriority}
                sizes="128px"
            />

            {/* Agent Name & Org */}
            <h3 className="text-xl font-bold text-brand-dark">{agent.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{agent.organization}</p>

            {/* Contact Info */}
            <div className="w-full mt-4 pt-4 border-t space-y-3 text-left">
                <a href={`tel:${agent.phone}`} className="flex items-center text-gray-600 hover:text-brand-green group/contact">
                    <PhoneIcon className="h-5 w-5 mr-3 text-gray-400 group-hover/contact:text-brand-green transition-colors"/>
                    <span className="text-sm">{agent.phone}</span>
                </a>
                <a href={`mailto:${agent.email}`} className="flex items-center text-gray-600 hover:text-brand-green group/contact">
                    <MailIcon className="h-5 w-5 mr-3 text-gray-400 group-hover/contact:text-brand-green transition-colors"/>
                    <span className="text-sm truncate">{agent.email}</span>
                </a>
            </div>
            
             {/* Action Button */}
            <div className="mt-auto w-full pt-6">
                <Button as="link" to={`/properties?agentId=${agent.id}`} size="md" className="w-full group-hover:bg-brand-green-light">
                    View Listings
                </Button>
            </div>
        </div>
    </div>
  );
};

export default memo(AgentCard);