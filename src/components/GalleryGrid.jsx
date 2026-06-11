import ImageCard from "./ImageCard";

export default function GalleryGrid({ allImages }) {
  if (allImages.length === 0) {
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
