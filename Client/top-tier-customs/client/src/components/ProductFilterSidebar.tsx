import { type FC, useState } from "react";

interface Props {
  onSearch: (query: string) => void;
  onSort: (sortKey: string) => void;
  onFilterBrand: (brand: string) => void;
  availableBrands: string[];
}

const ProductFilterSidebar: FC<Props> = ({
  onSearch,
  onSort,
  onFilterBrand,
  availableBrands,
}) => {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("");

  return (
    <aside className="w-full md:w-64 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
          Search
        </h3>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
          }}
          className="w-full p-2 rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white"
          placeholder="Search products..."
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
          Sort By
        </h3>
        <select
          onChange={(e) => onSort(e.target.value)}
          className="w-full p-2 rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white"
        >
          <option value="price-asc">Price (Lowest)</option>
          <option value="price-desc">Price (Highest)</option>
          <option value="latest">Newest</option>
        </select>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
          Filter by Brand
        </h3>
        <select
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            onFilterBrand(e.target.value);
          }}
          className="w-full p-2 rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white"
        >
          <option value="">All Brands</option>
          {availableBrands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};

export default ProductFilterSidebar;
