import React from 'react';
import { Agent } from '../types';
import Button from './Button';

// Icons for better UX
const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    // FIX: Corrected typo in viewBox attribute from "0 0 24" 24" to "0 0 24 24"
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

interface FilterSidebarProps {
    filters: any;
    onFilterChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
    onClearFilters: () => void;
    agents: Agent[];
    counties: string[];
    types: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange, onClearFilters, agents, counties, types }) => {

    const inputClasses = "mt-1 block w-full pl-3 pr-10 py-2.5 text-gray-900 bg-white/50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green-light focus:border-brand-green-light sm:text-sm transition-all duration-200 hover:border-gray-400";
    const labelClasses = "block text-sm font-medium text-gray-700";

    return (
        <aside className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-200/50 sticky top-24 space-y-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                <h3 className="text-xl font-bold text-brand-dark border-b-2 border-brand-green pb-3">Filter & Sort</h3>

                {/* Search Box */}
                <div>
                    <label htmlFor="search" className={labelClasses}>Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            value={filters.search}
                            onChange={onFilterChange}
                            className={inputClasses + ' pl-10'}
                            placeholder="Location, title..."
                        />
                    </div>
                </div>

                {/* County Dropdown */}
                <div>
                    <label htmlFor="county" className={labelClasses}>County</label>
                    <select id="county" name="county" value={filters.county} onChange={onFilterChange} className={inputClasses}>
                        <option value="all">All Counties</option>
                        {counties.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                {/* Property Type Dropdown */}
                <div>
                    <label htmlFor="type" className={labelClasses}>Property Type</label>
                    <select id="type" name="type" value={filters.type} onChange={onFilterChange} className={inputClasses}>
                        <option value="all">All Types</option>
                        {types.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
                
                 {/* Agent Dropdown */}
                <div>
                    <label htmlFor="agentId" className={labelClasses}>Agent</label>
                    <select id="agentId" name="agentId" value={filters.agentId || 'all'} onChange={onFilterChange} className={inputClasses}>
                        <option value="all">All Agents</option>
                        {agents.map(agent => <option key={agent.id} value={agent.id}>{agent.name}</option>)}
                    </select>
                </div>
                
                 {/* Status Dropdown */}
                 <div>
                    <label htmlFor="status" className={labelClasses}>Status</label>
                    <select id="status" name="status" value={filters.status} onChange={onFilterChange} className={inputClasses}>
                        <option value="all">All Statuses</option>
                        <option value="available">Available</option>
                        <option value="sold">Sold</option>
                    </select>
                </div>

                {/* Price Slider */}
                <div>
                    <label htmlFor="maxPrice" className={labelClasses}>Max Price: <span className="font-semibold text-brand-green">KES {Number(filters.maxPrice).toLocaleString()}</span></label>
                    <input type="range" id="maxPrice" name="maxPrice" min="5000000" max="150000000" step="1000000" value={filters.maxPrice} onChange={onFilterChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green-light mt-2"/>
                </div>
                
                {/* Sort By Dropdown */}
                <div>
                    <label htmlFor="sortBy" className={labelClasses}>Sort By</label>
                    <select id="sortBy" name="sortBy" value={filters.sortBy} onChange={onFilterChange} className={inputClasses}>
                        <option value="date-desc">Newest Listings</option>
                        <option value="date-asc">Oldest Listings</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                </div>

                {/* Clear Filters Button */}
                <div>
                    <Button
                        onClick={onClearFilters}
                        variant="secondary"
                        className="w-full flex items-center justify-center gap-2 !bg-white/50 hover:!bg-brand-green/10 !text-brand-green border-2 border-brand-green"
                    >
                        <XCircleIcon className="h-5 w-5" />
                        Clear Filters
                    </Button>
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;