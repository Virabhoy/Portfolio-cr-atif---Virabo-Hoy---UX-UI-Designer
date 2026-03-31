"use client";

import { useEffect } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ToastProps {
  message: string;
  visible: boolean;
  onDismiss: () => void;
  icon?: "cart" | "check";
}

export default function Toast({ message, visible, onDismiss, icon = "cart" }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onDismiss, 2500);
      return () => clearTimeout(timer);
    }
  }, [visible, onDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="absolute top-16 left-4 right-4 z-[60] flex items-center gap-3 bg-[#22C55E]/15 backdrop-blur-xl border border-[#22C55E]/30 rounded-2xl px-4 py-3 shadow-lg shadow-green-500/10"
        >
          <div className="w-8 h-8 bg-[#22C55E]/20 rounded-full flex items-center justify-center shrink-0">
            {icon === "cart" ? (
              <ShoppingCart size={14} className="text-[#22C55E]" />
            ) : (
              <Check size={14} className="text-[#22C55E]" />
            )}
          </div>
          <span className="text-white text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
