import { useMemo, useState } from "react";
import { mockProducts } from "../data/mockProducts";
import ProductCard from "../components/ProductCard";
import ProductFilterSidebar from "../components/ProductFilterSidebar";

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("latest");
  const [filterBrand, setFilterBrand] = useState("");

  const availableBrands = useMemo(() => {
    return [...new Set(mockProducts.map((p) => p.brand))];
  }, []);

  const filteredProducts = useMemo(() => {
    let products = [...mockProducts];

    if (searchQuery.trim()) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterBrand) {
      products = products.filter((product) => product.brand === filterBrand);
    }

    if (sortKey === "price-asc") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortKey === "price-desc") {
      products.sort((a, b) => b.price - a.price);
    } else if (sortKey === "latest") {
      products.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    return products;
  }, [searchQuery, sortKey, filterBrand]);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 min-h-[calc(100vh-80px)]">
      <div className="md:w-1/4 w-full">
        <ProductFilterSidebar
          onSearch={setSearchQuery}
          onSort={setSortKey}
          onFilterBrand={setFilterBrand}
          availableBrands={availableBrands}
        />
      </div>

      <div className="md:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-zinc-500 dark:text-zinc-400 col-span-full">
            No products match your search/filter.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
