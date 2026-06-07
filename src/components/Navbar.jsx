import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaImages, FaHeart, FaHome, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/gallery", label: "Gallery", icon: FaImages },
  { to: "/favorites", label: "Favorites", icon: FaHeart },
  { to: "/about", label: "About", icon: FaInfoCircle },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold text-gray-800" onClick={() => setMenuOpen(false)}>
            <FaImages className="text-blue-600" />
            <span className="hidden xs:inline">ImageGallery</span>
            <span className="xs:hidden">IG</span>
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="sm:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          <div className="hidden sm:flex gap-1">
            {links.map(({ to, label, icon: Icon }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-2 space-y-1">
            {links.map(({ to, label, icon: Icon }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="text-lg" />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
