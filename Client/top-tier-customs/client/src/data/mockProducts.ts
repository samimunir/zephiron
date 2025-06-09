// src/data/mockProducts.ts

export interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  quantity: number;
  installable: boolean;
  category: string;
  type: string;
  brand: string;
  forCarBrands: string[];
  discount?: number;
  createdAt: string;
  updatedAt: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Carbon Fiber Hood",
    description: "Lightweight carbon fiber hood for performance vehicles.",
    images: ["/products/hood1.jpg"],
    price: 799.99,
    quantity: 5,
    installable: true,
    category: "Exterior",
    type: "Hood",
    brand: "CarbonPro",
    forCarBrands: ["BMW", "Audi"],
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-05-01T10:00:00Z",
  },
  {
    id: "2",
    title: "Performance Brake Kit",
    description: "Complete brake upgrade for enhanced stopping power.",
    images: ["/products/brakekit.jpg"],
    price: 499.99,
    quantity: 10,
    installable: true,
    category: "Performance",
    type: "Brakes",
    brand: "Brembo",
    forCarBrands: ["Toyota", "Honda"],
    discount: 10,
    createdAt: "2024-02-12T12:00:00Z",
    updatedAt: "2024-05-01T12:00:00Z",
  },
  // Add 8-10 more below (truncated for brevity)
  {
    id: "3",
    title: "LED Headlight Kit",
    description: "Bright and efficient LED headlights with a sleek design.",
    images: ["/products/headlight1.jpg"],
    price: 199.99,
    quantity: 15,
    installable: true,
    category: "Lighting",
    type: "Headlights",
    brand: "LightX",
    forCarBrands: ["Ford", "Chevrolet"],
    createdAt: "2024-03-01T08:00:00Z",
    updatedAt: "2024-05-01T08:00:00Z",
  },
  {
    id: "4",
    title: "Cold Air Intake System",
    description: "Boost your car's performance with this intake system.",
    images: ["/products/intake.jpg"],
    price: 249.99,
    quantity: 8,
    installable: true,
    category: "Performance",
    type: "Air Intake",
    brand: "BoostFlow",
    forCarBrands: ["Subaru", "Mitsubishi"],
    createdAt: "2024-03-15T09:00:00Z",
    updatedAt: "2024-05-01T09:00:00Z",
  },
  {
    id: "5",
    title: "Carbon Spoiler",
    description: "Stylish and aerodynamic carbon fiber spoiler.",
    images: ["/products/spoiler.jpg"],
    price: 299.99,
    quantity: 6,
    installable: true,
    category: "Exterior",
    type: "Spoiler",
    brand: "CarbonPro",
    forCarBrands: ["BMW", "Mercedes"],
    createdAt: "2024-04-01T10:00:00Z",
    updatedAt: "2024-05-01T10:00:00Z",
  },
  {
    id: "6",
    title: "Racing Seats",
    description: "Ergonomic bucket racing seats for better support.",
    images: ["/products/seats.jpg"],
    price: 899.99,
    quantity: 4,
    installable: true,
    category: "Interior",
    type: "Seats",
    brand: "SpeedLine",
    forCarBrands: ["Nissan", "Mazda"],
    createdAt: "2024-04-10T10:00:00Z",
    updatedAt: "2024-05-01T10:00:00Z",
  },
  {
    id: "7",
    title: "Exhaust System",
    description: "High-performance exhaust with aggressive sound.",
    images: ["/products/exhaust.jpg"],
    price: 699.99,
    quantity: 3,
    installable: true,
    category: "Performance",
    type: "Exhaust",
    brand: "PowerTune",
    forCarBrands: ["Hyundai", "Kia"],
    createdAt: "2024-04-20T10:00:00Z",
    updatedAt: "2024-05-01T10:00:00Z",
  },
];
