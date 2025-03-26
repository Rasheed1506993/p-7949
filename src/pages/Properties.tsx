
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SearchFilters from "@/components/SearchFilters";
import PropertyGrid from "@/components/PropertyGrid";
import { filterProperties, Property } from "@/lib/data";

const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<{ min: number; max: number } | null>(null);
  const [selectedBedrooms, setSelectedBedrooms] = useState<number | string | null>(null);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setProperties(filterProperties(null, null, null));
      setLoading(false);
    }, 1000);
  }, []);

  const handleFilter = (
    location: string | null,
    priceRange: { min: number; max: number } | null,
    bedrooms: number | string | null
  ) => {
    setLoading(true);
    setSelectedLocation(location);
    setSelectedPriceRange(priceRange);
    setSelectedBedrooms(bedrooms);

    // Simulate API call delay
    setTimeout(() => {
      setProperties(filterProperties(location, priceRange, bedrooms));
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <div className="mb-10 text-right">
            <h1 className="text-4xl font-bold text-primary mb-2">جميع العقارات</h1>
            <p className="text-muted-foreground text-lg">
              استعرض جميع العقارات المتاحة أو استخدم الفلاتر للبحث عن عقارك المثالي
            </p>
          </div>

          <SearchFilters onFilter={handleFilter} />

          {!loading && (
            <div className="mb-6 text-right">
              <span className="text-gray-600">
                تم العثور على {properties.length} عقار
                {selectedLocation || selectedPriceRange || selectedBedrooms ? " متطابق مع معايير البحث" : ""}
              </span>
            </div>
          )}

          <PropertyGrid properties={properties} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Properties;
