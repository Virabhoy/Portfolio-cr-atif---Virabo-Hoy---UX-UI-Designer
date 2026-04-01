"use client";

import { useState } from "react";
import { Video, Mic, Mail, ArrowLeft, ArrowRight, Check, Plus, X } from "lucide-react";
import { useLeaveNav, useLeave } from "@/lib/leave/leave-context";
import { referents, recipients } from "@/lib/leave/leave-data";

export default function CreateMessageScreen() {
  const { goBack, setMessageType } = useLeaveNav();
  const { state } = useLeave();
  const [step, setStep] = useState(1);

  return (
    <div className="p-6 md:p-10 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={goBack} className="p-1"><ArrowLeft className="h-5 w-5" /></button>
        <h1 className="text-xl font-bold font-bricolage">Créer un message</h1>
      </div>

      {/* Step indicator */}
      <div className="flex gap-2 mb-8">
        {[1,2,3,4].map(s => (
          <div key={s} className={`flex-1 h-1.5 rounded-full transition-colors ${s <= step ? "bg-[#ffc09f]" : "bg-zinc-200"}`} />
        ))}
      </div>

      {/* Step 1: Choose type */}
      {step === 1 && (
        <div>
          <h2 className="text-lg font-bold font-bricolage mb-2 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#ffee93] text-sm font-bold flex items-center justify-center">1</span>
            Choisissez le type de message
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              { type: "video" as const, icon: Video, label: "Message vidéo", desc: "Enregistrez un message vidéo personnel pour vos proches." },
              { type: "audio" as const, icon: Mic, label: "Message audio", desc: "Enregistrez un message vocal intime et sincère." },
              { type: "letter" as const, icon: Mail, label: "Message lettre", desc: "Rédigez une lettre qui traversera le temps." },
            ].map(t => (
              <button key={t.type} onClick={() => { setStep(2); }} className="rounded-xl border border-zinc-200 bg-white p-6 text-left hover:border-[#ffc09f] hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#fcf5c7] flex items-center justify-center mb-4 group-hover:bg-[#ffc09f]/20 transition-colors">
                  <t.icon className="h-6 w-6 text-[#b8960a]" />
                </div>
                <h3 className="font-bold text-sm mb-1">{t.label}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{t.desc}</p>
                <div className="mt-4 text-xs font-medium text-[#ffc09f]">Choisir ce type de message</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Referents */}
      {step === 2 && (
        <div>
          <h2 className="text-lg font-bold font-bricolage mb-6 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#ffee93] text-sm font-bold flex items-center justify-center">2</span>
            Définissez votre référent
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-sm text-zinc-500">Ajouter un.e référent.e</p>
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="Prénom" className="px-3 py-2.5 rounded-lg border border-zinc-200 text-sm" readOnly defaultValue="Jean" />
                <input placeholder="Nom" className="px-3 py-2.5 rounded-lg border border-zinc-200 text-sm" readOnly defaultValue="Jean" />
              </div>
              <input placeholder="Email" className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 text-sm" readOnly defaultValue="jean.leave@gmail.com" />
              <div className="flex gap-2">
                <span className="px-3 py-2.5 rounded-lg border border-zinc-200 text-sm bg-zinc-50">🇫🇷 +33</span>
                <input placeholder="Téléphone" className="flex-1 px-3 py-2.5 rounded-lg border border-zinc-200 text-sm" readOnly defaultValue="06 13 24 53 37" />
              </div>
              <button className="w-full py-3 rounded-lg bg-[#ffc09f] text-white text-sm font-semibold">Ajouter le référent</button>
            </div>
            <div className="space-y-2">
              {referents.map(r => (
                <div key={r.id} className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <div>
                    <p className="text-sm font-medium">{r.firstName} {r.lastName}</p>
                    <p className="text-[10px] text-zinc-400">{r.email}</p>
                  </div>
                  <button className="p-1 text-zinc-400 hover:text-red-500"><X className="h-4 w-4" /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Recipients */}
      {step === 3 && (
        <div>
          <h2 className="text-lg font-bold font-bricolage mb-6 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#ffee93] text-sm font-bold flex items-center justify-center">3</span>
            Définissez vos destinataires
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-sm text-zinc-500">Ajouter un.e destinataire</p>
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="Prénom" className="px-3 py-2.5 rounded-lg border border-zinc-200 text-sm" readOnly />
                <input placeholder="Nom" className="px-3 py-2.5 rounded-lg border border-zinc-200 text-sm" readOnly />
              </div>
              <input placeholder="Email" className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 text-sm" readOnly />
              <button className="w-full py-3 rounded-lg bg-[#ffc09f] text-white text-sm font-semibold">Ajouter le destinataire</button>
            </div>
            <div className="space-y-2">
              {recipients.slice(0, 3).map(r => (
                <div key={r.id} className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <div>
                    <p className="text-sm font-medium">{r.firstName} {r.lastName}</p>
                    <p className="text-[10px] text-zinc-400">{r.email}</p>
                  </div>
                  <button className="p-1 text-zinc-400 hover:text-red-500"><X className="h-4 w-4" /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Controls */}
      {step === 4 && (
        <div>
          <h2 className="text-lg font-bold font-bricolage mb-6 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#ffee93] text-sm font-bold flex items-center justify-center">4</span>
            Définissez vos contrôles
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-3">Fréquence de contrôle</p>
              <div className="flex gap-3">
                {["1 fois / semaine", "1 fois / mois", "1 fois / an"].map((f, i) => (
                  <label key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                    <input type="radio" name="freq" defaultChecked={i === 1} className="accent-[#ffc09f]" /> {f}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-3">Type de contrôle</p>
              <div className="flex gap-3">
                {["Mail", "SMS"].map((t, i) => (
                  <label key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                    <input type="radio" name="type" defaultChecked={i === 0} className="accent-[#ffc09f]" /> {t}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-zinc-100">
        {step > 1 ? (
          <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-sm text-zinc-500"><ArrowLeft className="h-4 w-4" /> Précédent</button>
        ) : <div />}
        {step < 4 ? (
          <button onClick={() => setStep(step + 1)} className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#ffc09f] text-white text-sm font-semibold">
            Suivant <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#333] text-white text-sm font-semibold">
            <Check className="h-4 w-4" /> Créer mon message
          </button>
        )}
      </div>
    </div>
  );
}
