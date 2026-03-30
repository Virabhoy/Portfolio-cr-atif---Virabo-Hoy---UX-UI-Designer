"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={cn("w-5 h-5 shrink-0", className)}>
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 10.5 L8.5 13 L14 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={cn("w-5 h-5 shrink-0", className)}>
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7 L13 13 M13 7 L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SparkleIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={cn("w-5 h-5 shrink-0", className)} style={style}>
      <path d="M10 2 L11.5 7.5 L17 6 L12.5 10 L17 14 L11.5 12.5 L10 18 L8.5 12.5 L3 14 L7.5 10 L3 6 L8.5 7.5 Z" fill="currentColor" />
    </svg>
  );
}

function HeartIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={cn("w-5 h-5 shrink-0", className)} style={style}>
      <path d="M10 17 C10 17 3 12.5 3 7.5 C3 5 5 3 7.5 3 C8.8 3 10 3.8 10 5 C10 3.8 11.2 3 12.5 3 C15 3 17 5 17 7.5 C17 12.5 10 17 10 17Z" fill="currentColor" />
    </svg>
  );
}

function ChartUpIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={cn("w-5 h-5 shrink-0", className)} style={style}>
      <path d="M3 15 L8 10 L12 12 L17 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 5 L17 5 L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface CardItem {
  icon: "check" | "x" | "sparkle" | "heart" | "chart";
  text: string;
}

interface CardData {
  title: string;
  borderColor: string;
  items: CardItem[];
  highlighted?: boolean;
}

export default function JakobCompromise() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const cards: CardData[] = [
    {
      title: isFr ? "Respect Strict de Jakob" : "Strict Jakob Compliance",
      borderColor: "#0066CC",
      items: [
        {
          icon: "check",
          text: isFr
            ? "Interface imm\u00e9diatement compr\u00e9hensible"
            : "Immediately understandable interface",
        },
        {
          icon: "x",
          text: isFr
            ? "Manque de diff\u00e9renciation, peu m\u00e9morable"
            : "Lacks differentiation, not memorable",
        },
      ],
    },
    {
      title: isFr
        ? "Le Bon Compromis (Objectif UX)"
        : "The Right Compromise (UX Goal)",
      borderColor: "#1a1a1a",
      highlighted: true,
      items: [
        {
          icon: "sparkle",
          text: isFr
            ? "Standards de navigation conserv\u00e9s"
            : "Navigation standards preserved",
        },
        {
          icon: "heart",
          text: isFr
            ? "Originalit\u00e9 dans l\u2019expression et la valeur"
            : "Originality in expression and value",
        },
        {
          icon: "chart",
          text: isFr
            ? "Adoption rapide + Attachement \u00e9motionnel"
            : "Fast adoption + Emotional attachment",
        },
      ],
    },
    {
      title: isFr ? "Rupture Totale" : "Total Break",
      borderColor: "#E8613C",
      items: [
        {
          icon: "check",
          text: isFr
            ? "Identit\u00e9 forte, m\u00e9morable"
            : "Strong, memorable identity",
        },
        {
          icon: "x",
          text: isFr
            ? "Apprentissage long, rejet utilisateur"
            : "Long learning curve, user rejection",
        },
      ],
    },
  ];

  function renderIcon(type: CardItem["icon"], color: string) {
    const style = { color };
    switch (type) {
      case "check":
        return <CheckIcon className="text-green-500" />;
      case "x":
        return <XIcon className="text-red-400" />;
      case "sparkle":
        return <SparkleIcon style={style} />;
      case "heart":
        return <HeartIcon style={style} />;
      case "chart":
        return <ChartUpIcon style={style} />;
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={cn(
            "bg-white rounded-2xl p-6 border-2 flex flex-col",
            card.highlighted && "shadow-xl md:scale-105 md:-my-2 z-10"
          )}
          style={{ borderColor: card.borderColor }}
        >
          <h4
            className="font-bricolage text-lg font-bold mb-6 text-center"
            style={{ color: card.borderColor }}
          >
            {card.title}
          </h4>
          <div className="space-y-4 flex-1">
            {card.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                {renderIcon(item.icon, card.borderColor)}
                <span className="font-montserrat text-sm text-[#1a1a1a] leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
