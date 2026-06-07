import { Link } from "react-router-dom";
import { FaImages, FaArrowRight } from "react-icons/fa";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="flex-1">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/1920/1080')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40">
          <div className="text-center max-w-3xl mx-auto">
            <FaImages className="mx-auto text-4xl sm:text-5xl mb-4 sm:mb-6 opacity-80" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Discover Beautiful Images
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
              Explore our curated collection of stunning photographs from
              talented creators around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button
                variant="contained"
                component={Link}
                to="/gallery"
                size="large"
                endIcon={<FaArrowRight />}
                sx={{
                  bgcolor: "white",
                  color: "#1e40af",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": { bgcolor: "#e2e8f0" },
                }}
              >
                Browse Gallery
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/about"
                size="large"
                sx={{
                  borderColor: "rgba(255,255,255,0.5)",
                  color: "white",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Curated Collection",
                desc: "Hand-picked high-quality images across multiple categories.",
              },
              {
                title: "Easy Search",
                desc: "Quickly find the perfect image with our powerful search and filters.",
              },
              {
                title: "Save Favorites",
                desc: "Bookmark your favorite images and access them anytime.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
