"use client";

import Image from "next/image";
import { useNavigation } from "@/lib/cocoon/cocoon-context";
import { conversations } from "@/lib/cocoon/cocoon-data";

export default function MessagesScreen() {
  const { selectConversation } = useNavigation();

  return (
    <div className="h-full overflow-y-auto pb-24">
      <div className="px-5 pt-4 pb-3">
        <h1 className="text-xl font-bold font-bricolage">Messages</h1>
        <p className="text-xs text-zinc-500 mt-1">{conversations.length} conversations</p>
      </div>

      <div className="px-5 space-y-1">
        {conversations.map((c) => (
          <button key={c.id} onClick={() => selectConversation(c.id)} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors text-left">
            <div className="relative shrink-0">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={c.avatar} alt={c.participantName} fill className="object-cover" sizes="48px" />
              </div>
              {c.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#f8f9fa]" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm truncate">{c.participantName}</h3>
                <span className="text-[10px] text-zinc-400 shrink-0">{c.lastMessageTime}</span>
              </div>
              <p className="text-xs text-zinc-500 mt-0.5">{c.participantRole}</p>
              <p className={`text-xs mt-0.5 truncate ${c.unreadCount > 0 ? "text-zinc-900 font-medium" : "text-zinc-400"}`}>{c.lastMessage}</p>
            </div>
            {c.unreadCount > 0 && (
              <span className="w-5 h-5 bg-[#FF6B6B] text-white text-[10px] font-bold rounded-full flex items-center justify-center shrink-0">{c.unreadCount}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
