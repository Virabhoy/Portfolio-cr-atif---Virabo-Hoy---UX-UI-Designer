"use client";

import { useLanguage } from "@/lib/language-context";

export default function ZeigarnikEthics() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Engagement */}
      <div className="bg-[#E8F4FF] border-l-4 border-[#0099FF] rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#0099FF] flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4 className="font-bricolage text-lg font-bold text-[#0066CC]">
            {isFr ? "L'Engagement" : "Engagement"}
          </h4>
        </div>
        <ul className="font-montserrat text-sm text-[#004499] space-y-2">
          {(isFr
            ? [
                "Progression honnête et claire",
                "L'objectif final est atteignable et défini dès le départ",
                "Chaque étape apporte une valeur réelle à l'utilisateur",
              ]
            : [
                "Honest and clear progress",
                "The final goal is achievable and defined from the start",
                "Each step brings real value to the user",
              ]
          ).map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF] mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Dark Pattern */}
      <div className="bg-[#1a1a2e] border-l-4 border-[#FF4444] rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#FF4444] flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 4l8 8M12 4l-8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h4 className="font-bricolage text-lg font-bold text-white">
            {isFr ? "Le Dark Pattern" : "The Dark Pattern"}
          </h4>
        </div>
        <ul className="font-montserrat text-sm text-gray-300 space-y-2">
          {(isFr
            ? [
                "Fausse progression (nouvelles étapes créées à l'infini)",
                "Objectifs flous ou délibérément inaccessibles",
                "Anxiété de l'inachevé exploitée contre l'utilisateur",
              ]
            : [
                "Fake progress (new steps created infinitely)",
                "Vague or deliberately inaccessible goals",
                "Anxiety of the unfinished exploited against the user",
              ]
          ).map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4444] mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
