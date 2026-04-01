"use client";

import Image from "next/image";
import { MapPin, Maximize2, DoorOpen } from "lucide-react";
import type { Property } from "@/lib/cocoon/cocoon-types";

interface PropertyCardProps {
  property: Property;
  onClick?: () => void;
  variant?: "horizontal" | "vertical";
}

const statusConfig: Record<
  Property["status"],
  { label: string; bg: string; text: string }
> = {
  loue: { label: "Lou\u00e9", bg: "bg-emerald-100", text: "text-emerald-700" },
  disponible: { label: "Disponible", bg: "bg-blue-100", text: "text-blue-700" },
  travaux: { label: "Travaux", bg: "bg-orange-100", text: "text-orange-700" },
};

export default function PropertyCard({
  property,
  onClick,
  variant = "vertical",
}: PropertyCardProps) {
  const status = statusConfig[property.status];

  if (variant === "horizontal") {
    return (
      <button
        onClick={onClick}
        className="w-64 shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm text-left transition-shadow hover:shadow-md"
      >
        <div className="relative h-32 w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          <span
            className={`absolute top-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-semibold ${status.bg} ${status.text}`}
          >
            {status.label}
          </span>
        </div>
        <div className="p-3 space-y-1">
          <h3 className="text-sm font-semibold text-zinc-900 truncate">
            {property.title}
          </h3>
          <p className="flex items-center gap-1 text-xs text-zinc-500 truncate">
            <MapPin size={12} />
            {property.address}
          </p>
          <div className="flex items-center justify-between pt-1">
            <span className="text-sm font-bold text-[#FF6B6B]">
              {property.price.toLocaleString("fr-FR")}&nbsp;&euro;/mois
            </span>
            <div className="flex items-center gap-2 text-[10px] text-zinc-400">
              <span className="flex items-center gap-0.5">
                <Maximize2 size={10} />
                {property.surface}m&sup2;
              </span>
              <span className="flex items-center gap-0.5">
                <DoorOpen size={10} />
                {property.rooms}
              </span>
            </div>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm text-left transition-shadow hover:shadow-md"
    >
      <div className="relative h-40 w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
        <span
          className={`absolute top-2 left-2 rounded-full px-2.5 py-0.5 text-xs font-semibold ${status.bg} ${status.text}`}
        >
          {status.label}
        </span>
      </div>
      <div className="p-4 space-y-1.5">
        <h3 className="text-base font-semibold text-zinc-900 truncate">
          {property.title}
        </h3>
        <p className="flex items-center gap-1 text-xs text-zinc-500 truncate">
          <MapPin size={14} />
          {property.address}, {property.city}
        </p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-base font-bold text-[#FF6B6B]">
            {property.price.toLocaleString("fr-FR")}&nbsp;&euro;/mois
          </span>
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="flex items-center gap-1">
              <Maximize2 size={12} />
              {property.surface}m&sup2;
            </span>
            <span className="flex items-center gap-1">
              <DoorOpen size={12} />
              {property.rooms}p
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
