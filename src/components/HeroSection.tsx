
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { getLatestProperties, Property } from "@/lib/data";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setProperties(getLatestProperties(3));
    const preloadImages = async () => {
      const imagePromises = getLatestProperties(3).map((property) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = property.images[0];
          img.onload = resolve;
        });
      });
      await Promise.all(imagePromises);
      setIsLoaded(true);
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [properties.length]);

  if (properties.length === 0) return null;

  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      {/* Background Slides */}
      {properties.map((property, index) => (
        <div
          key={property.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-8 lg:px-16 text-right max-w-6xl mx-auto right-0 left-0">
        <div
          className={`transition-all duration-700 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {properties[currentSlide].title}
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl ml-auto">
            {properties[currentSlide].description.substring(0, 100)}...
          </p>
          <Link
            to={`/property/${properties[currentSlide].id}`}
            className="inline-flex items-center bg-white text-primary px-5 py-2 rounded-full font-medium text-base hover:bg-opacity-90 transition-all duration-300 group"
          >
            <span>عرض العقار</span>
            <ChevronLeft className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 rtl:space-x-reverse">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
