import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";

const CartDrawer = () => {
  const {
    cart,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    total,
    clearCart,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-[90vw] sm:w-[400px] bg-white dark:bg-zinc-900 shadow-lg z-[9999] overflow-y-auto border-l border-zinc-200 dark:border-zinc-800"
        >
          <div className="flex items-center justify-between p-4 border-b border-zinc-300 dark:border-zinc-700">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <button onClick={closeCart}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="p-4 text-center text-sm text-zinc-500">
              Your cart is empty.
            </div>
          ) : (
            <>
              <div className="p-4 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border rounded-lg p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-xs text-zinc-500">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          className="px-2 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 rounded"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          className="px-2 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 rounded"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-300 dark:border-zinc-700 mt-4 p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button
                  className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                  onClick={clearCart}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
