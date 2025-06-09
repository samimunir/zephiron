// import { type Service } from "../data/mockServices";

// interface Props {
//   service: Service;
// }

// const ServiceCard = ({ service }: Props) => {
//   return (
//     <div className="bg-white dark:bg-zinc-900 shadow-md rounded-lg overflow-hidden transition hover:scale-[1.02] duration-300">
//       <img
//         src={service.image}
//         alt={service.title}
//         className="h-48 w-full object-cover"
//       />
//       <div className="p-4 space-y-2">
//         <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
//           {service.title}
//         </h3>
//         <p className="text-sm text-zinc-600 dark:text-zinc-400">
//           {service.description}
//         </p>
//         <div className="flex justify-between items-center text-sm">
//           <span className="font-bold text-red-600 dark:text-red-400">
//             ${service.price.toFixed(2)}
//           </span>
//           <span className="text-blue-600 dark:text-blue-400">
//             {service.duration}
//           </span>
//         </div>
//         {service.requiresDropOff && (
//           <p className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">
//             * Requires drop-off
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

import { type Service } from "../data/mockServices";
import { useBooking } from "../context/BookingContext";

interface Props {
  service: Service;
}

const ServiceCard = ({ service }: Props) => {
  const { openModal } = useBooking();

  return (
    <div className="bg-white dark:bg-zinc-900 shadow-md rounded-lg overflow-hidden transition hover:scale-[1.02] duration-300">
      <img
        src={service.image}
        alt={service.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
          {service.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
          {service.description}
        </p>
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-red-600 dark:text-red-400">
            ${service.price.toFixed(2)}
          </span>
          <span className="text-blue-600 dark:text-blue-400">
            {service.duration}
          </span>
        </div>
        {service.requiresDropOff && (
          <p className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">
            * Requires drop-off
          </p>
        )}
        <button
          onClick={() => openModal(service)}
          className="mt-3 w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-1.5 px-4 rounded transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
