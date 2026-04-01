"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { useNavigation } from "@/lib/cocoon/cocoon-context";
import { properties } from "@/lib/cocoon/cocoon-data";
import CocoonSearchBar from "../ui/CocoonSearchBar";
import FilterPills from "../ui/FilterPills";
import PropertyCard from "../ui/PropertyCard";

const TYPES = ["Tous", "Studio", "T2", "T3", "T4", "Maison"];

export default function SearchScreen() {
  const { selectProperty } = useNavigation();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState(0);

  const filtered = properties.filter((p) => {
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.city.toLowerCase().includes(search.toLowerCase());
    const matchType = activeFilter === 0 || p.type === TYPES[activeFilter].toLowerCase();
    return matchSearch && matchType;
  });

  return (
    <div className="h-full overflow-y-auto pb-24">
      <div className="px-5 pt-4 pb-3">
        <h1 className="text-xl font-bold font-bricolage mb-4">Rechercher</h1>
        <CocoonSearchBar placeholder="Ville, adresse, type..." value={search} onChange={setSearch} />
      </div>

      <div className="px-5 mb-4">
        <FilterPills items={TYPES} activeIndex={activeFilter} onSelect={setActiveFilter} />
      </div>

      {/* Fausse carte */}
      <div className="mx-5 mb-4 rounded-2xl bg-[#335c67]/10 border border-[#335c67]/20 p-4 flex items-center gap-3">
        <MapPin className="h-5 w-5 text-[#335c67]" />
        <div>
          <p className="text-sm font-bold">Paris & Île-de-France</p>
          <p className="text-[10px] text-zinc-500">{filtered.length} bien{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}</p>
        </div>
      </div>

      <div className="px-5 space-y-3 pb-4">
        {filtered.map((p) => (
          <PropertyCard key={p.id} property={p} variant="vertical" onClick={() => selectProperty(p.id)} />
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-zinc-400 text-sm">Aucun bien trouvé</div>
        )}
      </div>
    </div>
  );
}
