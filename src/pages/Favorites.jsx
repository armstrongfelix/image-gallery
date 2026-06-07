import { useFavorites } from "../context/FavoritesContext";
import GalleryGrid from "../components/GalleryGrid";
import { FaHeartBroken } from "react-icons/fa";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">My Favorites</h1>
      <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
        Images you've saved for quick access.
      </p>

      {favorites.length === 0 ? (
        <div className="text-center py-16 sm:py-20 text-gray-400">
          <FaHeartBroken className="mx-auto text-4xl sm:text-5xl mb-3 sm:mb-4" />
          <p className="text-base sm:text-lg">No favorites yet.</p>
          <p className="text-xs sm:text-sm mt-1 px-4">
            Browse the gallery and click the heart icon to save images here.
          </p>
        </div>
      ) : (
        <GalleryGrid images={favorites} />
      )}
    </div>
  );
}
