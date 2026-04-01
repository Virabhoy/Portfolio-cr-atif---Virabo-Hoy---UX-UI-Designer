"use client";

import Image from "next/image";
import { Plus, Edit, Trash2, Mail, Phone } from "lucide-react";
import { recipients } from "@/lib/leave/leave-data";

export default function RecipientsScreen() {
  return (
    <div className="p-6 md:p-10 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold font-bricolage">Mes destinataires</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ffc09f] text-white text-sm font-semibold">
          <Plus className="h-4 w-4" /> Ajouter
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {recipients.map((r) => (
          <div key={r.id} className="rounded-xl border border-zinc-100 bg-white p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fcf5c7] flex items-center justify-center text-sm font-bold">
                  {r.firstName[0]}{r.lastName[0]}
                </div>
                <div>
                  <p className="font-bold text-sm">{r.firstName} {r.lastName}</p>
                  <p className="text-[10px] text-[#ffc09f] font-medium">{r.relation}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button className="p-1.5 rounded-lg hover:bg-zinc-50"><Edit className="h-3.5 w-3.5 text-zinc-400" /></button>
                <button className="p-1.5 rounded-lg hover:bg-red-50"><Trash2 className="h-3.5 w-3.5 text-zinc-400 hover:text-red-500" /></button>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Mail className="h-3 w-3" /> {r.email}
              </div>
              {r.phone && (
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Phone className="h-3 w-3" /> {r.phone}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
