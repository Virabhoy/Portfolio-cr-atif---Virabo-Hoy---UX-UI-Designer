"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, Heart, Share2, Bed, Maximize, Layers, MapPin, CheckCircle2, MessageSquare } from "lucide-react";
import { useCocoon, useNavigation } from "@/lib/cocoon/cocoon-context";
import { getPropertyById, getTenantForProperty } from "@/lib/cocoon/cocoon-data";

const STATUS_MAP = {
  loue: { label: "Loué", bg: "bg-green-100", text: "text-green-700" },
  disponible: { label: "Disponible", bg: "bg-blue-100", text: "text-blue-700" },
  travaux: { label: "En travaux", bg: "bg-orange-100", text: "text-orange-700" },
};

export default function PropertyDetailScreen() {
  const { state } = useCocoon();
  const { goBack, navigate } = useNavigation();
  const property = getPropertyById(state.selectedPropertyId || "");
  const tenant = property ? getTenantForProperty(property.id) : undefined;

  if (!property) return <div className="p-5 text-center text-zinc-400">Bien non trouvé</div>;

  const status = STATUS_MAP[property.status];

  return (
    <div className="h-full overflow-y-auto">
      {/* Image hero */}
      <div className="relative h-56">
        <Image src={property.image} alt={property.title} fill className="object-cover" sizes="400px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <button onClick={goBack} className="w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center"><Heart className="h-4 w-4" /></button>
            <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center"><Share2 className="h-4 w-4" /></button>
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className={`${status.bg} ${status.text} text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`}>{status.label}</span>
        </div>
      </div>

      <div className="px-5 py-5 space-y-5 pb-8">
        {/* Title + Price */}
        <div>
          <h1 className="text-xl font-bold font-bricolage">{property.title}</h1>
          <div className="flex items-center gap-1 text-zinc-500 text-sm mt-1">
            <MapPin className="h-3.5 w-3.5" />
            <span>{property.address}, {property.city}</span>
          </div>
          <p className="text-2xl font-bold text-[#FF6B6B] font-bricolage mt-2">{property.price}€<span className="text-sm font-normal text-zinc-400">/mois</span></p>
        </div>

        {/* Key info */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-50 p-3 text-center">
            <Bed className="h-4 w-4 mx-auto text-zinc-500 mb-1" />
            <p className="text-sm font-bold">{property.rooms}</p>
            <p className="text-[10px] text-zinc-400">Pièces</p>
          </div>
          <div className="rounded-xl bg-zinc-50 p-3 text-center">
            <Maximize className="h-4 w-4 mx-auto text-zinc-500 mb-1" />
            <p className="text-sm font-bold">{property.surface}m²</p>
            <p className="text-[10px] text-zinc-400">Surface</p>
          </div>
          <div className="rounded-xl bg-zinc-50 p-3 text-center">
            <Layers className="h-4 w-4 mx-auto text-zinc-500 mb-1" />
            <p className="text-sm font-bold">{property.floor === 0 ? "RDC" : `${property.floor}e`}</p>
            <p className="text-[10px] text-zinc-400">Étage</p>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-bold text-sm mb-2">Description</h3>
          <p className="text-sm text-zinc-600 leading-relaxed">{property.description}</p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-bold text-sm mb-2">Caractéristiques</h3>
          <div className="flex flex-wrap gap-2">
            {property.features.map((f, i) => (
              <span key={i} className="flex items-center gap-1 text-xs bg-[#FF6B6B]/5 text-[#FF6B6B] px-3 py-1.5 rounded-full border border-[#FF6B6B]/10">
                <CheckCircle2 className="h-3 w-3" /> {f}
              </span>
            ))}
          </div>
        </div>

        {/* Tenant info */}
        {tenant && (
          <div className="rounded-xl border border-zinc-200 p-4">
            <h3 className="font-bold text-sm mb-2">Locataire actuel</h3>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src={tenant.avatar} alt={tenant.name} fill className="object-cover" sizes="40px" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">{tenant.name}</p>
                <p className="text-[10px] text-zinc-500">Depuis {new Date(tenant.moveInDate).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}</p>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${tenant.rentStatus === "ok" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {tenant.rentStatus === "ok" ? "À jour" : "En retard"}
              </span>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => navigate("management")} className="py-3 rounded-full bg-[#FF6B6B] text-white text-sm font-semibold">
            Gérer ce bien
          </button>
          <button onClick={() => navigate("messages")} className="py-3 rounded-full border border-zinc-200 text-sm font-semibold flex items-center justify-center gap-2">
            <MessageSquare className="h-4 w-4" /> Contacter
          </button>
        </div>
      </div>
    </div>
  );
}
