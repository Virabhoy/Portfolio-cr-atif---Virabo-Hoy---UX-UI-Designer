"use client";

import { ArcGalleryHero } from "@/components/ui/arc-gallery-hero-component";
import { experiences } from "@/lib/mercure/mercure-data";

export default function MercureHero() {
  const heroImages = experiences.map((e) => e.image);

  return (
    <ArcGalleryHero
      images={heroImages}
      startAngle={20}
      endAngle={160}
      radiusLg={480}
      radiusMd={360}
      radiusSm={240}
      cardSizeLg={130}
      cardSizeMd={100}
      cardSizeSm={75}
      className="bg-white pt-20"
    >
      <div
        className="text-center max-w-3xl px-6 opacity-0 animate-arc-fade-in"
        style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
      >
        <p className="text-[#A790C4] uppercase tracking-[0.3em] text-sm font-medium mb-4 font-montserrat">
          Mercure Bucket List
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 font-spectral leading-tight">
          Discover Local
        </h1>
        <p className="mt-6 text-lg text-gray-600 font-montserrat max-w-xl mx-auto">
          Curated local experiences that reveal the soul of every destination.
          Taste, explore, and connect.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#experiences"
            className="px-8 py-3.5 rounded-full bg-[#A790C4] text-white font-medium hover:bg-[#9580B4] transition-all duration-300 shadow-lg shadow-[#A790C4]/20 hover:shadow-[#A790C4]/40 hover:-translate-y-0.5 font-montserrat"
          >
            Explore Experiences
          </a>
          <a
            href="#map"
            className="px-8 py-3.5 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 font-montserrat"
          >
            View Map
          </a>
        </div>
      </div>
    </ArcGalleryHero>
  );
}
