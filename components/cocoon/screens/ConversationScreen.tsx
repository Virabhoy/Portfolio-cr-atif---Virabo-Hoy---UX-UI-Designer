"use client";

import Image from "next/image";
import { ArrowLeft, Send, Phone } from "lucide-react";
import { useCocoon, useNavigation } from "@/lib/cocoon/cocoon-context";
import { getConversationById } from "@/lib/cocoon/cocoon-data";

export default function ConversationScreen() {
  const { state } = useCocoon();
  const { goBack } = useNavigation();
  const convo = getConversationById(state.selectedConversationId || "");

  if (!convo) return <div className="p-5 text-center text-zinc-400">Conversation non trouvée</div>;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-100 bg-white">
        <button onClick={goBack} className="p-1"><ArrowLeft className="h-5 w-5" /></button>
        <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
          <Image src={convo.avatar} alt={convo.participantName} fill className="object-cover" sizes="36px" />
          {convo.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-sm truncate">{convo.participantName}</h3>
          <p className="text-[10px] text-zinc-400">{convo.online ? "En ligne" : "Hors ligne"}</p>
        </div>
        <button className="p-2 rounded-full bg-zinc-50"><Phone className="h-4 w-4 text-zinc-500" /></button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {convo.messages.map((msg) => {
          const isOwner = msg.senderId === "owner";
          return (
            <div key={msg.id} className={`flex ${isOwner ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${isOwner ? "bg-[#FF6B6B] text-white rounded-br-sm" : "bg-white border border-zinc-200 rounded-bl-sm"}`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p className={`text-[9px] mt-1 ${isOwner ? "text-white/60" : "text-zinc-400"}`}>{msg.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-zinc-100 bg-white">
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Écrire un message..." className="flex-1 h-10 px-4 rounded-full bg-zinc-100 text-sm outline-none" readOnly />
          <button className="w-10 h-10 rounded-full bg-[#FF6B6B] flex items-center justify-center">
            <Send className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
