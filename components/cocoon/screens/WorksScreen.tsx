"use client";

import Image from "next/image";
import { ArrowLeft, CheckCircle2, Circle, Star, Hammer } from "lucide-react";
import { useNavigation } from "@/lib/cocoon/cocoon-context";
import { works, getPropertyById } from "@/lib/cocoon/cocoon-data";

const STATUS_MAP = {
  "planifie": { label: "Planifié", color: "#e09f3e" },
  "en-cours": { label: "En cours", color: "#FF6B6B" },
  "termine": { label: "Terminé", color: "#22c55e" },
};

export default function WorksScreen() {
  const { goBack } = useNavigation();

  return (
    <div className="h-full overflow-y-auto">
      <div className="px-5 pt-4 pb-3 flex items-center gap-3">
        <button onClick={goBack} className="p-1"><ArrowLeft className="h-5 w-5" /></button>
        <h1 className="text-xl font-bold font-bricolage">Travaux</h1>
      </div>

      <div className="px-5 space-y-5 pb-8">
        {works.map((work) => {
          const property = getPropertyById(work.propertyId);
          const status = STATUS_MAP[work.status];
          const doneSteps = work.steps.filter((s) => s.done).length;

          return (
            <div key={work.id} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-zinc-50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold font-bricolage">{work.title}</h3>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${status.color}15`, color: status.color }}>{status.label}</span>
                </div>
                <p className="text-xs text-zinc-500">{property?.title} · Début : {new Date(work.startDate).toLocaleDateString("fr-FR")}</p>
                <p className="text-sm font-bold text-[#FF6B6B] mt-1">{work.cost.toLocaleString()}€</p>
              </div>

              {/* Timeline */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold">Avancement</p>
                  <p className="text-xs text-zinc-400">{doneSteps}/{work.steps.length} étapes</p>
                </div>
                {/* Progress bar */}
                <div className="h-2 w-full bg-zinc-100 rounded-full mb-4">
                  <div className="h-full rounded-full bg-[#FF6B6B]" style={{ width: `${(doneSteps / work.steps.length) * 100}%` }} />
                </div>
                <div className="space-y-2">
                  {work.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      {step.done ? (
                        <CheckCircle2 className="h-4 w-4 text-[#22c55e] shrink-0" />
                      ) : (
                        <Circle className="h-4 w-4 text-zinc-300 shrink-0" />
                      )}
                      <span className={`text-xs ${step.done ? "text-zinc-500 line-through" : "text-zinc-700"}`}>{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Artisan */}
              <div className="px-4 pb-4">
                <div className="rounded-xl bg-zinc-50 p-3 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image src={work.artisan.avatar} alt={work.artisan.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">{work.artisan.name}</p>
                    <p className="text-[10px] text-zinc-500">{work.artisan.job}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-[#e09f3e] fill-[#e09f3e]" />
                    <span className="text-xs font-bold">{work.artisan.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <button className="w-full py-3 rounded-xl border-2 border-dashed border-zinc-200 text-sm font-medium text-zinc-500 flex items-center justify-center gap-2 hover:border-[#FF6B6B] hover:text-[#FF6B6B] transition-colors">
          <Hammer className="h-4 w-4" /> Demander un devis
        </button>
      </div>
    </div>
  );
}
