// import { useBooking } from "../context/BookingContext";
// import { Dialog } from "@headlessui/react";
// import { motion, AnimatePresence } from "framer-motion";

// const BookingModal = () => {
//   const { isOpen, data, closeModal } = useBooking();

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-50 flex items-center justify-center"
//           onClose={closeModal}
//         >
//           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 25 }}
//             className="relative z-50 bg-white dark:bg-zinc-900 rounded-xl p-6 w-full max-w-md shadow-xl"
//           >
//             <Dialog.Title className="text-lg font-bold mb-2">
//               Book {data?.serviceName}
//             </Dialog.Title>
//             <div className="text-sm mb-4 space-y-2">
//               <p>
//                 <strong>Service ID:</strong> {data?.serviceId}
//               </p>
//               {data?.estimatedTime && (
//                 <p>
//                   <strong>Estimated Time:</strong> {data.estimatedTime}
//                 </p>
//               )}
//               {data?.cost && (
//                 <p>
//                   <strong>Cost:</strong> ${data.cost.toFixed(2)}
//                 </p>
//               )}
//             </div>

//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
//               >
//                 Confirm Booking
//               </button>
//             </form>

//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-800 dark:hover:text-white"
//             >
//               ✕
//             </button>
//           </motion.div>
//         </Dialog>
//       )}
//     </AnimatePresence>
//   );
// };

// export default BookingModal;

// components/BookingModal.tsx
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "../context/BookingContext";

const BookingModal = () => {
  const { isOpen, service, closeModal } = useBooking();

  return (
    <AnimatePresence>
      {isOpen && service && (
        <Dialog
          open={isOpen}
          onClose={closeModal}
          className="fixed inset-0 z-50"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Dialog Panel */}
          <div className="fixed inset-0 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white rounded-lg max-w-md w-full p-6 shadow-lg"
            >
              <Dialog.Title className="text-xl font-bold mb-4">
                Book: {service.title}
              </Dialog.Title>

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded mb-4"
              />

              <p className="mb-2 text-sm">{service.description}</p>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                Duration: {service.duration}
              </p>
              <p className="text-red-600 dark:text-red-400 font-semibold mb-1">
                Price: ${service.price.toFixed(2)}
              </p>

              {service.requiresDropOff && (
                <p className="text-yellow-600 dark:text-yellow-400 text-xs mb-3">
                  * Drop-off required for this service.
                </p>
              )}

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-1.5 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // booking logic here (mocked for now)
                    alert("Booking Confirmed!");
                    closeModal();
                  }}
                  className="px-4 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 transition text-sm"
                >
                  Confirm Booking
                </button>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
