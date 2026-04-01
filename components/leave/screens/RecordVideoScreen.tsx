"use client";

import { ArrowLeft, Video, Settings, Lightbulb } from "lucide-react";
import { useLeaveNav } from "@/lib/leave/leave-context";

export default function RecordVideoScreen() {
  const { goBack } = useLeaveNav();

  return (
    <div className="p-6 md:p-10 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={goBack} className="p-1"><ArrowLeft className="h-5 w-5" /></button>
        <h1 className="text-xl font-bold font-bricolage flex items-center gap-2">Créer un message vidéo <span className="text-xl">🎬</span></h1>
      </div>

      <div className="grid md:grid-cols-[1fr_1.5fr] gap-6">
        {/* Left - tips + notes */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-bold text-[#ffc09f] flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4" /> Préparez vous
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Consultez notre rubrique conseil et préparez si besoin vos discours à l&apos;avances.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium">Notes personnels</h4>
              <button className="p-1 text-zinc-400 hover:text-zinc-600">✏️</button>
            </div>
            <textarea
              className="w-full h-32 text-sm text-zinc-500 bg-transparent outline-none resize-none"
              placeholder="Écrivez vos notes ici pour vous aider lors de l'enregistrement..."
              readOnly
              defaultValue="Parler du voyage en Italie et des souvenirs d'enfance. Mentionner la maison de grand-mère."
            />
          </div>
        </div>

        {/* Right - video area */}
        <div className="space-y-4">
          <div className="relative rounded-2xl bg-zinc-100 border-2 border-dashed border-zinc-300 aspect-video flex flex-col items-center justify-center">
            <Video className="h-12 w-12 text-zinc-300 mb-3" />
            <p className="text-sm text-zinc-400">Zone d&apos;enregistrement vidéo</p>
            <p className="text-[10px] text-zinc-300 mt-1">Cliquez pour démarrer la caméra</p>
            <button className="absolute bottom-3 right-3 p-2 rounded-lg bg-white border border-zinc-200">
              <Settings className="h-4 w-4 text-zinc-400" />
            </button>
          </div>

          <button className="w-full py-4 rounded-xl bg-[#a0ced9] text-white text-sm font-semibold hover:bg-[#8bbcc8] transition-colors">
            Commencer à enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
