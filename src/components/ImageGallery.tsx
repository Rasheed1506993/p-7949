
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isLightboxOpen) {
      if (e.key === "ArrowRight") {
        handlePrev(); // Reversed for RTL
      } else if (e.key === "ArrowLeft") {
        handleNext(); // Reversed for RTL
      } else if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <div className="relative">
      <div className="relative rounded-xl overflow-hidden">
        <div
          className={`absolute inset-0 bg-gray-200 animate-image-shimmer ${
            imagesLoaded[activeIndex] ? "hidden" : "block"
          }`}
        ></div>
        <img
          src={images[activeIndex]}
          alt={`Property Image ${activeIndex + 1}`}
          className={`w-full aspect-[16/9] object-cover rounded-xl transition-opacity duration-300 ${
            imagesLoaded[activeIndex] ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => handleImageLoad(activeIndex)}
        />
        
        <button
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Maximize2 className="w-5 h-5 text-gray-800" />
        </button>

        {images.length > 1 && (
          <>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              onClick={handlePrev}
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              onClick={handleNext}
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex space-x-2 rtl:space-x-reverse mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden rounded-lg flex-shrink-0 ${
                activeIndex === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gray-200 animate-image-shimmer ${
                  imagesLoaded[index] ? "hidden" : "block"
                }`}
              ></div>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover transition-opacity duration-300 ${
                  imagesLoaded[index] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
              />
            </button>
          ))}
        </div>
      )}

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 z-10 bg-black/50 rounded-full"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={images[activeIndex]}
              alt={`Property Image ${activeIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70"
                  onClick={handlePrev}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70"
                  onClick={handleNext}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
              {activeIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
