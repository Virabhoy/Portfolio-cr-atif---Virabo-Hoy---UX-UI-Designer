"use client";

import { QrCode, Users, Clock, Wifi, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "@/lib/driiink/driiink-context";

export default function TableScreen() {
  const { totalPrice, totalItems } = useCart();

  return (
    <div className="min-h-full bg-[#FAFAFA] pb-24">
      {/* Header */}
      <div className="bg-white pt-14 px-5 pb-5 border-b border-zinc-100">
        <h1 className="text-xl font-bold font-bricolage text-zinc-900">Ma table</h1>
        <p className="text-sm text-zinc-500 mt-1">Informations et statut de votre session</p>
      </div>

      <div className="px-5 pt-5 space-y-4">
        {/* Table info card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-[#104911]/10 rounded-2xl flex items-center justify-center">
              <QrCode className="h-7 w-7 text-[#104911]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-bricolage text-zinc-900">Table 7</h2>
              <p className="text-sm text-zinc-500">Le Comptoir — Paris, Marais</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-zinc-100">
            <div className="text-center">
              <Users className="h-4 w-4 text-zinc-400 mx-auto mb-1" />
              <p className="text-lg font-bold text-zinc-900">4</p>
              <p className="text-[10px] text-zinc-400">Convives</p>
            </div>
            <div className="text-center">
              <Clock className="h-4 w-4 text-zinc-400 mx-auto mb-1" />
              <p className="text-lg font-bold text-zinc-900">45 min</p>
              <p className="text-[10px] text-zinc-400">Session</p>
            </div>
            <div className="text-center">
              <Wifi className="h-4 w-4 text-[#548c2f] mx-auto mb-1" />
              <p className="text-lg font-bold text-[#548c2f]">Actif</p>
              <p className="text-[10px] text-zinc-400">Statut</p>
            </div>
          </div>
        </motion.div>

        {/* Order summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm"
        >
          <h3 className="font-bold text-sm text-zinc-900 mb-3">Récapitulatif</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">Articles commandés</span>
              <span className="font-semibold text-zinc-900">{totalItems}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">Total de la table</span>
              <span className="font-bold text-lg text-zinc-900">{totalPrice.toFixed(2)}&euro;</span>
            </div>
            <div className="h-px bg-zinc-100" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">Statut commande</span>
              <span className="text-xs font-medium bg-[#548c2f]/10 text-[#548c2f] px-2.5 py-1 rounded-full">
                {totalItems > 0 ? "En préparation" : "Aucune commande"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden"
        >
          {[
            { label: "Partager la table", desc: "Envoyer le lien à vos amis", icon: Users },
            { label: "Appeler un serveur", desc: "Demander de l'aide", icon: Wifi },
            { label: "Historique des commandes", desc: "Voir les commandes passées", icon: Clock },
          ].map((action, i) => (
            <button
              key={i}
              className="flex items-center gap-3 w-full px-5 py-4 text-left hover:bg-zinc-50 transition-colors border-b border-zinc-50 last:border-0"
            >
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0">
                <action.icon className="h-5 w-5 text-zinc-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-900">{action.label}</p>
                <p className="text-xs text-zinc-400">{action.desc}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-zinc-300 shrink-0" />
            </button>
          ))}
        </motion.div>

        {/* QR Code */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm text-center"
        >
          <div className="w-24 h-24 bg-zinc-100 rounded-2xl mx-auto mb-3 flex items-center justify-center">
            <QrCode className="h-12 w-12 text-zinc-400" />
          </div>
          <p className="text-xs text-zinc-400">Scannez pour rejoindre cette table</p>
        </motion.div>
      </div>
    </div>
  );
}
