import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const itemsInCart = 3;
  return (
    <button className="relative p-2 rounded-full border-emerald-500">
      <ShoppingCart className="w-6 h-6" />
      {itemsInCart > 0 && (
        <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {itemsInCart}
        </span>
      )}
    </button>
  );
};

export default Cart;
