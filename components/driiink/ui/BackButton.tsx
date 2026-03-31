"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DriiinkBackButton() {
  return (
    <Link
      href="/#projects"
      className="fixed bottom-6 right-6 z-[100] bg-zinc-800 hover:bg-zinc-700 text-white rounded-full p-3 shadow-lg transition-colors hidden md:flex items-center gap-2 text-sm font-medium"
    >
      <ArrowLeft size={16} />
      Portfolio
    </Link>
  );
}
