"use client";

import { useLanguage } from "@/lib/language-context";

function SpinnerPreview({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div
        className="w-10 h-10 rounded-full border-4 border-[#E5E7EB] border-t-[#9CA3AF]"
        style={{ animation: "spin 1s linear infinite" }}
      />
      <p className="font-montserrat text-sm text-[#6B7280]">{label}</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function SkeletonPreview() {
  return (
    <div className="space-y-3 py-4">
      {/* Avatar + name line */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#E5E7EB] via-[#F3F4F6] to-[#E5E7EB] bg-[length:200%_100%]"
          style={{ animation: "shimmer 1.5s infinite" }} />
        <div className="flex-1 space-y-2">
          <div className="h-3 rounded-full bg-gradient-to-r from-[#E5E7EB] via-[#F3F4F6] to-[#E5E7EB] bg-[length:200%_100%] w-2/3"
            style={{ animation: "shimmer 1.5s infinite" }} />
          <div className="h-2.5 rounded-full bg-gradient-to-r from-[#E5E7EB] via-[#F3F4F6] to-[#E5E7EB] bg-[length:200%_100%] w-1/3"
            style={{ animation: "shimmer 1.5s infinite 0.1s" }} />
        </div>
      </div>
      {/* Content lines */}
      {[100, 85, 70, 90].map((w, i) => (
        <div
          key={i}
          className="h-3 rounded-full bg-gradient-to-r from-[#E5E7EB] via-[#F3F4F6] to-[#E5E7EB] bg-[length:200%_100%]"
          style={{ width: `${w}%`, animation: `shimmer 1.5s infinite ${i * 0.1}s` }}
        />
      ))}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

export default function DohertySkeleton() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Spinner */}
      <div className="rounded-2xl border border-[var(--border)] bg-white overflow-hidden">
        <div className="bg-[#F3F4F6] px-5 py-3 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
          <span className="ml-2 font-montserrat text-xs text-[#6B7280]">
            {isFr ? "Indicateur standard" : "Standard indicator"}
          </span>
        </div>
        <div className="px-5">
          <SpinnerPreview label={isFr ? "Chargement…" : "Loading…"} />
        </div>
        <div className="bg-[#FEF2F2] border-t border-[#FECACA] px-5 py-3">
          <p className="font-montserrat text-xs text-[#EF4444] font-semibold">
            {isFr ? "Spinner" : "Spinner"}
          </p>
          <p className="font-montserrat text-xs text-[#6B7280] mt-1">
            {isFr
              ? "Anxiogène — ne donne aucune information sur ce qui charge"
              : "Anxiety-inducing — gives no information about what is loading"}
          </p>
        </div>
      </div>

      {/* Skeleton */}
      <div className="rounded-2xl border border-[var(--border)] bg-white overflow-hidden">
        <div className="bg-[#F3F4F6] px-5 py-3 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
          <span className="ml-2 font-montserrat text-xs text-[#6B7280]">
            {isFr ? "Approche optimisée" : "Optimized approach"}
          </span>
        </div>
        <div className="px-5">
          <SkeletonPreview />
        </div>
        <div className="bg-[#F0FDF4] border-t border-[#BBF7D0] px-5 py-3">
          <p className="font-montserrat text-xs text-[#16A34A] font-semibold">
            {isFr ? "Écran Squelette" : "Skeleton Screen"}
          </p>
          <p className="font-montserrat text-xs text-[#6B7280] mt-1">
            {isFr
              ? "Perçu 20–30% plus rapide — projette la structure du contenu à venir"
              : "Perceived 20–30% faster — projects the structure of incoming content"}
          </p>
        </div>
      </div>
    </div>
  );
}
