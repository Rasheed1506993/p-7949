
import React, { useState } from "react";
import { locations, priceRanges, bedRoomOptions } from "@/lib/data";
import { Search } from "lucide-react";

interface SearchFiltersProps {
  onFilter: (location: string | null, priceRange: { min: number; max: number } | null, bedrooms: number | string | null) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilter }) => {
  const [location, setLocation] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(null);
  const [bedrooms, setBedrooms] = useState<number | string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(location, priceRange, bedrooms);
  };

  const resetFilters = () => {
    setLocation(null);
    setPriceRange(null);
    setBedrooms(null);
    onFilter(null, null, null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 text-right">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              الموقع
            </label>
            <select
              id="location"
              value={location || ""}
              onChange={(e) => setLocation(e.target.value || null)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary bg-white text-right"
            >
              <option value="">جميع المواقع</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2 text-right">
            <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">
              نطاق السعر
            </label>
            <select
              id="priceRange"
              value={priceRange ? `${priceRange.min}-${priceRange.max}` : ""}
              onChange={(e) => {
                if (e.target.value) {
                  const [min, max] = e.target.value.split("-").map(Number);
                  setPriceRange({ min, max });
                } else {
                  setPriceRange(null);
                }
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary bg-white text-right"
            >
              <option value="">جميع الأسعار</option>
              {priceRanges.map((range) => (
                <option key={`${range.min}-${range.max}`} value={`${range.min}-${range.max}`}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2 text-right">
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
              عدد الغرف
            </label>
            <select
              id="bedrooms"
              value={bedrooms !== null ? bedrooms.toString() : ""}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "") {
                  setBedrooms(null);
                } else if (value === "5+") {
                  setBedrooms("5+");
                } else {
                  setBedrooms(parseInt(value));
                }
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary bg-white text-right"
            >
              <option value="">أي عدد</option>
              {bedRoomOptions.map((option) => (
                <option key={option} value={option}>
                  {option} {typeof option === "number" && option !== 5 ? "غرف" : "غرفة"}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex space-x-4 rtl:space-x-reverse justify-end">
          <button
            type="button"
            onClick={resetFilters}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            إعادة تعيين
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center"
          >
            <Search className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0" />
            <span>بحث</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
