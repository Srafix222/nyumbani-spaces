import React, { useState, useEffect } from 'react';
import { useComparison } from '../contexts/ComparisonContext';
import { getPropertiesByIds } from '../services/mockApi';
import { Property } from '../types';
import Button from './Button';

const ComparisonTray: React.FC = () => {
    const { comparisonIds, removeFromCompare, clearComparison } = useComparison();
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        const fetchComparisonProperties = async () => {
            if (comparisonIds.length > 0) {
                const props = await getPropertiesByIds(comparisonIds);
                // Preserve order of selection
                const orderedProps = comparisonIds.map(id => props.find(p => p.id === id)).filter(Boolean) as Property[];
                setProperties(orderedProps);
            } else {
                setProperties([]);
            }
        };
        fetchComparisonProperties();
    }, [comparisonIds]);

    if (comparisonIds.length === 0) {
        return null;
    }

    const placeholderSlots = Array.from({ length: 3 - properties.length });

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4" style={{ paddingBottom: 'env(safe-area-inset-bottom)'}}>
            <div className="container mx-auto bg-brand-dark text-white rounded-lg shadow-2xl p-4 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                    <h3 className="font-bold text-lg hidden sm:block">Compare Properties ({properties.length}/3)</h3>
                    <div className="flex items-center gap-3">
                       {properties.map(prop => (
                           <div key={prop.id} className="relative w-16 h-12 rounded-md overflow-hidden group">
                               <img loading="lazy" src={prop.main_image} alt={prop.title} className="w-full h-full object-cover"/>
                               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button onClick={() => removeFromCompare(prop.id)} className="text-white">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                               </div>
                           </div>
                       ))}
                       {placeholderSlots.map((_, index) => (
                           <div key={`placeholder-${index}`} className="w-16 h-12 rounded-md bg-gray-700/50 border-2 border-dashed border-gray-500 flex items-center justify-center">
                               <span className="text-gray-400 text-xs text-center">Add a property</span>
                           </div>
                       ))}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button onClick={clearComparison} className="text-gray-400 hover:text-white text-sm font-semibold">Clear All</button>
                    <Button 
                        as="link" 
                        to="/compare" 
                        variant="primary-light"
                        size="md"
                        disabled={properties.length < 2}
                    >
                        Compare
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ComparisonTray;
