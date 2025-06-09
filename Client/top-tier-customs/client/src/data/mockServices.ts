export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  requiresDropOff: boolean;
  image: string;
}

const mockServices: Service[] = [
  {
    id: "svc001",
    title: "Ceramic Coating",
    description: "Protect your car’s paint with long-lasting ceramic coating.",
    price: 399.99,
    duration: "4 hours",
    requiresDropOff: true,
    image: "/services/ceramic-coating.jpg",
  },
  {
    id: "svc002",
    title: "Paint Correction",
    description: "Remove swirl marks, scratches, and restore paint clarity.",
    price: 299.99,
    duration: "3 hours",
    requiresDropOff: true,
    image: "/services/paint-correction.jpg",
  },
  {
    id: "svc003",
    title: "Interior Detailing",
    description: "Deep cleaning of carpets, leather, and dashboard surfaces.",
    price: 149.99,
    duration: "2 hours",
    requiresDropOff: true,
    image: "/services/interior-detailing.jpg",
  },
  {
    id: "svc004",
    title: "Exterior Wash & Wax",
    description: "Hand wash with high-quality wax application.",
    price: 79.99,
    duration: "1 hour",
    requiresDropOff: false,
    image: "/services/exterior-wash.jpg",
  },
  {
    id: "svc005",
    title: "Engine Bay Cleaning",
    description: "Degrease and clean your vehicle’s engine bay area.",
    price: 89.99,
    duration: "1.5 hours",
    requiresDropOff: false,
    image: "/services/engine-clean.jpg",
  },
  {
    id: "svc006",
    title: "Headlight Restoration",
    description: "Improve visibility and restore clarity to foggy headlights.",
    price: 59.99,
    duration: "45 minutes",
    requiresDropOff: false,
    image: "/services/headlight-restore.jpg",
  },
  {
    id: "svc007",
    title: "Vinyl Wrap Installation",
    description: "Custom vinyl wrap installation with your choice of finish.",
    price: 699.99,
    duration: "5–6 hours",
    requiresDropOff: true,
    image: "/services/vinyl-wrap.jpg",
  },
  {
    id: "svc008",
    title: "Window Tinting",
    description: "UV-protective and privacy-enhancing window tint service.",
    price: 199.99,
    duration: "2 hours",
    requiresDropOff: true,
    image: "/services/window-tint.jpg",
  },
];

export default mockServices;
