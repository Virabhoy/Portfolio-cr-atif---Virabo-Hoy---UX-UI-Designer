"use client";

import { Check, Crown } from "lucide-react";
import { pricingPlans } from "@/lib/leave/leave-data";

export default function PricingScreen() {
  return (
    <div className="p-6 md:p-10 max-w-3xl">
      <h1 className="text-xl font-bold font-bricolage mb-2">Mon offre</h1>
      <p className="text-sm text-zinc-500 mb-6">Choisissez le pack répondant à votre besoin.</p>

      <div className="rounded-xl bg-[#adf7b6]/20 border border-[#adf7b6]/40 p-4 mb-6 flex items-center gap-3">
        <Crown className="h-5 w-5 text-green-600" />
        <div>
          <p className="text-sm font-medium">Offre actuelle : Message illimité</p>
          <p className="text-[10px] text-zinc-500">Renouvelé le 15/01/2025</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={`rounded-2xl border p-6 space-y-4 ${plan.popular ? "border-[#ffc09f] bg-[#ffc09f]/5 shadow-lg" : "border-zinc-200 bg-white"}`}>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl">{plan.icon}</span>
                <h3 className="font-bold font-bricolage mt-2">{plan.name}</h3>
              </div>
              {plan.popular && <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#ffc09f] text-white">Populaire</span>}
            </div>
            <div>
              <span className="text-3xl font-bold font-bricolage">{plan.price}€</span>
              <span className="text-sm text-zinc-400 ml-1">{plan.period}</span>
            </div>
            <ul className="space-y-2">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                  <Check className={`h-4 w-4 shrink-0 ${plan.popular ? "text-[#ffc09f]" : "text-zinc-400"}`} /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors ${plan.popular ? "bg-[#ffc09f] text-white hover:bg-[#e89a80]" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`}>
              {plan.popular ? "Offre actuelle" : "Choisir cette offre"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
