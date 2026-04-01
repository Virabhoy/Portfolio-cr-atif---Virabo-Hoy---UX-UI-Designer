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
    <div className="min-h-full flex flex-col relative bg-[#FAFAFA]">
      <Confetti active={showSuccess} />

      {/* Header */}
      <div className="bg-white pt-12 px-5 pb-4 border-b border-zinc-100">
        <div className="flex items-center gap-3 mb-3">
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate("order")} className="w-10 h-10 bg-zinc-100 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-700">
            <ArrowLeft size={20} />
          </motion.button>
        </div>
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-zinc-900 text-lg font-bold font-bricolage leading-snug">
          Sélectionner les articles que vous souhaitez régler
        </motion.h1>
      </div>

      {/* Progress bar */}
      {state.alreadyPaidAmount > 0 && (
        <div className="px-5 pt-4 mb-2">
          <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${paidPercent}%` }} transition={{ duration: 0.8, ease: "easeOut" }} className="h-full bg-gradient-to-r from-[#548c2f] to-[#104911] rounded-full" />
          </div>
          <p className="text-zinc-400 text-xs mt-1.5">{paidPercent.toFixed(0)}% réglé</p>
        </div>
      )}

      {/* Items */}
      <div className="flex-1 px-5 pt-3">
        <div className="flex flex-col gap-2.5">
          {cart.map((item, i) => (
            <PaymentItemRow key={item.drink.id} item={item} selected={state.paidItemIds.includes(item.drink.id)} onToggle={() => dispatch({ type: "TOGGLE_PAID_ITEM", drinkId: item.drink.id })} index={i} />
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="px-5 pt-4 pb-8">
        <div className="border-t border-zinc-200 pt-4 mb-4" />
        {state.alreadyPaidAmount > 0 && (
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-zinc-400">Ce qui a déjà été réglé :</span>
            <span className="text-zinc-400 font-medium">{state.alreadyPaidAmount.toFixed(2)}&euro;</span>
          </div>
        )}
        <div className="flex items-center justify-between mb-4">
          <span className="text-zinc-900 font-bold text-lg">Total restant :</span>
          <span className="text-zinc-900 font-bold text-lg">{remainingTotal.toFixed(2)}&euro;</span>
        </div>
        <div className="flex items-center justify-between mb-6">
          <SplitControl count={state.splitCount} onIncrement={() => dispatch({ type: "SET_SPLIT", count: state.splitCount + 1 })} onDecrement={() => dispatch({ type: "SET_SPLIT", count: state.splitCount - 1 })} />
          <span className="text-zinc-900 font-bold text-lg">{myShare.toFixed(2)}&euro;</span>
        </div>
        <motion.button whileTap={{ scale: 0.97 }} onClick={handlePay} disabled={selectedTotal <= 0 || showSuccess} className="w-full bg-[#104911] hover:bg-[#104911]/90 disabled:bg-zinc-300 disabled:text-zinc-500 text-white font-bold text-base py-4 rounded-2xl shadow-lg disabled:shadow-none transition-colors">
          {showSuccess ? "Paiement en cours..." : "Régler ma part"}
        </motion.button>
      </div>

      {/* Success overlay */}
      {showSuccess && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center z-50">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12 }} className="w-20 h-20 bg-[#548c2f]/10 rounded-full flex items-center justify-center mb-4 border border-[#548c2f]/20">
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} className="text-4xl text-[#548c2f]">{"\u2713"}</motion.span>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-zinc-900 text-xl font-bold">Paiement validé !</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-zinc-500 text-sm mt-2">{myShare.toFixed(2)}&euro; réglés</motion.p>
        </motion.div>
      )}
    </div>
  );
}
