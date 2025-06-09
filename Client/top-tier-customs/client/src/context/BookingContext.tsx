// import { createContext, useContext, useState, type ReactNode } from "react";

// interface BookingData {
//   serviceName: string;
//   serviceId: string;
//   estimatedTime?: string;
//   cost?: number;
// }

// interface BookingContextType {
//   isOpen: boolean;
//   data: BookingData | null;
//   openModal: (data: BookingData) => void;
//   closeModal: () => void;
// }

// const BookingContext = createContext<BookingContextType | null>(null);

// export const BookingProvider = ({ children }: { children: ReactNode }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [data, setData] = useState<BookingData | null>(null);

//   const openModal = (data: BookingData) => {
//     setData(data);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setData(null);
//   };

//   return (
//     <BookingContext.Provider value={{ isOpen, data, openModal, closeModal }}>
//       {children}
//     </BookingContext.Provider>
//   );
// };

// export const useBooking = () => {
//   const context = useContext(BookingContext);
//   if (!context)
//     throw new Error("useBooking must be used within BookingProvider");
//   return context;
// };

// context/BookingContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";
import { type Service } from "../data/mockServices";

interface BookingContextProps {
  isOpen: boolean;
  service: Service | null;
  openModal: (service: Service) => void;
  closeModal: () => void;
}

const BookingContext = createContext<BookingContextProps | undefined>(
  undefined
);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setService(null);
  };

  return (
    <BookingContext.Provider value={{ isOpen, service, openModal, closeModal }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context)
    throw new Error("useBooking must be used within BookingProvider");
  return context;
};
