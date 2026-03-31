"use client";

import { useLanguage } from "@/lib/language-context";

export default function FeedbackBeforeAfter() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const t = {
    before: isFr ? "Avant" : "Before",
    after: isFr ? "Apres" : "After",
    beforeCaption: isFr
      ? "Aucun retour apres le clic. L'utilisateur doute."
      : "No feedback after click. The user doubts.",
    afterCaption: isFr
      ? "Chaque etape est accompagnee d'un feedback clair."
      : "Every step is accompanied by clear feedback.",
    submit: isFr ? "Envoyer" : "Submit",
    sending: isFr ? "Envoi..." : "Sending...",
    success: isFr ? "Envoye !" : "Sent!",
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* BEFORE */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-t-4 border-[#DC2626] flex flex-col items-center gap-5">
          <h3 className="font-bricolage text-xl font-bold text-[#DC2626]">
            {t.before}
          </h3>

          {/* Phone mockup */}
          <div className="relative w-[160px] aspect-[9/16] rounded-[1.5rem] border-4 border-gray-800 bg-gray-50 overflow-hidden">
            {/* Status bar */}
            <div className="h-5 bg-gray-200 flex items-center justify-center">
              <div className="w-10 h-1 rounded-full bg-gray-400" />
            </div>

            {/* Form content */}
            <div className="p-3 flex flex-col h-[calc(100%-1.25rem)]">
              {/* Form fields */}
              <div className="space-y-2 mt-1">
                <div className="h-2 bg-gray-200 rounded w-1/3" />
                <div className="h-5 bg-white rounded border border-gray-300" />
                <div className="h-2 bg-gray-200 rounded w-1/2" />
                <div className="h-5 bg-white rounded border border-gray-300" />
                <div className="h-2 bg-gray-200 rounded w-2/5" />
                <div className="h-12 bg-white rounded border border-gray-300" />
              </div>

              <div className="mt-auto space-y-3">
                {/* Submit button - gray, no state change */}
                <div className="w-full py-2 bg-gray-400 rounded-lg text-center">
                  <span className="text-white text-[10px] font-bold font-montserrat">
                    {t.submit}
                  </span>
                </div>

                {/* Nothing happens indicator */}
                <div className="flex items-center justify-center gap-1">
                  <span className="text-[18px]">...</span>
                </div>

                {/* Sad face */}
                <svg className="mx-auto" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
                  <circle cx="11" cy="13" r="1.5" fill="#DC2626" />
                  <circle cx="21" cy="13" r="1.5" fill="#DC2626" />
                  <path d="M11 22 C13 19, 19 19, 21 22" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <text x="16" y="28" textAnchor="middle" fill="#DC2626" fontSize="5" fontFamily="system-ui">?</text>
                </svg>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center font-montserrat leading-relaxed">
            {t.beforeCaption}
          </p>
        </div>

        {/* AFTER */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-t-4 border-[#16A34A] flex flex-col items-center gap-5">
          <h3 className="font-bricolage text-xl font-bold text-[#16A34A]">
            {t.after}
          </h3>

          {/* Phone mockup */}
          <div className="relative w-[160px] aspect-[9/16] rounded-[1.5rem] border-4 border-gray-800 bg-gray-50 overflow-hidden">
            {/* Status bar */}
            <div className="h-5 bg-gray-200 flex items-center justify-center">
              <div className="w-10 h-1 rounded-full bg-gray-400" />
            </div>

            {/* Form content with feedback flow */}
            <div className="p-3 flex flex-col h-[calc(100%-1.25rem)]">
              {/* Form fields */}
              <div className="space-y-2 mt-1">
                <div className="h-2 bg-gray-200 rounded w-1/3" />
                <div className="h-5 bg-white rounded border border-gray-300" />
                <div className="h-2 bg-gray-200 rounded w-1/2" />
                <div className="h-5 bg-white rounded border border-gray-300" />
              </div>

              {/* Feedback flow: 3 steps */}
              <div className="mt-auto space-y-2">
                {/* Step 1: Button pressed */}
                <div className="w-full py-1.5 bg-[#0099FF] rounded-lg text-center shadow-md">
                  <span className="text-white text-[9px] font-bold font-montserrat">
                    {t.submit}
                  </span>
                </div>

                {/* Arrow down */}
                <svg className="mx-auto" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 0 L6 9 M3 6 L6 9 L9 6" stroke="#0099FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Step 2: Loading spinner */}
                <div className="w-full py-1.5 bg-[#0099FF] rounded-lg flex items-center justify-center gap-1.5 opacity-80">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="1.5" strokeDasharray="12 8" />
                  </svg>
                  <span className="text-white text-[9px] font-montserrat">{t.sending}</span>
                </div>

                {/* Arrow down */}
                <svg className="mx-auto" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 0 L6 9 M3 6 L6 9 L9 6" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Step 3: Success */}
                <div className="w-full py-1.5 bg-[#16A34A] rounded-lg flex items-center justify-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5 L4 7 L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white text-[9px] font-bold font-montserrat">{t.success}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center font-montserrat leading-relaxed">
            {t.afterCaption}
          </p>
        </div>
      </div>
    </div>
  );
}
