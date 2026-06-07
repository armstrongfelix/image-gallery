import { useState, useMemo } from "react";
import images from "../data/images";
import GalleryGrid from "../components/GalleryGrid";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

const PAGE_SIZE = 12;

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return images.filter((img) => {
      const matchesSearch = img.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory = category === "all" || img.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const paginated = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

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

      <GalleryGrid images={paginated} />

      {hasMore && (
        <div className="text-center mt-8 sm:mt-10">
          <button
            onClick={() => setVisible((prev) => prev + PAGE_SIZE)}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
