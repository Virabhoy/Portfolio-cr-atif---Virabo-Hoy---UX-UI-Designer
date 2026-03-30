"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MercureHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image
          src="/images/mercure-bucketlist/logo.webp"
          alt="Mercure"
          width={160}
          height={45}
          className="h-8 w-auto object-contain invert"
          priority
        />
        <span className="text-[#A790C4] text-sm font-medium tracking-widest uppercase hidden sm:block">
          Discover Local
        </span>
      </div>
    </header>
  );
}
