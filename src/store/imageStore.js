import { create } from "zustand";

const keywordCategories = {
  nature: ["mountain", "ocean", "forest", "tree", "water", "sky", "sunset", "sunrise", "beach", "lake", "river", "flower", "nature", "aurora", "landscape", "wave", "cliff", "ice", "snow", "desert"],
  city: ["city", "urban", "street", "building", "skyline", "bridge", "architecture", "downtown", "subway", "alley", "neon", "skyscraper", "night", "traffic"],
  food: ["food", "pizza", "burger", "coffee", "salad", "sushi", "pancake", "bread", "smoothie", "steak", "fruit", "meal", "drink", "cooking", "cake", "chocolate"],
  people: ["people", "person", "man", "woman", "child", "portrait", "dancer", "musician", "artisan", "crowd", "face", "smile", "hands", "street photography"],
};

function deriveCategory(altDescription) {
  if (!altDescription) return "all";
  const lower = altDescription.toLowerCase();
  for (const [cat, keywords] of Object.entries(keywordCategories)) {
    if (keywords.some((kw) => lower.includes(kw))) return cat;
  }
  return "all";
}

const useImageStore = create((set) => ({
  images: [],
  loading: false,
  error: null,
  fetchImages: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(import.meta.env.VITE_API_URL);
      if (!res.ok) throw new Error(`Failed to fetch images (${res.status})`);
      const data = await res.json();
      const mapped = data.map((item) => {
        const alt = item.alt_description || "";
        return {
          id: item.id,
          title: alt,
          url: item.urls.raw,
          category: deriveCategory(alt),
          description: alt,
          alt_description: alt,
          urls: item.urls,
          user: item.user,
        };
      });
      set({ images: mapped, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useImageStore;
