"use client";

import { useLanguage } from "@/lib/language-context";

export default function DarkVsEthical() {
  const { language } = useLanguage();
  const lang = language as "fr" | "en";

  const t = {
    darkTitle: { fr: "Dark Pattern", en: "Dark Pattern" },
    ethicalTitle: { fr: "Design Ethique", en: "Ethical Design" },
    darkProduct: { fr: "Ecouteurs Premium", en: "Premium Headphones" },
    ethicalProduct: { fr: "Ecouteurs Premium", en: "Premium Headphones" },
    darkPrice: "89,99 EUR",
    ethicalPrice: "89,99 EUR",
    darkUrgency: {
      fr: "Plus que 2 en stock ! Achetez MAINTENANT ou perdez-les pour toujours !",
      en: "Only 2 left! Buy NOW or lose them forever!",
    },
    darkTimer: "04:59",
    darkTimerLabel: {
      fr: "Offre expire dans",
      en: "Offer expires in",
    },
    darkViewing: {
      fr: "23 personnes regardent cet article",
      en: "23 people viewing this item",
    },
    darkButton: {
      fr: "ACHETER MAINTENANT",
      en: "BUY NOW",
    },
    darkDecline: {
      fr: "Non merci, je prefere payer plus cher",
      en: "No thanks, I prefer paying more",
    },
    ethicalStock: {
      fr: "En stock. Livraison sous 3-5 jours.",
      en: "In stock. Delivery in 3-5 days.",
    },
    ethicalReturn: {
      fr: "Retours gratuits sous 30 jours",
      en: "Free returns within 30 days",
    },
    ethicalRating: {
      fr: "4.5/5 (1 247 avis verifies)",
      en: "4.5/5 (1,247 verified reviews)",
    },
    ethicalButton: {
      fr: "Ajouter au panier",
      en: "Add to cart",
    },
    ethicalWishlist: {
      fr: "Ajouter aux favoris",
      en: "Add to wishlist",
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* Dark Pattern Side */}
      <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-red-300">
        {/* Header */}
        <div className="bg-[#7F1D1D] px-5 py-3 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2 L12.5 7.5 L18 8.5 L14 12.5 L15 18 L10 15.5 L5 18 L6 12.5 L2 8.5 L7.5 7.5 Z" stroke="#FCA5A5" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="font-bricolage text-sm md:text-base font-bold text-red-200">
            {t.darkTitle[lang]}
          </span>
        </div>

        {/* Mock UI */}
        <div className="bg-gray-900 p-5 space-y-4">
          {/* Product image placeholder */}
          <div className="w-full h-24 bg-gray-700 rounded-lg flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gray-500">
              <circle cx="20" cy="14" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M8 30 C8 20, 12 18, 20 18 C28 18, 32 20, 32 30" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Product info */}
          <div>
            <p className="font-montserrat text-sm font-bold text-white">{t.darkProduct[lang]}</p>
            <p className="font-montserrat text-lg font-bold text-red-400">{t.darkPrice}</p>
          </div>

          {/* Urgency banner */}
          <div className="bg-red-600 rounded-lg p-3 animate-pulse">
            <p className="font-montserrat text-xs font-bold text-white text-center">
              {t.darkUrgency[lang]}
            </p>
          </div>

          {/* Fake timer */}
          <div className="flex items-center justify-center gap-2">
            <span className="font-montserrat text-xs text-gray-400">{t.darkTimerLabel[lang]}</span>
            <span className="font-montserrat text-sm font-bold text-red-400 bg-gray-800 px-2 py-1 rounded">
              {t.darkTimer}
            </span>
          </div>

          {/* Fake viewers */}
          <p className="font-montserrat text-xs text-orange-400 text-center">
            {t.darkViewing[lang]}
          </p>

          {/* CTA */}
          <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg font-montserrat text-sm uppercase tracking-wide">
            {t.darkButton[lang]}
          </button>

          {/* Confirmshaming link */}
          <p className="font-montserrat text-[10px] text-gray-500 text-center italic underline cursor-pointer">
            {t.darkDecline[lang]}
          </p>
        </div>
      </div>

      {/* Ethical Design Side */}
      <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-[#0099FF]">
        {/* Header */}
        <div className="bg-[#0066CC] px-5 py-3 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="#93C5FD" strokeWidth="1.5" fill="none" />
            <path d="M6 10 L9 13 L14 7" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-bricolage text-sm md:text-base font-bold text-blue-200">
            {t.ethicalTitle[lang]}
          </span>
        </div>

        {/* Mock UI */}
        <div className="bg-white p-5 space-y-4">
          {/* Product image placeholder */}
          <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gray-400">
              <circle cx="20" cy="14" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M8 30 C8 20, 12 18, 20 18 C28 18, 32 20, 32 30" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Product info */}
          <div>
            <p className="font-montserrat text-sm font-bold text-gray-800">{t.ethicalProduct[lang]}</p>
            <p className="font-montserrat text-lg font-bold text-gray-900">{t.ethicalPrice}</p>
          </div>

          {/* Stock info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#16A34A" strokeWidth="1.5" fill="none" />
                <path d="M5 8 L7 10 L11 6" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-montserrat text-xs text-green-700">{t.ethicalStock[lang]}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6 L8 10 L12 6" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="3" width="10" height="10" rx="2" stroke="#0099FF" strokeWidth="1.5" fill="none" />
              </svg>
              <span className="font-montserrat text-xs text-gray-600">{t.ethicalReturn[lang]}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((n) => (
              <svg key={n} width="14" height="14" viewBox="0 0 14 14" fill="#FBBF24">
                <path d="M7 1 L8.5 5 L13 5.5 L9.5 8.5 L10.5 13 L7 11 L3.5 13 L4.5 8.5 L1 5.5 L5.5 5 Z" />
              </svg>
            ))}
            <svg width="14" height="14" viewBox="0 0 14 14">
              <defs>
                <linearGradient id="halfStar">
                  <stop offset="50%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
              <path d="M7 1 L8.5 5 L13 5.5 L9.5 8.5 L10.5 13 L7 11 L3.5 13 L4.5 8.5 L1 5.5 L5.5 5 Z" fill="url(#halfStar)" />
            </svg>
            <span className="font-montserrat text-[10px] text-gray-500 ml-1">
              {t.ethicalRating[lang]}
            </span>
          </div>

          {/* CTA */}
          <button className="w-full py-3 bg-[#0099FF] hover:bg-[#0077CC] text-white font-semibold rounded-lg font-montserrat text-sm">
            {t.ethicalButton[lang]}
          </button>

          {/* Wishlist */}
          <button className="w-full py-2 bg-transparent border border-gray-300 text-gray-600 font-medium rounded-lg font-montserrat text-xs hover:bg-gray-50">
            {t.ethicalWishlist[lang]}
          </button>
        </div>
      </div>
    </div>
  );
}
