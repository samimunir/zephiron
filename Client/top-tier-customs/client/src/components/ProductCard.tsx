// import { type FC } from "react";
// import { type Product } from "../data/mockProducts";
// import { motion } from "framer-motion";
// import { FaTools } from "react-icons/fa";

// interface Props {
//   product: Product;
// }

// const ProductCard: FC<Props> = ({ product }) => {
//   return (
//     <motion.div
//       className="bg-white dark:bg-zinc-900 shadow-md dark:shadow-zinc-700 rounded-xl overflow-hidden hover:scale-[1.015] transition-transform duration-300 border border-zinc-200 dark:border-zinc-800"
//       whileHover={{ y: -5 }}
//     >
//       <div
//         className="w-full h-48 bg-cover bg-center"
//         style={{ backgroundImage: `url(${product.images[0]})` }}
//       />
//       <div className="p-4 flex flex-col gap-1">
//         <div className="text-sm text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
//           {product.brand}
//         </div>
//         <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
//           {product.title}
//         </h3>
//         <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
//           {product.description}
//         </p>
//         <div className="flex justify-between items-center mt-2">
//           <span className="text-red-600 dark:text-red-400 font-semibold">
//             ${product.price.toFixed(2)}
//           </span>
//           {product.installable && (
//             <div className="text-xs flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
//               <FaTools />
//               Installable
//             </div>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;

import { type FC } from "react";
import { type Product } from "../data/mockProducts";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { addToCart, openCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.images[0],
    });
    openCart();
  };

  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 shadow-md dark:shadow-zinc-700 rounded-xl overflow-hidden hover:scale-[1.015] transition-transform duration-300 border border-zinc-200 dark:border-zinc-800"
      whileHover={{ y: -5 }}
    >
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.images[0]})` }}
      />
      <div className="p-4 flex flex-col gap-1">
        <div className="text-sm text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
          {product.brand}
        </div>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
          {product.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-red-600 dark:text-red-400 font-semibold">
            ${product.price.toFixed(2)}
          </span>
          {product.installable && (
            <div className="text-xs flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              <FaTools />
              Installable
            </div>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-3 px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-md hover:scale-105 transition-transform"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
