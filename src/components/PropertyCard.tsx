
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Property, formatPrice } from "@/lib/data";
import { Bed, Bath, Square, MapPin } from "lucide-react";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/property/${property.id}`}
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover-scale"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gray-200 animate-image-shimmer ${
            imageLoaded ? "hidden" : "block"
          }`}
        ></div>
        <img
          src={property.images[0]}
          alt={property.title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
          {formatPrice(property.price)} ريال
        </div>
      </div>

      <div className="p-5 rtl">
        <h3 className="text-lg font-semibold line-clamp-1 mb-2 text-right">
          {property.title}
        </h3>
        <div className="flex items-center text-muted-foreground mb-3 justify-end">
          <span className="text-sm">{property.location}</span>
          <MapPin className="h-4 w-4 ml-1 rtl:ml-1 rtl:mr-0" />
        </div>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1 rtl:ml-1 rtl:mr-0" />
            <span>{property.area} م²</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1 rtl:ml-1 rtl:mr-0" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1 rtl:ml-1 rtl:mr-0" />
            <span>{property.bedrooms}</span>
          </div>
        </div>
      </div>

      {property.featured && (
        <div className="absolute top-0 left-0 bg-primary/90 text-white px-3 py-1 text-xs font-medium">
          مميز
        </div>
      )}
    </Link>
  );
};

export default PropertyCard;
