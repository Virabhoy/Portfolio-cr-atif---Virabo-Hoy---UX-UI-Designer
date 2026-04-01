"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";

type IconComponentType = React.ElementType<{ className?: string }>;

export interface InteractiveMenuItem {
  label: string;
  icon: IconComponentType;
  onClick?: () => void;
}

export interface InteractiveMenuProps {
  items: InteractiveMenuItem[];
  accentColor?: string;
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
}

const InteractiveMenu: React.FC<InteractiveMenuProps> = ({
  items,
  accentColor = "#5B7FD6",
  activeIndex: controlledIndex,
  onActiveChange,
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = controlledIndex ?? internalIndex;

  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    const txt = textRefs.current[activeIndex];
    if (el && txt) {
      el.style.setProperty("--lineWidth", `${txt.offsetWidth}px`);
    }
  }, [activeIndex, items]);

  const handleClick = (index: number) => {
    setInternalIndex(index);
    onActiveChange?.(index);
    items[index]?.onClick?.();
  };

  return (
    <nav
      className="flex items-center justify-around bg-white border-t border-zinc-100 px-2 py-1 w-full"
      style={{ "--menu-accent": accentColor } as React.CSSProperties}
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const IconComp = item.icon;
        return (
          <button
            key={item.label}
            ref={(el) => { itemRefs.current[index] = el; }}
            onClick={() => handleClick(index)}
            className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-300 relative ${
              isActive ? "text-[var(--menu-accent)]" : "text-zinc-400"
            }`}
          >
            <div className={`transition-transform duration-300 ${isActive ? "-translate-y-0.5" : ""}`}>
              <IconComp className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-[var(--menu-accent)]" : "text-zinc-400"}`} />
            </div>
            <strong
              ref={(el) => { textRefs.current[index] = el; }}
              className={`text-[10px] font-medium transition-all duration-300 ${isActive ? "opacity-100" : "opacity-60"}`}
            >
              {item.label}
            </strong>
            {/* Active indicator line */}
            <div
              className={`absolute -bottom-1 h-0.5 rounded-full transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-0 w-0"
              }`}
              style={{
                width: isActive ? "var(--lineWidth, 20px)" : "0px",
                backgroundColor: accentColor,
              }}
            />
          </button>
        );
      })}
    </nav>
  );
};

export { InteractiveMenu };
