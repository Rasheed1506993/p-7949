
import React from "react";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import { getFeaturedProperties } from "@/lib/data";
import { ChevronLeft } from "lucide-react";

const FeaturedProperties = () => {
  const featuredProperties = getFeaturedProperties();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="md:text-right mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-primary">العقارات الأكثر طلبًا</h2>
            <p className="mt-2 text-muted-foreground text-lg">
              اكتشف أفضل العقارات المميزة المتاحة حاليًا
            </p>
          </div>
          <Link
            to="/properties"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group"
          >
            <span className="font-medium">عرض جميع العقارات</span>
            <ChevronLeft className="w-5 h-5 mr-1 rtl:ml-1 rtl:mr-0 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="animate-slide-up opacity-0"
              style={{
                animationDelay: `${(parseInt(property.id) - 1) * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
