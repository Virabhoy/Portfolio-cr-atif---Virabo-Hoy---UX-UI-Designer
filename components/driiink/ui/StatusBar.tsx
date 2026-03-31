"use client";

import { Signal, Wifi, Battery } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-white text-xs font-semibold z-50 relative">
      <span className="w-12">19:41</span>
      <div className="flex-1" />
      <div className="flex items-center gap-1.5">
        <Signal size={14} strokeWidth={2.5} />
        <Wifi size={14} strokeWidth={2.5} />
        <Battery size={18} strokeWidth={2.5} />
      </div>
    </div>
  );
}
