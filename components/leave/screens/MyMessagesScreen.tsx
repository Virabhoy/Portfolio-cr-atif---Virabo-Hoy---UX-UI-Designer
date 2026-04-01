"use client";

import { Video, Mic, Mail, Edit, Circle } from "lucide-react";
import { useLeaveNav } from "@/lib/leave/leave-context";
import { messages } from "@/lib/leave/leave-data";

const TYPE_ICONS = { video: Video, audio: Mic, letter: Mail };
const TYPE_COLORS = { video: "#ffc09f", audio: "#a0ced9", letter: "#adf7b6" };

export default function MyMessagesScreen() {
  const { navigate } = useLeaveNav();

  return (
    <div className="p-6 md:p-10 max-w-3xl">
      <h1 className="text-xl font-bold font-bricolage mb-6">Mes messages</h1>

      <div className="space-y-3">
        {messages.map((msg) => {
          const Icon = TYPE_ICONS[msg.type];
          const color = TYPE_COLORS[msg.type];
          return (
            <div key={msg.id} className="rounded-xl border border-zinc-100 p-5 hover:shadow-md transition-shadow" style={{ backgroundColor: `${color}15` }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}40` }}>
                  <Icon className="h-6 w-6" style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">Destinataire</span>
                    <span className="text-xs text-[#ffc09f]">Alerter par :</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-sm font-medium">{msg.recipients.map(r => `${r.firstName} ${r.lastName}`).join(", ")}</p>
                    <span className="text-zinc-300">·</span>
                    <p className="text-xs text-zinc-500">{msg.referents.map(r => `${r.firstName} ${r.lastName}`).join(", ")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Circle className={`h-4 w-4 ${msg.status === "active" ? "text-green-500 fill-green-500" : "text-zinc-300"}`} />
                  <button className="p-2 rounded-lg hover:bg-white/50"><Edit className="h-4 w-4 text-zinc-400" /></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={() => navigate("create-message")} className="w-full mt-6 py-4 rounded-xl bg-[#a0ced9] text-white text-sm font-semibold hover:bg-[#8bbcc8] transition-colors">
        Créer un nouveau message
      </button>
    </div>
  );
}
