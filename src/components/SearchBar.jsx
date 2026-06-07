import { FaSearch } from "react-icons/fa";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full sm:max-w-md">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
      <input
        type="text"
        placeholder="Search images..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-sm"
      />
    </div>
  );
}
