import { createContext, useContext, useState, useCallback } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = useCallback((image) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === image.id);
      const updated = exists
        ? prev.filter((item) => item.id !== image.id)
        : [...prev, image];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const isFavorite = useCallback(
    (id) => favorites.some((item) => item.id === id),
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
