"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { experiences, categories } from "@/lib/mercure/mercure-data";
import MercureCard from "./MercureCard";

export default function MercureGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? experiences
      : experiences.filter((e) => e.category === activeCategory);

  return (
    <section id="experiences" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-[#A790C4] uppercase tracking-[0.2em] text-xs font-medium mb-2 font-montserrat">
              Bucket List
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-spectral">
              Experiences
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-montserrat ${
                  activeCategory === cat
                    ? "bg-[#A790C4] text-white shadow-lg shadow-[#A790C4]/20"
                    : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((experience, index) => (
            <MercureCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-20 font-montserrat">
            No experiences in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
