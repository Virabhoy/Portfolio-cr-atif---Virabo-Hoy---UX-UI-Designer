"use client";

import { Timer, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useCart, useNavigation } from "@/lib/driiink/driiink-context";
import CartItemRow from "../ui/CartItemRow";

export default function OrderScreen() {
  const { cart, totalPrice, totalItems, increment, decrement, remove } = useCart();
  const { navigate } = useNavigation();

  return (
    <div className="min-h-full flex flex-col pb-24">
      {/* Header */}
      <div className="pt-14 px-5 pb-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-xl font-bold font-bricolage"
        >
          Ta commande
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-2 mt-2"
        >
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-1.5 bg-amber-500/10 backdrop-blur-sm text-amber-400 text-xs font-medium px-3 py-1 rounded-full border border-amber-500/20"
          >
            <Timer size={12} />
            <span>: 12min</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 px-5">
        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center mb-4"
            >
              <ShoppingBag size={28} className="text-zinc-600" />
            </motion.div>
            <p className="text-zinc-500 text-sm">Ta commande est vide</p>
            <p className="text-zinc-600 text-xs mt-1">Ajoute des boissons depuis le menu</p>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-3">
            <AnimatePresence>
              {cart.map((item, i) => (
                <CartItemRow
                  key={item.drink.id}
                  item={item}
                  onIncrement={() => increment(item.drink.id)}
                  onDecrement={() => decrement(item.drink.id)}
                  onRemove={() => remove(item.drink.id)}
                  index={i}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      {totalItems > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-5 pt-4 pb-24"
        >
          <div className="flex items-center justify-between text-sm mb-4 px-1">
            <span className="text-zinc-400">
              {totalItems} article{totalItems > 1 ? "s" : ""}
            </span>
            <motion.span
              key={totalPrice}
              initial={{ scale: 1.15, color: "#22C55E" }}
              animate={{ scale: 1, color: "#FFFFFF" }}
              transition={{ duration: 0.3 }}
              className="font-bold text-lg"
            >
              {totalPrice.toFixed(2)}&euro;
            </motion.span>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
            onClick={() => navigate("payment")}
            className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-base py-4 rounded-2xl transition-colors shadow-lg shadow-green-500/25"
          >
            Je valide la commande
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
