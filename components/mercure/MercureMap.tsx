"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { DottedMap } from "@/registry/magicui/dotted-map";
import type { Marker } from "@/registry/magicui/dotted-map";

const markers: Marker[] = [
  { lat: -25.695, lng: -54.437, size: 0.5, label: "Iguazu" },
  { lat: -35.774, lng: 137.214, size: 0.5, label: "Kangaroo Island" },
  { lat: -37.749, lng: 145.437, size: 0.5, label: "Yarra Valley" },
  { lat: -19.919, lng: -43.938, size: 0.5, label: "Belo Horizonte" },
  { lat: 45.923, lng: 6.869, size: 0.5, label: "French Alps" },
  { lat: 43.949, lng: 4.805, size: 0.5, label: "Avignon" },
  { lat: 44.837, lng: -0.579, size: 0.5, label: "Bordeaux" },
  { lat: 49.194, lng: 2.483, size: 0.5, label: "Chantilly" },
];

export default function MercureMap() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="map" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#A790C4] uppercase tracking-[0.2em] text-xs font-medium mb-2 font-montserrat">
            Where to go
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-spectral">
            Explore the World
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative h-[500px] w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50"
        >
          <div className="absolute inset-0 bg-radial from-transparent to-white/80 to-200% pointer-events-none z-10" />
          <DottedMap
            markers={markers}
            pulse
            dotColor="#d1d5db"
            markerColor="#A790C4"
            dotRadius={0.3}
            activeMarkerIndex={activeIndex}
            onMarkerClick={() => {
              document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" });
            }}
            onMarkerHover={(_marker, index) => {
              setActiveIndex(index >= 0 ? index : null);
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
