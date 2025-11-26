import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

const FAVORITES_STORAGE_KEY = 'nyumbani_favorites';

interface FavoritesContextType {
  favoriteIds: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = (id: string) => {
    setFavoriteIds(prevIds => {
      if (prevIds.includes(id)) {
        return prevIds.filter(favId => favId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const isFavorite = (id: string) => {
    return favoriteIds.includes(id);
  };

  const favoritesCount = favoriteIds.length;

  return (
    <FavoritesContext.Provider value={{ favoriteIds, isFavorite, toggleFavorite, favoritesCount }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
