"use client";

import { useLanguage } from "@/lib/language-context";

interface Tool {
  name: string;
  free: string[];
  pro: { price: string; features: string[] };
  enterprise: { price: string; features: string[] };
}

const toolsFr: Tool[] = [
  {
    name: "ChatGPT",
    free: ["GPT-4o mini", "Limite messages"],
    pro: { price: "20$/mois", features: ["GPT-4o", "DALL-E", "Plugins"] },
    enterprise: {
      price: "Sur devis",
      features: ["Admin", "SSO", "Audit logs"],
    },
  },
  {
    name: "Claude",
    free: ["Claude 3.5 Sonnet", "Limite quotidienne"],
    pro: { price: "20$/mois", features: ["Usage etendu", "Projets", "Artefacts"] },
    enterprise: {
      price: "Sur devis",
      features: ["Admin", "SSO", "API etendue"],
    },
  },
  {
    name: "Midjourney",
    free: ["Essai limite"],
    pro: { price: "10$/mois", features: ["200 images", "Mode rapide"] },
    enterprise: {
      price: "60$/mois",
      features: ["Illimite", "Mode stealth"],
    },
  },
  {
    name: "Copilot",
    free: ["Completions de base"],
    pro: { price: "10$/mois", features: ["Chat", "Completions avancees"] },
    enterprise: {
      price: "39$/mois",
      features: ["Politique org.", "Fine-tuning"],
    },
  },
];

const toolsEn: Tool[] = [
  {
    name: "ChatGPT",
    free: ["GPT-4o mini", "Message limits"],
    pro: { price: "$20/mo", features: ["GPT-4o", "DALL-E", "Plugins"] },
    enterprise: {
      price: "Custom",
      features: ["Admin", "SSO", "Audit logs"],
    },
  },
  {
    name: "Claude",
    free: ["Claude 3.5 Sonnet", "Daily limits"],
    pro: { price: "$20/mo", features: ["Extended usage", "Projects", "Artifacts"] },
    enterprise: {
      price: "Custom",
      features: ["Admin", "SSO", "Extended API"],
    },
  },
  {
    name: "Midjourney",
    free: ["Limited trial"],
    pro: { price: "$10/mo", features: ["200 images", "Fast mode"] },
    enterprise: {
      price: "$60/mo",
      features: ["Unlimited", "Stealth mode"],
    },
  },
  {
    name: "Copilot",
    free: ["Basic completions"],
    pro: { price: "$10/mo", features: ["Chat", "Advanced completions"] },
    enterprise: {
      price: "$39/mo",
      features: ["Org policies", "Fine-tuning"],
    },
  },
];

const tiers = [
  { key: "free", color: "#C4B5FD", darkColor: "#7C3AED" },
  { key: "pro", color: "#8B5CF6", darkColor: "#6D28D9" },
  { key: "enterprise", color: "#6D28D9", darkColor: "#4C1D95" },
];

export default function PricingComparison() {
  const { language } = useLanguage();
  const tools = language === "fr" ? toolsFr : toolsEn;

  const t = {
    title: language === "fr" ? "Comparatif des tarifs" : "Pricing Comparison",
    free: "Free",
    pro: "Pro",
    enterprise: "Enterprise",
    included: language === "fr" ? "Inclus" : "Included",
  };

  return (
    <div className="w-full max-w-4xl mx-auto overflow-x-auto">
      <h3 className="font-bricolage text-xl font-bold text-center text-[#7C3AED] mb-6">
        {t.title}
      </h3>

      <div className="min-w-[600px]">
        {/* Header row */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          <div />
          {tiers.map((tier) => (
            <div
              key={tier.key}
              className="rounded-xl py-3 px-4 text-center font-bricolage font-bold text-white text-sm"
              style={{ backgroundColor: tier.darkColor }}
            >
              {t[tier.key as keyof typeof t]}
            </div>
          ))}
        </div>

        {/* Tool rows */}
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="grid grid-cols-4 gap-3 mb-3"
          >
            {/* Tool name */}
            <div className="rounded-xl bg-[#EDE9FE] py-3 px-4 flex items-center">
              <span className="font-bricolage font-bold text-[#7C3AED] text-sm">
                {tool.name}
              </span>
            </div>

            {/* Free tier */}
            <div className="rounded-xl border-2 border-[#C4B5FD] bg-white py-3 px-4">
              <div className="flex items-center gap-1.5 mb-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#C4B5FD" />
                  <path
                    d="M5 8l2 2 4-4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-montserrat font-semibold text-[#7C3AED]">
                  {t.free}
                </span>
              </div>
              {tool.free.map((f, i) => (
                <p
                  key={i}
                  className="text-xs font-montserrat text-gray-600 leading-relaxed"
                >
                  {f}
                </p>
              ))}
            </div>

            {/* Pro tier */}
            <div className="rounded-xl border-2 border-[#8B5CF6] bg-[#EDE9FE] py-3 px-4">
              <div className="flex items-center gap-1.5 mb-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#8B5CF6" />
                  <path
                    d="M5 8l2 2 4-4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-montserrat font-bold text-[#6D28D9]">
                  {tool.pro.price}
                </span>
              </div>
              {tool.pro.features.map((f, i) => (
                <p
                  key={i}
                  className="text-xs font-montserrat text-gray-700 leading-relaxed"
                >
                  {f}
                </p>
              ))}
            </div>

            {/* Enterprise tier */}
            <div className="rounded-xl border-2 border-[#6D28D9] bg-[#DDD6FE] py-3 px-4">
              <div className="flex items-center gap-1.5 mb-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#6D28D9" />
                  <path
                    d="M5 8l2 2 4-4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-montserrat font-bold text-[#4C1D95]">
                  {tool.enterprise.price}
                </span>
              </div>
              {tool.enterprise.features.map((f, i) => (
                <p
                  key={i}
                  className="text-xs font-montserrat text-gray-700 leading-relaxed"
                >
                  {f}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
