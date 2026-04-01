"use client";

import { ArrowLeft, DollarSign, MessageSquare, Wrench, FileText, AlertTriangle } from "lucide-react";
import { useNavigation } from "@/lib/cocoon/cocoon-context";
import { notifications } from "@/lib/cocoon/cocoon-data";
import type { NotificationType } from "@/lib/cocoon/cocoon-types";

const TYPE_CONFIG: Record<NotificationType, { icon: typeof DollarSign; color: string }> = {
  loyer: { icon: DollarSign, color: "#22c55e" },
  message: { icon: MessageSquare, color: "#335c67" },
  travaux: { icon: Wrench, color: "#e09f3e" },
  document: { icon: FileText, color: "#FF6B6B" },
  alerte: { icon: AlertTriangle, color: "#ef4444" },
};

export default function NotificationsScreen() {
  const { goBack } = useNavigation();

  return (
    <div className="h-full overflow-y-auto">
      <div className="px-5 pt-4 pb-3 flex items-center gap-3">
        <button onClick={goBack} className="p-1"><ArrowLeft className="h-5 w-5" /></button>
        <h1 className="text-xl font-bold font-bricolage">Notifications</h1>
        <span className="ml-auto text-xs text-[#FF6B6B] font-medium">
          {notifications.filter((n) => !n.read).length} non lues
        </span>
      </div>

      <div className="px-5 space-y-1 pb-8">
        {notifications.map((n) => {
          const config = TYPE_CONFIG[n.type];
          const Icon = config.icon;
          return (
            <div key={n.id} className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${n.read ? "" : "bg-[#FF6B6B]/5"}`}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${config.color}15` }}>
                <Icon className="h-4 w-4" style={{ color: config.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className={`text-sm ${n.read ? "font-medium" : "font-bold"}`}>{n.title}</h3>
                  {!n.read && <span className="w-2 h-2 rounded-full bg-[#FF6B6B] shrink-0" />}
                </div>
                <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{n.message}</p>
                <p className="text-[10px] text-zinc-400 mt-1">{n.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
