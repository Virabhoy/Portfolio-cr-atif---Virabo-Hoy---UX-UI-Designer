"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export function FeatureCarousel({ children, className, autoPlay = true, interval = 4000 }: CarouselProps) {
  const [current, setCurrent] = React.useState(Math.floor(children.length / 2));
  const total = children.length;

  const next = React.useCallback(() => {
    setCurrent((i) => (i + 1) % total);
  }, [total]);

  const prev = () => {
    setCurrent((i) => (i - 1 + total) % total);
  };

  React.useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative h-[440px] flex items-center justify-center" style={{ perspective: "1000px" }}>
        {children.map((child, index) => {
          const offset = index - current;
          let pos = ((offset % total) + total) % total;
          if (pos > Math.floor(total / 2)) pos -= total;

          const isCenter = pos === 0;
          const isAdj = Math.abs(pos) === 1;

          return (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${pos * 55}%) scale(${isCenter ? 1 : isAdj ? 0.82 : 0.65}) rotateY(${pos * -12}deg)`,
                zIndex: isCenter ? 10 : isAdj ? 5 : 1,
                opacity: isCenter ? 1 : isAdj ? 0.5 : 0,
                filter: isCenter ? "blur(0px)" : "blur(3px)",
                visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
              }}
            >
              {child}
            </div>
          );
        })}
      </div>

      {/* Nav buttons */}
      <button
        onClick={prev}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
      >
        <ChevronLeft className="h-4 w-4 text-zinc-600" />
      </button>
      <button
        onClick={next}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
      >
        <ChevronRight className="h-4 w-4 text-zinc-600" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-1">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all",
              i === current ? "bg-[#548c2f] w-4" : "bg-zinc-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}
