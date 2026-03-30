"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { MercureExperience } from "@/lib/mercure/mercure-types";

export default function MercureCard({
  experience,
  index,
}: {
  experience: MercureExperience;
  index: number;
}) {
  const hasDetail = !!experience.detail;

  const content = (
    <>
      <div className="relative h-[345px] overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-medium text-[#A790C4] bg-[#A790C4]/10 rounded-full mb-3 font-montserrat">
          {experience.category}
        </span>

        <h3 className="text-gray-900 font-semibold text-lg leading-snug mb-2 font-montserrat group-hover:text-[#A790C4] transition-colors duration-300">
          {experience.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-montserrat">
          <span>{experience.author}</span>
          <span>·</span>
          <span>{experience.date}</span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 font-montserrat">
          {experience.excerpt}
        </p>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-[#A790C4] text-sm font-medium font-montserrat group-hover:tracking-wider transition-all duration-300">
            Read More →
          </span>
        </div>
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(167,144,196,0.15)] transition-all duration-500 hover:-translate-y-1 border border-gray-100"
    >
      {hasDetail ? (
        <Link href={`/mercure-bucketlist/${experience.slug}`} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.article>
  );
}
