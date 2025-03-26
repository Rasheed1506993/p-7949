
import React from "react";
import PropertyCard from "./PropertyCard";
import { Property } from "@/lib/data";

interface PropertyGridProps {
  properties: Property[];
  loading?: boolean;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl overflow-hidden shadow-sm animate-pulse"
          >
            <div className="aspect-[4/3] bg-gray-200"></div>
            <div className="p-5">
              <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded mb-4 w-1/2"></div>
              <div className="flex justify-between mt-4">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-medium text-gray-600">لم يتم العثور على عقارات متطابقة مع معايير البحث</h3>
        <p className="mt-2 text-gray-500">يرجى تعديل معايير البحث والمحاولة مرة أخرى</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property, index) => (
        <div
          key={property.id}
          className="animate-slide-up opacity-0"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: "forwards",
          }}
        >
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;
