"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

interface Strategy {
  fr: string;
  en: string;
  icon: React.ReactNode;
}

function GridIcon() {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={10}
        y={10}
        width={18}
        height={18}
        rx={4}
        stroke="#0066CC"
        strokeWidth={2}
      />
      <rect
        x={36}
        y={10}
        width={18}
        height={18}
        rx={4}
        stroke="#0066CC"
        strokeWidth={2}
      />
      <rect
        x={10}
        y={36}
        width={18}
        height={18}
        rx={4}
        stroke="#0066CC"
        strokeWidth={2}
      />
      <rect
        x={36}
        y={36}
        width={18}
        height={18}
        rx={4}
        stroke="#0066CC"
        strokeWidth={2}
      />
    </svg>
  );
}

function StackedCardsIcon() {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={14}
        y={8}
        width={36}
        height={14}
        rx={4}
        stroke="#0066CC"
        strokeWidth={2}
      />
      <rect
        x={14}
        y={26}
        width={36}
        height={14}
        rx={4}
        stroke="#0066CC"
        strokeWidth={2}
        fill="#0066CC"
        fillOpacity={0.08}
      />
      <rect
        x={14}
        y={44}
        width={36}
        height={14}
        rx={4}
        stroke="#0066CC"
        strokeWidth={2}
        strokeDasharray="4 3"
      />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C10 17.7909 11.7909 16 14 16H24L28 22H50C52.2091 22 54 23.7909 54 26V46C54 48.2091 52.2091 50 50 50H14C11.7909 50 10 48.2091 10 46V20Z"
        stroke="#0066CC"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <line
        x1={20}
        y1={34}
        x2={44}
        y2={34}
        stroke="#0066CC"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <line
        x1={20}
        y1={40}
        x2={36}
        y2={40}
        stroke="#0066CC"
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.5}
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={28} cy={28} r={14} stroke="#0066CC" strokeWidth={2} />
      <line
        x1={38.5}
        y1={38.5}
        x2={52}
        y2={52}
        stroke="#0066CC"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <line
        x1={22}
        y1={28}
        x2={34}
        y2={28}
        stroke="#0066CC"
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.4}
      />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={10}
        y={14}
        width={10}
        height={38}
        rx={3}
        stroke="#0066CC"
        strokeWidth={2}
        fill="#0066CC"
        fillOpacity={0.15}
      />
      <rect
        x={24}
        y={24}
        width={10}
        height={28}
        rx={3}
        stroke="#0066CC"
        strokeWidth={2}
        fill="#0066CC"
        fillOpacity={0.1}
      />
      <rect
        x={38}
        y={32}
        width={10}
        height={20}
        rx={3}
        stroke="#0066CC"
        strokeWidth={2}
        fill="#0066CC"
        fillOpacity={0.06}
      />
      <line
        x1={8}
        y1={52}
        x2={56}
        y2={52}
        stroke="#0066CC"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

const strategies: Strategy[] = [
  { fr: "Reduire avec intelligence", en: "Reduce with intelligence", icon: <GridIcon /> },
  { fr: "Revelation Progressive", en: "Progressive Disclosure", icon: <StackedCardsIcon /> },
  { fr: "Categories Claires", en: "Clear Categories", icon: <FolderIcon /> },
  { fr: "La Barre de Recherche", en: "The Search Bar", icon: <SearchIcon /> },
  { fr: "Hierarchie Visuelle", en: "Visual Hierarchy", icon: <BarChartIcon /> },
];

export default function HicksStrategies() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {strategies.map((s, i) => (
          <div
            key={i}
            className={cn(
              "bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 text-center",
              "hover:shadow-lg transition-shadow duration-200",
              // Last item spans 2 cols on mobile when odd count
              i === strategies.length - 1 && strategies.length % 2 !== 0
                ? "col-span-2 md:col-span-1"
                : ""
            )}
          >
            <div className="flex items-center justify-center">{s.icon}</div>
            <p className="font-bricolage text-sm font-semibold text-gray-800 leading-tight">
              {isFr ? s.fr : s.en}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
