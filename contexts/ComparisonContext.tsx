import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

const COMPARISON_STORAGE_KEY = 'nyumbani_comparison';
const MAX_COMPARE_ITEMS = 3;

interface ComparisonContextType {
  comparisonIds: string[];
  addToCompare: (id: string) => void;
  removeFromCompare: (id: string) => void;
  isCompared: (id: string) => boolean;
  clearComparison: () => void;
  canAddToCompare: boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [comparisonIds, setComparisonIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(COMPARISON_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to parse comparison items from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(COMPARISON_STORAGE_KEY, JSON.stringify(comparisonIds));
  }, [comparisonIds]);

  const addToCompare = (id: string) => {
    setComparisonIds(prevIds => {
      if (prevIds.includes(id) || prevIds.length >= MAX_COMPARE_ITEMS) {
        return prevIds;
      }
      return [...prevIds, id];
    });
  };

  const removeFromCompare = (id: string) => {
    setComparisonIds(prevIds => prevIds.filter(compId => compId !== id));
  };

  const isCompared = (id: string) => {
    return comparisonIds.includes(id);
  };

  const clearComparison = () => {
    setComparisonIds([]);
  }

  const canAddToCompare = comparisonIds.length < MAX_COMPARE_ITEMS;

  return (
    <ComparisonContext.Provider value={{ comparisonIds, addToCompare, removeFromCompare, isCompared, clearComparison, canAddToCompare }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = (): ComparisonContextType => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};
