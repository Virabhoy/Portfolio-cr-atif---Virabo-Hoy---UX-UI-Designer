"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Video, Mic, Mail, Plus, Clock, Bell, Shield, Users, Send, Heart, ArrowRight } from "lucide-react";
import { useLeaveNav } from "@/lib/leave/leave-context";
import { messages, recipients, getActiveMessages, getDraftMessages } from "@/lib/leave/leave-data";

const TYPE_ICONS = { video: Video, audio: Mic, letter: Mail };
const TYPE_COLORS = { video: "#ffc09f", audio: "#a0ced9", letter: "#adf7b6" };
const ILL = "/images/projects/leave/illustrations";

export default function DashboardScreen() {
  const { navigate } = useLeaveNav();
  const active = getActiveMessages();
  const drafts = getDraftMessages();

  return (
    <div className="h-full overflow-y-auto p-4 md:p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-grandstander), cursive" }}>
          Bienvenue, Jean
        </h1>
        <p className="text-sm text-zinc-500 mt-1">Gérez vos messages et destinataires en toute sérénité.</p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">

        {/* ── Mes messages — Large 2x2 ── */}
        <motion.div whileHover={{ scale: 1.01 }} onClick={() => navigate("my-messages")}
          className="col-span-2 row-span-2 rounded-xl border border-zinc-200 bg-gradient-to-br from-[#ffc09f]/5 to-white p-4 md:p-5 cursor-pointer hover:shadow-lg transition-shadow group">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Send className="h-5 w-5 text-zinc-500 group-hover:text-[#5B7FD6] transition-colors" />
              <h3 className="text-sm md:text-base font-semibold font-bricolage">Mes messages</h3>
            </div>
            <span className="text-[10px] text-zinc-400">{active.length} actifs · {drafts.length} brouillon</span>
          </div>
          <div className="space-y-2">
            {messages.map((msg) => {
              const Icon = TYPE_ICONS[msg.type];
              const color = TYPE_COLORS[msg.type];
              return (
                <div key={msg.id} className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-zinc-100">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}30` }}>
                    <Icon className="h-4 w-4" style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium truncate">{msg.title}</p>
                    <p className="text-[9px] text-zinc-400 truncate">{msg.recipients.map(r => r.firstName).join(", ")}</p>
                  </div>
                  <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${msg.status === "active" ? "bg-[#adf7b6]/40 text-green-700" : "bg-zinc-100 text-zinc-500"}`}>
                    {msg.status === "active" ? "Actif" : "Brouillon"}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs text-[#5B7FD6] font-medium flex items-center gap-1">Voir tout <ArrowRight className="h-3 w-3" /></span>
          </div>
        </motion.div>

        {/* ── Créer ── */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => navigate("create-message")}
          className="col-span-1 rounded-xl bg-[#5B7FD6] text-white p-4 md:p-5 cursor-pointer hover:shadow-lg transition-shadow relative overflow-hidden">
          <Plus className="h-6 w-6 mb-2" />
          <h3 className="text-sm font-semibold font-bricolage">Créer</h3>
          <p className="text-[10px] text-white/70 mt-1">Nouveau message</p>
          <Video className="absolute bottom-2 right-2 w-16 h-16 text-white/10" />
        </motion.div>

        {/* ── Destinataires ── */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => navigate("recipients")}
          className="col-span-1 rounded-xl border border-zinc-200 bg-[#a0ced9]/5 p-4 md:p-5 cursor-pointer hover:shadow-lg transition-shadow">
          <Users className="h-5 w-5 text-zinc-500 mb-2" />
          <h3 className="text-sm font-semibold font-bricolage">Destinataires</h3>
          <p className="text-[10px] text-zinc-500 mt-1">{recipients.length} contacts</p>
          <div className="flex -space-x-1.5 mt-3">
            {recipients.slice(0, 3).map((r) => (
              <div key={r.id} className="w-6 h-6 rounded-full bg-[#fcf5c7] border-2 border-white flex items-center justify-center text-[8px] font-bold text-zinc-600">
                {r.firstName[0]}
              </div>
            ))}
            <div className="w-6 h-6 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-zinc-400">
              +{recipients.length - 3}
            </div>
          </div>
        </motion.div>

        {/* ── Contrôle ── */}
        <motion.div whileHover={{ scale: 1.03 }}
          className="col-span-1 rounded-xl border border-zinc-200 bg-[#fcf5c7]/20 p-4 md:p-5 cursor-pointer hover:shadow-lg transition-shadow">
          <Clock className="h-5 w-5 text-zinc-500 mb-2" />
          <h3 className="text-sm font-semibold font-bricolage">Contrôle</h3>
          <p className="text-[10px] text-zinc-500 mt-1">Prochain dans 12 jours</p>
          <p className="text-2xl font-bold text-[#D4A853]/20 mt-2" style={{ fontFamily: "var(--font-grandstander)" }}>12j</p>
        </motion.div>

        {/* ── Sécurité ── */}
        <motion.div whileHover={{ scale: 1.03 }}
          className="col-span-1 rounded-xl border border-zinc-200 bg-[#adf7b6]/5 p-4 md:p-5 cursor-pointer hover:shadow-lg transition-shadow">
          <Shield className="h-5 w-5 text-zinc-500 mb-2" />
          <h3 className="text-sm font-semibold font-bricolage">Sécurité</h3>
          <p className="text-[10px] text-zinc-500 mt-1">Chiffrement activé</p>
          <div className="mt-2 w-8 h-8 rounded-full bg-[#adf7b6]/30 flex items-center justify-center">
            <Shield className="w-4 h-4 text-green-600" />
          </div>
        </motion.div>

        {/* ── Mon offre ── */}
        <motion.div whileHover={{ scale: 1.02 }} onClick={() => navigate("pricing")}
          className="col-span-1 md:col-span-2 rounded-xl border border-zinc-200 bg-gradient-to-r from-[#F5C6D0]/10 to-[#ffc09f]/5 p-4 md:p-5 cursor-pointer hover:shadow-lg transition-shadow flex items-center gap-4">
          <div className="flex-1">
            <Heart className="h-5 w-5 text-zinc-500 mb-2" />
            <h3 className="text-sm font-semibold font-bricolage">Mon offre</h3>
            <p className="text-[10px] text-zinc-500 mt-1">Message illimité · 149€ TTC</p>
          </div>
          <Image src={`${ILL}/thumbs-up.png`} alt="" width={60} height={60} className="h-[50px] w-auto object-contain opacity-50" />
        </motion.div>

        {/* ── Aide ── */}
        <motion.div whileHover={{ scale: 1.02 }} onClick={() => navigate("help")}
          className="col-span-1 md:col-span-2 rounded-xl border border-zinc-200 bg-[#E8EDF4]/20 p-4 md:p-5 cursor-pointer hover:shadow-lg transition-shadow flex items-center gap-4">
          <div className="flex-1">
            <Bell className="h-5 w-5 text-zinc-500 mb-2" />
            <h3 className="text-sm font-semibold font-bricolage">Aide & Support</h3>
            <p className="text-[10px] text-zinc-500 mt-1">FAQ, blog et assistance</p>
          </div>
          <Image src={`${ILL}/customer-service.png`} alt="" width={60} height={60} className="h-[50px] w-auto object-contain opacity-40" />
        </motion.div>
      </div>
    </div>
  );
}
