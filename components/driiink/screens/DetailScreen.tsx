"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useDriiink, useCart, useNavigation } from "@/lib/driiink/driiink-context";
import { getDrinkById, categories } from "@/lib/driiink/driiink-data";
import QuantityControl from "../ui/QuantityControl";
import Toast from "../ui/Toast";

export default function DetailScreen() {
  const { state } = useDriiink();
  const { addToCart, totalItems } = useCart();
  const { navigate } = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ container: scrollRef });
  const imageY = useTransform(scrollY, [0, 200], [0, -30]);
  const imageScale = useTransform(scrollY, [0, 200], [1, 1.1]);

  const drink = state.selectedDrinkId ? getDrinkById(state.selectedDrinkId) : null;
  const category = drink ? categories.find((c) => c.id === drink.category) : null;

  const handleDismissToast = useCallback(() => setShowToast(false), []);

  if (!drink) return null;

  const handleAdd = () => {
    addToCart(drink, quantity);
    setShowToast(true);
  };

  const totalPrice = (drink.price * quantity).toFixed(2);

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto overflow-x-hidden">
      <Toast
        message={`${drink.name} ajouté au panier !`}
        visible={showToast}
        onDismiss={handleDismissToast}
        icon="cart"
      />

      {/* Image header with parallax */}
      <div className="relative h-[300px] shrink-0 overflow-hidden">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0"
        >
          <Image
            src={drink.image}
            alt={drink.name}
            fill
            className="object-cover"
            sizes="390px"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />

        {/* Top bar */}
        <div className="absolute top-12 left-4 right-4 flex items-center justify-between z-10">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("home")}
            className="w-10 h-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white"
          >
            <ArrowLeft size={20} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("order")}
            className="relative w-10 h-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white"
          >
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-[#22C55E] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md shadow-green-500/30"
              >
                {totalItems}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 -mt-6 relative z-10 pb-8">
        {/* Category badge */}
        {category && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-400 mb-3"
          >
            <span>{category.emoji}</span>
            {category.name}
          </motion.span>
        )}

        {/* Name + Price */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex items-start justify-between mb-4"
        >
          <h1 className="text-white text-2xl font-bold font-bricolage">{drink.name}</h1>
          <span className="text-white text-xl font-bold">{drink.price.toFixed(2)}&euro;</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-sm leading-relaxed mb-6"
        >
          {drink.description}
        </motion.p>

        {/* Ingredients */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            Ingrédients
          </motion.h3>
          <div className="grid grid-cols-4 gap-3">
            {drink.ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10">
                  <span className="text-2xl">{ing.emoji}</span>
                </div>
                <span className="text-zinc-500 text-[10px] text-center leading-tight">
                  {ing.quantity}
                </span>
                <span className="text-zinc-300 text-[10px] font-medium text-center leading-tight">
                  {ing.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quantity + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <QuantityControl
            quantity={quantity}
            onIncrement={() => setQuantity((q) => Math.min(q + 1, 10))}
            onDecrement={() => setQuantity((q) => Math.max(q - 1, 1))}
          />

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
            onClick={handleAdd}
            className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-base py-4 rounded-2xl transition-colors shadow-lg shadow-green-500/25"
          >
            J&apos;ajoute au panier &middot; {totalPrice}&euro;
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
