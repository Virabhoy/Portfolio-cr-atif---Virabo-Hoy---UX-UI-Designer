"use client";

import { useParams, notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Building2, ChevronRight, Flame, Beef, Leaf, Shell, Wine, Sunset, Grape, Utensils, Lightbulb } from "lucide-react";
import { experiences } from "@/lib/mercure/mercure-data";
import MercureHeader from "@/components/mercure/MercureHeader";
import MercureFooter from "@/components/mercure/MercureFooter";
import MercureBackButton from "@/components/mercure/MercureBackButton";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  fire: Flame,
  beef: Beef,
  leaf: Leaf,
  shell: Shell,
  wine: Wine,
  sunset: Sunset,
  grape: Grape,
  utensils: Utensils,
};

function SectionIcon({ name }: { name?: string }) {
  const Icon = name ? iconMap[name] : null;
  if (!Icon) return <div className="w-8 h-8 rounded-full bg-[#A790C4]/20" />;
  return <Icon className="w-8 h-8 text-[#A790C4]" />;
}

export default function ExperienceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const experience = experiences.find((e) => e.slug === slug);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  if (!experience || !experience.detail) {
    notFound();
  }

  const detail = experience.detail;

  // Find next experience with detail page
  const currentIndex = experiences.findIndex((e) => e.slug === slug);
  const nextExperiences = experiences
    .filter((e, i) => i !== currentIndex && e.detail)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <MercureHeader />

      {/* Hero Section - Parallax */}
      <div ref={heroRef} className="relative h-[85vh] overflow-hidden">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-white" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col justify-end pb-16 px-6"
        >
          <div className="max-w-4xl mx-auto w-full">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/mercure-bucketlist"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all experiences
              </Link>
            </motion.div>

            {/* Category badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block px-4 py-1.5 bg-[#A790C4] text-white text-xs font-medium rounded-full mb-4 uppercase tracking-wider"
            >
              {experience.category}
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-spectral leading-tight mb-6"
            >
              {experience.title}
            </motion.h1>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 text-white/70 text-sm"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {experience.city}, {experience.country}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {experience.date}
              </span>
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {experience.hotel}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Intro Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-light font-spectral"
          >
            {detail.intro}
          </motion.p>
        </div>
      </section>

      {/* Content Sections - Staggered layout */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-32">
          {detail.sections.map((section, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-20 items-center`}
            >
              {/* Number + Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-shrink-0"
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                  {/* Decorative ring */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="#A790C4"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                      className="animate-[spin_30s_linear_infinite]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <SectionIcon name={section.icon} />
                    <span className="text-[#A790C4] text-xs font-medium uppercase tracking-widest">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-spectral mb-6">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {section.text}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#A790C4] uppercase tracking-[0.2em] text-xs font-medium mb-2">
              What&apos;s included
            </p>
            <h2 className="text-3xl font-bold text-gray-900 font-spectral">
              Experience Highlights
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {detail.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#A790C4]/20 transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-[#A790C4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#A790C4]" />
                </div>
                <span className="text-gray-700 text-sm font-medium">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insider Tip */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative bg-[#A790C4]/5 border border-[#A790C4]/15 rounded-2xl p-8 sm:p-12"
          >
            <span className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-[#A790C4]/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-[#A790C4]" />
            </span>
            <p className="text-[#A790C4] uppercase tracking-[0.2em] text-xs font-medium mb-3">
              Insider Tip
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-spectral italic">
              {detail.tip}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA - Book */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-spectral mb-4">
              Ready to live this experience?
            </h2>
            <p className="text-gray-600 mb-8">
              Stay at {experience.hotel} and book this experience directly.
            </p>
            <a
              href={experience.hotelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#A790C4] text-white font-medium hover:bg-[#9580B4] transition-all duration-300 shadow-lg shadow-[#A790C4]/20 hover:shadow-[#A790C4]/40 hover:-translate-y-0.5"
            >
              Go to the Hotel
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Next Experiences */}
      {nextExperiences.length > 0 && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-[#A790C4] uppercase tracking-[0.2em] text-xs font-medium mb-2">
                Keep exploring
              </p>
              <h2 className="text-3xl font-bold text-gray-900 font-spectral">
                More Experiences
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {nextExperiences.map((exp, i) => (
                <motion.div
                  key={exp.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/mercure-bucketlist/${exp.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#A790C4]/20 transition-all duration-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[#A790C4] text-xs font-medium uppercase tracking-wider">
                        {exp.city}, {exp.country}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-[#A790C4] transition-colors duration-300 font-spectral">
                        {exp.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <MercureFooter />
      <MercureBackButton />
    </div>
  );
}
