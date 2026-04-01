"use client";

interface FilterPillsProps {
  items: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function FilterPills({
  items,
  activeIndex,
  onSelect,
}: FilterPillsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
      {items.map((item, index) => (
        <button
          key={item}
          onClick={() => onSelect(index)}
          className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
            index === activeIndex
              ? "bg-[#FF6B6B] text-white"
              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
