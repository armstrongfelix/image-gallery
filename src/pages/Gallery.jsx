import { useState, useMemo, useEffect } from "react";
import useImageStore from "../store/imageStore";
import GalleryGrid from "../components/GalleryGrid";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

export default function Gallery() {
  // Added page and incrementPage from the store
  const { loading, error, allImages, fetchImages, page, incrementPage } =
    useImageStore();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetchImages();
  }, [fetchImages, page]); // Added 'page' so a new fetch triggers when it increments

  const filtered = useMemo(() => {
    return allImages.filter((img) => {
      const matchesSearch = img.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory = category === "all" || img.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category, allImages]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
        Gallery
      </h1>
      <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
        Browse through our collection of beautiful images.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 items-start sm:items-center justify-between">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter selected={category} onSelect={setCategory} />
      </div>

      {loading && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">Loading images...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-20 text-red-500">
          <p className="text-lg">Error loading images</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      )}

      {!loading && !error && <GalleryGrid allImages={filtered} />}

      {/* Added onClick event listener here */}
      <button
        onClick={incrementPage}
        className="bg-blue-600 hover:bg-blue-400 active:bg-blue-800 text-white font-bold py-2 px-4 rounded"
      >
        Load More
      </button>
    </div>
  );
}
