// import mockServices from "../data/mockServices";
// import ServiceCard from "../components/ServiceCard";

// const ServicesPage = () => {
//   return (
//     <section className="max-w-screen-xl mx-auto px-4 pt-28 pb-12">
//       <h1 className="text-4xl font-bold text-center mb-8 text-zinc-800 dark:text-white">
//         Our Premium Services
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {mockServices.map((service) => (
//           <ServiceCard key={service.id} service={service} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesPage;

import { motion } from "framer-motion";
import mockServices from "../data/mockServices";
import ServiceCard from "../components/ServiceCard";

const ServicesPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pt-28 pb-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-zinc-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Premium Services
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {mockServices.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesPage;
