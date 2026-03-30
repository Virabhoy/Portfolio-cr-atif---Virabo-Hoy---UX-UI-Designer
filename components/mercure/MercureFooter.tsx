"use client";

import Image from "next/image";

export default function MercureFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <Image
          src="/images/mercure-bucketlist/logo.webp"
          alt="Mercure"
          width={120}
          height={34}
          className="h-6 w-auto object-contain invert opacity-40"
        />
        <p className="text-gray-400 text-xs tracking-[0.2em] uppercase font-montserrat">
          Feel Local Everywhere
        </p>
        <p className="text-gray-300 text-xs font-montserrat">
          © 2024 Mercure — Accor Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
