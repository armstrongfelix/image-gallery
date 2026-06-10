import { useState, useMemo, useEffect } from "react";
import useImageStore from "../store/imageStore";
import GalleryGrid from "../components/GalleryGrid";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

export default function Gallery() {
  const { images, loading, error, fetchImages } = useImageStore();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const filtered = useMemo(() => {
    return images.filter((img) => {
      const matchesSearch = img.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory = category === "all" || img.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category, images]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Gallery</h1>
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

      {!loading && !error && <GalleryGrid images={filtered} />}
    </div>
  );
}
