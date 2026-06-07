import { useState } from "react";
import { FaHeart, FaRegHeart, FaExpand, FaDownload } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";
import { Dialog, DialogContent, IconButton } from "@mui/material";

export default function ImageCard({ image }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const fav = isFavorite(image.id);

  const handleDownload = async () => {
    try {
      const response = await fetch(image.url);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${image.title}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      const a = document.createElement("a");
      a.href = image.url;
      a.download = `${image.title}.jpg`;
      a.click();
    }
  };

  return (
    <>
      <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div
          className="relative aspect-[3/2] overflow-hidden bg-gray-100 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-200" />
          )}
          <img
            src={image.url}
            alt={image.title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(true); }}
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              aria-label="Expand image"
            >
              <FaExpand className="text-gray-800" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); toggleFavorite(image); }}
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              aria-label={fav ? "Remove from favorites" : "Add to favorites"}
            >
              {fav ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-800" />
              )}
            </button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 truncate">
            {image.title}
          </h3>
          <span className="inline-block mt-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full capitalize">
            {image.category}
          </span>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        slotProps={{ backdrop: { sx: { backdropFilter: "blur(4px)" } } }}
        PaperProps={{
          sx: {
            width: { xs: "95vw", sm: "85vw", md: "75vw" },
            maxWidth: { xs: "95vw !important", sm: "85vw !important", md: "75vw !important" },
            height: { xs: "70vh", sm: "80vh" },
            maxHeight: { xs: "70vh", sm: "80vh" },
            m: 0,
            overflow: "hidden",
          },
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{ position: "absolute", top: 8, right: 8, zIndex: 1, color: "white", bgcolor: "rgba(0,0,0,0.5)", "&:hover": { bgcolor: "rgba(0,0,0,0.7)" } }}
        >
          <FaExpand />
        </IconButton>
        <DialogContent sx={{ p: 0, height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-contain"
          />
        </DialogContent>
        <IconButton
          onClick={handleDownload}
          sx={{ position: "absolute", bottom: 16, left: 16, zIndex: 1, color: "white", bgcolor: "rgba(0,0,0,0.5)", "&:hover": { bgcolor: "rgba(0,0,0,0.7)" } }}
          aria-label="Download image"
        >
          <FaDownload />
        </IconButton>
      </Dialog>
    </>
  );
}
