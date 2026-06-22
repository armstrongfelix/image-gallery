import ImageCard from "./ImageCard";
import useImageStore from "../store/imageStore";

export default function GalleryGrid({ allImages }) {
  let loading = useImageStore((state) => state.loading);

  if (allImages.length === 0 && !loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="text-lg">No images found.</p>
        <p className="text-sm mt-1">Try a different search or category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
      {allImages.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}
