
export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  images: string[];
  featured: boolean;
  createdAt: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "فيلا فاخرة مع إطلالة بحرية",
    location: "دبي، الإمارات",
    price: 5500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    description: "فيلا راقية مع إطلالة خلابة على البحر، تتميز بتصميم عصري وتشطيبات عالية الجودة. تضم حديقة خاصة ومسبح ومرآب لسيارتين.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    ],
    featured: true,
    createdAt: "2023-06-15"
  },
  {
    id: "2",
    title: "شقة حديثة وسط المدينة",
    location: "الرياض، السعودية",
    price: 1200000,
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    description: "شقة عصرية في قلب المدينة، قريبة من المرافق الحيوية والمولات التجارية. تتميز بإطلالة رائعة على المدينة وتصميم داخلي أنيق.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1630699144867-57839f8c4c25?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    ],
    featured: true,
    createdAt: "2023-07-22"
  },
  {
    id: "3",
    title: "منزل عائلي مع حديقة",
    location: "القاهرة، مصر",
    price: 3200000,
    bedrooms: 3,
    bathrooms: 2,
    area: 220,
    description: "منزل عائلي رحب مع حديقة واسعة، يتميز بموقع هادئ وقريب من المدارس والخدمات الأساسية. تم تجديده بالكامل مع الحفاظ على الطابع الأصيل.",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    ],
    featured: false,
    createdAt: "2023-08-05"
  },
  {
    id: "4",
    title: "بنتهاوس فاخر مع تراس",
    location: "عمّان، الأردن",
    price: 4800000,
    bedrooms: 3,
    bathrooms: 3,
    area: 280,
    description: "بنتهاوس فاخر يتميز بتراس واسع وإطلالة بانورامية على المدينة. يأتي مجهزاً بأحدث التقنيات الذكية ونظام أمان متطور.",
    images: [
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    ],
    featured: true,
    createdAt: "2023-09-10"
  },
  {
    id: "5",
    title: "شاليه على الشاطئ",
    location: "الإسكندرية، مصر",
    price: 2700000,
    bedrooms: 2,
    bathrooms: 1,
    area: 110,
    description: "شاليه جميل على الشاطئ مباشرة، يتميز بإطلالة بحرية رائعة وتصميم داخلي أنيق. مثالي للاستجمام والعطلات.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    ],
    featured: false,
    createdAt: "2023-09-28"
  },
  {
    id: "6",
    title: "شقة استثمارية في منطقة حيوية",
    location: "الدوحة، قطر",
    price: 1800000,
    bedrooms: 1,
    bathrooms: 1,
    area: 85,
    description: "شقة عصرية في منطقة استثمارية متنامية، تتميز بعائد استثماري مرتفع وقريبة من المرافق الحيوية والمواصلات العامة.",
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1628611225249-6c3c7c689552?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    ],
    featured: false,
    createdAt: "2023-10-12"
  },
  {
    id: "7",
    title: "فيلا مع مسبح خاص",
    location: "مراكش، المغرب",
    price: 3900000,
    bedrooms: 4,
    bathrooms: 4,
    area: 450,
    description: "فيلا فخمة مع مسبح خاص وحديقة واسعة، تتميز بتصميم يمزج بين العراقة المغربية والحداثة العصرية. قريبة من معالم المدينة السياحية.",
    images: [
      "https://images.unsplash.com/photo-1594394425867-b52bc1ba61c7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    ],
    featured: true,
    createdAt: "2023-11-05"
  },
  {
    id: "8",
    title: "أرض استثمارية للبيع",
    location: "مسقط، عمان",
    price: 1500000,
    bedrooms: 0,
    bathrooms: 0,
    area: 1000,
    description: "أرض استثمارية في منطقة متنامية، مناسبة لإقامة مشاريع سكنية أو تجارية. تتميز بموقع استراتيجي وقريبة من الخدمات الرئيسية.",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    ],
    featured: false,
    createdAt: "2023-11-20"
  }
];

export const locations = [
  "دبي، الإمارات",
  "الرياض، السعودية",
  "القاهرة، مصر",
  "عمّان، الأردن",
  "الإسكندرية، مصر",
  "الدوحة، قطر",
  "مراكش، المغرب",
  "مسقط، عمان"
];

export const priceRanges = [
  { min: 0, max: 1000000, label: "أقل من 1,000,000" },
  { min: 1000000, max: 2000000, label: "1,000,000 - 2,000,000" },
  { min: 2000000, max: 3000000, label: "2,000,000 - 3,000,000" },
  { min: 3000000, max: 5000000, label: "3,000,000 - 5,000,000" },
  { min: 5000000, max: 1000000000, label: "أكثر من 5,000,000" }
];

export const bedRoomOptions = [1, 2, 3, 4, 5, "5+"];

export const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function getProperty(id: string): Property | undefined {
  return properties.find(property => property.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter(property => property.featured);
}

export function getLatestProperties(limit: number = 4): Property[] {
  return [...properties]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

export function filterProperties(
  locationFilter: string | null,
  priceRangeFilter: { min: number; max: number } | null,
  bedroomsFilter: number | string | null
): Property[] {
  return properties.filter(property => {
    const matchesLocation = !locationFilter || property.location === locationFilter;
    const matchesPrice = !priceRangeFilter || 
      (property.price >= priceRangeFilter.min && property.price <= priceRangeFilter.max);
    const matchesBedrooms = !bedroomsFilter || 
      (bedroomsFilter === "5+" ? property.bedrooms >= 5 : property.bedrooms === bedroomsFilter);
    
    return matchesLocation && matchesPrice && matchesBedrooms;
  });
}
