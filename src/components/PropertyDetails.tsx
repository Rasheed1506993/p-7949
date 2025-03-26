
import React from "react";
import { Property, formatPrice } from "@/lib/data";
import { Bed, Bath, Square, MapPin, Calendar } from "lucide-react";
import ImageGallery from "./ImageGallery";
import ContactButton from "./ContactButton";

interface PropertyDetailsProps {
  property: Property;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  const formattedDate = new Date(property.createdAt).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-right">
          {property.title}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center text-gray-600 mt-2 justify-end w-full md:w-auto">
            <span>{property.location}</span>
            <MapPin className="h-5 w-5 mr-1 rtl:ml-1 rtl:mr-0" />
          </div>
          <div className="flex items-center text-gray-600 mt-2 justify-end md:justify-start w-full md:w-auto">
            <span>{formattedDate}</span>
            <Calendar className="h-5 w-5 mr-1 rtl:ml-1 rtl:mr-0" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ImageGallery images={property.images} />

          <div className="mt-10 bg-white rounded-xl shadow-sm p-6 text-right">
            <h2 className="text-2xl font-bold mb-4">تفاصيل العقار</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-medium">{property.bedrooms}</span>
                  <Bed className="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0 text-primary" />
                </div>
                <span className="text-gray-600">غرف النوم</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-medium">{property.bathrooms}</span>
                  <Bath className="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0 text-primary" />
                </div>
                <span className="text-gray-600">الحمامات</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-medium">{property.area}</span>
                  <Square className="h-5 w-5 mr-2 rtl:ml-2 rtl:mr-0 text-primary" />
                </div>
                <span className="text-gray-600">المساحة (م²)</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">الوصف</h3>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 text-right sticky top-24">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">السعر</h3>
              <div className="text-3xl font-bold text-primary">
                {formatPrice(property.price)} ريال
              </div>
            </div>

            <ContactButton propertyId={property.id} propertyTitle={property.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
