"use client";

import { Search, X } from "lucide-react";

interface CocoonSearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function CocoonSearchBar({
  placeholder = "Rechercher...",
  value,
  onChange,
}: CocoonSearchBarProps) {
  return (
    <div className="relative flex items-center">
      <Search
        size={16}
        className="absolute left-3 text-zinc-400 pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly
        className="h-10 w-full rounded-full bg-zinc-100 pl-9 pr-9 text-sm text-zinc-700 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-[#FF6B6B]/30 transition-shadow cursor-default"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 text-zinc-400 hover:text-zinc-600 transition-colors"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
