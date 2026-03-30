"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function MercureBackButton() {
  return (
    <Link
      href="/#projects"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium shadow-lg shadow-black/10 hover:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 font-montserrat"
    >
      <Home className="w-4 h-4" />
      <span className="hidden sm:inline">Portfolio</span>
    </Link>
  );
}
