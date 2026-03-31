"use client";

import { useState, useCallback } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useDriiink, useCart, useNavigation } from "@/lib/driiink/driiink-context";
import PaymentItemRow from "../ui/PaymentItemRow";
import SplitControl from "../ui/SplitControl";
import Confetti from "../ui/Confetti";

export default function PaymentScreen() {
  const { state, dispatch } = useDriiink();
  const { cart, totalPrice } = useCart();
  const { navigate } = useNavigation();
  const [showSuccess, setShowSuccess] = useState(false);

  const selectedTotal = cart
    .filter((item) => state.paidItemIds.includes(item.drink.id))
    .reduce((sum, item) => sum + item.drink.price * item.quantity, 0);

  const remainingTotal = totalPrice - state.alreadyPaidAmount;
  const myShare = selectedTotal > 0 ? selectedTotal / state.splitCount : 0;
  const paidPercent = totalPrice > 0 ? (state.alreadyPaidAmount / totalPrice) * 100 : 0;

  const handlePay = useCallback(() => {
    if (selectedTotal <= 0) return;
    setShowSuccess(true);
    setTimeout(() => {
      dispatch({ type: "CONFIRM_PAYMENT" });
      setShowSuccess(false);
    }, 2500);
  }, [selectedTotal, dispatch]);

  return (
    <div className="min-h-full flex flex-col relative">
      <Confetti active={showSuccess} />

      {/* Header */}
      <div className="pt-12 px-5 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("order")}
            className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white"
          >
            <ArrowLeft size={20} />
          </motion.button>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-lg font-bold font-bricolage leading-snug"
        >
          Sélectionner les articles que vous souhaitez régler
        </motion.h1>
      </div>

      {/* Progress bar */}
      {state.alreadyPaidAmount > 0 && (
        <div className="px-5 mb-4">
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${paidPercent}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#22C55E] to-[#4ADE80] rounded-full"
            />
          </div>
          <p className="text-zinc-500 text-xs mt-1.5">
            {paidPercent.toFixed(0)}% réglé
          </p>
        </div>
      )}

      {/* Item selection */}
      <div className="flex-1 px-5">
        <div className="flex flex-col gap-2.5">
          {cart.map((item, i) => (
            <PaymentItemRow
              key={item.drink.id}
              item={item}
              selected={state.paidItemIds.includes(item.drink.id)}
              onToggle={() =>
                dispatch({ type: "TOGGLE_PAID_ITEM", drinkId: item.drink.id })
              }
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Payment summary */}
      <div className="px-5 pt-4 pb-8">
        <div className="border-t border-white/5 pt-4 mb-4" />

        {state.alreadyPaidAmount > 0 && (
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-zinc-500">Ce qui a déjà été réglé :</span>
            <span className="text-zinc-500 font-medium">
              {state.alreadyPaidAmount.toFixed(2)}&euro;
            </span>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <span className="text-white font-bold text-lg">Total restant :</span>
          <motion.span
            key={remainingTotal}
            initial={{ scale: 1.1, color: "#22C55E" }}
            animate={{ scale: 1, color: "#FFFFFF" }}
            transition={{ duration: 0.3 }}
            className="font-bold text-lg"
          >
            {remainingTotal.toFixed(2)}&euro;
          </motion.span>
        </div>

        {/* Split control + share */}
        <div className="flex items-center justify-between mb-6">
          <SplitControl
            count={state.splitCount}
            onIncrement={() => dispatch({ type: "SET_SPLIT", count: state.splitCount + 1 })}
            onDecrement={() => dispatch({ type: "SET_SPLIT", count: state.splitCount - 1 })}
          />
          <motion.span
            key={myShare.toFixed(2)}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="text-white font-bold text-lg"
          >
            {myShare.toFixed(2)}&euro;
          </motion.span>
        </div>

        {/* CTA */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.01 }}
          onClick={handlePay}
          disabled={selectedTotal <= 0 || showSuccess}
          className="w-full bg-[#22C55E] hover:bg-[#16A34A] disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold text-base py-4 rounded-2xl transition-colors shadow-lg shadow-green-500/25 disabled:shadow-none"
        >
          {showSuccess ? "Paiement en cours..." : "Régler ma part"}
        </motion.button>
      </div>

      {/* Success overlay */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200 }}
            className="w-20 h-20 bg-[#22C55E]/20 rounded-full flex items-center justify-center mb-4 border border-[#22C55E]/30"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-4xl"
            >
              {"\u2713"}
            </motion.span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white text-xl font-bold"
          >
            Paiement validé !
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-zinc-400 text-sm mt-2"
          >
            {myShare.toFixed(2)}&euro; réglés
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
