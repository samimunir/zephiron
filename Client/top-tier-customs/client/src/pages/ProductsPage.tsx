// import { useMemo, useState } from "react";
// import { mockProducts } from "../data/mockProducts";
// import ProductCard from "../components/ProductCard";
// import ProductFilterSidebar from "../components/ProductFilterSidebar";

// const ProductsPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortKey, setSortKey] = useState("latest");
//   const [filterBrand, setFilterBrand] = useState("");

//   const availableBrands = useMemo(() => {
//     return [...new Set(mockProducts.map((p) => p.brand))];
//   }, []);

//   const filteredProducts = useMemo(() => {
//     let products = [...mockProducts];

//     if (searchQuery.trim()) {
//       products = products.filter((product) =>
//         product.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (filterBrand) {
//       products = products.filter((product) => product.brand === filterBrand);
//     }

//     if (sortKey === "price-asc") {
//       products.sort((a, b) => a.price - b.price);
//     } else if (sortKey === "price-desc") {
//       products.sort((a, b) => b.price - a.price);
//     } else if (sortKey === "latest") {
//       products.sort(
//         (a, b) =>
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//       );
//     }

//     return products;
//   }, [searchQuery, sortKey, filterBrand]);

//   return (
//     <section className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 min-h-[calc(100vh-80px)]">
//       <div className="md:w-1/4 w-full">
//         <ProductFilterSidebar
//           onSearch={setSearchQuery}
//           onSort={setSortKey}
//           onFilterBrand={setFilterBrand}
//           availableBrands={availableBrands}
//         />
//       </div>

//       <div className="md:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <p className="text-center text-zinc-500 dark:text-zinc-400 col-span-full">
//             No products match your search/filter.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProductsPage;

// import { useState } from "react";
// import { mockProducts } from "../data/mockProducts";
// import ProductCard from "../components/ProductCard";
// import ProductFilterSidebar from "../components/ProductFilterSidebar";

// const ProductsPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortKey, setSortKey] = useState("price-asc");
//   const [filterBrand, setFilterBrand] = useState("");

//   const filteredProducts = mockProducts
//     .filter((product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .filter((product) => (filterBrand ? product.brand === filterBrand : true))
//     .sort((a, b) => {
//       if (sortKey === "price-asc") return a.price - b.price;
//       if (sortKey === "price-desc") return b.price - a.price;
//       if (sortKey === "latest") return b.createdAt - a.createdAt;
//       return 0;
//     });

//   const uniqueBrands = [...new Set(mockProducts.map((p) => p.brand))];

//   return (
//     <main className="px-4 pt-28 pb-12 min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
//       <h1 className="text-4xl font-bold text-center mb-8 text-zinc-800 dark:text-white">
//         Our Premium Products
//       </h1>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
//         {/* Sticky Sidebar */}
//         <div className="relative">
//           <div className="sticky top-28">
//             <ProductFilterSidebar
//               onSearch={setSearchQuery}
//               onSort={setSortKey}
//               onFilterBrand={setFilterBrand}
//               availableBrands={uniqueBrands}
//             />
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ProductsPage;

import { useState } from "react";
import { motion } from "framer-motion";
import { mockProducts } from "../data/mockProducts";
import ProductCard from "../components/ProductCard";
import ProductFilterSidebar from "../components/ProductFilterSidebar";

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("price-asc");
  const [filterBrand, setFilterBrand] = useState("");

  const filteredProducts = mockProducts
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => (filterBrand ? product.brand === filterBrand : true))
    .sort((a, b) => {
      if (sortKey === "price-asc") return a.price - b.price;
      if (sortKey === "price-desc") return b.price - a.price;
      if (sortKey === "latest") return b.createdAt - a.createdAt;
      return 0;
    });

  const uniqueBrands = [...new Set(mockProducts.map((p) => p.brand))];

  return (
    <main className="px-4 pt-28 pb-12 min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-zinc-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Premium Products
      </motion.h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
        <div className="relative">
          <div className="sticky top-28">
            <ProductFilterSidebar
              onSearch={setSearchQuery}
              onSort={setSortKey}
              onFilterBrand={setFilterBrand}
              availableBrands={uniqueBrands}
            />
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
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
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ProductsPage;
