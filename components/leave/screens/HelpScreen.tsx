"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, BookOpen, ExternalLink } from "lucide-react";

const FAQ = [
  { q: "Comment fonctionne le contrôle de présence ?", a: "Leave vérifie régulièrement que vous êtes en vie via un email ou SMS. Si vous ne répondez pas après plusieurs tentatives, vos référents sont contactés pour confirmer." },
  { q: "Mes messages sont-ils sécurisés ?", a: "Oui, tous les messages sont chiffrés de bout en bout. Personne, pas même notre équipe, ne peut accéder à vos contenus." },
  { q: "Puis-je modifier un message après l'avoir créé ?", a: "Absolument. Vous pouvez modifier, supprimer ou ré-enregistrer vos messages à tout moment depuis votre tableau de bord." },
  { q: "Que se passe-t-il si mon référent ne répond pas ?", a: "Le système contacte automatiquement vos autres référents. Si aucun ne confirme, le processus de transmission est déclenché selon vos paramètres." },
  { q: "Combien de temps mes messages sont-ils conservés ?", a: "Avec l'offre unique, 5 ans. Avec l'offre illimitée, vos messages sont conservés sans limite de temps." },
];

export default function HelpScreen() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="p-6 md:p-10 max-w-3xl">
      <h1 className="text-xl font-bold font-bricolage mb-2">Aide</h1>
      <p className="text-sm text-zinc-500 mb-8">Questions fréquentes et support.</p>

      {/* FAQ */}
      <div className="space-y-2 mb-8">
        {FAQ.map((item, i) => (
          <div key={i} className="rounded-xl border border-zinc-100 bg-white overflow-hidden">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left">
              <span className="text-sm font-medium pr-4">{item.q}</span>
              <ChevronDown className={`h-4 w-4 text-zinc-400 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4">
                <p className="text-sm text-zinc-500 leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Support */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-[#ffc09f]/10 border border-[#ffc09f]/20 p-5">
          <MessageCircle className="h-6 w-6 text-[#ffc09f] mb-3" />
          <h3 className="font-bold text-sm mb-1">Contacter le support</h3>
          <p className="text-xs text-zinc-500 mb-3">Notre équipe vous répond sous 24h.</p>
          <button className="text-xs font-medium text-[#ffc09f]">Envoyer un message</button>
        </div>
        <div className="rounded-xl bg-[#a0ced9]/10 border border-[#a0ced9]/20 p-5">
          <BookOpen className="h-6 w-6 text-[#a0ced9] mb-3" />
          <h3 className="font-bold text-sm mb-1">Le blog</h3>
          <p className="text-xs text-zinc-500 mb-3">Conseils pour préparer vos messages.</p>
          <button className="text-xs font-medium text-[#a0ced9] flex items-center gap-1">Lire les articles <ExternalLink className="h-3 w-3" /></button>
        </div>
      </div>
    </div>
  );
}
